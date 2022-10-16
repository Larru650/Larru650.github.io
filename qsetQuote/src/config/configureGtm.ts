import { HpDebugFlags, logInfo } from '@avantia/questionset-model';
import TagManager, { TagManagerArgs } from 'react-gtm-module';
import { ClientConfiguration } from '../interfaces/configuration';
import { startGtmEventHandler } from '../tools/gtmEventHandler';

export function configureGtm(config: ClientConfiguration): void {
  const { gtmEnabled } = config;
  if (!gtmEnabled) {
    return;
  }

  const gtmOptions: TagManagerArgs = {
    gtmId: 'GTM-5LMZFVW'
  };

  logInfo(`Configuring GTM with ${JSON.stringify(gtmOptions)}`, HpDebugFlags.Configuration);
  TagManager.initialize(gtmOptions);

  startGtmEventHandler();
}
