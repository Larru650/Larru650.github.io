import { SMap } from '@avantia/client-and-server-utilities';
import { validateFields } from '@avantia/form-validation';
import {
  HpAnswerMap,
  HpControlActionTypes,
  HpCustomScriptActionProps,
  HpSubmitFormActionProps,
  HpValidateFieldsActionProps
} from '@avantia/questionset-model';
import { CreateActionPromise } from '../configureFeatures';
import {
  CreateActionPromisesProps,
  DependentActionFunction,
  HpClientCustomActionFunction,
  HpClientDependentAction,
  HpClientQuestion,
  HpClientQuestionMap,
  HpClientQuestionSetState,
  HpQuestionDisplayState
} from '../interfaces';
import { createValidationModel } from '../reducers/questionSetReducerLibrary';
import { invokeCustomScript } from '../tools/dynamicScripts';
import { ensureDefined, runPromisesSerially } from '../tools/utilities';
import { HpDispatchFunction } from './actionTypes';
import { fetchResolver } from './fetchResolver';
import { FieldChangedPayload } from './fieldChangedAction';

export interface CreateDependentActionRunnerPayloadProps {
  dependentActions: HpClientDependentAction[] | undefined;
  question: HpClientQuestion;
  payload: FieldChangedPayload;
}

export interface CreateDependentActionRunnerProps {
  questionSetId: string;
  dependentActions: HpClientDependentAction[] | undefined;
  question: HpClientQuestion;
  questionMap: HpClientQuestionMap;
  answerMap: HpAnswerMap;
  displayState: HpQuestionDisplayState;
}

// this holds a map of feature actions, which allows features to be pluggable.
const features: SMap<CreateActionPromise<unknown>> = {};

export function createDependentActionRunner(
  props: CreateDependentActionRunnerProps | CreateDependentActionRunnerPayloadProps
): DependentActionFunction<unknown> | undefined {
  let promiseList: DependentActionFunction<unknown>[] = [];
  const { dependentActions } = props;
  if (dependentActions && dependentActions.length > 0) {
    const { answerMap, question, questionMap, displayState, questionSetId } = props as CreateDependentActionRunnerProps;
    const payload = (props as CreateDependentActionRunnerPayloadProps).payload;
    promiseList = dependentActions
      .map((da) =>
        createActionPromises({
          dependentAction: da,
          question,
          questionMap,
          answerMap,
          displayState,
          payload,
          questionSetId
        })
      )
      .filter((fn) => fn !== undefined) as DependentActionFunction<unknown>[];
  }

  if (promiseList.length === 0) {
    return undefined;
  }

  const func: DependentActionFunction<unknown> = (dispatch: HpDispatchFunction<unknown>): Promise<boolean | void> => {
    const funList = promiseList.map((fn) => (): Promise<boolean | void> => {
      return fn(dispatch);
    });

    return new Promise<boolean>((resolve, reject) => {
      return runPromisesSerially(funList, (res) => res !== false)
        .then(() => resolve(true))
        .catch(reject);
    });
  };

  return func;
}

function createActionPromises(properties: CreateActionPromisesProps): DependentActionFunction<unknown> | undefined {
  const { dependentAction, questionMap, answerMap, displayState, question, payload, questionSetId } = properties;
  const { action, props } = dependentAction;

  if (action === 'validate-fields') {
    const { eventType } = payload || { eventType: 'click' };
    const questions = ensureDefined(questionMap, 'questionMap');
    const answers = ensureDefined(answerMap, 'answerMap');
    const { fieldsToValidate } = (props as HpValidateFieldsActionProps) || {};
    const validateFieldsAction: DependentActionFunction<unknown> = (dispatch) => {
      return new Promise<boolean>((resolve) => {
        const partState: Partial<HpClientQuestionSetState> = { questions, answers, displayState };
        const validation = validateFields({
          fields: createValidationModel(partState as HpClientQuestionSetState),
          fieldKeysToValidate: fieldsToValidate || undefined,
          previousResult: undefined,
          eventType
        });
        const okay = validation.count === 0;
        dispatch({ type: okay ? 'FIELDS_PASSED_VALIDATION' : 'FIELDS_FAILED_VALIDATION', payload: validation });
        resolve(okay);
      });
    };
    return validateFieldsAction;
  } else if (features[action]) {
    // perform an action upon an optional feature that has been registered via the registerActionPromise(...) function
    return features[action](properties);
  } else if (action === 'submit-form') {
    const { submitUri, stateProperties } = (props as HpSubmitFormActionProps) || {};
    const answers = ensureDefined(answerMap, 'answerMap');
    const partState: Partial<HpClientQuestionSetState> = { answers, questionSetId };
    const data: SMap<any> = {};
    stateProperties.forEach((key) => {
      data[key] = partState[key] || null;
    });
    const submitFormAction: DependentActionFunction<unknown> = (dispatch) => {
      return new Promise<boolean>((resolve, reject) => {
        fetchResolver<any>({
          options: { url: submitUri, data, method: 'POST' },
          dispatch,
          successAction: (resp) => {
            alert(
              `Your quote has been saved.\n\nYour quote reference is: ${resp.quoteGuid}\n\nTime taken: ${resp.timeTaken}`
            );
          },
          failedAction: () => alert('Failed to save')
        })
          .then(() => resolve(true))
          .catch(reject);
      });
    };
    return submitFormAction;
  } else if (action === 'custom') {
    const { eventType } = payload || { eventType: 'click' };
    const props = dependentAction.props as HpCustomScriptActionProps;
    const customScript = (props.customScript as unknown) as HpClientCustomActionFunction;
    const validateFieldsAction: DependentActionFunction<unknown> = (dispatch) => {
      return new Promise<boolean>((resolve) => {
        const dispatchAction = invokeCustomScript(
          customScript,
          question ? question.questionId : '',
          eventType,
          questionMap,
          answerMap,
          displayState
        );

        if (dispatchAction) {
          dispatch(dispatchAction);
        }

        resolve(dispatchAction !== false);
      });
    };
    return validateFieldsAction;
  } else {
    switch (action) {
      case 'add-control-group':
      case 'remove-control-group':
      case 'next-section':
      case 'previous-section':
        // These actions are handled elsewhere, usually by the updateAnswer function.
        break;
      default:
        // Some actions do not need to be executed when a user performs an action. These are generally executed in the
        // updateAnswer function and usually affect other answers than that interacted by the user.
        console.error(`The "${action}" action is currently ignored.`);
        break;
    }
  }

  return undefined;
}

export function registerActionPromise(
  key: HpControlActionTypes,
  createActionPromise: CreateActionPromise<unknown>
): void {
  features[key] = createActionPromise;
}
