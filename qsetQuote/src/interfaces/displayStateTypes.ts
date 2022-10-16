// This is stuff that helps the UI but will not be persisted to the database
import { SMap } from '@avantia/client-and-server-utilities';
import { HpAvailableQuestionSets, HpClientSectionMap } from '.';

export type HpQuestionIdNode = string | HpQuestionIdGroup;
export type HpClientQuestionUiMap = SMap<HpClientQuestionUI>;
export type HpClientSectionsUiMap = SMap<HpClientSectionUI>;

export interface HpQuestionIdGroup {
  number: number | undefined;
  groupId: string;
  questions: string[];
}

export interface HpQuestionDisplayState {
  activeSectionId: string;
  highestSectionStartedPosition: number;
  sections: HpClientSectionMap;
  sectionIdOrder: string[];
  visibleQuestionIds: HpQuestionIdNode[];
  allOrderedQuestionIds: string[];
  availableQuestionSets: HpAvailableQuestionSets;
  questionsUI: HpClientQuestionUiMap;
  sectionsUI: HpClientSectionsUiMap;
  scriptActions: HpScriptAction[];
  showValidationSummary: boolean;
}

export interface HpClientQuestionUI {
  isEditing: boolean;
  isVisible: boolean;
  isTouched?: boolean;
  isDirty?: boolean;
  lookupVisibility?: false | SMap<boolean>; // false = without conditions, otherwise a list of key to visibility.
  helpInfoVisibility?: boolean;
}

export interface HpClientSectionUI {
  isVisible: boolean;
}

export interface HpScriptAction {
  id: string;
  action: HpScriptActionTypes;
}

export type HpScriptActionTypes = 'scroll-to-top';
