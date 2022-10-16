import { Request, Response } from 'express';
import { addResponseHeaders, clearSessionData } from './commonFunctions';
import { FeatureInputProps } from './interfaces';

export function commonFeatures({ config, router, adfsPassport, adfsCallbackPath }: FeatureInputProps): void {
  const { isAfdsAuthenticationEnabled } = config;

  if (isAfdsAuthenticationEnabled) {
    router.get('/api/AuthenticatedUser', adfsPassport.sendAuthenticatedUser(addResponseHeaders));
  } else {
    router.get('/api/AuthenticatedUser', (req, res) => {
      res.send({ success: false, message: 'Authentication is not enabled' });
    });
  }

  router.post(adfsCallbackPath, adfsPassport.authenticationCallback());

  router.post(
    '/api/logoff',
    adfsPassport.authenticate((req: Request, res: Response) => {
      clearSessionData(req, () => {
        res.status(200).send({ success: true });
      });
    })
  );

  router.get('/api/healthcheck', (_, res) => {
    res.status(200).send({
      success: true,
      timeStamp: new Date().toISOString()
    });
  });
}
