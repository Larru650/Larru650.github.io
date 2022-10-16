import { HpFuncRefResolverFunction } from '@avantia/questionset-model';
import { convertQuestionPrerequisites } from '@avantia/questionset-script-parser';
import { HpClientConditionFunction } from '../interfaces';
import { createAnswer, createEmptyTestState, createQuestion } from './common.test';
import { questionPrerequisitesHaveBeenMet } from './questionPrerequisites';

// There is not, and there should not be, a client dependency upon @avantia/questionset-script-parser.
// This test straddles parts of the codebase that now reside in different packages and therefore has a dependency on @avantia/questionset-script-parser.
// For now, this test needs to stay put, because there is no easy way to maintain test coverage of the things it tests.
describe('questionPrerequisites', () => {
  const funcRefResolver: HpFuncRefResolverFunction = () => (): null => null;
  describe('createPrerequisite', () => {
    it('works for prerequisite created from an ES string', () => {
      // arrange
      const state = createEmptyTestState();
      const surname = createQuestion({ state, name: 'surname' });
      const firstName = createQuestion({ state, name: 'firstName' });
      const answer = createAnswer(state, surname, 'Heath');

      // act/assert
      firstName.prerequisites = convertQuestionPrerequisites(
        firstName.questionId,
        firstName.name,
        [`return !!this.getAnswer('${surname.questionId}').customer`],
        state.questions as any,
        funcRefResolver
      ) as HpClientConditionFunction[];

      expect(questionPrerequisitesHaveBeenMet(firstName.questionId, 'click', state)).toBe(true);

      // arrange
      answer.customer = '';

      // act/assert
      expect(questionPrerequisitesHaveBeenMet(firstName.questionId, 'click', state)).toBe(false);
    });

    it('works for prerequisite created from a simple fluent condition', () => {
      // arrange
      const state = createEmptyTestState();
      const surname = createQuestion({ state, name: 'surname' });
      const firstName = createQuestion({ state, name: 'firstName' });
      const answer = createAnswer(state, surname, 'Heath');

      // act/assert
      firstName.prerequisites = convertQuestionPrerequisites(
        firstName.questionId,
        firstName.name,
        ['{{surname}} is not ""'],
        state.questions as any,
        funcRefResolver
      ) as HpClientConditionFunction[];
      expect(questionPrerequisitesHaveBeenMet(firstName.questionId, 'click', state)).toBe(true);

      // arrange
      answer.customer = '';

      //act/assert
      expect(questionPrerequisitesHaveBeenMet(firstName.questionId, 'click', state)).toBe(false);
    });

    it('works for prerequisite created from a fluent condition with logical "and" and "or" operators', () => {
      // arrange
      const state = createEmptyTestState();
      const surname = createQuestion({ state, name: 'surname' });
      const firstName = createQuestion({ state, name: 'firstName' });
      const answer = createAnswer(state, surname, 'Heath');
      const firstNameId = firstName.questionId;

      // act/assert
      firstName.prerequisites = convertQuestionPrerequisites(
        firstNameId,
        firstName.name,
        ['{{surname}} is not "Johnson" and {{surname}} is "Heath" or {{surname}} is "Jackson"'],
        state.questions as any,
        funcRefResolver
      ) as HpClientConditionFunction[];
      expect(questionPrerequisitesHaveBeenMet(firstNameId, 'click', state)).toBe(true);

      // arrange/act/assert
      answer.customer = 'Jackson';
      expect(questionPrerequisitesHaveBeenMet(firstNameId, 'click', state)).toBe(true);

      // arrange/act/assert
      answer.customer = 'Jonhson';
      expect(questionPrerequisitesHaveBeenMet(firstNameId, 'click', state)).toBe(false);

      if (firstName.prerequisites) {
        expect(`${firstName.prerequisites[0]}`).toContain(
          `return this.getAnswerValue("${surname.questionId}") !== "Johnson" && this.getAnswerValue("${surname.questionId}") === "Heath" || this.getAnswerValue("${surname.questionId}") === "Jackson"`
        );
      } else {
        fail('There were no prerequisites');
      }
    });

    it('works for prerequisite created from a fluent list condition', () => {
      // arrange
      const state = createEmptyTestState();
      const surname = createQuestion({ state, name: 'surname' });
      const answer = createAnswer(state, surname, '');
      const surnameId = surname.questionId;

      // act/assert
      surname.prerequisites = convertQuestionPrerequisites(
        surnameId,
        surname.name,
        ['{{surname}} is in [Heath, Jackson]'],
        state.questions as any,
        funcRefResolver
      ) as HpClientConditionFunction[];

      answer.customer = 'Heath';
      expect(questionPrerequisitesHaveBeenMet(surnameId, 'click', state)).toBe(true);

      // arrange/act/assert
      answer.customer = 'Johnson';
      expect(questionPrerequisitesHaveBeenMet(surnameId, 'click', state)).toBe(false);

      if (surname.prerequisites) {
        console.log(`${surname.prerequisites[0]}`);
        expect(`${surname.prerequisites[0]}`).toContain(
          `return ["Heath", "Jackson"].indexOf(this.getAnswerValue("${surnameId}")) >= 0;`
        );
      } else {
        fail('There should be prerequisites');
      }
    });

    it('works for prerequisite created from a fluent list exclusion condition', () => {
      // arrange
      const state = createEmptyTestState();
      const surname = createQuestion({ state, name: 'surname' });
      const answer = createAnswer(state, surname, '');
      const surnameId = surname.questionId;

      // act/assert
      surname.prerequisites = convertQuestionPrerequisites(
        surnameId,
        surname.name,
        ['{{surname}} is not in [Heath, Jackson]'],
        state.questions as any,
        funcRefResolver
      ) as HpClientConditionFunction[];

      answer.customer = 'Heath';
      expect(questionPrerequisitesHaveBeenMet(surnameId, 'click', state)).toBe(false);

      // arrange/act/assert
      answer.customer = 'Johnson';
      expect(questionPrerequisitesHaveBeenMet(surnameId, 'click', state)).toBe(true);

      if (surname.prerequisites) {
        console.log(`${surname.prerequisites[0]}`);
        expect(`${surname.prerequisites[0]}`).toContain(
          `return ["Heath", "Jackson"].indexOf(this.getAnswerValue("${surnameId}")) < 0;`
        );
      } else {
        fail('There should be prerequisites');
      }
    });

    it('correctly types boolean values that are unquoted', () => {
      // arrange
      const state = createEmptyTestState();
      const needsDetail = createQuestion({ state, name: 'needsDetail' });
      createAnswer(state, needsDetail, 'Heath');
      const questionId = needsDetail.questionId;

      // act/assert
      needsDetail.prerequisites = convertQuestionPrerequisites(
        questionId,
        needsDetail.name,
        ['{{needsDetail}} is true'],
        state.questions as any,
        funcRefResolver
      ) as HpClientConditionFunction[];

      expect(`${needsDetail.prerequisites[0]}`).toContain(`return this.getAnswerValue("${questionId}") === true`);
    });

    it('correctly types numeric values that are unquoted', () => {
      // arrangew
      const state = createEmptyTestState();
      const numberOfClaims = createQuestion({ state, name: 'numberOfClaims' });
      createAnswer(state, numberOfClaims, 'Heath');
      const questionId = numberOfClaims.questionId;

      // act/assert
      numberOfClaims.prerequisites = convertQuestionPrerequisites(
        questionId,
        numberOfClaims.name,
        ['{{numberOfClaims}} >= 9'],
        state.questions as any,
        funcRefResolver
      ) as HpClientConditionFunction[];

      expect(`${numberOfClaims.prerequisites[0]}`).toContain(`return this.getAnswerValue("${questionId}") >= 9`);
    });

    it('correctly processes {{today}} token', () => {
      // arrange
      const state = createEmptyTestState();
      const startDate = createQuestion({ state, name: 'startDate' });
      const questionId = startDate.questionId;

      // act/assert
      startDate.prerequisites = convertQuestionPrerequisites(
        questionId,
        startDate.name,
        ['{{answer}} >= "{{today}}"'],
        state.questions as any,
        funcRefResolver
      ) as HpClientConditionFunction[];

      expect(`${startDate.prerequisites[0]}`).toContain(`return this.getAnswerValue("${questionId}") >= this.today`);
    });

    it('correctly processes {{today + 3 days}} token', () => {
      // arrange
      const state = createEmptyTestState();
      const startDate = createQuestion({ state, name: 'startDate' });
      const questionId = startDate.questionId;

      // act/assert
      startDate.prerequisites = convertQuestionPrerequisites(
        questionId,
        startDate.name,
        ['{{answer}} >= "{{today + 3 days}}"'],
        state.questions as any,
        funcRefResolver
      ) as HpClientConditionFunction[];

      expect(`${startDate.prerequisites[0]}`).toContain(
        `return this.getAnswerValue("${questionId}") >= this.getTodayPlus(3, 'day')`
      );
    });

    it('correctly processes {{today - 3 days}} token', () => {
      // arrange
      const state = createEmptyTestState();
      const startDate = createQuestion({ state, name: 'startDate' });
      const questionId = startDate.questionId;

      // act/assert
      startDate.prerequisites = convertQuestionPrerequisites(
        questionId,
        startDate.name,
        ['{{answer}} >= "{{today - 3 days}}"'],
        state.questions as any,
        funcRefResolver
      ) as HpClientConditionFunction[];

      expect(`${startDate.prerequisites[0]}`).toContain(
        `return this.getAnswerValue("${questionId}") >= this.getTodayPlus(-3, 'day')`
      );
    });

    it('correctly processes {{today - 27 years}} token', () => {
      // arrange
      const state = createEmptyTestState();
      const startDate = createQuestion({ state, name: 'startDate' });
      const questionId = startDate.questionId;

      // act/assert
      startDate.prerequisites = convertQuestionPrerequisites(
        questionId,
        startDate.name,
        ['{{answer}} >= "{{today - 27 years}}"'],
        state.questions as any,
        funcRefResolver
      ) as HpClientConditionFunction[];

      expect(`${startDate.prerequisites[0]}`).toContain(
        `return this.getAnswerValue("${questionId}") >= this.getTodayPlus(-27, 'year')`
      );
    });

    it('correctly processes invalid {{today - three days}} token', () => {
      // arrange
      const state = createEmptyTestState();
      const startDate = createQuestion({ state, name: 'startDate' });
      const questionId = startDate.questionId;

      // act/assert
      startDate.prerequisites = convertQuestionPrerequisites(
        questionId,
        startDate.name,
        ['{{answer}} >= "{{today - three days}}"'],
        state.questions as any,
        funcRefResolver
      ) as HpClientConditionFunction[];

      expect(`${startDate.prerequisites[0]}`).toContain(
        `return this.getAnswerValue("${questionId}") >= "[today - three days]"`
      );
    });

    it('fails with an Error when the ES script cannot be parsed', () => {
      // arrange
      const state = createEmptyTestState();
      const question = createQuestion({ state, name: 'firstName' });

      // act
      expect(() =>
        convertQuestionPrerequisites(
          question.questionId,
          question.name,
          ["@('_')@"],
          state.questions as any,
          funcRefResolver
        )
      ).toThrow(/The prerequisite for "firstName" \([a-f0-9-]+\) does not parse.\nSyntaxError: /);
    });

    it('fails with an Error when the fluent sentence cannot be parsed', () => {
      // arrange
      const state = createEmptyTestState();
      const question = createQuestion({ state, name: 'firstName' });

      // act
      expect(() =>
        convertQuestionPrerequisites(
          question.questionId,
          question.name,
          ['{{firstName}} aint so'],
          state.questions as any,
          funcRefResolver
        )
      ).toThrow(/^The fluent prerequisite does not parse/);
    });

    it('fails with an Error when the fluent sentence refers to a question that cannot be found.', () => {
      // arrange
      const state = createEmptyTestState();
      const question = createQuestion({ state, name: 'firstName' });

      // act
      expect(() =>
        convertQuestionPrerequisites(
          question.questionId,
          question.name,
          ['{{surname}} is true'],
          state.questions as any,
          funcRefResolver
        )
      ).toThrow('There is no mapping for question with name "surname" to any ID.');
    });
  });
});
