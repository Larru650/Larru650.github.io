import { templateResolver } from '@avantia/client-and-server-utilities';
import { displayTimeTaken, HpDebugFlags, MicroTimer } from '@avantia/questionset-model';
import { logError } from '@avantia/server-base';
import axios from 'axios';
import https from 'https';
import { getConfig } from '../configuration';
import { NhiQuote } from './interfaces';

const baseUrl = getConfig().quoteAndBuyServiceUri;
const getQuoteUrl = `${baseUrl}Questions/GetQuoteData{{segmentName}}?quoteGuid={{quoteGuid}}&_={{timeStamp}}`;

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

type QuoteSegmentNames = 'YourDetails' | 'YourContents' | 'YourHome';

export function getQuoteSegment(segmentName: QuoteSegmentNames, quoteGuid: string): Promise<object> {
  const timer = new MicroTimer().start();
  const url = templateResolver(getQuoteUrl, { segmentName, quoteGuid, timeStamp: new Date().getTime() });
  const promise = new Promise<object>((resolve, reject) => {
    axiosInstance
      .get<NhiQuote<object>>(url)
      .then((resp) => {
        const { data: respData, status } = resp;
        const { Success: success, Error: errors, Data: data } = respData;
        if (success && status === 200) {
          displayTimeTaken(`Get section ${'YourDetails'}`, timer, HpDebugFlags.UnitTests);
          resolve(data);
        } else {
          reject({ success, status, errors, quoteGuid });
        }
      })
      .catch(reject);
  });

  promise.catch((err) => {
    logError(typeof err === 'string' ? `Failed to get ${segmentName} segment: ${err}` : JSON.stringify(err, null, 2));
  });

  return promise;
}

export function removeProperties(obj: any, properties: string[]): any {
  for (const property in obj) {
    if (properties.includes(property)) {
      delete obj[property];
    } else if (typeof obj[property] === 'object') {
      removeProperties(obj[property], properties);
    }
  }
}
