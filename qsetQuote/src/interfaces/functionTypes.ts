import { HpActionPropTypes, HpAnswerValueTypes } from '@avantia/questionset-model';
import { HpClientQuestion, HpClientQuestionLookupItemMap, HpClientQuestionSetState } from '.';
import { ReducerProcessor } from '../reducers/reducerProcessor';
import { HpEventTypes } from './eventTypes';
import { HpClientPrerequisiteThisReference } from './thisReferencesTypes';

// These function signatures should be identical to those in the @avantia/questionset-script-parser project but
// with tightened type definitions where appropriate (e.g. string becomes HpEventTypes in HpClientDynamicFunctionProps)

export interface HpClientDynamicFunctionProps {
  questionId: string;
  sourceQuestionId: string;
  groupNumber: number | undefined;
  eventType: HpEventTypes;
}

export type HpClientConditionFunction = (
  this: HpClientPrerequisiteThisReference<HpClientQuestion>,
  props: HpClientDynamicFunctionProps
) => boolean;

// default answers (only) use this signature
export type HpClientDefaultAnswerExpressionFunction = (
  this: HpClientPrerequisiteThisReference<HpClientQuestion>
) => HpAnswerValueTypes;

// dependent and calculated answers use this signature
export type HpClientAnswerExpressionFunction = (
  this: HpClientPrerequisiteThisReference<HpClientQuestion>,
  props: HpClientDynamicFunctionProps
) => HpAnswerValueTypes;

export type HpClientLookupExpressionFunction = (
  this: HpClientPrerequisiteThisReference<HpClientQuestion>,
  questionId: string
) => HpClientQuestionLookupItemMap;

// Functions below this line only exist in this website project

export interface HpClientButtonClickActionProps {
  currState: HpClientQuestionSetState;
  state: HpClientQuestionSetState;
  question: HpClientQuestion;
  props: HpActionPropTypes;
}

export type HpClientButtonClickActionFunction = (props: HpClientButtonClickActionProps) => HpClientQuestionSetState;

export type HpRegisterSomethingFunction = (processor: ReducerProcessor<HpClientQuestionSetState>) => void;
