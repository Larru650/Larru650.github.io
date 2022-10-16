import { SMap } from '@avantia/client-and-server-utilities';
import { displayTimeTaken, HpDebugFlags, logInfo, MicroTimer } from '@avantia/questionset-model';
import { ActionTypes, HpAction } from '../actions/actionTypes';

export type HandlerFunction<StateT> = (
  state: StateT,
  action: HpAction<any>,
  reducerAction: (state: StateT, action: HpAction<any>) => StateT
) => StateT;

export class ReducerProcessor<StateT> {
  private name: string;
  private actions: Map<ActionTypes, any> = new Map<ActionTypes, any>();
  private handlers: SMap<HandlerFunction<StateT>> = {};

  constructor(name: string) {
    this.name = name;
  }

  public add<ActionT extends HpAction<any>>(
    type: ActionTypes,
    reducerAction: (state: StateT, action: ActionT) => StateT
  ): void {
    if (this.handlers[type]) {
      throw new Error(`There ${this.name} reducer already contains the "${type}" action.`);
    }

    this.handlers[type] = createHandler<StateT, ActionT>(type);
    this.actions.set(type, reducerAction);
  }

  public process(state: StateT, action: HpAction<any>): StateT {
    let newState = state;
    const { type } = action;
    if (this.actions.has(type)) {
      const formName = action.payload ? action.payload.formName : undefined;
      if (!formName || formName === this.name) {
        const timer = new MicroTimer().start();
        const reducerAction: (state: StateT, action: HpAction<any>) => StateT = this.actions.get(type);

        logInfo(`Processing ${this.name} reducer "${type}" action.`, HpDebugFlags.ReducerProcessor);

        const handler = this.handlers[type];
        newState = handler(newState, action, reducerAction);

        displayTimeTaken(`Reducer handler ${type}`, timer);
      } else {
        logInfo(
          `The ${this.name} reducer is doing nothing for "${type}" action because action.formName (${formName}) doesn't match ${this.name}.`,
          HpDebugFlags.ReducerProcessor
        );
      }
    } else {
      logInfo(`There is nothing to do for ${this.name} reducer "${type}" action.`, HpDebugFlags.ReducerProcessor);
    }

    return newState;
  }
}

function createHandler<StateT, ActionT extends HpAction<any>>(
  type: ActionTypes
): (state: StateT, action: HpAction<any>, reducerAction: (state: StateT, action: ActionT) => StateT) => StateT {
  return (state: StateT, action: HpAction<any>, reducerAction: (state: StateT, action: ActionT) => StateT): StateT => {
    if (action.type === type) {
      return reducerAction(state, action as ActionT);
    }

    return state;
  };
}
