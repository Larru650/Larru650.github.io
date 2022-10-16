import { FeatureToggleEnum } from '../interfaces/featureToggle';
import { featureToggleReducer } from './featureToggleReducer';
import { getInitialState } from './initialState';

describe('featureToggleReducer', () => {
  it('correctly sets the feature toggle value', () => {
    // act
    const newState = featureToggleReducer(getInitialState().featureToggles, {
      type: 'RETRIEVED_FEATURE_TOGGLE_STATE',
      payload: { featureName: 'ShowFooter', isEnabled: true }
    });

    // assert
    expect(newState.get(FeatureToggleEnum.ShowFooter)).toBe(true);
  });
});
