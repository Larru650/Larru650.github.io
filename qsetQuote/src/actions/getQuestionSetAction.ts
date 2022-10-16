import { HpQuestionSet } from '@avantia/questionset-model';
import { getConfig } from '../config/configuration';
import { getQueryStringValue } from '../tools/utilities';
import { HpAction, HpDispatchFunction } from './actionTypes';
import { fetchResolver } from './fetchResolver';

export type GetQuestionSetAction = HpAction<HpQuestionSet>;

export function getQuestionSetAction(): Function {
  const { websiteEndpoint, answersKey } = getConfig();
  return (dispatch: HpDispatchFunction<HpQuestionSet>): Promise<void> => {
    const questionSetId = 'blah';
    const cookieValue = getQueryStringValue(answersKey);
    const queryText = cookieValue ? `?${answersKey}=${encodeURI(cookieValue)}` : '';
    const url = `${websiteEndpoint}/api/QuestionSet/${encodeURIComponent(questionSetId)}${queryText}`;
    return fetchResolver({
      options: { url, method: 'GET' },
      dispatch,
      successAction: (payload) => {
        dispatch({ type: 'QUESTIONSET_RETRIEVED', payload });
      }
    });
  };
}
