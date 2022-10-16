import { HpDebugFlags } from '@avantia/questionset-model';
import { HpAction } from '../actions/actionTypes';
import {
  HpClientAnswerMap,
  HpClientCustomActionFunction,
  HpClientCustomActionResponse,
  HpClientDynamicFunctionProps,
  HpClientQuestion,
  HpClientQuestionMap,
  HpEventTypes,
  HpQuestionDisplayState
} from '../interfaces';
import { HpClientPrerequisiteThisReferenceClass } from './prerequisiteThisReference';

export function invokeCustomScript(
  customScript: HpClientCustomActionFunction,
  questionId: string,
  eventType: HpEventTypes,
  questions: HpClientQuestionMap,
  answers: HpClientAnswerMap,
  displayState: HpQuestionDisplayState
): HpAction<any> | false | undefined {
  const props: HpClientDynamicFunctionProps = {
    questionId,
    sourceQuestionId: questionId,
    groupNumber: undefined,
    eventType
  };

  const self = new HpClientPrerequisiteThisReferenceClass<HpClientQuestion>({
    questions,
    answers,
    displayState,
    groupNumber: undefined,
    debugFlag: HpDebugFlags.ScriptActions
  });

  let action: HpClientCustomActionResponse;
  try {
    action = customScript.call(self, props);
  } catch (ex) {
    console.error(`Error calling custom script for '${questionId}' button: ${ex}`);
  }

  if (action && !action.type) {
    throw new Error(
      "If a custom script returns an action, it must contain at the very least a 'type' property (and usually a payload)."
    );
  }

  return action;
}
