import {
  HpAnswerMap,
  HpAnswerValueTypes,
  HpQuestionMap,
  HpQuestionSet,
  MaxGroupsAllowed
} from '@avantia/questionset-model';
import { ensureDefined } from '../../src/tools/utilities';
import {
  AboutYouAndYourHouseholdNhiSection,
  AboutYourPropertyNhiSection,
  AllNhiSections,
  BankruptcyDetail,
  BuildingConstructionNhiSection,
  BusinessStockDetail,
  ClaimsAndLossesDetail,
  ContentsCoverNhiSection,
  CriminalConvictionDetail,
  FloodDetail,
  GdprConsentSection,
  HouseHolderDetail,
  InsuranceCancelledDetail,
  InsuringYourPropertyNhiSection,
  JointPolicyHolderDetail,
  LiabilityClaimDetail,
  ListedItemDetail,
  MappingFieldToQuestionIdMap,
  NhiAddressDetail,
  NhiExpectedType,
  PropertyDetailsNhiSection,
  RepeatedDetail,
  ResidentsNhiSection,
  SubsidenceSignsDetail,
  TreeDetail,
  WhoLivesAtPropertyOptionsDetail,
  YourContactDetailsNhiSection
} from './interfaces';
import { qabEnumTypes } from './qabEnumTypes';
import {
  createDetailWithBooleanAnswers,
  createMappingFieldMap,
  getAnswer,
  getListOfVisibleQuestionIds
} from './transformSectionsLibrary';

interface Counter {
  get(): number;
  increment(): void;
}

function createCounter(): Counter {
  let instanceCount = 1;
  const counter: Counter = {
    get: () => {
      return instanceCount;
    },
    increment: () => {
      instanceCount++;
    }
  };
  return counter;
}

const unitOfMesureTypeMetre: number = ensureDefined(
  qabEnumTypes.UnitOfMeasureType.filter((m) => m.enumType === 'Metres')[0].index,
  'unitOfMeasure'
);

const maleSex: number = ensureDefined(qabEnumTypes.Sex.filter((m) => m.text === 'Male')[0].index, 'maleSex');

export function transformSections(questionSet: HpQuestionSet, diagnosticMode: boolean): AllNhiSections {
  const { questions, answers } = questionSet;
  const visibleQuestionIds = getListOfVisibleQuestionIds(questionSet);
  const mappingFields = createMappingFieldMap(visibleQuestionIds, questions);
  const answerMap = answers as HpAnswerMap;
  const insuringYourProperty = createInsuringYourPropertySection(answerMap, questions, mappingFields, diagnosticMode);
  const propertyDetails = createPropertyDetailsSection(answerMap, questions, mappingFields, diagnosticMode);

  return {
    InsuringYourProperty: insuringYourProperty,
    PropertyDetails: propertyDetails,
    BuildingConstruction: createBuildingConstructionSection(answerMap, questions, mappingFields, diagnosticMode),
    AboutYourProperty: createAboutYourPropertySection(
      answerMap,
      questions,
      mappingFields,
      createCounter(),
      diagnosticMode
    ),
    ContentsCover: createContentsCoverSection(answerMap, questions, mappingFields, createCounter(), diagnosticMode),
    Residents: createResidentsSection(answerMap, questions, mappingFields, diagnosticMode),
    AboutYouAndYourHousehold: createAboutYouAndYourHouseholdSection(
      answerMap,
      questions,
      mappingFields,
      createCounter(),
      diagnosticMode
    ),
    YourContactDetails: createYourContactDetailsSection(
      answerMap,
      questions,
      mappingFields,
      propertyDetails.PropertyAddress,
      diagnosticMode
    ),
    GdprConsent: createGdprConsent(answers, questions, mappingFields, diagnosticMode)
  };
}

export function createInsuringYourPropertySection(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  diagnosticMode: boolean
): InsuringYourPropertyNhiSection {
  function getSectionAnswer(
    mappingField: keyof InsuringYourPropertyNhiSection,
    expectedType: NhiExpectedType
  ): HpAnswerValueTypes {
    return getAnswer<InsuringYourPropertyNhiSection>({
      mappingField,
      mappingFields,
      questions,
      answers,
      expectedType: expectedType,
      diagnosticMode
    });
  }

  const section: InsuringYourPropertyNhiSection = {
    TypeOfCover: getSectionAnswer('TypeOfCover', 'number') as number,
    StartDate: getSectionAnswer('StartDate', 'string') as string,
    SectionName: 'InsuringYourProperty'
  };

  return section;
}

export function createPropertyDetailsSection(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  diagnosticMode: boolean
): PropertyDetailsNhiSection {
  function getSectionAnswer(
    mappingField: keyof PropertyDetailsNhiSection,
    expectedType: NhiExpectedType
  ): HpAnswerValueTypes {
    return getAnswer<PropertyDetailsNhiSection>({
      mappingField,
      mappingFields,
      questions,
      answers,
      expectedType,
      diagnosticMode
    });
  }

  const section: PropertyDetailsNhiSection = {
    NumberOfBedrooms: getSectionAnswer('NumberOfBedrooms', 'number') as number,
    PropertyAddress: getAddressDetail('', answers, questions, mappingFields, diagnosticMode),
    PropertyBuildYear: getSectionAnswer('PropertyBuildYear', 'number') as number,
    PropertyType: getSectionAnswer('PropertyType', 'number') as number,
    PropertyTypeGrouping: getSectionAnswer('PropertyTypeGrouping', 'number') as number,
    WhoOwnsTheProperty: getSectionAnswer('WhoOwnsTheProperty', 'number') as number,
    YearsHeldBuildingInsurance: getSectionAnswer('YearsHeldBuildingInsurance', 'number') as number,
    MortgageProvider: null,
    MortgageReference: null,
    SectionName: 'PropertyDetails'
  };

  return section;
}

export function createBuildingConstructionSection(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  diagnosticMode: boolean
): BuildingConstructionNhiSection {
  function getSectionAnswer(
    mappingField: keyof BuildingConstructionNhiSection,
    expectedType?: NhiExpectedType
  ): HpAnswerValueTypes {
    return getAnswer<BuildingConstructionNhiSection>({
      mappingField,
      mappingFields,
      questions,
      answers,
      expectedType: expectedType || 'string',
      diagnosticMode
    });
  }

  const isRoofMoreThan33PercentFlat = getSectionAnswer('IsRoofMoreThan33PercentFlat', 'boolean') as boolean;
  const section: BuildingConstructionNhiSection = {
    IsRoofMoreThan33PercentFlat: isRoofMoreThan33PercentFlat,
    IsRoofThatched: getSectionAnswer('IsRoofThatched', 'boolean') as boolean,
    PercentageOfRoofFlat: getSectionAnswer('PercentageOfRoofFlat', 'number') as number,
    PropertyHasBelowGroundLevel: getSectionAnswer('PropertyHasBelowGroundLevel', 'boolean') as boolean,
    PropertyIsListed: getSectionAnswer('PropertyIsListed', 'boolean') as boolean,
    PropertyListingGrade: getSectionAnswer('PropertyListingGrade', 'number') as number,
    RoofConstructionMaterial: getSectionAnswer('RoofConstructionMaterial', 'number') as number,
    RoofFlatPortionConstructionMaterial: isRoofMoreThan33PercentFlat ? 4 : 0, // The value '4' is hard-coded in the existing QAB site (see custom.js line 359)
    RoofLastInspectedYear: isRoofMoreThan33PercentFlat === true ? 2017 : null, // The value '2017' is hard-coded in the existing QAB site (see custom.js line 361)
    WallConstructionMaterialTypePictorial: getSectionAnswer(
      'WallConstructionMaterialTypePictorial',
      'number'
    ) as number,
    WallConstructionMaterialTypeSelected: getSectionAnswer('WallConstructionMaterialTypeSelected', 'number') as number,
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
  };

  return section;
}

export function createAboutYourPropertySection(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  counter: Counter,
  diagnosticMode: boolean
): AboutYourPropertyNhiSection {
  function getSectionAnswer(
    mappingField: keyof AboutYourPropertyNhiSection,
    expectedType?: NhiExpectedType
  ): HpAnswerValueTypes {
    return getAnswer<AboutYourPropertyNhiSection>({
      mappingField,
      mappingFields,
      questions,
      answers,
      expectedType: expectedType || 'boolean',
      diagnosticMode
    });
  }

  const subsidenceSigns = createDetailWithBooleanAnswers<AboutYourPropertyNhiSection, SubsidenceSignsDetail>(
    'SubsidenceSigns',
    ['HasSignsOfDamage', 'HasStructuralMovement', 'HasSubsidenceClaim', 'IsMonitoredForSubsidence'],
    getSectionAnswer
  );

  const hasBeenUnderpinnedOrReinforcedFoundations = getSectionAnswer(
    'HasBeenUnderpinnedOrReinforcedFoundations'
  ) as boolean;

  const section: AboutYourPropertyNhiSection = {
    PropertyRebuildCost: getSectionAnswer('PropertyRebuildCost', 'number') as number,
    Is7500CoverSufficient: getSectionAnswer('Is7500CoverSufficient') as boolean,
    OutbuildingRebuildCoverAmount: getSectionAnswer('OutbuildingRebuildCoverAmount', 'number') as number,
    IsInGoodStateOfRepair: getSectionAnswer('IsInGoodStateOfRepair') as boolean,
    WhyIsNotInGoodStateOfRepair: getSectionAnswer('WhyIsNotInGoodStateOfRepair', 'number') as number,

    // HasSubsidenceClaim: getSectionAnswerBool('HasSubsidenceClaim'),
    // IsMonitoredForSubsidence: getSectionAnswerBool('IsMonitoredForSubsidence'),
    // HasStructuralMovement: getSectionAnswerBool('HasStructuralMovement'),
    // HasSignsOfDamage: getSectionAnswerBool('HasSignsOfDamage'),

    SubsidenceOccurrenceYear: getSectionAnswer('SubsidenceOccurrenceYear', 'number') as number,
    SubsidenceIsOnlyOccurrence: getSectionAnswer('SubsidenceIsOnlyOccurrence') as boolean,
    CauseOfGroundMovement: getSectionAnswer('CauseOfGroundMovement', 'number') as number,
    WasMainStructureAffected: getSectionAnswer('WasMainStructureAffected') as boolean,
    WereOtherPropertiesAffected: getSectionAnswer('WereOtherPropertiesAffected') as boolean,
    CauseRemovedRectified: getSectionAnswer('CauseRemovedRectified', 'number') as number,
    IsPropertyInMiningArea: getSectionAnswer('IsPropertyInMiningArea') as boolean,
    HasValuationSurveyReport: getSectionAnswer('HasValuationSurveyReport') as boolean,
    IsMovementLongstanding: getSectionAnswer('IsMovementLongstanding') as boolean,
    HasTreesOver5MetersTallWithin7Meters: getSectionAnswer('HasTreesOver5MetersTallWithin7Meters') as boolean,
    HasBeenUnderpinnedOrReinforcedFoundations: hasBeenUnderpinnedOrReinforcedFoundations,
    UnderpinnedYear: getSectionAnswer('UnderpinnedYear', 'number') as number,
    HowMuchHasBeenUnderpinned: getSectionAnswer('HowMuchHasBeenUnderpinned', 'number') as number,
    UnderpinnedBecauseInsuranceClaim: false, // hasBeenUnderpinnedOrReinforcedFoundations, // see custom.js line 465
    HasSurveyFromQualifiedPro: false, // doesn't appear to be used
    IsStructuralWorkCoveredByContractorGuarantee: getSectionAnswer(
      'IsStructuralWorkCoveredByContractorGuarantee'
    ) as boolean,
    GuaranteeExipirationYear: getSectionAnswer('GuaranteeExipirationYear', 'number') as number,
    WasLocalAuthorityInvolvedInWork: getSectionAnswer('WasLocalAuthorityInvolvedInWork') as boolean,
    HasPropertyFloodedInLast25Year: getSectionAnswer('HasPropertyFloodedInLast25Year') as boolean,
    HasPropertyFloodedSince: getSectionAnswer('HasPropertyFloodedSince', 'boolean') as boolean,

    // HasAntifloodBarrier: getSectionAnswerBool('HasAntifloodBarrier'),
    // HasSandbags: getSectionAnswerBool('HasSandbags'),
    // HasFloodboards: getSectionAnswerBool('HasFloodboards'),
    // HasPlasticAirbrickCovers: getSectionAnswerBool('HasPlasticAirbrickCovers'),
    // HasChangedGroundFloorToWaterproof: getSectionAnswerBool('HasChangedGroundFloorToWaterproof'),
    // HasRaisedSockets: getSectionAnswerBool('HasRaisedSockets'),
    // HasHeatedMovedUpstairs: getSectionAnswerBool('HasHeatedMovedUpstairs'),
    // HasNonReturnValvesFitted: getSectionAnswerBool('HasNonReturnValvesFitted'),
    // HasWoodenDoorsAndFramesReplaced: getSectionAnswerBool('HasWoodenDoorsAndFramesReplaced'),
    // HasBasementTanked: getSectionAnswerBool('HasBasementTanked'),
    // HasOther: getSectionAnswerBool('HasOther'),

    HasFloodClaimInLast25Years: getSectionAnswer('HasPropertyFloodedInLast25Year') as boolean, // see custom.js line 476
    HasFloodReportFromEnvironmentAgency: getSectionAnswer('HasPropertyFloodedInLast25Year') as boolean, // see custom.js line 476
    HasFloodWatchServiceSubscription: getSectionAnswer('HasPropertyFloodedInLast25Year') as boolean, // see custom.js line 476
    HasCommunityFloodDefence: getSectionAnswer('HasCommunityFloodDefence') as boolean,
    FloodDefenceConstructionYear: getSectionAnswer('FloodDefenceConstructionYear', 'number') as number,
    FloodDefenceType: getSectionAnswer('FloodDefenceType', 'number') as number,

    IsPropertyWithin200MetersOfWater: getSectionAnswer('IsPropertyWithin200MetersOfWater') as boolean,
    HowFarFromWaterIsNearestBuilding: getSectionAnswer('HowFarFromWaterIsNearestBuilding', 'number') as number,
    HowFarFromWaterIsNearestBuildingUnitOfMeasure: unitOfMesureTypeMetre, // see custom.js line 496
    HowHighAboveWaterLineIsLowestPartOfBuilding: 4, // see custom.js line 500
    HowHighAboveWaterLineIsLowestPartOfBuildingUnitOfMeasure: unitOfMesureTypeMetre,
    IsPropertyUndergoingRenovation: getSectionAnswer('IsPropertyUndergoingRenovation') as boolean,
    DoesRenovationInvolveStructuralWork: false, // see custom.js line 2295
    NatureOfRenovation: getSectionAnswer('NatureOfRenovation', 'number') as number,
    HasPlanningPermission: getSectionAnswer('IsPropertyUndergoingRenovation') as boolean, // see custom.js line 509
    WhenRenovationIsDueToStart: getSectionAnswer('WhenRenovationIsDueToStart', 'string') as string,
    WhenRenovationIsDueToComplete: getSectionAnswer('WhenRenovationIsDueToComplete', 'string') as string,
    AreContractorDoingWork: getSectionAnswer('AreContractorDoingWork') as boolean,
    HasContractorsAllRisksPolicy: false, // see custom.js line 2480
    Has1MillionLiabilityInsurancePerContractor: getSectionAnswer(
      'Has1MillionLiabilityInsurancePerContractor'
    ) as boolean,
    HasSignedWaiver: getSectionAnswer('HasSignedWaiver') as boolean,
    AreYouLivingAtProperty: getSectionAnswer('AreYouLivingAtProperty') as boolean,
    TotalCostOfRenovation: getSectionAnswer('TotalCostOfRenovation', 'number') as number,
    ImpactOfRenovation: getSectionAnswer('ImpactOfRenovation', 'number') as number,
    IsPropertySelfContained: getSectionAnswer('IsPropertySelfContained') as boolean,
    TypeOfLocksInMainEntrance: getSectionAnswer('TypeOfLocksInMainEntrance', 'number') as number,
    TypeOfLocksInPatioDoor: getSectionAnswer('TypeOfLocksInPatioDoor', 'number') as number,
    TypeOfLocksInOtherExists: getSectionAnswer('TypeOfLocksInOtherExists', 'number') as number,
    HasKeysOperatedLocksOnWindows: getSectionAnswer('HasKeysOperatedLocksOnWindows') as boolean,
    HasAlarm: getSectionAnswer('HasAlarm') as boolean,
    IsAlarmFittedAndMaintained: getSectionAnswer('IsAlarmFittedAndMaintained') as boolean,
    AlarmAudibleOrCentrallyMonitored: getSectionAnswer('AlarmAudibleOrCentrallyMonitored', 'number') as number,
    Floods: getFloodDetails(answers, questions, mappingFields, counter, diagnosticMode),

    // This section is no longer used, so all fields are set to false.
    MeasuresToLimitFutureFlooding: {
      HasAntifloodBarrier: false,
      HasSandbags: false,
      HasFloodboards: false,
      HasPlasticAirbrickCovers: false,
      HasChangedGroundFloorToWaterproof: false,
      HasRaisedSockets: false,
      HasHeatedMovedUpstairs: false,
      HasNonReturnValvesFitted: false,
      HasWoodenDoorsAndFramesReplaced: false,
      HasBasementTanked: false,
      HasOther: false
    },

    SubsidenceSigns: subsidenceSigns,
    Trees: getTreeDetails(answers, questions, mappingFields, counter, diagnosticMode),

    ReportConfirmsNoMoreMovement: null,

    SectionName: 'AboutYourProperty'
  };

  return section;
}

export function createContentsCoverSection(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  counter: Counter,
  diagnosticMode: boolean
): ContentsCoverNhiSection {
  function getSectionAnswer(
    mappingField: keyof ContentsCoverNhiSection,
    expectedType: NhiExpectedType
  ): HpAnswerValueTypes {
    return getAnswer<ContentsCoverNhiSection>({
      mappingField,
      mappingFields,
      questions,
      answers,
      expectedType,
      diagnosticMode
    });
  }

  const section: ContentsCoverNhiSection = {
    HasASafe: getSectionAnswer('HasASafe', 'boolean') as boolean,
    HasAnyHRHVItems: getSectionAnswer('HasAnyHRHVItems', 'boolean') as boolean,
    HasMobilePhones: getSectionAnswer('HasMobilePhones', 'boolean') as boolean,
    HasOtherHRHVItems: getSectionAnswer('HasOtherHRHVItems', 'boolean') as boolean,
    HasPedalCycles: getSectionAnswer('HasPedalCycles', 'boolean') as boolean,
    HasPortableComputers: getSectionAnswer('HasPortableComputers', 'boolean') as boolean,
    MobilePhones: getListedItemDetail('MobilePhone', answers, questions, mappingFields, counter, diagnosticMode),
    OtherHRHVItems: getListedItemDetail('HighRiskItem', answers, questions, mappingFields, counter, diagnosticMode),
    PedalCycles: getListedItemDetail('PedalCycle', answers, questions, mappingFields, counter, diagnosticMode),
    PortableComputers: getListedItemDetail(
      'PortableComputer',
      answers,
      questions,
      mappingFields,
      counter,
      diagnosticMode
    ),
    SafeRating: getSectionAnswer('SafeRating', 'number') as number,
    TotalValueContents: getSectionAnswer('TotalValueContents', 'number') as number,
    TypeOfCover: getSectionAnswer('TypeOfCover', 'number') as number,
    SectionName: 'ContentsCover'
  };
  return section;
}

export function createResidentsSection(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  diagnosticMode: boolean
): ResidentsNhiSection {
  function getSectionAnswer(
    mappingField: keyof ResidentsNhiSection,
    expectedType: NhiExpectedType
  ): HpAnswerValueTypes {
    return getAnswer<ResidentsNhiSection>({
      mappingField,
      mappingFields,
      questions,
      answers,
      expectedType,
      diagnosticMode
    });
  }

  const businessStock: BusinessStockDetail = createDetailWithBooleanAnswers<ResidentsNhiSection, BusinessStockDetail>(
    'BusinessStock',
    [
      'AudioVisualOrComputerEquipment',
      'CleaningLiquids',
      'LiquidsFlammable',
      'LiquidsNonFlammable',
      'Metal',
      'OtherBusinnessStock',
      'PaperOnly',
      'PreciousMetalsStones',
      'SportsEquipment'
    ],
    getSectionAnswer
  );

  const whoLivesAtPropertyOptions: WhoLivesAtPropertyOptionsDetail = createDetailWithBooleanAnswers<
    ResidentsNhiSection,
    WhoLivesAtPropertyOptionsDetail
  >(
    'WhoLivesAtPropertyOptions',
    [
      'HasAsylumSeekers',
      'HasBedBreakfastGuests',
      'HasDssRecipients',
      'HasHolidayHomeGuests',
      'HasLodgers',
      'HasOtherFamilyMembers',
      'HasOtherNonRelative',
      'HasStudents',
      'HasUnemployedTenants',
      'HasWorkingTenant',
      'HasYou',
      'HasYourCloseFamily'
    ],
    getSectionAnswer
  );

  const isStockHeldAtProperty = getSectionAnswer('IsStockHeldAtProperty', 'boolean') as boolean;
  const isPayingGuestStayingAtProperty = getSectionAnswer('IsPayingGuestStayingAtProperty', 'boolean') as boolean;

  const section: ResidentsNhiSection = {
    BusinessStock: businessStock,
    DaysUnoccupied: getSectionAnswer('DaysUnoccupied', 'number') as number,
    FrequencyOfBusinessVisitors: getSectionAnswer('FrequencyOfBusinessVisitors', 'number') as number,
    HowMuchCoverIsRequiredForBusinessStock: getSectionAnswer(
      'HowMuchCoverIsRequiredForBusinessStock',
      'number'
    ) as number,
    IsAllEscortedOffProperty: isStockHeldAtProperty, // see custom.js lines 2278, 2284
    IsBusinessUseMainSourceOfIncome: getSectionAnswer('IsBusinessUseMainSourceOfIncome', 'boolean') as boolean,
    IsCommercialInsuranceInPlace: getSectionAnswer('IsCommercialInsuranceInPlace', 'boolean') as boolean,
    IsCoverRequiredForBusinessEquipment: getSectionAnswer('IsCoverRequiredForBusinessEquipment', 'boolean') as boolean,
    IsEveningMealServed: getSectionAnswer('IsEveningMealServed', 'boolean') as boolean,
    IsGuestAreaSelfContained: isPayingGuestStayingAtProperty, // see custom.js line 788
    IsPassThroughToOffice: getSectionAnswer('IsPassThroughToOffice', 'boolean') as boolean,
    IsPayingGuestStayingAtProperty: isPayingGuestStayingAtProperty,
    IsPropertyFurnished: getSectionAnswer('IsPropertyFurnished', 'boolean') as boolean,
    IsPublicLiabliatyInPlace: getSectionAnswer('IsPublicLiabliatyInPlace', 'boolean') as boolean,
    IsStockHeldAtProperty: isStockHeldAtProperty,
    IsUsedForBusinessUse: getSectionAnswer('IsUsedForBusinessUse', 'boolean') as boolean,
    MaximumNumberOfGuests: getSectionAnswer('MaximumNumberOfGuests', 'number') as number,
    NumberOfAdults: getSectionAnswer('NumberOfAdults', 'number') as number,
    NumberOfChildren: getSectionAnswer('NumberOfChildren', 'number') as number,
    NumberOfGuestBedrooms: getSectionAnswer('NumberOfGuestBedrooms', 'number') as number,
    PropertyOccupancyType: getSectionAnswer('PropertyOccupancyType', 'number') as number,
    PropertyUsage: getSectionAnswer('PropertyUsage', 'number') as number,
    StaffAtProperty: getSectionAnswer('StaffAtProperty', 'number') as number,
    VisitorsAtPropertyType: isStockHeldAtProperty ? 1 : 0, // doesn't appear to be visible
    WhoLivesAtPropertyOptions: whoLivesAtPropertyOptions,
    SectionName: 'Residents'
  };
  return section;
}

export function createAboutYouAndYourHouseholdSection(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  counter: Counter,
  diagnosticMode: boolean
): AboutYouAndYourHouseholdNhiSection {
  function getSectionAnswer(
    mappingField: keyof AboutYouAndYourHouseholdNhiSection,
    expectedType: NhiExpectedType
  ): HpAnswerValueTypes {
    return getAnswer<AboutYouAndYourHouseholdNhiSection>({
      mappingField,
      mappingFields,
      questions,
      answers,
      expectedType,
      diagnosticMode
    });
  }

  const householders: HouseHolderDetail[] = [];
  const jointPolicyHolders = getJointPolicyHolderDetails(
    answers,
    questions,
    mappingFields,
    householders,
    counter,
    diagnosticMode
  );

  const section: AboutYouAndYourHouseholdNhiSection = {
    HasAnyAdditionalJointPolicyHolders: getSectionAnswer('HasAnyAdditionalJointPolicyHolders', 'boolean') as boolean,
    HasBeenDeclaredBankruptBCCJIVA: getSectionAnswer('HasBeenDeclaredBankruptBCCJIVA', 'boolean') as boolean,
    HasClaimsAndLosses: getSectionAnswer('HasClaimsAndLosses', 'boolean') as boolean,
    HasCriminalConvictions: getSectionAnswer('HasCriminalConvictions', 'boolean') as boolean,
    HasHomeInsuranceCancelled: getSectionAnswer('HasHomeInsuranceCancelled', 'boolean') as boolean,
    HasLiabilityClaims: getSectionAnswer('HasLiabilityClaims', 'boolean') as boolean,
    Occupation: getSectionAnswer('Occupation', 'string') as string,
    PolicyHolderDOB: getSectionAnswer('PolicyHolderDOB', 'string') as string,
    TypeOfBusiness: getSectionAnswer('TypeOfBusiness', 'string') as string,

    // Groups
    JointPolicyHolders: jointPolicyHolders,
    InsurancesCancelled: getInsuranceCancelledDetails(
      answers,
      questions,
      mappingFields,
      householders,
      counter,
      diagnosticMode
    ),
    BCCJIVAs: getBankruptcyDetails(answers, questions, mappingFields, householders, counter, diagnosticMode),
    CriminalConvictions: getCriminalConvictionDetails(
      answers,
      questions,
      mappingFields,
      householders,
      counter,
      diagnosticMode
    ),
    LiabilityClaims: getLiabilityClaimDetails(answers, questions, mappingFields, householders, counter, diagnosticMode),
    ClaimsAndLosses: getClaimsAndLossesDetails(answers, questions, mappingFields, counter, diagnosticMode),
    HouseHolders: householders,

    DoesBusinessTradeFromProperty: false,
    SectionName: 'AboutYouAndYourHousehold'
  };

  section.HouseHolders = section.HouseHolders.filter(
    (hh) => section.JointPolicyHolders.indexOf(hh as JointPolicyHolderDetail) < 0
  );

  return section;
}

export function createYourContactDetailsSection(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  riskAddress: NhiAddressDetail,
  diagnosticMode: boolean
): YourContactDetailsNhiSection {
  function getSectionAnswer(
    mappingField: keyof YourContactDetailsNhiSection,
    expectedType: NhiExpectedType
  ): HpAnswerValueTypes {
    return getAnswer<YourContactDetailsNhiSection>({
      mappingField,
      mappingFields,
      questions,
      answers,
      expectedType,
      diagnosticMode
    });
  }

  let address = getAddressDetail('Correspondence', answers, questions, mappingFields, diagnosticMode);
  if (address.PostCode === null) {
    address = riskAddress;
  }

  const section: YourContactDetailsNhiSection = {
    Address: address,
    DOB: getSectionAnswer('PolicyHolderDOB' as any, 'string') as string,
    DayTimePhoneNumber: getSectionAnswer('DayTimePhoneNumber', 'string') as string,
    EmailAddress: getSectionAnswer('EmailAddress', 'string') as string,
    Forename: getSectionAnswer('Forename', 'string') as string,
    IsInsuredAddressSameForPostalAddress: getSectionAnswer(
      'IsInsuredAddressSameForPostalAddress',
      'boolean'
    ) as boolean,
    MaritalStatus: getSectionAnswer('MaritalStatus', 'number') as number,
    MarketingOptOut: false, // not shown on existing Q&B
    MobilePhoneNumber: getSectionAnswer('MobilePhoneNumber', 'string') as string,
    NickName: createNickName(),
    Relationships: [], // TODO Implement this; getSectionAnswer('Relationships', 'number') as number,
    Sex: maleSex,
    StopCorrespondence: false, // not shown on existing Q&B
    Surname: getSectionAnswer('Surname', 'string') as string,
    Title: getSectionAnswer('Title', 'number') as number,
    SectionName: 'YourContactDetails'
  };
  return section;
}

type ListedItemDetailTypes = 'MobilePhone' | 'PedalCycle' | 'PortableComputer' | 'HighRiskItem';

function getListedItemDetail(
  type: ListedItemDetailTypes,
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  counter: Counter,
  diagnosticMode: boolean
): ListedItemDetail[] {
  let category: number | undefined;
  if (type !== 'HighRiskItem') {
    const item = ensureDefined(
      qabEnumTypes.ListedItemCategory.filter((e) => e.enumType === type)[0],
      'ListedItemCategory.' + type
    );
    category = item.index;
  }

  return getRepeatedDetails<ListedItemDetail>({
    propertyPrefix: type,
    answers,
    questions,
    mappingFields,
    counter,
    diagnosticMode,
    createDetail: ({ groupNumber, getAnswer }) => {
      const detail: ListedItemDetail = {
        Category: category !== undefined ? category : (getAnswer('Category', groupNumber, 'number') as number),
        Description: getAnswer('Description', groupNumber, 'string') as string,
        HasReceiptOrValuation: true, // see custom.js lines 1047, 1061, 1141
        IsAwayFromHomeCoverRequired: getAnswer('IsAwayFromHomeCoverRequired', groupNumber, 'boolean') as boolean,
        Value: getAnswer('Value', groupNumber, 'number') as number
      };
      return detail;
    },
    isPopulated: (detail) => {
      if (isNotAnEnum(detail.Category) || !detail.Description || isNotAnEnum(detail.Value)) {
        return false;
      }

      return true;
    }
  });
}

function isNotAnEnum(value: number): boolean {
  return value === undefined || value === null || value <= 0;
}

function getAddressDetail(
  prefix: '' | 'Correspondence',
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  diagnosticMode: boolean
): NhiAddressDetail {
  function getAddressAnswer(mappingField: keyof NhiAddressDetail): string {
    return getAnswer<NhiAddressDetail>({
      mappingField: (prefix + mappingField) as any,
      mappingFields,
      questions,
      answers,
      expectedType: 'string',
      diagnosticMode
    }) as string;
  }

  const detail: NhiAddressDetail = {
    PropertyNameNumber: getAddressAnswer('PropertyNameNumber'),
    AddressLine1: getAddressAnswer('AddressLine1'),
    AddressLine2: getAddressAnswer('AddressLine2'),
    TownCity: getAddressAnswer('TownCity'),
    County: getAddressAnswer('County'),
    PostCode: getAddressAnswer('PostCode'),
    AddressLookupJson: getAddressAnswer('AddressLookupJson')
  };
  return detail;
}

function getFloodDetails(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  counter: Counter,
  diagnosticMode: boolean
): FloodDetail[] {
  return getRepeatedDetails<FloodDetail>({
    propertyPrefix: '',
    answers,
    questions,
    mappingFields,
    counter,
    diagnosticMode,
    createDetail: ({ groupNumber, getAnswer }) => {
      const detail: FloodDetail = {
        CauseOfFlood: getAnswer('CauseOfFlood', groupNumber, 'number') as number,
        FloodDate: getAnswer('FloodDate', groupNumber, 'string') as string,
        FloodDepth: 0.5, // see custom.js line 472
        WereBuildingsAffected: true // see custom.js line 470
      };
      return detail;
    },
    isPopulated: (detail) => {
      if (isNotAnEnum(detail.CauseOfFlood) || !detail.FloodDate) {
        return false;
      }

      return true;
    }
  });
}

function getTreeDetails(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  counter: Counter,
  diagnosticMode: boolean
): TreeDetail[] {
  return getRepeatedDetails<TreeDetail>({
    propertyPrefix: '',
    answers,
    questions,
    mappingFields,
    counter,
    diagnosticMode,
    createDetail: ({ groupNumber, getAnswer }) => {
      const detail: TreeDetail = {
        Distance: getAnswer('Distance', groupNumber, 'number') as number,
        HasBeenPollaredMaintained: true, // see custom.js line 458
        HasPreservationOrder: true, // see custom.js line 459
        HasTreeRootsCausedDamaged: getAnswer('HasTreeRootsCausedDamaged', groupNumber, 'boolean') as boolean,
        HeightInMetres: 5, // see custom.js line 457,
        TreeLocation: getAnswer('TreeLocation', groupNumber, 'number') as number,
        TreeType: 1 // see custom.js line 455
      };
      return detail;
    },
    isPopulated: (detail) => {
      if (isNaN(detail.Distance) || isNaN(detail.HeightInMetres) || isNotAnEnum(detail.TreeLocation)) {
        return false;
      }

      return true;
    }
  });
}

function getCriminalConvictionDetails(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  householders: HouseHolderDetail[],
  counter: Counter,
  diagnosticMode: boolean
): CriminalConvictionDetail[] {
  const propertyPrefix = 'CriminalConviction';
  return getRepeatedDetails<CriminalConvictionDetail>({
    propertyPrefix,
    answers,
    questions,
    mappingFields,
    counter,
    diagnosticMode,
    createDetail: ({ groupNumber, getAnswer, isPopulated }) => {
      const resident = getAnswer('Resident' as any, groupNumber, 'string') as string;
      const { householder, index: hhIndex } = findOrCreateHouseholderDetail(
        propertyPrefix,
        resident,
        householders,
        groupNumber,
        answers,
        questions,
        mappingFields,
        diagnosticMode
      );

      const detail: CriminalConvictionDetail | undefined = householder
        ? {
            CommunityServiceInHours: getAnswer('CommunityServiceInHours', groupNumber, 'number') as number,
            DischargeInMonths: getAnswer('DischargeInMonths', groupNumber, 'number') as number,
            FineAmount: getAnswer('FineAmount', groupNumber, 'number') as number,
            HasCommunityService: getAnswer('HasCommunityService', groupNumber, 'boolean') as boolean,
            HasDischarge: getAnswer('HasDischarge', groupNumber, 'boolean') as boolean,
            HasFine: getAnswer('HasFine', groupNumber, 'boolean') as boolean,
            HasPrisonSentence: getAnswer('HasPrisonSentence', groupNumber, 'boolean') as boolean,
            HasSuspendedSentence: getAnswer('HasSuspendedSentence', groupNumber, 'boolean') as boolean,
            Incident: 'WEBCRIMCONV',
            IsCommunityServiceServed: getAnswer('IsCommunityServiceServed', groupNumber, 'boolean') as boolean,
            IsDischargeServed: getAnswer('IsDischargeServed', groupNumber, 'boolean') as boolean,
            IsFinePaid: getAnswer('IsFinePaid', groupNumber, 'boolean') as boolean,
            IsPrisonSentenceServed: getAnswer('IsPrisonSentenceServed', groupNumber, 'boolean') as boolean,
            IsSuspendedSentenceServed: getAnswer('IsSuspendedSentenceServed', groupNumber, 'boolean') as boolean,
            NickName: householder.NickName, // this value is a random number; see homeprotect.questions.yourdetails.js, line 564
            PrisonSentenceInMonths: getAnswer('PrisonSentenceInMonths', groupNumber, 'number') as number,
            SuspendedSentenceInMonths: getAnswer('SuspendedSentenceInMonths', groupNumber, 'number') as number,
            TypeOfConviction: getAnswer('TypeOfConviction', groupNumber, 'string') as string,
            YearOfConviction: getAnswer('YearOfConviction', groupNumber, 'number') as number,
            YearOfOffence: getAnswer('YearOfOffence', groupNumber, 'number') as number
          }
        : undefined;

      if (detail && isPopulated(detail) && householder && hhIndex < 0) {
        householders.push(householder);
      }

      return detail || ({} as CriminalConvictionDetail);
    },
    isPopulated: (detail) => {
      return (
        detail.HasCommunityService === true ||
        detail.HasDischarge === true ||
        detail.HasFine === true ||
        detail.HasPrisonSentence === true ||
        detail.HasSuspendedSentence === true
      );
    }
  });
}

function getBankruptcyDetails(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  householders: HouseHolderDetail[],
  counter: Counter,
  diagnosticMode: boolean
): BankruptcyDetail[] {
  const propertyPrefix = 'Bankruptcy';
  return getRepeatedDetails<BankruptcyDetail>({
    propertyPrefix,
    answers,
    questions,
    mappingFields,
    counter,
    diagnosticMode,
    createDetail: ({ groupNumber, getAnswer, isPopulated }) => {
      const resident = getAnswer('Resident' as any, groupNumber, 'string') as string;
      const { householder, index: hhIndex } = findOrCreateHouseholderDetail(
        propertyPrefix,
        resident,
        householders,
        groupNumber,
        answers,
        questions,
        mappingFields,
        diagnosticMode
      );

      const detail: BankruptcyDetail | undefined = householder
        ? {
            Incident: 'WEBBANK',
            NickName: householder.NickName, // this value is a random number; see homeprotect.questions.yourdetails.js, line 564
            Reason: getAnswer('Reason', groupNumber, 'number') as number,
            Situation: getAnswer('Situation', groupNumber, 'number') as number,
            YearOfIncident: getAnswer('YearOfIncident', groupNumber, 'number') as number
          }
        : undefined;

      if (detail && isPopulated(detail) && householder && hhIndex < 0) {
        householders.push(householder);
      }

      return detail || ({} as BankruptcyDetail);
    },
    isPopulated: (detail) => {
      return !!detail.YearOfIncident && !isNotAnEnum(detail.Reason) && !isNotAnEnum(detail.Situation);
    }
  });
}

function getJointPolicyHolderDetails(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  householders: HouseHolderDetail[],
  counter: Counter,
  diagnosticMode: boolean
): JointPolicyHolderDetail[] {
  const propertyPrefix = 'JointPolicyHolder';
  return getRepeatedDetails<JointPolicyHolderDetail>({
    propertyPrefix,
    answers,
    questions,
    mappingFields,
    counter,
    diagnosticMode,
    createDetail: ({ groupNumber, getAnswer, isPopulated }) => {
      const detail: JointPolicyHolderDetail = {
        DOB: getAnswer('DOB', groupNumber, 'string') as string,
        DoesBusinessTradeFromProperty: getAnswer('DoesBusinessTradeFromProperty', groupNumber, 'boolean') as boolean,
        Forename: getAnswer('Forename', groupNumber, 'string') as string,
        NickName: createNickName(), // this value is a random number; see homeprotect.questions.yourdetails.js, line 564
        Occupation: getAnswer('Occupation', groupNumber, 'string') as string,
        Sex: maleSex,
        Surname: getAnswer('Surname', groupNumber, 'string') as string,
        Title: getAnswer('Title', groupNumber, 'number') as number,
        TypeOfBusiness: getAnswer('TypeOfBusiness', groupNumber, 'string') as string,
        Relationship: getAnswer('Relationship', groupNumber, 'number') as number
      };

      if (detail && isPopulated(detail)) {
        householders.push(detail);
      }

      return detail || ({} as JointPolicyHolderDetail);
    },
    isPopulated: (detail) => {
      return !!detail.Forename && !!detail.Surname && !isNotAnEnum(detail.Title);
    }
  });
}

function getLiabilityClaimDetails(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  householders: HouseHolderDetail[],
  counter: Counter,
  diagnosticMode: boolean
): LiabilityClaimDetail[] {
  const propertyPrefix = 'LiabilityClaim';
  return getRepeatedDetails<LiabilityClaimDetail>({
    propertyPrefix,
    answers,
    questions,
    mappingFields,
    counter,
    diagnosticMode,
    createDetail: ({ groupNumber, getAnswer, isPopulated }) => {
      const resident = getAnswer('Resident' as any, groupNumber, 'string') as string;
      const { householder, index: hhIndex } = findOrCreateHouseholderDetail(
        propertyPrefix,
        resident,
        householders,
        groupNumber,
        answers,
        questions,
        mappingFields,
        diagnosticMode
      );

      const detail: LiabilityClaimDetail | undefined = householder
        ? {
            Incident: 'WEBLIAB',
            NickName: householder.NickName, // this value is a random number; see homeprotect.questions.yourdetails.js, line 564
            Reason: 'LIA01', // see MapConfigDTOEligibilityIncident2LiabilityClaimViewModel.cs
            Situation: '6', // see MapConfigDTOEligibilityIncident2LiabilityClaimViewModel.cs
            YearOfIncident: getAnswer('YearOfIncident', groupNumber, 'number') as number
          }
        : undefined;

      if (detail && isPopulated(detail) && householder && hhIndex < 0) {
        householders.push(householder);
      }

      return detail || ({} as LiabilityClaimDetail);
    },
    isPopulated: (detail) => {
      return !!detail.Reason && !!detail.Situation && !isNaN(detail.YearOfIncident);
    }
  });
}

function getClaimsAndLossesDetails(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  counter: Counter,
  diagnosticMode: boolean
): ClaimsAndLossesDetail[] {
  const propertyPrefix = 'ClaimsAndLosses';
  return getRepeatedDetails<ClaimsAndLossesDetail>({
    propertyPrefix,
    answers,
    questions,
    mappingFields,
    counter,
    diagnosticMode,
    createDetail: ({ groupNumber, getAnswer }) => {
      const detail: ClaimsAndLossesDetail = {
        ClaimAmount: getAnswer('ClaimAmount', groupNumber, 'number') as number,
        ClaimDate: getAnswer('ClaimDate', groupNumber, 'string') as string,
        EntryGain: getAnswer('EntryGain', groupNumber, 'number') as number,
        HasClaimHappenedAtProperty: getAnswer('HasClaimHappenedAtProperty', groupNumber, 'boolean') as boolean,
        HasSecurityImprovement: getAnswer('HasSecurityImprovement', groupNumber, 'boolean') as boolean,
        IsClaimPaymentPending: getAnswer('IsClaimPaymentPending', groupNumber, 'boolean') as boolean,
        TypeOfClaim: getAnswer('TypeOfClaim', groupNumber, 'number') as number,
        WhatHasClaimAffected: getAnswer('WhatHasClaimAffected', groupNumber, 'number') as number
      };

      return detail;
    },
    isPopulated: (detail) => {
      return (
        detail.ClaimAmount !== null &&
        !isNaN(detail.ClaimAmount) &&
        !isNotAnEnum(detail.TypeOfClaim) &&
        !isNotAnEnum(detail.WhatHasClaimAffected)
      );
    }
  });
}

function getInsuranceCancelledDetails(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  householders: HouseHolderDetail[],
  counter: Counter,
  diagnosticMode: boolean
): InsuranceCancelledDetail[] {
  const propertyPrefix = 'InsuranceCancelled';
  return getRepeatedDetails<InsuranceCancelledDetail>({
    propertyPrefix,
    answers,
    questions,
    mappingFields,
    counter,
    diagnosticMode,
    createDetail: ({ groupNumber, getAnswer, isPopulated }) => {
      const resident = getAnswer('Resident' as any, groupNumber, 'string') as string;
      const { householder, index: hhIndex } = findOrCreateHouseholderDetail(
        propertyPrefix,
        resident,
        householders,
        groupNumber,
        answers,
        questions,
        mappingFields,
        diagnosticMode
      );

      const detail: InsuranceCancelledDetail | undefined = householder
        ? {
            Incident: 'WEBCANC',
            NickName: householder.NickName, // this value is a random number; see homeprotect.questions.yourdetails.js, line 564
            EligibilityReason: getAnswer('EligibilityReason', groupNumber, 'number') as number,
            EligibilitySituation: getAnswer('EligibilitySituation', groupNumber, 'number') as number,
            EligibilityYear: getAnswer('EligibilityYear', groupNumber, 'number') as number
          }
        : undefined;

      if (detail && isPopulated(detail) && householder && hhIndex < 0) {
        householders.push(householder);
      }

      return detail || ({} as InsuranceCancelledDetail);
    },
    isPopulated: (detail) => {
      return (
        !isNotAnEnum(detail.EligibilityReason) &&
        !isNotAnEnum(detail.EligibilitySituation) &&
        !isNotAnEnum(detail.EligibilityYear)
      );
    }
  });
}

interface HouseHolderResult {
  householder: HouseHolderDetail | undefined;
  index: number;
}

function findOrCreateHouseholderDetail(
  prefix: string,
  resident: string,
  householders: HouseHolderDetail[],
  groupNumber: number,
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  diagnosticMode: boolean
): HouseHolderResult {
  const { householder, index } = findHouseholderDetail(prefix, resident, householders);
  if (householder || index >= 0) {
    return { householder, index };
  }

  return createHouseholderDetail(prefix, groupNumber, answers, questions, mappingFields, diagnosticMode);
}

function findHouseholderDetail(prefix: string, resident: string, householders: HouseHolderDetail[]): HouseHolderResult {
  let householder: HouseHolderDetail | undefined;
  // TODO Something other than 'Other Resident'
  if (resident && resident !== 'Other Resident') {
    const bits = resident.split(' '); // TODO Use a better key than 'Firstname Lastname'
    const index = householders.findIndex((h) => h.Forename === bits[0] && h.Surname === bits[1]);
    if (index >= 0) {
      // throw new Error(`There is no householder with name "${resident}" for "${prefix}" detail.`);
      householder = householders[index];
      return { householder, index };
    }
  }

  return { householder: undefined, index: -1 };
}

function createHouseholderDetail(
  prefix: string,
  groupNumber: number,
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  diagnosticMode: boolean
): HouseHolderResult {
  function getDetailAnswer(mappingField: keyof HouseHolderDetail, expectedType: NhiExpectedType): HpAnswerValueTypes {
    const field = prefix + mappingField;
    if (!mappingFields[field]) {
      return null;
    }

    return getAnswer<HouseHolderDetail>({
      mappingField: field as keyof HouseHolderDetail,
      mappingFields,
      questions,
      answers,
      groupNumber,
      expectedType,
      diagnosticMode
    });
  }

  const householder: HouseHolderDetail = {
    Title: getDetailAnswer('Title', 'number') as number,
    Forename: getDetailAnswer('Forename', 'string') as string,
    Surname: getDetailAnswer('Surname', 'string') as string,
    DOB: getDetailAnswer('DOB', 'string') as string,
    Sex: maleSex,
    Relationship: getDetailAnswer('Relationship', 'number') as number,
    NickName: createNickName() // TODO This won't work when we do reverse mapping.
  };

  if (householder.Forename && householder.Surname && householder.DOB) {
    return { householder, index: -1 };
  }

  return { householder: undefined, index: -1 };
}

function createGdprConsent(
  answers: HpAnswerMap,
  questions: HpQuestionMap,
  mappingFields: MappingFieldToQuestionIdMap,
  diagnosticMode: boolean
): GdprConsentSection {
  const gdprConsent = createDetailWithBooleanAnswers<any, GdprConsentSection>(
    'GdprConsent',
    ['CanEmail', 'CanPost', 'CanSMS', 'CanTelephone'],
    (mappingField, expectedType) =>
      getAnswer<any>({
        mappingField,
        expectedType,
        mappingFields,
        questions,
        answers,
        groupNumber: undefined,
        diagnosticMode
      })
  );
  return gdprConsent;
}

interface CreateRepeatedDetailCallbackProps<DetailT extends RepeatedDetail> {
  groupNumber: number;
  getAnswer: CreateRepeatedDetailGetAnswer<DetailT>;
  isPopulated: (detail: DetailT) => boolean;
}

type CreateRepeatedDetailGetAnswer<DetailT extends RepeatedDetail> = (
  mappingField: keyof DetailT,
  groupNumber: number,
  expectedType: NhiExpectedType
) => HpAnswerValueTypes;

interface GetRepeatedDetailsProps<DetailT extends RepeatedDetail> {
  propertyPrefix: string;
  answers: HpAnswerMap;
  questions: HpQuestionMap;
  mappingFields: MappingFieldToQuestionIdMap;
  createDetail: (props: CreateRepeatedDetailCallbackProps<DetailT>) => DetailT;
  isPopulated: (detail: DetailT) => boolean;
  counter: Counter;
  diagnosticMode: boolean;
}

function getRepeatedDetails<DetailT extends RepeatedDetail>({
  propertyPrefix,
  answers,
  questions,
  mappingFields,
  counter,
  diagnosticMode,
  createDetail,
  isPopulated
}: GetRepeatedDetailsProps<DetailT>): DetailT[] {
  function getDetailAnswer(
    mappingField: keyof DetailT,
    groupNumber: number,
    expectedType: NhiExpectedType
  ): HpAnswerValueTypes {
    return getAnswer<DetailT>({
      mappingField: (propertyPrefix + mappingField) as keyof DetailT,
      mappingFields,
      questions,
      answers,
      groupNumber,
      expectedType,
      diagnosticMode
    });
  }

  const details: DetailT[] = [];
  for (let groupNumber = 1; groupNumber <= MaxGroupsAllowed; groupNumber++) {
    const detail: DetailT = createDetail({ groupNumber, getAnswer: getDetailAnswer, isPopulated });
    detail.Instance = counter.get(); //  groupNumber;
    if (!isPopulated(detail)) {
      break;
    }

    details.push(detail);
    counter.increment();
  }

  return details;
}

function createNickName(): string {
  return '' + Math.floor(Math.random() * 10000);
}
