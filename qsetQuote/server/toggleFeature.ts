import { voidFunction } from '@avantia/client-and-server-utilities';
import { FeatureToggleApiProvider } from '@avantia/feature-toggles';
import { logDebug } from '@avantia/server-base';
import { Request, Response } from 'express';
import { ServerConfiguration } from './configuration';
import { FeatureInputProps } from './interfaces';

const toggleApi = new FeatureToggleApiProvider();
let isSetup = false;

export function toggleFeature({ config, router }: FeatureInputProps): void {
  if (!isSetup) {
    isSetup = true;
    configureToggleFeature(config);
  }

  router.get('/api/featureToggle/:featureName', (req: Request, res: Response) => {
    const { featureName } = req.params;
    toggleApi.evaluateBooleanToggleValue({ applicationName: config.applicationName, name: featureName }, isEnabled => {
      res.send({ featureName, isEnabled });
    });
  });
}

function configureToggleFeature(config: ServerConfiguration): void {
  toggleApi.setConfiguration({
    serviceEndpointUrl: config.featureToggleServiceUri,
    exceptionValidityWindow: config.featureToggleExceptionValidityWindow,
    logDebug: config.developerModeEnabled ? logDebug : voidFunction
  });
}
