import { SMap } from '@avantia/client-and-server-utilities';
import { HpAddressLookupActionProps, HpAnswerMap, HpAnswerValueTypes } from '@avantia/questionset-model';
import lodash from 'lodash';
import React, { ReactElement } from 'react';
import {
  HpClientDependentAction,
  HpClientQuestionData,
  HpClientQuestionMap,
  HpClientQuestionUiMap
} from '../../../interfaces';
import {
  ensureDefined,
  getAnswerValue,
  GetKeyFunction,
  getKeyMapping,
  HpKeyToFindInput
} from '../../../tools/utilities';
import { CommonGroupControlProps } from '../inputControl';

interface Address<ItemT> {
  addressId: string;
  propertyNameNumber: ItemT;
  addressLine1: ItemT;
  addressLine2: ItemT;
  county: ItemT;
  townCity: ItemT;
  postcode: ItemT;
  addressLookupButton: ItemT;
  addressEnterManuallyButton: ItemT;
  addressLookupResults?: ItemT;
  propertyNameNumberSearchTerm?: ItemT;
  postcodeSearchTerm?: ItemT;
  addressLookupJson?: ItemT;
}

type AddressElement = Address<ReactElement>;

const addressKeys: HpKeyToFindInput<AddressElement>[] = [
  'addressId',
  'propertyNameNumber',
  'addressLine1',
  'addressLine2',
  'townCity',
  'county',
  'postcode',
  'addressLookupButton',
  'addressLookupResults',
  { key: 'addressEnterManuallyButton', required: false },
  { key: 'propertyNameNumberSearchTerm', required: false },
  { key: 'postcodeSearchTerm', required: false }
];

export function AddressLookupControl({
  id,
  controlMap,
  questions,
  answers,
  questionsUiMap,
  errors
}: CommonGroupControlProps): JSX.Element {
  const nameMap: SMap<ReactElement> = {};
  const nameIdMap: SMap<string> = {};
  lodash.keys(controlMap).forEach((id) => {
    const name = questions[id].name;
    nameMap[name] = controlMap[id];
    nameIdMap[name] = id;
  });

  const {
    propertyNameNumber,
    postcode,
    addressLine1,
    addressLine2,
    townCity,
    county,
    addressLookupButton,
    addressEnterManuallyButton,
    addressLookupResults,
    propertyNameNumberSearchTerm,
    postcodeSearchTerm,
    getKey: getKeyFunc
  } = getKeyMapping<AddressElement, ReactElement>(addressKeys, nameMap);

  const getKey = (key: keyof Address<any>): string => {
    return nameIdMap[getKeyFunc(key)];
  };

  const getAnswer: GetAnswerFunction = (key) => getAddressAnswer(key, getKey, questions, answers) as string | boolean;
  const resultsKey = getKey('addressLookupResults');
  const resultsQuestion = questions[resultsKey];
  const hasResults = Object.keys((resultsQuestion.data as HpClientQuestionData).lookup).length > 0;
  const enterManually = getAnswer('addressEnterManuallyButton');

  if (enterManually === true) {
    return (
      <div id={`${id}-section`} className="">
        {!!addressEnterManuallyButton && addressEnterManuallyButton.value}
        {propertyNameNumber.value}
        {addressLine1.value}
        {addressLine2.value}
        {townCity.value}
        {county.value}
        {postcode.value}
      </div>
    );
  }

  const lookupError = errors[getKey('addressLookupResults')];
  const showSummary = !lookupError && showAddressSummary(getKey('addressLookupButton'), questions, questionsUiMap);
  const summary = showSummary ? createAddressSummary(getAnswer) : null;
  return (
    <div id={`${id}-section`} className="">
      {!!addressEnterManuallyButton && addressEnterManuallyButton.value}
      {(propertyNameNumberSearchTerm || propertyNameNumber).value}
      {(postcodeSearchTerm || postcode).value}
      {addressLookupButton.value}
      {hasResults && addressLookupResults.value}
      {/* {<ErrorWidget error={lookupError} />} */}
      {summary && <div className="av-card av-card-child">{summary}</div>}
    </div>
  );
}

function getAddressAnswer(
  key: keyof Address<ReactElement>,
  getControlKey: GetKeyFunction<AddressElement>,
  questions: HpClientQuestionMap,
  answers: HpAnswerMap
): HpAnswerValueTypes {
  const realKey = getControlKey(key);
  const { answerValue } = getAnswerValue(answers[realKey], questions[realKey], 'control');
  return answerValue;
}

type GetAnswerFunction = (key: keyof Address<ReactElement>) => string | boolean;

export function createAddressSummary(
  getAnswer: GetAnswerFunction,
  showSummary?: boolean | undefined
): ReactElement | null {
  let addressSummary: ReactElement | null = null;
  if (showSummary === undefined) {
    showSummary = !!getAnswer('addressId');
  }

  if (showSummary) {
    const propertyNameNumberText = getAnswer('propertyNameNumber');
    const addressLine1Text = getAnswer('addressLine1');
    const addressLine2Text = getAnswer('addressLine2');
    const countyText = getAnswer('county');
    const townCityText = getAnswer('townCity');
    const postcodeText = getAnswer('postcode');
    const isPropNumeric = propertyNameNumberText && /^\d+$/.test(propertyNameNumberText as string);
    addressSummary = (
      <div className="hp-address-summary-panel av-text-large">
        {propertyNameNumberText}
        {isPropNumeric ? ' ' : <br />}
        {addressLine1Text}
        <br />
        {addressLine2Text && (
          <>
            {addressLine2Text}
            <br />
          </>
        )}
        {townCityText}
        <br />
        {countyText}
        <br />
        {postcodeText}
      </div>
    );
  }

  return addressSummary;
}

function showAddressSummary(
  lookupButtonKey: string,
  questions: HpClientQuestionMap,
  questionsUiMap: HpClientQuestionUiMap
): boolean {
  let showSummary = true;
  const question = ensureDefined(questions[lookupButtonKey], `questions[${lookupButtonKey}]`);
  const dependentActions = question.data.dependentActions || [];
  const dependentAction: HpClientDependentAction | undefined = dependentActions.filter(
    (a) => a.action === 'address-lookup'
  )[0];

  if (dependentAction) {
    const { searchFields } = (dependentAction.props as HpAddressLookupActionProps) || {};
    showSummary = searchFields.map((f) => questionsUiMap[f]).findIndex((f) => f.isDirty) < 0;
  }

  return showSummary;
}
