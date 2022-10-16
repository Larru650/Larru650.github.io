import { HpAnswerValueTypes } from '@avantia/questionset-model';
import { createEmptyTestState, createQuestion } from './common.test';
import {
  answersAreSame,
  findMatchingKeys,
  formatPostCode,
  getAnswerValue,
  GetAnswerValueResponse,
  getQueryStringValue,
  runPromisesSerially,
  toControlValue
} from './utilities';

describe('utilities', () => {
  describe('getAnswerValue()', () => {
    it('gets customer value when only customer is populated', () => {
      const state = createEmptyTestState();
      const question = createQuestion({ state, name: 'name' });
      const expected: GetAnswerValueResponse = { answerValue: 'hello', answerSource: 'customer' };
      expect(getAnswerValue({ default: null, customer: 'hello', aggregator: null }, question, 'control')).toEqual(
        expected
      );
    });

    it('gets aggregator value when customer is not populated', () => {
      const state = createEmptyTestState();
      const question = createQuestion({ state, name: 'name' });
      const expected: GetAnswerValueResponse = { answerValue: 'agg', answerSource: 'aggregator' };
      expect(getAnswerValue({ default: 'def', customer: null, aggregator: 'agg' }, question, 'control')).toEqual(
        expected
      );
    });

    it('gets default value when all others are undefined', () => {
      const state = createEmptyTestState();
      const question = createQuestion({ state, name: 'name' });
      const expected: GetAnswerValueResponse = { answerValue: 'def', answerSource: 'default' };
      expect(getAnswerValue({ default: 'def', customer: null, aggregator: null }, question, 'control')).toEqual(
        expected
      );
    });

    it('gets "" value when all are undefined (and question.dataType is "string")', () => {
      const state = createEmptyTestState();
      const question = createQuestion({ state, name: 'name' });
      const expected: GetAnswerValueResponse = { answerValue: '', answerSource: 'unanswered' };
      expect(getAnswerValue({ default: null, customer: null, aggregator: null }, question, 'control')).toEqual(
        expected
      );
    });

    it('gets null value when all are null (and question.dataType is "boolean")', () => {
      const state = createEmptyTestState();
      const question = createQuestion({ state, name: 'name' });
      question.dataType = 'boolean';
      const expected: GetAnswerValueResponse = { answerValue: null, answerSource: 'unanswered' };
      expect(getAnswerValue({ default: null, customer: null, aggregator: null }, question, 'control')).toEqual(
        expected
      );
    });

    it('gets false/true value when customer is false/true (and question.dataType is "boolean")', () => {
      const state = createEmptyTestState();
      const question = createQuestion({ state, name: 'name' });
      question.dataType = 'boolean';
      for (const customer of [false, true]) {
        const expected: GetAnswerValueResponse = { answerValue: customer, answerSource: 'customer' };
        expect(getAnswerValue({ default: null, customer, aggregator: null }, question, 'control')).toEqual(expected);
      }
    });

    it('gets [] value when all are undefined (and question.dataType is "array")', () => {
      const state = createEmptyTestState();
      const question = createQuestion({ state, name: 'name' });
      question.dataType = 'array';
      const expected: GetAnswerValueResponse = { answerValue: [], answerSource: 'unanswered' };
      expect(getAnswerValue({ default: null, customer: null, aggregator: null }, question, 'control')).toEqual(
        expected
      );
    });

    it('returns "unanswered" for source when isDefaultImplicit is true and usedBy is "control"', () => {
      const state = createEmptyTestState();
      const question = createQuestion({ state, name: 'name', extras: { isDefaultImplicit: true } });
      question.dataType = 'string';
      const expected: GetAnswerValueResponse = { answerValue: '', answerSource: 'unanswered' };
      expect(getAnswerValue({ default: 'Bob', customer: null, aggregator: null }, question, 'control')).toEqual(
        expected
      );
    });

    it('returns "default" for source when implicit is true and usedBy is not "control"', () => {
      const state = createEmptyTestState();
      const question = createQuestion({ state, name: 'name', extras: { isDefaultImplicit: true } });
      question.dataType = 'string';
      const expected: GetAnswerValueResponse = { answerValue: 'Jack', answerSource: 'default' };
      expect(getAnswerValue({ default: 'Jack', customer: null, aggregator: null }, question, 'validation')).toEqual(
        expected
      );
    });
  });

  describe('getQueryStringValue', () => {
    it('returns expected values for present query parameters', () => {
      expect(getQueryStringValue('name', 'https://www.google.com/query?name=value')).toBe('value');
    });

    it('returns undefined for non-existent query parameters', () => {
      expect(getQueryStringValue('surname', 'https://www.google.com/query?name=value')).toBeUndefined();
    });
  });

  describe('toControlValue', () => {
    it('return "" when null is provided', () => {
      expect(toControlValue(null)).toBe('');
    });

    it('return "" when undefined is provided (even though undefined should never be provided)', () => {
      expect(toControlValue((undefined as unknown) as HpAnswerValueTypes)).toBe('');
    });

    it('returns "7" when 7 is provided', () => {
      expect(toControlValue(7)).toBe('7');
    });

    it('returns ["7"] when ["7"] is provided', () => {
      expect(toControlValue(['7'])).toEqual(['7']);
    });
  });

  describe('findMatchingKeys', () => {
    it('finds identical keys', () => {
      expect(findMatchingKeys(['name', { key: 'age', required: true }], { name: undefined, age: 35 })).toStrictEqual({
        name: { key: 'name', value: undefined },
        age: { key: 'age', value: 35 }
      });
    });

    it('finds suffixed keys', () => {
      expect(findMatchingKeys(['name'], { lastName: undefined })).toStrictEqual({
        name: { key: 'lastName', value: undefined }
      });
    });

    it('throws an exception if a matching key cannot be found (empty map)', () => {
      expect(() => findMatchingKeys(['name'], {})).toThrow(
        'Unable to find a matching key for "name" in provided keys, [].'
      );
    });

    it('throws an exception if a matching key cannot be found', () => {
      expect(() => findMatchingKeys(['name'], { dob: '1990', age: 12 })).toThrow(
        'Unable to find a matching key for "name" in provided keys, ["age", "dob"].'
      );
    });

    it('does not throw an exception if a matching key cannot be found but the key is not required.', () => {
      expect(findMatchingKeys([{ key: 'name', required: false }], { dob: '1990', age: 12 })).toStrictEqual({});
    });
  });

  describe('runPromisesSerially', () => {
    const isSuccess = (x: boolean): boolean => x !== false;
    it('executes a single promise in an array sucessfully.', (done) => {
      const p = (): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
          resolve(true);
        });
      };

      runPromisesSerially([p], isSuccess).then((res) => {
        expect(res).toBe(1);
        done();
      });
    });

    it('executes two promises in an array sucessfully.', (done) => {
      const p1 = (): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
          resolve(true);
        });
      };

      const p2 = (): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
          resolve(true);
        });
      };

      runPromisesSerially([p1, p2], isSuccess).then((res) => {
        expect(res).toBe(2);
        done();
      });
    });

    it('executes 5 promises in an array sucessfully.', (done) => {
      const promises = [1, 2, 3, 4, 5].map(() => {
        const p = (): Promise<boolean> => {
          return new Promise<boolean>((resolve) => {
            resolve(true);
          });
        };
        return p;
      });

      runPromisesSerially(promises, isSuccess).then((res) => {
        expect(res).toBe(promises.length);
        done();
      });
    });

    it('executes two promises in an array sucessfully (third not executed because 2nd returns false).', (done) => {
      const p1 = (): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
          resolve(true);
        });
      };

      const p2 = (): Promise<boolean> => {
        return new Promise<boolean>((resolve) => {
          resolve(false);
        });
      };

      const p3 = (): Promise<boolean> => {
        return new Promise<boolean>((_, reject) => {
          reject('This should not run');
        });
      };

      runPromisesSerially([p1, p2, p3], isSuccess).then((res) => {
        expect(res).toBe(2);
        done();
      });
    });

    it('executes no promises in an array sucessfully.', (done) => {
      runPromisesSerially([], isSuccess).then((res) => {
        expect(res).toBe(0);
        done();
      });
    });

    it('executes two numeric promises in an array sucessfully.', (done) => {
      const p1 = (): Promise<number> => {
        return new Promise<number>((resolve) => {
          resolve(12);
        });
      };

      const p2 = (): Promise<number> => {
        return new Promise<number>((resolve) => {
          resolve(9);
        });
      };

      let sum = 0;
      runPromisesSerially([p1, p2], (x) => {
        sum += x;
        return true;
      }).then((res) => {
        expect(res).toBe(2);
        expect(sum).toBe(21);
        done();
      });
    });
  });

  describe('answersAreSame', () => {
    it('works for booleans', () => {
      expect(answersAreSame('boolean', true, true)).toBeTruthy();
    });

    it('works for strings', () => {
      expect(answersAreSame('string', 'blah', 'blah')).toBeTruthy();
    });

    it('works for arrays', () => {
      expect(answersAreSame('array', ['a', 'b', 'c'], ['a', 'b', 'c'])).toBeTruthy();
    });

    it('fails for booleans that are different', () => {
      expect(answersAreSame('boolean', true, false)).toBeFalsy();
    });

    it('fails for strings that are different', () => {
      expect(answersAreSame('string', 'blah', 'boo')).toBeFalsy();
    });

    it('fails for arrays that are different', () => {
      expect(answersAreSame('array', ['a', 'b', 'c'], ['a', 'b', 'd'])).toBeFalsy();
    });
  });

  describe('formatPostCode', () => {
    it('adds spaces for all postcode formats', () => {
      const expected = ['EC1A 1BB', 'W1A 0AX', 'M1 1AE', 'B33 8TH', 'CR2 6XH', 'DN55 1PT'];
      const postcodes = expected.map((pc) => pc.replace(' ', ''));
      for (let i = 0; i < expected.length; i++) {
        expect(formatPostCode(postcodes[i])).toBe(expected[i]);
      }
    });

    it('converts "sw178mx" to "SW178MX"', () => {
      expect(formatPostCode('sw178mx')).toBe('SW17 8MX');
    });

    it('converts "ec1A1bb" to "EC1A 1BB"', () => {
      expect(formatPostCode('ec1A1bb')).toBe('EC1A 1BB');
    });

    it('converts "b338th" to "B33 8TH"', () => {
      expect(formatPostCode('b338th')).toBe('B33 8TH');
    });

    it('converts " b8th " to "B8TH"', () => {
      expect(formatPostCode(' b8th ')).toBe(' B8TH ');
    });

    it('converts " sw178mx " to "SW178MX"', () => {
      expect(formatPostCode(' sw178mx ')).toBe('SW17 8MX');
    });

    it('converts "ec1A " to "EC1A "', () => {
      expect(formatPostCode('ec1A ')).toBe('EC1A ');
    });

    it('does nothing to "SW178"', () => {
      expect(formatPostCode('SW178')).toBe('SW178');
    });

    it('does nothing to "SW178G"', () => {
      expect(formatPostCode('SW178G')).toBe('SW178G');
    });

    it('does nothing to "SW17 8G"', () => {
      expect(formatPostCode('SW17 8G')).toBe('SW17 8G');
    });
  });
});
