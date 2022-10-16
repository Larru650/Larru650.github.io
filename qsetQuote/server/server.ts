import { configureLogging } from '@avantia/server-base';
import { addressLookupFeature } from './addressLookupFeature';
import { commonFeatures } from './commonFeatures';
import { getConfig } from './configuration';
import { homepageFeature } from './homepageFeature';
import { questionSetFeature } from './questionSetFeature';
import {
  addServerFeatures,
  createPersistenceService,
  setupExpress,
  setupServingStaticContent,
  startServer
} from './serverApi';
import { toggleFeature } from './toggleFeature';
import { verifyPackageVersions } from './verifyPackageVersions';

const config = getConfig();
const { developerModeEnabled } = config;

configureLogging({ debugMode: developerModeEnabled, masks: [] });

if (developerModeEnabled) {
  verifyPackageVersions();
}

const expressResp = setupExpress({ config });
const persistenceService = createPersistenceService({ config, ...expressResp });
const featureResponseMap = addServerFeatures({ config, persistenceService, ...expressResp }, [
  commonFeatures,
  toggleFeature,
  questionSetFeature,
  addressLookupFeature,
  homepageFeature
]);
setupServingStaticContent({ config, featureResponseMap, indexHandler: undefined, ...expressResp });
startServer({ config, ...expressResp });
