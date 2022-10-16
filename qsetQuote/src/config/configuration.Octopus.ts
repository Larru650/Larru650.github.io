import { isTrue } from '@avantia/client-and-server-utilities';
import { toDebugFlags } from '@avantia/questionset-model';
import lodash from 'lodash';
import { ClientConfiguration } from '../interfaces/configuration';

export function getConfig(): ClientConfiguration {
  const virtualPath = lodash.trimEnd('#{WEBSITE_ENDPOINT}', '/');
  const config: ClientConfiguration = {
    answersKey: 'answersId',
    ddApplicationId: '#{DD_APPLICATION_ID}',
    ddClientToken: '#{DD_CLIENT_TOKEN}',
    ddRumEnabled: isTrue('#{DD_RUM_ENABLED}'),
    debugFlags: toDebugFlags('#{DEBUG_FLAGS}'),
    developerModeEnabled: isTrue('#{DEVELOPER_MODE_ENABLED}'),
    environment: '#{ENVIRONMENT}',
    optimisationEnabled: isTrue('#{OPTIMISATION_ENABLED}'),
    gtmEnabled: isTrue('#{GTM_ENABLED}'),
    homeProtectHomepageEnabled: isTrue('#{HOME_PROTECT_HOMEPAGE_ENABLED}'),
    hotjarEnabled: isTrue('#{HOTJAR_ENABLED}'),
    hotjarId: parseFloat('#{HOTJAR_ID}'),
    hotjarTrackingCode: parseFloat('#{HOTJAR_TRACKING_CODE}'),
    questionSetKey: 'questionSetId',
    releaseVersion: '#{RELEASE_VERSION}',
    virtualPath,
    websiteEndpoint: virtualPath
  };

  return config;
}
