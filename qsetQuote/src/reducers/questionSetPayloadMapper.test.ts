import { createControlId, HpAnswerMap, HpDebugFlags, HpQuestionSet } from '@avantia/questionset-model';
import {
  HpClientAvailableQuestionSet,
  HpClientQuestion,
  HpClientQuestionMap,
  HpClientQuestionSetState,
  HpClientSection,
  HpClientSectionMap,
  HpQuestionDisplayState
} from '../interfaces';
import { createEmptyTestPayload, createEmptyTestState, createQuestion } from '../tools/common.test';
import { isValidControlType } from './isValidControlType';
import {
  changeQuestionSet,
  questionSetPayloadMapper,
  reloadQuestionGroupsFromAnswers
} from './questionSetPayloadMapper';
import { createBlankAnswer } from './questionSetTools';
import { applyChanges } from './reducerLibrary';

describe('HpClientQuestionSetState', () => {
  describe('reloadQuestionGroupsFromAnswers', () => {
    it('correctly adds group questions to match group answers', () => {
      // arrange
      const questionId = 'qid';
      const groupId = 'gid';
      const sectionId = 'sid';
      const questionAndGroupId = createControlId({ questionId, groupNumber: 1, options: { noPrefix: true } });
      const answers: HpAnswerMap = {
        [questionAndGroupId]: createBlankAnswer(HpDebugFlags.UnitTests)
      };
      const questions: HpClientQuestionMap = {
        [questionId]: ({ questionId, groupId, sectionId, name: 'name', data: {} } as Partial<
          HpClientQuestion
        >) as HpClientQuestion
      };
      const section: Partial<HpClientSection> = { sectionId, isGroup: false, questionIds: [questionId] };
      const groupSection: Partial<HpClientSection> = { sectionId: groupId, isGroup: true, questionIds: [questionId] };
      const displayState: Partial<HpQuestionDisplayState> = {
        sections: { [groupId]: groupSection as HpClientSection, [sectionId]: section as HpClientSection },
        sectionsUI: { [sectionId]: { isVisible: true } },
        allOrderedQuestionIds: [questionId],
        sectionIdOrder: [sectionId],
        activeSectionId: sectionId
      };
      const state: Partial<HpClientQuestionSetState> = {
        questions,
        answers,
        displayState: displayState as HpQuestionDisplayState
      };

      // act
      const result = reloadQuestionGroupsFromAnswers(answers, questions as any, state as HpClientQuestionSetState);

      // assert
      expect(result).toBeTruthy();
      expect(result.questions[questionId]).toBeTruthy();
      expect(result.questions[questionAndGroupId]).toBeTruthy();
    });
  });

  describe('mapPayloadToModelWithEmptyState', () => {
    it('works when there are questions without groups', () => {
      // arrange
      let qid: string | undefined;
      const payload = createHpQuestionSetPayload({}, (pl) => {
        const tmp = createQuestion({ state: pl, name: 'name' });
        qid = tmp.questionId;
        return tmp;
      });

      // act
      const newState = mapPayloadToModelWithEmptyState(payload);

      // assert
      const prerequisites = newState.displayState.sections.first.prerequisites;
      expect(prerequisites).toBeUndefined();
      const expected: HpClientSectionMap = {
        first: {
          sectionId: 'first',
          prerequisites,
          isTemplate: false,
          isGroup: false,
          position: 1,
          title: 'First section'
        }
      };
      expect(newState.displayState.sections).toEqual(expected);
      expect(newState.displayState.sectionsUI['first']).toEqual({ isVisible: true });
      expect(newState.displayState.questionsUI[qid || '']).toEqual({
        isVisible: true,
        isEditing: false,
        lookupVisibility: false
      });
    });

    it('works when there are questions with groups', () => {
      // arrange
      const payload = createEmptyTestPayload();
      const groupId1 = 'group1';
      const group1Title = 'Group 1';
      const groupId2 = 'group2';
      const group2Title = 'Group 2';
      payload.sections[groupId1] = { sectionId: groupId1, title: group1Title, position: 0, isTemplate: true };
      payload.sections[groupId2] = { sectionId: groupId2, title: group2Title, position: 0, isTemplate: true };
      const age = createQuestion({ state: payload, name: 'age' });
      const occupation = createQuestion({ state: payload, name: 'occupation' });
      age.groupId = groupId1;
      occupation.groupId = groupId1;

      // act
      let newState = mapPayloadToModelWithEmptyState(payload);

      // assert
      let group1section = newState.displayState.sections[groupId1];
      let prerequisites = group1section.prerequisites;
      expect(prerequisites).toBeUndefined();
      expect(group1section).toEqual({
        sectionId: groupId1,
        prerequisites,
        isTemplate: true,
        isGroup: true,
        title: group1Title,
        position: 0,
        questionIds: [age.questionId, occupation.questionId]
      } as HpClientSection);
      expect(newState.displayState.sectionsUI[groupId1]).toEqual({ isVisible: true });

      // arrange
      occupation.groupId = groupId2;

      // act
      newState = mapPayloadToModelWithEmptyState(payload);

      // assert
      group1section = newState.displayState.sections[groupId1];
      prerequisites = group1section.prerequisites;
      expect(prerequisites).toBeUndefined();
      expect(group1section).toEqual({
        sectionId: groupId1,
        prerequisites,
        isTemplate: true,
        isGroup: true,
        title: group1Title,
        position: 0,
        questionIds: [age.questionId]
      } as HpClientSection);
      expect(newState.displayState.sectionsUI[groupId1]).toEqual({ isVisible: true });

      const group2section = newState.displayState.sections[groupId2];
      prerequisites = group2section.prerequisites;
      expect(prerequisites).toBeUndefined();
      expect(group2section).toEqual({
        sectionId: groupId2,
        prerequisites,
        isTemplate: true,
        isGroup: true,
        title: group2Title,
        position: 0,
        questionIds: [occupation.questionId]
      } as HpClientSection);
      expect(newState.displayState.sectionsUI[groupId1]).toEqual({ isVisible: true });
    });
  });

  describe('changeQuestionSet', () => {
    it('correctly maps sections on change', () => {
      // arrange
      const qs1 = createEmptyTestPayload(false, {
        questionSetId: 'qs1',
        sections: { 'qs1-1': { sectionId: 'qs1-1', title: 'QS1 Section 1', position: 1, isTemplate: false } }
      });
      createQuestion({ state: qs1, name: 'q1', extras: { sectionId: 'qs1-1' } });

      const qs2 = createEmptyTestPayload(false, {
        questionSetId: 'qs2',
        sections: { 'qs2-1': { sectionId: 'qs2-1', title: 'QS2 Section 1', position: 1, isTemplate: false } }
      });
      createQuestion({ state: qs2, name: 'q2', extras: { sectionId: 'qs2-1' } });

      const currState: HpClientQuestionSetState = createEmptyTestState();
      const availableQuestionSet1: HpClientAvailableQuestionSet = {
        timestamp: qs1.timestamp,
        questionSetId: qs1.questionSetId,
        friendlyName: qs1.friendlyName,
        questionSet: qs1
      };
      const availableQuestionSet2: HpClientAvailableQuestionSet = {
        timestamp: qs2.timestamp,
        questionSetId: qs2.questionSetId,
        friendlyName: qs2.friendlyName,
        questionSet: qs2
      };
      currState.displayState.availableQuestionSets = {
        items: [availableQuestionSet1, availableQuestionSet2],
        selected: 'qs1'
      };

      if (!availableQuestionSet1.questionSet) {
        fail('availableQuestionSet1.state must be defined');
      }

      // assert
      expect(currState.displayState.availableQuestionSets.items.length).toBe(2);
      expect(currState.displayState.availableQuestionSets.selected).toBe('qs1');
      expect(currState.displayState.sectionIdOrder).toEqual([]);
      expect(currState.displayState.activeSectionId).toBe('');

      // act
      const state = changeQuestionSet(currState, 'qs2', isValidControlType);

      // assert
      expect(state).not.toBe(currState);
      expect(state.displayState.availableQuestionSets.items.length).toBe(2);
      expect(state.displayState.availableQuestionSets.selected).toBe('qs2');
      const prerequisites = state.displayState.sections['qs2-1'].prerequisites;
      expect(prerequisites).toBeUndefined();
      expect(state.displayState.sections).toEqual({
        'qs2-1': {
          sectionId: 'qs2-1',
          title: 'QS2 Section 1',
          position: 1,
          isTemplate: false,
          isGroup: false
        } as HpClientSection
      } as HpClientSectionMap);
      expect(state.displayState.sectionIdOrder).toEqual(['qs2-1']);
      expect(state.displayState.activeSectionId).toBe('qs2-1');

      // act
      const newState = changeQuestionSet(currState, 'qs1', isValidControlType);

      // assert
      expect(newState).not.toBe(state);
      expect(newState.displayState.availableQuestionSets.items.length).toBe(2);
      expect(newState.displayState.availableQuestionSets.selected).toBe('qs1');
    });
  });
});

function mapPayloadToModelWithEmptyState(payload: HpQuestionSet): HpClientQuestionSetState {
  return questionSetPayloadMapper({
    currState: createEmptyTestState(),
    payload,
    errorIfNoPayload: true,
    isValidControlType
  }) as HpClientQuestionSetState;
}

function createHpQuestionSetPayload(
  extras: Partial<HpQuestionSet>,
  action?: (payload: HpQuestionSet) => void
): HpQuestionSet {
  const res = applyChanges(createEmptyTestPayload(), extras);
  if (action) {
    action(res);
  }

  return res;
}
