import { getConfig } from '../config/configuration';
import { HpAction, HpDispatchFunction } from './actionTypes';
import { fetchResolver } from './fetchResolver';

export type GetAuthenticatedUserPayload = {};

export type GetAuthenticatedUserAction = HpAction<GetAuthenticatedUserPayload>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function getAuthenticatedUserAction() {
  const { websiteEndpoint } = getConfig();
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return (dispatch: HpDispatchFunction<GetAuthenticatedUserPayload>) => {
    const url = `${websiteEndpoint}/api/authenticatedUser`;
    return fetchResolver({
      options: { url, method: 'GET' },
      dispatch,
      successAction: (payload) => {
        dispatch({ type: 'RECEIVE_AUTHENTICATED_USER', payload });
      }
    });
  };
}
