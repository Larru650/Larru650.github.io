import {
  HpAddressItemResponse,
  HpAddressLookupActionProps,
  HpAddressLookupItemResponse,
  HpAddressLookupResponse,
  HpAnswer
} from '@avantia/questionset-model';
import { getConfig } from '../config/configuration';
import { CreateActionPromisesProps, DependentActionFunction, HpClientQuestion } from '../interfaces';
import { ensureDefined, getAnswerValue } from '../tools/utilities';
import { HpAction, HpDispatchFunction } from './actionTypes';
import { fetchResolver } from './fetchResolver';

export type AddressLookupAction = HpAction<AddressLookupPayload>;

export interface AddressLookupPayload extends GetAddressLookupActionProps {
  addresses: HpAddressLookupItemResponse[];
  address?: HpAddressItemResponse;
}

export type AddressLookupFailedAction = HpAction<AddressLookupFailedPayload>;

export interface AddressLookupFailedPayload {
  lookupButtonId: string;
  errorLoadingAddressesMessage: string;
}

export function searchForAddresses(
  properties: CreateActionPromisesProps
): DependentActionFunction<AddressLookupPayload> | undefined {
  const { question, answerMap, dependentAction } = properties;
  const { props } = ensureDefined(dependentAction, 'dependentAction');
  const answerMapDefined = ensureDefined(answerMap, 'answerMap');
  const {
    searchFields,
    lookupResultsId,
    lookupButtonId,
    noResultsFoundMessage,
    errorLoadingAddressesMessage
  } = ensureDefined(props as HpAddressLookupActionProps, 'props');
  const answers = searchFields.map((f) => answerMapDefined[f]);
  let searchTerms: (string | undefined)[] | undefined;
  const { textAndStyle } = question.data;
  ensureDefined(lookupResultsId, 'lookupResultsId');
  ensureDefined(lookupButtonId, 'lookupButtonId');
  if (answers) {
    searchTerms = answers.map((answer) => {
      const { answerValue } = getAnswerValue(answer, question, 'request');
      return typeof answerValue === 'string' ? answerValue : undefined;
    });

    const searchTerm = searchTerms.filter((x) => !!x).join(' ');
    return getAddressLookupAction({
      searchTerm,
      questionId: question.questionId,
      lookupResultsId,
      lookupButtonId,
      noResultsFoundMessage,
      errorLoadingAddressesMessage,
      searchFields
    });
  }

  console.warn(
    `The "address-lookup" action could not be performed ${
      !textAndStyle
        ? 'because the "textAndStyle" property is undefined'
        : !searchTerms || searchTerms.length === 0
        ? `because the "searchFields" answers (${searchFields.join(', ')}) do not map to any answers`
        : 'and the reason is not immediately obvious'
    }.`
  );
}

interface GetAddressLookupActionProps {
  searchTerm: string;
  questionId: string;
  lookupResultsId: string;
  lookupButtonId: string;
  noResultsFoundMessage?: string;
  errorLoadingAddressesMessage?: string;
  searchFields: string[];
}

function getAddressLookupAction({
  searchTerm,
  questionId,
  lookupResultsId,
  lookupButtonId,
  noResultsFoundMessage,
  errorLoadingAddressesMessage,
  searchFields
}: GetAddressLookupActionProps): DependentActionFunction<AddressLookupPayload> {
  const { websiteEndpoint } = getConfig();
  const emptyAction: AddressLookupAction = {
    type: 'ADDRESS_LOOKUP_RETRIEVED',
    payload: { searchTerm: '', questionId, addresses: [], lookupResultsId, lookupButtonId, searchFields }
  };
  return (dispatch: HpDispatchFunction<AddressLookupPayload>): Promise<void> => {
    if (!searchTerm) {
      return new Promise<void>((resolve) => {
        dispatch(emptyAction);
        resolve();
      });
    } else {
      dispatch({ type: 'ADDRESS_LOOKUP_CALL_STARTED', payload: emptyAction.payload });
      const url = `${websiteEndpoint}/api/addressLookup/${encodeURIComponent(searchTerm)}`;
      return fetchResolver<AddressLookupPayload>({
        options: { url, method: 'GET' },
        dispatch,
        successAction: (payload) => {
          const { success, type, addresses } = (payload as unknown) as HpAddressLookupResponse;
          if (success === true) {
            if (type === 'address') {
              const address = (payload as unknown) as HpAddressItemResponse;
              dispatch({
                type: 'ADDRESS_ITEM_RETRIEVED',
                payload: {
                  searchTerm,
                  questionId,
                  addresses: [],
                  address,
                  lookupResultsId,
                  lookupButtonId,
                  searchFields
                }
              });
            } else {
              dispatch({
                type: 'ADDRESS_LOOKUP_RETRIEVED',
                payload: {
                  searchTerm,
                  questionId,
                  addresses,
                  lookupResultsId,
                  lookupButtonId,
                  noResultsFoundMessage,
                  searchFields
                }
              });
            }
          } else {
            dispatch(emptyAction);
          }
        },
        failedAction: () => {
          const payload: AddressLookupFailedPayload = {
            lookupButtonId,
            errorLoadingAddressesMessage:
              errorLoadingAddressesMessage ||
              "We're having problems loading the addresses. Please try again or enter your address manually."
          };

          dispatch({
            type: 'ADDRESS_LOOKUP_FAILED',
            payload: payload as any
          });
        }
      });
    }
  };
}

interface SearchForAddressesProps {
  question: HpClientQuestion;
  answers: HpAnswer[];
  searchFields: string[];
  lookupResultsId: string;
  lookupButtonId: string;
  noResultsFoundMessage?: string;
  errorLoadingAddressesMessage?: string;
}
