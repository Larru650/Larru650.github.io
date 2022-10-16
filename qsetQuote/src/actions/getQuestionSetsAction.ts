import { HpQuestionSet } from '@avantia/questionset-model';
import { getConfig } from '../config/configuration';
import { getQueryStringValue } from '../tools/utilities';
import { HpAction, HpDispatchFunction } from './actionTypes';
import { fetchResolver } from './fetchResolver';

export type GetQuestionSetsAction = HpAction<GetQuestionSetsPayload>;

export type GetQuestionSetsPayload = HpQuestionSet[];

export function getQuestionSetsAction(): Function {
  return (dispatch: HpDispatchFunction<GetQuestionSetsPayload>): Promise<void> => {
    const { answersKey, websiteEndpoint } = getConfig();
    const cookieValue = getQueryStringValue(answersKey);
    const queryText = cookieValue ? `?${answersKey}=${encodeURI(cookieValue)}` : '';
    const url = `${websiteEndpoint}/api/QuestionSet/List${queryText}`;
    return fetchResolver({
      options: { url, method: 'GET' },
      dispatch,
      successAction: (payload) => {
        dispatch({ type: 'QUESTIONSETS_RETRIEVED', payload });
      }
    });
  };
}
