import { SMap } from '@avantia/client-and-server-utilities';
import { HpDebugFlags, logInfo, MicroTimer } from '@avantia/questionset-model';
import axios from 'axios';
import lodash from 'lodash';
import { applyChanges } from '../reducers/reducerLibrary';
import { ActionTypes, HpDispatchFunction } from './actionTypes';

export interface FetchOptions {
  url: string;
  method?: 'GET' | 'POST';
  data?: object;
  headers?: SMap<string>;
}

export interface FetchResolverProps<PayloadT> {
  options: FetchOptions;
  fetchSilently?: boolean;
  dispatch: HpDispatchFunction<PayloadT>;
  action?: ActionTypes;
  successAction?: (payload: PayloadT) => void;
  failedAction?: (reason: unknown) => void;
}

export function fetchResolver<PayloadT>({
  options,
  dispatch,
  action,
  successAction,
  failedAction,
  fetchSilently: requestSilently
}: FetchResolverProps<PayloadT>): Promise<void> {
  requestSilently = requestSilently === true;
  if (!requestSilently) {
    dispatch({ type: 'AJAX_CALL_STARTED' });
  }

  if (options.data && (!options.headers || !options.headers['Content-Type'])) {
    options.headers = applyChanges(options.headers || {}, { 'Content-Type': 'application/json' });
  }

  options.method = options.method || 'GET';

  const wasLogged = logInfo(options, HpDebugFlags.AjaxRequestBodies | HpDebugFlags.AjaxRequests);

  const { method, url } = options;
  if (!wasLogged) {
    logInfo({ method, url }, HpDebugFlags.AjaxRequests);
  }

  const timer = new MicroTimer().start();
  return axios(options)
    .then((response) => {
      logInfo({ method, url, responseTime: timer.elapsedTimeAsString() }, HpDebugFlags.AjaxRequests);
      const payload = response.data as PayloadT;
      if (response.status >= 200 && response.status < 300) {
        if (!requestSilently) {
          dispatch({ type: 'AJAX_CALL_COMPLETED' });
        }

        if (successAction && lodash.isFunction(successAction)) {
          successAction(payload);
        } else if (action) {
          dispatch({ type: action, payload });
        } else {
          throw new Error("Either 'action' or 'successAction must be provided.");
        }
      } else {
        createErrorHandler(dispatch, failedAction)(response);
      }
    })
    .catch(createErrorHandler(dispatch, failedAction));
}

function createErrorHandler<PayloadT>(
  dispatch: HpDispatchFunction<PayloadT>,
  failedAction?: (reason: unknown) => void
): (reason: unknown) => void {
  return (reason: unknown): void => {
    console.error(reason);
    dispatch({
      type: 'FETCH_ERROR_OCCURRED',
      fetchError: "We're having problems connecting to our servers at the moment.",
      reason
    });

    if (failedAction) {
      failedAction(reason);
    }
  };
}
