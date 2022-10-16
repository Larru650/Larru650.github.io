import { hasOwnProperty, SMap } from '@avantia/client-and-server-utilities';
import { HpAnswer, HpAnswerValueTypes, HpQuestion, HpQuestionDataTypes } from '@avantia/questionset-model';
import lodash from 'lodash';
import {
  AnswerSource,
  ControlValueTypes,
  HpClientQuestion,
  HpClientQuestionData,
  HpClientStandardInputTextAndStyle
} from '../interfaces';

export interface GetAnswerValueResponse {
  answerValue: HpAnswerValueTypes;
  answerSource: AnswerSource;
}

export function getAnswerValue<QuestionT extends HpClientQuestion | HpQuestion>(
  answer: HpAnswer,
  question: QuestionT,
  usedBy: 'control' | 'prerequisites' | 'validation' | 'request' | 'reducer'
): GetAnswerValueResponse {
  const { dataType: answerType, isDefaultImplicit } = ensureDefined(question, 'question');
  if (!answer) {
    return { answerSource: 'unanswered', answerValue: null };
  }

  const { default: defaultAnswer, aggregator, customer } = answer;
  let res: GetAnswerValueResponse | undefined;

  if (isAnswered(customer)) {
    res = { answerValue: customer, answerSource: 'customer' };
  } else if (isAnswered(aggregator)) {
    res = { answerValue: aggregator as HpAnswerValueTypes, answerSource: 'aggregator' };
  } else if (isAnswered(defaultAnswer)) {
    if (usedBy !== 'control' || !isDefaultImplicit) {
      res = { answerValue: defaultAnswer, answerSource: 'default' };
    }
  }

  if (!res) {
    res = { answerSource: 'unanswered', answerValue: null };
  }

  if (res !== undefined) {
    if (answerType === 'string' && res.answerValue === null) {
      res.answerValue = '';
    } else if ((answerType === 'array' || answerType === 'stringArray') && !lodash.isArray(res.answerValue)) {
      res.answerValue = [];
    }
  }

  return res;
}

export function answersAreSame(type: HpQuestionDataTypes, a: HpAnswerValueTypes, b: HpAnswerValueTypes): boolean {
  if (a === null || b === null) {
    return a !== b;
  }

  if (type === 'array') {
    const listA = a as string[];
    const listB = b as string[];
    if (listA.length === listB.length) {
      const len = listA.length;
      for (let i = 0; i < len; i++) {
        if (listA[i] !== listB[i]) {
          return false;
        }
      }

      return true;
    } else {
      return false;
    }
  }

  return a === b;
}

function isAnswered(answer: HpAnswerValueTypes | undefined): boolean {
  return answer !== null && answer !== undefined;
}

export interface GetControlValueResponse {
  answerValue: ControlValueTypes;
  answerSource: AnswerSource;
}

export function getQuestionStandardTextAndStyle(question: HpClientQuestion): HpClientStandardInputTextAndStyle {
  return (question.data as HpClientQuestionData).textAndStyle.standard;
}

export function getControlValue(answer: HpAnswer, question: HpClientQuestion): GetControlValueResponse {
  const { answerValue, answerSource } = getAnswerValue(answer, question, 'control');
  return { answerSource, answerValue: toControlValue(answerValue) };
}

// This should always return a string, or an array of strings.
// If it returns null or undefined it will result in React erroring because
// the control went from uncontrolled to controlled state.
export function toControlValue(answer: HpAnswerValueTypes): ControlValueTypes {
  switch (answer) {
    case undefined:
    case null:
      return '';
    case false:
      return 'false';
    case true:
      return 'true';
  }

  if (lodash.isArray(answer)) {
    return answer.map(String);
  }

  return typeof answer === 'string' ? answer : String(answer);
}

export function getFunctionName(func: Function): string {
  let name = func
    .toString()
    .split('\n')[0]
    .substring(9); // 9 = 'function '.length
  const ix = name.indexOf('(');
  name = name.substring(0, ix);
  return name;
}

export function getQueryStringValue(name: string, url?: string): string | undefined {
  let data = url || document.location.href;
  data = data
    .split('?')
    .slice(1)
    .join('?');
  data = data.split('&').filter((d) => d.indexOf(`${name}=`) >= 0)[0] || '';
  const res = data ? data.split('=')[1] : undefined;
  return res;
}

export type HpKeyToFindInput<ModelT> = keyof ModelT | { key: keyof ModelT; required: boolean };

export interface HpMappedKeyResult<ItemT> {
  key: string;
  value: ItemT;
}

export type GetKeyFunction<ModelT> = (key: keyof ModelT) => string;

export interface GetMappingKey<ModelT> {
  getKey: GetKeyFunction<ModelT>;
}

export function getKeyMapping<ModelT, ItemT>(
  keysToFind: HpKeyToFindInput<ModelT>[],
  items: SMap<ItemT>
): SMap<HpMappedKeyResult<ModelT>> & GetMappingKey<ModelT> {
  const map = findMatchingKeys(keysToFind, items);

  const getKey: GetKeyFunction<ModelT> = (key) => {
    const tmp: HpMappedKeyResult<ItemT> = map[key as string];
    if (tmp) {
      return tmp.key;
    }

    throw new Error(`There is no key "${key}" in the map.`);
  };

  const res = (map as unknown) as SMap<HpMappedKeyResult<ModelT>> & GetMappingKey<ModelT>;
  res.getKey = getKey;
  return res;
}

export function findMatchingKeys<ModelT, ItemT>(
  keysToFind: HpKeyToFindInput<ModelT>[],
  items: SMap<ItemT>
): SMap<HpMappedKeyResult<ItemT>> {
  let itemKeys = lodash.keys(items);
  const map: SMap<HpMappedKeyResult<ItemT>> = {};
  for (const keyToFind of keysToFind) {
    let lookupKey = keyToFind as string;
    let isRequired = true;
    if (typeof keyToFind !== 'string') {
      const { key: k, required } = keyToFind as { key: keyof ModelT; required: boolean };
      lookupKey = k as string;
      isRequired = required;
    }

    if (hasOwnProperty(items, lookupKey)) {
      map[lookupKey] = { key: lookupKey, value: items[lookupKey] };
    } else {
      const upperKey = lookupKey.substring(0, 1).toUpperCase() + lookupKey.substring(1);
      const foundKey = itemKeys.filter((k) => k.endsWith(upperKey))[0];
      if (foundKey) {
        map[lookupKey] = { key: foundKey, value: items[foundKey] };
      } else if (isRequired) {
        itemKeys = itemKeys.sort();
        throw new Error(
          `Unable to find a matching key for "${lookupKey}" in provided keys, [${
            itemKeys.length > 0 ? `"${itemKeys.join('", "')}"` : ''
          }].`
        );
      }
    }
  }

  return map;
}

export function ensureDefined<ValueT>(value: ValueT | undefined | null, name: string): ValueT {
  if (value === undefined || value === null) {
    throw new Error(`The "${name}" cannot be null or undefined.`);
  }

  return value;
}

export function formatPostCode(postcode: string): string {
  const rex = /([A-Z]{1,2}\d{1,2}[A-Z]?)(\d[A-Z]{2})/;
  const postcodeUpper = postcode.toUpperCase();
  let res = postcodeUpper.replace(/ /g, '');

  // https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
  if (res.length >= 5 && res.length <= 7) {
    const data = rex.exec(res);
    if (data) {
      res = data[1] + ' ' + data[2];
    } else {
      res = postcodeUpper;
    }
  } else {
    res = postcodeUpper;
  }

  return res;
}

export function runPromisesSerially<DataT>(
  actions: (() => Promise<DataT>)[],
  isSuccess: (result: DataT) => boolean
): Promise<number> {
  const head = actions[0];
  const tail = actions.slice(1);
  return new Promise<number>((resolve) => {
    if (!head) {
      resolve(0);
      return;
    }

    return head().then((resHead) => {
      if (isSuccess(resHead)) {
        if (tail.length === 0) {
          resolve(1);
        } else {
          runPromisesSerially(tail, isSuccess).then((resTail) => {
            resolve(resTail + 1);
          });
        }
      } else {
        resolve(1);
      }
    });
  });
}

export function firstDefined<TypeT>(a: TypeT | undefined, b: TypeT | undefined, c?: TypeT | undefined): TypeT {
  if (a !== undefined && a !== null) {
    return a;
  }

  if (b !== undefined && b !== null) {
    return b;
  }

  if (c !== undefined && c !== null) {
    return c;
  }

  throw new Error(`At leest one of the parameters should be defined.`);
}
