import lodash from 'lodash';
import { HpAction } from '../actions/actionTypes';
import { AjaxCallCompletedAction, AjaxCallStartedAction, FetchErrorOcurredAction } from '../actions/ajaxCallActions';
import { getInitialState, UserInterfaceState } from './initialState';
import { ReducerProcessor } from './reducerProcessor';

const minMsToShowError = 10 * 1000;

const processor = new ReducerProcessor<UserInterfaceState>('UserInterface');

processor.add<FetchErrorOcurredAction>('FETCH_ERROR_OCCURRED', (state, action) => {
  const { fetchError } = action;
  const message =
    action.message ||
    (lodash.isObject(fetchError) ? fetchError.message : action.fetchError) ||
    'An unexpected error has occurred.';
  return {
    ...state,
    fetchError: {
      error: fetchError,
      message,
      timestamp: new Date().getTime()
    },
    ajaxCallsInProgress: 0,
    disableButtons: false
  };
});

processor.add<AjaxCallStartedAction>('AJAX_CALL_STARTED', state => {
  const ajaxCallsInProgress = state.ajaxCallsInProgress + 1;
  return {
    ...state,
    ajaxCallsInProgress,
    disableButtons: ajaxCallsInProgress > 0
  };
});

processor.add<AjaxCallCompletedAction>('AJAX_CALL_COMPLETED', state => {
  let { fetchError } = state;
  let ajaxCallsInProgress = state.ajaxCallsInProgress - 1;
  if (ajaxCallsInProgress < 0) {
    // less than 0 only possible in the case of a fetch error.
    ajaxCallsInProgress = 0;
  }

  if (fetchError && fetchError.timestamp + minMsToShowError < new Date().getTime()) {
    fetchError = null;
  }

  return {
    ...state,
    ajaxCallsInProgress,
    disableButtons: ajaxCallsInProgress > 0,
    fetchError
  };
});

export function userInterfaceReducer(
  state: UserInterfaceState = getInitialState().userInterface,
  action: HpAction<unknown>
): UserInterfaceState {
  return processor.process(state, action);
}
