import { SMap } from '@avantia/client-and-server-utilities';
import {
  createControlId,
  CreateControlIdProps,
  destructureControlId,
  findQuestionId,
  HpAnswerValueTypes,
  HpDebugFlags,
  HpQuestion,
  HpTokensAndExpressionsThisReference,
  logInfo
} from '@avantia/questionset-model';
import jQuery from 'jquery';
import { HpClientAnswer, HpClientQuestion, HpQuestionDisplayState } from '../interfaces';
import {
  HpClientPrerequisiteThisReference,
  HpClientThisRefGetItemFunctionProps
} from '../interfaces/thisReferencesTypes';
import { ensureDefined, getAnswerValue } from './utilities';

interface HpThisSelf<QuestionT> {
  questions: SMap<QuestionT>;
  answers: SMap<HpClientAnswer>;
  displayState: HpQuestionDisplayState;
  groupNumber: number | undefined;
  debugFlag: HpDebugFlags;
}

let hasWindowRef = false;
try {
  if (window.document) {
    hasWindowRef = true;
  }
} catch {
  // ignore
}

export class HpClientPrerequisiteThisReferenceClass<QuestionT extends HpClientQuestion | HpQuestion>
  extends HpTokensAndExpressionsThisReference
  implements HpClientPrerequisiteThisReference<QuestionT> {
  // This makes the property nominally more difficult for scripts to access values directly, rather than via functions
  private readonly self: HpThisSelf<QuestionT>;

  constructor({ questions, answers, displayState, groupNumber, debugFlag }: HpThisSelf<QuestionT>) {
    super();
    this.self = { questions, answers, displayState, groupNumber, debugFlag };
  }

  modifyState(questions: SMap<QuestionT>, answers: SMap<HpClientAnswer>, groupNumber: number | undefined): void {
    const self = this.self;
    self.questions = questions;
    self.answers = answers;
    self.groupNumber = groupNumber;
  }

  getQuestion(props: HpClientThisRefGetItemFunctionProps): QuestionT | undefined {
    const { groupNumber, questions } = this.self;
    return getQuestionFunc<QuestionT>(props, groupNumber, questions);
  }

  getAnswer(props: HpClientThisRefGetItemFunctionProps): HpClientAnswer | undefined {
    const { groupNumber, questions, answers } = this.self;
    return getAnswerFunc<QuestionT>(props, groupNumber, questions, answers);
  }

  getAnswerValue(props: HpClientThisRefGetItemFunctionProps): HpAnswerValueTypes {
    const { groupNumber, questions, answers } = this.self;
    return getAnswerValueFunc<QuestionT>(props, groupNumber, questions, answers);
  }

  isElementVisible(questionId: string, groupNum: number | undefined): boolean {
    const { displayState } = this.self;
    return isElementVisible(questionId, groupNum, displayState);
  }

  getIdFromName(name: string, groupNumber: number | undefined): string {
    return getIdFromName(name, groupNumber);
  }
}

function getQuestionFunc<QuestionT extends HpClientQuestion | HpQuestion>(
  props: HpClientThisRefGetItemFunctionProps,
  groupNum: number | undefined,
  questions: SMap<QuestionT>
): QuestionT | undefined {
  const { questionId, groupNumber } = getDetailsFromProps(props);
  let qid = questionId;

  // Ensure that the 'basic' question exists (without group numbers)
  let question = getItemFromMap({
    questionId,
    groupNumber: undefined,
    map: questions
  });

  if (!question) {
    // Try to find the question by name
    qid = findQuestionId({
      name: questionId,
      groupNumber: undefined,
      questions,
      allowMappingFail: true
    });

    if (qid) {
      question = getItemFromMap({
        questionId: qid,
        groupNumber: undefined,
        map: questions
      });
    }
  }

  // If it's a group question (denoted by having a truthy 'groupId' property) and a 'groupNumber' is specified
  // try and find the particular group question
  if (question && (groupNumber || groupNum) && question.groupId) {
    question = getItemFromMap({ questionId: qid, groupNumber: groupNumber || groupNum, map: questions });
    if (!question) {
      return undefined;
    }
  }

  return question;
}

function getAnswerFunc<QuestionT extends HpClientQuestion | HpQuestion>(
  props: HpClientThisRefGetItemFunctionProps,
  groupNum: number | undefined,
  questions: SMap<QuestionT>,
  answers: SMap<HpClientAnswer>
): HpClientAnswer | undefined {
  const question = getQuestionFunc(props, groupNum, questions);
  if (question) {
    const answer = answers[question.questionId];
    if (answer) {
      return answer;
    }
  }

  return undefined;
}

function getAnswerValueFunc<QuestionT extends HpClientQuestion | HpQuestion>(
  props: HpClientThisRefGetItemFunctionProps,
  groupNum: number | undefined,
  questions: SMap<QuestionT>,
  answers: SMap<HpClientAnswer>
): HpAnswerValueTypes {
  const question = getQuestionFunc(props, groupNum, questions);
  if (question) {
    const answer = answers[question.questionId];
    if (answer) {
      const { answerValue } = getAnswerValue(answer, question, 'prerequisites');
      return answerValue;
    }
  }

  return null;
}

function getDetailsFromProps(props: HpClientThisRefGetItemFunctionProps): CreateControlIdProps {
  if (typeof props === 'string') {
    return destructureControlId(props as string, { requirePrefix: false });
  }

  return props;
}

interface GetItemFromMapProps<ResultT> {
  questionId: string;
  groupNumber: number | undefined;
  map: SMap<ResultT>;
}

function getItemFromMap<ResultT>({ questionId, groupNumber, map }: GetItemFromMapProps<ResultT>): ResultT | undefined {
  let qid = questionId;
  if (groupNumber) {
    qid = createControlId({
      questionId,
      groupNumber,
      options: { noPrefix: true, ignorePrefix: true }
    });
  }

  return map[qid];
}

function getIdFromName(name: string, groupNumber: number | undefined): string {
  ensureDefined(name, 'name');
  return findQuestionId({ name, questions: {}, groupNumber, onlyFromCache: true });
}

export function isElementVisible(
  questionId: string,
  groupNumber: number | undefined,
  displayState: HpQuestionDisplayState
): boolean {
  return !!getElement(questionId, groupNumber, displayState);
}

function getElement(
  questionId: string,
  groupNumber: number | undefined,
  displayState: HpQuestionDisplayState
): HTMLElement | undefined {
  ensureDefined(questionId, 'questionId');
  const id = getIdFromName(questionId, groupNumber);
  const controlId = createControlId({ questionId: id });

  // let stateHasElement = false;
  // let browserHasElement = false;
  let html: HTMLElement | undefined;

  if (hasWindowRef) {
    const elements = jQuery('#' + controlId.replace(/~/g, '\\~'));
    if (elements.length === 1) {
      html = elements.get(0);
      // browserHasElement = true;
    } else {
      logInfo(
        elements.length === 0
          ? `There is no control with id="${controlId}"`
          : `There are ${elements.length} controls with id="${controlId}"; undefined will be returned`,
        HpDebugFlags.ValidatorExpressions
      );
    }
  } else {
    const isVisibleId = displayState.visibleQuestionIds.indexOf(id);
    if (isVisibleId) {
      const qui = displayState.questionsUI[id];
      if (!qui || qui.isVisible) {
        const htmlTag: Partial<HTMLElement> = { tagName: 'Fake', id: controlId };
        html = htmlTag as HTMLElement;
        // stateHasElement = true;
      }
    }
  }

  // TODO: Ideally have the browser and state in perfect synchronsiation
  // if (browserHasElement !== stateHasElement) {
  //   throw new Error(
  //     `The browser and state disagree with regard to visibility of ${JSON.stringify({
  //       questionId,
  //       groupNumber
  //     })}: ${JSON.stringify({ browser: browserHasElement, state: stateHasElement })}`
  //   );
  // }

  return html;
}
