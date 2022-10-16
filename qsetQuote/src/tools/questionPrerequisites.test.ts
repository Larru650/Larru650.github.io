import { HpClientConditionFunction } from '../interfaces';
import { HpQuestionDisplayState } from '../interfaces/displayStateTypes';
import { createAnswer, createEmptyTestState, createQuestion } from './common.test';
import { forEachSection } from './questionDisplayStateTools';

describe('questionPrerequisites', () => {
  describe('createPrerequisite', () => {
    it('works for explitly created prequisite', () => {
      // arrange
      const state = createEmptyTestState();
      const surname = createQuestion({ state, name: 'surname' });
      const surnameId = surname.questionId;
      const surnameIsProvided: HpClientConditionFunction = () => {
        const { answers } = state;
        return !!answers[surnameId].customer;
      };

      createQuestion({ state, name: 'firstName', extras: { prerequisites: [surnameIsProvided] } });
      const answer = createAnswer(state, surname, 'Heath');

      // act/assert
      expect(
        surnameIsProvided.call({} as any, {
          groupNumber: undefined,
          questionId: surnameId,
          sourceQuestionId: surnameId,
          eventType: 'click'
        })
      ).toBe(true);

      // arrange
      answer.customer = '';

      //act/assert
      expect(
        surnameIsProvided.call({} as any, {
          groupNumber: undefined,
          questionId: surnameId,
          sourceQuestionId: surnameId,
          eventType: 'click'
        })
      ).toBe(false);
    });
  });

  describe('forEachSection', () => {
    const createDisplayState: () => HpQuestionDisplayState = () => {
      return {
        activeSectionId: '',
        highestSectionStartedPosition: 0,
        sections: {
          one: {
            sectionId: 'one',
            title: 'One',
            isTemplate: false,
            isGroup: false,
            position: 0,
            prerequisites: [],
            ui: { isVisible: true }
          },
          'group-one': {
            sectionId: 'group-one',
            title: 'Group One',
            isTemplate: false,
            isGroup: true,
            position: 0,
            prerequisites: [],
            ui: { isVisible: true }
          }
        },
        visibleQuestionIds: [],
        availableQuestionSets: { items: [] },
        allOrderedQuestionIds: [],
        sectionIdOrder: ['one'],
        questionsUI: {},
        sectionsUI: {},
        scriptActions: [],
        showValidationSummary: false
      } as HpQuestionDisplayState;
    };

    it('handles case of 0 sections', () => {
      // arrange
      const displayState: HpQuestionDisplayState = {
        activeSectionId: '',
        highestSectionStartedPosition: 0,
        sections: {},
        visibleQuestionIds: [],
        availableQuestionSets: { items: [] },
        allOrderedQuestionIds: [],
        sectionIdOrder: [],
        questionsUI: {},
        sectionsUI: {},
        scriptActions: [],
        showValidationSummary: false
      };

      // act
      const list: string[] = [];
      forEachSection(displayState, { iterate: 'sections-only' }, section => {
        list.push(section.sectionId);
      });

      // assert
      expect(list).toEqual([]);
    });

    it('handles case of 2 sections (comprising one group, one section)', () => {
      // arrange
      const displayState = createDisplayState();

      // act
      const list: string[] = [];
      forEachSection(displayState, { iterate: 'sections-only' }, section => {
        list.push(section.sectionId);
      });

      // assert
      expect(list).toEqual(['one']);
    });

    it('handles case of 2 sections (comprising one group, one section, and includeGroups option)', () => {
      // arrange
      const displayState = createDisplayState();

      // act
      const list: string[] = [];
      forEachSection(displayState, { iterate: 'sections-and-groups' }, section => {
        list.push(section.sectionId);
      });

      // assert
      expect(list).toEqual(['one', 'group-one']);
    });

    it('handles case of 2 sections (comprising one group, one section, and onlyGroups option)', () => {
      // arrange
      const displayState = createDisplayState();

      // act
      const list: string[] = [];
      forEachSection(displayState, { iterate: 'groups-only' }, section => {
        list.push(section.sectionId);
      });

      // assert
      expect(list).toEqual(['group-one']);
    });
  });
});
