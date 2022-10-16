import { HpClientQuestion, HpEventTypes } from '../interfaces';
import { HpAction, HpDispatchFunction } from './actionTypes';

export interface HelpInfoClickPayload {
  eventType: HpEventTypes;
  question: HpClientQuestion;
}

export type HelpInfoClickAction = HpAction<HelpInfoClickPayload>;

export function helpInfoClickAction(payload: HelpInfoClickPayload) {
  return (dispatch: HpDispatchFunction<HelpInfoClickPayload>): void => {
    dispatch({ type: 'HELP_INFO_CLICK', payload });
  };
}
