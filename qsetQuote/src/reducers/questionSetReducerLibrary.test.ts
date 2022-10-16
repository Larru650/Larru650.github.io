import { createControlId, HpAnswerValueTypes, HpDebugFlags, HpQuestionDataTypes } from '@avantia/questionset-model';
import { v4 as uuid } from 'uuid';
import {
  HpClientAnswer,
  HpClientAnswerMap,
  HpClientConditionFunction,
  HpClientQuestion,
  HpClientQuestionData,
  HpClientSection,
  HpClientStandardButtonTextAndStyle,
  HpClientStandardInputTextAndStyle,
  HpEventTypes
} from '../interfaces';
import { HpClientQuestionUiMap, HpQuestionDisplayState } from '../interfaces/displayStateTypes';
import { createAnswer, createEmptyTestState, createQuestion } from '../tools/common.test';
import {
  populateAutoCompleteListIfApplicable,
  updateAnswerValue,
  validateAndMaybeMoveSection
} from './questionSetReducerLibrary';
import { createBlankAnswer, determineVisibleQuestions } from './questionSetTools';
import { applyChanges } from './reducerLibrary';

const sectionPrerequisiteTestFunction: HpClientConditionFunction = function fixedResponse() {
  return true;
};

describe('questionSetReducerLibrary', () => {
  describe('validateAndMaybeMoveSection', () => {
    it('works', () => {
      // arrange
      const state = createEmptyTestState();
      const questionsUI: HpClientQuestionUiMap = {};
      const name = createQuestion({ state, questionsUI, name: 'name' });
      const displayState: HpQuestionDisplayState = {
        activeSectionId: 'A',
        highestSectionStartedPosition: 0,
        sections: {
          A: createTestSection('A', { position: 0 }),
          B: createTestSection('B', { position: 1 })
        },
        visibleQuestionIds: [name.questionId],
        availableQuestionSets: { items: [] },
        allOrderedQuestionIds: [],
        sectionIdOrder: ['A', 'B'],
        questionsUI,
        sectionsUI: {},
        scriptActions: [],
        showValidationSummary: false
      };
      const nameAnswer = createAnswer(state, name, 'Bob');
      state.answers = {};
      state.answers[name.questionId] = nameAnswer;
      state.displayState = displayState;
      const riskAnswers = state.answers;

      // act
      const newState = validateAndMaybeMoveSection({
        state,
        buttonAction: 'next-section',
        desiredSectionId: 'B',
        options: { raiseEvents: false }
      });

      // assert
      expect(newState).not.toBe(state);
      expect(newState.answers).not.toBe(riskAnswers);
      const newDisplayState = newState.displayState;
      expect(newDisplayState).not.toBe(displayState);
      expect(newDisplayState.activeSectionId).toBe('B');
      expect(newDisplayState).not.toBe(displayState);
    });

    it('does not validate questions that are not visible', () => {
      // arrange
      const state = createEmptyTestState();
      const questionsUI: HpClientQuestionUiMap = {};
      const nameId = uuid();
      const lastNameId = uuid();
      const name = createQuestion({
        state,
        questionsUI,
        name: 'name',
        extras: { questionId: nameId, sectionId: 'A' }
      });
      const lastName = createQuestion({
        state,
        questionsUI,
        name: 'lastName',
        extras: { questionId: lastNameId, sectionId: 'A' }
      });
      const displayState: HpQuestionDisplayState = {
        activeSectionId: 'A',
        highestSectionStartedPosition: 0,
        sections: {
          A: createTestSection('A', { position: 0 }),
          B: createTestSection('B', { position: 1 })
        },
        visibleQuestionIds: [name.questionId],
        availableQuestionSets: { items: [] },
        allOrderedQuestionIds: [name.questionId, lastName.questionId],
        sectionIdOrder: ['A', 'B'],
        questionsUI: { ...questionsUI, [lastNameId]: { ...questionsUI[lastNameId], isVisible: false } },
        sectionsUI: {},
        scriptActions: [],
        showValidationSummary: false
      };

      const nameAnswer = createAnswer(state, name, 'Bob');
      state.answers = {};
      state.answers[name.questionId] = nameAnswer;
      state.displayState = displayState;
      const riskAnswers = state.answers;

      // act
      const newState = validateAndMaybeMoveSection({ state, buttonAction: 'next-section', desiredSectionId: 'B' });

      // assert
      expect(newState).not.toBe(state);
      expect(newState.answers).not.toBe(riskAnswers);
      const newDisplayState = newState.displayState;
      const newValidationResult = newState.validationResult;
      expect(newValidationResult.checked).toHaveProperty(name.questionId);
      expect(newValidationResult.checked).not.toHaveProperty(lastName.questionId);
      expect(newDisplayState).not.toBe(displayState);
      expect(newDisplayState.activeSectionId).toBe('B');
      expect(newDisplayState).not.toBe(displayState);
    });

    it('validates group questions', () => {
      // arrange
      const state = createEmptyTestState();
      const questionsUI: HpClientQuestionUiMap = {};
      const sectionId = 'A';
      const groupId = 'group-8f-e492-429a-ba2a-6e5b617b5a4a';
      const nameId = uuid();
      const name = createQuestion({
        state,
        questionsUI,
        name: 'name',
        extras: { questionId: nameId, sectionId }
      });
      const townId = createControlId({
        questionId: 'town-78f-e492-429a-ba2a-6e5b617b5a4a',
        groupNumber: 1,
        options: { noPrefix: true }
      });
      const countyId = createControlId({
        questionId: 'county-378f-e492-429a-ba2a-6e5b617b5a4a',
        groupNumber: 1,
        options: { noPrefix: true }
      });
      createQuestion({
        state,
        questionsUI,
        name: 'town',
        extras: { groupId, questionId: townId, visible: false, sectionId }
      });
      createQuestion({
        state,
        questionsUI,
        name: 'county',
        extras: { groupId, questionId: countyId, visible: false, sectionId }
      });
      const displayState: HpQuestionDisplayState = {
        activeSectionId: 'A',
        highestSectionStartedPosition: 0,
        sections: {
          A: createTestSection('A', { position: 0 }),
          B: createTestSection('B', { position: 1 })
        },
        visibleQuestionIds: [name.questionId, townId, countyId],
        availableQuestionSets: { items: [] },
        allOrderedQuestionIds: [name.questionId, townId, countyId],
        sectionIdOrder: ['A', 'B'],
        questionsUI,
        sectionsUI: {},
        scriptActions: [],
        showValidationSummary: false
      };

      const nameAnswer = createAnswer(state, name, 'Bob');
      state.answers = {};
      state.answers[name.questionId] = nameAnswer;
      state.displayState = displayState;
      const riskAnswers = state.answers;

      // act
      const newState = validateAndMaybeMoveSection({ state, buttonAction: 'next-section', desiredSectionId: 'B' });

      // assert
      expect(newState).not.toBe(state);
      expect(newState.answers).not.toBe(riskAnswers);
      const newDisplayState = newState.displayState;
      const newValidationResult = newState.validationResult;
      expect(newValidationResult.checked).toHaveProperty(name.questionId);
      expect(newValidationResult.checked).toHaveProperty(townId);
      expect(newValidationResult.checked).toHaveProperty(countyId);
      expect(newDisplayState).not.toBe(displayState);
      expect(newDisplayState.activeSectionId).toBe('B');
      expect(newDisplayState).not.toBe(displayState);
    });
  });

  describe('determineVisibleQuestions', () => {
    it('works for simple sections', () => {
      // arrange
      const state = createEmptyTestState();
      const nameId = uuid();
      const ageId = uuid();
      const questionsUI: HpClientQuestionUiMap = {};
      createQuestion({ state, questionsUI, name: 'name', extras: { questionId: nameId, sectionId: 'A' } });
      createQuestion({ state, questionsUI, name: 'age', extras: { questionId: ageId, sectionId: 'B' } });
      const displayState: HpQuestionDisplayState = {
        activeSectionId: 'A',
        highestSectionStartedPosition: 0,
        sections: {
          A: createTestSection('A', { position: 0 }),
          B: createTestSection('B', { position: 1 })
        },
        visibleQuestionIds: [],
        availableQuestionSets: { items: [] },
        allOrderedQuestionIds: [],
        sectionIdOrder: ['A', 'B'],
        questionsUI,
        sectionsUI: {},
        scriptActions: [],
        showValidationSummary: false
      };
      state.displayState = displayState;

      // act/assert
      expect(
        determineVisibleQuestions({ questions: state.questions, questionsUI, activeSectionId: 'A' })
      ).toStrictEqual([nameId]);

      // act/assert
      expect(
        determineVisibleQuestions({ questions: state.questions, questionsUI, activeSectionId: 'B' })
      ).toStrictEqual([ageId]);
    });

    it('works for single question group', () => {
      // arrange
      const state = createEmptyTestState();
      const nameId = createControlId({
        questionId: 'name-78f-e492-429a-ba2a-6e5b617b5a4a',
        groupNumber: 1,
        options: { noPrefix: true }
      });
      const ageId = createControlId({
        questionId: 'age-378f-e492-429a-ba2a-6e5b617b5a4a',
        groupNumber: 1,
        options: { noPrefix: true }
      });
      const groupId = 'group-8f-e492-429a-ba2a-6e5b617b5a4a';
      const sectionId = 'A';
      const questionsUI: HpClientQuestionUiMap = {};

      // questions with groupId are set with visibility false (see mapPayloadToModel function)
      const name = createQuestion({
        state,
        questionsUI,
        name: 'name',
        extras: { groupId, questionId: nameId, visible: false, sectionId }
      });
      const age = createQuestion({
        state,
        questionsUI,
        name: 'age',
        extras: { groupId, questionId: ageId, visible: false, sectionId }
      });
      const displayState: HpQuestionDisplayState = {
        activeSectionId: sectionId,
        highestSectionStartedPosition: 0,
        sections: {
          A: createTestSection(sectionId)
        },
        visibleQuestionIds: [],
        availableQuestionSets: { items: [] },
        allOrderedQuestionIds: [],
        sectionIdOrder: ['A'],
        questionsUI,
        sectionsUI: {},
        scriptActions: [],
        showValidationSummary: false
      };
      state.displayState = displayState;
      // state.questionGroups = compileQuestionGroups(state.questions);

      // act/assert
      expect(
        determineVisibleQuestions({ questions: state.questions, questionsUI, activeSectionId: sectionId })
      ).toStrictEqual([
        {
          number: 1,
          groupId,
          questions: [nameId, ageId]
        }
      ]);

      // arrange
      age.order = 0;
      name.order = 1;

      // act/assert
      expect(
        determineVisibleQuestions({ questions: state.questions, questionsUI, activeSectionId: sectionId })
      ).toStrictEqual([
        {
          number: 1,
          groupId,
          questions: [ageId, nameId]
        }
      ]);
    });

    it('works for multiple adjacent groups', () => {
      // arrange
      const state = createEmptyTestState();
      const questionsUI: HpClientQuestionUiMap = {};
      const nameId = createControlId({ questionId: 'name-78f-e492-429a-ba2a-6e5b617b5a4a', groupNumber: 1 });
      const ageId = createControlId({ questionId: 'age-378f-e492-429a-ba2a-6e5b617b5a4a', groupNumber: 3 });
      const group1Id = 'group1-f-e492-429a-ba2a-6e5b617b5a40';
      const group2Id = 'group2-f-e492-429a-ba2a-6e5b617b5a40';
      const sectionId = 'A';

      // questions with groupId are set with visibility false (see mapPayloadToModel function)
      createQuestion({
        state,
        questionsUI,
        name: 'name',
        extras: { groupId: group1Id, questionId: nameId, visible: false, sectionId }
      });
      createQuestion({
        state,
        questionsUI,
        name: 'age',
        extras: { groupId: group2Id, questionId: ageId, visible: false, sectionId }
      });
      const displayState: HpQuestionDisplayState = {
        activeSectionId: sectionId,
        highestSectionStartedPosition: 0,
        sections: {
          A: createTestSection(sectionId)
        },
        visibleQuestionIds: [],
        availableQuestionSets: { items: [] },
        allOrderedQuestionIds: [],
        sectionIdOrder: ['A'],
        questionsUI,
        sectionsUI: {},
        scriptActions: [],
        showValidationSummary: false
      };
      state.displayState = displayState;
      // state.questionGroups = compileQuestionGroups(state.questions);

      // act/assert
      expect(
        determineVisibleQuestions({ questions: state.questions, questionsUI, activeSectionId: sectionId })
      ).toStrictEqual([
        {
          number: 1,
          groupId: group1Id,
          questions: [nameId]
        },
        {
          number: 3,
          groupId: group2Id,
          questions: [ageId]
        }
      ]);
    });

    it('works for multiple repeats of a group', () => {
      // arrange
      const state = createEmptyTestState();
      const questionsUI: HpClientQuestionUiMap = {};
      const name1Id = createControlId({
        questionId: 'name-78f-e492-429a-ba2a-6e5b617b5a4a',
        groupNumber: 1,
        options: { noPrefix: true }
      });
      const name2Id = createControlId({
        questionId: 'name-78f-e492-429a-ba2a-6e5b617b5a4a',
        groupNumber: 2,
        options: { noPrefix: true }
      });
      const name3Id = createControlId({
        questionId: 'name-78f-e492-429a-ba2a-6e5b617b5a4a',
        groupNumber: 3,
        options: { noPrefix: true }
      });
      const groupId = 'group1-f-e492-429a-ba2a-6e5b617b5a40';
      const sectionId = 'A';

      // questions with groupId are set with visibility false (see mapPayloadToModel function)
      createQuestion({
        state,
        questionsUI,
        name: 'name',
        extras: { groupId, questionId: name1Id, visible: false, sectionId }
      });
      createQuestion({
        state,
        questionsUI,
        name: 'name',
        extras: { groupId, questionId: name2Id, visible: false, sectionId }
      });
      createQuestion({
        state,
        questionsUI,
        name: 'name',
        extras: { groupId, questionId: name3Id, visible: false, sectionId }
      });
      const displayState: HpQuestionDisplayState = {
        activeSectionId: sectionId,
        highestSectionStartedPosition: 0,
        sections: {
          A: createTestSection(sectionId)
        },
        visibleQuestionIds: [],
        availableQuestionSets: { items: [] },
        allOrderedQuestionIds: [],
        sectionIdOrder: ['A'],
        questionsUI,
        sectionsUI: {},
        scriptActions: [],
        showValidationSummary: false
      };
      state.displayState = displayState;
      // state.questionGroups = compileQuestionGroups(state.questions);

      // act/assert
      expect(
        determineVisibleQuestions({ questions: state.questions, questionsUI, activeSectionId: sectionId })
      ).toStrictEqual([
        {
          number: 1,
          groupId: groupId,
          questions: [name1Id]
        },
        {
          number: 2,
          groupId: groupId,
          questions: [name2Id]
        },
        {
          number: 3,
          groupId: groupId,
          questions: [name3Id]
        }
      ]);
    });

    it('works for groups when questions are not sorted', () => {
      // arrange
      const state = createEmptyTestState();
      const questionsUI: HpClientQuestionUiMap = {};
      const backButtonId = createControlId({
        questionId: 'back-button',
        options: { noPrefix: true }
      });
      const nextButtonId = createControlId({
        questionId: 'next-button',
        options: { noPrefix: true }
      });
      const group1Id = 'button-grouping';
      const sectionId = 'A';

      const name1Id = createControlId({ questionId: 'name', groupNumber: 1 });
      const name2Id = createControlId({ questionId: 'name', groupNumber: 2 });
      const age1Id = createControlId({ questionId: 'age', groupNumber: 1 });
      const age2Id = createControlId({ questionId: 'age', groupNumber: 2 });
      const group2Id = 'group2';

      // questions with groupId are set with visibility false (see mapPayloadToModel function)
      createQuestion({
        state,
        questionsUI,
        name: 'back',
        extras: {
          groupId: group1Id,
          questionId: backButtonId,
          visible: false,
          sectionId
        }
      });
      createQuestion({
        state,
        questionsUI,
        name: 'name',
        extras: {
          groupId: group2Id,
          questionId: name1Id,
          visible: false,
          sectionId
        }
      });
      createQuestion({
        state,
        questionsUI,
        name: 'age',
        extras: {
          groupId: group2Id,
          questionId: age1Id,
          visible: false,
          sectionId
        }
      });
      createQuestion({
        state,
        questionsUI,
        name: 'next',
        extras: {
          groupId: group1Id,
          questionId: nextButtonId,
          visible: false,
          sectionId
        }
      });
      createQuestion({
        state,
        questionsUI,
        name: 'name',
        extras: {
          groupId: group2Id,
          questionId: name2Id,
          visible: false,
          sectionId
        }
      });
      createQuestion({
        state,
        questionsUI,
        name: 'age',
        extras: {
          groupId: group2Id,
          questionId: age2Id,
          visible: false,
          sectionId
        }
      });
      const displayState: HpQuestionDisplayState = {
        activeSectionId: sectionId,
        highestSectionStartedPosition: 0,
        sections: {
          A: createTestSection(sectionId)
        },
        visibleQuestionIds: [],
        availableQuestionSets: { items: [] },
        allOrderedQuestionIds: [],
        sectionIdOrder: ['A'],
        questionsUI,
        sectionsUI: {},
        scriptActions: [],
        showValidationSummary: false
      };
      state.displayState = displayState;

      // act/assert
      expect(
        determineVisibleQuestions({
          questions: state.questions,
          questionsUI,
          activeSectionId: sectionId
        })
      ).toStrictEqual([
        {
          groupId: group1Id,
          number: undefined,
          questions: [backButtonId, nextButtonId]
        },
        {
          groupId: group2Id,
          number: 1,
          questions: [name1Id, age1Id]
        },
        {
          groupId: group2Id,
          number: 2,
          questions: [name2Id, age2Id]
        }
      ]);
    });

    it('returns first invalid section when attempting to navigate beyond that section', () => {
      // TODO - Add invalid fields so it returns errors.
      // arrange
      // const state = createEmptyTestState();
      // const questionsUI: HpClientQuestionUiMap = {};
      // const name = createQuestion({
      //   state,
      //   questionsUI,
      //   name: 'name'
      // });
      // const displayState: HpQuestionDisplayState = {
      //   activeSectionId: 'A',
      //   highestSectionStartedPosition: 0,
      //   sections: {
      //     A: createTestSection('A', { position: 0 }),
      //     B: createTestSection('B', { position: 1 })
      //   },
      //   visibleQuestionIds: [name.questionId],
      //   availableQuestionSets: {
      //     items: []
      //   },
      //   allOrderedQuestionIds: [],
      //   sectionIdOrder: ['A', 'B'],
      //   questionsUI,
      //   sectionsUI: {},
      //   scriptActions: [],
      //   showValidationSummary: false
      // };
      // const nameAnswer = createAnswer(state, name, 'Bob');
      // state.answers = {};
      // state.answers[name.questionId] = nameAnswer;
      // state.displayState = displayState;
      // const riskAnswers = state.answers;
      // // act
      // const newState = validateAndMaybeMoveSection({
      //   state,
      //   buttonAction: 'next-section',
      //   desiredSectionId: 'B',
      //   options: {
      //     raiseEvents: false
      //   }
      // });
      // // assert
      // expect(newState).not.toBe(state);
      // expect(newState.answers).not.toBe(riskAnswers);
      // const newDisplayState = newState.displayState;
      // expect(newDisplayState).not.toBe(displayState);
      // expect(newDisplayState.activeSectionId).toBe('B');
      // expect(newDisplayState).not.toBe(displayState);
    });
  });

  describe('populateAutoCompleteListIfApplicable', () => {
    it('does nothing if there is no answer', () => {
      expect(populateAutoCompleteListIfApplicable({ data: {} } as HpClientQuestion, undefined)).toBeUndefined();
    });

    it('finds suggestions if an answer is provided that matches the list', () => {
      // arrange
      const answer = createBlankAnswer(HpDebugFlags.UnitTests);
      const key = createControlId({ questionId: 'badFood', key: 'bananaCake' });
      answer.customer = 'cake';
      const standard: Partial<HpClientStandardInputTextAndStyle> = { controlType: 'AutoCompleteList' };
      const data: Partial<HpClientQuestionData> = {
        lookup: {
          bananaCake: { text: 'banana cake' }
        },
        textAndStyle: { standard: standard as HpClientStandardInputTextAndStyle }
      };
      const question: Partial<HpClientQuestion> = { questionId: 'badFood', data: data as HpClientQuestionData };

      // act
      const result = populateAutoCompleteListIfApplicable(question as HpClientQuestion, answer);

      // assert
      expect(result).toBeDefined();
      expect(result ? result.partial : undefined).toEqual({
        minTermLength: 2,
        suggestions: [{ key, value: 'banana cake' }]
      });
    });
  });

  describe('updateAnswerValue', () => {
    const dataType: HpQuestionDataTypes = 'string';
    const eventType: HpEventTypes = 'change';
    const questionId = 'name';

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    function createQandAs() {
      const standard: Partial<HpClientStandardButtonTextAndStyle> = {};
      const question: Partial<HpClientQuestion> = {
        questionId,
        data: {
          textAndStyle: { standard: standard as HpClientStandardButtonTextAndStyle }
        }
      };
      const answer: HpClientAnswer = { customer: 'Bob', default: null };
      const answers: HpClientAnswerMap = { [questionId]: answer };
      return { answers, question: question as HpClientQuestion };
    }

    it('replaces one value with another when different', () => {
      // arrange
      const { question, answers } = createQandAs();
      const value: HpAnswerValueTypes = 'Jack';

      // act
      const answerMap = updateAnswerValue({
        question: question as HpClientQuestion,
        answers,
        partialAnswer: undefined,
        value,
        dataType,
        eventType
      });

      // assert
      expect(answerMap).not.toBe(answers);
      expect(answerMap ? answerMap[questionId].customer : null).toBe(value);
    });

    it('does nothing when new value is the same as the old value', () => {
      // arrange
      const { question, answers } = createQandAs();
      const value: HpAnswerValueTypes = 'Bob';

      // act
      const result = updateAnswerValue({
        question: question as HpClientQuestion,
        answers,
        partialAnswer: undefined,
        value,
        dataType,
        eventType
      });

      // assert
      expect(result).toBeUndefined();
    });

    it("sets the 'customer' value even if it is the same as the 'default' value", () => {
      // arrange
      const value: HpAnswerValueTypes = 'Bob';
      const { question, answers } = createQandAs();
      answers[questionId].customer = null;
      answers[questionId].default = value;

      // act
      const answerMap = updateAnswerValue({
        question: question as HpClientQuestion,
        answers,
        partialAnswer: undefined,
        value,
        dataType,
        eventType
      });

      // assert
      expect(answerMap).not.toBe(answers);
      expect(answerMap ? answerMap[questionId].customer : null).toBe(value);
    });

    it('Adds the partial data to an answer when provided', () => {
      // arrange
      const { question, answers } = createQandAs();

      // act
      const answerMap = updateAnswerValue({
        question: question as HpClientQuestion,
        answers,
        partialAnswer: { partial: 'hello' },
        value: null,
        dataType,
        eventType
      });

      // assert
      expect(answerMap).not.toBe(answers);
      expect(answerMap ? answerMap[questionId].partial : null).toBe('hello');
    });

    it("throws an exception when partial data does not contain 'partial' property", () => {
      // arrange
      const { question, answers } = createQandAs();

      // act/assert
      expect(() =>
        updateAnswerValue({
          question: question as HpClientQuestion,
          answers,
          partialAnswer: {
            customer: 'Benny'
          },
          value: null,
          dataType,
          eventType
        })
      ).toThrow("When a 'partialAnswer' is provided, it must contain a 'partial' key.");
    });

    it('sets both value and partial when provided', () => {
      // arrange
      const { question, answers } = createQandAs();
      const partial = { a: 7 };

      // assert
      expect(answers).toEqual({ name: { customer: 'Bob', default: null } });

      // act/assert
      expect(
        updateAnswerValue({
          question: question as HpClientQuestion,
          answers,
          partialAnswer: { partial },
          value: 'Joan',
          dataType,
          eventType
        })
      ).toEqual({ name: { customer: 'Joan', default: null, partial } });
    });

    it('does not update the answer value if the data type is a number and the typed value is not a number or a dot', () => {
      // arrange
      const { question } = createQandAs();
      const answer: HpClientAnswer = { customer: 12, default: null };
      const answers: HpClientAnswerMap = { [questionId]: answer };
      const value: HpAnswerValueTypes = 'James';
      // act
      const answerMap = updateAnswerValue({
        question: question as HpClientQuestion,
        answers,
        partialAnswer: undefined,
        value,
        dataType: 'number',
        eventType
      });

      // assert
      expect(answerMap).toStrictEqual(answers);
      expect(answerMap ? answerMap[questionId].customer : null).not.toBe(value);
    });

    it('updates the answer when the value has two decimal places', () => {
      // arrange
      const { question } = createQandAs();
      const answer: HpClientAnswer = { customer: null, default: null };
      const answers: HpClientAnswerMap = { [questionId]: answer };
      const value: HpAnswerValueTypes = '7.55';
      // act
      const answerMap = updateAnswerValue({
        question: question as HpClientQuestion,
        answers,
        partialAnswer: undefined,
        value,
        dataType: 'number',
        eventType
      });
      const expectedAnswer = 7.55;

      // assert
      expect(answerMap).not.toBe(answers);
      expect(answerMap ? answerMap[questionId].customer : null).toBe(expectedAnswer);
    });

    it('allows values that end with a decimal point', () => {
      // arrange
      const { question } = createQandAs();
      const answer: HpClientAnswer = { customer: null, default: null };
      const answers: HpClientAnswerMap = { [questionId]: answer };
      const value: HpAnswerValueTypes = '7.';
      // act
      const answerMap = updateAnswerValue({
        question: question as HpClientQuestion,
        answers,
        partialAnswer: undefined,
        value,
        dataType: 'number',
        eventType
      });

      // assert
      expect(answerMap).not.toBe(answers);
      expect(answerMap ? answerMap[questionId].customer : null).toBe(value);
    });
  });
});

function createTestSection(id: string, extra?: Partial<HpClientSection>): HpClientSection {
  const tmp: HpClientSection = {
    sectionId: id,
    title: id,
    position: 0,
    isTemplate: false,
    isGroup: false,
    prerequisites: [sectionPrerequisiteTestFunction]
  };
  return applyChanges(tmp, extra || {});
}
