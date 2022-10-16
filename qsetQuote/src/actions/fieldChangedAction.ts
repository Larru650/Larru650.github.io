import { SMap, voidFunction } from '@avantia/client-and-server-utilities';
import { recordElapsedTime } from '@avantia/questionset-model';
import { HpEventDetail } from '../components/formControls/inputControl';
import { HpClientQuestion, HpClientQuestionUI, HpEventTypes } from '../interfaces';
import { FormName, HpAction, HpDispatchFunction } from './actionTypes';
import { createDependentActionRunner } from './dependentActionRunner';
import { triggerFieldChangeEvent } from './eventActions';

export interface FieldChangedPayload {
  key: string;
  value: string;
  eventType: HpEventTypes;
  detail: HpEventDetail;
  error: string;
  formName: FormName;
  ui?: Partial<HpClientQuestionUI>;
  question: HpClientQuestion;
  timeStamp: number;
}

export type FieldChangedAction = HpAction<FieldChangedPayload>;

const DELAY_TIME_MS = 1500;
const delayed: SMap<NodeJS.Timeout> = {};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function fieldChangedAction(payload: FieldChangedPayload): Function {
  return recordElapsedTime('fieldChangedAction', () => {
    const { key, eventType, question } = payload;
    let { value } = payload;
    const isBlur = eventType === 'blur';
    const isClick = eventType === 'click';
    const isFocus = eventType === 'focus';
    const type = isBlur ? 'FIELD_BLURRED' : 'FIELD_CHANGED';
    const unformat = payload.detail.unformat;
    if (unformat) {
      const newValue = unformat(value, eventType);
      if (newValue !== value) {
        // Treat this blur event as a change event
        value = newValue;
        payload.value = value;
        payload.eventType = 'change';
        return fieldChangedAction(payload);
      }
    }

    triggerFieldChangeEvent({ key, question: question, eventType, value });

    if (isFocus) {
      return voidFunction;
    }

    const dependentActions = question.data.dependentActions;
    const func = createDependentActionRunner({ dependentActions, question, payload });

    if (func) {
      return func;
    }

    if (delayed[key]) {
      clearTimeout(delayed[key]);
    }

    return (dispatch: HpDispatchFunction<FieldChangedPayload>): void => {
      if (!(isBlur || isClick)) {
        delayed[key] = setTimeout(() => {
          dispatch({ type: 'DELAYED_FIELD_VALIDATION', payload });
        }, DELAY_TIME_MS);
      }

      dispatch({ type, payload });
    };
  });
}
