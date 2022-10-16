import { DestructuredControlIdResult } from '@avantia/questionset-model';
import { QuestionSetPageProps } from '../components/questionSetForm/questionSetPageFunctions';
import { DependentActionFunction, HpClientQuestion } from '../interfaces';
import { FormName, HpAction, HpDispatchFunction } from './actionTypes';
import { createDependentActionRunner } from './dependentActionRunner';
import { triggerFieldChangeEvent } from './eventActions';

export interface DynamicButtonClickPayload extends DestructuredControlIdResult {
  eventType: string;
  formName: FormName;
  pageProps: QuestionSetPageProps;
  question: HpClientQuestion;
}

export type DynamicButtonClickAction = HpAction<DynamicButtonClickPayload>;

export function dynamicButtonClickAction(payload: DynamicButtonClickPayload): DependentActionFunction<unknown> {
  const { pageProps, questionId, eventType } = payload;
  const question = pageProps.questions[questionId];
  const dependentActions = question.data.dependentActions;

  triggerFieldChangeEvent({ key: questionId, question, eventType: eventType as any, value: null });

  let func: DependentActionFunction<unknown> | undefined;
  if (dependentActions && dependentActions.length > 0) {
    func = createDependentActionRunner({
      questionSetId: pageProps.questionSetId,
      dependentActions,
      question,
      answerMap: pageProps.answers,
      questionMap: pageProps.questions,
      displayState: pageProps.displayState
    });
  }

  if (!func) {
    func = (dispatch: HpDispatchFunction<DynamicButtonClickPayload>): Promise<void> => {
      return dispatch({ type: 'DYNAMIC_BUTTON_CLICK', payload });
    };
  }

  return func;
}
