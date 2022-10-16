import { HpAnswerMap, HpQuestionSet } from '@avantia/questionset-model';
import { Container, CosmosClient, ItemResponse, QueryIterator, SqlParameter, SqlQuerySpec } from '@azure/cosmos';
import lodash from 'lodash';
import { v4 as uuid } from 'uuid';

export interface CosmosDbConfig {
  endpoint: string;
  key: string;
  databaseName: string;
  collectionName: string;
}

export interface CosmosDbTable<ModelT extends DbRecordModel & IndexT, IndexT> {
  readRecord(query: IndexT | SqlQuerySpec): Promise<ModelT | null>;
  readRecords(query: IndexT | SqlQuerySpec): Promise<ModelT[]>;
  deleteRecords(query: IndexT): Promise<string[]>;
  upsertRecord(model: ModelT): Promise<ModelT>;
}

export class CosmosDb {
  private readonly collection: Container;

  constructor({ endpoint, key, databaseName, collectionName }: CosmosDbConfig) {
    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseName);
    this.collection = database.container(collectionName);
  }

  public getTable<ModelT extends DbRecordModel & IndexT, IndexT>(
    virtualTable: DbVirtualTableTypes,
    getIndex: (model: ModelT) => IndexT
  ): CosmosDbTable<ModelT, IndexT> {
    const collection = this.collection;
    return {
      async readRecord(query: IndexT | SqlQuerySpec): Promise<ModelT> {
        return new Promise<ModelT>((resolve, reject) => {
          readRecords<ModelT, IndexT>(collection, query, virtualTable)
            .then(recs => {
              if (recs.length <= 1) {
                resolve(recs[0] || null);
              } else {
                reject(
                  `Expected to find exactly 1 record. Instead found ${recs.length} (${recs.map(r => r.id).join(', ')}).`
                );
              }
            })
            .catch(reject);
        });
      },

      async readRecords(query: IndexT | SqlQuerySpec): Promise<ModelT[]> {
        return await readRecords(collection, query, virtualTable);
      },

      async deleteRecords(query: IndexT): Promise<string[]> {
        return await deleteRecords(collection, query, virtualTable);
      },

      async upsertRecord(model: ModelT): Promise<ModelT> {
        return await upsertRecord(collection, virtualTable, model, getIndex);
      }
    };
  }
}

function createQuery<ModelT extends DbRecordModel>(
  query: Partial<ModelT>,
  virtualTable: DbVirtualTableTypes
): SqlQuerySpec {
  let queryText = '';
  let join = '';
  query.VirtualTable = virtualTable;
  const parameters: SqlParameter[] = [];
  lodash.keysIn(query).forEach(key => {
    queryText += `${join}c.${key} = @${key}`;
    parameters.push({ name: '@' + key, value: query[key] });
    join = ' AND ';
  });
  queryText = `SELECT * from c WHERE ${queryText}`;
  console.log(queryText);
  console.log(parameters);
  return { query: queryText, parameters };
}

async function readRecords<ModelT extends DbRecordModel & IndexT, IndexT>(
  collection: Container,
  query: IndexT | SqlQuerySpec,
  virtualTable: DbVirtualTableTypes
): Promise<ModelT[]> {
  const querySpec: SqlQuerySpec = (query as SqlQuerySpec).parameters
    ? (query as SqlQuerySpec)
    : createQuery(query as Partial<ModelT>, virtualTable);
  const queryIter: QueryIterator<ModelT> = collection.items.query(querySpec);
  const { resources } = await queryIter.fetchAll();
  return resources;
}

async function deleteRecords<ModelT extends DbRecordModel & IndexT, IndexT>(
  collection: Container,
  query: IndexT,
  virtualTable: DbVirtualTableTypes
): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    const keys = lodash.keysIn(query) as (keyof DbRecordModel)[];
    if (keys.length === 1 && keys[0] === 'id') {
      const id = query[keys[0]] as string;
      collection
        .item(id)
        .delete()
        .then(deleted => resolve([deleted.item.id]))
        .catch(reject);
    } else {
      readRecords(collection, query, virtualTable)
        .then(toDelete => {
          const promises: Promise<ItemResponse<ModelT>>[] = [];
          toDelete.forEach(({ id: deletedId }) => {
            promises.push(collection.item(deletedId as string).delete());
          });

          Promise.all(promises)
            .then(resps => {
              resolve(resps.map(p => p.item.id));
            })
            .catch(reject);
        })
        .catch(reject);
    }
  });
}

async function upsertRecord<ModelT extends DbRecordModel & IndexT, IndexT>(
  collection: Container,
  virtualTable: DbVirtualTableTypes,
  model: ModelT,
  getIndex: (model: ModelT) => IndexT
): Promise<ModelT> {
  if (!virtualTable || (model.VirtualTable !== virtualTable && !!model.VirtualTable)) {
    throw new Error(`The virtualTable must be provided and must match the model's VirtualTable property.`);
  }

  model.VirtualTable = virtualTable;
  model.Type = virtualTable + 'DbModel';
  model.SeedKey = model.SeedKey || uuid();
  model.LastModified = new Date().toISOString();

  return new Promise<string | null>((resolve, reject) => {
    if (!model.id) {
      readRecords<ModelT, IndexT>(collection, getIndex(model), virtualTable).then(rs => {
        if (rs.length <= 1) {
          resolve(rs[0] && rs[0].id ? rs[0].id : null);
        } else {
          reject(`Too many records (${rs.length}).`);
        }
      });
    } else {
      resolve(model.id);
    }
  }).then(id => {
    if (id) {
      model.id = id;
    }

    return new Promise<ModelT>((resolve, reject) => {
      collection.items
        .upsert(model)
        .then(resp => {
          resolve(resp.item as any);
        })
        .catch(reject);
    });
  });
}

export type DbVirtualTableTypes = 'QuestionSet' | 'QuestionSetAnswers';

export interface DbQuestionSetIndex {
  QuestionSetId: string;
}

export interface DbQuestionSetModel extends DbRecordModel, DbQuestionSetIndex {
  Data: HpQuestionSet;
}

export interface DbAnswersIndex {
  QuestionSetId: string;
  AnswersId: string;
}

export interface DbAnswersModel extends DbRecordModel, DbAnswersIndex {
  Answers: HpAnswerMap;
}

export interface DbRecordModel {
  id?: string | undefined;
  _etag?: string | undefined;
  Id: string;
  Type: string | undefined;
  VirtualTable: string;
  SeedKey: string | undefined;
  LastModified?: string | undefined;
}
