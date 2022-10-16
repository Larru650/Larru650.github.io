import { SMap, voidFunction } from '@avantia/client-and-server-utilities';
import {
  getCommonLookupRef,
  getFunctionName,
  getFunctionRef,
  HpDebugFlags,
  HpFuncRefResolverFunction,
  HpProcessQuestionDynamicPropertyProps,
  HpQuestionLookupItemMap,
  HpQuestionMap,
  isCommonLookupRef,
  isFunctionRef,
  logInfo,
  logWarn,
  questionsDynamicPropertyWalker
} from '@avantia/questionset-model';
import { getConfig } from '../config/configuration';
import { HpClientPrerequisiteThisReferenceClass } from '../tools/prerequisiteThisReference';
import { createEmptyDisplayState } from './initialState';

export interface QuestionScriptResolverProps {
  questions: HpQuestionMap;
  commonLookups: SMap<HpQuestionLookupItemMap>;
  funcRefResolver: HpFuncRefResolverFunction;
  debugFlag: HpDebugFlags;
}

const { optimisationEnabled, debugFlags } = getConfig();

export function questionScriptResolver({
  questions,
  commonLookups,
  funcRefResolver,
  debugFlag
}: QuestionScriptResolverProps): void {
  const debugOut = (debugFlag & debugFlags) > 0 ? output : voidFunction;
  const self = !optimisationEnabled
    ? undefined
    : new HpClientPrerequisiteThisReferenceClass({
        questions,
        answers: {},
        displayState: createEmptyDisplayState({ addBlankSection: false }),
        groupNumber: undefined,
        debugFlag
      });

  function resolveScriptReference<ParentT, GrandParentT>({
    expr,
    propertyName,
    index,
    parent
  }: HpProcessQuestionDynamicPropertyProps<ParentT, GrandParentT>): void {
    let func: Function | undefined;
    const exprType = typeof expr;
    if (exprType === 'string') {
      if (propertyName === 'helpText' || propertyName === 'infoText') {
        return;
      }
      if (isFunctionRef(expr)) {
        func = funcRefResolver(getFunctionRef(expr) as string);
      } else if (isCommonLookupRef(expr)) {
        const commonLookup = commonLookups[getCommonLookupRef(expr) as string];
        if (commonLookup) {
          func = (): HpQuestionLookupItemMap => commonLookup;
        }
      } else {
        throw new Error(`Unexpected expression (of type '${exprType}'): "${expr}"`);
      }
    } else if (exprType === 'function') {
      func = expr as any; // only happens when switching question set
    }

    if (func) {
      if (propertyName && index !== undefined) {
        debugOut(expr, parent[propertyName][index], func);
        parent[propertyName][index] = func;
      } else if (propertyName) {
        debugOut(expr, parent[propertyName], func);
        parent[propertyName] = func as any;
      } else if (index !== undefined) {
        debugOut(expr, parent[index], func);
        parent[index] = func;
      }

      if (
        optimisationEnabled &&
        (propertyName === 'minValueExpr' || propertyName === 'maxValueExpr' || propertyName === 'defaultExpr')
      ) {
        // These are the expression properties that should be safe to evaluate once and save the result.
        let propName = propertyName as string;
        propName = propName.substring(0, propName.length - 4);
        try {
          parent[propName] = (func as Function).call(self);
          delete parent[propertyName];
        } catch (ex) {
          logWarn(`The ${propertyName} expression could not be evaluated without context: ${ex}\n${func}`, debugFlag);
        }
      }
    } else if (typeof expr !== 'function') {
      throw new Error(`Unhandled expression "${expr}".`);
    }
  }

  questionsDynamicPropertyWalker(questions, resolveScriptReference as any);
}

// eslint-disable-next-line @typescript-eslint/ban-types
function output(expr: string, value: any, func: Function): void {
  logInfo(`"${expr}" -> "${value}" -> ${getFunctionName(func)}`, HpDebugFlags.PayloadMapper);
}
