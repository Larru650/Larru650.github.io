import { basicSorter, rangeWorker } from '@avantia/client-and-server-utilities';
import { triggerNavigationChangeEvent } from '../actions/eventActions';
import { HpClientQuestionMap, HpClientSection, HpClientSectionUI, HpQuestionDisplayState } from '../interfaces';
import { determineVisibleQuestions } from '../reducers/questionSetTools';

export type QuestionSectionWorker = (
  section: HpClientSection,
  setionUI: HpClientSectionUI,
  sectionId: string,
  isActive: boolean,
  index: number
) => boolean | void;

export interface SectionSpecifier {
  sectionId: string;
  sectionIndex: number;
}

export interface SetActiveSectionOptions {
  raiseEvents: boolean;
}

export function setActiveSection(
  displayState: HpQuestionDisplayState,
  sectionId: string,
  options?: SetActiveSectionOptions
): void {
  const activeSection = displayState.sections[sectionId];
  if (activeSection) {
    const { raiseEvents } = options || {};
    if (raiseEvents !== false && sectionId !== displayState.activeSectionId) {
      triggerNavigationChangeEvent(activeSection.title);
    }

    displayState.activeSectionId = sectionId;
  } else {
    throw new Error(`The sectionId "${sectionId}" cannot be found.`);
  }
}

export function getNextOrPreviousSectionId(
  displayState: HpQuestionDisplayState,
  direction: 'next' | 'prev',
  questions: HpClientQuestionMap,
  currentSectionId?: string
): string {
  const { sections } = displayState;
  let sectionId = currentSectionId;
  const pos: number = sectionId && sections[sectionId] ? sections[sectionId].position : -1;
  forEachSectionInOrder({
    displayState,
    options: { iterate: 'sections-only', reverseOrder: direction === 'prev' },
    worker: ({ position }, _, id) => {
      if (sectionId === undefined) {
        sectionId = id;
        return false;
      }

      if ((direction === 'next' && position > pos) || (direction === 'prev' && position < pos)) {
        const visibleQuestionIds = determineVisibleQuestions({
          questions,
          questionsUI: displayState.questionsUI,
          activeSectionId: id
        });
        if (visibleQuestionIds.length) {
          sectionId = id;
          return false;
        }
      }

      return true;
    }
  });

  if (sectionId === undefined || sections[sectionId] === undefined) {
    console.error(`There is no "Next Section" following from ${sectionId}!`);
  }

  return sectionId as string;
}

export type SectionIteratorOptions = { iterate: 'sections-only' | 'groups-only' | 'sections-and-groups' };

export interface SectionInOrderIteratorOptions extends SectionIteratorOptions {
  ignoreOrderList?: boolean;
  reverseOrder?: boolean;
}

export interface ForEachSectionInOrderProps {
  displayState: HpQuestionDisplayState;
  options: SectionInOrderIteratorOptions;
  worker: QuestionSectionWorker;
}

export function forEachSection(
  displayState: HpQuestionDisplayState,
  options: SectionIteratorOptions,
  worker: QuestionSectionWorker
): void {
  const { sections, activeSectionId, sectionsUI } = displayState;
  const sectionFilter = createSectionFilter(options);
  let index = 0;
  for (const sectionId in sections) {
    const section = sections[sectionId];
    const sectionUI = sectionsUI[sectionId];
    const shouldExit =
      sectionFilter(section) && worker(section, sectionUI, sectionId, sectionId === activeSectionId, index++) === false;
    if (shouldExit) {
      break;
    }
  }
}

function createSectionFilter(options: SectionIteratorOptions): (section: HpClientSection) => boolean {
  const { iterate } = options;
  const iterateSection = iterate !== 'groups-only';
  const iterateGroups = iterate !== 'sections-only';
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return (section: HpClientSection) => {
    const isGroup = section.isGroup;
    return (!isGroup && iterateSection) || (isGroup && iterateGroups);
  };
}

export function forEachSectionInOrder(props: ForEachSectionInOrderProps): void {
  const { options } = props;
  const { ignoreOrderList } = options;
  if (ignoreOrderList === true) {
    forEachSectionIgnoringOrder(props);
  } else {
    forEachSectionUsingOrder(props);
  }
}

function forEachSectionUsingOrder({ displayState, worker, options }: ForEachSectionInOrderProps): void {
  const { reverseOrder } = options;
  const { sections, sectionsUI, sectionIdOrder: list, activeSectionId } = displayState;
  const sectionFilter = createSectionFilter(options);
  let start = 0;
  let end = list.length;
  if (reverseOrder) {
    start = end - 1;
    end = -1; // exclusive upper bound
  }

  rangeWorker(start, end, (index) => {
    const sectionId = list[index];
    const section = sections[sectionId];
    const shouldExit =
      sectionFilter(section) &&
      worker(section, sectionsUI[sectionId], sectionId, activeSectionId === sectionId, index) === false;
    return !shouldExit;
  });
}

function forEachSectionIgnoringOrder({ displayState, worker, options }: ForEachSectionInOrderProps): void {
  const { reverseOrder } = options;
  const { sectionsUI } = displayState;
  let activeSectionKey: string | undefined;
  const list: HpClientSection[] = [];

  forEachSection(displayState, options, (section, _, sectionId, isActive) => {
    if (isActive) {
      activeSectionKey = sectionId;
    }

    list.push(section);
  });

  if (!reverseOrder) {
    list.sort(sectionSorter);
  } else {
    list.sort((a, b) => -sectionSorter(a, b));
  }

  for (let index = 0; index < list.length; index++) {
    const section = list[index];
    const sectionId = section.sectionId;
    const shouldExit =
      worker(section, sectionsUI[sectionId], sectionId, activeSectionKey === sectionId, index) === false;
    if (shouldExit) {
      break;
    }
  }
}

function sectionSorter(s1: HpClientSection, s2: HpClientSection): number {
  const { position: s1pos, title: s1title, sectionId: s1id, isGroup: s1grp } = s1;
  const { position: s2pos, title: s2title, sectionId: s2id, isGroup: s2grp } = s2;
  let res = s1grp !== s2grp ? (s1grp ? 1 : -1) : 0;
  if (res === 0) {
    res = basicSorter(s1pos, s2pos);
    if (res === 0) {
      res = basicSorter(s1title, s2title);
      if (res === 0) {
        res = basicSorter(s1id, s2id);
      }
    }
  }

  return res;
}
