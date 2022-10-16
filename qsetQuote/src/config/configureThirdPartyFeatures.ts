import { ClientConfiguration } from '../interfaces/configuration';
import { configureDataDog } from './configureDataDog';
import { configureGtm } from './configureGtm';
import { configureHotjar } from './configureHotjar';

export function configureThirdPartyFeatures(config: ClientConfiguration): void {
  configureDataDog(config);
  configureGtm(config);
  configureHotjar(config);
}
