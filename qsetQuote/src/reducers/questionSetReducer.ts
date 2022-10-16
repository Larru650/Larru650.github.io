import { SMap } from '@avantia/client-and-server-utilities';
import { HpValidationResult, validateFields } from '@avantia/form-validation';
import {
  addToWindowRef,
  HpAddControlGroupActionProps,
  HpControlActionTypes,
  HpDebugFlags,
  logInfo
} from '@avantia/questionset-model';
import cookies from 'js-cookie';
import lodash from 'lodash';
import { v4 as uuid } from 'uuid';
import { HpAction } from '../actions/actionTypes';
import { DynamicButtonClickAction, DynamicButtonClickPayload } from '../actions/dynamicButtonClickAction';
import { FieldChangedAction, FieldChangedPayload } from '../actions/fieldChangedAction';
import { FluentAnswerClickAction } from '../actions/fluentAnswerClickAction';
import { AnswersPayload, GetAnswersAction } from '../actions/getAnswersAction';
import { GetQuestionSetAction } from '../actions/getQuestionSetAction';
import { GetQuestionSetsAction } from '../actions/getQuestionSetsAction';
import { HelpInfoClickAction } from '../actions/helpInfoClickAction';
import { NavigationChangedAction } from '../actions/navigationChangedAction';
import { getConfig } from '../config/configuration';
import {
  HpClientAvailableQuestionSet,
  HpClientButtonClickActionFunction,
  HpClientDependentAction,
  HpClientQuestion,
  HpClientQuestionSetState,
  HpQuestionDisplayState,
  HpRegisterSomethingFunction
} from '../interfaces';
import { ensureDefined } from '../tools/utilities';
import { getInitialState } from './initialState';
import { isValidControlType } from './isValidControlType';
import { questionSetPayloadMapper } from './questionSetPayloadMapper';
import {
  addControlGroup,
  changeState,
  createValidationModel,
  fieldChangedHandler,
  processPrereqsAndCalcs,
  removeControlGroup,
  updateDateDropDownQuestionUI,
  validateAndMaybeMoveSection
} from './questionSetReducerLibrary';
import { applyChanges } from './reducerLibrary';
import { swapInQuestions, swapOutQuestions } from './reducerOptimiser';
import { ReducerProcessor } from './reducerProcessor';

const processor = new ReducerProcessor<HpClientQuestionSetState>('QuestionSet');
const { answersKey } = getConfig();

processor.add<FieldChangedAction>('FIELD_CHANGED', (state, action) => {
  return fieldChangedHandler({ state, payload: action.payload, isDelayedValidation: false });
});

processor.add<FieldChangedAction>('DELAYED_FIELD_VALIDATION', (state, action) => {
  return fieldChangedHandler({ state, payload: action.payload, isDelayedValidation: true });
});

processor.add<FieldChangedAction>('FIELD_BLURRED', (state, action) => {
  const { detail } = action.payload as FieldChangedPayload;
  if (detail.type === 'date-drop-down') {
    state = updateDateDropDownQuestionUI(detail, state);
  }

  return fieldChangedHandler({ state, payload: action.payload, isDelayedValidation: false });
});

processor.add<GetQuestionSetAction>('QUESTIONSET_RETRIEVED', (state, action) => {
  const questionSet = questionSetPayloadMapper({
    currState: state,
    payload: action.payload,
    errorIfNoPayload: false,
    isValidControlType
  });
  return questionSet ? processPrereqsAndCalcs('none', applyChanges(state, questionSet)) : state;
});

processor.add<GetAnswersAction>('ANSWERS_RETRIEVED', (state, { payload }) => {
  const { answers, answersId, questionSet } = payload as AnswersPayload;
  questionSet.answers = answers;
  const questionSetState = questionSetPayloadMapper({
    currState: state,
    payload: questionSet,
    errorIfNoPayload: true,
    isValidControlType
  });
  cookies.set(answersKey, answersId);
  cookies.set('questionSetId', questionSet.questionSetId);
  return processPrereqsAndCalcs('none', applyChanges(questionSetState as HpClientQuestionSetState, { answersId }));
});

processor.add<GetQuestionSetsAction>('QUESTIONSETS_RETRIEVED', (currState, action) => {
  const questionSets = action.payload;
  if (lodash.isArray(questionSets)) {
    const summary: HpClientAvailableQuestionSet[] = [];
    questionSets.forEach((qset) => {
      // eslint-disable-next-line prefer-const
      let { questionSetId, friendlyName, timestamp } = qset;
      // We should not have duplicate IDs, but if we do...
      if (summary.find((s) => s.questionSetId === questionSetId)) {
        console.warn(`Remapped duplicated questionSetId "${questionSetId}"`);
        qset.questionSetId = uuid();
        questionSetId = qset.questionSetId;
      }

      friendlyName = friendlyName || questionSetId;
      const timestampString = timestamp || dateToUtcString(new Date());
      qset.timestamp = timestampString;
      summary.push({ friendlyName, questionSetId, timestamp: timestampString, questionSet: qset });
    });
    const questionPayload = questionSets[questionSets.length - 1];
    const questionSet = questionSetPayloadMapper({
      currState,
      payload: questionPayload,
      errorIfNoPayload: true,
      isValidControlType
    }) as HpClientQuestionSetState;
    const displayState: HpQuestionDisplayState = questionSet.displayState || {};
    displayState.availableQuestionSets = { items: summary, selected: questionSet.questionSetId };
    questionSet.displayState = displayState;
    return processPrereqsAndCalcs('none', questionSet);
  }

  return currState;
});

processor.add<DynamicButtonClickAction>('DYNAMIC_BUTTON_CLICK', (currState, action) => {
  if (!action.payload) {
    return currState;
  }

  logInfo(() => {
    const payload: Partial<DynamicButtonClickPayload> = {};
    lodash.forOwn(action.payload, (value, key) => {
      // prevent circular reference
      if (key !== 'pageProps') {
        payload[key] = value;
      }
    });
    return {
      type: action.type,
      payload
    };
  }, HpDebugFlags.ReducerProcessor);
  const { questionId, groupNumber } = action.payload;
  const question = ensureDefined(currState.questions[questionId], `questions[${questionId}]`);
  for (const dependentAction of question.data.dependentActions || []) {
    currState = performButtonClickAction(question, groupNumber, currState, dependentAction);
  }

  return currState;
});

const clickActionMap: SMap<HpClientButtonClickActionFunction> = {};

function performButtonClickAction(
  question: HpClientQuestion,
  groupNumber: number | undefined,
  currState: HpClientQuestionSetState,
  dependentAction: HpClientDependentAction
): HpClientQuestionSetState {
  const { questionId } = question;
  const { action: buttonAction, props: actionProps = {} } = dependentAction;

  switch (buttonAction) {
    case 'validate-fields':
    case 'next-section':
    case 'previous-section':
      return validateAndMaybeMoveSection({ state: currState, buttonAction });

    case 'add-control-group':
      return changeState(currState, (state) => {
        const { groupId } = actionProps as HpAddControlGroupActionProps;
        return addControlGroup(groupId, questionId, state);
      });

    case 'remove-control-group':
      return changeState(currState, (state) => {
        const groupId = question.groupId as string;
        if (groupNumber === undefined) {
          throw new Error(
            `Question ${questionId}: The groupNumber must be provided in the payload for "${buttonAction}".`
          );
        }

        return removeControlGroup(groupId, groupNumber, state);
      });

    case 'custom':
    case 'submit-form':
      // custom actions should perform an action that calls a dispatcher.
      // they shouldn't do anything here (yet)
      break;

    default:
      {
        const buttonActionFunc = clickActionMap[buttonAction];
        if (buttonActionFunc) {
          return changeState(currState, (state) => {
            return buttonActionFunc({ currState, state, question, props: actionProps as any });
          });
        } else {
          const reason = !buttonAction
            ? 'no action is specified'
            : `the action "${buttonAction}" currently does nothing`;
          console.error(`The ${questionId} button was clicked but ${reason}.`);
        }
      }
      break;
  }

  return currState;
}

processor.add<FluentAnswerClickAction>('FLUENT_ANSWER_CLICK', (state, action) => {
  if (!action.payload) {
    return state;
  }

  const { fluentAction, targetId: questionId, eventType } = action.payload;
  const { questions, validationResult } = state;
  let displayState = state.displayState;
  let validation = validationResult;
  let isEditing = true;

  if (fluentAction === 'ok') {
    validation = validateFields({
      fields: createValidationModel(state),
      fieldKeysToValidate: [questionId],
      previousResult: lodash.cloneDeep(validation),
      eventType,
      allowPartialValidation: true
    });
    if (!validation.errors[questionId]) {
      isEditing = false;
    }
  }

  const questionsUI = { ...displayState.questionsUI };
  questionsUI[questionId] = applyChanges(questionsUI[questionId], { isEditing });
  displayState = applyChanges(displayState, { questionsUI });
  return applyChanges(state, { questions, validationResult: validation, displayState });
});

processor.add<NavigationChangedAction>('NAVIGATION_CHANGED', (state, action) => {
  if (!action.payload) {
    return state;
  }

  const { activeKey } = action.payload;
  return validateAndMaybeMoveSection({ state, buttonAction: 'move-to-section', desiredSectionId: activeKey });
});

processor.add<HelpInfoClickAction>('HELP_INFO_CLICK', (state, action) => {
  if (!action.payload) {
    return state;
  }

  const { questionId } = action.payload.question;
  let displayState = state.displayState;
  const questionsUI = { ...displayState.questionsUI };
  const { helpInfoVisibility } = questionsUI[questionId];
  questionsUI[questionId] = applyChanges(questionsUI[questionId], { helpInfoVisibility: !helpInfoVisibility });
  displayState = applyChanges(displayState, { questionsUI });
  return applyChanges(state, { displayState });
});

processor.add<HpAction<HpValidationResult>>('FIELDS_FAILED_VALIDATION', (state, action) => {
  const displayState = applyChanges(state.displayState, {
    showValidationSummary: action.payload && action.payload.count > 0
  });
  return applyChanges(state, { validationResult: action.payload, displayState });
});

processor.add<HpAction<HpValidationResult>>('FIELDS_PASSED_VALIDATION', (state, action) => {
  return applyChanges(state, { validationResult: action.payload });
});

export function questionSetReducer(
  state: HpClientQuestionSetState = getInitialState().questionSet,
  action: HpAction<unknown>
): HpClientQuestionSetState {
  const swappedIn = swapInQuestions(state);
  let newState = processor.process(swappedIn, action);
  if (newState === swappedIn) {
    return state;
  }

  addToWindowRef({ questions: newState.questions }, (win) => win.isSeleniumTest === true);
  newState = swapOutQuestions(newState);
  return newState;
}

export function registerButtonClickAction(
  key: HpControlActionTypes,
  buttonClickAction: HpClientButtonClickActionFunction,
  registerFeature: HpRegisterSomethingFunction | undefined
): void {
  clickActionMap[key] = buttonClickAction;
  if (registerFeature) {
    registerFeature(processor);
  }
}

function dateToUtcString(date: Date): string {
  const pad = (n: number, size?: number): string => lodash.padStart('' + n, size || 2, '0');
  return `${pad(date.getUTCFullYear(), 4)}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}T${pad(
    date.getUTCHours()
  )}:${pad(date.getUTCMinutes())}:${pad(date.getUTCSeconds())}Z`;
}
