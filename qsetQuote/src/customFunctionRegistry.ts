import { SMap } from '@avantia/client-and-server-utilities';
import lodash from 'lodash';
import { ensureDefined } from './tools/utilities';

const registeredFunctions: SMap<SMap<Function>> = {};

export function registerCustomFunctions(questionSetId: string, funcs: SMap<Function>): void {
  if (!ensureDefined(questionSetId, 'questionSetId')) {
    throw new Error(`The 'questionSetId' argument must contain a value.`);
  }

  lodash.forOwn(funcs, (func, key) => {
    if (typeof func !== 'function') {
      throw new Error(`The value provided for ${key} is not a function.`);
    }

    if (!registeredFunctions[questionSetId]) {
      registeredFunctions[questionSetId] = {};
    }

    registeredFunctions[questionSetId][key] = func;
  });
}

export function getCustomFunction(questionSetId: string, name: string): Function {
  let qs = registeredFunctions[questionSetId];
  let func = qs ? qs[name] : null;
  if (!func) {
    qs = registeredFunctions['*'];
    func = qs ? qs[name] : null;
    if (!func) {
      throw new Error(`There is no function registered with name "${name}" for questionSet "${questionSetId}".`);
    }
  }

  return func;
}
