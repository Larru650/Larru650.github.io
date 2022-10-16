import { parseJson, SMap } from '@avantia/client-and-server-utilities';
import { convertToValidator, HpValidator, setValidationExpressionThisReference } from '@avantia/form-validation';
import {
  copySection,
  destructureControlId,
  HpAnswerMap,
  HpCommonSection,
  HpDebugFlags,
  HpQuestion,
  HpQuestionData,
  HpQuestionMap,
  HpQuestionSet,
  HpSection,
  HpSectionMap,
  HpTokensAndExpressionsThisReference,
  logInfo,
  recordElapsedTimeOfFunc
} from '@avantia/questionset-model';
import lodash from 'lodash';
import { CSSProperties } from 'react';
import { getConfig } from '../config/configuration';
import { getCustomFunction, registerCustomFunctions } from '../customFunctionRegistry';
import {
  HpClientAnswer,
  HpClientAnswerMap,
  HpClientAvailableQuestionSet,
  HpClientDefaultAnswerExpressionFunction,
  HpClientQuestion,
  HpClientQuestionData,
  HpClientQuestionMap,
  HpClientQuestionSetState,
  HpClientQuestionUiMap,
  HpClientSection,
  HpClientSectionMap,
  HpCustomAnswersHandler,
  HpCustomHashLoadHandler,
  HpCustomLoadHashAndAnswersHandler,
  HpQuestionDisplayState
} from '../interfaces';
import { HpClientPrerequisiteThisReference } from '../interfaces/thisReferencesTypes';
import { HpClientPrerequisiteThisReferenceClass } from '../tools/prerequisiteThisReference';
import { forEachSectionInOrder, setActiveSection } from '../tools/questionDisplayStateTools';
import { ensureDefined } from '../tools/utilities';
import {
  createEmptyDisplayState,
  createEmptyHpClientQuestionSetState,
  createEmptyValidationResult
} from './initialState';
import { questionScriptResolver } from './questionScriptResolver';
import { addControlGroup, updateDefaultedAnswerDependencies } from './questionSetReducerLibrary';
import {
  createBlankAnswer,
  createQuestionIdSorter,
  determineVisibleQuestions,
  evaluateQuestionPrerequisite,
  evaluateSectionPrerequisites
} from './questionSetTools';
import { applyChanges } from './reducerLibrary';
import { sectionScriptResolver } from './sectionScriptResolver';

export const activeSectionKey = 'activeSectionId';
export const highestSectionStartedPositionKey = 'highestSectionStartedPosition';

export type SectionToQuestionMap = SMap<{ isGroup: boolean; questionIds: string[] }>;

export interface QuestionSetPayloadMapperProps {
  currState: HpClientQuestionSetState;
  payload: HpQuestionSet | undefined;
  errorIfNoPayload: boolean;
  isValidControlType: IsValidControlTypeFunction;
}

const customAnswersHandlers: HpCustomAnswersHandler[] = [];

export function registerCustomHashAndAnswersHandler(data: HpCustomLoadHashAndAnswersHandler | undefined): void {
  if (data) {
    const { willHandleHash: canHandleHash, needToLoadData, setCustomAnswers, willRun: willExecute } = data;
    registerCustomLoadDataHandler({ willHandleHash: canHandleHash, needToLoadData });
    customAnswersHandlers.push({ setCustomAnswers, willRun: willExecute });
  }
}

export function questionSetPayloadMapper(props: QuestionSetPayloadMapperProps): HpClientQuestionSetState | undefined {
  return recordElapsedTimeOfFunc('questionSetPayloadMapperFunction', questionSetPayloadMapperFunction, props);
}

const { debugFlags } = getConfig();

function questionSetPayloadMapperFunction({
  currState,
  payload,
  errorIfNoPayload,
  isValidControlType
}: QuestionSetPayloadMapperProps): HpClientQuestionSetState | undefined {
  if (!payload) {
    if (errorIfNoPayload) {
      throw new Error('There must be a payload (or errorIfNoPayload should be set to false).');
    }

    return undefined;
  }

  const {
    answers: payloadAnswers = {},
    questions: payloadQuestions,
    stylesheets,
    questionFormats,
    friendlyName,
    questionSetId,
    sections,
    commonLookups,
    functionReferences
  } = payload;

  const thisRef = new HpTokensAndExpressionsThisReference();
  setValidationExpressionThisReference(() => thisRef);

  if (functionReferences) {
    // eslint-disable-next-line no-eval
    registerCustomFunctions(questionSetId, eval('(' + functionReferences + ')'));
  }

  questionScriptResolver({
    questions: payload.questions,
    commonLookups,
    funcRefResolver: (name) => getCustomFunction(questionSetId, name),
    debugFlag: HpDebugFlags.PayloadMapper
  });

  sectionScriptResolver({
    sections: payload.sections,
    funcRefResolver: (name) => getCustomFunction(questionSetId, name),
    debugMode: (debugFlags & HpDebugFlags.PayloadMapper) > 0
  });

  lodash.forOwn(payloadQuestions, (q, id) => {
    convertPayloadQuestion(q, id);
  });

  lodash.forOwn(sections, (s, id) => {
    s.sectionId = id;
  });

  const displayState = createEmptyDisplayState({ addBlankSection: false });
  const links = processQuestionsAndLinkToSections(payloadQuestions, sections, payloadAnswers, isValidControlType);
  const { answers, allOrderedQuestionIds, sectionToQuestionMap, defaultedAnswersHaveBeenSet } = links;
  let questions = links.questions;

  displayState.allOrderedQuestionIds = allOrderedQuestionIds;
  processSections(sections, sectionToQuestionMap, displayState, questions);
  [activeSectionKey, highestSectionStartedPositionKey].forEach((key) => {
    if (answers[key]) {
      displayState[key] = answers[key].customer;
    }
  });

  displayState.questionsUI = populateQuestionUiMap(allOrderedQuestionIds, questions, sections);
  const { friendlyName: fname, timestamp, version } = currState;
  displayState.availableQuestionSets = {
    selected: questionSetId,
    items: [{ questionSetId, friendlyName: fname, timestamp }]
  };

  let state: HpClientQuestionSetState = {
    questionSetId,
    answersId: '',
    timestamp,
    friendlyName,
    version,
    stylesheets,
    questionFormats,
    questions,
    answers,
    displayState,
    validationResult: createEmptyValidationResult(),
    commonLookups
  };

  if (defaultedAnswersHaveBeenSet.length > 0) {
    state = updateDefaultedAnswerDependencies({ state, questionIds: defaultedAnswersHaveBeenSet });
  }

  state = reloadQuestionGroupsFromAnswers(payloadAnswers, payloadQuestions, state);

  questions = state.questions;

  for (const { setCustomAnswers, willRun: willExecute } of customAnswersHandlers) {
    if (willExecute()) {
      state.answers = setCustomAnswers(state.answers);
    }
  }

  // displayState.availableQuestionSets.items[0].state = state;
  for (const id of allOrderedQuestionIds) {
    const question = ensureDefined(questions[id], `question["${id}"]`);
    evaluateQuestionPrerequisite(question, 'none', state, displayState.questionsUI);
  }

  displayState.sectionsUI = evaluateSectionPrerequisites(displayState, state, 'none');
  displayState.visibleQuestionIds = determineVisibleQuestions({
    questionsUI: displayState.questionsUI,
    questions,
    activeSectionId: displayState.activeSectionId
  });

  return state;
}

function convertPayloadQuestion(q: HpQuestion, id: string): void {
  q.questionId = id; // Ensure that the question ID exists and matches the key

  const data = q.data as HpQuestionData;
  if (q.groupOrder === undefined) {
    q.groupOrder = 0;
  }

  if (!data.validation && q.dataType !== 'button') {
    data.validation = [];
  }

  if (!data.lookup && !data.lookupExpr) {
    data.lookup = {};
  }

  if (lodash.isArray(data.dependentAnswers)) {
    if (data.dependentAnswers.length > 0) {
      throw new Error(`The dependentAnswers property is a map, not an array. QuestionID "${id}".`);
    } else {
      data.dependentAnswers = {}; // change arrays to maps
    }
  }
}

interface LinkQuestionsToSectionsResult {
  questions: HpClientQuestionMap;
  answers: HpClientAnswerMap;
  allOrderedQuestionIds: string[];
  sectionToQuestionMap: SectionToQuestionMap;
  defaultedAnswersHaveBeenSet: string[];
}

function processQuestionsAndLinkToSections(
  payloadQuestions: SMap<HpQuestion>,
  sections: HpSectionMap,
  payloadAnswers: HpAnswerMap,
  isValidControlType: IsValidControlTypeFunction
): LinkQuestionsToSectionsResult {
  let questionPosition = 1;
  const sectionToQuestionMap: SectionToQuestionMap = {};
  const questions: HpClientQuestionMap = {};
  const answers: HpClientAnswerMap = {};
  const allQuestionIds: string[] = [];
  const defaultedAnswersHaveBeenSet: string[] = [];
  const displayState = createEmptyDisplayState({ addBlankSection: false });
  const thisRef = new HpClientPrerequisiteThisReferenceClass({
    questions: payloadQuestions,
    answers: payloadAnswers,
    displayState,
    groupNumber: undefined,
    debugFlag: HpDebugFlags.PayloadMapper
  });
  lodash.forOwn(payloadQuestions, (payloadQuestion: HpQuestion, questionId: string) => {
    const { question, defaultedAnswerHasBeenSet } = questionMapper(
      payloadQuestion,
      questionId,
      questionPosition++,

      sections,
      payloadAnswers,
      thisRef,
      isValidControlType
    );

    if (defaultedAnswerHasBeenSet) {
      defaultedAnswersHaveBeenSet.push(questionId);
    }

    processQuestionsAndLinkToSection(question, sectionToQuestionMap, allQuestionIds);
    questions[questionId] = question;
    answers[questionId] = payloadAnswers[questionId];
  });

  [activeSectionKey, highestSectionStartedPositionKey].forEach((key) => {
    if (payloadAnswers[key]) {
      answers[key] = payloadAnswers[key];
    }
  });

  allQuestionIds.sort(createQuestionIdSorter(questions));
  return {
    questions,
    answers,
    allOrderedQuestionIds: allQuestionIds,
    sectionToQuestionMap,
    defaultedAnswersHaveBeenSet
  };
}

function processQuestionsAndLinkToSection(
  question: HpClientQuestion,
  map: SectionToQuestionMap,
  allQuestionIds: string[]
): void {
  const { questionId, sectionId, groupId } = question;
  if (sectionId && !map[sectionId]) {
    map[sectionId] = { isGroup: false, questionIds: [] };
  } else if (groupId) {
    if (!map[groupId]) {
      map[groupId] = { isGroup: true, questionIds: [questionId] };
    } else {
      map[groupId].questionIds.push(questionId);
    }
  }

  allQuestionIds.push(questionId);
}

function populateQuestionUiMap(
  allQuestionIds: string[],
  questions: HpClientQuestionMap,
  sections: SMap<HpCommonSection>,
  questionsUiMap?: HpClientQuestionUiMap
): HpClientQuestionUiMap {
  const uiMap: HpClientQuestionUiMap = questionsUiMap || {};
  allQuestionIds.forEach((questionId) => {
    const question = questions[questionId];
    const { groupId, visible } = question;
    const group = groupId ? sections[groupId] : undefined;
    const isVisible = visible !== false && (!group || group.isTemplate !== true);
    uiMap[questionId] = { isVisible, isEditing: false };
  });

  return uiMap;
}

export function changeQuestionSet(
  state: HpClientQuestionSetState,
  questionSetId: string,
  isValidControlType: IsValidControlTypeFunction
): HpClientQuestionSetState {
  const displayState = state.displayState;
  const availableQuestionSets = displayState.availableQuestionSets;
  if (!availableQuestionSets.items) {
    return state;
  }

  const item: HpClientAvailableQuestionSet = availableQuestionSets.items.find(
    (i) => i.questionSetId === questionSetId
  ) as HpClientAvailableQuestionSet;
  if (!item) {
    throw new Error(`There is no question set with id "${questionSetId}".`);
  }

  if (!item.questionSet) {
    throw new Error(`The question set with id "${questionSetId}" must have its "questionSet" property populated.`);
  }

  state = ensureDefined(
    questionSetPayloadMapperFunction({
      currState: createEmptyHpClientQuestionSetState(),
      payload: item.questionSet,
      errorIfNoPayload: true,
      isValidControlType
    }),
    'state'
  );

  state.displayState = applyChanges(state.displayState, {
    availableQuestionSets: applyChanges(availableQuestionSets, { selected: questionSetId })
  });

  const {
    questions,
    allOrderedQuestionIds,
    sectionToQuestionMap,
    defaultedAnswersHaveBeenSet
  } = processQuestionsAndLinkToSections(
    (state.questions as unknown) as HpQuestionMap,
    (state.displayState.sections as unknown) as HpSectionMap,
    state.answers,
    isValidControlType
  );

  state.questions = questions;

  if (defaultedAnswersHaveBeenSet.length > 0) {
    state = updateDefaultedAnswerDependencies({ state, questionIds: defaultedAnswersHaveBeenSet });
  }

  processSections(state.displayState.sections, sectionToQuestionMap, state.displayState, state.questions);
  state.displayState.questionsUI = populateQuestionUiMap(
    allOrderedQuestionIds,
    state.questions,
    state.displayState.sections
  );
  setActiveSection(state.displayState, state.displayState.sectionIdOrder[0]);
  state.displayState.allOrderedQuestionIds = allOrderedQuestionIds;
  state.displayState.visibleQuestionIds = determineVisibleQuestions({
    questions: state.questions,
    questionsUI: state.displayState.questionsUI,
    activeSectionId: state.displayState.activeSectionId
  });

  state.displayState.sectionsUI = evaluateSectionPrerequisites(state.displayState, state, 'click');
  return state;
}

export interface QuestionMapperResult {
  question: HpClientQuestion;
  defaultedAnswerHasBeenSet: boolean;
}

export function reloadQuestionGroupsFromAnswers(
  answers: HpAnswerMap,
  questions: SMap<HpQuestion | HpClientQuestion>,
  state: HpClientQuestionSetState
): HpClientQuestionSetState {
  for (const answerId in answers) {
    const { questionId, groupNumber } = destructureControlId(answerId, { requirePrefix: false });
    const answer = answers[answerId] as HpClientAnswer;
    if (answer && answer.partial) {
      delete answer.partial; // TODO This shouldn't be here, but needs to be removed if present.
    }

    if (groupNumber) {
      const groupId = questions[questionId].groupId;
      if (groupId && !state.questions[answerId]) {
        state = addControlGroup(groupId, questionId, state, { processPrereqsAndCalcs: false, groupNumber });
      }

      state.answers[answerId] = answer;
    }
  }

  return state;
}

export type IsValidControlTypeFunction = (controlType: string) => boolean;

function questionMapper(
  payloadQuestion: HpQuestion,
  questionId: string,
  questionPosition: number,
  sections: HpSectionMap,
  answers: HpAnswerMap,
  thisRef: HpClientPrerequisiteThisReference<HpQuestion>,
  isValidControlType: IsValidControlTypeFunction
): QuestionMapperResult {
  const question: HpClientQuestion = lodash.cloneDeep(payloadQuestion) as any;
  question.questionId = questionId;
  question.position = questionPosition;
  const questionData = question.data;

  convertStyleProperty(questionData.textAndStyle.standard);
  convertStyleProperty(questionData.textAndStyle.fluent);
  convertQuestionValidators(payloadQuestion, question);

  const { data } = question;
  const textAndStyle = data.textAndStyle;

  let defaultedAnswerHasBeenSet = false;
  if (!answers[questionId] || (data as HpClientQuestionData).dependentAnswers) {
    defaultedAnswerHasBeenSet = createAnswer(question as any, answers, sections, thisRef);
  }

  // Ensure that controls are all valid.
  for (const style of [textAndStyle.standard, textAndStyle.fluent]) {
    if (!style) {
      continue;
    }

    const controlType = style.controlType;
    if (!controlType) {
      throw new Error(`There is no controlType for question ${questionId}.`);
    } else {
      const controlTypeString = `${controlType}Control`;
      if (!isValidControlType(controlTypeString)) {
        throw new Error(`The controlType "${controlType}" for question ${questionId} is invalid.`);
      }
    }
  }

  return { question, defaultedAnswerHasBeenSet };
}

function createAnswer(
  question: HpQuestion,
  answers: HpAnswerMap,
  sections: HpSectionMap,
  thisRef: HpClientPrerequisiteThisReference<HpQuestion>
): boolean {
  const {
    questionId,
    groupId,
    dataType,
    default: defaultAnswer,
    defaultExpr: defaultExprFunc,
    isDefaultImplicit
  } = question;
  const section = groupId ? sections[groupId] : undefined;
  if (isDefaultImplicit || dataType === 'button' || (section && section.isTemplate)) {
    return false;
  }

  let defaultValue = defaultAnswer;
  let defaultedAnswerHasBeenSet = false;

  if (defaultExprFunc) {
    const self = (thisRef as unknown) as HpClientPrerequisiteThisReference<HpClientQuestion>;
    defaultValue = ((defaultExprFunc as unknown) as HpClientDefaultAnswerExpressionFunction).call(self);
  }

  if (defaultValue !== undefined && defaultValue !== null && defaultValue !== '') {
    if (!answers[questionId]) {
      answers[questionId] = createBlankAnswer(HpDebugFlags.DefaultAnswers);
    }

    answers[questionId].default = defaultValue;
    defaultedAnswerHasBeenSet = true;
    logInfo(() => {
      const defaultType = typeof defaultValue;
      return `The answer for question ${questionId} has default set to ${
        defaultType === 'boolean' || defaultType === 'number' ? defaultValue : `"${defaultValue}"`
      }.`;
    }, HpDebugFlags.DefaultAnswers);
  }

  return defaultedAnswerHasBeenSet;
}

function convertStyleProperty(item: { style?: CSSProperties } | undefined): void {
  const style = item ? item.style : undefined;
  if (item && style) {
    item.style = parseJson({ desc: 'CSSProperties', json: style as string });
  }
}

function processSections(
  sections: HpSectionMap | HpClientSectionMap,
  sectionToQuestionMap: SectionToQuestionMap,
  displayState: HpQuestionDisplayState,
  questions: HpClientQuestionMap
): void {
  if (sections) {
    // This also filters out groups (which are special sections that aren't rendered as top-level elements).
    displayState.sections = {};

    for (const sectionId in sectionToQuestionMap) {
      const { isGroup, questionIds } = sectionToQuestionMap[sectionId];
      const section = sections[sectionId] as HpSection;
      if (!section) {
        const questionId = questionIds[0];
        const question = questions[questionId];
        throw new Error(
          `There is no section defined with id "${sectionId}" (used by question "${question.name}", "${questionId}").`
        );
      }

      const displaySection = applyChanges((copySection(section, sectionId) as unknown) as HpClientSection, {
        isGroup
      });
      displayState.sectionsUI[sectionId] = { isVisible: true };
      displayState.sections[sectionId] = displaySection;
      if (isGroup) {
        displaySection.questionIds = questionIds;
      }
    }

    const sectionIdOrder: string[] = [];
    let activeId: string | undefined;
    forEachSectionInOrder({
      displayState,
      options: { iterate: 'sections-and-groups', ignoreOrderList: true },
      worker: (_, _2, sectionId, isActive) => {
        if (isActive) {
          activeId = sectionId;
        }

        sectionIdOrder.push(sectionId);
      }
    });

    displayState.sectionIdOrder = sectionIdOrder;
    setActiveSection(displayState, activeId || sectionIdOrder[0], { raiseEvents: false });
  } else {
    throw new Error(`This probably won't work unless there is at least one section!`);
  }
}

function convertQuestionValidators(question: HpQuestion, riskQuestion: HpClientQuestion): void {
  const data = question.data;
  const validators: HpValidator<unknown>[] = [];
  if (data.validation) {
    data.validation.forEach((validation) => {
      try {
        validators.push(convertToValidator(validation));
      } catch (ex) {
        console.error(ex);
      }
    });

    riskQuestion.data.validation = validators;
  }
}

const customLoadDataHandlers: HpCustomHashLoadHandler[] = [];

function registerCustomLoadDataHandler(data: HpCustomHashLoadHandler): void {
  customLoadDataHandlers.push(data);
}
