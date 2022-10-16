/***************************
This file exists in order that functions/features can be shared
between questionSetPayloadMapper and questionSetReducerLibrary
************************* */
import { basicSorter, SMap } from '@avantia/client-and-server-utilities';
import {
  createControlId,
  destructureControlId,
  displayTimeTaken,
  getDebugFlags,
  HpAnswer,
  HpDebugFlags,
  logInfo,
  MaxGroupsAllowed,
  MicroTimer
} from '@avantia/questionset-model';
import lodash from 'lodash';
import {
  HpClientQuestion,
  HpClientQuestionData,
  HpClientQuestionLookupItemMap,
  HpClientQuestionMap,
  HpClientQuestionSetState,
  HpClientQuestionUI,
  HpClientQuestionUiMap,
  HpClientSection,
  HpClientSectionUI,
  HpEventTypes,
  HpQuestionDisplayState,
  HpQuestionIdGroup,
  HpQuestionIdNode
} from '../interfaces';
import { HpClientPrerequisiteThisReferenceClass } from '../tools/prerequisiteThisReference';
import { forEachSectionInOrder } from '../tools/questionDisplayStateTools';
import {
  evaluateCalculatedAnswer,
  evaluateLookupConditions,
  questionPrerequisitesHaveBeenMet,
  sectionPrerequisitesHaveBeenMet
} from '../tools/questionPrerequisites';
import { answersAreSame, ensureDefined } from '../tools/utilities';
import { applyChanges } from './reducerLibrary';

export function iterateVisibleQuestions(
  questions: HpClientQuestionMap,
  questionsUI: HpClientQuestionUiMap,
  sectionId: string,
  action: ({ question: HpClientQuestion, questionId: string }) => void
): void {
  for (const id in questions) {
    const question = questions[id];
    const questionUI = questionsUI[id];
    if (questionUI && questionUI.isVisible && (!sectionId || sectionId === question.sectionId)) {
      action({ question, questionId: id });
    }
  }
}

export function iterateInvisibleQuestions(
  questions: HpClientQuestionMap,
  questionsUI: HpClientQuestionUiMap,
  sectionId: string,
  action: ({ question: HpClientQuestion, questionId: string }) => void
): void {
  for (const id in questions) {
    const question = questions[id];
    const questionUI = questionsUI[id];
    if (questionUI && !questionUI.isVisible && (!sectionId || sectionId === question.sectionId)) {
      action({ question, questionId: id });
    }
  }
}

export function getActiveSection(displayState: HpQuestionDisplayState): HpClientSection {
  const { activeSectionId, sections } = displayState;
  const section = sections[activeSectionId];
  if (!section) {
    throw new Error(`There is no active section.`);
  }

  return section;
}

export interface DetermineVisibleQuestionsProps {
  activeSectionId: string;
  questions: HpClientQuestionMap;
  questionsUI: HpClientQuestionUiMap;
}

export function determineVisibleQuestions({
  questions,
  activeSectionId,
  questionsUI
}: DetermineVisibleQuestionsProps): HpQuestionIdNode[] {
  const visibleQuestions: HpQuestionIdNode[] = determineQuestionsToDisplay(activeSectionId, questions, questionsUI);
  sortQuestionIdNodes(visibleQuestions, questions);
  return visibleQuestions;
}

function determineQuestionsToDisplay(
  sectionId: string,
  questions: HpClientQuestionMap,
  questionsUI: HpClientQuestionUiMap
): HpQuestionIdNode[] {
  if (!sectionId) {
    throw new Error('The sectionId argument must be provided');
  }

  const questionIdNodes: HpQuestionIdNode[] = [];
  const groupQuestionIdNodesMap = new Map<string, HpQuestionIdGroup>();
  let prevGroupId: string | undefined = undefined;
  let groupNode: HpQuestionIdGroup | undefined = undefined;
  iterateVisibleQuestions(questions, questionsUI, sectionId, ({ question }) => {
    const { questionId, groupId } = question;
    let groupQuestionIdNode = groupQuestionIdNodesMap.get(groupId);
    if (groupId) {
      const { groupNumber } = destructureControlId(questionId, { requirePrefix: false });
      if (groupQuestionIdNode && groupQuestionIdNode.number !== groupNumber) {
        groupQuestionIdNode = undefined;
      }

      if (
        (!prevGroupId || prevGroupId !== groupId || (groupNode && groupNode.number !== groupNumber)) &&
        !groupQuestionIdNode
      ) {
        if (groupNode) {
          questionIdNodes.push(groupNode);
          groupQuestionIdNodesMap.set(groupNode.groupId, groupNode);
        }

        groupNode = { groupId, number: groupNumber, questions: [questionId] };
      } else {
        if (groupQuestionIdNode && !groupNumber) {
          groupQuestionIdNode.questions.push(questionId);
        } else {
          if (!groupNode) {
            groupNode = { groupId, number: groupNumber, questions: [questionId] };
          }

          if (groupNumber === groupNode.number) {
            (groupNode as HpQuestionIdGroup).questions.push(questionId);
          }
        }
      }
    } else {
      if (groupNode) {
        questionIdNodes.push(groupNode);
        groupQuestionIdNodesMap.set(groupNode.groupId, groupNode);
        groupNode = undefined;
      }

      questionIdNodes.push(questionId);
    }

    prevGroupId = groupId;
  });

  if (groupNode) {
    questionIdNodes.push(groupNode);
  }

  return questionIdNodes;
}

function sortQuestionIdNodes(questionIdNodes: HpQuestionIdNode[], questions: HpClientQuestionMap): void {
  const sortFunc: (idA: HpQuestionIdNode, idB: HpQuestionIdNode) => number = (
    idA: HpQuestionIdNode,
    idB: HpQuestionIdNode
  ) => {
    const getQ: (id: HpQuestionIdNode) => HpClientQuestion = (id) => {
      if (typeof id === 'object') {
        const g = id as HpQuestionIdGroup;
        if (g.questions && g.questions.length > 0) {
          return questions[g.questions[0]];
        }

        throw new Error(`There are no questions in group "${g.groupId}".`);
      }

      return questions[id as string];
    };

    return questionOrderSorter(getQ(idA), getQ(idB));
  };

  for (const grp of questionIdNodes) {
    if (typeof grp === 'object') {
      grp.questions.sort(sortFunc);
    }
  }

  questionIdNodes.sort(sortFunc);
}

export function createQuestionIdSorter(questions: HpClientQuestionMap): (q1Id: string, q2Id: string) => number {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return (q1Id, q2Id) => {
    const q1 = questions[q1Id];
    const q2 = questions[q2Id];
    return questionOrderSorter(q1, q2);
  };
}

export function questionOrderSorter(a: HpClientQuestion, b: HpClientQuestion): number {
  const notProvided = 99999;
  let ao = a.order >= 0 ? a.order : notProvided,
    bo = b.order >= 0 ? b.order : notProvided;
  let res = basicSorter(ao, bo);
  if (res === 0) {
    ao = a.position;
    bo = b.position;
    res = basicSorter(ao, bo);
  }

  return res;
}

function questionChangesIterator<ItemT>(
  description: string,
  questions: HpClientQuestionMap,
  allOrderedQuestionIds: string[],
  modifier: (q: HpClientQuestion) => ItemT | undefined
): { modified: SMap<ItemT>; count: number } {
  const timer = new MicroTimer().start();
  const modified: SMap<ItemT> = {};
  let count = 0;
  for (const questionId of allOrderedQuestionIds) {
    const question = questions[questionId];
    if (!question) {
      throw new Error(`There is no question with id "${questionId}".`);
    }

    const changed = modifier(question);
    if (changed) {
      modified[questionId] = changed;
      count++;
    }
  }

  displayTimeTaken(`${description} (${count} changes)`, timer);
  return { modified, count };
}

export function evaluateSectionPrerequisites(
  displayState: HpQuestionDisplayState,
  state: HpClientQuestionSetState,
  eventType: HpEventTypes
): SMap<HpClientSectionUI> {
  const sectionsUI = { ...displayState.sectionsUI };
  forEachSectionInOrder({
    displayState,
    options: { iterate: 'sections-and-groups' },
    worker: (_, ui, sectionId) => {
      const isVisible = sectionPrerequisitesHaveBeenMet(sectionId, eventType, state);
      sectionsUI[sectionId] = applyChanges(ui, { isVisible });
    }
  });
  return sectionsUI;
}

export function evaluateCalculatedAnswers(
  state: HpClientQuestionSetState,
  eventType: HpEventTypes
): HpClientQuestionSetState {
  const { questions, answers, displayState } = state;
  const { modified, count } = questionChangesIterator<HpAnswer>(
    'Evaluate calculated answers',
    questions,
    displayState.allOrderedQuestionIds,
    (question) => {
      if (!question.calculatedAnswer) {
        return undefined;
      }

      const answerValue = evaluateCalculatedAnswer(question, state, eventType);
      const answer = answers[question.questionId];
      if (answer && answersAreSame(question.dataType, answer.customer, answerValue)) {
        return undefined;
      }

      return applyChanges(answer || createBlankAnswer(HpDebugFlags.CalculatedAnswers), {
        customer: answerValue
      });
    }
  );

  if (count) {
    const changedAnswers = applyChanges(answers, modified);
    state = applyChanges(state, { answers: changedAnswers });
  }

  return state;
}

export function evaluateLookupExpressions(state: HpClientQuestionSetState): HpClientQuestionSetState {
  // eslint-disable-next-line prefer-const
  let { questions, answers, displayState } = state;
  let count = 0;
  const changedData: SMap<HpClientQuestionLookupItemMap> = {};
  const self = new HpClientPrerequisiteThisReferenceClass({
    questions,
    answers,
    displayState,
    groupNumber: undefined,
    debugFlag: HpDebugFlags.LookupExpressions
  });
  lodash.forOwn(questions, ({ questionId, data }) => {
    const qdata = data as HpClientQuestionData;
    if (qdata.lookupExpr) {
      const lookup = qdata.lookupExpr.call(self, questionId);
      if (!lookup || typeof lookup !== 'object') {
        throw new Error(
          `The function should return a lookup map (object), but instead returned ${typeof lookup}.\n${
            qdata.lookupExpr
          }`
        );
      }

      // Don't update state unless the objects are different
      if (!qdata.lookup || !lodash.isEqual(qdata.lookup, lookup)) {
        changedData[questionId] = lookup;
        count++;
      }
    }
  });

  if (count > 0) {
    questions = { ...questions };
    lodash.forOwn(changedData, (lookup, key) => {
      const question = questions[key];
      const data = { ...question.data } as HpClientQuestionData;
      data.lookup = lookup;
      questions[key] = applyChanges(question, { data });
    });
    state = applyChanges(state, { questions });
  }

  return state;
}

export function evaluateQuestionPrerequisites(
  state: HpClientQuestionSetState,
  eventType: HpEventTypes
): HpClientQuestionSetState {
  const { displayState, questions } = state;
  const questionsUI = { ...displayState.questionsUI };
  const { count } = questionChangesIterator<boolean>(
    'Evaluate question prerequisites',
    questions,
    displayState.allOrderedQuestionIds,
    (q) => evaluateQuestionPrerequisite(q, eventType, state, questionsUI)
  );

  if (count) {
    const changedDisplayState = applyChanges(displayState, { questionsUI });
    state = applyChanges(state, { displayState: changedDisplayState });
  }

  return state;
}

export function evaluateQuestionPrerequisite(
  question: HpClientQuestion,
  eventType: HpEventTypes,
  state: HpClientQuestionSetState,
  questionsUI: HpClientQuestionUiMap
): boolean {
  const { questionId, groupId, data } = ensureDefined(question, 'question');
  let questionIds = [questionId];
  if (groupId) {
    const { isTemplate } = state.displayState.sections[groupId];
    if (isTemplate) {
      const questions = state.questions;
      questionIds = [];
      for (let grpNo = 1; grpNo < MaxGroupsAllowed; grpNo++) {
        const grpId = createControlId({ questionId, groupNumber: grpNo, options: { noPrefix: true } });
        if (questions[grpId]) {
          questionIds.push(grpId);
        } else {
          break;
        }
      }
    }
  }

  let changeCount = 0;
  for (const id of questionIds) {
    const met = questionPrerequisitesHaveBeenMet(id, eventType, state);
    const questionUI = questionsUI[id];
    if (!questionUI || met !== questionUI.isVisible) {
      questionsUI[id] = applyChanges(questionUI, { isVisible: met });
      changeCount++;
    }
  }

  const { lookup } = data as HpClientQuestionData;
  const questionUI: HpClientQuestionUI = questionsUI[questionId];
  if (lookup && questionUI.lookupVisibility !== false) {
    const { visible: lookupVisibility, count } = evaluateLookupConditions(questionId, eventType, lookup, state);
    if (count > 0) {
      questionsUI[questionId] = applyChanges(questionUI, { lookupVisibility });
    } else {
      questionsUI[questionId] = applyChanges(questionUI, { lookupVisibility: false });
    }

    changeCount++;
  }

  return changeCount > 0;
}

export function createBlankAnswer(flag: HpDebugFlags): HpAnswer {
  logInfo(`Created blank answer for ${getDebugFlags(flag)[0]}`, HpDebugFlags.BlankAnswers);
  return { customer: null, aggregator: null, default: null };
}
