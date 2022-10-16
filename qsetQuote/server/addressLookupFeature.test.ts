import { HpAddressFailedResponse, HpAddressItemResponse, HpAddressLookupResponse } from '@avantia/questionset-model';
import {
  AddressServiceItemResponse,
  AddressServiceLookupItemResponse,
  AddressServiceLookupResponse,
  AddressServiceResponse,
  translateAddressItemResponse,
  translateAddressLookupResponse
} from './addressLookupFeature';

describe('addressLookupFeature', () => {
  describe('translateAddressItemResponse', () => {
    const defaultError = 'Invalid response received from address item service';

    it('returns failed response when undefined is provided as data', () => {
      // arrange
      const expected: HpAddressFailedResponse = {
        success: false,
        message: [defaultError],
        type: 'error'
      };

      // act/assert
      expect(translateAddressItemResponse('add-id', undefined as any)).toEqual(expected);
    });

    it('returns successful response when expected data is provided', () => {
      // arrange
      const addressId = 'add-ID';
      const data: AddressServiceItemResponse = {
        PropertyNameNumber: '1',
        AddressLine1: 'Old Bridge Street',
        AddressLine2: 'Hampton Wick',
        TownCity: 'Kingston Upon Thames',
        County: 'Greater London',
        PostCode: 'KT1 4BU',
        AddressLookupJson: '{}',
        AddressSearchText: 'KT1',
        UsePostCodeService: true
      };
      const input: AddressServiceResponse<AddressServiceItemResponse> = {
        Success: true,
        Error: null,
        Data: data
      };
      const expected: HpAddressItemResponse = {
        success: true,
        propertyNameNumber: data.PropertyNameNumber,
        addressLine1: data.AddressLine1,
        addressLine2: data.AddressLine2,
        townCity: data.TownCity,
        county: data.County,
        postcode: data.PostCode,
        addressId,
        addressLookupJson: data.AddressLookupJson,
        type: 'address'
      };

      // act/assert
      expect(translateAddressItemResponse(addressId, input)).toEqual(expected);
    });
  });

  describe('translateAddressLookupResponse', () => {
    const defaultError = 'Invalid response received from address lookup service';

    it('returns failed response when undefined is provided as data', () => {
      // arrange
      const expected: HpAddressFailedResponse = {
        success: false,
        message: [defaultError],
        type: 'error'
      };
      // act/assert
      expect(translateAddressLookupResponse(undefined as any)).toEqual(expected);
    });

    it('returns successful response when expected data is provided', () => {
      // arrange
      const value = '2345666';
      const label = 'Some address, London';
      const data: AddressServiceLookupItemResponse = {
        value,
        label
      };
      const input: AddressServiceLookupResponse = {
        Success: true,
        Error: null,
        Data: [data]
      };
      const expected: HpAddressLookupResponse = {
        success: true,
        type: 'addresses',
        addresses: [{ id: value, address: label }]
      };

      // act/assert
      expect(translateAddressLookupResponse(input)).toEqual(expected);
    });
  });
});
