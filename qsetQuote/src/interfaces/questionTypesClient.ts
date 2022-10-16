import { SMap } from '@avantia/client-and-server-utilities';
import { HpValidator } from '@avantia/form-validation';
import {
  HpActionPropTypes,
  HpAddressLookupItemResponse,
  HpAnswer,
  HpAnswerValueTypes,
  HpCommonQuestion,
  HpControlActionTypes,
  HpHelpInfo,
  HpQuestionLookupCommonItem
} from '@avantia/questionset-model';
import { HpDynamicFunctionProps, HpPrerequsisiteThisReference } from '@avantia/questionset-script-parser';
import {
  HpClientAnswerExpressionFunction,
  HpClientButtonData,
  HpClientConditionFunction,
  HpClientInputTextAndStyle,
  HpClientLookupExpressionFunction
} from '.';
import { HpAction, HpDispatchFunction } from '../actions/actionTypes';

export type HpClientQuestionMap = SMap<HpClientQuestion>;
export type HpClientDependentAnswerMap = SMap<HpClientDependentAnswer[]>;
export type DependentActionFunction<PayloadT> = (dispatch: HpDispatchFunction<PayloadT>) => Promise<void | boolean>;

export interface HpClientDependentAnswer {
  condition: HpClientConditionFunction;
  answer: HpAnswerValueTypes;
  answerExpr?: HpClientAnswerExpressionFunction;
}

export interface HpClientDependentAction {
  condition?: HpClientConditionFunction;
  action: HpControlActionTypes;
  props?: HpActionPropTypes;
}

export interface HpClientQuestion extends HpCommonQuestion {
  prerequisites: HpClientConditionFunction[];
  calculatedAnswer?: HpClientAnswerExpressionFunction;
  data: HpClientQuestionData | HpClientButtonData;
  position: number;
  defaultExpr?: string;
}

export interface HpClientQuestionData {
  dependentAnswers?: HpClientDependentAnswerMap;
  dependentActions?: HpClientDependentAction[];
  lookup: HpClientQuestionLookupItemMap;
  lookupExpr?: HpClientLookupExpressionFunction;
  textAndStyle: HpClientInputTextAndStyle;
  validation: HpValidator<unknown>[];
  helpInfo?: HpHelpInfo;
}

export interface HpClientAnswer extends HpAnswer, HpClientPartialAnswer {
  // empty
}

export interface HpClientPartialAnswer {
  partial?: unknown | undefined;
}

export type HpClientAnswerMap = SMap<HpClientAnswer>;

export interface AddressLookupPartialAnswer {
  addresses: HpAddressLookupItemResponse[];
}

export type HpClientQuestionLookupItemMap = SMap<HpClientQuestionLookupItem | null>;

export interface HpClientQuestionLookupItem extends HpQuestionLookupCommonItem {
  condition?: HpClientConditionFunction;
}

export type HpClientCustomActionResponse = HpAction<any> | false | undefined;

export type HpClientCustomActionFunction = (
  this: HpPrerequsisiteThisReference,
  props: HpDynamicFunctionProps
) => HpClientCustomActionResponse;
