import { GetFeatureToggleAction } from '../actions/getFeatureToggleStateAction';
import { FeatureToggleEnum } from '../interfaces';
import { getInitialState } from './initialState';
import { ReducerProcessor } from './reducerProcessor';

export type FeatureToggleState = Map<FeatureToggleEnum, boolean>;
// Map might not be supported in redux devtools, investigate further.
// if (environment.envName === 'dev') {
//   (Map.prototype as any).toJSON = function () {
//     return JSON.parse(JSON.stringify([...this]));
//   };
// }
const processor = new ReducerProcessor<FeatureToggleState>('FeatureToggle');

processor.add<GetFeatureToggleAction>('RETRIEVED_FEATURE_TOGGLE_STATE', (state, action) => {
  if (action.payload) {
    const { featureName, isEnabled } = action.payload || {};
    const newState = new Map(state);
    newState.set(FeatureToggleEnum[featureName], isEnabled);
    return newState;
  }

  return state;
});

export function featureToggleReducer(
  state: FeatureToggleState = getInitialState().featureToggles,
  action: GetFeatureToggleAction
): FeatureToggleState {
  return processor.process(state, action);
}
