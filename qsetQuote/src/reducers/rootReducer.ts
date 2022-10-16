import { combineReducers } from 'redux';
import { featureToggleReducer } from './featureToggleReducer';
import { questionSetReducer } from './questionSetReducer';
import { userInterfaceReducer } from './userInterfaceReducer';

const rootReducer = combineReducers({
  // Add your reducer references here
  // e.g. feature: featureReducer
  userInterface: userInterfaceReducer,
  featureToggles: featureToggleReducer,
  questionSet: questionSetReducer
});

export { rootReducer };
