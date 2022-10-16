import { HpDebugFlags, logInfo } from '@avantia/questionset-model';
import { hotjar } from 'react-hotjar';
import { ClientConfiguration } from '../interfaces/configuration';

export function configureHotjar(config: ClientConfiguration): void {
  const { hotjarEnabled, hotjarId, hotjarTrackingCode } = config;
  if (!hotjarEnabled || isNaN(hotjarId) || hotjarId === 0) {
    return;
  }

  logInfo(`Configuring Hotjar with ${JSON.stringify({ hotjarId, hotjarTrackingCode })}`, HpDebugFlags.Configuration);
  hotjar.initialize(hotjarId, hotjarTrackingCode);
}
