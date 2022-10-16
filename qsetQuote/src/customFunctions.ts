import { MaxGroupsAllowed } from '@avantia/questionset-model';
import { HpAnswerExpressionFunction } from '@avantia/questionset-script-parser';
import { HpClientLookupExpressionFunction, HpClientQuestion, HpClientQuestionLookupItemMap } from './interfaces';
import { HpClientPrerequisiteThisReference } from './interfaces/thisReferencesTypes';
import { getAddressDetailAnswer } from './reducers/addressLookupFeatureReducer';

function createListOfPeopleFunction(
  this: HpClientPrerequisiteThisReference<HpClientQuestion>
): HpClientQuestionLookupItemMap {
  const map: HpClientQuestionLookupItemMap = {};
  const qFirstName = this.getQuestion({ questionId: 'firstName' });
  const qLastName = this.getQuestion({ questionId: 'lastName' });
  if (!qFirstName || !qLastName) {
    return map;
  }

  const firstNameId = qFirstName.questionId;
  const lastNameId = qLastName.questionId;
  for (let i = 1; i < MaxGroupsAllowed; i++) {
    if (this.isElementVisible(firstNameId, i) && this.isElementVisible(lastNameId, i)) {
      const fname = this.getAnswerValue({ questionId: firstNameId, groupNumber: i });
      const lname = this.getAnswerValue({ questionId: lastNameId, groupNumber: i });
      if (fname && lname) {
        map[fname + ' ' + lname] = null;
      }
    } else {
      break;
    }
  }

  return map;
}

function createResidentsLookupOptionsFunction(
  this: HpClientPrerequisiteThisReference<HpClientQuestion>
): HpClientQuestionLookupItemMap {
  const map: HpClientQuestionLookupItemMap = { You: null, 'Other Resident': null };
  const fullNameCollection: [string, string][] = [
    ['jointNamesFirstName', 'jointNamesSurname'],
    ['cancelledInsuranceOtherResidentFirstName', 'cancelledInsuranceOtherResidentSurname'],
    ['bankruptcyOtherResidentFirstName', 'bankruptcyOtherResidentSurname'],
    ['liabilityOtherResidentFirstName', 'liabilityOtherResidentSurname'],
    ['criminalConvictionOtherResidentFirstName', 'criminalConvictionOtherResidentSurname']
  ];
  fullNameCollection.forEach(fullName => {
    for (let i = 1; i < MaxGroupsAllowed; i++) {
      const fname = this.getAnswerValue({ questionId: fullName[0], groupNumber: i });
      const lname = this.getAnswerValue({ questionId: fullName[1], groupNumber: i });
      if (fname && lname) {
        map[fname + ' ' + lname] = null;
      } else {
        break;
      }
    }
  });
  return map;
}

// Ensure that we have the correct function signature.
const createListOfPeople: HpClientLookupExpressionFunction = createListOfPeopleFunction;
const createResidentsLookupOptions: HpClientLookupExpressionFunction = createResidentsLookupOptionsFunction;
const getAddressDetail: HpAnswerExpressionFunction = getAddressDetailAnswer;

export { createListOfPeople, createResidentsLookupOptions, getAddressDetail };
