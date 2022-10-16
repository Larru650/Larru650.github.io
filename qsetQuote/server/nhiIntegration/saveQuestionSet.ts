import { templateResolver } from '@avantia/client-and-server-utilities';
import {
  displayTimeTaken,
  HpDebugFlags,
  HpQuestionSet,
  MicroTimer,
  recordElapsedTime
} from '@avantia/questionset-model';
import { logError, logInfo, logWarning } from '@avantia/server-base';
import axios from 'axios';
import https from 'https';
import { ensureDefined } from '../../src/tools/utilities';
import { getConfig } from '../configuration';
import {
  AllNhiSections,
  GdprConsentData,
  GdprConsentSection,
  NhiQuoteResponse,
  NhiQuoteResult,
  NhiSectionTypes
} from './interfaces';
import { transformSections } from './transformSections';

const baseUrl = getConfig().quoteAndBuyServiceUri;
const quoteUrl = `${baseUrl}Quote/CalculateQuotePremium?quoteGuid={{quoteGuid}}&_={{timeStamp}}`;
const saveSectionUrl = `${baseUrl}Questions/Save`;
const gdprConsentUrl = `${baseUrl}GDPRConsent/Update`;

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
});

export function saveQuestionSet(questionSet: HpQuestionSet, diagnosticMode: boolean): Promise<string> {
  const timer = new MicroTimer().start();

  return new Promise<string>((resolve, reject) => {
    const data: AllNhiSections = recordElapsedTime('transformSections', () =>
      transformSections(questionSet, diagnosticMode)
    );

    const gdprPromise = postGdprData(data.GdprConsent, data.YourContactDetails.EmailAddress);

    const rejectHandler = (sectionName: keyof AllNhiSections): ((error: any) => Promise<void>) => {
      return (error: any): Promise<void> =>
        gdprPromise
          .then(() => reject({ sectionName, error }))
          .catch((gdprError) => reject({ sectionName, error, gdprError }));
    };

    const p1 = sendSection('InsuringYourProperty', data, undefined, rejectHandler);
    p1.then((quoteIdString) => {
      const quoteId = ensureDefined(quoteIdString as string, 'quoteId');
      const p2 = sendSection('PropertyDetails', data, quoteId, rejectHandler);
      p2.then(() => {
        const p3 = sendSection('BuildingConstruction', data, quoteId, rejectHandler);
        p3.then(() => {
          const p4 = sendSection('AboutYourProperty', data, quoteId, rejectHandler);
          p4.then(() => {
            const p5 = sendSection('ContentsCover', data, quoteId, rejectHandler);
            p5.then(() => {
              const p6 = sendSection('Residents', data, quoteId, rejectHandler);
              p6.then(() => {
                const p7 = sendSection('AboutYouAndYourHousehold', data, quoteId, rejectHandler);
                p7.then(() => {
                  const p8 = sendSection('YourContactDetails', data, quoteId, rejectHandler);
                  p8.then(() => {
                    displayTimeTaken(`Sent 8 sections`, timer, HpDebugFlags.UnitTests);
                    gdprPromise
                      .then(() => {
                        resolve(quoteId);
                      })
                      .catch(() => {
                        // Don't let a GDPR failure prevent us from saving a quote
                        resolve(quoteId);
                      });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

export function getQuote(quoteGuid: string): Promise<NhiQuoteResult> {
  const timer = new MicroTimer().start();
  return new Promise<NhiQuoteResult>((resolve, reject) => {
    const url = templateResolver(quoteUrl, { quoteGuid, timeStamp: new Date().getTime() });
    axiosInstance
      .get<NhiQuoteResponse>(url)
      .then((resp) => {
        displayTimeTaken(`Retrieve quote for '${quoteGuid}'`, timer, HpDebugFlags.UnitTests);
        const data = resp.data;
        if (data.Success === true && data.Data) {
          resolve(data.Data);
        } else {
          reject({ success: false, errors: data.Error });
        }
      })
      .catch(reject);
  });
}

function sendSection(
  sectionType: NhiSectionTypes,
  sections: AllNhiSections,
  quoteId: string | undefined,
  rejectHandler: (sectionName: keyof AllNhiSections) => (error: any) => Promise<void>
): Promise<string> {
  const timer = new MicroTimer().start();
  const reqData = sections[sectionType];
  const promise = new Promise<string>((resolve, reject) => {
    if (!reqData) {
      reject(`No data provided for Section ${sectionType}.`);
      return;
    }

    if (!quoteId && sectionType !== 'InsuringYourProperty') {
      reject(`Failed: No quoteId provided.`);
      return;
    }

    reqData.QuoteGuid = quoteId;

    axiosInstance
      .post<SectionResponse>(saveSectionUrl + sectionType, reqData)
      .then((resp) => {
        const { data: respData, status } = resp;
        const { Success: success, Error: errors, Data: data } = respData;
        if (success && status === 200) {
          displayTimeTaken(`Send section ${sectionType}`, timer, HpDebugFlags.UnitTests);
          resolve(data.QuoteGuid);
        } else {
          reject({ success, status, errors, reqData });
        }
      })
      .catch(reject);
  });

  promise.catch((err) => {
    logError(typeof err === 'string' ? `Failed to save ${sectionType} section: ${err}` : JSON.stringify(err, null, 2));
    rejectHandler(sectionType)(err);
  });

  return promise;
}

interface SectionResponse {
  Success: boolean;
  Error: string[] | null;
  Data: {
    QuoteGuid: 'fab8fc91-f95b-416c-b4c6-e991ebf38100';
  };
}

function postGdprData(gdprConsent: GdprConsentSection, emailAddress: string): Promise<void[]> {
  // Do not rearrange these keys; their order is used as an indexer for the API.
  const keys: (keyof GdprConsentSection)[] = ['CanEmail', 'CanSMS', 'CanPost', 'CanTelephone'];
  const requestData = keys.map((key) => {
    const data: GdprConsentData = {
      EmailAddress: emailAddress,
      IpAddress: '127.0.0.1', // TODO Get the IP from the client
      UserAgentDescription: '',
      SourceApplicationDescription: 'Homeprotect',
      GdprMediaTypeId: keys.indexOf(key) + 1,
      OptInBool: gdprConsent[key] as boolean
    };
    return data;
  });

  const promises = requestData.map((data) => {
    return new Promise<void>((resolve, reject) => {
      axiosInstance
        .post(gdprConsentUrl, data)
        .then(() => {
          const { EmailAddress, GdprMediaTypeId, OptInBool } = data;
          logInfo({
            success: true,
            message: `Updated GDPR details`,
            data: { EmailAddress, GdprMediaTypeId, OptInBool }
          });
          resolve();
        })
        .catch((err) => {
          logWarning({ success: false, message: `Failed to update GDPR details`, data, detail: err });
          reject(err);
        });
    });
  });

  return Promise.all(promises);
}
