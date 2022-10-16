import { getStaticPath } from '@avantia/server-base';
import fs from 'fs';
import path from 'path';
import { FeatureInputProps } from './interfaces';

declare const __dirname: string;

export function homepageFeature({ config, router }: FeatureInputProps): void {
  const homepagePath = config.serveStaticContent
    ? path.join(getStaticPath({ basePath: __dirname }), 'homepage.html')
    : path.join(__dirname, '../public/homepage.html');
  const baseUrl = config.serveStaticContent ? '/' : 'http://localhost:3000/';

  let html;
  fs.readFile(homepagePath, 'utf8', (err, data) => {
    if (err) {
      throw new Error(`Failed to read the homepage file: ${err}`);
    }
    html = data.replace(/{{baseUrl}}/g, baseUrl);
  });

  router.get('/homepage', (req, res) => {
    res.status(200).send(html);
  });
}
