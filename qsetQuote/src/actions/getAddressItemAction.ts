import { HpAddressFailedResponse, HpAddressItemResponse, HpAddressSelectActionProps } from '@avantia/questionset-model';
import { getConfig } from '../config/configuration';
import { CreateActionPromisesProps, DependentActionFunction } from '../interfaces';
import { applyChanges } from '../reducers/reducerLibrary';
import { ensureDefined } from '../tools/utilities';
import { HpAction, HpDispatchFunction } from './actionTypes';
import { fetchResolver } from './fetchResolver';

export type AddressItemAction = HpAction<AddressItemPayload>;

export interface AddressItemPayload extends HpAddressItemResponse {
  questionId: string;
  lookupResultsId: string;
  searchFields: string[];
}

export type AddressItemFailedAction = HpAction<AddressItemFailedPayload>;

export interface AddressItemFailedPayload {
  errorLoadingAddressMessage: string;
  lookupResultsId: string;
}

export interface GetAddressItemActionProps {
  questionId: string;
  lookupResultsId: string;
  addressId: string;
  searchFields: string[];
  errorLoadingAddressMessage: string | undefined;
}

export function getAddressItemAction({
  question,
  payload,
  dependentAction
}: CreateActionPromisesProps): DependentActionFunction<AddressItemPayload> {
  const { value: addressId } = ensureDefined(payload, 'payload');
  const props = ensureDefined(dependentAction, 'dependentAction').props as HpAddressSelectActionProps;
  const { lookupResultsId, searchFields, errorLoadingAddressMessage } = ensureDefined(props, 'props');
  const questionId = question.questionId;
  const { websiteEndpoint } = getConfig();
  return (dispatch: HpDispatchFunction<AddressItemPayload>): Promise<void> => {
    const url = `${websiteEndpoint}/api/addressLookup/ID/${encodeURIComponent(addressId)}`;
    return fetchResolver<AddressItemPayload>({
      options: { url, method: 'GET' },
      dispatch,
      successAction: (serverPayload) => {
        const itemPayload = serverPayload as HpAddressItemResponse;
        const { success } = itemPayload;
        if (success === true) {
          const part: Partial<AddressItemPayload> = { questionId, lookupResultsId, searchFields };
          const payload = applyChanges(part as AddressItemPayload, itemPayload);
          dispatch({
            type: 'ADDRESS_ITEM_RETRIEVED',
            payload
          });
        } else {
          dispatch({
            type: 'FETCH_ERROR_OCCURRED',
            fetchError: "We're having problems connecting to our servers at the moment.",
            reason: ((serverPayload as unknown) as HpAddressFailedResponse).message
          });
        }
      },
      failedAction: () => {
        const payload: AddressItemFailedPayload = {
          lookupResultsId,
          errorLoadingAddressMessage:
            errorLoadingAddressMessage ||
            "We're having problems loading the address you selected. Please try again or enter your address manually."
        };

        dispatch({
          type: 'ADDRESS_ITEM_FAILED',
          payload: payload as any
        });
      }
    });
  };
}
