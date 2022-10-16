import { HpClientCustomActionFunction, HpClientQuestionSetState } from '../interfaces';
import { createEmptyTestState } from './common.test';
import { invokeCustomScript } from './dynamicScripts';

describe('dynamicScripts', () => {
  describe('invokeCustomScript', () => {
    let state: HpClientQuestionSetState;
    beforeEach(() => (state = createEmptyTestState()));

    it('works for a simple ES script statement', () => {
      // arrange
      const qid = 'question-id';
      const event = 'change';
      let count = 0;
      const func: HpClientCustomActionFunction = ({ eventType, groupNumber, questionId, sourceQuestionId }) => {
        // assert
        expect(eventType).toBe(event);
        expect(groupNumber).toBeUndefined();
        expect(questionId).toBe(qid);
        expect(sourceQuestionId).toBe(qid);
        count++;
        return false;
      };

      // act

      invokeCustomScript(func, qid, event, state.questions, state.answers, state.displayState);

      // assert
      expect(count).toBe(1);
    });
  });
});
