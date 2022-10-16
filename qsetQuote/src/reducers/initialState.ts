import { HpValidationResult } from '@avantia/form-validation';
import {
  FeatureToggleEnum,
  HpClientQuestionSetState,
  HpClientSection,
  HpClientSectionMap,
  HpQuestionDisplayState
} from '../interfaces';
import { FeatureToggleState } from './featureToggleReducer';
import { applyChanges } from './reducerLibrary';

export interface UserInterfaceState {
  fetchError?: any;
  ajaxCallsInProgress: number;
  disableButtons: boolean;
}

export function createEmptyValidationResult(): HpValidationResult {
  return {
    count: 0,
    errors: {},
    checked: {}
  };
}

export interface GlobalState {
  featureToggles: FeatureToggleState;
  userInterface: UserInterfaceState;
  questionSet: HpClientQuestionSetState;
}

function setFeatureToggles(): FeatureToggleState {
  const featureToggleMap = new Map<FeatureToggleEnum, boolean>();
  Object.values(FeatureToggleEnum).map((v) => (featureToggleMap[v] = false));
  return featureToggleMap;
}

export function createEmptyHpClientQuestionSetState(): HpClientQuestionSetState {
  return {
    questionSetId: '',
    answersId: '',
    friendlyName: '',
    timestamp: '',
    version: '',
    stylesheets: [],
    questionFormats: [],
    questions: {},
    answers: {},
    displayState: createEmptyDisplayState({ addBlankSection: false }),
    validationResult: createEmptyValidationResult(),
    commonLookups: {}
  };
}

// Split into different functions.
/*eslint no-template-curly-in-string: off*/
export function getInitialState(): GlobalState {
  return {
    featureToggles: setFeatureToggles(),
    userInterface: {
      fetchError: null,
      ajaxCallsInProgress: 0,
      disableButtons: false
    },
    questionSet: createEmptyHpClientQuestionSetState()
  };
}

const falseFunc: () => false = () => false;

export interface CreateEmptyDisplayStateOptions {
  addBlankSection: boolean;
  extra?: Partial<HpQuestionDisplayState>;
}

export function createEmptyDisplayState({
  addBlankSection,
  extra
}: CreateEmptyDisplayStateOptions): HpQuestionDisplayState {
  let sectionId = '';
  let sections: HpClientSectionMap = {};
  let sectionIdOrder: string[] = [];
  if (addBlankSection) {
    sectionId = 'none';
    const none: HpClientSection = {
      sectionId,
      title: 'None',
      position: 0,
      isTemplate: false,
      isGroup: false,
      prerequisites: [falseFunc]
    };
    sections = { none };
    sectionIdOrder = [sectionId];
  }

  const state: HpQuestionDisplayState = {
    sections,
    sectionIdOrder,
    activeSectionId: sectionId,
    highestSectionStartedPosition: 0,
    visibleQuestionIds: [],
    allOrderedQuestionIds: [],
    availableQuestionSets: { items: [], selected: undefined },
    sectionsUI: { none: { isVisible: false } },
    questionsUI: {},
    scriptActions: [],
    showValidationSummary: false
  };

  return applyChanges(state, extra || {});
}
