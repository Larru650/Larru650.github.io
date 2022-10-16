import { HpControlActionTypes } from '@avantia/questionset-model';
import { registerActionPromise } from './actions/dependentActionRunner';
import {
  CreateActionPromisesProps,
  DependentActionFunction,
  HpClientButtonClickActionFunction,
  HpRegisterSomethingFunction
} from './interfaces';
import { registerButtonClickAction } from './reducers/questionSetReducer';

export type CreateActionPromise<PayloadT> = (
  properties: CreateActionPromisesProps
) => DependentActionFunction<PayloadT> | undefined;

export interface FeatureSetupProps<PayloadT> {
  key: HpControlActionTypes;
  createActionPromise: CreateActionPromise<PayloadT>;
  buttonClickAction: HpClientButtonClickActionFunction | undefined;
  registerFeature: HpRegisterSomethingFunction | undefined;
}

export function configureFeatures(features: FeatureSetupProps<unknown>[]): void {
  features.forEach(({ key, createActionPromise, buttonClickAction, registerFeature }) => {
    registerActionPromise(key, createActionPromise);
    if (buttonClickAction) {
      registerButtonClickAction(key, buttonClickAction, registerFeature);
    }
  });
}
