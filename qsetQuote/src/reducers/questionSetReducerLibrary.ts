import { hasOwnProperty, isTrue, SMap } from '@avantia/client-and-server-utilities';
import { HpField, HpFields, HpFieldValue, HpValidationResult, validateFields } from '@avantia/form-validation';
import {
  createControlId,
  CreateControlIdOptions,
  destructureControlId,
  displayTimeTaken,
  HpAddControlGroupActionProps,
  HpAnswer,
  HpAnswerValueTypes,
  HpDebugFlags,
  HpQuestionDataTypes,
  loadQuestionIdCache,
  logInfo,
  logWarn,
  MaxGroupsAllowed,
  MicroTimer,
  recordElapsedTime,
  recordElapsedTimeOfFunc
} from '@avantia/questionset-model';
import lodash from 'lodash';
import { v4 as uuid } from 'uuid';
import { FieldChangedPayload } from '../actions/fieldChangedAction';
import { HpDateDropDownEventDetail, HpEventDetail } from '../components/formControls/inputControl';
import {
  HpClientAnswer,
  HpClientAnswerMap,
  HpClientDependentAction,
  HpClientDependentAnswer,
  HpClientPartialAnswer,
  HpClientQuestion,
  HpClientQuestionData,
  HpClientQuestionMap,
  HpClientQuestionSetState,
  HpClientQuestionUI,
  HpClientQuestionUiMap,
  HpEventTypes,
  HpQuestionDisplayState
} from '../interfaces';
import { HpClientValidationThisReference } from '../interfaces/thisReferencesTypes';
import { getSuggestionsFromMapUsingSearchTerm } from '../tools/listSearchUtility';
import { HpClientPrerequisiteThisReferenceClass } from '../tools/prerequisiteThisReference';
import {
  getNextOrPreviousSectionId,
  setActiveSection,
  SetActiveSectionOptions
} from '../tools/questionDisplayStateTools';
import { applyAnswerDefaults, evaluateCalculatedAnswer, runDependentActions } from '../tools/questionPrerequisites';
import { answersAreSame, ensureDefined, getAnswerValue } from '../tools/utilities';
import {
  activeSectionKey,
  changeQuestionSet,
  highestSectionStartedPositionKey,
  IsValidControlTypeFunction
} from './questionSetPayloadMapper';
import {
  createBlankAnswer,
  createQuestionIdSorter,
  determineVisibleQuestions,
  evaluateCalculatedAnswers,
  evaluateLookupExpressions,
  evaluateQuestionPrerequisites,
  evaluateSectionPrerequisites,
  getActiveSection,
  iterateInvisibleQuestions,
  iterateVisibleQuestions
} from './questionSetTools';
import { applyChanges, applyInnerChanges } from './reducerLibrary';

export type StateChangeClosure = (state: HpClientQuestionSetState) => HpClientQuestionSetState;

export function changeState(state: HpClientQuestionSetState, change: StateChangeClosure): HpClientQuestionSetState {
  return change({ ...state });
}

export type GetFieldDataResponse = HpClientQuestionUI;

export function createValidationModel(state: HpClientQuestionSetState): HpFields {
  const { questions, answers, displayState } = state;
  loadQuestionIdCache({ items: questions, onlyIfEmpty: true });
  const self = new HpClientPrerequisiteThisReferenceClass({
    questions,
    answers,
    displayState,
    groupNumber: undefined,
    debugFlag: HpDebugFlags.ValidatorExpressions
  });
  return {
    get(key: string): HpField {
      const question: HpClientQuestion | undefined = key ? questions[key] : undefined;
      if (!question) {
        return resolveFieldLikeValue(key, questions);
      }

      const data = question.data as HpClientQuestionData;
      const answer: HpAnswer = answers[key]; // An answer should be undefined for buttons.
      let value: HpFieldValue = null;

      // eslint-disable-next-line prefer-const
      let { answerValue, answerSource } = getAnswerValue(answer, question, 'validation');
      const answerType = typeof answerValue;
      if (answerSource === 'unanswered' && question.default !== undefined && question.isDefaultImplicit) {
        answerValue = question.default;
      }

      if (answerType === 'string') {
        value = answerValue as string;
      } else {
        if (answerValue === undefined || answerValue === null) {
          value = null;
        } else if (lodash.isArray(answerValue)) {
          value = answerValue.map(String);
        } else {
          value = String(answerValue);
        }
      }

      return {
        key: question.name,
        name: question.name,
        label: question.label || question.name,
        value,
        validators: data.validation
      };
    },
    set(): void {
      throw new Error('Intentionally not implemented');
    },
    exists(key: string): boolean {
      return !!questions[key];
    },
    getAllKeys(): string[] {
      const keys: string[] = [];
      const sectionId = getActiveSection(displayState).sectionId;
      iterateVisibleQuestions(questions, displayState.questionsUI, sectionId, ({ questionId }) => {
        keys.push(questionId);
      });
      return keys;
    },
    getData(key: string): GetFieldDataResponse {
      return displayState.questionsUI[key];
    },
    getThis(): HpClientValidationThisReference<HpClientQuestion> {
      return self;
    }
  };
}

export interface FieldChangedHandlerProps {
  state: HpClientQuestionSetState;
  payload: FieldChangedPayload | undefined;
  isDelayedValidation: boolean;
}

export const isValidControlTypeVoid: IsValidControlTypeFunction = () => true;

let isValidControlTypeFunc: IsValidControlTypeFunction = isValidControlTypeVoid;

export function registerIsValidControlTypeFunction(func: IsValidControlTypeFunction): void {
  isValidControlTypeFunc = ensureDefined(func, 'IsValidControlTypeFunction');
}

export function fieldChangedHandler({
  state: currState,
  payload,
  isDelayedValidation
}: FieldChangedHandlerProps): HpClientQuestionSetState {
  if (!payload) {
    return currState;
  }

  const timer = new MicroTimer().start();
  const { key: sourceId, value, eventType, ui } = payload;
  const { questionId: qid, groupNumber } = destructureControlId(sourceId, { requirePrefix: false });
  const questionId = createControlId({ questionId: qid, groupNumber, options: { noPrefix: true } });
  if (questionId === 'questionSetId') {
    let newState = changeState(currState, (state) => changeQuestionSet(state, value, isValidControlTypeFunc));
    newState = processPrereqsAndCalcs(eventType, newState);
    return newState;
  }

  // If we don't return here, when a customer focuses upon a field, after the delay, they'll get an error
  //  message, when in fact they may justbe thinking about the answer.
  if (isDelayedValidation && value === '') {
    return currState;
  }

  if (!isDelayedValidation) {
    currState = updateAnswer({ currState, questionId, value, eventType });
  }

  const validationResult = validateAnswer({
    questionId,
    eventType,
    isDelayedValidation,
    answers: currState.answers,
    currState
  });

  let touchedUi: Partial<HpClientQuestionUI> | undefined;
  if (eventType === 'blur' || eventType === 'click') {
    touchedUi = { isTouched: true };
  } else if (eventType === 'change') {
    touchedUi = { isTouched: true, isDirty: true };
  }

  if (ui && touchedUi) {
    touchedUi = applyChanges(touchedUi, ui);
  } else if (ui) {
    touchedUi = ui;
  }

  let newState: HpClientQuestionSetState;
  if (!isDelayedValidation) {
    const displayState = currState.displayState;
    let questionsUI = displayState.questionsUI;

    if (touchedUi) {
      questionsUI = { ...questionsUI };
      questionsUI[questionId] = applyChanges(questionsUI[questionId], touchedUi);
    }

    newState = applyChanges(currState, { validationResult });
    newState = processPrereqsAndCalcs(eventType, newState, { questionsUI });
  } else {
    newState = applyChanges(currState, { validationResult });
  }

  displayTimeTaken('fieldChangedHandler', timer);

  return newState;
}

function resolveFieldLikeValue(key: string, questions: HpClientQuestionMap): HpField {
  if (key && key.indexOf(':')) {
    const parts = key.split(':');
    if (parts.length === 2) {
      switch (parts[0]) {
        case 'question': {
          const question = questions[parts[1]];
          if (question) {
            // We need to return the question so have to pretend it is an HpField.
            // This allows custom validators to get hold of question data when required.
            return (question as unknown) as HpField;
          }
        }
      }
    }

    throw new Error(
      `There is no way to resolve key "${key}". Use either '<questionId>' or 'question:<questionId>', where <questionId> is usually a UUID.`
    );
  }

  throw new Error(`There is no field with key "${key}".`);
}

export function processPrereqsAndCalcs(
  eventType: HpEventTypes,
  state: HpClientQuestionSetState,
  displayStateChanges?: Partial<HpQuestionDisplayState>
): HpClientQuestionSetState {
  return recordElapsedTime('processPrereqsAndCalcs', () => {
    if (displayStateChanges) {
      state = applyChanges(state, { displayState: applyChanges(state.displayState, displayStateChanges) });
    }

    state = evaluateQuestionPrerequisites(state, eventType);
    state = evaluateLookupExpressions(state);
    state = evaluateCalculatedAnswers(state, eventType);
    let displayState = state.displayState;
    const sectionsUI = evaluateSectionPrerequisites(displayState, state, eventType);
    displayState = applyChanges(displayState, {
      visibleQuestionIds: determineVisibleQuestions({
        questions: state.questions,
        questionsUI: displayState.questionsUI,
        activeSectionId: displayState.activeSectionId
      }),
      sectionsUI
    });
    state.displayState = displayState;
    return state;
  });
}

interface ValidateAnswerProps {
  questionId: string;
  eventType: HpEventTypes;
  currState: HpClientQuestionSetState;
  answers: HpClientAnswerMap;
  isDelayedValidation: boolean;
}

function validateAnswer({
  questionId,
  eventType,
  isDelayedValidation,
  currState
}: ValidateAnswerProps): HpValidationResult {
  let { validationResult } = currState;
  const errors = validationResult.errors;
  const prevError = errors[questionId];
  const isInstantType = eventType === 'blur' || eventType === 'click';
  if (isInstantType || prevError || isDelayedValidation) {
    validationResult = validateFields({
      fields: createValidationModel(currState),
      fieldKeysToValidate: [questionId],
      previousResult: lodash.cloneDeep(validationResult),
      eventType,
      allowPartialValidation: true
    });
    if (prevError && !(isDelayedValidation || isInstantType)) {
      // Don't change the error
      if (validationResult.errors[questionId]) {
        validationResult.errors[questionId] = prevError;
      }
    }
  }

  return validationResult;
}

export interface UpdateAnswersProps {
  state: HpClientQuestionSetState;
  questionIds: string[];
}

export function updateDefaultedAnswerDependencies({
  state,
  questionIds
}: UpdateAnswersProps): HpClientQuestionSetState {
  for (let i = 0; i < questionIds.length; i++) {
    const questionId = questionIds[i];
    const value = state.answers[questionId].default;
    state = updateAnswer({ currState: state, questionId, value, eventType: 'default-answer' });
  }

  return state;
}

export interface UpdateAnswerProps {
  currState: HpClientQuestionSetState;
  questionId: string;
  value: string | HpAnswerValueTypes;
  eventType: HpEventTypes;
  partialAnswer?: HpClientPartialAnswer; // This will override the 'value' parameter.
}

export function updateAnswer({
  currState,
  questionId,
  value,
  partialAnswer,
  eventType
}: UpdateAnswerProps): HpClientQuestionSetState {
  const updateDependenciesOnly = eventType === 'default-answer';
  const { questions } = currState;
  const isChanged: IsStateChanged = {
    answers: false,
    displayState: false,
    displayStateQuestionsUI: false
  };

  // eslint-disable-next-line prefer-const
  let { answers } = currState;
  const question = questions[questionId];
  const { dataType, data } = question;

  if (dataType === 'button') {
    // Button actions should be performed in an action
    // and should not cause cascading as questions do.
    return currState;
  }

  if (!updateDependenciesOnly) {
    const updatedAnswers = updateAnswerValue({
      question,
      answers,
      partialAnswer,
      value,
      dataType,
      eventType
    });
    if (updatedAnswers) {
      answers = updatedAnswers;
      isChanged.answers = true;
      currState = applyChanges(currState, { answers });
    }
  }

  const { dependentAnswers, dependentActions } = data as HpClientQuestionData;

  if (dependentAnswers) {
    currState = updateAnswerDependentAnswers({
      sourceQuestionId: questionId,
      question,
      state: currState,
      dependentAnswers,
      answerType: updateDependenciesOnly ? 'default' : 'customer',
      eventType,
      isChanged
    });
  }

  if (dependentActions && dependentActions.length > 0) {
    currState = updateAnswerDependentActions({
      questionId,
      question,
      eventType,
      dependentActions,
      state: currState
    });
  }

  return currState;
}

interface IsStateChanged {
  answers: boolean;
  displayState: boolean;
  displayStateQuestionsUI: boolean;
}

interface UpdateAnswerDependentAnswersProps {
  sourceQuestionId: string;
  question: HpClientQuestion;
  state: HpClientQuestionSetState;
  dependentAnswers: SMap<HpClientDependentAnswer[]>;
  isChanged: IsStateChanged;
  answerType: keyof HpAnswer;
  eventType: HpEventTypes;
}

function updateAnswerDependentAnswers({
  sourceQuestionId,
  question,
  state,
  dependentAnswers,
  isChanged,
  answerType,
  eventType
}: UpdateAnswerDependentAnswersProps): HpClientQuestionSetState {
  logInfo(
    `Applying dependent answers for Question ${sourceQuestionId} (${question.name || sourceQuestionId}).`,
    HpDebugFlags.DependentAnswers
  );

  return applyAnswerDefaults({
    type: 'dependent answer',
    items: dependentAnswers,
    state,
    sourceQuestionId,
    eventType,
    conditionMetAction: ({ questionId, item: dependentAnswer, state: currState }) => {
      let { answers, displayState } = currState;
      let { questionsUI } = displayState;
      let wasChanged = false;
      const { answer, answerExpr } = dependentAnswer;
      const answerValue = answerExpr ? evaluateCalculatedAnswer(question, currState, eventType, answerExpr) : answer;
      if (!isChanged.answers) {
        answers = { ...answers };
        isChanged.answers = true;
        wasChanged = true;
      }

      if (!isChanged.displayStateQuestionsUI) {
        if (!isChanged.displayState) {
          displayState = { ...displayState };
          isChanged.displayState = true;
        }

        questionsUI = { ...questionsUI };
        displayState.questionsUI = questionsUI;
        isChanged.displayStateQuestionsUI = true;
        wasChanged = true;
      }

      answers[questionId] = applyChanges(answers[questionId], { [answerType]: answerValue });
      const ui = { ...questionsUI[questionId] };
      delete ui.isDirty;
      delete ui.isTouched;
      questionsUI[questionId] = ui;
      if (wasChanged) {
        return applyChanges(currState, { answers, displayState });
      }

      return undefined;
    }
  });
}

interface UpdateAnswerDependentActionsProps {
  questionId: string;
  question: HpClientQuestion;
  state: HpClientQuestionSetState;
  dependentActions: HpClientDependentAction[];
  eventType: HpEventTypes;
}

function updateAnswerDependentActions({
  questionId,
  question,
  dependentActions,
  eventType,
  state
}: UpdateAnswerDependentActionsProps): HpClientQuestionSetState {
  logInfo(
    `Applying dependent action${dependentActions.length > 0 ? 's' : ''} for Question ${questionId} (${question.name ||
      questionId}).`,
    HpDebugFlags.DependentActions
  );

  const conditionalModels: SMap<HpClientDependentAction[]> = {};
  conditionalModels[questionId] = dependentActions;
  return runDependentActions({
    type: 'dependent action',
    items: conditionalModels,
    state,
    sourceQuestionId: questionId,
    eventType,
    conditionMetAction: ({ item: dependentAction, state: condState }) => {
      const { action, props } = dependentAction;
      switch (action) {
        case 'add-control-group': {
          const { groupId } = props as HpAddControlGroupActionProps;
          condState = addControlGroup(groupId, questionId, condState);
          break;
        }
        case 'validate-fields':
        case 'address-select':
          break;
        default: {
          // Button actions should not be executed here, any other action
          // should have an implementation.
          console.error(`The "${action}" dependent action currently does nothing.`);
        }
      }

      return condState;
    }
  });
}

export interface UpdateAnswerValueProps {
  question: HpClientQuestion;
  answers: HpClientAnswerMap;
  partialAnswer: Partial<HpClientAnswer> | undefined;
  value: HpAnswerValueTypes;
  dataType: HpQuestionDataTypes;
  eventType: HpEventTypes;
}

export function updateAnswerValue({
  question,
  answers,
  partialAnswer,
  value,
  dataType,
  eventType
}: UpdateAnswerValueProps): HpClientAnswerMap | undefined {
  const { questionId } = question;
  let fieldAnswer = answers[questionId];

  if (!partialAnswer) {
    const customer = correctlyTypeAnswerValue(value as string, dataType, eventType, fieldAnswer, question);
    const { answerValue: originalValue, answerSource } = getAnswerValue(fieldAnswer, question, 'reducer');
    if (answerSource === 'customer' && answersAreSame(dataType, originalValue, value)) {
      return undefined;
    }

    partialAnswer = { customer };
  } else {
    if (!hasOwnProperty(partialAnswer, 'partial')) {
      throw new Error("When a 'partialAnswer' is provided, it must contain a 'partial' key.");
    }

    partialAnswer = { customer: value, partial: partialAnswer.partial }; // ensure that only the 'partial' value is used.
  }

  const partialWithList = populateAutoCompleteListIfApplicable(question, partialAnswer);
  if (partialWithList) {
    partialAnswer = partialWithList;
  }

  fieldAnswer = partialAnswer ? applyChanges(fieldAnswer, partialAnswer) : fieldAnswer;
  answers = { ...answers };
  answers[questionId] = fieldAnswer;

  return answers;
}

export type MoveToSectionTypes = 'next-section' | 'previous-section' | 'move-to-section' | 'validate-fields';

export interface ValidateAndMaybeMoveSectionProps {
  state: HpClientQuestionSetState;
  buttonAction: MoveToSectionTypes;
  desiredSectionId?: string;
  options?: SetActiveSectionOptions;
}

export function validateAndMaybeMoveSection({
  state: currState,
  buttonAction,
  desiredSectionId,
  options
}: ValidateAndMaybeMoveSectionProps): HpClientQuestionSetState {
  const { questions } = currState;
  let { answers, displayState, validationResult } = currState;
  const model = createValidationModel(currState);
  const { sections, activeSectionId, highestSectionStartedPosition, questionsUI } = displayState;

  let doValidation = true;
  if (buttonAction === 'previous-section') {
    doValidation = false;
  }

  if (desiredSectionId) {
    const desiredSection = ensureDefined(sections[desiredSectionId], `section with ID '${desiredSectionId}'`);

    // If we're moving backwards, there's no need to validate.
    const desiredSectionPosition = desiredSection.position;
    if (desiredSectionPosition < sections[activeSectionId].position) {
      doValidation = false;
    }
  }

  if (doValidation) {
    let filteredValidationResult = lodash.cloneDeep(validationResult);
    const invisibleQuestions: string[] = [];
    iterateInvisibleQuestions(questions, questionsUI, activeSectionId, ({ questionId }) => {
      filteredValidationResult = addErrorToValidation(filteredValidationResult, questionId, undefined);
      invisibleQuestions.push(questionId);
    });
    const fieldKeysToValidate = model.getAllKeys().filter((key) => !invisibleQuestions.includes(key));
    validationResult = validateFields({
      fields: model,
      fieldKeysToValidate,
      previousResult: filteredValidationResult,
      eventType: 'section-validation'
    });
  } else {
    validationResult = { errors: {}, checked: {}, count: 0 };
  }

  const { moveToSectionId, moveToSectionPosition } = moveToWhichSection({
    buttonAction,
    currentSectionId: activeSectionId,
    desiredSectionId,
    displayState,
    errorCount: validationResult.count,
    questions,
    model
  });

  const visibleQuestionIds = determineVisibleQuestions({
    questions,
    questionsUI: displayState.questionsUI,
    activeSectionId: moveToSectionId
  });

  // Apply state changes
  displayState = { ...displayState };
  answers = { ...answers };

  setActiveSection(displayState, moveToSectionId as string, options);

  displayState.visibleQuestionIds = visibleQuestionIds;
  displayState.highestSectionStartedPosition = Math.max(moveToSectionPosition, highestSectionStartedPosition);

  [
    { key: activeSectionKey, customer: moveToSectionId as string },
    { key: highestSectionStartedPositionKey, customer: displayState.highestSectionStartedPosition }
  ].forEach(({ key, customer }) => {
    answers[key] = { customer, default: null };
  });

  displayState.sectionsUI = evaluateSectionPrerequisites(displayState, currState, 'click');
  displayState.showValidationSummary = validationResult.count > 0;
  if (validationResult.count > 0) {
    logWarn(validationResult, HpDebugFlags.None);
  }

  displayState.scriptActions = [{ id: uuid(), action: 'scroll-to-top' }];
  return applyChanges(currState, { validationResult, displayState, answers });
}

interface MoveToWhichSectionProps {
  buttonAction: MoveToSectionTypes;
  currentSectionId: string;
  desiredSectionId: string | undefined;
  displayState: HpQuestionDisplayState;
  errorCount: number;
  questions: HpClientQuestionMap;
  model: HpFields;
}

interface MoveToWhichSectionResult {
  moveToSectionId: string;
  moveToSectionPosition: number;
}

// This should not modify any state.
// It uses current state to determinte what should be done only.
function moveToWhichSection({
  buttonAction,
  currentSectionId,
  desiredSectionId,
  displayState,
  errorCount,
  questions,
  model
}: MoveToWhichSectionProps): MoveToWhichSectionResult {
  let moveToSectionId: string | undefined;
  const { sections, highestSectionStartedPosition, questionsUI } = displayState;

  if (errorCount > 0) {
    return { moveToSectionId: currentSectionId, moveToSectionPosition: sections[currentSectionId].position };
  }

  if (buttonAction !== 'move-to-section') {
    moveToSectionId = getNextOrPreviousSectionId(
      displayState,
      buttonAction === 'previous-section' ? 'prev' : 'next',
      questions,
      currentSectionId
    );
  } else {
    desiredSectionId = ensureDefined(desiredSectionId, 'desiredSectionId');

    // Validate each one of the sections, in case we had an invisible section that is now visible and has not yet been validated.
    // We are assuming sections are ordered by position.

    lodash.forEach(sections, (s) => {
      if (!s.isGroup && s.position < highestSectionStartedPosition) {
        const visibleQuestions: string[] = [];
        iterateVisibleQuestions(questions, questionsUI, s.sectionId, ({ questionId }) => {
          visibleQuestions.push(questionId);
        });
        const validationResult = validateFields({
          fields: model,
          fieldKeysToValidate: visibleQuestions,
          previousResult: undefined,
          eventType: 'section-validation'
        });
        if (validationResult.count && s.position > sections[currentSectionId].position) {
          desiredSectionId = s.sectionId;
        }
      }
    });

    const desiredSectionPosition = sections[desiredSectionId].position;

    if ((desiredSectionPosition as number) > highestSectionStartedPosition) {
      lodash.forEach(sections, (s) => {
        if (s.position === highestSectionStartedPosition && !s.isGroup) {
          moveToSectionId = s.sectionId;
          return false;
        }
      });
    } else {
      moveToSectionId = desiredSectionId;
    }
  }

  if (!moveToSectionId) {
    throw new Error('No section could be determined to move to next.');
  }

  return { moveToSectionId, moveToSectionPosition: sections[moveToSectionId].position };
}

export interface AddControlGroupOptions {
  processPrereqsAndCalcs: boolean;
  groupNumber: number;
}

export function addControlGroup(
  groupId: string,
  sourceQuestionId: string,
  state: HpClientQuestionSetState,
  options?: AddControlGroupOptions
): HpClientQuestionSetState {
  const { processPrereqsAndCalcs: doProcessPrereqsAndCalcs, groupNumber } = options || {};
  const questions = { ...state.questions };
  const answers = { ...state.answers };
  const displayState = state.displayState;
  const questionsUI = { ...displayState.questionsUI };
  const groupSection = displayState.sections[groupId];
  const { isGroup, questionIds: questionsInGroup } = groupSection || {};
  if (isGroup !== true || !questionsInGroup || !questionsInGroup.length) {
    throw new Error(
      `There is no section group "${groupId}" defined by the source question with ID "${sourceQuestionId}" ("${state.questions[sourceQuestionId].name}").`
    );
  }

  let groupNo = groupNumber === undefined ? 0 : groupNumber;
  const allQuestionIds: string[] = displayState.allOrderedQuestionIds;
  questionsInGroup.forEach((qid) => {
    let questionId: string;
    if (groupNo === 0) {
      do {
        groupNo++;
        questionId = createControlId({ questionId: qid, groupNumber: groupNo, options: { noPrefix: true } });
      } while (questions[questionId]);
    } else {
      questionId = createControlId({ questionId: qid, groupNumber: groupNo, options: { noPrefix: true } });
    }

    const origQuestion = questions[qid];
    questionsUI[questionId] = { isVisible: true, isEditing: false };
    const question = applyChanges(origQuestion, {
      questionId,
      order: createQuestionOrder(origQuestion, groupNo),
      position: getNextQuestionPosition()
    });
    questions[questionId] = question;
    if (!answers[questionId]) {
      answers[questionId] = createBlankAnswer(HpDebugFlags.ReducerProcessor);
    }

    allQuestionIds.push(questionId);
  });

  const allOrderedQuestionIds = allQuestionIds.sort(createQuestionIdSorter(questions));
  const newDisplayState = applyChanges(displayState, { questionsUI, allOrderedQuestionIds });
  state = applyChanges(state, { questions, answers, displayState: newDisplayState });
  if (doProcessPrereqsAndCalcs !== false) {
    state = processPrereqsAndCalcs('click', state);
  }

  return state;
}

export function removeControlGroup(
  groupId: string,
  groupNumber: number,
  state: HpClientQuestionSetState
): HpClientQuestionSetState {
  // eslint-disable-next-line prefer-const
  let { displayState, answers, questions } = state;
  // eslint-disable-next-line prefer-const
  let { sections, allOrderedQuestionIds, questionsUI, activeSectionId } = displayState;
  const questionIdsInGroup = sections[groupId].questionIds as string[];

  questions = { ...questions };
  answers = { ...answers };
  questionsUI = { ...questionsUI };
  const idsToRemove = moveQuestionGroupsUpFollowingRemoval(
    questionIdsInGroup,
    groupNumber as number,
    questions,
    answers,
    questionsUI
  );

  allOrderedQuestionIds = allOrderedQuestionIds.filter((id) => idsToRemove.indexOf(id) < 0);
  displayState = applyChanges(displayState, { allOrderedQuestionIds, questionsUI });
  const visibleQuestionIds = determineVisibleQuestions({ questions, questionsUI, activeSectionId });
  displayState = applyChanges(displayState, { visibleQuestionIds });
  state = applyChanges(state, { answers, questions, displayState });
  return state;
}

export function updateQuestion(
  questionId: string,
  state: HpClientQuestionSetState,
  questionModifier: (q: HpClientQuestion) => HpClientQuestion
): HpClientQuestionSetState {
  return applyInnerChanges(state, ['questions', questionId], questionModifier, {
    copyRootNode: true,
    copyLeafNode: true
  });
}

export function updateDateDropDownQuestionUI(
  detail: HpEventDetail,
  state: HpClientQuestionSetState
): HpClientQuestionSetState {
  const { dateDropDownId } = detail as HpDateDropDownEventDetail;
  const { questionId, key } = destructureControlId(dateDropDownId);
  const blurredDropDownId = createControlId({ questionId, key, options: { noPrefix: true } });
  state = applyInnerChanges(state, ['displayState', 'questionsUI', blurredDropDownId], { isTouched: true });
  return state;
}

export function addErrorToValidation(
  validationResult: HpValidationResult,
  fieldId: string,
  error: string | undefined
): HpValidationResult {
  const hasError = !!validationResult.errors[fieldId];
  const removeError = hasError && !error;
  const addError = !hasError && !!error;
  const changeError = hasError && !!error;
  let result = validationResult;
  if (removeError || addError || changeError) {
    result = { ...validationResult };
    result.errors = { ...result.errors };
    if (addError || changeError) {
      result.errors[fieldId] = error as string;
      if (addError) {
        result.count++;
      }
    } else {
      delete result.errors[fieldId];
      result.count--;
    }
  }

  return result;
}

export function removeUiProperties(
  state: HpClientQuestionSetState,
  fieldsToModify: string[],
  propsToRemove: (keyof HpClientQuestionUI)[]
): HpClientQuestionSetState {
  return applyInnerChanges(state, ['displayState', 'questionsUI'], (map: HpClientQuestionUiMap) => {
    const res = { ...map };
    fieldsToModify.forEach((f) => {
      const tmp = { ...map[f] };
      propsToRemove.forEach((prop) => {
        delete tmp[prop];
      });

      res[f] = tmp;
    });
    return res;
  });
}

export function populateAutoCompleteListIfApplicable(
  question: HpClientQuestion,
  partialAnswer: Partial<HpClientAnswer> | undefined
): Partial<HpClientAnswer> | undefined {
  const { questionId, data } = question;
  const { textAndStyle, lookup } = data as HpClientQuestionData;
  const { controlType, minSearchTermLength } = (textAndStyle ? textAndStyle.standard : null) || {};
  if (!(partialAnswer && lookup && controlType === 'AutoCompleteList')) {
    return undefined;
  }

  const ansVal = partialAnswer ? getAnswerValue(partialAnswer as HpClientAnswer, question, 'prerequisites') : undefined;
  const answerValue: HpAnswerValueTypes = ansVal ? ansVal.answerValue : null;
  const partial = recordElapsedTimeOfFunc(
    'getSuggestionsFromMapUsingSearchTerm',
    getSuggestionsFromMapUsingSearchTerm,
    {
      id: questionId,
      items: lookup,
      searchTerm: (answerValue as string) || '',
      minTermLength: minSearchTermLength
    }
  );

  const answer = applyChanges(partialAnswer, { partial });
  return answer;
}

function correctlyTypeAnswerValue(
  value: string,
  dataType: HpQuestionDataTypes,
  eventType: HpEventTypes,
  fieldAnswer: HpAnswer | undefined,
  question: HpClientQuestion
): HpAnswerValueTypes {
  let typedValue: HpAnswerValueTypes = value;
  if (dataType === 'array') {
    if (!fieldAnswer) {
      typedValue = [value];
    } else {
      const { answerValue } = getAnswerValue(fieldAnswer, question, 'reducer');
      let answer = (answerValue as string[]) || [];
      // remove value if it exists and add if it does not.
      if (answer.indexOf(value) >= 0) {
        answer = answer.filter((a) => a !== value);
      } else {
        answer = [...answer];
        answer.push(value);
        answer.sort();
      }

      typedValue = answer;
    }
  } else if (dataType === 'boolean') {
    typedValue = isTrue(value);
  } else if (dataType === 'number') {
    if (value.match(/^\d+(\.\d{0,2})?$/) || !value.length) {
      if (!value.length || value.endsWith('.')) {
        typedValue = value;
      } else {
        typedValue = parseFloat(value);
      }
    } else {
      typedValue = fieldAnswer ? getAnswerValue(fieldAnswer, question, 'reducer').answerValue : '';
    }
  } else if (eventType === 'blur') {
    typedValue = lodash.trim(typedValue);
  }

  return typedValue;
}

// Modifies questions, answers, questionsUI
// Returns the IDs to really remove (given we've bumped everything up by one.
function moveQuestionGroupsUpFollowingRemoval(
  questionIdsInGroup: string[],
  groupNumberRemoved: number,
  questions: HpClientQuestionMap,
  answers: HpClientAnswerMap,
  questionsUI: HpClientQuestionUiMap
): string[] {
  const firstQId = questionIdsInGroup[0];
  const options: CreateControlIdOptions = { noPrefix: true };
  let idsToRemove = questionIdsInGroup.map((id) =>
    createControlId({ questionId: id, groupNumber: groupNumberRemoved, options })
  );
  let copyToIds = idsToRemove;
  for (let fromGrpNo = groupNumberRemoved + 1; fromGrpNo < MaxGroupsAllowed; fromGrpNo++) {
    const toGrpNo = fromGrpNo - 1;
    const questionFromGroupId = createControlId({ questionId: firstQId, groupNumber: fromGrpNo, options });
    if (hasOwnProperty(answers, questionFromGroupId)) {
      const copyFromIds = questionIdsInGroup.map((id) =>
        createControlId({ questionId: id, groupNumber: fromGrpNo, options })
      );
      for (let j = 0; j < copyFromIds.length; j++) {
        const origQuestionId = questionIdsInGroup[j];
        const order = createQuestionOrder(questions[origQuestionId], toGrpNo);
        const copyToId = copyToIds[j];
        const copyFromId = copyFromIds[j];
        answers[copyToId] = answers[copyFromId];
        questions[copyToId] = applyChanges(questions[copyFromId], { questionId: copyToId, order });
        questionsUI[copyToId] = questionsUI[copyFromId];
      }

      copyToIds = copyFromIds;
    } else {
      break;
    }
  }

  idsToRemove = copyToIds;
  idsToRemove.forEach((id) => {
    delete answers[id];
    delete questions[id];
    delete questionsUI[id];
  });

  return idsToRemove;
}

function createQuestionOrder(question: HpClientQuestion, groupNo: number): number {
  return question.order + groupNo / 100.0;
}

let _nextQuestionPosition = 1000;
function getNextQuestionPosition(): number {
  return _nextQuestionPosition++;
}
