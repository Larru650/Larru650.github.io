import { addToWindowRef } from '@avantia/questionset-model';
import cookies from 'js-cookie';
import { Middleware } from 'redux';
import { v4 as uuid } from 'uuid';
import { ActionTypes } from '../actions/actionTypes';
import { fetchResolver } from '../actions/fetchResolver';
import { getConfig } from '../config/configuration';
import { HpClientAnswerMap, HpClientQuestionSetState } from '../interfaces';
import { GlobalState } from '../reducers/initialState';

let postedAnswers: HpClientAnswerMap | undefined;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const postAnswersMiddleware: Middleware = ({ dispatch, getState }) => next => action => {
  next(action);

  const { websiteEndpoint, answersKey, questionSetKey } = getConfig();

  const type = action.type as ActionTypes;
  if (
    !(
      type === 'DELAYED_FIELD_VALIDATION' ||
      type === 'NAVIGATION_CHANGED' ||
      type === 'FIELD_CHANGED' ||
      type === 'DYNAMIC_BUTTON_CLICK'
    )
  ) {
    return;
  }

  const questionSet = (getState() as GlobalState).questionSet as HpClientQuestionSetState;
  const { questionSetId, answers } = questionSet;
  if (answers === postedAnswers) {
    return;
  }

  let answersId = cookies.get(answersKey);
  if (!answersId) {
    answersId = uuid();
    cookies.set(answersKey, answersId);
  }

  cookies.set(questionSetKey, questionSetId);
  const url = `${websiteEndpoint}/api/Answers/${encodeURIComponent(questionSetId)}/${encodeURIComponent(answersId)}`;

  // Provide a hook so Selenium can verify answers, etc.
  addToWindowRef({ answers }, win => win.isSeleniumTest === true);

  // Don't use the current thread to submit the answers.
  setTimeout(() => {
    postedAnswers = answers;
    fetchResolver({
      options: { url, method: 'POST', data: answers },
      dispatch,
      action: 'ANSWERS_POSTED',
      fetchSilently: true
    });
  }, 1);
};

export { postAnswersMiddleware };
