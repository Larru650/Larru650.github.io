import { HpDebugFlags, HpQuestionSet, logInfo } from '@avantia/questionset-model';
import { getConfig } from '../config/configuration';
import { HpClientAnswerMap } from '../interfaces';
import { HpAction, HpDispatchFunction } from './actionTypes';
import { fetchResolver } from './fetchResolver';

export interface AnswersPayload {
  answersId: string;
  answers: HpClientAnswerMap;
  questionSet: HpQuestionSet;
}

export type GetAnswersAction = HpAction<AnswersPayload>;

export interface GetAnswersActionPayload {
  questionSetId: string;
  answersId: string;
}

export function getAnswersAction({ questionSetId, answersId }: GetAnswersActionPayload): Function {
  const answerData = (window as any).answerData;
  if (answerData) {
    return (dispatch: HpDispatchFunction<HpQuestionSet>): Promise<void> => {
      return new Promise<void>((resolve) => {
        logInfo(`Retrieved answers from index page.`, HpDebugFlags.None);
        dispatch({ type: 'ANSWERS_RETRIEVED', payload: answerData });
        resolve();
      });
    };
  }

  const { websiteEndpoint } = getConfig();
  return (dispatch: HpDispatchFunction<HpQuestionSet>): Promise<void> => {
    const url = `${websiteEndpoint}/api/Answers/${encodeURIComponent(questionSetId)}/${encodeURIComponent(answersId)}`;
    return fetchResolver({
      options: { url, method: 'GET' },
      dispatch,
      successAction: (payload) => {
        if (payload && (payload as any).success === false) {
          console.error(`The call to ${url} failed: ${JSON.stringify(payload)}`);
          dispatch({ type: 'FETCH_ERROR_OCCURRED', payload });
        } else {
          dispatch({ type: 'ANSWERS_RETRIEVED', payload });
        }
      }
    });
  };
}
