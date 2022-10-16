import { AdfsFacade } from '@avantia/adfs-facade';
import { HpAnswerMap, HpQuestionSet } from '@avantia/questionset-model';
import { Router } from 'express';
import { ServerConfiguration } from './configuration';

export interface PersistenceService {
  getQuestionSets: () => Promise<HpQuestionSet[]>;
  getQuestionSet: (questionSetId: string) => Promise<HpQuestionSetResponse>;
  saveAnswers: (questionSetId: string, answersId: string, answers: HpAnswerMap) => Promise<void>;
  getAnswers: (questionSetId: string, answersId: string) => Promise<HpAnswersResponse>;
}

export interface HpAnswerData {
  questionSetId: string;
  answers: HpAnswerMap;
}

export interface HpQuestionSetResponse {
  questionSetId: string;
  eTag: string;
  questionSet: HpQuestionSet;
}

export interface HpAnswersResponse extends HpAnswerData {
  answersId: string;
  eTag: string;
  questionSet: HpQuestionSet;
}

export interface FeatureInputProps {
  config: ServerConfiguration;
  router: Router;
  adfsPassport: AdfsFacade;
  adfsCallbackPath: string;
  persistenceService: PersistenceService;
}

export interface ServerSetupApi<ConfigT extends ServerConfiguration> {
  getConfig(): ConfigT;
  createPersistenceService(): PersistenceService;
}

export type FeatureFunction = ({ config, router, adfsPassport, persistenceService }: FeatureInputProps) => unknown;
