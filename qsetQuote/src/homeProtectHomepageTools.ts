import { SMap } from '@avantia/client-and-server-utilities';
import cookies from 'js-cookie';
import { v4 as uuid } from 'uuid';
import { getConfig } from './config/configuration';
import { HpClientAnswer, HpCustomLoadHashAndAnswersHandler, HpNeedToLoadDataResult } from './interfaces';

type HashCoverType = '#buildings' | '#contents' | '#buildingsandcontents';
const coverTypes: HashCoverType[] = ['#contents', '#buildings', '#buildingsandcontents'];
const { answersKey, homeProtectHomepageEnabled } = getConfig();
const coverTypeMap = {
  buildingsandcontents: 'BC',
  buildings: 'B',
  contents: 'C'
};

const defaultQuestionSetId = '733bb11b-d17e-4fc5-9f6d-9ad3dbcf811b'; // TODO - get from config
const coverTypeAnswerId = '041fb9d0-3d1f-11ea-b675-ffaf1ec7b93a';

const willHandleHash = (hash: string): boolean => coverTypes.includes(hash as HashCoverType);

function needToLoadData(hash: string, history: { push: (url: string) => void }): HpNeedToLoadDataResult {
  cookies.set('coverType', hash.split('#')[1]);
  cookies.set('questionSetId', defaultQuestionSetId);
  const answersId = uuid();
  cookies.set(answersKey, answersId);
  history.push('/');
  return { loadData: false, questionSetId: defaultQuestionSetId, answersId };
}

function setCustomAnswers(answers: SMap<HpClientAnswer>): SMap<HpClientAnswer> {
  const coverType = cookies.get('coverType');
  if (!coverType) {
    return answers;
  }

  if (!answers[coverTypeAnswerId]) {
    answers[coverTypeAnswerId] = { customer: coverTypeMap[coverType], default: null };
    return answers;
  }

  answers[coverTypeAnswerId].customer = coverTypeMap[coverType];
  return answers;
}

export const homeProtectHomepageTools: HpCustomLoadHashAndAnswersHandler | undefined = homeProtectHomepageEnabled
  ? {
      willHandleHash,
      needToLoadData,
      setCustomAnswers,
      willRun: (): boolean => true
    }
  : undefined;
