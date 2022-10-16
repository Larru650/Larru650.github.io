import {
  HpAddressFailedResponse,
  HpAddressItemResponse,
  HpAddressLookupItemResponse,
  HpAddressLookupResponse
} from '@avantia/questionset-model';
import { Request, Response } from 'express';
import { processRequest } from './commonFunctions';
import { ServerConfiguration } from './configuration';
import { FeatureInputProps } from './interfaces';
import { QSPRequestData } from './models';

const dayInMs = 1000 * 60 * 60 * 24;
const cacheTimeMs = 1 * dayInMs;
const allowCachedResponses = true;

export function addressLookupFeature({ config, router, adfsPassport }: FeatureInputProps): void {
  router.get(
    '/api/AddressLookup/ID/:addressId',
    adfsPassport.authenticate((req: Request, res: Response) => {
      const { addressId } = req.params;
      sendAddressIdResponse(addressId, req, res, config);
    })
  );

  router.get(
    '/api/AddressLookup/:postcode',
    adfsPassport.authenticate((req: Request, res: Response) => {
      const { postcode } = req.params;
      try {
        const data: QSPRequestData = {
          uri: `${config.addressLookupServiceUri}/FindAddress?addressSearchText=${encodeURIComponent(postcode)}`,
          options: { method: 'GET', query: { postcode }, body: undefined, headers: {} }
        };

        processRequest(req, data, res, {
          minTimeMs: 0,
          requireSessionAuth: false,
          successCallback: (data) => {
            const response = translateAddressLookupResponse(data as AddressServiceLookupResponse);
            if (response.success) {
              if (response.addresses.length === 1) {
                sendAddressIdResponse(response.addresses[0].id, req, res, config);
              } else {
                sendResponse({ res, response });
              }
            } else {
              res.status(500).send(response);
            }

            return 'reponse-sent';
          }
        });
      } catch (err) {
        const resp: HpAddressFailedResponse = {
          success: false,
          type: 'error',
          message: [String(err.message ? err.message : err)]
        };
        res.status(500).send(resp);
      }
    })
  );
}

export function translateAddressItemResponse(
  addressId: string,
  data: AddressServiceResponse<AddressServiceItemResponse>
): HpAddressItemResponse | HpAddressFailedResponse {
  const { Success: success, Error: message, Data: address } = data || {};
  if (success === true && address !== undefined) {
    const {
      PropertyNameNumber: propertyNameNumber,
      AddressLine1: addressLine1,
      AddressLine2: addressLine2,
      TownCity: townCity,
      County: county,
      PostCode: postcode,
      AddressLookupJson: addressLookupJson
    } = address;

    const response: HpAddressItemResponse = {
      success: true,
      type: 'address',
      addressId,
      propertyNameNumber,
      addressLine1,
      addressLine2,
      townCity,
      county,
      postcode,
      addressLookupJson
    };

    return response;
  }

  const resp: HpAddressFailedResponse = {
    success: false,
    type: 'error',
    message: message && message.length ? message : ['Invalid response received from address item service']
  };
  return resp;
}

export function translateAddressLookupResponse(
  data: AddressServiceLookupResponse
): HpAddressLookupResponse | HpAddressFailedResponse {
  const { Success: success, Error: message, Data: items } = data || {};
  if (success === true && items !== undefined) {
    const addresses = items.map(({ value, label: address }) => {
      const item: HpAddressLookupItemResponse = {
        id: value,
        address
      };
      return item;
    });

    const response: HpAddressLookupResponse = {
      success,
      type: 'addresses',
      addresses
    };

    return response;
  }

  const resp: HpAddressFailedResponse = {
    success: false,
    type: 'error',
    message: message && message.length ? message : ['Invalid response received from address lookup service']
  };
  return resp;
}

function sendAddressIdResponse(addressId: string, req: Request, res: Response, config: ServerConfiguration): void {
  try {
    const data: QSPRequestData = {
      uri: `${config.addressLookupServiceUri}/FindSingleAddress?udprn=${encodeURIComponent(addressId)}`,
      options: { method: 'GET', query: { addressId }, body: undefined, headers: {} }
    };

    processRequest(req, data, res, {
      minTimeMs: 0,
      requireSessionAuth: false,
      successCallback: (data) => {
        const response = translateAddressItemResponse(
          addressId,
          data as AddressServiceResponse<AddressServiceItemResponse>
        );
        if (response.success) {
          sendResponse({ res, response });
        } else {
          res.status(500).send(response);
        }

        return 'reponse-sent';
      }
    });
  } catch (err) {
    const resp: HpAddressFailedResponse = {
      success: false,
      type: 'error',
      message: [String(err.message ? err.message : err)]
    };
    res.status(500).send(resp);
  }
}

function sendResponse<RespT>({ res, response }: { res: Response; response: RespT }): void {
  if (allowCachedResponses) {
    res.setHeader('Expires', String(new Date(new Date().getTime() + cacheTimeMs)));
    res.setHeader('Pragma', 'private');
    res.setHeader('Cache-Control', 'max-age=' + cacheTimeMs);
  }

  res.send(response);
}

export interface AddressServiceResponse<DataT> {
  Success: boolean;
  Error: string[] | null;
  Data: DataT;
}

export type AddressServiceLookupResponse = AddressServiceResponse<AddressServiceLookupItemResponse[]>;

export interface AddressServiceItemResponse {
  PropertyNameNumber: string;
  AddressLine1: string;
  AddressLine2: string;
  TownCity: string;
  County: string;
  PostCode: string;
  AddressLookupJson: string;
  AddressSearchText: string;
  UsePostCodeService: boolean;
}

export interface AddressServiceLookupItemResponse {
  value: string;
  label: string;
}
