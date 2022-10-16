import { debugDisplay, SMap, voidFunction } from '@avantia/client-and-server-utilities';
import { destructureControlId, HpAnswerValueTypes, HpDebugFlags, logInfo } from '@avantia/questionset-model';
import lodash from 'lodash';
import { getConfig } from '../config/configuration';
import {
  HpClientAnswerExpressionFunction,
  HpClientConditionFunction,
  HpClientDependentAction,
  HpClientDependentAnswer,
  HpClientDynamicFunctionProps,
  HpClientQuestion,
  HpClientQuestionLookupItemMap,
  HpClientQuestionSetState,
  HpClientSection,
  HpEventTypes
} from '../interfaces';
import { HpClientPrerequisiteThisReferenceClass } from './prerequisiteThisReference';

type HpEntityNameTypes = 'Question' | 'Section';

type DebugOutputStatus = 'been met' | 'not been met' | 'failed';

type DebugOutputFunc = (
  questionId: string,
  condition: HpClientConditionFunction,
  status: DebugOutputStatus,
  error?: any
) => void;

interface DebugOutputCreatorArgs {
  typeName: HpEntityNameTypes;
  exprName: string;
  debugFlag: HpDebugFlags;
  debugDetailFlag: HpDebugFlags;
  getDesc: (id: string) => string;
}

const configDebugFlags = getConfig().debugFlags;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function questionPrerequisitesHaveBeenMet(
  questionId: string,
  eventType: HpEventTypes,
  state: HpClientQuestionSetState
): boolean {
  const questions = state.questions;
  return questionOrSectionPrerequisitesHaveBeenMet({
    questionOrSectionId: questionId,
    type: 'question',
    typeName: 'Question',
    eventType,
    getItem: (id) => questions[id],
    getDesc: (id) => questions[id].name,
    state
  });
}

export function sectionPrerequisitesHaveBeenMet(
  sectionId: string,
  eventType: HpEventTypes,
  state: HpClientQuestionSetState
): boolean {
  const sections = state.displayState.sections;
  return questionOrSectionPrerequisitesHaveBeenMet({
    questionOrSectionId: sectionId,
    type: 'section',
    typeName: 'Section',
    eventType,
    getItem: (id) => sections[id],
    getDesc: (id) => sections[id].title,
    state
  });
}

interface QuestionOrSectionPrerequisitesHaveBeenMetProps {
  questionOrSectionId: string;
  type: 'question' | 'section';
  typeName: 'Question' | 'Section';
  eventType: HpEventTypes;
  getItem: (id: string) => HpClientQuestion | HpClientSection;
  getDesc: (id: string) => string;
  state: HpClientQuestionSetState;
}

function questionOrSectionPrerequisitesHaveBeenMet({
  questionOrSectionId,
  type,
  typeName,
  eventType,
  getItem,
  getDesc,
  state
}: QuestionOrSectionPrerequisitesHaveBeenMetProps): boolean {
  const withPrerequisites: HpClientQuestion | HpClientSection = getItem(questionOrSectionId);
  if (!withPrerequisites) {
    throw new Error(`There is no ${type} with id "${questionOrSectionId}".`);
  }

  const prerequisites = withPrerequisites.prerequisites || [];
  if (!prerequisites.length) {
    return true;
  }

  const debugOutput = createDebugOutput({
    typeName,
    exprName: 'prerequisite has',
    debugFlag: HpDebugFlags.PrerequisiteDetail,
    debugDetailFlag: HpDebugFlags.PrerequisiteDetail,
    getDesc
  });

  let isMet = true;
  const { groupNumber } = destructureControlId(questionOrSectionId, { requirePrefix: false });

  let index = 0;
  const { questions, answers, displayState } = state;
  const self = new HpClientPrerequisiteThisReferenceClass({
    questions,
    answers,
    displayState,
    groupNumber,
    debugFlag: HpDebugFlags.PrerequisiteDetail
  });

  const props: HpClientDynamicFunctionProps = {
    questionId: questionOrSectionId,
    eventType,
    sourceQuestionId: questionOrSectionId,
    groupNumber
  };

  for (const prerequisite of withPrerequisites.prerequisites || []) {
    try {
      if (!prerequisite.call(self, props)) {
        debugOutput(questionOrSectionId, prerequisite, 'not been met');
        isMet = false;
        break;
      } else {
        debugOutput(questionOrSectionId, prerequisite, 'been met');
      }
    } catch (ex) {
      console.error(`Error invoking prerequisite ${index} of '${questionOrSectionId}': ${ex}`);
    }

    index++;
  }

  logInfo(
    `${typeName} "${getDesc(questionOrSectionId)}" (${questionOrSectionId}) prerequisites have${
      isMet ? '' : ' not'
    } been met.`,
    HpDebugFlags.Prerequisites
  );

  return isMet;
}

function createDebugOutput({
  typeName,
  exprName,
  debugFlag,
  debugDetailFlag,
  getDesc
}: DebugOutputCreatorArgs): DebugOutputFunc {
  if (!(configDebugFlags & debugFlag)) {
    return voidFunction;
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return (questionId: string, condition: HpClientConditionFunction, status: DebugOutputStatus, error: any) => {
    const isError = status === 'failed';
    const description = getDesc(questionId);
    const message = `${typeName} "${description}" (${questionId}) ${exprName} ${isError ? 'failed' : status}.`;
    if (!isError) {
      logInfo(message, debugFlag);
    } else {
      console.error(message);
      console.error(error);
    }

    if (isError || configDebugFlags & debugDetailFlag) {
      logInfo(`${condition.toString()}`, debugFlag);
    }
  };
}

export function applyAnswerDefaults(
  props: PerformActionOnConditionalModelsProps<HpClientDependentAnswer>
): HpClientQuestionSetState {
  return performActionOnConditionalModels(props);
}

export function runDependentActions(
  props: PerformActionOnConditionalModelsProps<HpClientDependentAction>
): HpClientQuestionSetState {
  return performActionOnConditionalModels(props);
}

export function evaluateLookupConditions(
  questionId: string,
  eventType: HpEventTypes,
  lookup: HpClientQuestionLookupItemMap,
  state: HpClientQuestionSetState
): { visible: SMap<boolean>; count: number } {
  let count = 0;
  const visible: SMap<boolean> = {};
  lodash.forOwn(lookup, (item, key) => {
    if (!item || !item.condition) {
      return;
    }

    visible[key] = false;
    count++;
    const conditionMetAction = (): undefined => {
      visible[key] = true;
      return undefined;
    };

    performActionOnConditionalModels({
      items: { [questionId]: [item] },
      state,
      conditionMetAction,
      sourceQuestionId: questionId,
      type: 'lookup condition',
      eventType
    });
  });

  return { visible, count };
}

interface ConditionalModel {
  condition?: HpClientConditionFunction;
}

export interface ConditionMetFunctionProps<ItemT extends ConditionalModel> {
  questionId: string;
  item: ItemT;
  state: HpClientQuestionSetState;
}

export type ConditionMetFunction<ItemT extends ConditionalModel> = (
  props: ConditionMetFunctionProps<ItemT>
) => HpClientQuestionSetState | undefined;

interface PerformActionOnConditionalModelsProps<ItemT extends ConditionalModel> {
  sourceQuestionId: string;
  items: SMap<ItemT[]>;
  state: HpClientQuestionSetState;
  conditionMetAction: ConditionMetFunction<ItemT>;
  type: 'dependent answer' | 'dependent action' | 'lookup condition';
  eventType: HpEventTypes;
}

export function performActionOnConditionalModels<ItemT extends ConditionalModel>({
  sourceQuestionId,
  items: conditionalModels,
  state,
  conditionMetAction,
  eventType,
  type
}: PerformActionOnConditionalModelsProps<ItemT>): HpClientQuestionSetState {
  let newState = state;
  let unmetQuestionId = '';
  let unmetCondition: HpClientConditionFunction | undefined = undefined;

  const debugOutput = createDebugOutput({
    typeName: 'Question',
    exprName: `${type} has`,
    debugFlag: HpDebugFlags.DependentAnswers,
    debugDetailFlag: HpDebugFlags.DependentAnswerDetail,
    getDesc: (id) => {
      const q = state.questions[id];
      if (!q) {
        throw new Error(`There is no question with ID "${id}".`);
      }

      return q.name || q.questionId;
    }
  });

  lodash.forOwn(conditionalModels, (defaultExprList, questionId) => {
    const { groupNumber } = destructureControlId(questionId, { requirePrefix: false });
    let index = 0;
    for (const defaultExpr of defaultExprList) {
      const { condition } = defaultExpr;
      const { questions, answers, displayState } = newState;
      const self = new HpClientPrerequisiteThisReferenceClass({
        questions,
        answers,
        displayState,
        groupNumber,
        debugFlag: HpDebugFlags.DependentAnswerDetail
      });
      let conditionMet = false;
      const props: HpClientDynamicFunctionProps = {
        questionId,
        sourceQuestionId,
        eventType,
        groupNumber
      };

      if (condition !== undefined) {
        try {
          conditionMet = condition.call(self, props);
        } catch (ex) {
          console.error(`Error invoking ${type} ${index} of '${questionId}': ${ex}`);
        }
      } else {
        conditionMet = true;
      }

      if (conditionMet) {
        if (condition) {
          debugOutput(questionId, condition, 'been met');
        }

        newState = conditionMetAction({ questionId, item: defaultExpr, state: newState }) || newState;
        break;
      } else {
        unmetQuestionId = questionId;
        unmetCondition = condition;
      }

      index++;
    }
  });

  if (unmetCondition) {
    debugOutput(unmetQuestionId, unmetCondition, 'not been met');
  }

  return newState;
}

export function evaluateCalculatedAnswer(
  question: HpClientQuestion,
  state: HpClientQuestionSetState,
  eventType: HpEventTypes,
  calculatedAnswer?: HpClientAnswerExpressionFunction | undefined
): HpAnswerValueTypes {
  const { questionId, name: questionName } = question;
  let answer: HpAnswerValueTypes;
  calculatedAnswer = calculatedAnswer || question.calculatedAnswer;
  if (!calculatedAnswer) {
    throw new Error(
      `Error evalulating calculated answer for Question "${questionName}": The calculatedAnswer property is not defined.`
    );
  }

  const { groupNumber } = destructureControlId(questionId, { requirePrefix: false });
  const { questions, answers, displayState } = state;
  const self = new HpClientPrerequisiteThisReferenceClass({
    questions,
    answers,
    displayState,
    groupNumber,
    debugFlag: HpDebugFlags.CalculatedAnswerDetail
  });
  const props: HpClientDynamicFunctionProps = {
    questionId,
    sourceQuestionId: questionId,
    eventType,
    groupNumber
  };

  try {
    answer = calculatedAnswer.call(self, props);
    logInfo(
      () => `Question "${questionName}"'s calculated answer is: ${debugDisplay(answer)}.`,
      HpDebugFlags.CalculatedAnswers
    );
  } catch (ex) {
    throw new Error(`Error evalulating calculated answer for Question "${questionName}": ${ex}`);
  }

  return answer;
}
