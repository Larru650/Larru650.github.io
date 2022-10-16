import { SMap } from '@avantia/client-and-server-utilities';
import { HpValidationResult } from '@avantia/form-validation';
import { HpQuestionSet, HpQuestionSetCommon } from '@avantia/questionset-model';
import { HpClientQuestion } from '.';
import { HpQuestionDisplayState } from './displayStateTypes';
import { HpClientAnswer } from './questionTypesClient';

export interface HpClientAvailableQuestionSet {
  questionSetId: string;
  friendlyName: string;
  timestamp: string;
  questionSet?: HpQuestionSet;
}

export interface HpClientQuestionSetState extends HpQuestionSetCommon<HpClientQuestion, HpClientAnswer> {
  answersId: string;
  displayState: HpQuestionDisplayState;
  validationResult: HpValidationResult;
  answers: SMap<HpClientAnswer>;
}

// For handling drop-down menu of question sets
export interface HpAvailableQuestionSets {
  selected?: string;
  items: HpClientAvailableQuestionSet[];
}
