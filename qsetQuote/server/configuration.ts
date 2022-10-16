import lodash from 'lodash';

const ApplicationName = 'Avantia.QuestionSetPortal.Website';

export interface ServerConfiguration {
  applicationName: string;
  serverPort: number;
  websiteEndpoint: string;
  addressLookupServiceUri: string;
  featureToggleServiceUri: string;
  quoteAndBuyServiceUri: string;
  featureToggleExceptionValidityWindow: string;
  adfsRealmUri: string;
  isAfdsAuthenticationEnabled: boolean;
  adfsIssuerUri: string;
  adfsIssuerThumbprint: string;
  useSecureServer: boolean;
  developerModeEnabled: boolean;
  serveStaticContent: boolean;
  databaseEndpoint: string;
  databaseKey: string;
  databaseName: string;
  databaseCollectionName: string;
  useFilePersistence: boolean;
  ddTraceEnabled: boolean;
  environment: string;
  maxCookieAgeMs: number;
  cookieName: string;
}

let config: ServerConfiguration;

function getConfig(): ServerConfiguration {
  if (config) {
    return config;
  }

  const cfg = getEnvSettingsFromFile();
  const getCfg = (name: string): string => getConfigValue(name, cfg) as string;
  let endpoint = lodash.trim(getCfg('WEBSITE_ENDPOINT') || '', '/');
  endpoint = !endpoint ? '' : '/' + endpoint;
  const result: ServerConfiguration = {
    applicationName: ApplicationName,
    serverPort: parseInt(getCfg('SERVER_PORT'), 10),
    websiteEndpoint: endpoint,
    environment: getCfg('ENVIRONMENT'),
    addressLookupServiceUri: getCfg('ADDRESS_LOOKUP_SERVICE_URI'),
    featureToggleServiceUri: getCfg('FEATURE_TOGGLE_SERVICE_URI'),
    featureToggleExceptionValidityWindow: getCfg('FEATURE_TOGGLE_EXCEPTION_VALIDITY_WINDOW'),
    quoteAndBuyServiceUri: getCfg('QUOTE_AND_BUY_SERVICE_URI'),
    adfsRealmUri: getCfg('SCHEME_AND_HOST') + endpoint + '/',
    isAfdsAuthenticationEnabled: isTrue(getCfg('ADFS_AUTH_ENABLED')),
    adfsIssuerUri: getCfg('ADFS_ISSUER_URI'),
    adfsIssuerThumbprint: getCfg('ADFS_ISSUER_THUMBPRINT'),
    useSecureServer: isTrue(getCfg('USE_SECURE_SERVER')),
    developerModeEnabled: isTrue(getCfg('DEVELOPER_MODE_ENABLED')),
    serveStaticContent: isTrue(getCfg('SERVE_STATIC_CONTENT')),
    databaseEndpoint: getCfg('DATABASE_ENDPOINT'),
    databaseKey: getCfg('DATABASE_KEY'),
    databaseName: getCfg('DATABASE_NAME'),
    databaseCollectionName: getCfg('DATABASE_COLLECTION_NAME'),
    useFilePersistence: isTrue(getCfg('USE_FILE_PERSISTENCE')),
    ddTraceEnabled: isTrue(getCfg('DD_TRACE_ENABLED')),
    maxCookieAgeMs: 30 * 24 * 60 * 60 * 1000,
    cookieName: 'avantiaId'
  };

  config = result; // cache it
  return result;
}

export { getConfig };
