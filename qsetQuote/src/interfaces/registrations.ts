import { HpClientAnswerMap } from '../interfaces';

export interface HpNeedToLoadDataResult {
  loadData: boolean;
  answersId?: string;
  questionSetId?: string;
}

export interface HpCustomAnswersHandler {
  willRun: () => boolean;
  setCustomAnswers: (answers: HpClientAnswerMap) => HpClientAnswerMap;
}

export interface HpCustomHashLoadHandler {
  willHandleHash: (hash: string) => boolean;
  needToLoadData(
    hash: string,
    history: {
      push: (url: string) => void;
    }
  ): HpNeedToLoadDataResult;
}

export type HpCustomLoadHashAndAnswersHandler = HpCustomAnswersHandler & HpCustomHashLoadHandler;
