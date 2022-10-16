import { SMap } from '@avantia/client-and-server-utilities';
import { HpAnswerMap, HpAnswerValueTypes, HpQuestionMap } from '@avantia/questionset-model';

export type NhiSectionTypes = keyof AllNhiSections;

export interface AllNhiSections {
  InsuringYourProperty: InsuringYourPropertyNhiSection;
  PropertyDetails: PropertyDetailsNhiSection;
  BuildingConstruction: BuildingConstructionNhiSection;
  AboutYourProperty: AboutYourPropertyNhiSection;
  ContentsCover: ContentsCoverNhiSection;
  Residents: ResidentsNhiSection;
  AboutYouAndYourHousehold: AboutYouAndYourHouseholdNhiSection;
  YourContactDetails: YourContactDetailsNhiSection;
  GdprConsent: GdprConsentSection;
}

export interface NhiYourDetails {
  BranchDetails: BranchDetail | null;
  Residents: ResidentsNhiSection;
  AboutYouAndYourHousehold: AboutYouAndYourHouseholdNhiSection;
  Client: QuoteClientDetail | null;
  TypeOfCover: number;
  IsPropertyUndergoingRenovation: boolean | null;
  AreYouLivingAtProperty: boolean | null;
  QuoteStatus: number;
  PolicyRefNo: string;
  QuoteRefNo: string;
  QuoteGuid?: string;
  PropertyAddress: NhiAddressDetail;
}

export interface NhiQuote<T> {
  Success: boolean;
  Error: string[] | null;
  Data: T;
}

export interface HpNhiSection {
  QuoteGuid?: string;
  SectionName: NhiSectionTypes;
}

export interface InsuringYourPropertyNhiSection extends HpNhiSection {
  TypeOfCover: number;
  StartDate: string;
}

export interface NhiAddressDetail {
  PropertyNameNumber: string;
  AddressLine1: string;
  AddressLine2: string;
  TownCity: string;
  County: string;
  PostCode: string;
  AddressLookupJson: string;
}

export interface PropertyDetailsNhiSection extends HpNhiSection {
  MortgageProvider: string | null;
  MortgageReference: string | null;
  NumberOfBedrooms: number;
  PropertyAddress: NhiAddressDetail;
  PropertyBuildYear: number | null;
  PropertyType: number;
  PropertyTypeGrouping: number;
  WhoOwnsTheProperty: number;
  YearsHeldBuildingInsurance: number;
}

export interface BuildingConstructionNhiSection extends HpNhiSection {
  DateOfLastElectricCertificate: number | null;
  FireExtinguishingMeasures: number;
  HasChimneyAndPosition: number;
  HasOutbuilding: boolean | null;
  HasSparkArrestorsInActiveChimneys: boolean | null;
  HeatingSystemTypeInstalled: number;
  HeightAboveThatchLowestChimneyPot: number | null;
  IsActiveChimneysLined: boolean | null;
  IsRoofMoreThan33PercentFlat: boolean | null;
  IsRoofThatched: boolean | null;
  IsWoodFireOrStoveInstalled: boolean | null;
  Outbuildings: OutbuildingDetail[] | null;
  PercentageOfRoofFlat: number;
  PropertyExtensionCompletedOn: number | null;
  PropertyHasBelowGroundLevel: boolean | null;
  PropertyHasExtension: boolean | null;
  PropertyIsListed: boolean | null;
  PropertyLastRewired: number | null;
  PropertyListingGrade: number;
  PropertyWiringLastInspected: number | null;
  RoofConstructionMaterial: number;
  RoofFlatPortionConstructionMaterial: number;
  RoofLastInspectedYear: number | null;
  RoofLastRethatched: number | null;
  RoofThatchCondition: number;
  RoofThatchedPercentage: number;
  RoofThatchLastInspected: number | null;
  RoofThatchTypeOfThatch: number;
  WallConstructionMaterialTypeDDL: number;
  WallConstructionMaterialTypePictorial: number;
  WallConstructionMaterialTypeSelected: number;
  YearsLivedInThatchedProperty: number | null;
}

export interface AboutYourPropertyNhiSection extends HpNhiSection {
  AlarmAudibleOrCentrallyMonitored: number;
  AreContractorDoingWork: boolean | null;
  AreYouLivingAtProperty: boolean | null;
  CauseOfGroundMovement: number;
  CauseRemovedRectified: number;
  DoesRenovationInvolveStructuralWork: boolean | null;
  FloodDefenceConstructionYear: number | null;
  FloodDefenceType: number;
  Floods: FloodDetail[];
  GuaranteeExipirationYear: number | null;
  Has1MillionLiabilityInsurancePerContractor: boolean | null;
  HasAlarm: boolean | null;
  HasBeenUnderpinnedOrReinforcedFoundations: boolean | null;
  HasCommunityFloodDefence: boolean | null;
  HasContractorsAllRisksPolicy: boolean | null;
  HasFloodClaimInLast25Years: boolean | null;
  HasFloodReportFromEnvironmentAgency: boolean | null;
  HasFloodWatchServiceSubscription: boolean | null;
  HasKeysOperatedLocksOnWindows: boolean | null;
  HasPlanningPermission: boolean | null;
  HasPropertyFloodedInLast25Year: boolean | null;
  HasPropertyFloodedSince: boolean | null;
  HasSignedWaiver: boolean | null;
  HasSurveyFromQualifiedPro: boolean | null;
  HasTreesOver5MetersTallWithin7Meters: boolean | null;
  HasValuationSurveyReport: boolean | null;
  HowFarFromWaterIsNearestBuilding: number | null;
  HowFarFromWaterIsNearestBuildingUnitOfMeasure: number;
  HowHighAboveWaterLineIsLowestPartOfBuilding: number | null;
  HowHighAboveWaterLineIsLowestPartOfBuildingUnitOfMeasure: number;
  HowMuchHasBeenUnderpinned: number;
  ImpactOfRenovation: number;
  Is7500CoverSufficient: boolean | null;
  IsAlarmFittedAndMaintained: boolean | null;
  IsInGoodStateOfRepair: boolean | null;
  IsMovementLongstanding: boolean | null;
  IsPropertyInMiningArea: boolean | null;
  IsPropertySelfContained: boolean | null;
  IsPropertyUndergoingRenovation: boolean | null;
  IsPropertyWithin200MetersOfWater: boolean | null;
  IsStructuralWorkCoveredByContractorGuarantee: boolean | null;
  MeasuresToLimitFutureFlooding: MeasuresToLimitFutureFloodingDetail;
  NatureOfRenovation: number;
  OutbuildingRebuildCoverAmount: number | null;
  PropertyRebuildCost: number | null;
  ReportConfirmsNoMoreMovement: boolean | null;
  SubsidenceIsOnlyOccurrence: boolean | null;
  SubsidenceOccurrenceYear: number | null;
  SubsidenceSigns: SubsidenceSignsDetail;
  TotalCostOfRenovation: number | null;
  Trees: TreeDetail[];
  TypeOfLocksInMainEntrance: number;
  TypeOfLocksInOtherExists: number;
  TypeOfLocksInPatioDoor: number;
  UnderpinnedBecauseInsuranceClaim: boolean | null;
  UnderpinnedYear: number | null;
  WasLocalAuthorityInvolvedInWork: boolean | null;
  WasMainStructureAffected: boolean | null;
  WereOtherPropertiesAffected: boolean | null;
  WhenRenovationIsDueToComplete: string | null;
  WhenRenovationIsDueToStart: string | null;
  WhyIsNotInGoodStateOfRepair: number;
}

export interface ContentsCoverNhiSection extends HpNhiSection {
  HasAnyHRHVItems: boolean | null;
  HasASafe: boolean | null;
  HasMobilePhones: boolean | null;
  HasOtherHRHVItems: boolean | null;
  HasPedalCycles: boolean | null;
  HasPortableComputers: boolean | null;
  MobilePhones: ListedItemDetail[];
  OtherHRHVItems: ListedItemDetail[];
  PedalCycles: ListedItemDetail[];
  PortableComputers: ListedItemDetail[];
  SafeRating: number;
  TotalValueContents: number | null;
  TypeOfCover: number;
}

export interface ResidentsNhiSection extends HpNhiSection {
  BusinessStock: BusinessStockDetail | null;
  DaysUnoccupied: number;
  FrequencyOfBusinessVisitors: number;
  HowMuchCoverIsRequiredForBusinessStock: number;
  IsAllEscortedOffProperty: boolean | null;
  IsBusinessUseMainSourceOfIncome: boolean | null;
  IsCommercialInsuranceInPlace: boolean | null;
  IsCoverRequiredForBusinessEquipment: boolean | null;
  IsEveningMealServed: boolean | null;
  IsGuestAreaSelfContained: boolean | null;
  IsPassThroughToOffice: boolean | null;
  IsPayingGuestStayingAtProperty: boolean | null;
  IsPropertyFurnished: boolean | null;
  IsPublicLiabliatyInPlace: boolean | null;
  IsStockHeldAtProperty: boolean | null;
  IsUsedForBusinessUse: boolean | null;
  MaximumNumberOfGuests: number;
  NumberOfAdults: number;
  NumberOfChildren: number;
  NumberOfGuestBedrooms: number;
  PropertyOccupancyType: number;
  PropertyUsage: number;
  StaffAtProperty: number;
  VisitorsAtPropertyType: number;
  WhoLivesAtPropertyOptions: WhoLivesAtPropertyOptionsDetail | null;
}

export interface AboutYouAndYourHouseholdNhiSection extends HpNhiSection {
  BCCJIVAs: BankruptcyDetail[];
  ClaimsAndLosses: ClaimsAndLossesDetail[];
  CriminalConvictions: CriminalConvictionDetail[];
  DoesBusinessTradeFromProperty: boolean | null;
  HasAnyAdditionalJointPolicyHolders: boolean | null;
  HasBeenDeclaredBankruptBCCJIVA: boolean | null;
  HasClaimsAndLosses: boolean | null;
  HasCriminalConvictions: boolean | null;
  HasHomeInsuranceCancelled: boolean | null;
  HasLiabilityClaims: boolean | null;
  HouseHolders: HouseHolderDetail[];
  InsurancesCancelled: InsuranceCancelledDetail[];
  JointPolicyHolders: JointPolicyHolderDetail[];
  LiabilityClaims: LiabilityClaimDetail[];
  Occupation: string;
  PolicyHolderDOB: string | null;
  TypeOfBusiness: string;
}

export interface YourContactDetailsNhiSection extends HpNhiSection {
  Address: NhiAddressDetail | null;
  DayTimePhoneNumber: string;
  DOB: string | null;
  EmailAddress: string;
  Forename: string;
  IsInsuredAddressSameForPostalAddress: boolean | null;
  MaritalStatus: number;
  MarketingOptOut: boolean;
  MobilePhoneNumber: string;
  NickName: string;
  Relationships: RelationshipDetail[];
  Sex: number;
  StopCorrespondence: boolean;
  Surname: string;
  Title: number;
}

export interface RelationshipDetail extends RepeatedDetail {
  RelationshipType: number;
  RelatedPerson: HouseHolderDetail;
}

export interface BankruptcyDetail extends RepeatedDetail {
  Incident: string;
  NickName: string; // This is used as a foreign key for HouseHolderDetail
  Reason: number;
  Situation: number;
  YearOfIncident: number;
}

export interface ClaimsAndLossesDetail extends RepeatedDetail {
  ClaimAmount: number | null;
  ClaimDate: string | null;
  EntryGain: number;
  HasClaimHappenedAtProperty: boolean | null;
  HasSecurityImprovement: boolean | null;
  IsClaimPaymentPending: boolean | null;
  TypeOfClaim: number;
  WhatHasClaimAffected: number;
}

export interface CriminalConvictionDetail extends RepeatedDetail {
  CommunityServiceInHours: number | null;
  DischargeInMonths: number | null;
  FineAmount: number | null;
  HasCommunityService: boolean | null;
  HasDischarge: boolean | null;
  HasFine: boolean | null;
  HasPrisonSentence: boolean | null;
  HasSuspendedSentence: boolean | null;
  Incident: string;
  IsCommunityServiceServed: boolean | null;
  IsDischargeServed: boolean | null;
  IsFinePaid: boolean | null;
  IsPrisonSentenceServed: boolean | null;
  IsSuspendedSentenceServed: boolean | null;
  NickName: string;
  PrisonSentenceInMonths: number | null;
  SuspendedSentenceInMonths: number | null;
  TypeOfConviction: string;
  YearOfConviction: number;
  YearOfOffence: number;
}

export interface HouseHolderDetail {
  DOB: string | null;
  Forename: string;
  NickName: string; // This is used as a foreign key in other *Detail models.
  Sex: number;
  Surname: string;
  Title: number;
  Relationship: number;
}

export interface JointPolicyHolderDetail extends HouseHolderDetail, RepeatedDetail {
  DoesBusinessTradeFromProperty: boolean | null;
  Occupation: string;
  TypeOfBusiness: string;
}

export interface InsuranceCancelledDetail extends RepeatedDetail {
  EligibilityReason: number;
  EligibilitySituation: number;
  EligibilityYear: number;
  Incident: string;
  NickName: string;
}

export interface LiabilityClaimDetail extends RepeatedDetail {
  Incident: string;
  NickName: string;
  Reason: string;
  Situation: string;
  YearOfIncident: number;
}

export interface BusinessStockDetail {
  AudioVisualOrComputerEquipment: boolean;
  CleaningLiquids: boolean;
  LiquidsFlammable: boolean;
  LiquidsNonFlammable: boolean;
  Metal: boolean;
  OtherBusinnessStock: boolean;
  PaperOnly: boolean;
  PreciousMetalsStones: boolean;
  SportsEquipment: boolean;
}

export interface WhoLivesAtPropertyOptionsDetail {
  HasAsylumSeekers: boolean;
  HasBedBreakfastGuests: boolean;
  HasDssRecipients: boolean;
  HasHolidayHomeGuests: boolean;
  HasLodgers: boolean;
  HasOtherFamilyMembers: boolean;
  HasOtherNonRelative: boolean;
  HasStudents: boolean;
  HasUnemployedTenants: boolean;
  HasWorkingTenant: boolean;
  HasYou: boolean;
  HasYourCloseFamily: boolean;
}

export interface ListedItemDetail extends RepeatedDetail {
  Category: number;
  Description: string;
  HasReceiptOrValuation: boolean | null;
  IsAwayFromHomeCoverRequired: boolean;
  Value: number;
}

export interface TreeDetail extends RepeatedDetail {
  TreeType: number;
  TreeLocation: number;
  HasBeenPollaredMaintained: boolean;
  HasPreservationOrder: boolean;
  HeightInMetres: number;
  Distance: number;
  HasTreeRootsCausedDamaged: boolean;
}

export interface FloodDetail extends RepeatedDetail {
  FloodDate: string;
  WereBuildingsAffected: boolean;
  CauseOfFlood: number;
  FloodDepth: number;
}

export interface SubsidenceSignsDetail {
  HasSubsidenceClaim: boolean;
  IsMonitoredForSubsidence: boolean;
  HasStructuralMovement: boolean;
  HasSignsOfDamage: boolean;
}

export interface MeasuresToLimitFutureFloodingDetail {
  HasAntifloodBarrier: boolean;
  HasSandbags: boolean;
  HasFloodboards: boolean;
  HasPlasticAirbrickCovers: boolean;
  HasChangedGroundFloorToWaterproof: boolean;
  HasRaisedSockets: boolean;
  HasHeatedMovedUpstairs: boolean;
  HasNonReturnValvesFitted: boolean;
  HasWoodenDoorsAndFramesReplaced: boolean;
  HasBasementTanked: boolean;
  HasOther: boolean;
}

export interface OutbuildingDetail {
  Instance: number;
}

export interface RepeatedDetail {
  Instance?: number;
}

export type MappingFieldToQuestionIdMap = SMap<string | SMap<string>>;

export type MappingFieldInputMap = SMap<{ questionId: string; mappingField?: string }>;

export type NhiExpectedType = 'raw' | 'number' | 'string' | 'boolean' | 'array';

export interface GetAnswerProps<SectionT> {
  mappingField: keyof SectionT;
  mappingFields: MappingFieldToQuestionIdMap;
  questions: HpQuestionMap;
  answers: HpAnswerMap;
  enumLookupMap?: SMap<HpValueToIndex>;
  groupNumber?: number;
  expectedType: NhiExpectedType;
  diagnosticMode: boolean;
}

export interface HpValueToIndex {
  code: SMap<number>;
  enumType: SMap<number>;
  text: SMap<number>;
  shortText: SMap<number>;
  overrideText: SMap<number>;
  custom: SMap<number>;
}

export type GetAnswerFunction<SectionT> = (
  mappingField: keyof SectionT,
  expectedType: NhiExpectedType
) => HpAnswerValueTypes;

export interface NhiQuoteResponse {
  Success: boolean;
  Error: string[] | null;
  Data: NhiQuoteResult;
}

export interface NhiQuoteResult extends HpNhiSection {
  AddOns: AddOnsDetail | null;
  AgentOnlineAuth: boolean;
  ArtemisRiskDataState: number;
  BranchDetails: BranchDetail | null;
  BuildingsInsurance: QuoteBuildingsInsuranceDetail | null;
  Client: QuoteClientDetail | null;
  CompulsoryExcesses: CompulsoryExcessDetail[];
  ContentsInsurance: QuoteContentsInsuranceDetail | null;
  ImportantInformation: ImportantInformationDetail | null;
  IsArtemisPolicy: boolean;
  IsConditional: boolean | null;
  IsDeclarationChecked: boolean;
  IsDeclined: boolean | null;
  IsReferred: boolean | null;
  IsSpecificTermsChecked: boolean;
  JointPolicyHolders: JointPolicyHolderDetail[];
  PolicyRefNo: string;
  PropertyAddress: NhiAddressDetail | null;
  QuoteAmounts: QuoteAmountsDetail | null;
  QuoteRefNo: string;
  QuoteStatus: number;
  ReferralReasons: string[];
  RequiresSpecificTermsCheck: boolean | null;
  StartDate: string | null;
  TypeOfCover: number;
  UseNewSaveRetrieve: boolean;
  VoluntaryExcess: number;
  VoucherCode: string;
  VoucherCodeViewModel: VoucherCodeDetail | null;
}

export interface SpecificTermDetail {
  Title: string;
  Text: string;
}

export interface ImportantInformationDetail {
  CoverChanges: SpecificTermDetail[];
  Endorsements: SpecificTermDetail[];
  EvidencePacks: SpecificTermDetail[];
  ImportantInformation: string[];
  ImportantInformationHighlighted: string[];
}

export interface QuoteContentsInsuranceDetail extends HpNhiSection {
  ContentsAccidentalDamageIsAllowed: boolean;
  ContentsAccidentalDamageIsSelected: boolean;
  ContentsIsAllowed: boolean;
  ContentsIsRequired: boolean;
  ContentsSumInsured: number;
  GeneralValuablesCovered: number;
  HasContentsInsurance: boolean;
  HighRiskHighValueItemsTotal: number;
  IsGeneralValuablesCoveredAllowed: boolean;
  IsHighRiskHighValueItemsAllowed: boolean;
  ValueOfContents: number | null;
}

export interface CompulsoryExcessDetail {
  Amount: number;
  Description: string;
  Key: string;
}

export interface QuoteClientDetail {
  DayTimePhoneNumber: string;
  EmailAddress: string;
  Forename: string;
  NickName: string;
  Surname: string;
  Title: number;
  TitleName: string;
  TitleText: string;
}

export interface QuoteBuildingsInsuranceDetail {
  BuildingsAccidentalDamageIsAllowed: boolean;
  BuildingsAccidentalDamageIsSelected: boolean;
  BuildingsIsAllowed: boolean;
  BuildingsIsRequired: boolean;
  BuildingsSumInsured: number;
  HasBuildingsInsurance: boolean;
  Is7500CoverSufficient: boolean | null;
  OutbuildingRebuildCoverAmount: number | null;
  PropertyRebuildCost: number | null;
}

export interface BranchDetail {
  BranchCode: string;
  BranchPhoneNumber: string;
  DisplayAXALogo: boolean;
  HasBranchLogo: boolean;
}

export interface AddOnsDetail {
  FullHomeEmergencyAnnualPrice: number;
  FullHomeEmergencyMonthlyPrice: number;
  FullLandlordHomeEmergencyAnnualPrice: number;
  FullLandlordHomeEmergencyMonthlyPrice: number;
  FullLandlordLegalExpensesAnnualPrice: number;
  FullLandlordLegalExpensesMonthlyPrice: number;
  FullLegalExpensesAnnualPrice: number;
  FullLegalExpensesMonthlyPrice: number;
  HasNonStandardHECoverAddon: boolean;
  HasNonStandardLECoverAddon: boolean;
  IsBasicHomeEmergencyAvailable: boolean;
  IsBasicHomeEmergencyDas: boolean;
  IsBasicLegalExpensesAvailable: boolean;
  IsBasicLegalExpensesDas: boolean;
  IsFullHomeEmergencyAvailable: boolean;
  IsFullHomeEmergencyDas: boolean;
  IsFullHomeEmergencySelected: boolean;
  IsFullLandlordHomeEmergencyAvailable: boolean;
  IsFullLandlordHomeEmergencyDas: boolean;
  IsFullLandlordHomeEmergencySelected: boolean;
  IsFullLandlordLegalExpensesAvailable: boolean;
  IsFullLandlordLegalExpensesDas: boolean;
  IsFullLandlordLegalExpensesSelected: boolean;
  IsFullLegalExpensesAvailable: boolean;
  IsFullLegalExpensesDas: boolean;
  IsFullLegalExpensesSelected: boolean;
  IsLandlordsLegalHomeAvailable: boolean;
  IsLandlordsLegalHomeDas: boolean;
  IsLandlordsLegalHomeRentAvailable: boolean;
  IsLandlordsLegalHomeRentDas: boolean;
  IsLandlordsLegalHomeRentSelected: boolean;
  IsLandlordsLegalHomeSelected: boolean;
  IsLandlordsLegalRentAvailable: boolean;
  IsLandlordsLegalRentDas: boolean;
  IsLandlordsLegalRentSelected: boolean;
  IsLostKeyAvailable: boolean;
  IsLostKeySelected: boolean;
  IsNonStandardHECoverDas: boolean;
  IsNonStandardLECoverDas: boolean;
  IsPostDocumentsAvailable: boolean;
  IsPostDocumentsSelected: boolean;
  LandlordsLegalHomeAnnualPrice: number;
  LandlordsLegalHomeMonthlyPrice: number;
  LandlordsLegalHomeRentAnnualPrice: number;
  LandlordsLegalHomeRentMonthlyPrice: number;
  LandlordsLegalRentAnnualPrice: number;
  LandlordsLegalRentMonthlyPrice: number;
  LostKeyAnnualPrice: number;
  LostKeyMonthlyPrice: number;
  PostDocumentsAnnualPrice: number;
  PostDocumentsMonthlyPrice: number;
}

export interface VoucherCodeDetail {
  Amount: number;
  BranchCode: string;
  CoverType: string;
  CustomerDoesntMatchSegmentMessage: string;
  CustomerId: string;
  House: string;
  OrderDoesntMatchRulesMessage: string;
  PolicyNumber: string;
  PostCode: string;
  ReasonMessage: string;
  Street: string;
  Surname: string;
  VoucherCode: string;
  VoucherCodeValidMessage: string;
  VoucherExpiredMessage: string;
  VoucherNotActiveYetMessage: string;
  VoucherNotFoundMessage: string;
}

export interface QuoteAmountsDetail {
  AdminFee: number | null;
  APRPercentage: number | null;
  DepositAmount: number | null;
  FinanceProvider: string;
  MonthlyAmount: number | null;
  NumberOfInstalments: number;
  SelectedPaymentPlanTypeField: string;
  ServiceChargePercentage: number | null;
  YearlyAmount: number | null;
}

export interface GdprConsentSection extends HpNhiSection {
  CanEmail: boolean;
  CanSMS: boolean;
  CanPost: boolean;
  CanTelephone: boolean;
}

export interface GdprConsentData {
  EmailAddress: string;
  IpAddress: string;
  UserAgentDescription: string;
  SourceApplicationDescription: string;
  GdprMediaTypeId: number;
  OptInBool: boolean;
}
