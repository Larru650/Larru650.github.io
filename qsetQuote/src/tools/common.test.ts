import { HpAnswer, HpQuestionSet } from '@avantia/questionset-model';
import { v4 as uuid } from 'uuid';
import {
  HpClientInputTextAndStyle,
  HpClientQuestion,
  HpClientQuestionData,
  HpClientQuestionSetState
} from '../interfaces';
import { HpClientQuestionUiMap, HpQuestionDisplayState } from '../interfaces/displayStateTypes';
import { createEmptyDisplayState } from '../reducers/initialState';
import { applyChanges } from '../reducers/reducerLibrary';

//#############################################
// These functions are for use by tests only!!!
//#############################################
export type DebugThisTestMethod = 'debug-test';

export function createEmptyTestState(
  extra?: Partial<HpClientQuestionSetState>,
  extraDisplay?: Partial<HpQuestionDisplayState>
): HpClientQuestionSetState {
  const state: HpClientQuestionSetState = {
    answersId: '',
    questions: {},
    answers: {},
    stylesheets: [],
    version: '',
    friendlyName: '',
    timestamp: new Date().toISOString(),
    questionFormats: [],
    questionSetId: '',
    validationResult: {
      errors: {},
      checked: {},
      count: 0
    },
    displayState: createEmptyDisplayState({ addBlankSection: false, extra: extraDisplay }),
    commonLookups: {}
  };
  return applyChanges(state, extra || {});
}

export function createEmptyTestPayload(addQuestion?: boolean, extra?: Partial<HpQuestionSet>): HpQuestionSet {
  const state: HpQuestionSet = {
    questions: {},
    answers: {},
    sections: { first: { sectionId: 'first', title: 'First section', position: 1, isTemplate: false } },
    version: '',
    stylesheets: [],
    friendlyName: '',
    timestamp: new Date().toISOString(),
    questionFormats: [],
    questionSetId: '',
    commonLookups: {},
    functionReferences: ''
  };
  if (addQuestion !== false) {
    createQuestion({ state, name: 'question-to-make-section-valid' });
  }

  return applyChanges(state, extra || {});
}

export interface CreateQuestionProps {
  state: HpClientQuestionSetState | HpQuestionSet;
  questionsUI?: HpClientQuestionUiMap;
  name: string;
  extras?: Partial<HpClientQuestion>;
}

export function createQuestion({ state, questionsUI, name, extras }: CreateQuestionProps): HpClientQuestion {
  const data: HpClientQuestionData = {
    textAndStyle: {
      standard: {
        questionText: `What ${name}?`,
        controlType: 'TextInput'
      }
    } as HpClientInputTextAndStyle,
    lookup: {},
    validation: []
  };

  let question: HpClientQuestion = {
    name,
    questionId: uuid(),
    mappingField: name,
    sectionId: 'first',
    order: 0,
    position: 0,
    isMultiSelect: false,
    default: null,
    prerequisites: [],
    groupOrder: 1,
    visible: true,
    dataType: 'string',
    data
  };

  question = applyChanges(question, extras || {});
  state.questions[question.questionId] = question;
  if (questionsUI) {
    questionsUI[question.questionId] = { isVisible: true, isEditing: false };
  }

  return question;
}

export function createAnswer(
  state: HpClientQuestionSetState | HpQuestionSet,
  question: HpClientQuestion,
  value: string
): HpAnswer {
  const answer: HpAnswer = {
    aggregator: null,
    customer: value || null,
    default: null
  };

  if (!state.answers) {
    state.answers = {};
  }

  state.answers[question.questionId] = answer;
  return answer;
}

describe('common', () => {
  it('placeholder', () => {
    expect(true).toBe(true); // we need at least one test.
  });
});
