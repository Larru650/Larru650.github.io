import { HpClientSection } from '../interfaces';
import { HpQuestionDisplayState } from '../interfaces/displayStateTypes';
import { applyChanges } from '../reducers/reducerLibrary';
import { forEachSection, forEachSectionInOrder } from './questionDisplayStateTools';

describe('questionDisplayStateTools', () => {
  describe('forEachSection', () => {
    it('iterates over all sections (ignoring  groups) in the order they appear in the sections object', () => {
      // arrange
      const displayState: HpQuestionDisplayState = createDisplayState();

      // act/assert
      let count = 0;
      forEachSection(displayState, { iterate: 'sections-only' }, (_, _2, id, isActive, index) => {
        switch (index) {
          case 0:
            expect(id).toBe('first');
            expect(isActive).toBe(false);
            break;
          case 1:
            expect(id).toBe('second');
            expect(isActive).toBe(true);
            break;
          default:
            fail(`We shouldn't have index: ${index}.`);
        }

        count++;
      });

      // assert
      expect(count).toBe(2);
    });
  });

  describe('forEachSectionInOrder', () => {
    it('iterates over all sections (ignoring  groups) in the order they appear in the sectionIdOrder array', () => {
      // arrange
      const displayState: HpQuestionDisplayState = createDisplayState();

      // act/assert
      let count = 0;
      forEachSectionInOrder({
        displayState,
        options: { iterate: 'sections-only' },
        worker: (_, _2, id, isActive, index) => {
          switch (index) {
            case 0:
              expect(id).toBe('second');
              expect(isActive).toBe(true);
              break;
            case 1:
              expect(id).toBe('first');
              expect(isActive).toBe(false);
              break;
            default:
              fail(`We shouldn't have index: ${index}.`);
          }

          count++;
        }
      });

      // assert
      expect(count).toBe(2);
    });
  });
});

function createDisplayState(): HpQuestionDisplayState {
  const first = createSection('first', 'First', { position: 4 });
  const second = createSection('second', 'Second', { position: 2 });
  const group = createSection('group', 'Group', { position: 7, isGroup: true });
  return {
    sections: { first, second, group },
    sectionIdOrder: [second.sectionId, first.sectionId, group.sectionId],
    activeSectionId: second.sectionId,
    highestSectionStartedPosition: second.position,
    visibleQuestionIds: [],
    availableQuestionSets: { items: [], selected: undefined },
    allOrderedQuestionIds: [],
    questionsUI: {},
    sectionsUI: {},
    scriptActions: [],
    showValidationSummary: false
  };
}

function createSection(sectionId: string, title: string, extra?: Partial<HpClientSection>): HpClientSection {
  return applyChanges(
    { sectionId, title, position: 0, isGroup: false, isTemplate: false, prerequisites: [] },
    extra || {}
  );
}
