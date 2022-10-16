import { HpDateValidator, HpIntegerValidator } from '@avantia/form-validation';
import { HpQuestionDataTypes, HpTokensAndExpressionsThisReference, toUtcDate } from '@avantia/questionset-model';
import lodash from 'lodash';
import {
  ControlValueTypes,
  HpClientQuestionLookupItem,
  HpClientQuestionLookupItemMap,
  HpClientQuestionUI
} from '../../interfaces';

export type EqualityComparer = (key: string, value: ControlValueTypes) => boolean;

export function createEqualityComparer(
  dataType: HpQuestionDataTypes,
  isMultiSelect: boolean | undefined,
  questionId: string
): EqualityComparer {
  let func: EqualityComparer;
  if ((dataType === 'array' && !isMultiSelect) || (isMultiSelect && dataType !== 'array')) {
    throw new Error(
      `Questions with ${JSON.stringify({ dataType })} must also have ${JSON.stringify({
        isMultiSelect: true
      })} (QuestionID: '${questionId}').`
    );
  }

  if (dataType === 'array' && isMultiSelect === true) {
    func = (k, v): boolean => {
      return lodash.isArray(v) && v.indexOf(k) >= 0;
    };
  } else {
    func = (k, v): boolean => k === v;
  }

  return func;
}

export function iterateLookupMap(
  lookup: HpClientQuestionLookupItemMap,
  ui: HpClientQuestionUI,
  action: (item: HpClientQuestionLookupItem | null, key: string) => void
): void {
  const visibility = ui.lookupVisibility;
  lodash.forOwn(lookup, (item, key) => {
    if (!visibility || visibility[key]) {
      action(item, key);
    }
  });
}

export type MinMaxValueTypes = Date | number;

export interface GetMinMaxValuesFromValidatorProps<ValueT extends MinMaxValueTypes> {
  minValue: ValueT | null;
  maxValue: ValueT | null;
}

export function getMinMaxDateValuesFromValidator(
  validator: HpDateValidator | undefined
): GetMinMaxValuesFromValidatorProps<Date> {
  return getMinMaxValuesFromValidator<Date>(validator, toUtcDate);
}

function getMinMaxValuesFromValidator<ValueT extends MinMaxValueTypes>(
  validator: HpDateValidator | HpIntegerValidator | undefined,
  convertToType: (value: any) => ValueT
): GetMinMaxValuesFromValidatorProps<ValueT> {
  if (!validator) {
    return { minValue: null, maxValue: null };
  }

  const props = validator.getProps();

  // eslint-disable-next-line prefer-const
  let { minValueExpr, maxValueExpr, minValue, maxValue } = props;

  if (minValueExpr || maxValueExpr) {
    const thisRef = new HpTokensAndExpressionsThisReference();
    if (minValueExpr) {
      minValue = (minValueExpr as (this: HpTokensAndExpressionsThisReference) => ValueT).call(thisRef);
    }

    if (maxValueExpr) {
      maxValue = (maxValueExpr as (this: HpTokensAndExpressionsThisReference) => ValueT).call(thisRef);
    }
  }

  return {
    minValue: minValue === undefined ? null : convertToType(minValue),
    maxValue: maxValue === undefined ? null : convertToType(maxValue)
  };
}
