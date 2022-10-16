import { SMap } from '@avantia/client-and-server-utilities';
import { QabEnumItem } from './qabEnumTypes';

export const enumPropertyMap: SMap<keyof QabEnumItem> = Object.freeze({
  CriminalConvictionType: 'text',
  CriminalConvictionTypeOfConviction: 'text',
  JointPolicyHolderTypeOfBusiness: 'text',
  JointPolicyHolderOccupation: 'text',
  Occupation: 'text',
  TypeOfBusiness: 'text'
});

export function createMappingFieldToEnumMap(): SMap<string> {
  // This is a map from MappingField to Enumeration Type for the few cases where they don't match up.
  return Object.freeze({
    WhoOwnsTheProperty: 'PropertyOwner',
    PropertyListingGrade: 'GradeOfListingType',
    YearsHeldBuildingInsurance: 'YearsHeldInsurance',
    PercentageOfRoofFlat: 'FlatRoofPercentage',
    WallConstructionMaterialTypeDDL: 'WallConstructionMaterialType',
    HowMuchHasBeenUnderpinned: 'HowMuchUnderpinned',
    TypeOfLocksInMainEntrance: 'TypeOfLocks',
    TypeOfLocksInPatioDoor: 'TypeOfLocksPatioDoors',
    TypeOfLocksInOtherExists: 'TypeOfLocksOtherExists',
    DaysUnoccupied: 'DaysUnoccupiedType',
    JointPolicyHolderRelationship: 'RelationshipType',
    InsuranceCancelledRelationship: 'RelationshipType',
    EligibilitySituation: 'EligibilitySituationType',
    EligibilityReason: 'EligibilityReasons',
    SafeRating: 'SafeRatingType',
    RoofConstructionMaterial: 'RoofType',
    RoofFlatPortionConstructionMaterial: 'RoofType',
    WallConstructionMaterialTypePictorial: 'WallConstructionMaterialType',
    WallConstructionMaterialTypeSelected: 'WallConstructionMaterialType',
    WhyIsNotInGoodStateOfRepair: 'NotGoodStateOfRepairReasons',
    HowFarFromWaterIsNearestBuildingUnitOfMeasure: 'UnitOfMeasureType',
    AlarmAudibleOrCentrallyMonitored: 'AlarmMonitoredType',
    HighRiskItemCategory: 'ListedItemCategory',
    PropertyUsage: 'PropertyUsageType',
    FrequencyOfBusinessVisitors: 'FrequencyOfBusinessVisitorsType',
    HowMuchCoverIsRequiredForBusinessStock: 'AmountOfCoverForBusinessType',
    NumberOfAdults: 'AdultCountType',
    NumberOfChildren: 'ChildrenCountType',
    StaffAtProperty: 'StaffCountType',
    Occupation: 'OccupationType',
    JointPolicyHolderOccupation: 'OccupationType',
    TypeOfBusiness: 'BusinessType',
    JointPolicyHolderTypeOfBusiness: 'BusinessType',
    BankruptcyReason: 'BCCJIVAReason',
    BankruptcySituation: 'BCCJIVASituation',
    Title: 'PersonTitle',
    BankruptcyTitle: 'PersonTitle',
    InsuranceCancelledTitle: 'PersonTitle',
    JointPolicyHolderTitle: 'PersonTitle',
    InsuranceCancelledEligibilityReason: 'EligibilityReasons',
    InsuranceCancelledEligibilitySituation: 'EligibilitySituationType',
    CriminalConvictionTypeOfConviction: 'CriminalConvictionType',
    ClaimsAndLossesTypeOfClaim: 'ClaimType',
    ClaimsAndLossesEntryGain: 'EntryGain',
    ClaimsAndLossesWhatHasClaimAffected: 'ClaimSectionType',
    Relationship: 'RelationshipType'
  });
}
