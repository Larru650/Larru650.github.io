import { voidFunction } from '@avantia/client-and-server-utilities';
import {
  getFunctionName,
  getFunctionRef,
  HpDebugFlags,
  HpFuncRefResolverFunction,
  HpProcessSectionDynamicPropertyProps,
  HpSectionMap,
  isFunctionRef,
  logInfo,
  sectionsDynamicPropertyWalker
} from '@avantia/questionset-model';

export interface SectionScriptResolverProps {
  sections: HpSectionMap;
  funcRefResolver: HpFuncRefResolverFunction;
  debugMode: boolean;
}

export function sectionScriptResolver({ sections, funcRefResolver, debugMode }: SectionScriptResolverProps): void {
  function resolveScriptReference<ParentT, GrandParentT>({
    expr,
    propertyName,
    index,
    parent
  }: HpProcessSectionDynamicPropertyProps<ParentT, GrandParentT>): void {
    if (isFunctionRef(expr)) {
      const func = funcRefResolver(getFunctionRef(expr) as string);
      const debugOut = debugMode ? output : voidFunction;
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
    } else if (typeof expr !== 'function') {
      throw new Error(`Unhandled expression "${expr}".`);
    }
  }

  sectionsDynamicPropertyWalker(sections, resolveScriptReference);
}

// eslint-disable-next-line @typescript-eslint/ban-types
function output(expr: string, value: any, func: Function): void {
  logInfo(`"${expr}" -> "${value}" -> ${getFunctionName(func)}`, HpDebugFlags.PayloadMapper);
}
