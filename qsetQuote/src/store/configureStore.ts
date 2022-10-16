import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { getConfig } from '../config/configuration';
import { getInitialState } from '../reducers/initialState';
import { rootReducer } from '../reducers/rootReducer';
import { postAnswersMiddleware } from './postAnswersMiddleware';

declare const window: any;

const { developerModeEnabled } = getConfig();
const middleware = [thunkMiddleware, postAnswersMiddleware];

let composeEnhancers = compose;

if (developerModeEnabled) {
  middleware.push(createLogger());

  // add support for Redux dev tools
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeEnhancers;

  console.warn("Adding 'redux-immutable-state-invariant' middleware.");
  middleware.push(
    require('redux-immutable-state-invariant').default({
      ignore: ['questionSet.displayState'] // this probably has a circular dependency, in any case, if not ignored it makes the site hang.
    })
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function configureStore() {
  return createStore(rootReducer, getInitialState(), composeEnhancers(applyMiddleware(...middleware)));
}
