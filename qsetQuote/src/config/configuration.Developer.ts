import { HpDebugFlags } from '@avantia/questionset-model';
import { ClientConfiguration } from '../interfaces/configuration';

const virtualPath = '';

export function getConfig(): ClientConfiguration {
  const cfg: ClientConfiguration = {
    answersKey: 'answersId',
    ddApplicationId: '0554b446-b12d-496d-8f17-d8a3780bc772',
    ddClientToken: 'pub39f12a277235769599c2c429bbf21098',
    ddRumEnabled: false,
    debugFlags: HpDebugFlags.TimeTaken | HpDebugFlags.Configuration,
    developerModeEnabled: true,
    environment: 'developer',
    optimisationEnabled: true,
    gtmEnabled: false,
    homeProtectHomepageEnabled: true,
    hotjarEnabled: false,
    hotjarId: 0,
    hotjarTrackingCode: 0,
    questionSetKey: 'questionSetId',
    releaseVersion: '0.0.1',
    virtualPath,
    websiteEndpoint: virtualPath
  };
  return cfg;
}
