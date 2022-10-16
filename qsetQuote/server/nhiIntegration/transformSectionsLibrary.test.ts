import { SMap } from '@avantia/client-and-server-utilities';
import { createControlId, HpAnswer, HpAnswerMap, HpQuestion, HpQuestionMap } from '@avantia/questionset-model';
import lodash from 'lodash';
import { HpValueToIndex, MappingFieldToQuestionIdMap } from './interfaces';
import { QabEnumItem } from './qabEnumTypes';
import {
  convertCSharpInterfaceToTypeScript,
  createMappingFieldMap,
  createQabValueToIndexMap,
  getAnswer,
  getListOfVisibleQuestionIds
} from './transformSectionsLibrary';
import { createMockQuestionSet } from './transformSectionTestCommon';

describe('transformSectionsLibrary', () => {
  describe('createMappingFieldMap', () => {
    it("creates a mapping from 'mappingField' to 'questionId'", () => {
      const questions = {
        age: { questionId: 'age', mappingField: 'Age' }
      };
      expect(createMappingFieldMap(lodash.keys(questions), questions)).toStrictEqual({ Age: 'age' });
    });

    it('throws an exception if there are duplicate mappings', () => {
      const questions = {
        age: { questionId: 'age', mappingField: 'Age' },
        dob: { questionId: 'dob', mappingField: 'Age' }
      };
      expect(() => createMappingFieldMap(lodash.keys(questions), questions)).toThrow(
        "Duplicate 'mappingField' property value 'Age' for questionId 'dob' (other questionId 'age')."
      );
    });
  });

  describe('createQabValueToIndexMap', () => {
    it('works', () => {
      // arrange
      const enumTypeMap: SMap<QabEnumItem[]> = {
        CoverType: [
          {
            code: 'B',
            text: 'Buildings & Contents',
            enumType: 'BuildingsContents',
            index: 0
          },
          {
            code: 'C',
            text: 'Contents only',
            enumType: 'Contents',
            index: 1
          }
        ]
      };

      // act
      const map = createQabValueToIndexMap(enumTypeMap);

      // assert
      expect(map).toBeDefined();
      const coverTypeMap = map.CoverType;
      expect(coverTypeMap).toBeDefined();
      expect(coverTypeMap.code.B).toBe(0);
      expect(coverTypeMap.code.C).toBe(1);
      expect(coverTypeMap.enumType.BuildingsContents).toBe(0);
      expect(coverTypeMap.enumType.Contents).toBe(1);
      expect(coverTypeMap.text['Buildings & Contents']).toBe(0);
      expect(coverTypeMap.text['Contents only']).toBe(1);
    });
  });

  describe('getListOfVisibleQuestions', () => {
    it('works', () => {
      // arrange
      const qset = createMockQuestionSet('full');
      const propertyTypeId = 'db024fe7-4c2d-41b3-80ea-2ce74ad8d869';
      const houseTypeId = '021d512c-8fe2-4463-bfaa-0b6d33141d5b';

      // act
      const res = getListOfVisibleQuestionIds(qset);

      // assert
      expect(res).toBeDefined();

      expect(res.length).toBeGreaterThan(40);
      expect(res.indexOf(propertyTypeId)).toBeGreaterThanOrEqual(0);
      expect(res.indexOf(houseTypeId)).toBeGreaterThanOrEqual(0);
    });
  });

  describe('getAnswer', () => {
    const diagnosticMode = true;
    it('translates an answer code into a mapped enum index (when the controlType is DropDownList)', () => {
      // arrange
      interface FakeSection {
        PropertyTypeCode: string;
      }

      const questionId = 'propertyTypeId';
      const mappingField = 'PropertyTypeCode';
      const enumType = 'BasementFlat';
      const answerCode = 'B1';
      const answerText = 'Basement flat';
      const answerShort = 'B/ment flat';
      const answerOverrideText = 'Flat below ground';
      const enumIndex = 3;
      const question: Partial<HpQuestion> = {
        questionId,
        mappingField,
        data: {
          textAndStyle: {
            standard: {
              controlType: 'DropDownList',
              questionText: 'Property type?'
            }
          }
        }
      };
      const questions: HpQuestionMap = {
        [questionId]: question as HpQuestion
      };
      const answer: HpAnswer = {
        customer: '',
        default: null
      };
      const answers: HpAnswerMap = {
        [questionId]: answer
      };
      const mappingFields: MappingFieldToQuestionIdMap = {
        [mappingField]: questionId
      };
      const enumLookupMap: SMap<HpValueToIndex> = {
        [mappingField]: {
          code: {
            [answerCode]: enumIndex
          },
          enumType: {
            [enumType]: enumIndex
          },
          overrideText: {
            [answerOverrideText]: enumIndex
          },
          shortText: {
            [answerShort]: enumIndex
          },
          text: {
            [answerText]: enumIndex
          },
          custom: {}
        }
      };

      answer.customer = answerCode;

      // act/assert
      expect(
        getAnswer<FakeSection>({
          mappingField,
          mappingFields,
          questions,
          answers,
          enumLookupMap,
          expectedType: 'number',
          diagnosticMode
        })
      ).toBe(enumIndex);

      // arrange
      answer.customer = answerText;

      // act/assert
      expect(
        getAnswer<FakeSection>({
          mappingField,
          mappingFields,
          questions,
          answers,
          enumLookupMap,
          expectedType: 'number',
          diagnosticMode
        })
      ).toBe(enumIndex);

      // arrange
      answer.customer = enumType;

      // act/assert
      expect(
        getAnswer<FakeSection>({
          mappingField,
          mappingFields,
          questions,
          answers,
          enumLookupMap,
          expectedType: 'number',
          diagnosticMode
        })
      ).toBe(enumIndex);

      // arrange
      answer.customer = answerShort;

      // act/assert
      expect(
        getAnswer<FakeSection>({
          mappingField,
          mappingFields,
          questions,
          answers,
          enumLookupMap,
          expectedType: 'number',
          diagnosticMode
        })
      ).toBe(enumIndex);

      // arrange
      answer.customer = answerOverrideText;

      // act/assert
      expect(
        getAnswer<FakeSection>({
          mappingField,
          mappingFields,
          questions,
          answers,
          enumLookupMap,
          expectedType: 'number',
          diagnosticMode
        })
      ).toBe(enumIndex);
    });

    it('translates an answer code into a mapped enum index when using a composite mappingField', () => {
      // arrange
      interface FakeSection {
        PropertyTypeCode: string;
      }

      const questionId = 'propertyTypeId';
      const mappingField = 'PropertyTypeCode';
      const mappingSubKey = 'House';
      const answerCode = 'B1';
      const enumIndex = 3;
      const question: Partial<HpQuestion> = {
        questionId,
        mappingField: mappingField + '~' + mappingSubKey,
        data: {
          textAndStyle: {
            standard: {
              controlType: 'DropDownList',
              questionText: 'Property type?'
            }
          }
        }
      };
      const questions: HpQuestionMap = {
        [questionId]: question as HpQuestion
      };
      const answer: HpAnswer = {
        customer: '',
        default: null
      };
      const answers: HpAnswerMap = {
        [questionId]: answer
      };
      const mappingFields: MappingFieldToQuestionIdMap = {
        [mappingField]: {
          [mappingSubKey]: questionId
        }
      };
      const enumLookupMap: SMap<HpValueToIndex> = {
        [mappingField]: {
          code: {
            [answerCode]: enumIndex
          },
          enumType: {},
          overrideText: {},
          shortText: {},
          text: {},
          custom: {}
        }
      };

      answer.customer = answerCode;

      // act/assert
      expect(
        getAnswer<FakeSection>({
          mappingField,
          mappingFields,
          questions,
          answers,
          enumLookupMap,
          expectedType: 'number',
          diagnosticMode
        })
      ).toBe(enumIndex);
    });

    it('translates an answer code into a mapped enum index when using a composite mappingField and 2 group numbers', () => {
      // arrange
      interface FakeSection {
        PropertyTypeCode: string;
      }

      const questionId = 'propertyTypeId';
      const questionIdGroup1 = createControlId({ questionId, groupNumber: 1, options: { noPrefix: true } });
      const questionIdGroup2 = createControlId({ questionId, groupNumber: 2, options: { noPrefix: true } });
      const mappingField = 'PropertyTypeCode';
      const answerCode1 = 'B1';
      const answerCode2 = 'C2';
      const enumIndex1 = 3;
      const enumIndex2 = 7;
      const question: Partial<HpQuestion> = {
        questionId,
        mappingField: mappingField,
        data: {
          textAndStyle: {
            standard: {
              controlType: 'DropDownList',
              questionText: 'Property type?'
            }
          }
        }
      };
      const questions: HpQuestionMap = {
        [questionId]: question as HpQuestion
      };
      const answer1: HpAnswer = {
        customer: '',
        default: null
      };
      const answer2: HpAnswer = {
        customer: '',
        default: null
      };
      const answers: HpAnswerMap = {
        [questionIdGroup1]: answer1,
        [questionIdGroup2]: answer2
      };
      const mappingFields: MappingFieldToQuestionIdMap = {
        [mappingField]: questionId
      };
      const enumLookupMap: SMap<HpValueToIndex> = {
        [mappingField]: {
          code: {
            [answerCode1]: enumIndex1,
            [answerCode2]: enumIndex2
          },
          enumType: {},
          overrideText: {},
          shortText: {},
          text: {},
          custom: {}
        }
      };

      answer1.customer = answerCode1;
      answer2.customer = answerCode2;

      // act/assert
      expect(
        getAnswer<FakeSection>({
          mappingField,
          mappingFields,
          questions,
          answers,
          enumLookupMap,
          groupNumber: 1,
          expectedType: 'number',
          diagnosticMode
        })
      ).toBe(enumIndex1);

      expect(
        getAnswer<FakeSection>({
          mappingField,
          mappingFields,
          questions,
          answers,
          enumLookupMap,
          groupNumber: 2,
          expectedType: 'number',
          diagnosticMode
        })
      ).toBe(enumIndex2);

      expect(
        getAnswer<FakeSection>({
          mappingField,
          mappingFields,
          questions,
          answers,
          enumLookupMap,
          groupNumber: 3,
          expectedType: 'number',
          diagnosticMode
        })
      ).toBeUndefined();
    });
  });

  describe('convertCSharpInterfaceToTypeScript', () => {
    it('works', () => {
      const code = `public interface IContentsCoverViewModel
    {
        bool? HasAnyHRHVItems { get; set; }
        bool? HasASafe { get; set; }
        bool? HasMobilePhones { get; set; }
        bool? HasOtherHRHVItems { get; set; }
        bool? HasPedalCycles { get; set; }
        bool? HasPortableComputers { get; set; }
        List<MobilePhoneViewModel> MobilePhones { get; set; }
        List<OtherHRHVItemViewModel> OtherHRHVItems { get; set; }
        List<PedalCycleViewModel> PedalCycles { get; set; }
        List<PortableComputerViewModel> PortableComputers { get; set; }
        Guid QuoteGuid { get; set; }
        SafeRatingType SafeRating { get; set; }
        decimal? TotalValueContents { get; set; }
        TypeOfCover TypeOfCover { get; set; }

        IEnumerable<ValidationResult> Validate(ValidationContext validationContext);
    }`;
      expect(convertCSharpInterfaceToTypeScript(code))
        .toBe(`export interface ContentsCoverNhiSection extends HpNhiSection
{
HasAnyHRHVItems: boolean | null;
HasASafe: boolean | null;
HasMobilePhones: boolean | null;
HasOtherHRHVItems: boolean | null;
HasPedalCycles: boolean | null;
HasPortableComputers: boolean | null;
MobilePhones: MobilePhoneDetail[];
OtherHRHVItems: OtherHRHVItemDetail[];
PedalCycles: PedalCycleDetail[];
PortableComputers: PortableComputerDetail[];
SafeRating: number;
TotalValueContents: number | null;
TypeOfCover: number;
}`);
    });
  });
});
