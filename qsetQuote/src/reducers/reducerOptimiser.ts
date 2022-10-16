import { SMap } from '@avantia/client-and-server-utilities';
import { recordElapsedTime } from '@avantia/questionset-model';
import lodash from 'lodash';
import { getConfig } from '../config/configuration';
import { HpClientQuestionSetState, HpQuestionIdGroup, HpQuestionIdNode } from '../interfaces';
import { applyChanges } from './reducerLibrary';

const optimisationEnabled = getConfig().optimisationEnabled;
const swappedOut: SMap<SMap<unknown>> = {};

export function swapOutQuestions(state: HpClientQuestionSetState): HpClientQuestionSetState {
  if (!optimisationEnabled) {
    return state;
  }

  return recordElapsedTime('swapOutQuestions', () => {
    const { questions: origQuestions, displayState } = state;
    const keysInUse: SMap<true> = {};

    function addKey(key: string): void {
      keysInUse[key] = true;
    }

    displayState.visibleQuestionIds.forEach((vid: HpQuestionIdNode) => {
      const qs = (vid as HpQuestionIdGroup).questions;
      if (qs) {
        qs.forEach(q => {
          addKey(q);
        });
      } else {
        addKey(vid as string);
      }
    });

    displayState.allOrderedQuestionIds.forEach(id => {
      if (origQuestions[id].groupId) {
        addKey(id);
      }
    });

    const { map: questions } = swapOut('questions', origQuestions, keysInUse);
    return applyChanges(state, { questions });
  });
}

export function swapInQuestions(state: HpClientQuestionSetState): HpClientQuestionSetState {
  if (!optimisationEnabled) {
    return state;
  }

  return recordElapsedTime('swapInQuestions', () => {
    const { questions: origQuestions } = state;
    const { map: questions, origCount: origQuestionCount, newCount: newQuestionCount } = swapIn(
      'questions',
      origQuestions
    );

    if (origQuestionCount + newQuestionCount === 0) {
      return state;
    }

    return applyChanges(state, { questions });
  });
}

export function swapOut<ItemT>(name: string, map: SMap<ItemT>, keysInUse: SMap<true>): SwapResult<ItemT> {
  const swapOut: SMap<ItemT> = {};
  const keep: SMap<ItemT> = {};
  let origCount = 0;
  let newCount = 0;

  for (const key in map) {
    origCount++;
    if (!keysInUse[key]) {
      swapOut[key] = map[key];
    } else {
      keep[key] = map[key];
      newCount++;
    }
  }

  swappedOut[name] = swapOut;
  return { map: keep, origCount, newCount };
}

export interface SwapResult<ItemT> {
  map: SMap<ItemT>;
  origCount: number;
  newCount: number;
}

export function swapIn<ItemT>(name: string, map: SMap<ItemT>): SwapResult<ItemT> {
  const toSwapIn = swappedOut[name] as SMap<ItemT> | undefined;
  let origCount = 0;
  let newCount = 0;

  if (!toSwapIn) {
    return { map, origCount: lodash.keys(map).length, newCount };
  }

  const all: SMap<ItemT> = {};

  for (const key in map) {
    all[key] = map[key];
    origCount++;
  }

  newCount = origCount;

  if (toSwapIn) {
    for (const key in toSwapIn) {
      all[key] = toSwapIn[key];
      newCount++;
    }
  }

  return { map: all, origCount, newCount };
}
