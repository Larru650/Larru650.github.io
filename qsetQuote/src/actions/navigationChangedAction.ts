import { HpEventTypes } from '../interfaces';
import { FormName, HpAction, HpDispatchFunction } from './actionTypes';

export interface NavigationChangedPayload {
  eventType: HpEventTypes;
  formName: FormName;
  activeKey: string;
}

export type NavigationChangedAction = HpAction<NavigationChangedPayload>;

export function navigationChangedAction(payload: NavigationChangedPayload) {
  return (dispatch: HpDispatchFunction<NavigationChangedPayload>): void => {
    dispatch({ type: 'NAVIGATION_CHANGED', payload });
  };
}
