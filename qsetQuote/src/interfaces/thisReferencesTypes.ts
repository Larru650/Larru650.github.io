import { CreateControlIdProps, HpAnswerMap, HpAnswerValueTypes, HpQuestion } from '@avantia/questionset-model';
import { HpQuestionDisplayState } from './displayStateTypes';
import { HpClientAnswer, HpClientQuestion, HpClientQuestionMap } from './questionTypesClient';

export type HpClientPrerequisiteThisReference<QuestionT extends HpClientQuestion | HpQuestion> = HpClientThisReference<
  QuestionT
>;

export type HpClientValidationThisReference<QuestionT extends HpClientQuestion | HpQuestion> = HpClientThisReference<
  QuestionT
>;

export type HpClientThisRefGetItemFunctionProps = string | CreateControlIdProps;

export type HpClientThisRefGetItemFunction<ResultT> = (
  props: HpClientThisRefGetItemFunctionProps
) => ResultT | undefined;

export interface HpClientThisRefPartialState {
  questions: HpClientQuestionMap;
  answers: HpAnswerMap;
  displayState?: HpQuestionDisplayState | undefined;
}

interface HpClientThisReference<QuestionT extends HpClientQuestion | HpQuestion> {
  getQuestion: HpClientThisRefGetItemFunction<QuestionT>;
  getAnswer: HpClientThisRefGetItemFunction<HpClientAnswer>;
  getAnswerValue: HpClientThisRefGetItemFunction<HpAnswerValueTypes>;
  isElementVisible: (questionId: string, groupNumber: number | undefined) => boolean;
  getIdFromName: (name: string, groupNumber?: number | undefined) => string;
}
