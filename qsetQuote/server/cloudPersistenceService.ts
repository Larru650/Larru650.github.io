import { copyAnswers, HpAnswerMap, HpQuestionSet } from '@avantia/questionset-model';
import fs from 'fs';
import lodash from 'lodash';
import {
  CosmosDb,
  CosmosDbTable,
  DbAnswersIndex,
  DbAnswersModel,
  DbQuestionSetIndex,
  DbQuestionSetModel
} from './cosmosDb';
import { HpAnswersResponse, HpQuestionSetResponse, PersistenceService } from './interfaces';

declare const __dirname: string;

export interface CloudPersistenceServiceOptions {
  databaseEndpoint: string;
  databaseKey: string;
  databaseName: string;
  collectionName: string;
}

export class CloudPersistenceService implements PersistenceService {
  private readonly cosmosDb: CosmosDb;
  private readonly questionSetTable: CosmosDbTable<DbQuestionSetModel, DbQuestionSetIndex>;
  private readonly answersTable: CosmosDbTable<DbAnswersModel, DbAnswersIndex>;

  constructor({ databaseEndpoint, databaseKey, databaseName, collectionName }: CloudPersistenceServiceOptions) {
    this.cosmosDb = new CosmosDb({
      endpoint: databaseEndpoint,
      key: databaseKey,
      databaseName,
      collectionName
    });
    this.questionSetTable = this.cosmosDb.getTable('QuestionSet', (qs) => {
      return {
        QuestionSetId: qs.QuestionSetId
      };
    });
    this.answersTable = this.cosmosDb.getTable('QuestionSetAnswers', (qs) => {
      return {
        QuestionSetId: qs.QuestionSetId,
        AnswersId: qs.AnswersId
      };
    });

    // this.deleteRemoteAndPushLocalQuestionSets();
  }

  public getQuestionSets(): Promise<HpQuestionSet[]> {
    return new Promise<HpQuestionSet[]>((resolve, reject) => {
      return this.questionSetTable
        .readRecords({} as DbQuestionSetIndex)
        .then((qs) => resolve(qs.map((q) => q.Data)))
        .catch(reject);
    });
  }

  public getQuestionSet(questionSetId: string): Promise<HpQuestionSetResponse> {
    return new Promise<HpQuestionSetResponse>((resolve, reject) => {
      return this.questionSetTable
        .readRecord({ QuestionSetId: questionSetId })
        .then((qs) => {
          if (qs) {
            const { Data: data, _etag: eTag = '' } = qs;
            resolve({ questionSetId: data.questionSetId, eTag, questionSet: data });
          } else {
            reject(`There is no question with ID ${questionSetId}.`);
          }
        })
        .catch(reject);
    });
  }

  public saveAnswers(questionSetId: string, answersId: string, answers: HpAnswerMap): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.answersTable
        .readRecord({ QuestionSetId: questionSetId, AnswersId: answersId })
        .then((answerResp) => {
          let model: Partial<DbAnswersModel> = {
            QuestionSetId: questionSetId,
            AnswersId: answersId,
            Answers: copyAnswers(answers) // use copyAnswers() to get rid of client junk (e.g. partials).
          };
          if (answerResp) {
            model = Object.assign({}, answerResp, model);
          }

          this.answersTable
            .upsertRecord(model as DbAnswersModel)
            .then(() => resolve())
            .catch(reject);
        })
        .catch(reject);
    });
  }

  public getAnswers(questionSetId: string, answersId: string): Promise<HpAnswersResponse> {
    return new Promise<HpAnswersResponse>((resolve, reject) => {
      this.questionSetTable
        .readRecord({ QuestionSetId: questionSetId })
        .then((questionSetResp) => {
          if (questionSetResp) {
            return this.answersTable
              .readRecord({ QuestionSetId: questionSetId, AnswersId: answersId })
              .then((answers) => {
                const { Data: questionSet, _etag } = questionSetResp;
                questionSet.answers = {}; // This shouldn't be populated.
                const res: HpAnswersResponse = {
                  answersId: answers ? answers.AnswersId : '',
                  questionSetId,
                  answers: answers ? answers.Answers : {},
                  questionSet,
                  eTag: lodash.trim(String(_etag), '"')
                };
                resolve(res);
              })
              .catch(reject);
          } else {
            reject(`There is no questionset with ID "${questionSetId}".`);
          }
        })
        .catch(reject);
    });
  }

  private deleteRemoteAndPushLocalQuestionSets(): void {
    this.questionSetTable
      .deleteRecords({} as DbQuestionSetIndex)
      .catch((err) => {
        console.error(`Failed to delete all records: ${err}`);
      })
      .then((deletedIds) => {
        console.log(`Deleted (${(deletedIds || []).join(', ')})`);
        const pathQs = __dirname + '/cannedResponses/questionSets';
        const questionSets = fs.readdirSync(pathQs);
        const promises = questionSets.map((fileQs) => {
          const qs = JSON.parse(String(fs.readFileSync(pathQs + '/' + fileQs))) as HpQuestionSet;
          qs.answers = {}; // don't save any answers
          return this.questionSetTable
            .upsertRecord({
              QuestionSetId: qs.questionSetId,
              Data: qs,
              Id: '',
              Type: undefined,
              VirtualTable: 'QuestionSet',
              SeedKey: undefined
            })
            .then(() => {
              console.log(`Upserted ${fileQs}`);
            })
            .catch((err) => {
              console.error(`Failed to upserted ${fileQs}: ${err}`);
            });
        });

        Promise.all(promises)
          .then((x) => {
            console.log(`Upserted ${x.length} question sets`);
          })
          .catch((err) => {
            console.error(err);
          });
      });
  }
}
