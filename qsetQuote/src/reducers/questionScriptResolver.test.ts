import { voidFunction } from '@avantia/client-and-server-utilities';
import {
  createFunctionRef,
  HpDebugFlags,
  HpFuncRefResolverFunction,
  HpQuestion,
  HpQuestionData,
  HpQuestionMap,
  setDebugFlags
} from '@avantia/questionset-model';
import { questionScriptResolver } from './questionScriptResolver';

describe('questionScriptResolver', () => {
  it('processes function references correctly', () => {
    // arrange
    let count = 0;
    const questionId = 'q1';
    const condition = createFunctionRef(3);
    const prerequisites = [condition];
    const questionData: Partial<HpQuestionData> = {
      dependentAnswers: {
        q2: [
          {
            condition: createFunctionRef(9),
            answer: null,
            answerExpr: createFunctionRef(12)
          }
        ]
      }
    };
    const question: Partial<HpQuestion> = {
      questionId,
      prerequisites,
      data: questionData as HpQuestionData
    };
    const questions: HpQuestionMap = {
      [questionId]: question as HpQuestion
    };
    const funcRefResolver: HpFuncRefResolverFunction = () => {
      count++;
      return voidFunction;
    };

    // act
    setDebugFlags(HpDebugFlags.None);
    questionScriptResolver({
      questions,
      commonLookups: {},
      funcRefResolver,
      debugFlag: HpDebugFlags.UnitTests
    });

    // assert
    expect(count).toBe(3); // prerequisite condition + dependent answer condition + dependent answer answerExpr
  });
});
