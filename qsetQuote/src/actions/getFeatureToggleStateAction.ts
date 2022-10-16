import { getConfig } from '../config/configuration';
import { HpAction, HpDispatchFunction } from './actionTypes';
import { fetchResolver } from './fetchResolver';

export type GetFeatureToggleAction = HpAction<GetFeatureToggleActionPayload>;

export interface GetFeatureToggleActionPayload {
  featureName: string;
  isEnabled: boolean;
}

export function getFeatureToggleStateSuccess(payload: GetFeatureToggleActionPayload): GetFeatureToggleAction {
  return { type: 'RETRIEVED_FEATURE_TOGGLE_STATE', payload };
}

export function getFeatureToggleStateAction({ featureName }): Function {
  const { websiteEndpoint } = getConfig();
  return (dispatch: HpDispatchFunction<GetFeatureToggleActionPayload>): Promise<void> => {
    const url = `${websiteEndpoint}/api/featureToggle/${encodeURIComponent(featureName)}`;
    return fetchResolver({
      options: { url, method: 'GET' },
      dispatch,
      successAction: (payload) => {
        dispatch(getFeatureToggleStateSuccess(payload));
      }
    });
  };
}
