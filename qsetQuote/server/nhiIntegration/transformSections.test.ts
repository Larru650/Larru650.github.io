import {
  HpAnswerMap,
  HpAnswerValueTypes,
  HpDebugFlags,
  HpQuestion,
  HpQuestionDataTypes,
  HpQuestionMap,
  setDebugFlags
} from '@avantia/questionset-model';
import lodash from 'lodash';
import { v4 as uuid } from 'uuid';
import { createBlankAnswer } from '../../src/reducers/questionSetTools';
import {
  AboutYouAndYourHouseholdNhiSection,
  AboutYourPropertyNhiSection,
  BankruptcyDetail,
  BuildingConstructionNhiSection,
  BusinessStockDetail,
  ClaimsAndLossesDetail,
  ContentsCoverNhiSection,
  CriminalConvictionDetail,
  GdprConsentSection,
  HouseHolderDetail,
  InsuranceCancelledDetail,
  InsuringYourPropertyNhiSection,
  MeasuresToLimitFutureFloodingDetail,
  NhiAddressDetail,
  PropertyDetailsNhiSection,
  ResidentsNhiSection,
  WhoLivesAtPropertyOptionsDetail,
  YourContactDetailsNhiSection
} from './interfaces';
import { createInsuringYourPropertySection, transformSections } from './transformSections';
import { createMappingFieldMap } from './transformSectionsLibrary';
import { createMockQuestionSet } from './transformSectionTestCommon';

describe('transformSections', () => {
  describe('createInsuringYourPropertySection', () => {
    it('throws an exception if mapping fields are missing', () => {
      // act
      const diagnosticMode = true;

      // assert
      expect(() => createInsuringYourPropertySection({}, {}, {}, diagnosticMode)).toThrow(
        "There is no mapping field for 'TypeOfCover'."
      );
    });

    it('returns the correct model when answers and mappingFields are present', () => {
      // arrange
      const answers: HpAnswerMap = {};
      const questions: HpQuestionMap = {};
      const coverTypeAnswer = 0;
      const startDate = '2021-02-19';

      addQuestionAndAnswer({
        answerValue: coverTypeAnswer,
        mappingField: 'TypeOfCover',
        dataType: 'string',
        questions,
        answers
      });

      addQuestionAndAnswer({
        answerValue: startDate,
        mappingField: 'StartDate',
        dataType: 'date',
        questions,
        answers
      });

      const mappingFields = createMappingFieldMap(lodash.keys(questions), questions);

      // act
      const section = createInsuringYourPropertySection(answers, questions, mappingFields, true);

      // assert
      expect(section.TypeOfCover).toBe(coverTypeAnswer);
      expect(section.StartDate).toBe(startDate + 'T00:00:00.000Z');
      expect(section.SectionName).toBe('InsuringYourProperty');
    });
  });

  describe('transformSections', () => {
    it('generates correct QAB section models', () => {
      // arrange
      setDebugFlags(HpDebugFlags.None);
      const qset = createMockQuestionSet('full');

      // act
      const res = transformSections(qset, true);

      // These change on each transform to a UUID.
      const householdSection = res.AboutYouAndYourHousehold as AboutYouAndYourHouseholdNhiSection;
      const criminalConviction1NickName = householdSection.CriminalConvictions[0].NickName;
      const householder1NickName = householdSection.HouseHolders[0].NickName;
      const insuranceCancelled1NickName = householdSection.InsurancesCancelled[0].NickName;
      const jointPolicyHolder1NickName = householdSection.JointPolicyHolders[0].NickName;
      const liabilityClaim1NickName = householdSection.LiabilityClaims[0].NickName;
      const bCcjIva1NickName = householdSection.BCCJIVAs[0].NickName;
      const contactDetailsNickName = res.YourContactDetails.NickName;

      // assert
      expect(res).toStrictEqual({
        InsuringYourProperty: {
          TypeOfCover: 0,
          StartDate: '2021-03-16',
          SectionName: 'InsuringYourProperty'
        } as InsuringYourPropertyNhiSection,
        PropertyDetails: {
          NumberOfBedrooms: 4,
          PropertyAddress: {
            PropertyNameNumber: '10',
            AddressLine1: 'Huntspill Street',
            AddressLine2: '',
            TownCity: 'London',
            County: 'Greater London',
            PostCode: 'SW17 0AA',
            AddressLookupJson:
              '[{"summaryline":"10 Huntspill Street, London, Greater London, SW17 0AA","number":"10","premise":"10","street":"Huntspill Street","posttown":"London","county":"Greater London","postcode":"SW17 0AA"}]'
          } as NhiAddressDetail,
          PropertyBuildYear: 1928,
          PropertyTypeGrouping: 0,
          PropertyType: 2,
          WhoOwnsTheProperty: 2,
          YearsHeldBuildingInsurance: 5,
          MortgageProvider: null,
          MortgageReference: null,
          SectionName: 'PropertyDetails'
        } as PropertyDetailsNhiSection,
        BuildingConstruction: {
          IsRoofMoreThan33PercentFlat: true,
          IsRoofThatched: false,
          PercentageOfRoofFlat: 1,
          PropertyHasBelowGroundLevel: false,
          PropertyIsListed: true,
          PropertyListingGrade: 6,
          RoofConstructionMaterial: 2,
          RoofFlatPortionConstructionMaterial: 4,
          RoofLastInspectedYear: 2017,
          WallConstructionMaterialTypePictorial: 3,
          WallConstructionMaterialTypeSelected: 11,
          DateOfLastElectricCertificate: null,
          FireExtinguishingMeasures: 0,
          HasChimneyAndPosition: 0,
          HasOutbuilding: null,
          HasSparkArrestorsInActiveChimneys: null,
          HeatingSystemTypeInstalled: 0,
          HeightAboveThatchLowestChimneyPot: null,
          IsActiveChimneysLined: null,
          IsWoodFireOrStoveInstalled: null,
          Outbuildings: null,
          PropertyExtensionCompletedOn: null,
          PropertyHasExtension: null,
          PropertyLastRewired: null,
          PropertyWiringLastInspected: null,
          RoofLastRethatched: null,
          RoofThatchCondition: 0,
          RoofThatchLastInspected: null,
          RoofThatchTypeOfThatch: 0,
          RoofThatchedPercentage: 0,
          WallConstructionMaterialTypeDDL: 0,
          YearsLivedInThatchedProperty: null,
          SectionName: 'BuildingConstruction'
        } as BuildingConstructionNhiSection,

        AboutYourProperty: {
          AlarmAudibleOrCentrallyMonitored: 2,
          AreContractorDoingWork: true,
          AreYouLivingAtProperty: true,
          CauseOfGroundMovement: 7,
          CauseRemovedRectified: 3,
          DoesRenovationInvolveStructuralWork: false,
          FloodDefenceConstructionYear: 1982,
          FloodDefenceType: 5,
          Floods: [
            {
              CauseOfFlood: 2,
              FloodDate: '2014-08-12T00:00:00.000Z',
              FloodDepth: 0.5,
              Instance: 1,
              WereBuildingsAffected: true
            }
          ],
          GuaranteeExipirationYear: 2030,
          Has1MillionLiabilityInsurancePerContractor: true,
          HasAlarm: true,
          HasBeenUnderpinnedOrReinforcedFoundations: true,
          HasCommunityFloodDefence: true,
          HasContractorsAllRisksPolicy: false,
          HasFloodClaimInLast25Years: true,
          HasFloodReportFromEnvironmentAgency: true,
          HasFloodWatchServiceSubscription: true,
          HasKeysOperatedLocksOnWindows: true,
          HasPlanningPermission: true,
          HasPropertyFloodedInLast25Year: true,
          HasPropertyFloodedSince: false,
          HasSignedWaiver: false,
          HasSurveyFromQualifiedPro: false,
          HasTreesOver5MetersTallWithin7Meters: true,
          HasValuationSurveyReport: true,
          HowFarFromWaterIsNearestBuilding: 180,
          HowFarFromWaterIsNearestBuildingUnitOfMeasure: 1,
          HowHighAboveWaterLineIsLowestPartOfBuilding: 4,
          HowHighAboveWaterLineIsLowestPartOfBuildingUnitOfMeasure: 1,
          HowMuchHasBeenUnderpinned: 6,
          ImpactOfRenovation: 1,
          Is7500CoverSufficient: false,
          IsAlarmFittedAndMaintained: true,
          IsInGoodStateOfRepair: false,
          IsMovementLongstanding: true,
          IsPropertyInMiningArea: false,
          IsPropertySelfContained: true,
          // IsPropertyUndergoingGroundUpBasementExcavation: false,
          IsPropertyUndergoingRenovation: true,
          IsPropertyWithin200MetersOfWater: true,
          IsStructuralWorkCoveredByContractorGuarantee: true,
          MeasuresToLimitFutureFlooding: {
            HasAntifloodBarrier: false,
            HasBasementTanked: false,
            HasChangedGroundFloorToWaterproof: false,
            HasFloodboards: false,
            HasHeatedMovedUpstairs: false,
            HasNonReturnValvesFitted: false,
            HasOther: false,
            HasPlasticAirbrickCovers: false,
            HasRaisedSockets: false,
            HasSandbags: false,
            HasWoodenDoorsAndFramesReplaced: false
          } as MeasuresToLimitFutureFloodingDetail,
          NatureOfRenovation: 8,
          OutbuildingRebuildCoverAmount: 10500,
          PropertyRebuildCost: 235000,
          SubsidenceIsOnlyOccurrence: true,
          SubsidenceOccurrenceYear: 2008,
          SubsidenceSigns: {
            HasSignsOfDamage: false,
            HasStructuralMovement: false,
            HasSubsidenceClaim: false,
            IsMonitoredForSubsidence: true
          },
          TotalCostOfRenovation: 38000,
          Trees: [
            {
              Distance: 3.5,
              HasBeenPollaredMaintained: true,
              HasPreservationOrder: true,
              HasTreeRootsCausedDamaged: false,
              HeightInMetres: 5,
              Instance: 2,
              TreeLocation: 1,
              TreeType: 1
            }
          ],
          TypeOfLocksInMainEntrance: 2,
          TypeOfLocksInOtherExists: 5,
          TypeOfLocksInPatioDoor: 3,
          UnderpinnedBecauseInsuranceClaim: false,
          UnderpinnedYear: 2005,
          WasLocalAuthorityInvolvedInWork: false,
          WasMainStructureAffected: false,
          WereOtherPropertiesAffected: false,
          WhenRenovationIsDueToComplete: '2024-02-01T00:00:00.000Z',
          WhenRenovationIsDueToStart: '2020-07-15T00:00:00.000Z',
          WhyIsNotInGoodStateOfRepair: 3,
          SectionName: 'AboutYourProperty',
          ReportConfirmsNoMoreMovement: null
        } as AboutYourPropertyNhiSection,
        ContentsCover: {
          HasASafe: true,
          HasAnyHRHVItems: true,
          HasMobilePhones: true,
          HasOtherHRHVItems: true,
          HasPedalCycles: true,
          HasPortableComputers: true,
          MobilePhones: [
            {
              Category: 1,
              Description: 'Apple iPhone X',
              HasReceiptOrValuation: true,
              Instance: 1,
              IsAwayFromHomeCoverRequired: true,
              Value: 1100
            }
          ],
          OtherHRHVItems: [
            {
              Category: 14,
              Description: 'The Last Supper (Leonardo) - Replica',
              HasReceiptOrValuation: true,
              Instance: 2,
              IsAwayFromHomeCoverRequired: false,
              Value: 8500
            }
          ],
          PedalCycles: [
            {
              Category: 2,
              Description: 'Specialized Elite',
              HasReceiptOrValuation: true,
              Instance: 3,
              IsAwayFromHomeCoverRequired: false,
              Value: 1100
            }
          ],
          PortableComputers: [
            {
              Category: 3,
              Description: 'Microsoft Surface Laptop 3',
              HasReceiptOrValuation: true,
              Instance: 4,
              IsAwayFromHomeCoverRequired: true,
              Value: 2800
            }
          ],
          SafeRating: 10,
          SectionName: 'ContentsCover',
          TotalValueContents: 45000,
          TypeOfCover: 0
        } as ContentsCoverNhiSection,

        Residents: {
          BusinessStock: {
            AudioVisualOrComputerEquipment: false,
            CleaningLiquids: false,
            LiquidsFlammable: false,
            LiquidsNonFlammable: false,
            Metal: false,
            OtherBusinnessStock: true,
            PaperOnly: false,
            PreciousMetalsStones: true,
            SportsEquipment: false
          } as BusinessStockDetail,
          DaysUnoccupied: 2,
          FrequencyOfBusinessVisitors: 5,
          HowMuchCoverIsRequiredForBusinessStock: 2,
          IsAllEscortedOffProperty: true,
          IsBusinessUseMainSourceOfIncome: false,
          IsCommercialInsuranceInPlace: true,
          IsCoverRequiredForBusinessEquipment: true,
          IsEveningMealServed: false,
          IsGuestAreaSelfContained: true,
          IsPassThroughToOffice: false,
          IsPayingGuestStayingAtProperty: true,
          IsPropertyFurnished: true,
          IsPublicLiabliatyInPlace: true,
          IsStockHeldAtProperty: true,
          IsUsedForBusinessUse: true,
          MaximumNumberOfGuests: 3,
          NumberOfAdults: 4,
          NumberOfChildren: 3,
          NumberOfGuestBedrooms: 2,
          PropertyOccupancyType: 2,
          PropertyUsage: 1,
          SectionName: 'Residents',
          StaffAtProperty: 3,
          VisitorsAtPropertyType: 1,
          WhoLivesAtPropertyOptions: {
            HasAsylumSeekers: false,
            HasBedBreakfastGuests: false,
            HasDssRecipients: false,
            HasHolidayHomeGuests: false,
            HasLodgers: false,
            HasOtherFamilyMembers: true,
            HasOtherNonRelative: false,
            HasStudents: false,
            HasUnemployedTenants: false,
            HasWorkingTenant: false,
            HasYou: true,
            HasYourCloseFamily: false
          } as WhoLivesAtPropertyOptionsDetail
        } as ResidentsNhiSection,

        AboutYouAndYourHousehold: {
          BCCJIVAs: [
            {
              Incident: 'WEBBANK',
              Instance: 3,
              NickName: bCcjIva1NickName,
              Reason: 2,
              Situation: 2,
              YearOfIncident: 2012
            } as BankruptcyDetail
          ],
          ClaimsAndLosses: [
            {
              ClaimAmount: 7250,
              ClaimDate: '2018-06-18T00:00:00.000Z',
              EntryGain: 6,
              HasClaimHappenedAtProperty: true,
              HasSecurityImprovement: true,
              Instance: 6,
              IsClaimPaymentPending: false,
              TypeOfClaim: 76,
              WhatHasClaimAffected: 3
            } as ClaimsAndLossesDetail
          ],
          CriminalConvictions: [
            {
              CommunityServiceInHours: 20,
              DischargeInMonths: 1,
              FineAmount: 1650,
              HasCommunityService: true,
              HasDischarge: true,
              HasFine: true,
              HasPrisonSentence: true,
              HasSuspendedSentence: true,
              Incident: 'WEBCRIMCONV',
              Instance: 4,
              IsCommunityServiceServed: true,
              IsDischargeServed: true,
              IsFinePaid: true,
              IsPrisonSentenceServed: true,
              IsSuspendedSentenceServed: true,
              NickName: criminalConviction1NickName,
              PrisonSentenceInMonths: 3,
              SuspendedSentenceInMonths: 2,
              TypeOfConviction: 'Sexual harassment',
              YearOfConviction: 2012,
              YearOfOffence: 2011
            } as CriminalConvictionDetail
          ],
          DoesBusinessTradeFromProperty: false,
          HasAnyAdditionalJointPolicyHolders: true,
          HasBeenDeclaredBankruptBCCJIVA: true,
          HasClaimsAndLosses: true,
          HasCriminalConvictions: true,
          HasHomeInsuranceCancelled: true,
          HasLiabilityClaims: true,
          HouseHolders: [
            {
              DOB: '1969-09-19T00:00:00.000Z',
              Forename: 'Frederick',
              NickName: householder1NickName,
              Relationship: 5,
              Sex: 1,
              Surname: 'Wallace',
              Title: 1
            } as HouseHolderDetail
          ],
          InsurancesCancelled: [
            {
              EligibilityReason: 14,
              EligibilitySituation: 5,
              EligibilityYear: 2008,
              Incident: 'WEBCANC',
              Instance: 2,
              NickName: insuranceCancelled1NickName
            } as InsuranceCancelledDetail
          ],
          JointPolicyHolders: [
            {
              DOB: '1988-08-12T00:00:00.000Z',
              DoesBusinessTradeFromProperty: true,
              Forename: 'Jane',
              Instance: 1,
              NickName: jointPolicyHolder1NickName,
              Occupation: 'Script Writer',
              Relationship: 2,
              Sex: 1,
              Surname: 'Austen',
              Title: 2,
              TypeOfBusiness: 'Publishing - Local Press'
            }
          ],
          LiabilityClaims: [
            {
              Incident: 'WEBLIAB',
              Instance: 5,
              NickName: liabilityClaim1NickName,
              Reason: 'LIA01',
              Situation: '6',
              YearOfIncident: 1996
            }
          ],
          Occupation: 'Travel Consultant',
          PolicyHolderDOB: '1966-04-10T00:00:00.000Z',
          SectionName: 'AboutYouAndYourHousehold',
          TypeOfBusiness: 'Catering - Licensed'
        } as AboutYouAndYourHouseholdNhiSection,
        YourContactDetails: {
          Address: {
            AddressLine1: 'Adams Croft',
            AddressLine2: 'Brookwood',
            AddressLookupJson:
              '[{"summaryline":"7 Adams Croft, Brookwood, Woking, Surrey, GU24 0QN","number":"7","premise":"7","street":"Adams Croft","dependentlocality":"Brookwood","posttown":"Woking","county":"Surrey","postcode":"GU24 0QN"}]',
            County: 'Surrey',
            PostCode: 'GU24 0QN',
            PropertyNameNumber: '7',
            TownCity: 'Woking'
          } as NhiAddressDetail,
          DOB: '1966-04-10T00:00:00.000Z',
          DayTimePhoneNumber: '0208562185',
          EmailAddress: 'reginald.nhitest@avantiagroup.co.uk',
          Forename: 'Reginald',
          IsInsuredAddressSameForPostalAddress: false,
          MaritalStatus: 2,
          MarketingOptOut: false,
          MobilePhoneNumber: '0825751892',
          NickName: contactDetailsNickName,
          Relationships: [],
          SectionName: 'YourContactDetails',
          Sex: 1,
          StopCorrespondence: false,
          Surname: 'NhiTest',
          Title: 3
        } as YourContactDetailsNhiSection,

        GdprConsent: {
          CanEmail: true,
          CanPost: false,
          CanSMS: false,
          CanTelephone: false
        } as GdprConsentSection
      });
    });
  });
});

interface AddQuestionAndAnswerProps {
  answerValue: HpAnswerValueTypes;
  dataType: HpQuestionDataTypes;
  mappingField: string;
  questions: HpQuestionMap;
  answers: HpAnswerMap;
}

function addQuestionAndAnswer({
  answerValue,
  dataType,
  mappingField,
  questions,
  answers
}: AddQuestionAndAnswerProps): void {
  const questionId = uuid();
  addQuestion(questionId, dataType, mappingField, questions);
  addAnswer(questionId, answerValue, answers);
}

function addAnswer(questionId: string, answerValue: HpAnswerValueTypes, answers: HpAnswerMap): void {
  const answer = createBlankAnswer(HpDebugFlags.UnitTests);
  answer.customer = answerValue;
  answers[questionId] = answer;
}

function addQuestion(
  questionId: string,
  dataType: HpQuestionDataTypes,
  mappingField: string,
  questions: HpQuestionMap
): void {
  const question: Partial<HpQuestion> = {
    questionId,
    mappingField,
    dataType
  };
  questions[questionId] = question as HpQuestion;
}
