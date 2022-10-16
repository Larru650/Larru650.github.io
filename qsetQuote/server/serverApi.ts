import { AdfsFacade, getDefaultAdfsPassport, getVoidAdfsPassport } from '@avantia/adfs-facade';
import { SMap } from '@avantia/client-and-server-utilities';
import { configureLogging, getStaticPath, logDebug, logInfo, sendStaticFile } from '@avantia/server-base';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import express, { Express, Request, Response, Router } from 'express';
import session from 'express-session';
import fs from 'fs';
import lodash from 'lodash';
import path from 'path';
import spdy from 'spdy';
import { v4 as uuid } from 'uuid';
import { CloudPersistenceService } from './cloudPersistenceService';
import { addHeadersAndCookies, getNameOfFunction } from './commonFunctions';
import { ServerConfiguration } from './configuration';
import { FilePersistenceService } from './filePersistenceService';
import { FeatureFunction, PersistenceService } from './interfaces';
import { QuestionSetFeatureResponse } from './questionSetFeature';

declare const __dirname: string;

export interface SetupConfigProp {
  config: ServerConfiguration;
}

export interface FeatureResponseMapProp {
  featureResponseMap: SMap<unknown>;
}

export interface SetupExpressResponse {
  app: Express;
  router: Router;
  adfsPassport: AdfsFacade;
  adfsCallbackPath: string;
  staticPath: string;
}

export function setupExpress({ config }: SetupConfigProp): SetupExpressResponse {
  configureLogging({ debugMode: config.developerModeEnabled, masks: [] });
  logDebug({ configuration: config });

  const { developerModeEnabled } = config;
  const staticPath = config.serveStaticContent ? getStaticPath({ basePath: __dirname }) : '';
  const app = express();
  const router = express.Router();
  const adfsCallbackPath = '/adfsCallback';
  const realmUriTrimmed = lodash.trimEnd(config.adfsRealmUri, '/');
  const realmUri = realmUriTrimmed + '/'; // the URI in ADFS must end consistently with a trailing slash.
  const callbackUri = `${realmUriTrimmed}${adfsCallbackPath}`;
  const sessionSecret = `secret-${uuid()}`;
  const isK8s = !!config.environment && ['developer', 'docker-dev'].indexOf(config.environment) < 0;
  const adfsPassport: AdfsFacade = config.isAfdsAuthenticationEnabled
    ? getDefaultAdfsPassport()
    : getVoidAdfsPassport();

  // https://github.com/expressjs/session
  const sessionOptions: session.SessionOptions = {
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      // maxAge: maxCookieAgeMs,
      secure: isK8s
    }
  };

  logInfo({
    isK8s,
    staticPath,
    sessionOptions
  });

  if (isK8s) {
    app.set('trust proxy', 1);
  }

  app.disable('x-powered-by');
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(bodyParser.json());
  app.use(compression());
  if (config.isAfdsAuthenticationEnabled) {
    adfsPassport.setup(
      app,
      {
        realmUri,
        issuerUri: config.adfsIssuerUri,
        callbackUri,
        issuerThumbprint: config.adfsIssuerThumbprint,
        sessionSecret,
        enableAdfs: true,
        debugMode: developerModeEnabled
      },
      sessionOptions
    );
  } else {
    logInfo('Using void adfsPassport implementation');
    adfsPassport.setup(app, undefined, sessionOptions);
  }

  app.use(router);

  app.use('/homepage', router);

  app.use(config.websiteEndpoint || '/', router);
  return { app, router, adfsPassport, adfsCallbackPath, staticPath };
}

export function createPersistenceService({
  config,
  staticPath
}: SetupExpressResponse & SetupConfigProp): PersistenceService {
  const { useFilePersistence, databaseEndpoint, databaseKey, databaseName, databaseCollectionName } = config;
  if (useFilePersistence) {
    return new FilePersistenceService(staticPath);
  } else {
    return new CloudPersistenceService({
      databaseEndpoint,
      databaseKey,
      databaseName,
      collectionName: databaseCollectionName
    });
  }
}

export function addServerFeatures(
  props: SetupExpressResponse & SetupConfigProp & { persistenceService: PersistenceService },
  features: FeatureFunction[]
): SMap<unknown> {
  const featureResponseMap: SMap<unknown> = {};
  features.map(fn => {
    const res = fn(props);
    if (res !== undefined) {
      const key = getNameOfFunction(fn).replace('Feature', '');
      featureResponseMap[key] = res;
    }
  });

  return featureResponseMap;
}

export function setupServingStaticContent({
  config,
  router,
  staticPath,
  adfsPassport,
  featureResponseMap,
  indexHandler
}: SetupExpressResponse &
  SetupConfigProp &
  FeatureResponseMapProp & { indexHandler: IndexHandlerFunction | undefined }): void {
  const { serveStaticContent, cookieName, maxCookieAgeMs, developerModeEnabled } = config;

  const indexPath = path.join(staticPath, 'index.html');
  if (serveStaticContent) {
    router.get(
      '/*',
      adfsPassport.authenticate((req: Request, res: Response) => {
        sendStaticFile({
          requestedUrl: req.url,
          indexPath,
          staticPath,
          res,
          responseModifier: ({ filePath, isIndex }) => {
            addHeadersAndCookies(req, res, {
              cookieName,
              maxCookieAgeMs,
              cookieValueOverride: undefined,
              isCookieHttpOnly: !developerModeEnabled
            });
            let isHandled = false;
            if (isIndex) {
              isHandled = (indexHandler || defaultIndexHandler)({
                req,
                res,
                featureResponseMap,
                filePath,
                developerModeEnabled
              });
            }

            return isHandled;
          }
        });
      })
    );
  }
}

export function startServer({ config, app }: SetupExpressResponse & SetupConfigProp): void {
  const { serverPort: port, useSecureServer } = config;
  if (!useSecureServer) {
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  } else {
    spdy
      .createServer(
        {
          key: fs.readFileSync('./certs/dev-key.pem'),
          cert: fs.readFileSync('./certs/dev-cert.pem'),
          passphrase: 'alpha1'
        },
        app
      )
      .listen(port, () => {
        console.log(`Secure Server running on port ${port}`);
      });
  }
}

export interface IndexHandlerProps {
  req: Request;
  res: Response;
  filePath: string;
  featureResponseMap: SMap<unknown>;
  developerModeEnabled: boolean;
}

export type IndexHandlerFunction = (props: IndexHandlerProps) => boolean;

export function defaultIndexHandler({
  req,
  res,
  filePath,
  featureResponseMap,
  developerModeEnabled
}: IndexHandlerProps): boolean {
  const answersId = req.cookies['answersId'];
  const questionSetId = req.cookies['questionSetId'];
  // const coverType = req.cookies['coverType'];
  console.log(req);

  if (answersId && questionSetId) {
    const { getAnswers } = (featureResponseMap['questionSet'] as QuestionSetFeatureResponse) || {};
    if (!getAnswers) {
      throw new Error(`The questionSetFeature should have returned a function named 'getAnswers'.`);
    }

    getAnswers(questionSetId, answersId)
      .then(answerResp => {
        let content = String(fs.readFileSync(filePath));
        content = content.replace(
          '</head>',
          '  <script>\n  var answerData = ' +
            JSON.stringify(answerResp, null, developerModeEnabled ? 2 : 0) +
            ';\n  </script>\n</head>'
        );
        res.send(content);
      })
      .catch(err => {
        res.status(500).send({ success: false, message: err.message || err });
      });
    return true;
  }

  return false;
}
