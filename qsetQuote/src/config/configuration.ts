import { HpDebugFlags, logInfo, setDebugFlags } from '@avantia/questionset-model';
import { ClientConfiguration } from '../interfaces/configuration';
import { getConfig as getSpecificConfig } from './configuration.Developer';

let cfg: ClientConfiguration | undefined = undefined;

export function getConfig(): ClientConfiguration {
  if (cfg) {
    return cfg;
  }

  const config = getSpecificConfig();
  setDebugFlags(config.debugFlags);

  logInfo(config, HpDebugFlags.Configuration);

  cfg = config;
  return config;
}
