import { HpDebugFlags, logInfo } from '@avantia/questionset-model';
import $ from 'jquery';
import lodash from 'lodash';
import { HpScriptAction } from '../../interfaces';

export function InvokeScriptActionsWidget({ scriptActions }: { scriptActions: HpScriptAction[] }): null {
  if (!scriptActions || scriptActions.length === 0) {
    return null;
  }

  const win = window as any;
  win.invokedScriptActions = win.invokedScriptActions || {};

  lodash.forEach(scriptActions, ({ id, action }) => {
    let actionFunc: (() => void) | undefined;
    switch (action) {
      case 'scroll-to-top': {
        actionFunc = (): void => {
          $(window).scrollTop(0);
        };
      }
    }

    if (actionFunc) {
      setTimeout(() => {
        if (actionFunc) {
          if (!win.invokedScriptActions[id]) {
            win.invokedScriptActions[id] = true;
            logInfo(`Invoking script action "${action}" (${id})`, HpDebugFlags.ScriptActions);
            actionFunc();
          } else {
            logInfo(`Ignoring script action "${action}" (${id})`, HpDebugFlags.ScriptActions);
          }
        }
      }, 100);
    }
  });

  return null;
}
