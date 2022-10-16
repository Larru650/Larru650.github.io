import { createControlId, HpDebugFlags, loadQuestionIdCache } from '@avantia/questionset-model';
import { v4 as uuid } from 'uuid';
import {
  HpClientAnswer,
  HpClientAnswerMap,
  HpClientQuestion,
  HpClientQuestionMap,
  HpClientQuestionSetState,
  HpQuestionDisplayState
} from '../interfaces';
import { createBlankAnswer } from '../reducers/questionSetTools';
import { HpClientPrerequisiteThisReferenceClass } from './prerequisiteThisReference';

describe('prerequisiteThisReference', () => {
  function createPrerequsiteThisReference(
    state: Partial<HpClientQuestionSetState>
  ): HpClientPrerequisiteThisReferenceClass<HpClientQuestion> {
    return new HpClientPrerequisiteThisReferenceClass({
      questions: state.questions as HpClientQuestionMap,
      answers: (state.answers as HpClientAnswerMap) || {},
      displayState: (state.displayState as HpQuestionDisplayState) || {},
      groupNumber: undefined,
      debugFlag: HpDebugFlags.UnitTests
    });
  }

  describe('getQuestion', () => {
    it('gets a question by "questionId" or "name" (provided that "loadQuestionIdCache" has been called)', () => {
      // arrange
      const questionId = uuid();
      const name = 'dateOfBirth';
      const question: Partial<HpClientQuestion> = { questionId, name };
      const state: Partial<HpClientQuestionSetState> = {
        questions: { [question.questionId as string]: question as HpClientQuestion }
      };
      const self = createPrerequsiteThisReference(state);
      loadQuestionIdCache({
        items: state.questions as HpClientQuestionMap,
        onlyIfEmpty: false
      });

      // act
      expect(self.getQuestion(questionId)).toBe(question);
      expect(self.getQuestion(name)).toBe(question);
      expect(self.getQuestion({ questionId })).toBe(question);
      expect(self.getQuestion({ questionId: name })).toBe(question);
    });

    it('gets a question by ("questionId" or "name") and "groupNumber"', () => {
      // arrange
      const questionId = uuid();
      const groupId = 'my-group';
      const name = 'dateOfBirth';
      const groupNumber = 7;
      const question: Partial<HpClientQuestion> = { questionId, name, groupId };
      const questionInGroup: Partial<HpClientQuestion> = {
        questionId: createControlId({ questionId, groupNumber, options: { noPrefix: true } }),
        name,
        groupId
      };
      const state: Partial<HpClientQuestionSetState> = {
        questions: {
          [question.questionId as string]: question as HpClientQuestion,
          [questionInGroup.questionId as string]: questionInGroup as HpClientQuestion
        }
      };
      const self = createPrerequsiteThisReference(state);
      loadQuestionIdCache({
        items: state.questions as HpClientQuestionMap,
        onlyIfEmpty: false
      });

      // act/assert
      expect(self.getQuestion({ questionId, groupNumber })).toBe(questionInGroup);
      expect(self.getQuestion({ questionId: name, groupNumber })).toBe(questionInGroup);
    });

    it('returns undefined when a "questionId" does not exist', () => {
      // arrange
      const state: Partial<HpClientQuestionSetState> = {
        questions: {}
      };
      const self = createPrerequsiteThisReference(state);

      // act/assert
      expect(self.getQuestion('not-a-sausage')).toBeUndefined();
    });

    it('returns undefined when a "questionId" and "groupNumber" does not exist', () => {
      // arrange
      const questionId = uuid();
      const groupId = 'my-group';
      const name = 'dateOfBirth';
      const question: Partial<HpClientQuestion> = {
        questionId,
        name,
        groupId
      };
      const state: Partial<HpClientQuestionSetState> = {
        questions: {
          [question.questionId as string]: question as HpClientQuestion
        }
      };
      const self = createPrerequsiteThisReference(state);
      loadQuestionIdCache({
        items: state.questions as HpClientQuestionMap,
        onlyIfEmpty: false
      });

      // act/assert
      expect(self.getQuestion({ questionId })).toBeDefined();
      expect(
        self.getQuestion({
          questionId,
          groupNumber: 1
        })
      ).toBeUndefined();
    });
  });

  describe('getAnswer', () => {
    it('gets an answer by "questionId" or "name"', () => {
      // arrange
      const questionId = uuid();
      const name = 'dateOfBirth';
      const question: Partial<HpClientQuestion> = { questionId, name };
      const answer = createBlankAnswer(HpDebugFlags.UnitTests);
      const state: Partial<HpClientQuestionSetState> = {
        questions: {
          [question.questionId as string]: question as HpClientQuestion
        },
        answers: {
          [question.questionId as string]: answer
        }
      };
      const self = createPrerequsiteThisReference(state);
      loadQuestionIdCache({
        items: state.questions as HpClientQuestionMap,
        onlyIfEmpty: false
      });

      // act
      expect(self.getAnswer(questionId)).toBe(answer);
      expect(self.getAnswer({ questionId })).toBe(answer);
      expect(self.getAnswer({ questionId: name })).toBe(answer);
    });

    it('returns undefined when a "questionId" does not exist', () => {
      // arrange
      const state: Partial<HpClientQuestionSetState> = {
        questions: {},
        answers: {}
      };
      const self = createPrerequsiteThisReference(state);

      // act
      expect(self.getAnswer('not-a-sausage')).toBeUndefined();
    });

    it('returns undefined for a question that exists, but without an answer', () => {
      // arrange
      const questionId = uuid();
      const name = 'dateOfBirth';
      const question: Partial<HpClientQuestion> = { questionId, name };
      const state: Partial<HpClientQuestionSetState> = {
        questions: { [questionId]: question as HpClientQuestion },
        answers: {}
      };
      const self = createPrerequsiteThisReference(state);

      // act
      expect(self.getAnswer(questionId)).toBeUndefined();
    });
  });

  describe('getAnswerValue', () => {
    it('returns the "customer" answer for a question by "questionId" or "name" (when that question exists)', () => {
      // arrange
      const questionId = uuid();
      const name = 'dateOfBirth';
      const answer = createBlankAnswer(HpDebugFlags.UnitTests);
      const answerValue = uuid();
      answer.customer = answerValue;
      const question: Partial<HpClientQuestion> = {
        questionId,
        name
      };
      const state: Partial<HpClientQuestionSetState> = {
        questions: {
          [questionId]: question as HpClientQuestion
        },
        answers: {
          [questionId]: answer as HpClientAnswer
        }
      };
      const self = createPrerequsiteThisReference(state);
      loadQuestionIdCache({
        items: state.questions as HpClientQuestionMap,
        onlyIfEmpty: false
      });

      // act
      expect(self.getAnswerValue(questionId)).toBe(answerValue);
      expect(self.getAnswerValue({ questionId })).toBe(answerValue);
      expect(self.getAnswerValue(name)).toBe(answerValue);
      expect(self.getAnswerValue({ questionId: name })).toBe(answerValue);
    });

    it('returns null when questions do not exist', () => {
      // arrange
      const state: Partial<HpClientQuestionSetState> = {
        questions: {},
        answers: {}
      };
      const self = createPrerequsiteThisReference(state);

      // act
      expect(self.getAnswerValue('not-a-sausage')).toBeNull();
    });

    it('returns null when no answer exists for a question', () => {
      // arrange
      const questionId = uuid();
      const name = 'dateOfBirth';
      const question: Partial<HpClientQuestion> = {
        questionId,
        name
      };
      const state: Partial<HpClientQuestionSetState> = {
        questions: {
          [questionId]: question as HpClientQuestion
        },
        answers: {}
      };
      const self = createPrerequsiteThisReference(state);

      // act
      expect(self.getAnswerValue(questionId)).toBeNull();
    });

    it('returns the group answer to a question when "questionId" and "groupNumber" are provided', () => {
      // arrange
      const questionId = uuid();
      const groupId = 'my-group';
      const name = 'dateOfBirth';
      const groupNumber = 7;
      const question: Partial<HpClientQuestion> = {
        questionId,
        name,
        groupId
      };
      const questionInGroup: Partial<HpClientQuestion> = {
        questionId: createControlId({
          questionId,
          groupNumber,
          options: {
            noPrefix: true
          }
        }),
        name,
        groupId
      };
      const answer = createBlankAnswer(HpDebugFlags.UnitTests);
      const answerValue = uuid();
      answer.customer = answerValue;
      const state: Partial<HpClientQuestionSetState> = {
        questions: {
          [question.questionId as string]: question as HpClientQuestion,
          [questionInGroup.questionId as string]: questionInGroup as HpClientQuestion
        },
        answers: {
          [questionInGroup.questionId as string]: answer
        }
      };
      const self = createPrerequsiteThisReference(state);
      loadQuestionIdCache({
        items: state.questions as HpClientQuestionMap,
        onlyIfEmpty: false
      });

      // act/assert
      expect(self.getAnswerValue({ questionId, groupNumber })).toBe(answerValue);
      expect(self.getAnswerValue({ questionId: name, groupNumber })).toBe(answerValue);
    });

    it('returns null when "questionId" and "groupNumber" are provided, but no question exists', () => {
      // arrange
      const questionId = uuid();
      const groupId = 'my-group';
      const name = 'dateOfBirth';
      const groupNumber = 7;
      const question: Partial<HpClientQuestion> = {
        questionId,
        name,
        groupId
      };

      const answer = createBlankAnswer(HpDebugFlags.UnitTests);
      const answerValue = uuid();
      answer.customer = answerValue;
      const state: Partial<HpClientQuestionSetState> = {
        questions: {
          [question.questionId as string]: question as HpClientQuestion
        },
        answers: {}
      };
      const self = createPrerequsiteThisReference(state);
      loadQuestionIdCache({
        items: state.questions as HpClientQuestionMap,
        onlyIfEmpty: false
      });

      // act/assert
      expect(self.getAnswerValue({ questionId, groupNumber })).toBeNull();
      expect(self.getAnswerValue({ questionId: name, groupNumber })).toBeNull();
    });
  });
});
