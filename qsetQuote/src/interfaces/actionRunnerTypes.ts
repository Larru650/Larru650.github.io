import { HpAnswerMap } from '@avantia/questionset-model';
import { HpClientDependentAction, HpClientQuestion, HpClientQuestionMap, HpQuestionDisplayState } from '.';
import { FieldChangedPayload } from '../actions/fieldChangedAction';

export interface CreateActionPromisesProps {
  questionSetId: string;
  dependentAction: HpClientDependentAction;
  question: HpClientQuestion;
  displayState: HpQuestionDisplayState;
  questionMap: HpClientQuestionMap;
  answerMap: HpAnswerMap;
  payload?: FieldChangedPayload;
}
