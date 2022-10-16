import { HpStandardControlTypes } from '@avantia/questionset-model';
import { HpDynamicFunctionProps, HpPrerequsisiteThisReference } from '@avantia/questionset-script-parser';
import { HpClientInputTextAndStyle, HpClientQuestion, HpClientQuestionData } from '../interfaces';
import { getAddressDetailAnswer } from './addressLookupFeatureReducer';

describe('addressLookupFeatureReducer', () => {
  describe('getAddressDetailAnswer', () => {
    it('works', () => {
      // arrange
      const questionId = 'qid';
      const postcode = 'KT1 4BU';
      const addressLine1 = 'St George`s Square';
      const textAndStyle: Partial<HpClientInputTextAndStyle> = {
        standard: {
          controlType: 'AddressView' as HpStandardControlTypes,
          questionText: 'Billing View'
        }
      };
      const data: Partial<HpClientQuestionData> = {
        textAndStyle: textAndStyle as HpClientInputTextAndStyle,
        lookup: {
          addressControlPrefix: {
            text: 'billing'
          }
        }
      };
      const address: Partial<HpClientQuestion> = {
        questionId,
        data: data as HpClientQuestionData
      };
      const self: Partial<HpPrerequsisiteThisReference> = {
        getQuestion: (qid) => {
          return qid === questionId ? address : undefined;
        },
        getAnswerValue: (qid) => {
          switch (qid) {
            case 'billingAddressLine1':
              return addressLine1;
            case 'billingPostcode':
              return postcode;
            default:
              return null;
          }
        }
      };

      // act
      const result = getAddressDetailAnswer.call(
        self as HpPrerequsisiteThisReference,
        { questionId } as HpDynamicFunctionProps
      ) as string[] | null;

      // assert
      expect(result).toBeTruthy();
      expect(result ? result.length : 0).toBeGreaterThan(6);
      expect(JSON.stringify(result)).toContain(`"addressLine1","${addressLine1}"`);
      expect(JSON.stringify(result)).toContain(`"postcode","${postcode}"`);
      expect(JSON.stringify(result)).toContain(`"addressLine2",null`);
    });
  });
});
