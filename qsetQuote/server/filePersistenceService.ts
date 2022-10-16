import { parseJson, SMap } from '@avantia/client-and-server-utilities';
import { HpAnswerMap, HpQuestionSet } from '@avantia/questionset-model';
import { logDebug, logError, logWarning } from '@avantia/server-base';
import fs from 'fs';
import path from 'path';
import { HpAnswersResponse, HpQuestionSetResponse, PersistenceService } from './interfaces';

declare const __dirname: string;

export class FilePersistenceService implements PersistenceService {
  constructor(private readonly staticPath: string) {
    // empty
  }

  public getQuestionSets(): Promise<HpQuestionSet[]> {
    return new Promise<HpQuestionSet[]>((resolve, reject) => {
      const { content: json, message, source } = this.readCannedResponse('questionSets', 'directory', true);
      if (json) {
        resolve(
          parseJson<HpQuestionSet[]>({ json, desc: 'HpQuestionSet[]' })
        );
      } else {
        reject({ message: `Expected to find questionSets canned response. Found nothing.`, detail: message, source });
      }
    });
  }

  public getQuestionSet(questionSetId: string): Promise<HpQuestionSetResponse> {
    return new Promise<HpQuestionSetResponse>((resolve, reject) => {
      this.getQuestionSets()
        .then((questionSets) => {
          const qset = questionSets.filter((qs) => qs.questionSetId === questionSetId);
          if (qset.length === 1) {
            const questionSet = qset[0];
            resolve({ questionSetId: questionSet.questionSetId, eTag: '', questionSet });
          } else {
            logWarning({ questionSetId, message: 'Not found' });
            reject(`Not found`);
          }
        })
        .catch(reject);
    });
  }

  public saveAnswers(questionSetId: string, answersId: string, answers: HpAnswerMap): Promise<void> {
    return new Promise<void>((resolve) => {
      const cannedName = this.toCannedName(answersId);
      const { content: jsonData } = this.readCannedResponse(cannedName, 'file', false);
      const answersFile = (jsonData ? JSON.parse(jsonData) : {}) as AnswerFile;
      answersFile[questionSetId] = answers;
      this.writeCannedResponse(cannedName, JSON.stringify(answersFile, null, 2));
      resolve();
    });
  }

  public getAnswers(questionSetId: string, answersId: string): Promise<HpAnswersResponse> {
    return new Promise<HpAnswersResponse>((resolve, reject) => {
      const cannedName = this.toCannedName(answersId);
      const { content: jsonData } = this.readCannedResponse(cannedName, 'file', false);
      const answersFile = (jsonData ? JSON.parse(jsonData) : {}) as AnswerFile;
      const answers: HpAnswerMap = answersFile[questionSetId] || {};
      this.getQuestionSet(questionSetId)
        .then(({ questionSet, eTag }) => {
          const resp: HpAnswersResponse = {
            questionSetId,
            eTag: '',
            answersId,
            questionSet,
            answers
          };
          resolve(resp);
        })
        .catch(reject);
    });
  }

  private readCannedResponse(name: string, type: 'file' | 'directory', isRequired: boolean): CannedResponse {
    if (type === 'directory') {
      const dirName = this.getCannedName(name, 'directory');
      const files = fs.readdirSync(dirName);
      const jsonRaw: HpQuestionSet[] = files
        .filter((f) => f.endsWith('.json'))
        .map((f) => {
          const content = String(fs.readFileSync(path.join(dirName, f)));
          try {
            return JSON.parse(content);
          } catch (ex) {
            logError(`The file '${f}' could not be parsed as JSON: ${ex}`);
            return undefined;
          }
        })
        .filter((j) => !!j);
      return { source: dirName, content: JSON.stringify(jsonRaw) };
    } else {
      const fileName = this.getCannedName(name, 'file');
      let message: string;
      if (fs.existsSync(fileName)) {
        logDebug({ cannedResponse: true, source: fileName });
        return { source: fileName, content: fs.readFileSync(fileName, 'utf-8') };
      } else {
        message = `Expected to find "${fileName}" canned response. Found nothing.`;
        if (isRequired) {
          throw new Error(message);
        } else {
          logWarning(message);
        }
      }

      return { source: fileName, message };
    }
  }

  private getCannedName(name: string, type: 'file' | 'directory'): string {
    // a quick bodge to get canned responses working in Docker
    // we need not go crazy here, because this is very temporary.
    let basePath = '/app/server/cannedResponses';
    if (!fs.existsSync(basePath)) {
      basePath = this.staticPath ? '.' : `${__dirname}/cannedResponses`;
    }

    return `${basePath}/${name}${type === 'file' ? '.json' : ''}`;
  }

  private toCannedName(answerId: string): string {
    return `answer-set_${answerId}`;
  }

  private writeCannedResponse(name: string, content: string): void {
    return fs.writeFileSync(this.getCannedName(name, 'file'), content, 'utf-8');
  }
}

interface CannedResponse {
  source: string;
  content?: string;
  message?: string;
}

type AnswerFile = SMap<HpAnswerMap>;
