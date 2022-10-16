import { HpAnswerMap, HpQuestionSet } from '@avantia/questionset-model';
import { registerCustomFunctions } from '../../src/customFunctionRegistry';
import { compiledQuestionSet } from './data/compiledQuestionSet';
import { mockAnswers } from './data/mockAnswers';
import { mockAnswers as mockAnswersMinimal } from './data/mockAnswersMinimal';

export function createMockQuestionSet(type: 'full' | 'minimal'): HpQuestionSet {
  const qset = {
    ...compiledQuestionSet,
    answers: ((type === 'minimal' ? mockAnswersMinimal : mockAnswers) as unknown) as HpAnswerMap
  } as HpQuestionSet;
  const functionReferences = eval('(' + qset.functionReferences + ')');
  registerCustomFunctions(qset.questionSetId, functionReferences);
  return qset;
}
