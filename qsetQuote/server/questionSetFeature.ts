import { HpAnswerMap, HpQuestionSet, MicroTimer } from '@avantia/questionset-model';
import { getDefaultTransformOptions, questionScriptOptimiser } from '@avantia/questionset-script-parser';
import { logDebug, logError, logInfo, logWarning } from '@avantia/server-base';
import { Request, Response } from 'express';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { createErrorHandler, setHeadersAndCookies } from './commonFunctions';
import { getConfig } from './configuration';
import { FeatureInputProps, HpAnswersResponse, PersistenceService } from './interfaces';
import { saveQuestionSet } from './nhiIntegration/saveQuestionSet';

declare const __dirname: string;

const cachePath = `${__dirname}/qs-cache/`;
const { developerModeEnabled } = getConfig();

export interface QuestionSetFeatureResponse {
  getAnswers(questionSetId: string, answersId: string): Promise<HpAnswersResponse>;
}

export function questionSetFeature({
  config,
  router,
  adfsPassport,
  persistenceService
}: FeatureInputProps): QuestionSetFeatureResponse {
  router.get(
    '/api/QuestionSet/List',
    adfsPassport.authenticate((req: Request, res: Response) => {
      persistenceService
        .getQuestionSets()
        .then((questionSets) => {
          const avantiaId = req.query.avantiaId as string;
          const answersId = setHeadersAndCookies(config, req, res, avantiaId);
          const answersPromises = questionSets.map((qset) => {
            const { questionSetId } = qset;
            return addAnswersToQuestionSet(answersId, questionSetId, persistenceService);
          });

          Promise.all(answersPromises)
            .then((answerRespList) => {
              res.status(200).send(answerRespList.map((answerResp) => answerResp.questionSet));
            })
            .catch(createErrorHandler(res, 'Failed to get answers for question sets'));
        })
        .catch(createErrorHandler(res, 'Failed to get question sets'));
    })
  );

  router.get(
    '/api/QuestionSet/:questionSetId',
    adfsPassport.authenticate((req: Request, res: Response) => {
      const { questionSetId } = req.params;
      const avantiaId = req.query.avantiaId as string;
      persistenceService
        .getQuestionSet(questionSetId)
        .then((questionSet) => {
          const answersId = setHeadersAndCookies(config, req, res, avantiaId);
          addAnswersToQuestionSet(answersId, questionSet.questionSetId, persistenceService)
            .then((answers) => {
              res.send(answers);
            })
            .catch(
              createErrorHandler(
                res,
                `Failed to get answers for question set (${JSON.stringify({ questionSetId, answersId })})`
              )
            );
        })
        .catch(createErrorHandler(res, `Failed to get question set '${questionSetId}'`));
    })
  );

  router.get(
    '/api/Answers/:questionSetId/:answersId',
    adfsPassport.authenticate((req: Request, res: Response) => {
      const { answersId, questionSetId } = req.params;
      persistenceService
        .getAnswers(questionSetId, answersId)
        .then((answerResp) => {
          addFunctionReferences(answerResp)
            .then((answers) => {
              res.send(answers);
            })
            .catch(
              createErrorHandler(
                res,
                `Failed to get answers for question set (${JSON.stringify({ questionSetId, answersId })})`
              )
            );
        })
        .catch(createErrorHandler(res, `Faoled to get question set '${questionSetId}'`));
    })
  );

  router.post(
    '/api/Answers/:questionSetId/:answersId',
    adfsPassport.authenticate((req: Request, res: Response) => {
      const { answersId, questionSetId } = req.params;
      const answers: HpAnswerMap = req.body;
      logDebug({ questionSetId, answersId, url: req.url });
      if (!answersId || answersId === 'undefined' || answersId === 'null') {
        createErrorHandler(res, 'Post answers')(`The answersId contains an unset value ("${answersId}")`);
      } else {
        persistenceService
          .saveAnswers(questionSetId, answersId, answers)
          .then(() => {
            res.status(200).send(answers);
          })
          .catch(createErrorHandler(res, `Failed to save answers (${JSON.stringify({ questionSetId, answersId })})`));
      }
    })
  );

  router.post(
    '/api/saveDetails',
    adfsPassport.authenticate((req: Request, res: Response) => {
      const timeTaken = new MicroTimer().start();
      const { questionSetId, answers } = req.body as { questionSetId: string; answers: HpAnswerMap };
      persistenceService
        .getQuestionSet(questionSetId)
        .then(({ questionSet, eTag }) => {
          questionSet.answers = answers;
          // TODO Don't optimise every time - use a cache.
          getOptimisedQuestionSet(questionSet, eTag)
            .then((qset) => {
              saveQuestionSet(qset, false)
                .then((quoteGuid) => {
                  res.send({ success: true, quoteGuid, timeTaken: timeTaken.elapsedTimeAsString() });
                })
                .catch(createErrorHandler(res, `Failed to save answers to NHI`));
            })
            .catch(createErrorHandler(res, `Failed to get optimised question set for '${questionSetId}'`));
        })
        .catch(createErrorHandler(res, `Failed to get question set '${questionSetId}'`));
    })
  );

  function getAnswers(questionSetId: string, answersId: string): Promise<HpAnswersResponse> {
    return addAnswersToQuestionSet(answersId, questionSetId, persistenceService);
  }

  return {
    getAnswers
  };
}

function addAnswersToQuestionSet(
  answersId: string,
  questionSetId: string,
  persistenceService: PersistenceService
): Promise<HpAnswersResponse> {
  return new Promise<HpAnswersResponse>((resolve, reject) => {
    if (!answersId) {
      reject('The answersId is required');
    } else {
      persistenceService
        .getAnswers(questionSetId, answersId)
        .then((answerResp) => {
          addFunctionReferences(answerResp)
            .then(resolve)
            .catch(reject);
        })
        .catch((err) => {
          const msg = `Failed to get answers (${JSON.stringify({ questionSetId, answersId })}): ${err}`;
          logError(msg);
          reject(msg);
        });
    }
  });
}

function addFunctionReferences(answerResp: HpAnswersResponse): Promise<HpAnswersResponse> {
  const { questionSet, eTag } = answerResp;
  const timer = new MicroTimer().start();
  return new Promise<HpAnswersResponse>((resolve, reject) => {
    getOptimisedQuestionSet(questionSet, eTag)
      .then((updatedQuestionSet) => {
        const res = { ...answerResp };
        res.questionSet = updatedQuestionSet;
        logInfo(
          `getOptimisedQuestionSet (${questionSet.questionSetId}, '${
            questionSet.friendlyName
          }'): time taken ${timer.elapsedTimeAsString()}`
        );
        resolve(res);
      })
      .catch((err) => {
        const msg = { message: 'Failed to add functionReferences', detail: err };
        logError(msg);
        reject(msg);
      });
  });
}

export function getOptimisedQuestionSet(questionSet: HpQuestionSet, eTag: string): Promise<HpQuestionSet> {
  const cacheFile = cachePath + `${questionSet.questionSetId}-${eTag}.json`;
  const cacheFileExists = existsSync(cacheFile);
  if (eTag && cacheFileExists) {
    const qs = JSON.parse(String(readFileSync(cacheFile))) as HpQuestionSet;
    logDebug(`Resolved optimised question set ${qs.questionSetId} using cache.`);
    return Promise.resolve(qs);
  }

  const { questions, sections } = questionSet;
  const compact = !developerModeEnabled; // js will be compact (minified)
  const useAnonymousFunctions = compact;
  const promise = questionScriptOptimiser({
    questions,
    sections,
    transformOptions: getDefaultTransformOptions({ compact }),
    options: {
      replaceScriptsWithFunctionRefs: true,
      useAnonymousFunctions
    }
  });

  if (!cacheFileExists) {
    promise.then(({ compiled }) => {
      if (compiled) {
        questionSet.functionReferences = compiled;
      }

      try {
        if (!existsSync(cachePath)) {
          mkdirSync(cachePath);
        }

        writeFileSync(cacheFile, JSON.stringify(questionSet));
        logDebug(`Wrote optimised question set ${questionSet.questionSetId} to cache: ${cacheFile}`);
      } catch (err) {
        logWarning(`Failed to cache optimised question set ${questionSet.questionSetId} to file: ${cacheFile}: ${err}`);
      }
    });
  }

  return new Promise<HpQuestionSet>((resolve, reject) => {
    promise
      .then(({ compiled }) => {
        if (compiled) {
          questionSet.functionReferences = compiled;
        }

        resolve(questionSet);
      })
      .catch(reject);
  });
}
