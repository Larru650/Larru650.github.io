import { HpDebugFlags, logInfo } from '@avantia/questionset-model';
import { datadogRum, RumUserConfiguration } from '@datadog/browser-rum';
import { ClientConfiguration } from '../interfaces/configuration';

export function configureDataDog(config: ClientConfiguration): void {
  const { ddRumEnabled, ddClientToken, ddApplicationId } = config;
  if (!ddRumEnabled) {
    return;
  }

  const rumConfig: RumUserConfiguration = {
    clientToken: ddClientToken,
    applicationId: ddApplicationId,
    datacenter: 'eu',
    resourceSampleRate: 100,
    sampleRate: 100
  };
  logInfo(`Configuring DataDog with ${JSON.stringify(rumConfig)}`, HpDebugFlags.Configuration);
  datadogRum.init(rumConfig);
}
