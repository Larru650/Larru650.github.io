import { FormName, HpAction, HpDispatchFunction } from './actionTypes';

export type FluentActionTypes = 'ok' | 'open';

export interface FluentAnswerClickPayload {
  eventType: string;
  formName: FormName;
  targetId: string;
  fluentAction: FluentActionTypes;
}

export type FluentAnswerClickAction = HpAction<FluentAnswerClickPayload>;

export function fluentAnswerClickAction(payload: FluentAnswerClickPayload) {
  return (dispatch: HpDispatchFunction<FluentAnswerClickPayload>): void => {
    dispatch({ type: 'FLUENT_ANSWER_CLICK', payload });
  };
}
