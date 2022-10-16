import { HpAction } from './actionTypes';

export interface FetchErrorOcurredAction extends HpAction<UserInterfacePayload> {
  message?: string;
}

export type AjaxCallStartedAction = HpAction<UserInterfacePayload>;

export type AjaxCallCompletedAction = HpAction<UserInterfacePayload>;

export interface UserInterfacePayload {
  ajaxCallsInProgress: number;
  disableButtons: boolean;
}
