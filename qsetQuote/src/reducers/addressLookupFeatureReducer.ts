import { SMap } from '@avantia/client-and-server-utilities';
import {
  findQuestionId,
  HpAddressItemResponse,
  HpAddressLookupActionProps,
  HpAnswerValueTypes,
  HpDebugFlags,
  HpQuestionData,
  HpQuestionLookupItem,
  HpStandardControlTypes
} from '@avantia/questionset-model';
import { HpDynamicFunctionProps, HpPrerequsisiteThisReference } from '@avantia/questionset-script-parser';
import { AddressItemAction, AddressItemFailedAction, AddressItemPayload } from '../actions/getAddressItemAction';
import {
  AddressLookupAction,
  AddressLookupFailedAction,
  AddressLookupPayload
} from '../actions/getAddressLookupAction';
import { AddressLookupButtonClickActionProps, HpClientQuestionSetState } from '../interfaces';
import { ensureDefined, firstDefined } from '../tools/utilities';
import {
  addErrorToValidation,
  processPrereqsAndCalcs,
  removeUiProperties,
  updateAnswer,
  updateQuestion
} from './questionSetReducerLibrary';
import { createBlankAnswer } from './questionSetTools';
import { applyChanges, applyInnerChanges } from './reducerLibrary';
import { ReducerProcessor } from './reducerProcessor';

export function registerAddressLookupFeature(processor: ReducerProcessor<HpClientQuestionSetState>): void {
  processor.add<AddressLookupAction>('ADDRESS_LOOKUP_CALL_STARTED', (state, { payload }) => {
    const { lookupResultsId } = payload as AddressLookupPayload;
    return clearAddressLookupResult(lookupResultsId, state);
  });

  processor.add<AddressLookupAction>('ADDRESS_LOOKUP_RETRIEVED', (state, { payload }) => {
    const {
      addresses,
      noResultsFoundMessage,
      lookupResultsId,
      lookupButtonId,
      searchFields
    } = payload as AddressLookupPayload;
    ensureDefined(lookupResultsId, 'lookupResultsId');
    ensureDefined(lookupButtonId, 'lookupButtonId');
    const questionId = findQuestionId({ name: lookupResultsId, questions: state.questions });
    const foundAddresses = addresses.length > 0;
    state = applyInnerChanges(
      state,
      ['validationResult', 'errors', lookupButtonId],
      !foundAddresses ? noResultsFoundMessage || 'Your address search returned no results' : '',
      { copyRootNode: true }
    );

    state = removeUiProperties(state, searchFields, ['isDirty', 'isTouched']);

    state = updateQuestion(questionId, state, (question) => {
      const lookup: SMap<HpQuestionLookupItem> = {};
      addresses.forEach(({ id, address }) => {
        lookup[id] = { text: address };
      });

      applyInnerChanges(question, ['data', 'lookup'], lookup);
      return question;
    });

    const partialAddress = createBlankAddress();
    let answers = state.answers;
    searchFields.forEach((f) => {
      if (!answers[f]) {
        if (answers === state.answers) {
          answers = { ...answers };
        }

        answers[f] = createBlankAnswer(HpDebugFlags.AddressLookup);
      }

      partialAddress[f] = answers[f].customer;
    });

    state = updateAnswer({
      currState: state,
      eventType: 'server-action',
      questionId,
      value: null,
      partialAnswer: { partial: partialAddress }
    });

    return processPrereqsAndCalcs('click', state);
  });

  processor.add<AddressItemAction | AddressLookupAction>('ADDRESS_ITEM_RETRIEVED', (state, { payload }) => {
    const address = firstDefined<HpAddressItemResponse>(
      (payload as AddressLookupPayload).address,
      payload as AddressItemPayload
    );

    if (!address || !address.postcode) {
      throw new Error('The address value has not been provided.');
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lookupResultsId = ensureDefined(payload!.lookupResultsId, 'lookupResultsId');
    state = applyChanges(state, {
      validationResult: addErrorToValidation(state.validationResult, lookupResultsId, undefined)
    });
    const questionId = findQuestionId({ name: lookupResultsId, questions: state.questions });
    state = clearAddressLookupResult(questionId, state);

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    state = removeUiProperties(state, payload!.searchFields, ['isDirty', 'isTouched']);

    state = updateAnswer({
      currState: state,
      eventType: 'server-action',
      questionId,
      value: address.addressId,
      partialAnswer: { partial: address }
    });

    return processPrereqsAndCalcs('click', state);
  });

  processor.add<AddressLookupFailedAction>('ADDRESS_LOOKUP_FAILED', (state, { payload }) => {
    const { errorLoadingAddressesMessage, lookupButtonId } = ensureDefined(payload, 'payload');
    const validationResult = addErrorToValidation(state.validationResult, lookupButtonId, errorLoadingAddressesMessage);
    return applyChanges(state, { validationResult });
  });

  processor.add<AddressItemFailedAction>('ADDRESS_ITEM_FAILED', (state, { payload }) => {
    const { errorLoadingAddressMessage, lookupResultsId } = ensureDefined(payload, 'payload');
    const validationResult = addErrorToValidation(state.validationResult, lookupResultsId, errorLoadingAddressMessage);
    return applyChanges(state, { validationResult });
  });

  function clearAddressLookupResult(
    lookupResultsId: string,
    state: HpClientQuestionSetState
  ): HpClientQuestionSetState {
    return updateQuestion(lookupResultsId, state, (question) => {
      const lookup: SMap<HpQuestionLookupItem> = {};
      question = applyInnerChanges(question, ['data', 'lookup'], lookup);
      return question;
    });
  }
}

export function addressLookupButtonClickAction({
  currState,
  question,
  props
}: AddressLookupButtonClickActionProps): HpClientQuestionSetState {
  const { searchFields } = (props as HpAddressLookupActionProps) || { searchFields: [] };
  const searchField = searchFields[0];
  const answer = currState.answers[searchField];
  if (answer === undefined) {
    throw new Error(
      `The 'searchField' must ${searchField ? 'be provided' : 'be the ID of a question'} in the actionProps for "${
        question.questionId
      }".`
    );
  }

  return currState;
}

export function getAddressDetailAnswer(
  this: HpPrerequsisiteThisReference,
  { questionId }: HpDynamicFunctionProps
): HpAnswerValueTypes {
  const answers: string[] = [];
  const prefixKey = 'addressControlPrefix';
  const question = this.getQuestion(questionId);
  const data = question.data as HpQuestionData;
  const { lookup, textAndStyle } = data;
  const expectedControlType = 'AddressView';
  const controlType = textAndStyle.standard.controlType;
  if (controlType !== (expectedControlType as HpStandardControlTypes)) {
    throw new Error(
      `The question "${questionId}" is requesting address details but is not of the correct controlType. Expected "${expectedControlType}", received: "${controlType}".`
    );
  }

  const { text: addressControlPrefix } = (lookup ? lookup[prefixKey] : null) || {};
  if (addressControlPrefix === undefined) {
    throw new Error(
      `The lookup for question "${questionId}" ('${question.name ||
        questionId}') must contain a '${prefixKey}' key which contains property 'text' which contains the address prefix required (e.g. 'billing', 'contact').`
    );
  }

  const addPrefix = (name: string): string => {
    if (!addressControlPrefix) {
      return name;
    }

    return addressControlPrefix + name.substring(0, 1).toUpperCase() + name.substring(1);
  };

  const hasAddressLine1 = this.getAnswerValue(addPrefix('addressLine1'));
  const questionIds = [
    'propertyNameNumber',
    'addressLine1',
    'addressLine2',
    'townCity',
    'county',
    'postcode',
    'addressLookupJson'
  ];
  questionIds.forEach((name) => {
    const fullName = addPrefix(name);
    answers.push(name);
    answers.push(hasAddressLine1 ? this.getAnswerValue(fullName) : '');
  });
  return answers;
}

function createBlankAddress(): HpAddressItemResponse {
  return {
    addressId: '',
    addressLine1: '',
    addressLine2: '',
    county: '',
    postcode: '',
    propertyNameNumber: '',
    success: true,
    townCity: '',
    addressLookupJson: '',
    type: 'address'
  };
}
