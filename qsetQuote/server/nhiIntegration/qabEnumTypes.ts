/**********************************
 * DO NOT EDIT BY HAND
 * This file was created by a tool on 2021-03-15T15:31:48.867Z
 * To generate run: npm run gen-enum-map
 **********************************/
import { SMap } from '@avantia/client-and-server-utilities';

export interface QabEnumItem {
  code: string;
  index: number;
  text: string;
  enumType: string;
  shortText?: string;
  overrideText?: string[];
}

export const qabEnumTypes: SMap<QabEnumItem[]> = {
  ExcessType: [
    {
      code: 'ACC01',
      index: 1,
      text: 'Accidental Damage (check section)',
      enumType: 'AccidentalDamage'
    },
    {
      code: 'BAC01',
      index: 2,
      text: 'Buildings Additional Compulsory',
      enumType: 'BuildingsAdditionalCompulsory'
    },
    {
      code: 'BAD01',
      index: 3,
      text: 'Buildings AD',
      enumType: 'BuildingsAd'
    },
    {
      code: 'BLD01',
      index: 4,
      text: 'Buildings',
      enumType: 'Buildings'
    },
    {
      code: 'CAC01',
      index: 5,
      text: 'Contents Additional Compulsory',
      enumType: 'ContentsAdditionalCompulsory'
    },
    {
      code: 'CAD01',
      index: 6,
      text: 'Contents AD',
      enumType: 'ContentsAd'
    },
    {
      code: 'CNT01',
      index: 7,
      text: 'Contents',
      enumType: 'Contents'
    },
    {
      code: 'EOW01',
      index: 8,
      text: 'Escape of Water',
      enumType: 'EscapeofWater'
    },
    {
      code: 'FLO01',
      index: 9,
      text: 'Flood',
      enumType: 'Flood'
    },
    {
      code: 'GAC01',
      index: 10,
      text: 'General Personal Possessions Additional Compulsory',
      enumType: 'GeneralPersonalPossessionsAdditionalCompulsory'
    },
    {
      code: 'GPP01',
      index: 11,
      text: 'General Personal Possessions',
      enumType: 'GeneralPersonalPossessions'
    },
    {
      code: 'MDM01',
      index: 12,
      text: 'Malicious Damage',
      enumType: 'MaliciousDamage'
    },
    {
      code: 'SAR01',
      index: 13,
      text: 'Specified All Risks',
      enumType: 'SpecifiedAllRisks'
    },
    {
      code: 'SLH01',
      index: 14,
      text: 'Subsidence, Landslip and Heave',
      enumType: 'SubsidenceLandslipandHeave'
    },
    {
      code: 'STO01',
      index: 15,
      text: 'Storm',
      enumType: 'Storm'
    },
    {
      code: 'TFT01',
      index: 16,
      text: 'Theft',
      enumType: 'Theft'
    }
  ],
  RateType: [
    {
      code: 'APAMT',
      index: 1,
      text: 'One-off AP to be charged (GBP Net)',
      enumType: 'OneOffAp'
    },
    {
      code: 'BLDRATE',
      index: 2,
      text: 'Buildings Rate (% Net)',
      enumType: 'BuildingsRate'
    },
    {
      code: 'BLDRTADJ',
      index: 3,
      text: 'Buildings Rate Adjustment (+ or - %)',
      enumType: 'BuildingsRateAdjustment'
    },
    {
      code: 'BLDSUM',
      index: 4,
      text: 'Buildings Sum Insured',
      enumType: 'BuildingsSumInsured'
    },
    {
      code: 'CNTPREM',
      index: 5,
      text: 'Net Contents Premium',
      enumType: 'NetContentsPremium'
    },
    {
      code: 'CNTRATE',
      index: 6,
      text: 'Contents Rate (% Net)',
      enumType: 'ContentsRate'
    },
    {
      code: 'CNTRTADJ',
      index: 7,
      text: 'Contents Rate Adjustment (+ or - %)',
      enumType: 'ContentsRateAdjustment'
    },
    {
      code: 'CNTSUM',
      index: 8,
      text: 'Contents Sum Insured',
      enumType: 'ContentsSumInsured'
    },
    {
      code: 'COMMPER',
      index: 9,
      text: 'Commission Level Override (% total)',
      enumType: 'CommissionLevelOverride'
    },
    {
      code: 'FINPREM',
      index: 10,
      text: 'Net Policy Premium',
      enumType: 'NetPolicyPremium'
    },
    {
      code: 'INCFLOOD',
      index: 11,
      text: 'Allow Flood Cover - Avantia F only',
      enumType: 'AllowFloodCover'
    },
    {
      code: 'MAXPREM',
      index: 12,
      text: 'Maximum Net Policy Premium',
      enumType: 'MaximumNetPolicyPremium'
    },
    {
      code: 'MINAMT',
      index: 13,
      text: 'Minimum Policy Premium (GBP Net)',
      enumType: 'MinimumPolicyPremium'
    }
  ],
  SchemeType: [
    {
      code: 'AFHP2',
      index: 1,
      text: 'Avantia F Non-standard hp2',
      enumType: 'AvantiaFNonStandardHp2'
    },
    {
      code: 'ALSHP2',
      index: 2,
      text: 'Avantia Lifestyle (standard)',
      enumType: 'AvantiaLifestyleStandard'
    },
    {
      code: 'ANHP2',
      index: 3,
      text: 'Avantia Non-Standard hp2',
      enumType: 'AvantiaNonStandardHp2'
    },
    {
      code: 'APHP2',
      index: 4,
      text: 'Avantia P Non-standard hp2',
      enumType: 'AvantiaPNonStandardHp2'
    },
    {
      code: 'ASHP2',
      index: 5,
      text: 'Avantia Standard hp2',
      enumType: 'AvantiaStandardHp2'
    },
    {
      code: 'ATHP2',
      index: 6,
      text: 'Avantia T Non-standard hp2',
      enumType: 'AvantiaTNonStandardHp2'
    },
    {
      code: 'AUHP2',
      index: 7,
      text: 'Avantia U Non-standard hp2',
      enumType: 'AvantiaUNonStandardHp2'
    },
    {
      code: 'AXAHP2',
      index: 8,
      text: 'AXA hp2 (standard)',
      enumType: 'AxaStandardHp2'
    },
    {
      code: 'AXNSHP2',
      index: 9,
      text: 'AXA Non-Standard hp2',
      enumType: 'AxaNonStandardHp2'
    },
    {
      code: 'OAHP2',
      index: 10,
      text: 'OIM Affinity standard hp2',
      enumType: 'OimAffinityStandardHp2'
    }
  ],
  AdultCountType: [
    {
      code: '00',
      index: 1,
      text: '0',
      enumType: 'Zero'
    },
    {
      code: '1',
      index: 2,
      text: '1',
      enumType: 'One'
    },
    {
      code: '2',
      index: 3,
      text: '2',
      enumType: 'Two'
    },
    {
      code: '3',
      index: 4,
      text: '3',
      enumType: 'Three'
    },
    {
      code: '4',
      index: 5,
      text: '4',
      enumType: 'Four'
    },
    {
      code: '5',
      index: 6,
      text: '5',
      enumType: 'Five'
    },
    {
      code: '6',
      index: 7,
      text: '6',
      enumType: 'Six'
    },
    {
      code: '7',
      index: 8,
      text: '7',
      enumType: 'Seven'
    },
    {
      code: '7_10047',
      index: 9,
      text: '8',
      enumType: 'Eight'
    },
    {
      code: '7_10048',
      index: 10,
      text: '9',
      enumType: 'Nine'
    },
    {
      code: '7_10049',
      index: 11,
      text: '10',
      enumType: 'Ten'
    },
    {
      code: '7_10050',
      index: 12,
      text: 'More than 10',
      enumType: 'Eleven'
    }
  ],
  AmountOfCoverForBusinessType: [
    {
      code: 'N',
      index: 1,
      text: '£0',
      enumType: 'Zero'
    },
    {
      code: '5000',
      index: 2,
      text: '£5,000',
      enumType: 'FiveThousane'
    },
    {
      code: '10000',
      index: 3,
      text: '£10,000',
      enumType: 'TenThousand'
    },
    {
      code: '15000',
      index: 4,
      text: '£10,000+',
      enumType: 'GreaterThanTenThousand'
    }
  ],
  ChildrenCountType: [
    {
      code: '00',
      index: 1,
      text: '0',
      enumType: 'Zero'
    },
    {
      code: '1',
      index: 2,
      text: '1',
      enumType: 'One'
    },
    {
      code: '2',
      index: 3,
      text: '2',
      enumType: 'Two'
    },
    {
      code: '3',
      index: 4,
      text: '3',
      enumType: 'Three'
    },
    {
      code: '4',
      index: 5,
      text: '4',
      enumType: 'Four'
    },
    {
      code: '5',
      index: 6,
      text: '5',
      enumType: 'Five'
    },
    {
      code: '6',
      index: 7,
      text: '6',
      enumType: 'Six'
    },
    {
      code: '7',
      index: 8,
      text: '7',
      enumType: 'Seven'
    },
    {
      code: '7_6060',
      index: 9,
      text: '8',
      enumType: 'Eight'
    },
    {
      code: '7_6061',
      index: 10,
      text: '9',
      enumType: 'Nine'
    },
    {
      code: '7_6062',
      index: 11,
      text: '10',
      enumType: 'Ten'
    },
    {
      code: '7_6063',
      index: 12,
      text: 'More than 10',
      enumType: 'Eleven'
    }
  ],
  DaysUnoccupiedType: [
    {
      code: '30',
      index: 1,
      text: '0 to 30 days',
      enumType: 'Thirty',
      overrideText: ['0-30']
    },
    {
      code: '45',
      index: 2,
      text: '31 to 45 days',
      enumType: 'FourtyFive',
      overrideText: ['31-45']
    },
    {
      code: '60',
      index: 3,
      text: '46 to 60 days',
      enumType: 'Sixty',
      overrideText: ['45-60']
    },
    {
      code: '90',
      index: 4,
      text: '61 to 90 days',
      enumType: 'Ninety',
      overrideText: ['61-90']
    },
    {
      code: '180',
      index: 5,
      text: '91 to 180 days',
      enumType: 'OneHundredAndEighty',
      overrideText: ['91-180']
    },
    {
      code: '365',
      index: 6,
      text: '181 to 365 days',
      enumType: 'Year',
      overrideText: ['181-365']
    },
    {
      code: '730',
      index: 7,
      text: '1 to 2 years',
      enumType: 'TwoYears'
    },
    {
      code: '1095',
      index: 8,
      text: '2 years+',
      enumType: 'OverTwoYears'
    }
  ],
  FrequencyOfBusinessVisitorsType: [
    {
      code: '999',
      index: 1,
      text: 'Every day',
      enumType: 'Everyday'
    },
    {
      code: '1',
      index: 2,
      text: 'Once a week',
      enumType: 'OnceAWeek'
    },
    {
      code: '2',
      index: 3,
      text: 'Twice a week',
      enumType: 'TwiceAWeek'
    },
    {
      code: '31',
      index: 4,
      text: 'Twice a month',
      enumType: 'TwiceAMonth'
    },
    {
      code: '30',
      index: 5,
      text: 'Once a month',
      enumType: 'OnceAMonth'
    },
    {
      code: '90',
      index: 6,
      text: 'Once every 3 months',
      enumType: 'OnceEvery3Months'
    },
    {
      code: '180',
      index: 7,
      text: 'Once every 6 months',
      enumType: 'OnceEverySixMonths'
    },
    {
      code: '365',
      index: 8,
      text: 'Once a year',
      enumType: 'OnceAYear'
    },
    {
      code: 'N',
      index: 9,
      text: 'Never',
      enumType: 'Never'
    }
  ],
  MaximumNumberOfGuests: [
    {
      code: '1',
      index: 1,
      text: '1',
      enumType: 'One'
    },
    {
      code: '2',
      index: 2,
      text: '2',
      enumType: 'Two'
    },
    {
      code: '3',
      index: 3,
      text: '3',
      enumType: 'Three'
    },
    {
      code: '4',
      index: 4,
      text: '4',
      enumType: 'Four'
    },
    {
      code: '5',
      index: 5,
      text: '5',
      enumType: 'Five'
    },
    {
      code: '6',
      index: 6,
      text: '6',
      enumType: 'Six'
    },
    {
      code: '7',
      index: 7,
      text: '7',
      enumType: 'Seven'
    },
    {
      code: '8',
      index: 8,
      text: '8',
      enumType: 'Eight'
    },
    {
      code: '9',
      index: 9,
      text: '9',
      enumType: 'Nine'
    },
    {
      code: '10',
      index: 10,
      text: '10',
      enumType: 'Ten'
    },
    {
      code: '11',
      index: 11,
      text: '11',
      enumType: 'Eleven'
    },
    {
      code: '12',
      index: 12,
      text: '12',
      enumType: 'Twelve'
    },
    {
      code: '99',
      index: 13,
      text: 'Over 12',
      enumType: 'GreaterThanTwelve'
    }
  ],
  PropertyOccupancyType: [
    {
      code: 'OCC03',
      index: 1,
      text: 'Occupied day and night',
      enumType: 'OccupiedDayAndNight',
      overrideText: ['Day and night']
    },
    {
      code: 'OCC01',
      index: 2,
      text: 'Normally occupied at night',
      enumType: 'OccupiedAtNight',
      overrideText: ['At night']
    },
    {
      code: 'UNO01',
      index: 3,
      text: 'Unoccupied (weekdays)',
      enumType: 'UnoccupiedWeekDays',
      overrideText: ['Weekend only']
    },
    {
      code: 'UNO02',
      index: 4,
      text: 'Unoccupied (weekends)',
      enumType: 'UnoccupiedWeekends',
      overrideText: ['Weekdays only']
    },
    {
      code: 'OCC02',
      index: 5,
      text: 'Unoccupied during the night',
      enumType: 'UnoccupiedDuringDayAndNight',
      overrideText: ['During the day']
    },
    {
      code: 'UNO03',
      index: 6,
      text: 'Unoccupied at any time',
      enumType: 'UnoccupiedAtAnytime',
      overrideText: ['Permanently unoccupied']
    },
    {
      code: 'UNO04',
      index: 7,
      text: 'Unoccupied - up for sale',
      enumType: 'UnoccupiedUpForSale',
      overrideText: ['Unoccupied (up for sale)']
    },
    {
      code: 'UNO05',
      index: 8,
      text: 'Unoccupied - probate',
      enumType: 'UnoccupiedProbate',
      overrideText: ['Unoccupied (probate)']
    },
    {
      code: 'UNO06',
      index: 9,
      text: 'Unoccupied - under renovation',
      enumType: 'UnoccupiedUnderRenovation',
      overrideText: ['Unoccupied (renovation)']
    },
    {
      code: 'UNO07',
      index: 10,
      text: 'Unoccupied - apart from holidays',
      enumType: 'UnoccupiedHolidays',
      overrideText: ['Holidays only']
    }
  ],
  PropertyUsageType: [
    {
      code: 'OWN01',
      index: 1,
      text: 'Your permanent home',
      enumType: 'PermanentHome'
    },
    {
      code: 'TEN01',
      index: 2,
      text: 'Let to tenants - contract of 12 months or more',
      enumType: 'LetTenants12Months'
    },
    {
      code: 'STL01',
      index: 3,
      text: 'Short-term lets of less than 12 months',
      enumType: 'ShortTerm12Months'
    },
    {
      code: 'HOL01',
      index: 4,
      text: 'Holiday home',
      enumType: 'HolidayHome'
    },
    {
      code: 'WED01',
      index: 5,
      text: 'Weekday home - otherwise unoccupied',
      enumType: 'WeekdayHome'
    },
    {
      code: 'WEE01',
      index: 6,
      text: 'Weekend home - otherwise unoccupied',
      enumType: 'WeekendHome'
    },
    {
      code: 'UNO05',
      index: 7,
      text: 'Unoccupied - in probate',
      enumType: 'UnoccupiedInProbate'
    },
    {
      code: 'UNO04',
      index: 8,
      text: 'Unoccupied - up for sale',
      enumType: 'UnoccupiedForSale'
    },
    {
      code: 'UNO06',
      index: 9,
      text: 'Unoccupied - under renovation',
      enumType: 'UnoccupiedUnderRenovation'
    },
    {
      code: 'UNO01',
      index: 10,
      text: 'Unoccupied',
      enumType: 'Unoccupied'
    }
  ],
  StaffCountType: [
    {
      code: '00',
      index: 1,
      text: '0',
      enumType: 'Zero'
    },
    {
      code: '1',
      index: 2,
      text: '1',
      enumType: 'One'
    },
    {
      code: '2',
      index: 3,
      text: '2',
      enumType: 'Two'
    },
    {
      code: '3',
      index: 4,
      text: '3',
      enumType: 'Three'
    },
    {
      code: '4',
      index: 5,
      text: '4',
      enumType: 'Four'
    },
    {
      code: '5',
      index: 6,
      text: '5',
      enumType: 'Five'
    },
    {
      code: '6',
      index: 7,
      text: '6',
      enumType: 'Six'
    },
    {
      code: '7',
      index: 8,
      text: '7',
      enumType: 'Seven'
    },
    {
      code: '8',
      index: 9,
      text: '8',
      enumType: 'Eight'
    },
    {
      code: '9',
      index: 10,
      text: '9',
      enumType: 'Nine'
    },
    {
      code: '99',
      index: 11,
      text: '10+',
      enumType: 'Ten'
    }
  ],
  VisitorsAtPropertyType: [
    {
      code: '00',
      index: 1,
      text: 'None',
      enumType: 'None'
    },
    {
      code: '1',
      index: 2,
      text: '1',
      enumType: 'One'
    },
    {
      code: '2',
      index: 3,
      text: '2 to 6',
      enumType: 'TwoToSix'
    },
    {
      code: '6',
      index: 4,
      text: '7 to 10',
      enumType: 'SevenToTen'
    },
    {
      code: '11',
      index: 5,
      text: '11 to 20',
      enumType: 'ElevenToTwenty'
    },
    {
      code: '20',
      index: 6,
      text: '20+',
      enumType: 'TwentyPlus'
    }
  ],
  VoluntaryBuildingsExcessEnum: [
    {
      code: '00',
      index: 0,
      text: '£0',
      enumType: 'Zero'
    },
    {
      code: '50',
      index: 1,
      text: '£50',
      enumType: 'Fifty'
    },
    {
      code: '100',
      index: 2,
      text: '£100',
      enumType: 'OneHundred'
    },
    {
      code: '150',
      index: 3,
      text: '£150',
      enumType: 'OneHundredFifty'
    },
    {
      code: '200',
      index: 4,
      text: '£200',
      enumType: 'TwoHundred'
    },
    {
      code: '250',
      index: 5,
      text: '£250',
      enumType: 'TwoHundredFifty'
    },
    {
      code: '450',
      index: 6,
      text: '£450',
      enumType: 'FourHundredFifty'
    },
    {
      code: '500',
      index: 7,
      text: '£500',
      enumType: 'FiveHundred'
    },
    {
      code: '750',
      index: 8,
      text: '£750',
      enumType: 'SevenHundredFifty'
    },
    {
      code: '900',
      index: 9,
      text: '£900',
      enumType: 'NineHundred'
    }
  ],
  VoluntaryContentsExcessEnum: [
    {
      code: '00',
      index: 0,
      text: '£0',
      enumType: 'Zero'
    },
    {
      code: '50',
      index: 1,
      text: '£50',
      enumType: 'Fifty'
    },
    {
      code: '100',
      index: 2,
      text: '£100',
      enumType: 'OneHundred'
    },
    {
      code: '150',
      index: 3,
      text: '£150',
      enumType: 'OneHundredFifty'
    },
    {
      code: '200',
      index: 4,
      text: '£200',
      enumType: 'TwoHundred'
    },
    {
      code: '250',
      index: 5,
      text: '£250',
      enumType: 'TwoHundredFifty'
    },
    {
      code: '450',
      index: 6,
      text: '£450',
      enumType: 'FourHundredFifty'
    },
    {
      code: '500',
      index: 7,
      text: '£500',
      enumType: 'FiveHundred'
    },
    {
      code: '750',
      index: 8,
      text: '£750',
      enumType: 'SevenHundredFifty'
    },
    {
      code: '900',
      index: 9,
      text: '£900',
      enumType: 'NineHundred'
    }
  ],
  BusinessType: [
    {
      code: '188',
      index: 1,
      text: 'Abattoir',
      enumType: 'Abattoir'
    },
    {
      code: '1',
      index: 2,
      text: 'Accountancy',
      enumType: 'Accountancy'
    },
    {
      code: '189',
      index: 3,
      text: 'Acoustic Engineer',
      enumType: 'AcousticEngineer'
    },
    {
      code: '190',
      index: 4,
      text: 'Actuarial Consultancy',
      enumType: 'ActuarialConsultancy'
    },
    {
      code: '191',
      index: 5,
      text: 'Acupuncture',
      enumType: 'Acupuncture'
    },
    {
      code: '881',
      index: 6,
      text: 'Addressing/Circularising Services',
      enumType: 'AddressingCircularisingServices'
    },
    {
      code: '192',
      index: 7,
      text: 'Adjuster',
      enumType: 'Adjuster'
    },
    {
      code: '2',
      index: 8,
      text: 'Advertising',
      enumType: 'Advertising'
    },
    {
      code: '193',
      index: 9,
      text: 'Aerial Erector',
      enumType: 'AerialErector'
    },
    {
      code: '194',
      index: 10,
      text: 'Aerial Manufacturer',
      enumType: 'AerialManufacturer'
    },
    {
      code: '195',
      index: 11,
      text: 'Aerial Photography',
      enumType: 'AerialPhotography'
    },
    {
      code: '196',
      index: 12,
      text: 'Aerial Supplier',
      enumType: 'AerialSupplier'
    },
    {
      code: '197',
      index: 13,
      text: 'Aerial Survey',
      enumType: 'AerialSurvey'
    },
    {
      code: '798',
      index: 14,
      text: 'Aerospace Industry',
      enumType: 'AerospaceIndustry'
    },
    {
      code: '198',
      index: 15,
      text: 'Agricultural Engineer',
      enumType: 'AgriculturalEngineer'
    },
    {
      code: '882',
      index: 16,
      text: 'Agricultural Produce Distribution',
      enumType: 'AgriculturalProduceDistribution'
    },
    {
      code: '199',
      index: 17,
      text: 'Agriculture',
      enumType: 'Agriculture'
    },
    {
      code: '936',
      index: 18,
      text: 'Air Conditioning',
      enumType: 'AirConditioning'
    },
    {
      code: '3',
      index: 19,
      text: 'Air Transport',
      enumType: 'AirTransport'
    },
    {
      code: '200',
      index: 20,
      text: 'Aircraft Construction',
      enumType: 'AircraftConstruction'
    },
    {
      code: '201',
      index: 21,
      text: 'Aircraft Maintenance',
      enumType: 'AircraftMaintenance'
    },
    {
      code: '202',
      index: 22,
      text: 'Aircraft Repair',
      enumType: 'AircraftRepair'
    },
    {
      code: '203',
      index: 23,
      text: 'Airline',
      enumType: 'Airline'
    },
    {
      code: '906',
      index: 24,
      text: 'Airport Services',
      enumType: 'AirportServices'
    },
    {
      code: '4',
      index: 25,
      text: 'Airports',
      enumType: 'Airports'
    },
    {
      code: '204',
      index: 26,
      text: 'Ambulance Authority',
      enumType: 'AmbulanceAuthority'
    },
    {
      code: '5',
      index: 27,
      text: 'Amusement',
      enumType: 'Amusement'
    },
    {
      code: '6',
      index: 28,
      text: 'Amusement Arcade',
      enumType: 'AmusementArcade'
    },
    {
      code: '205',
      index: 29,
      text: 'Amusement Machine Supplier',
      enumType: 'AmusementMachineSupplier'
    },
    {
      code: '206',
      index: 30,
      text: 'Animal Breeding',
      enumType: 'AnimalBreeding'
    },
    {
      code: '799',
      index: 31,
      text: 'Animal Feeds',
      enumType: 'AnimalFeeds'
    },
    {
      code: '838',
      index: 32,
      text: 'Animal Rescue Home',
      enumType: 'AnimalRescueHome'
    },
    {
      code: '907',
      index: 33,
      text: 'Animal Training',
      enumType: 'AnimalTraining'
    },
    {
      code: '7',
      index: 34,
      text: 'Animals',
      enumType: 'Animals'
    },
    {
      code: '898',
      index: 35,
      text: 'Anthropology',
      enumType: 'Anthropology'
    },
    {
      code: '207',
      index: 36,
      text: 'Antique Restoration',
      enumType: 'AntiqueRestoration'
    },
    {
      code: '8',
      index: 37,
      text: 'Antiques',
      enumType: 'Antiques'
    },
    {
      code: '901',
      index: 38,
      text: 'Arable Farming',
      enumType: 'ArableFarming'
    },
    {
      code: '208',
      index: 39,
      text: 'Arbitration',
      enumType: 'Arbitration'
    },
    {
      code: '9',
      index: 40,
      text: 'Architecture',
      enumType: 'Architecture'
    },
    {
      code: '163',
      index: 41,
      text: 'Armed Forces - Foreign',
      enumType: 'ArmedForcesForeign'
    },
    {
      code: '162',
      index: 42,
      text: 'Armed Forces - Republic Of Ireland',
      enumType: 'ArmedForcesRepublicOfIreland'
    },
    {
      code: '161',
      index: 43,
      text: 'Armed Forces - UK',
      enumType: 'ArmedForcesUK'
    },
    {
      code: '209',
      index: 44,
      text: 'Armed Forces - USA',
      enumType: 'ArmedForcesUS'
    },
    {
      code: '210',
      index: 45,
      text: 'Art',
      enumType: 'Art'
    },
    {
      code: '211',
      index: 46,
      text: 'Art Gallery',
      enumType: 'ArtGallery'
    },
    {
      code: '212',
      index: 47,
      text: 'Art Restoration',
      enumType: 'ArtRestoration'
    },
    {
      code: '213',
      index: 48,
      text: 'Art Valuation',
      enumType: 'ArtValuation'
    },
    {
      code: '11',
      index: 49,
      text: 'Arts',
      enumType: 'Arts'
    },
    {
      code: '214',
      index: 50,
      text: 'Asphalt Contractor',
      enumType: 'AsphaltContractor'
    },
    {
      code: '13',
      index: 51,
      text: 'Asphalt/Road Contractors',
      enumType: 'AsphaltRoadContractors'
    },
    {
      code: '215',
      index: 52,
      text: 'Assessor',
      enumType: 'Assessor'
    },
    {
      code: '216',
      index: 53,
      text: 'Astrology',
      enumType: 'Astrology'
    },
    {
      code: '217',
      index: 54,
      text: 'Astronomy',
      enumType: 'Astronomy'
    },
    {
      code: '218',
      index: 55,
      text: 'Auction House',
      enumType: 'AuctionHouse'
    },
    {
      code: '14',
      index: 56,
      text: 'Auctioneer',
      enumType: 'Auctioneer'
    },
    {
      code: '808',
      index: 57,
      text: 'Auditors',
      enumType: 'Auditors'
    },
    {
      code: '219',
      index: 58,
      text: 'Baby Food Manufacturer',
      enumType: 'BabyFoodManufacturer'
    },
    {
      code: '220',
      index: 59,
      text: 'Baby Goods Manufacturer',
      enumType: 'BabyGoodsManufacturer'
    },
    {
      code: '221',
      index: 60,
      text: 'Baby Goods Shop',
      enumType: 'BabyGoodsShop'
    },
    {
      code: '222',
      index: 61,
      text: 'Please enter',
      enumType: 'Pleaseenter'
    },
    {
      code: '147',
      index: 62,
      text: 'Baker',
      enumType: 'Baker'
    },
    {
      code: '223',
      index: 63,
      text: 'Bakers Supplies',
      enumType: 'BakersSupplies'
    },
    {
      code: '224',
      index: 64,
      text: 'Bakery',
      enumType: 'Bakery'
    },
    {
      code: '15',
      index: 65,
      text: 'Banking',
      enumType: 'Banking'
    },
    {
      code: '225',
      index: 66,
      text: 'Barrel Makers',
      enumType: 'BarrelMakers'
    },
    {
      code: '226',
      index: 67,
      text: 'Bathroom Design',
      enumType: 'BathroomDesign'
    },
    {
      code: '227',
      index: 68,
      text: 'Bathroom Installation',
      enumType: 'BathroomInstallation'
    },
    {
      code: '171',
      index: 69,
      text: 'Beauticians',
      enumType: 'Beauticians'
    },
    {
      code: '809',
      index: 70,
      text: 'Beauty Salon',
      enumType: 'BeautySalon'
    },
    {
      code: '228',
      index: 71,
      text: 'Betting Shop',
      enumType: 'BettingShop'
    },
    {
      code: '839',
      index: 72,
      text: 'Bingo Hall',
      enumType: 'BingoHall'
    },
    {
      code: '229',
      index: 73,
      text: 'Blacksmith',
      enumType: 'Blacksmith'
    },
    {
      code: '230',
      index: 74,
      text: 'Blast Cleaning',
      enumType: 'BlastCleaning'
    },
    {
      code: '231',
      index: 75,
      text: 'Blind Installation',
      enumType: 'BlindInstallation'
    },
    {
      code: '232',
      index: 76,
      text: 'Blind Manufacturer',
      enumType: 'BlindManufacturer'
    },
    {
      code: '233',
      index: 77,
      text: 'Boarding Kennel',
      enumType: 'BoardingKennel'
    },
    {
      code: '234',
      index: 78,
      text: 'Boat Builder',
      enumType: 'BoatBuilder'
    },
    {
      code: '235',
      index: 79,
      text: 'Boat Hirer',
      enumType: 'BoatHirer'
    },
    {
      code: '236',
      index: 80,
      text: 'Bookmaker - Off Course',
      enumType: 'BookmakerOffCourse'
    },
    {
      code: '237',
      index: 81,
      text: 'Bookmaker - On Course',
      enumType: 'BookmakerOnCourse'
    },
    {
      code: '16',
      index: 82,
      text: 'Bookmaker/Betting Shop - Off Course',
      enumType: 'BookmakerBettingShopOffCourse'
    },
    {
      code: '17',
      index: 83,
      text: 'Bookmaker/Betting shop - On Course',
      enumType: 'BookmakerBettingshopOnCourse'
    },
    {
      code: '238',
      index: 84,
      text: 'Booksellers',
      enumType: 'Booksellers'
    },
    {
      code: '239',
      index: 85,
      text: 'Bottled Gas Supplier',
      enumType: 'BottledGasSupplier'
    },
    {
      code: '240',
      index: 86,
      text: 'Brass Foundry',
      enumType: 'BrassFoundry'
    },
    {
      code: '241',
      index: 87,
      text: 'Breakdown Recovery',
      enumType: 'BreakdownRecovery'
    },
    {
      code: '242',
      index: 88,
      text: 'Breeding',
      enumType: 'Breeding'
    },
    {
      code: '18',
      index: 89,
      text: 'Brewery',
      enumType: 'Brewery'
    },
    {
      code: '243',
      index: 90,
      text: 'Brewery Transport',
      enumType: 'BreweryTransport'
    },
    {
      code: '244',
      index: 91,
      text: 'Brick Manufacturer',
      enumType: 'BrickManufacturer'
    },
    {
      code: '245',
      index: 92,
      text: 'Brick Supplier',
      enumType: 'BrickSupplier'
    },
    {
      code: '933',
      index: 93,
      text: 'British Army',
      enumType: 'BritishArmy'
    },
    {
      code: '19',
      index: 94,
      text: 'Broadcasting',
      enumType: 'Broadcasting'
    },
    {
      code: '246',
      index: 95,
      text: 'Builder',
      enumType: 'Builder'
    },
    {
      code: '247',
      index: 96,
      text: 'Builders Merchant',
      enumType: 'BuildersMerchant'
    },
    {
      code: '20',
      index: 97,
      text: 'Building Society',
      enumType: 'BuildingSociety'
    },
    {
      code: '21',
      index: 98,
      text: 'Building Trade',
      enumType: 'BuildingTrade'
    },
    {
      code: '148',
      index: 99,
      text: 'Bulk Earth/Rubble Removers',
      enumType: 'BulkEarthRubbleRemovers'
    },
    {
      code: '248',
      index: 100,
      text: 'Business Consultancy',
      enumType: 'BusinessConsultancy'
    },
    {
      code: '822',
      index: 101,
      text: 'Business Systems',
      enumType: 'BusinessSystems'
    },
    {
      code: '249',
      index: 102,
      text: 'Business Training',
      enumType: 'BusinessTraining'
    },
    {
      code: '250',
      index: 103,
      text: 'Butchers',
      enumType: 'Butchers'
    },
    {
      code: '251',
      index: 104,
      text: 'Cabinet Maker',
      enumType: 'CabinetMaker'
    },
    {
      code: '252',
      index: 105,
      text: 'Cable Manufacturer',
      enumType: 'CableManufacturer'
    },
    {
      code: '840',
      index: 106,
      text: 'Cable TV Installation',
      enumType: 'CableTVInstallation'
    },
    {
      code: '253',
      index: 107,
      text: 'Cafe',
      enumType: 'Cafe'
    },
    {
      code: '254',
      index: 108,
      text: 'Camp Site',
      enumType: 'CampSite'
    },
    {
      code: '255',
      index: 109,
      text: 'Candle Dealer',
      enumType: 'CandleDealer'
    },
    {
      code: '256',
      index: 110,
      text: 'Car Accessory Dealer',
      enumType: 'CarAccessoryDealer'
    },
    {
      code: '257',
      index: 111,
      text: 'Car Delivery',
      enumType: 'CarDelivery'
    },
    {
      code: '258',
      index: 112,
      text: 'Car Hire',
      enumType: 'CarHire'
    },
    {
      code: '259',
      index: 113,
      text: 'Car Park Operator',
      enumType: 'CarParkOperator'
    },
    {
      code: '260',
      index: 114,
      text: 'Car Sales',
      enumType: 'CarSales'
    },
    {
      code: '261',
      index: 115,
      text: 'Car Valeting',
      enumType: 'CarValeting'
    },
    {
      code: '262',
      index: 116,
      text: 'Caravan Hirer',
      enumType: 'CaravanHirer'
    },
    {
      code: '263',
      index: 117,
      text: 'Caravan Sales',
      enumType: 'CaravanSales'
    },
    {
      code: '264',
      index: 118,
      text: 'Caravan Service',
      enumType: 'CaravanService'
    },
    {
      code: '265',
      index: 119,
      text: 'Caravan Site',
      enumType: 'CaravanSite'
    },
    {
      code: '22',
      index: 120,
      text: 'Caravan/Camp Site',
      enumType: 'CaravanCampSite'
    },
    {
      code: '266',
      index: 121,
      text: 'Carpentry',
      enumType: 'Carpentry'
    },
    {
      code: '267',
      index: 122,
      text: 'Carpet Fitting',
      enumType: 'CarpetFitting'
    },
    {
      code: '268',
      index: 123,
      text: 'Cartography',
      enumType: 'Cartography'
    },
    {
      code: '269',
      index: 124,
      text: 'Cash & Carry',
      enumType: 'CashCarry'
    },
    {
      code: '23',
      index: 125,
      text: 'Casino',
      enumType: 'Casino'
    },
    {
      code: '270',
      index: 126,
      text: 'Cask Maker',
      enumType: 'CaskMaker'
    },
    {
      code: '884',
      index: 127,
      text: 'Catalogue Co-ordination',
      enumType: 'CatalogueCoordination'
    },
    {
      code: '883',
      index: 128,
      text: 'Catalogue Distribution',
      enumType: 'CatalogueDistribution'
    },
    {
      code: '24',
      index: 129,
      text: 'Catering - Licensed',
      enumType: 'CateringLicensed'
    },
    {
      code: '25',
      index: 130,
      text: 'Catering - Unlicensed',
      enumType: 'CateringUnlicensed'
    },
    {
      code: '271',
      index: 131,
      text: 'Cattery',
      enumType: 'Cattery'
    },
    {
      code: '913',
      index: 132,
      text: 'Ceiling Contractor',
      enumType: 'CeilingContractor'
    },
    {
      code: '272',
      index: 133,
      text: 'Cement Suppliers',
      enumType: 'CementSuppliers'
    },
    {
      code: '146',
      index: 134,
      text: 'Cement/Concrete Suppliers',
      enumType: 'CementConcreteSuppliers'
    },
    {
      code: '273',
      index: 135,
      text: 'Central Heating Services',
      enumType: 'CentralHeatingServices'
    },
    {
      code: '26',
      index: 136,
      text: 'Charity',
      enumType: 'Charity'
    },
    {
      code: '274',
      index: 137,
      text: 'Chartering',
      enumType: 'Chartering'
    },
    {
      code: '810',
      index: 138,
      text: 'Chemical Industry',
      enumType: 'ChemicalIndustry'
    },
    {
      code: '817',
      index: 139,
      text: 'Chemical Manufacturer',
      enumType: 'ChemicalManufacturer'
    },
    {
      code: '275',
      index: 140,
      text: 'Chemist Shop',
      enumType: 'ChemistShop'
    },
    {
      code: '854',
      index: 141,
      text: 'Child Minding',
      enumType: 'ChildMinding'
    },
    {
      code: '276',
      index: 142,
      text: 'Childrens Panel',
      enumType: 'ChildrensPanel'
    },
    {
      code: '277',
      index: 143,
      text: 'Chimney Sweeping',
      enumType: 'ChimneySweeping'
    },
    {
      code: '278',
      index: 144,
      text: 'Chiropody',
      enumType: 'Chiropody'
    },
    {
      code: '279',
      index: 145,
      text: 'Choreography',
      enumType: 'Choreography'
    },
    {
      code: '27',
      index: 146,
      text: 'Cinema',
      enumType: 'Cinema'
    },
    {
      code: '28',
      index: 147,
      text: 'Circus',
      enumType: 'Circus'
    },
    {
      code: '893',
      index: 148,
      text: 'Citizens Advice Bureau',
      enumType: 'CitizensAdviceBureau'
    },
    {
      code: '280',
      index: 149,
      text: 'Civil Aviation',
      enumType: 'CivilAviation'
    },
    {
      code: '281',
      index: 150,
      text: 'Civil Engineering',
      enumType: 'CivilEngineering'
    },
    {
      code: '29',
      index: 151,
      text: 'Civil Service',
      enumType: 'CivilService'
    },
    {
      code: '30',
      index: 152,
      text: 'Civil/Consultant Engineering',
      enumType: 'CivilConsultantEngineering'
    },
    {
      code: '282',
      index: 153,
      text: 'Cleaning Services',
      enumType: 'CleaningServices'
    },
    {
      code: '885',
      index: 154,
      text: 'Clerical Services',
      enumType: 'ClericalServices'
    },
    {
      code: '283',
      index: 155,
      text: 'Clock & Watch Manufacturer',
      enumType: 'ClockWatchManufacturer'
    },
    {
      code: '284',
      index: 156,
      text: 'Clock & Watch Repair',
      enumType: 'ClockWatchRepair'
    },
    {
      code: '858',
      index: 157,
      text: 'Clothing Manufacturer',
      enumType: 'ClothingManufacturer'
    },
    {
      code: '31',
      index: 158,
      text: 'Clothing Trade',
      enumType: 'ClothingTrade'
    },
    {
      code: '32',
      index: 159,
      text: 'Club',
      enumType: 'Club'
    },
    {
      code: '285',
      index: 160,
      text: 'Coach Hirer',
      enumType: 'CoachHirer'
    },
    {
      code: '286',
      index: 161,
      text: 'Coachbuilder',
      enumType: 'Coachbuilder'
    },
    {
      code: '33',
      index: 162,
      text: 'Coal Industry',
      enumType: 'CoalIndustry'
    },
    {
      code: '287',
      index: 163,
      text: 'Coal Merchant',
      enumType: 'CoalMerchant'
    },
    {
      code: '288',
      index: 164,
      text: 'Coffee Shop',
      enumType: 'CoffeeShop'
    },
    {
      code: '289',
      index: 165,
      text: 'Coin & Medal Dealer',
      enumType: 'CoinMedalDealer'
    },
    {
      code: '290',
      index: 166,
      text: 'Cold Store',
      enumType: 'ColdStore'
    },
    {
      code: '291',
      index: 167,
      text: 'Commissioners For Oaths',
      enumType: 'CommissionersForOaths'
    },
    {
      code: '34',
      index: 168,
      text: 'Commodities',
      enumType: 'Commodities'
    },
    {
      code: '292',
      index: 169,
      text: 'Commodity Brokerage',
      enumType: 'CommodityBrokerage'
    },
    {
      code: '293',
      index: 170,
      text: 'Communications',
      enumType: 'Communications'
    },
    {
      code: '294',
      index: 171,
      text: 'Community Service',
      enumType: 'CommunityService'
    },
    {
      code: '818',
      index: 172,
      text: 'Computer Aided Design',
      enumType: 'ComputerAidedDesign'
    },
    {
      code: '824',
      index: 173,
      text: 'Computer Distribution',
      enumType: 'ComputerDistribution'
    },
    {
      code: '812',
      index: 174,
      text: 'Computer Sales',
      enumType: 'ComputerSales'
    },
    {
      code: '295',
      index: 175,
      text: 'Computer Services',
      enumType: 'ComputerServices'
    },
    {
      code: '886',
      index: 176,
      text: 'Computer Supplies',
      enumType: 'ComputerSupplies'
    },
    {
      code: '181',
      index: 177,
      text: 'Computers',
      enumType: 'Computers'
    },
    {
      code: '35',
      index: 178,
      text: 'Computers - Hardware',
      enumType: 'ComputersHardware'
    },
    {
      code: '36',
      index: 179,
      text: 'Computers - Software',
      enumType: 'ComputersSoftware'
    },
    {
      code: '296',
      index: 180,
      text: 'Concrete Supplier',
      enumType: 'ConcreteSupplier'
    },
    {
      code: '297',
      index: 181,
      text: 'Confectionery Manufacturer',
      enumType: 'ConfectioneryManufacturer'
    },
    {
      code: '160',
      index: 182,
      text: 'Construction Industry',
      enumType: 'ConstructionIndustry'
    },
    {
      code: '298',
      index: 183,
      text: 'Consulting Engineering',
      enumType: 'ConsultingEngineering'
    },
    {
      code: '299',
      index: 184,
      text: 'Contact Lens Manufacturer',
      enumType: 'ContactLensManufacturer'
    },
    {
      code: '300',
      index: 185,
      text: 'Container Hire',
      enumType: 'ContainerHire'
    },
    {
      code: '301',
      index: 186,
      text: 'Conveyancers',
      enumType: 'Conveyancers'
    },
    {
      code: '825',
      index: 187,
      text: 'Corporate Hospitality',
      enumType: 'CorporateHospitality'
    },
    {
      code: '811',
      index: 188,
      text: 'Cosmetics',
      enumType: 'Cosmetics'
    },
    {
      code: '302',
      index: 189,
      text: 'Costumiers',
      enumType: 'Costumiers'
    },
    {
      code: '303',
      index: 190,
      text: 'Cotton Mill',
      enumType: 'CottonMill'
    },
    {
      code: '304',
      index: 191,
      text: 'Courier Services',
      enumType: 'CourierServices'
    },
    {
      code: '37',
      index: 192,
      text: 'Couriers/Delivery Service',
      enumType: 'CouriersDeliveryService'
    },
    {
      code: '305',
      index: 193,
      text: 'Crane Hire',
      enumType: 'CraneHire'
    },
    {
      code: '306',
      index: 194,
      text: 'Crane Manufacturer',
      enumType: 'CraneManufacturer'
    },
    {
      code: '149',
      index: 195,
      text: 'Crop Spraying',
      enumType: 'CropSpraying'
    },
    {
      code: '38',
      index: 196,
      text: 'Customs and Excise',
      enumType: 'CustomsandExcise'
    },
    {
      code: '307',
      index: 197,
      text: 'Cutlery Craftsmen',
      enumType: 'CutleryCraftsmen'
    },
    {
      code: '308',
      index: 198,
      text: 'Cycle Hire',
      enumType: 'CycleHire'
    },
    {
      code: '309',
      index: 199,
      text: 'Cycle Shop',
      enumType: 'CycleShop'
    },
    {
      code: '39',
      index: 200,
      text: 'Dairy',
      enumType: 'Dairy'
    },
    {
      code: '900',
      index: 201,
      text: 'Dairy Farming',
      enumType: 'DairyFarming'
    },
    {
      code: '310',
      index: 202,
      text: 'Data Processing',
      enumType: 'DataProcessing'
    },
    {
      code: '311',
      index: 203,
      text: 'Data Protection',
      enumType: 'DataProtection'
    },
    {
      code: '911',
      index: 204,
      text: 'Dating Agency',
      enumType: 'DatingAgency'
    },
    {
      code: '40',
      index: 205,
      text: 'Debt Collection',
      enumType: 'DebtCollection'
    },
    {
      code: '312',
      index: 206,
      text: 'Decorating',
      enumType: 'Decorating'
    },
    {
      code: '866',
      index: 207,
      text: 'Delicatessen',
      enumType: 'Delicatessen'
    },
    {
      code: '313',
      index: 208,
      text: 'Delivery Service',
      enumType: 'DeliveryService'
    },
    {
      code: '41',
      index: 209,
      text: 'Demolition',
      enumType: 'Demolition'
    },
    {
      code: '42',
      index: 210,
      text: 'Dentistry',
      enumType: 'Dentistry'
    },
    {
      code: '314',
      index: 211,
      text: 'Department Store',
      enumType: 'DepartmentStore'
    },
    {
      code: '833',
      index: 212,
      text: 'Design Consultancy',
      enumType: 'DesignConsultancy'
    },
    {
      code: '887',
      index: 213,
      text: 'Desktop Publishing Services',
      enumType: 'DesktopPublishingServices'
    },
    {
      code: '315',
      index: 214,
      text: 'Despatch Services',
      enumType: 'DespatchServices'
    },
    {
      code: '44',
      index: 215,
      text: 'Discotheque',
      enumType: 'Discotheque'
    },
    {
      code: '316',
      index: 216,
      text: 'Distillers',
      enumType: 'Distillers'
    },
    {
      code: '813',
      index: 217,
      text: 'Distribution',
      enumType: 'Distribution'
    },
    {
      code: '317',
      index: 218,
      text: 'DIY Store',
      enumType: 'DIYStore'
    },
    {
      code: '318',
      index: 219,
      text: 'Dock Authority',
      enumType: 'DockAuthority'
    },
    {
      code: '157',
      index: 220,
      text: 'Domestic Appliance Maintenance',
      enumType: 'DomesticApplianceMaintenance'
    },
    {
      code: '319',
      index: 221,
      text: 'Domestic Service',
      enumType: 'DomesticService'
    },
    {
      code: '172',
      index: 222,
      text: 'Double Glazing',
      enumType: 'DoubleGlazing'
    },
    {
      code: '937',
      index: 223,
      text: 'Drainage',
      enumType: 'Drainage'
    },
    {
      code: '45',
      index: 224,
      text: 'Drapery',
      enumType: 'Drapery'
    },
    {
      code: '320',
      index: 225,
      text: 'Driving Authority',
      enumType: 'DrivingAuthority'
    },
    {
      code: '46',
      index: 226,
      text: 'Driving Instruction',
      enumType: 'DrivingInstruction'
    },
    {
      code: '321',
      index: 227,
      text: 'Driving School',
      enumType: 'DrivingSchool'
    },
    {
      code: '800',
      index: 228,
      text: 'Dry Cleaning',
      enumType: 'DryCleaning'
    },
    {
      code: '938',
      index: 229,
      text: 'Dry Lining',
      enumType: 'DryLining'
    },
    {
      code: '322',
      index: 230,
      text: 'Earth Removers',
      enumType: 'EarthRemovers'
    },
    {
      code: '897',
      index: 231,
      text: 'Ecology',
      enumType: 'Ecology'
    },
    {
      code: '323',
      index: 232,
      text: 'Education',
      enumType: 'Education'
    },
    {
      code: '47',
      index: 233,
      text: 'Education - Private',
      enumType: 'EducationPrivate'
    },
    {
      code: '138',
      index: 234,
      text: 'Education - State',
      enumType: 'EducationState'
    },
    {
      code: '324',
      index: 235,
      text: 'Effluent Disposal',
      enumType: 'EffluentDisposal'
    },
    {
      code: '325',
      index: 236,
      text: 'Egg Merchants',
      enumType: 'EggMerchants'
    },
    {
      code: '823',
      index: 237,
      text: 'Electrical Appliance Manufacturer',
      enumType: 'ElectricalApplianceManufacturer'
    },
    {
      code: '326',
      index: 238,
      text: 'Electrical Contractors',
      enumType: 'ElectricalContractors'
    },
    {
      code: '834',
      index: 239,
      text: 'Electrical Goods Consultancy',
      enumType: 'ElectricalGoodsConsultancy'
    },
    {
      code: '48',
      index: 240,
      text: 'Electricity Industry',
      enumType: 'ElectricityIndustry'
    },
    {
      code: '49',
      index: 241,
      text: 'Electronics',
      enumType: 'Electronics'
    },
    {
      code: '327',
      index: 242,
      text: 'Embossers',
      enumType: 'Embossers'
    },
    {
      code: '50',
      index: 243,
      text: 'Emergency Services',
      enumType: 'EmergencyServices'
    },
    {
      code: '328',
      index: 244,
      text: 'Employment Agency',
      enumType: 'EmploymentAgency'
    },
    {
      code: '939',
      index: 245,
      text: 'Energy Conservation',
      enumType: 'EnergyConservation'
    },
    {
      code: '329',
      index: 246,
      text: 'Energy Consultancy',
      enumType: 'EnergyConsultancy'
    },
    {
      code: '139',
      index: 247,
      text: 'Engineering',
      enumType: 'Engineering'
    },
    {
      code: '330',
      index: 248,
      text: 'Engineering Consultants',
      enumType: 'EngineeringConsultants'
    },
    {
      code: '182',
      index: 249,
      text: 'Engraving',
      enumType: 'Engraving'
    },
    {
      code: '51',
      index: 250,
      text: 'Entertainment',
      enumType: 'Entertainment'
    },
    {
      code: '869',
      index: 251,
      text: 'Environmental Health',
      enumType: 'EnvironmentalHealth'
    },
    {
      code: '52',
      index: 252,
      text: 'Estate Agency',
      enumType: 'EstateAgency'
    },
    {
      code: '331',
      index: 253,
      text: 'Excavation',
      enumType: 'Excavation'
    },
    {
      code: '332',
      index: 254,
      text: 'Exhibition Centre',
      enumType: 'ExhibitionCentre'
    },
    {
      code: '333',
      index: 255,
      text: 'Exhibition Organisers',
      enumType: 'ExhibitionOrganisers'
    },
    {
      code: '334',
      index: 256,
      text: 'Export',
      enumType: 'Export'
    },
    {
      code: '335',
      index: 257,
      text: 'Export Agency',
      enumType: 'ExportAgency'
    },
    {
      code: '336',
      index: 258,
      text: 'Exporter',
      enumType: 'Exporter'
    },
    {
      code: '337',
      index: 259,
      text: 'Fabric Manufacturer',
      enumType: 'FabricManufacturer'
    },
    {
      code: '867',
      index: 260,
      text: 'Fabrications',
      enumType: 'Fabrications'
    },
    {
      code: '53',
      index: 261,
      text: 'Fairground',
      enumType: 'Fairground'
    },
    {
      code: '876',
      index: 262,
      text: 'Falconry',
      enumType: 'Falconry'
    },
    {
      code: '168',
      index: 263,
      text: 'Fancy Goods',
      enumType: 'FancyGoods'
    },
    {
      code: '338',
      index: 264,
      text: 'Fancy Goods Importer',
      enumType: 'FancyGoodsImporter'
    },
    {
      code: '54',
      index: 265,
      text: 'Farming',
      enumType: 'Farming'
    },
    {
      code: '920',
      index: 266,
      text: 'Fascia Board Installer',
      enumType: 'FasciaBoardInstaller'
    },
    {
      code: '55',
      index: 267,
      text: 'Fashion',
      enumType: 'Fashion'
    },
    {
      code: '339',
      index: 268,
      text: 'Fashion Design',
      enumType: 'FashionDesign'
    },
    {
      code: '340',
      index: 269,
      text: 'Fashion House',
      enumType: 'FashionHouse'
    },
    {
      code: '841',
      index: 270,
      text: 'Fast Food',
      enumType: 'FastFood'
    },
    {
      code: '341',
      index: 271,
      text: 'Fencing Manufacturer',
      enumType: 'FencingManufacturer'
    },
    {
      code: '342',
      index: 272,
      text: 'Ferry Service',
      enumType: 'FerryService'
    },
    {
      code: '343',
      index: 273,
      text: 'Fertilizer Manufacturer',
      enumType: 'FertilizerManufacturer'
    },
    {
      code: '344',
      index: 274,
      text: 'Fibre Glass Manufacturer',
      enumType: 'FibreGlassManufacturer'
    },
    {
      code: '345',
      index: 275,
      text: 'Filling Station',
      enumType: 'FillingStation'
    },
    {
      code: '346',
      index: 276,
      text: 'Film Manufacturing',
      enumType: 'FilmManufacturing'
    },
    {
      code: '347',
      index: 277,
      text: 'Film Processing',
      enumType: 'FilmProcessing'
    },
    {
      code: '348',
      index: 278,
      text: 'Film Production',
      enumType: 'FilmProduction'
    },
    {
      code: '165',
      index: 279,
      text: 'Films',
      enumType: 'Films'
    },
    {
      code: '349',
      index: 280,
      text: 'Finance Company',
      enumType: 'FinanceCompany'
    },
    {
      code: '350',
      index: 281,
      text: 'Financial Advisors',
      enumType: 'FinancialAdvisors'
    },
    {
      code: '56',
      index: 282,
      text: 'Financial Services',
      enumType: 'FinancialServices'
    },
    {
      code: '351',
      index: 283,
      text: 'Fire Protection',
      enumType: 'FireProtection'
    },
    {
      code: '352',
      index: 284,
      text: 'Fireplace Installer',
      enumType: 'FireplaceInstaller'
    },
    {
      code: '353',
      index: 285,
      text: 'Fireplace Manufacturer',
      enumType: 'FireplaceManufacturer'
    },
    {
      code: '354',
      index: 286,
      text: 'Fish & Chip Shop',
      enumType: 'FishChipShop'
    },
    {
      code: '355',
      index: 287,
      text: 'Fish Farm',
      enumType: 'FishFarm'
    },
    {
      code: '150',
      index: 288,
      text: 'Fish Merchants',
      enumType: 'FishMerchants'
    },
    {
      code: '943',
      index: 289,
      text: 'Fisheries',
      enumType: 'Fisheries'
    },
    {
      code: '842',
      index: 290,
      text: 'Fishing',
      enumType: 'Fishing'
    },
    {
      code: '926',
      index: 291,
      text: 'Fishing Rights',
      enumType: 'FishingRights'
    },
    {
      code: '356',
      index: 292,
      text: 'Fishmonger',
      enumType: 'Fishmonger'
    },
    {
      code: '914',
      index: 293,
      text: 'Fitted Bedroom Installer',
      enumType: 'FittedBedroomInstaller'
    },
    {
      code: '915',
      index: 294,
      text: 'Fitted Kitchen Installer',
      enumType: 'FittedKitchenInstaller'
    },
    {
      code: '916',
      index: 295,
      text: 'Flooring Construction',
      enumType: 'FlooringConstruction'
    },
    {
      code: '918',
      index: 296,
      text: 'Flooring Installer',
      enumType: 'FlooringInstaller'
    },
    {
      code: '917',
      index: 297,
      text: 'Flooring Services',
      enumType: 'FlooringServices'
    },
    {
      code: '357',
      index: 298,
      text: 'Florists',
      enumType: 'Florists'
    },
    {
      code: '358',
      index: 299,
      text: 'Flying School',
      enumType: 'FlyingSchool'
    },
    {
      code: '359',
      index: 300,
      text: 'Food Exporter',
      enumType: 'FoodExporter'
    },
    {
      code: '360',
      index: 301,
      text: 'Food Importer',
      enumType: 'FoodImporter'
    },
    {
      code: '361',
      index: 302,
      text: 'Food Manufacturer',
      enumType: 'FoodManufacturer'
    },
    {
      code: '814',
      index: 303,
      text: 'Food Production',
      enumType: 'FoodProduction'
    },
    {
      code: '362',
      index: 304,
      text: 'Food Store',
      enumType: 'FoodStore'
    },
    {
      code: '363',
      index: 305,
      text: 'Football Pools',
      enumType: 'FootballPools'
    },
    {
      code: '364',
      index: 306,
      text: 'Forestry',
      enumType: 'Forestry'
    },
    {
      code: '843',
      index: 307,
      text: 'Fostering/Adoption Agency',
      enumType: 'FosteringAdoptionAgency'
    },
    {
      code: '365',
      index: 308,
      text: 'Foundry',
      enumType: 'Foundry'
    },
    {
      code: '366',
      index: 309,
      text: 'Freezer Centre',
      enumType: 'FreezerCentre'
    },
    {
      code: '183',
      index: 310,
      text: 'Freight',
      enumType: 'Freight'
    },
    {
      code: '367',
      index: 311,
      text: 'Freight Agents',
      enumType: 'FreightAgents'
    },
    {
      code: '815',
      index: 312,
      text: 'Freight Forwarders',
      enumType: 'FreightForwarders'
    },
    {
      code: '870',
      index: 313,
      text: 'French Polishing',
      enumType: 'FrenchPolishing'
    },
    {
      code: '368',
      index: 314,
      text: 'Friendly Society',
      enumType: 'FriendlySociety'
    },
    {
      code: '871',
      index: 315,
      text: 'Frozen Food Distribution',
      enumType: 'FrozenFoodDistribution'
    },
    {
      code: '369',
      index: 316,
      text: 'Fuel Distribution',
      enumType: 'FuelDistribution'
    },
    {
      code: '370',
      index: 317,
      text: 'Fuel Merchant',
      enumType: 'FuelMerchant'
    },
    {
      code: '173',
      index: 318,
      text: 'Funeral Director',
      enumType: 'FuneralDirector'
    },
    {
      code: '371',
      index: 319,
      text: 'Fur Trade',
      enumType: 'FurTrade'
    },
    {
      code: '140',
      index: 320,
      text: 'Furniture',
      enumType: 'Furniture'
    },
    {
      code: '925',
      index: 321,
      text: 'Furniture Installer',
      enumType: 'FurnitureInstaller'
    },
    {
      code: '372',
      index: 322,
      text: 'Furniture Manufacture',
      enumType: 'FurnitureManufacture'
    },
    {
      code: '373',
      index: 323,
      text: 'Furniture Remover',
      enumType: 'FurnitureRemover'
    },
    {
      code: '374',
      index: 324,
      text: 'Furniture Repair',
      enumType: 'FurnitureRepair'
    },
    {
      code: '375',
      index: 325,
      text: 'Furniture Sales',
      enumType: 'FurnitureSales'
    },
    {
      code: '376',
      index: 326,
      text: 'Furniture Store',
      enumType: 'FurnitureStore'
    },
    {
      code: '377',
      index: 327,
      text: 'Furniture Storer',
      enumType: 'FurnitureStorer'
    },
    {
      code: '378',
      index: 328,
      text: 'Furriers',
      enumType: 'Furriers'
    },
    {
      code: '57',
      index: 329,
      text: 'Gambling',
      enumType: 'Gambling'
    },
    {
      code: '379',
      index: 330,
      text: 'Game Breeders',
      enumType: 'GameBreeders'
    },
    {
      code: '58',
      index: 331,
      text: 'Garage',
      enumType: 'Garage'
    },
    {
      code: '826',
      index: 332,
      text: 'Garden Centre',
      enumType: 'GardenCentre'
    },
    {
      code: '380',
      index: 333,
      text: 'Gardening',
      enumType: 'Gardening'
    },
    {
      code: '844',
      index: 334,
      text: 'Gas - Offshore',
      enumType: 'GasOffshore'
    },
    {
      code: '381',
      index: 335,
      text: 'Gas Exploration',
      enumType: 'GasExploration'
    },
    {
      code: '59',
      index: 336,
      text: 'Gas Industry',
      enumType: 'GasIndustry'
    },
    {
      code: '60',
      index: 337,
      text: 'Gas/Oil Exploration',
      enumType: 'GasOilExploration'
    },
    {
      code: '855',
      index: 338,
      text: 'Genealogy',
      enumType: 'Genealogy'
    },
    {
      code: '61',
      index: 339,
      text: 'General Dealer',
      enumType: 'GeneralDealer'
    },
    {
      code: '382',
      index: 340,
      text: 'General Store',
      enumType: 'GeneralStore'
    },
    {
      code: '383',
      index: 341,
      text: 'Gift Shop',
      enumType: 'GiftShop'
    },
    {
      code: '384',
      index: 342,
      text: 'Glass Manufacture',
      enumType: 'GlassManufacture'
    },
    {
      code: '385',
      index: 343,
      text: 'Glaziers',
      enumType: 'Glaziers'
    },
    {
      code: '386',
      index: 344,
      text: 'Golf Club',
      enumType: 'GolfClub'
    },
    {
      code: '151',
      index: 345,
      text: 'Government - Foreign',
      enumType: 'GovernmentForeign'
    },
    {
      code: '152',
      index: 346,
      text: 'Government - Republic Of Ireland',
      enumType: 'GovernmentRepublicOfIreland'
    },
    {
      code: '387',
      index: 347,
      text: 'Government - UK',
      enumType: 'GovernmentUK'
    },
    {
      code: '62',
      index: 348,
      text: 'Government - UK Central',
      enumType: 'GovernmentUKCentral'
    },
    {
      code: '64',
      index: 349,
      text: 'Gown Mantle or Fur Trade',
      enumType: 'GownMantleorFurTrade'
    },
    {
      code: '388',
      index: 350,
      text: 'Gown Trade',
      enumType: 'GownTrade'
    },
    {
      code: '389',
      index: 351,
      text: 'Grain Merchants',
      enumType: 'GrainMerchants'
    },
    {
      code: '390',
      index: 352,
      text: 'Grain Mill',
      enumType: 'GrainMill'
    },
    {
      code: '895',
      index: 353,
      text: 'Graphic Design',
      enumType: 'GraphicDesign'
    },
    {
      code: '879',
      index: 354,
      text: 'Graphology',
      enumType: 'Graphology'
    },
    {
      code: '391',
      index: 355,
      text: 'Greengrocer',
      enumType: 'Greengrocer'
    },
    {
      code: '392',
      index: 356,
      text: 'Greeting Card Manufacturer',
      enumType: 'GreetingCardManufacturer'
    },
    {
      code: '393',
      index: 357,
      text: 'Greeting Card Sales',
      enumType: 'GreetingCardSales'
    },
    {
      code: '394',
      index: 358,
      text: 'Greyhound Racing',
      enumType: 'GreyhoundRacing'
    },
    {
      code: '65',
      index: 359,
      text: 'Greyhounds',
      enumType: 'Greyhounds'
    },
    {
      code: '395',
      index: 360,
      text: 'Grit Blasters',
      enumType: 'GritBlasters'
    },
    {
      code: '396',
      index: 361,
      text: 'Grocer',
      enumType: 'Grocer'
    },
    {
      code: '397',
      index: 362,
      text: 'Ground Maintenance',
      enumType: 'GroundMaintenance'
    },
    {
      code: '398',
      index: 363,
      text: 'Guest House',
      enumType: 'GuestHouse'
    },
    {
      code: '829',
      index: 364,
      text: 'Guest House - Licensed',
      enumType: 'GuestHouseLicensed'
    },
    {
      code: '830',
      index: 365,
      text: 'Guest House - Unlicensed',
      enumType: 'GuestHouseUnlicensed'
    },
    {
      code: '919',
      index: 366,
      text: 'Guttering Installer',
      enumType: 'GutteringInstaller'
    },
    {
      code: '66',
      index: 367,
      text: 'Hairdressing',
      enumType: 'Hairdressing'
    },
    {
      code: '399',
      index: 368,
      text: 'Harbour Authority',
      enumType: 'HarbourAuthority'
    },
    {
      code: '67',
      index: 369,
      text: 'Harbour Board',
      enumType: 'HarbourBoard'
    },
    {
      code: '400',
      index: 370,
      text: 'Hardware Manufacturer',
      enumType: 'HardwareManufacturer'
    },
    {
      code: '401',
      index: 371,
      text: 'Hardware Retailer',
      enumType: 'HardwareRetailer'
    },
    {
      code: '174',
      index: 372,
      text: 'Haulage Contractors',
      enumType: 'HaulageContractors'
    },
    {
      code: '402',
      index: 373,
      text: 'Health Authority',
      enumType: 'HealthAuthority'
    },
    {
      code: '68',
      index: 374,
      text: 'Health Care - NHS',
      enumType: 'HealthCareNHS'
    },
    {
      code: '69',
      index: 375,
      text: 'Health Care - Private',
      enumType: 'HealthCarePrivate'
    },
    {
      code: '403',
      index: 376,
      text: 'Health Centre',
      enumType: 'HealthCentre'
    },
    {
      code: '404',
      index: 377,
      text: 'Health Club',
      enumType: 'HealthClub'
    },
    {
      code: '889',
      index: 378,
      text: 'Health Products Distribution',
      enumType: 'HealthProductsDistribution'
    },
    {
      code: '405',
      index: 379,
      text: 'Heating Consultant',
      enumType: 'HeatingConsultant'
    },
    {
      code: '406',
      index: 380,
      text: 'Heating Services',
      enumType: 'HeatingServices'
    },
    {
      code: '407',
      index: 381,
      text: 'Hire Purchase',
      enumType: 'HirePurchase'
    },
    {
      code: '408',
      index: 382,
      text: 'HM Forces',
      enumType: 'HMForces'
    },
    {
      code: '409',
      index: 383,
      text: 'Hobby Shop',
      enumType: 'HobbyShop'
    },
    {
      code: '410',
      index: 384,
      text: 'Holiday Accommodation',
      enumType: 'HolidayAccommodation'
    },
    {
      code: '70',
      index: 385,
      text: 'Holiday Camp',
      enumType: 'HolidayCamp'
    },
    {
      code: '411',
      index: 386,
      text: 'Holiday Centre',
      enumType: 'HolidayCentre'
    },
    {
      code: '412',
      index: 387,
      text: 'Home Help Services',
      enumType: 'HomeHelpServices'
    },
    {
      code: '888',
      index: 388,
      text: 'Honey Producer',
      enumType: 'HoneyProducer'
    },
    {
      code: '71',
      index: 389,
      text: 'Horses',
      enumType: 'Horses'
    },
    {
      code: '184',
      index: 390,
      text: 'Horticulture',
      enumType: 'Horticulture'
    },
    {
      code: '413',
      index: 391,
      text: 'Hospital',
      enumType: 'Hospital'
    },
    {
      code: '72',
      index: 392,
      text: 'Hotel - Licensed',
      enumType: 'HotelLicensed'
    },
    {
      code: '73',
      index: 393,
      text: 'Hotel - Unlicensed',
      enumType: 'HotelUnlicensed'
    },
    {
      code: '414',
      index: 394,
      text: 'House Builders',
      enumType: 'HouseBuilders'
    },
    {
      code: '415',
      index: 395,
      text: 'Housing Association',
      enumType: 'HousingAssociation'
    },
    {
      code: '416',
      index: 396,
      text: 'Housing Developers',
      enumType: 'HousingDevelopers'
    },
    {
      code: '417',
      index: 397,
      text: 'Hypermarket',
      enumType: 'Hypermarket'
    },
    {
      code: '74',
      index: 398,
      text: 'Ice Cream',
      enumType: 'IceCream'
    },
    {
      code: '418',
      index: 399,
      text: 'Ice Cream Manufacturer',
      enumType: 'IceCreamManufacturer'
    },
    {
      code: '419',
      index: 400,
      text: 'Ice Cream Shop',
      enumType: 'IceCreamShop'
    },
    {
      code: '420',
      index: 401,
      text: 'Ice Merchant',
      enumType: 'IceMerchant'
    },
    {
      code: '421',
      index: 402,
      text: 'Ice Rink',
      enumType: 'IceRink'
    },
    {
      code: '422',
      index: 403,
      text: 'Import',
      enumType: 'Import'
    },
    {
      code: '75',
      index: 404,
      text: 'Import/Export',
      enumType: 'ImportExport'
    },
    {
      code: '423',
      index: 405,
      text: 'Importers',
      enumType: 'Importers'
    },
    {
      code: '424',
      index: 406,
      text: 'Industrial Building Manufacturer',
      enumType: 'IndustrialBuildingManufacturer'
    },
    {
      code: '425',
      index: 407,
      text: 'Industrial Relations',
      enumType: 'IndustrialRelations'
    },
    {
      code: '904',
      index: 408,
      text: 'Information Technology',
      enumType: 'InformationTechnology'
    },
    {
      code: '76',
      index: 409,
      text: 'Inland Revenue',
      enumType: 'InlandRevenue'
    },
    {
      code: '426',
      index: 410,
      text: 'Inn',
      enumType: 'Inn'
    },
    {
      code: '427',
      index: 411,
      text: 'Inspection Services',
      enumType: 'InspectionServices'
    },
    {
      code: '428',
      index: 412,
      text: 'Instant Print Services',
      enumType: 'InstantPrintServices'
    },
    {
      code: '429',
      index: 413,
      text: 'Insulation Engineers',
      enumType: 'InsulationEngineers'
    },
    {
      code: '77',
      index: 414,
      text: 'Insurance',
      enumType: 'Insurance'
    },
    {
      code: '430',
      index: 415,
      text: 'Insurance Advisor',
      enumType: 'InsuranceAdvisor'
    },
    {
      code: '431',
      index: 416,
      text: 'Insurance Broker',
      enumType: 'InsuranceBroker'
    },
    {
      code: '432',
      index: 417,
      text: 'Insurance Company',
      enumType: 'InsuranceCompany'
    },
    {
      code: '433',
      index: 418,
      text: 'Insurance Consultant',
      enumType: 'InsuranceConsultant'
    },
    {
      code: '801',
      index: 419,
      text: 'Interior Design',
      enumType: 'InteriorDesign'
    },
    {
      code: '78',
      index: 420,
      text: 'Investment',
      enumType: 'Investment'
    },
    {
      code: '434',
      index: 421,
      text: 'Iron Foundry',
      enumType: 'IronFoundry'
    },
    {
      code: '890',
      index: 422,
      text: 'Ironing Services',
      enumType: 'IroningServices'
    },
    {
      code: '435',
      index: 423,
      text: 'Ironmonger',
      enumType: 'Ironmonger'
    },
    {
      code: '436',
      index: 424,
      text: 'Jam & Preserve Manufacturer',
      enumType: 'JamPreserveManufacturer'
    },
    {
      code: '437',
      index: 425,
      text: 'Jewellers',
      enumType: 'Jewellers'
    },
    {
      code: '185',
      index: 426,
      text: 'Jewellery',
      enumType: 'Jewellery'
    },
    {
      code: '438',
      index: 427,
      text: 'Jewellery Manufacturer',
      enumType: 'JewelleryManufacturer'
    },
    {
      code: '439',
      index: 428,
      text: 'Joinery',
      enumType: 'Joinery'
    },
    {
      code: '440',
      index: 429,
      text: 'Keep Fit',
      enumType: 'KeepFit'
    },
    {
      code: '441',
      index: 430,
      text: 'Kennels',
      enumType: 'Kennels'
    },
    {
      code: '442',
      index: 431,
      text: 'Kitchen Equipment Manufacturer',
      enumType: 'KitchenEquipmentManufacturer'
    },
    {
      code: '835',
      index: 432,
      text: 'Kitchen Manufacturer',
      enumType: 'KitchenManufacturer'
    },
    {
      code: '443',
      index: 433,
      text: 'Kitchen Planners',
      enumType: 'KitchenPlanners'
    },
    {
      code: '444',
      index: 434,
      text: 'Knitwear Manufacturer',
      enumType: 'KnitwearManufacturer'
    },
    {
      code: '445',
      index: 435,
      text: 'Laboratory',
      enumType: 'Laboratory'
    },
    {
      code: '446',
      index: 436,
      text: 'Ladder Manufacturer',
      enumType: 'LadderManufacturer'
    },
    {
      code: '447',
      index: 437,
      text: 'Land Clearance',
      enumType: 'LandClearance'
    },
    {
      code: '448',
      index: 438,
      text: 'Land Draining',
      enumType: 'LandDraining'
    },
    {
      code: '449',
      index: 439,
      text: 'Landscaping',
      enumType: 'Landscaping'
    },
    {
      code: '450',
      index: 440,
      text: 'Lathe Manufacturer',
      enumType: 'LatheManufacturer'
    },
    {
      code: '451',
      index: 441,
      text: 'Launderette',
      enumType: 'Launderette'
    },
    {
      code: '153',
      index: 442,
      text: 'Laundry',
      enumType: 'Laundry'
    },
    {
      code: '79',
      index: 443,
      text: 'Law and Order',
      enumType: 'LawandOrder'
    },
    {
      code: '452',
      index: 444,
      text: 'Lawnmowers & Garden Machinery',
      enumType: 'LawnmowersGardenMachinery'
    },
    {
      code: '453',
      index: 445,
      text: 'Lawyers',
      enumType: 'Lawyers'
    },
    {
      code: '454',
      index: 446,
      text: 'Leasing Company',
      enumType: 'LeasingCompany'
    },
    {
      code: '80',
      index: 447,
      text: 'Legal',
      enumType: 'Legal'
    },
    {
      code: '455',
      index: 448,
      text: 'Legal System',
      enumType: 'LegalSystem'
    },
    {
      code: '175',
      index: 449,
      text: 'Leisure Centre',
      enumType: 'LeisureCentre'
    },
    {
      code: '930',
      index: 450,
      text: 'Leisure Goods',
      enumType: 'LeisureGoods'
    },
    {
      code: '456',
      index: 451,
      text: 'Lens Manufacturer',
      enumType: 'LensManufacturer'
    },
    {
      code: '457',
      index: 452,
      text: 'Library',
      enumType: 'Library'
    },
    {
      code: '81',
      index: 453,
      text: 'Licensed Premises',
      enumType: 'LicensedPremises'
    },
    {
      code: '458',
      index: 454,
      text: 'Lift Installers',
      enumType: 'LiftInstallers'
    },
    {
      code: '459',
      index: 455,
      text: 'Lift Maintenance',
      enumType: 'LiftMaintenance'
    },
    {
      code: '940',
      index: 456,
      text: 'Lighting',
      enumType: 'Lighting'
    },
    {
      code: '460',
      index: 457,
      text: 'Lighting Installers',
      enumType: 'LightingInstallers'
    },
    {
      code: '461',
      index: 458,
      text: 'Linen Hire',
      enumType: 'LinenHire'
    },
    {
      code: '462',
      index: 459,
      text: 'Livery Stables',
      enumType: 'LiveryStables'
    },
    {
      code: '463',
      index: 460,
      text: 'Livestock Carriers',
      enumType: 'LivestockCarriers'
    },
    {
      code: '902',
      index: 461,
      text: 'Livestock Farming',
      enumType: 'LivestockFarming'
    },
    {
      code: '63',
      index: 462,
      text: 'Local Government',
      enumType: 'LocalGovernment'
    },
    {
      code: '464',
      index: 463,
      text: 'Local Government Authority',
      enumType: 'LocalGovernmentAuthority'
    },
    {
      code: '465',
      index: 464,
      text: 'Local Newspaper',
      enumType: 'LocalNewspaper'
    },
    {
      code: '466',
      index: 465,
      text: 'Locksmiths',
      enumType: 'Locksmiths'
    },
    {
      code: '467',
      index: 466,
      text: 'Loft Insulation',
      enumType: 'LoftInsulation'
    },
    {
      code: '82',
      index: 467,
      text: 'Log And Firewood',
      enumType: 'LogAndFirewood'
    },
    {
      code: '468',
      index: 468,
      text: 'Loss Adjusting',
      enumType: 'LossAdjusting'
    },
    {
      code: '469',
      index: 469,
      text: 'LPG Suppliers',
      enumType: 'LPGSuppliers'
    },
    {
      code: '470',
      index: 470,
      text: 'Machine Tool Supplier',
      enumType: 'MachineToolSupplier'
    },
    {
      code: '471',
      index: 471,
      text: 'Machinery Dealers',
      enumType: 'MachineryDealers'
    },
    {
      code: '83',
      index: 472,
      text: 'Mail Order',
      enumType: 'MailOrder'
    },
    {
      code: '472',
      index: 473,
      text: 'Mail Order Supplier',
      enumType: 'MailOrderSupplier'
    },
    {
      code: '473',
      index: 474,
      text: 'Maintenance Services',
      enumType: 'MaintenanceServices'
    },
    {
      code: '474',
      index: 475,
      text: 'Management Consultancy',
      enumType: 'ManagementConsultancy'
    },
    {
      code: '475',
      index: 476,
      text: 'Management Training',
      enumType: 'ManagementTraining'
    },
    {
      code: '476',
      index: 477,
      text: 'Mantle Trade',
      enumType: 'MantleTrade'
    },
    {
      code: '84',
      index: 478,
      text: 'Manufacturing',
      enumType: 'Manufacturing'
    },
    {
      code: '477',
      index: 479,
      text: 'Manufacturing Chemist',
      enumType: 'ManufacturingChemist'
    },
    {
      code: '802',
      index: 480,
      text: 'Marina',
      enumType: 'Marina'
    },
    {
      code: '478',
      index: 481,
      text: 'Market Garden',
      enumType: 'MarketGarden'
    },
    {
      code: '85',
      index: 482,
      text: 'Market Gardeners',
      enumType: 'MarketGardeners'
    },
    {
      code: '868',
      index: 483,
      text: 'Market Research',
      enumType: 'MarketResearch'
    },
    {
      code: '479',
      index: 484,
      text: 'Market Trading',
      enumType: 'MarketTrading'
    },
    {
      code: '480',
      index: 485,
      text: 'Marketing',
      enumType: 'Marketing'
    },
    {
      code: '481',
      index: 486,
      text: 'Marriage Guidance',
      enumType: 'MarriageGuidance'
    },
    {
      code: '482',
      index: 487,
      text: 'Material Manufacturer',
      enumType: 'MaterialManufacturer'
    },
    {
      code: '483',
      index: 488,
      text: 'Mattress Manufacturer',
      enumType: 'MattressManufacturer'
    },
    {
      code: '484',
      index: 489,
      text: 'Meat Market',
      enumType: 'MeatMarket'
    },
    {
      code: '485',
      index: 490,
      text: 'Meat Products',
      enumType: 'MeatProducts'
    },
    {
      code: '486',
      index: 491,
      text: 'Mechanical Handling',
      enumType: 'MechanicalHandling'
    },
    {
      code: '803',
      index: 492,
      text: 'Medical research',
      enumType: 'Medicalresearch'
    },
    {
      code: '487',
      index: 493,
      text: 'Medical Suppliers',
      enumType: 'MedicalSuppliers'
    },
    {
      code: '86',
      index: 494,
      text: 'Merchant Navy',
      enumType: 'MerchantNavy'
    },
    {
      code: '488',
      index: 495,
      text: 'Metal Founders',
      enumType: 'MetalFounders'
    },
    {
      code: '489',
      index: 496,
      text: 'Metal Treatment',
      enumType: 'MetalTreatment'
    },
    {
      code: '490',
      index: 497,
      text: 'Microfilm Services',
      enumType: 'MicrofilmServices'
    },
    {
      code: '491',
      index: 498,
      text: 'Milk Delivery',
      enumType: 'MilkDelivery'
    },
    {
      code: '87',
      index: 499,
      text: 'Mining',
      enumType: 'Mining'
    },
    {
      code: '88',
      index: 500,
      text: 'Mobile Food',
      enumType: 'MobileFood'
    },
    {
      code: '492',
      index: 501,
      text: 'Mobile Shop',
      enumType: 'MobileShop'
    },
    {
      code: '875',
      index: 502,
      text: 'Model Manufacturer',
      enumType: 'ModelManufacturer'
    },
    {
      code: '89',
      index: 503,
      text: 'Moneylenders',
      enumType: 'Moneylenders'
    },
    {
      code: '493',
      index: 504,
      text: 'Monumental Masons',
      enumType: 'MonumentalMasons'
    },
    {
      code: '845',
      index: 505,
      text: 'Motor Factor/Parts',
      enumType: 'MotorFactorParts'
    },
    {
      code: '142',
      index: 506,
      text: 'Motor Manufacture',
      enumType: 'MotorManufacture'
    },
    {
      code: '143',
      index: 507,
      text: 'Motor Organisation',
      enumType: 'MotorOrganisation'
    },
    {
      code: '90',
      index: 508,
      text: 'Motor Trade',
      enumType: 'MotorTrade'
    },
    {
      code: '91',
      index: 509,
      text: 'Motorcar Racing',
      enumType: 'MotorcarRacing'
    },
    {
      code: '92',
      index: 510,
      text: 'Motorcycle Racing',
      enumType: 'MotorcycleRacing'
    },
    {
      code: '903',
      index: 511,
      text: 'Motorcycle Trade',
      enumType: 'MotorcycleTrade'
    },
    {
      code: '494',
      index: 512,
      text: 'Motoring Organisation',
      enumType: 'MotoringOrganisation'
    },
    {
      code: '836',
      index: 513,
      text: 'Museums',
      enumType: 'Museums'
    },
    {
      code: '495',
      index: 514,
      text: 'Music Publisher',
      enumType: 'MusicPublisher'
    },
    {
      code: '496',
      index: 515,
      text: 'Music Retailer',
      enumType: 'MusicRetailer'
    },
    {
      code: '497',
      index: 516,
      text: 'Music School',
      enumType: 'MusicSchool'
    },
    {
      code: '498',
      index: 517,
      text: 'Musical Instrument Manufacturer',
      enumType: 'MusicalInstrumentManufacturer'
    },
    {
      code: '499',
      index: 518,
      text: 'National Newspaper',
      enumType: 'NationalNewspaper'
    },
    {
      code: '856',
      index: 519,
      text: 'National Trust',
      enumType: 'NationalTrust'
    },
    {
      code: '857',
      index: 520,
      text: 'National Trust For Scotland',
      enumType: 'NationalTrustForScotland'
    },
    {
      code: '500',
      index: 521,
      text: 'Newsagents',
      enumType: 'Newsagents'
    },
    {
      code: '909',
      index: 522,
      text: 'Newspaper Wholesaler',
      enumType: 'NewspaperWholesaler'
    },
    {
      code: '93',
      index: 523,
      text: 'Night Club',
      enumType: 'NightClub'
    },
    {
      code: '819',
      index: 524,
      text: 'Noise Control',
      enumType: 'NoiseControl'
    },
    {
      code: '186',
      index: 525,
      text: 'Not in Employment',
      enumType: 'NotinEmployment'
    },
    {
      code: '501',
      index: 526,
      text: 'Notaries',
      enumType: 'Notaries'
    },
    {
      code: '141',
      index: 527,
      text: 'Nuclear Energy',
      enumType: 'NuclearEnergy'
    },
    {
      code: '95',
      index: 528,
      text: 'Nursery',
      enumType: 'Nursery'
    },
    {
      code: '502',
      index: 529,
      text: 'Nursery School',
      enumType: 'NurserySchool'
    },
    {
      code: '503',
      index: 530,
      text: 'Nursing Home',
      enumType: 'NursingHome'
    },
    {
      code: '846',
      index: 531,
      text: 'Oceanographic Survey',
      enumType: 'OceanographicSurvey'
    },
    {
      code: '96',
      index: 532,
      text: 'Off Licence',
      enumType: 'OffLicence'
    },
    {
      code: '504',
      index: 533,
      text: 'Off Licence Store',
      enumType: 'OffLicenceStore'
    },
    {
      code: '921',
      index: 534,
      text: 'Office Equipment Repairer',
      enumType: 'OfficeEquipmentRepairer'
    },
    {
      code: '505',
      index: 535,
      text: 'Office Equipment Supplier',
      enumType: 'OfficeEquipmentSupplier'
    },
    {
      code: '506',
      index: 536,
      text: 'Office Fitters',
      enumType: 'OfficeFitters'
    },
    {
      code: '507',
      index: 537,
      text: 'Office Services',
      enumType: 'OfficeServices'
    },
    {
      code: '847',
      index: 538,
      text: 'Oil - Offshore',
      enumType: 'OilOffshore'
    },
    {
      code: '508',
      index: 539,
      text: 'Oil Company',
      enumType: 'OilCompany'
    },
    {
      code: '509',
      index: 540,
      text: 'Oil Exploration',
      enumType: 'OilExploration'
    },
    {
      code: '865',
      index: 541,
      text: 'Oil Terminal Operator',
      enumType: 'OilTerminalOperator'
    },
    {
      code: '510',
      index: 542,
      text: 'Opinion Polls',
      enumType: 'OpinionPolls'
    },
    {
      code: '97',
      index: 543,
      text: 'Optical Services',
      enumType: 'OpticalServices'
    },
    {
      code: '511',
      index: 544,
      text: 'Optician',
      enumType: 'Optician'
    },
    {
      code: '512',
      index: 545,
      text: 'Optometrist',
      enumType: 'Optometrist'
    },
    {
      code: '513',
      index: 546,
      text: 'Organ Building',
      enumType: 'OrganBuilding'
    },
    {
      code: '164',
      index: 547,
      text: 'Other ',
      enumType: 'OtherNotSignificantForUnderwriting'
    },
    {
      code: '905',
      index: 548,
      text: 'Outdoor Pursuits',
      enumType: 'OutdoorPursuits'
    },
    {
      code: '514',
      index: 549,
      text: 'Overall Hire & Maintenance',
      enumType: 'OverallHireMaintenance'
    },
    {
      code: '515',
      index: 550,
      text: 'Packers And Storers',
      enumType: 'PackersAndStorers'
    },
    {
      code: '516',
      index: 551,
      text: 'Paint Manufacturer',
      enumType: 'PaintManufacturer'
    },
    {
      code: '517',
      index: 552,
      text: 'Paint Spraying',
      enumType: 'PaintSpraying'
    },
    {
      code: '518',
      index: 553,
      text: 'Painting',
      enumType: 'Painting'
    },
    {
      code: '98',
      index: 554,
      text: 'Painting and Decorating',
      enumType: 'PaintingandDecorating'
    },
    {
      code: '859',
      index: 555,
      text: 'Painting Contractor',
      enumType: 'PaintingContractor'
    },
    {
      code: '519',
      index: 556,
      text: 'Panel Beating',
      enumType: 'PanelBeating'
    },
    {
      code: '804',
      index: 557,
      text: 'Paper Manufacture',
      enumType: 'PaperManufacture'
    },
    {
      code: '520',
      index: 558,
      text: 'Paperbag And Sack Manufacturer',
      enumType: 'PaperbagAndSackManufacturer'
    },
    {
      code: '521',
      index: 559,
      text: 'Parcel Delivery',
      enumType: 'ParcelDelivery'
    },
    {
      code: '923',
      index: 560,
      text: 'Partition Erector',
      enumType: 'PartitionErector'
    },
    {
      code: '522',
      index: 561,
      text: 'Passenger Transport',
      enumType: 'PassengerTransport'
    },
    {
      code: '848',
      index: 562,
      text: 'Patent Office',
      enumType: 'PatentOffice'
    },
    {
      code: '523',
      index: 563,
      text: 'Pawnbroker',
      enumType: 'Pawnbroker'
    },
    {
      code: '12',
      index: 564,
      text: 'Performing Arts',
      enumType: 'PerformingArts'
    },
    {
      code: '524',
      index: 565,
      text: 'Personnel Consultancy',
      enumType: 'PersonnelConsultancy'
    },
    {
      code: '525',
      index: 566,
      text: 'Pest And Vermin Control',
      enumType: 'PestAndVerminControl'
    },
    {
      code: '927',
      index: 567,
      text: 'Pet Feed',
      enumType: 'PetFeed'
    },
    {
      code: '908',
      index: 568,
      text: 'Pet Services',
      enumType: 'PetServices'
    },
    {
      code: '526',
      index: 569,
      text: 'Pet Shop',
      enumType: 'PetShop'
    },
    {
      code: '100',
      index: 570,
      text: 'Petrochemical Industry',
      enumType: 'PetrochemicalIndustry'
    },
    {
      code: '527',
      index: 571,
      text: 'Petrol Pump Maintenance',
      enumType: 'PetrolPumpMaintenance'
    },
    {
      code: '816',
      index: 572,
      text: 'Petrol Station',
      enumType: 'PetrolStation'
    },
    {
      code: '528',
      index: 573,
      text: 'Pharmaceutical Supplier',
      enumType: 'PharmaceuticalSupplier'
    },
    {
      code: '529',
      index: 574,
      text: 'Pharmacy',
      enumType: 'Pharmacy'
    },
    {
      code: '530',
      index: 575,
      text: 'Photo Engraving',
      enumType: 'PhotoEngraving'
    },
    {
      code: '531',
      index: 576,
      text: 'Photo Processing And Printing',
      enumType: 'PhotoProcessingAndPrinting'
    },
    {
      code: '532',
      index: 577,
      text: 'Photographic Equipment Repairs',
      enumType: 'PhotographicEquipmentRepairs'
    },
    {
      code: '101',
      index: 578,
      text: 'Photography',
      enumType: 'Photography'
    },
    {
      code: '533',
      index: 579,
      text: 'Physiotherapy',
      enumType: 'Physiotherapy'
    },
    {
      code: '534',
      index: 580,
      text: 'Piano Sales And Repairs',
      enumType: 'PianoSalesAndRepairs'
    },
    {
      code: '535',
      index: 581,
      text: 'Piano Tuning',
      enumType: 'PianoTuning'
    },
    {
      code: '872',
      index: 582,
      text: 'Picture Framing',
      enumType: 'PictureFraming'
    },
    {
      code: '536',
      index: 583,
      text: 'Pig Farming',
      enumType: 'PigFarming'
    },
    {
      code: '537',
      index: 584,
      text: 'Pipe Cleaning',
      enumType: 'PipeCleaning'
    },
    {
      code: '538',
      index: 585,
      text: 'Pizza Delivery',
      enumType: 'PizzaDelivery'
    },
    {
      code: '539',
      index: 586,
      text: 'Planning Consultancy',
      enumType: 'PlanningConsultancy'
    },
    {
      code: '102',
      index: 587,
      text: 'Plant Hire',
      enumType: 'PlantHire'
    },
    {
      code: '540',
      index: 588,
      text: 'Plant Manufacturer',
      enumType: 'PlantManufacturer'
    },
    {
      code: '541',
      index: 589,
      text: 'Plant Sales',
      enumType: 'PlantSales'
    },
    {
      code: '542',
      index: 590,
      text: 'Plastic Sheeting Manufacturer',
      enumType: 'PlasticSheetingManufacturer'
    },
    {
      code: '805',
      index: 591,
      text: 'Plastics Manufacture',
      enumType: 'PlasticsManufacture'
    },
    {
      code: '543',
      index: 592,
      text: 'Playground Equipment Manufacturer',
      enumType: 'PlaygroundEquipmentManufacturer'
    },
    {
      code: '544',
      index: 593,
      text: 'Plumbers Merchant',
      enumType: 'PlumbersMerchant'
    },
    {
      code: '103',
      index: 594,
      text: 'Plumbing',
      enumType: 'Plumbing'
    },
    {
      code: '896',
      index: 595,
      text: 'Plumbing & Heating',
      enumType: 'PlumbingHeating'
    },
    {
      code: '545',
      index: 596,
      text: 'Political Consultancy',
      enumType: 'PoliticalConsultancy'
    },
    {
      code: '546',
      index: 597,
      text: 'Political Party',
      enumType: 'PoliticalParty'
    },
    {
      code: '547',
      index: 598,
      text: 'Pollution Control',
      enumType: 'PollutionControl'
    },
    {
      code: '931',
      index: 599,
      text: 'Pony Trap',
      enumType: 'PonyTrap'
    },
    {
      code: '548',
      index: 600,
      text: 'Pool Table Manufacturer',
      enumType: 'PoolTableManufacturer'
    },
    {
      code: '549',
      index: 601,
      text: 'Pool Table Repairer',
      enumType: 'PoolTableRepairer'
    },
    {
      code: '550',
      index: 602,
      text: 'Pool Table Sales',
      enumType: 'PoolTableSales'
    },
    {
      code: '144',
      index: 603,
      text: 'Port Authority',
      enumType: 'PortAuthority'
    },
    {
      code: '932',
      index: 604,
      text: 'Portable Building',
      enumType: 'PortableBuilding'
    },
    {
      code: '104',
      index: 605,
      text: 'Post Office',
      enumType: 'PostOffice'
    },
    {
      code: '551',
      index: 606,
      text: 'Post Office Services',
      enumType: 'PostOfficeServices'
    },
    {
      code: '552',
      index: 607,
      text: 'Potato Merchant',
      enumType: 'PotatoMerchant'
    },
    {
      code: '553',
      index: 608,
      text: 'Pottery',
      enumType: 'Pottery'
    },
    {
      code: '554',
      index: 609,
      text: 'Poultry Farm',
      enumType: 'PoultryFarm'
    },
    {
      code: '899',
      index: 610,
      text: 'Poultry Farming',
      enumType: 'PoultryFarming'
    },
    {
      code: '556',
      index: 611,
      text: 'Presentation Materials Supplier',
      enumType: 'PresentationMaterialsSupplier'
    },
    {
      code: '557',
      index: 612,
      text: 'Press Cutting Agency',
      enumType: 'PressCuttingAgency'
    },
    {
      code: '558',
      index: 613,
      text: 'Pressure Cleaning',
      enumType: 'PressureCleaning'
    },
    {
      code: '555',
      index: 614,
      text: 'Pre-Stressed Concrete Manufacturer',
      enumType: 'PreStressedConcreteManufacturer'
    },
    {
      code: '559',
      index: 615,
      text: 'Print Type Services',
      enumType: 'PrintTypeServices'
    },
    {
      code: '176',
      index: 616,
      text: 'Printer',
      enumType: 'Printer'
    },
    {
      code: '560',
      index: 617,
      text: 'Printing',
      enumType: 'Printing'
    },
    {
      code: '561',
      index: 618,
      text: 'Printing Engineering Services',
      enumType: 'PrintingEngineeringServices'
    },
    {
      code: '105',
      index: 619,
      text: 'Prison Service',
      enumType: 'PrisonService'
    },
    {
      code: '170',
      index: 620,
      text: 'Private / Public Hire',
      enumType: 'PrivatePublicHire'
    },
    {
      code: '562',
      index: 621,
      text: 'Private Hire',
      enumType: 'PrivateHire'
    },
    {
      code: '563',
      index: 622,
      text: 'Private Investigation',
      enumType: 'PrivateInvestigation'
    },
    {
      code: '564',
      index: 623,
      text: 'Private School',
      enumType: 'PrivateSchool'
    },
    {
      code: '565',
      index: 624,
      text: 'Process Engraving',
      enumType: 'ProcessEngraving'
    },
    {
      code: '566',
      index: 625,
      text: 'Produce Importers',
      enumType: 'ProduceImporters'
    },
    {
      code: '567',
      index: 626,
      text: 'Project Management',
      enumType: 'ProjectManagement'
    },
    {
      code: '568',
      index: 627,
      text: 'Promotional Consultancy',
      enumType: 'PromotionalConsultancy'
    },
    {
      code: '820',
      index: 628,
      text: 'Property Consultants',
      enumType: 'PropertyConsultants'
    },
    {
      code: '106',
      index: 629,
      text: 'Property Developers',
      enumType: 'PropertyDevelopers'
    },
    {
      code: '821',
      index: 630,
      text: 'Property Letting',
      enumType: 'PropertyLetting'
    },
    {
      code: '569',
      index: 631,
      text: 'Property Owner',
      enumType: 'PropertyOwner'
    },
    {
      code: '107',
      index: 632,
      text: 'Property Services',
      enumType: 'PropertyServices'
    },
    {
      code: '570',
      index: 633,
      text: 'Protective Clothing Manufacturer',
      enumType: 'ProtectiveClothingManufacturer'
    },
    {
      code: '571',
      index: 634,
      text: 'Protective Clothing Supplier',
      enumType: 'ProtectiveClothingSupplier'
    },
    {
      code: '572',
      index: 635,
      text: 'Psychiatry',
      enumType: 'Psychiatry'
    },
    {
      code: '573',
      index: 636,
      text: 'Psychology',
      enumType: 'Psychology'
    },
    {
      code: '574',
      index: 637,
      text: 'Psychotherapy',
      enumType: 'Psychotherapy'
    },
    {
      code: '575',
      index: 638,
      text: 'Public Address System Supplier',
      enumType: 'PublicAddressSystemSupplier'
    },
    {
      code: '576',
      index: 639,
      text: 'Public Hire',
      enumType: 'PublicHire'
    },
    {
      code: '577',
      index: 640,
      text: 'Public Hirer',
      enumType: 'PublicHirer'
    },
    {
      code: '578',
      index: 641,
      text: 'Public House',
      enumType: 'PublicHouse'
    },
    {
      code: '579',
      index: 642,
      text: 'Public Relation Consultancy',
      enumType: 'PublicRelationConsultancy'
    },
    {
      code: '580',
      index: 643,
      text: 'Public School',
      enumType: 'PublicSchool'
    },
    {
      code: '894',
      index: 644,
      text: 'Public Transport',
      enumType: 'PublicTransport'
    },
    {
      code: '108',
      index: 645,
      text: 'Publishing',
      enumType: 'Publishing'
    },
    {
      code: '109',
      index: 646,
      text: 'Publishing - Local Press',
      enumType: 'PublishingLocalPress'
    },
    {
      code: '110',
      index: 647,
      text: 'Publishing - National Press',
      enumType: 'PublishingNationalPress'
    },
    {
      code: '581',
      index: 648,
      text: 'Quality Assurance',
      enumType: 'QualityAssurance'
    },
    {
      code: '582',
      index: 649,
      text: 'Quantity Surveyors',
      enumType: 'QuantitySurveyors'
    },
    {
      code: '583',
      index: 650,
      text: 'Quarry',
      enumType: 'Quarry'
    },
    {
      code: '111',
      index: 651,
      text: 'Quarrying',
      enumType: 'Quarrying'
    },
    {
      code: '584',
      index: 652,
      text: 'Race Course',
      enumType: 'RaceCourse'
    },
    {
      code: '112',
      index: 653,
      text: 'Racehorses',
      enumType: 'Racehorses'
    },
    {
      code: '113',
      index: 654,
      text: 'Racing Or Rallies',
      enumType: 'RacingOrRallies'
    },
    {
      code: '585',
      index: 655,
      text: 'Racing Stable',
      enumType: 'RacingStable'
    },
    {
      code: '586',
      index: 656,
      text: 'Radiator Repairs',
      enumType: 'RadiatorRepairs'
    },
    {
      code: '587',
      index: 657,
      text: 'Radiator Sales',
      enumType: 'RadiatorSales'
    },
    {
      code: '588',
      index: 658,
      text: 'Radiography',
      enumType: 'Radiography'
    },
    {
      code: '589',
      index: 659,
      text: 'Rag Merchants',
      enumType: 'RagMerchants'
    },
    {
      code: '114',
      index: 660,
      text: 'Railway',
      enumType: 'Railway'
    },
    {
      code: '590',
      index: 661,
      text: 'Rating And Valuation',
      enumType: 'RatingAndValuation'
    },
    {
      code: '591',
      index: 662,
      text: 'Record Company',
      enumType: 'RecordCompany'
    },
    {
      code: '592',
      index: 663,
      text: 'Record Shop',
      enumType: 'RecordShop'
    },
    {
      code: '593',
      index: 664,
      text: 'Recording Services',
      enumType: 'RecordingServices'
    },
    {
      code: '594',
      index: 665,
      text: 'Recovery Services',
      enumType: 'RecoveryServices'
    },
    {
      code: '595',
      index: 666,
      text: 'Recruitment Agency',
      enumType: 'RecruitmentAgency'
    },
    {
      code: '596',
      index: 667,
      text: 'Recycling',
      enumType: 'Recycling'
    },
    {
      code: '597',
      index: 668,
      text: 'Refrigeration',
      enumType: 'Refrigeration'
    },
    {
      code: '598',
      index: 669,
      text: 'Refuse Collection',
      enumType: 'RefuseCollection'
    },
    {
      code: '941',
      index: 670,
      text: 'Refuse Treatment',
      enumType: 'RefuseTreatment'
    },
    {
      code: '599',
      index: 671,
      text: 'Reinforced Concrete Manufacturer',
      enumType: 'ReinforcedConcreteManufacturer'
    },
    {
      code: '115',
      index: 672,
      text: 'Religion',
      enumType: 'Religion'
    },
    {
      code: '177',
      index: 673,
      text: 'Removal Contractors',
      enumType: 'RemovalContractors'
    },
    {
      code: '600',
      index: 674,
      text: 'Remover And Storer',
      enumType: 'RemoverAndStorer'
    },
    {
      code: '601',
      index: 675,
      text: 'Rescue Services',
      enumType: 'RescueServices'
    },
    {
      code: '602',
      index: 676,
      text: 'Residential Home',
      enumType: 'ResidentialHome'
    },
    {
      code: '116',
      index: 677,
      text: 'Restaurant',
      enumType: 'Restaurant'
    },
    {
      code: '831',
      index: 678,
      text: 'Restaurant - Licensed',
      enumType: 'RestaurantLicensed'
    },
    {
      code: '832',
      index: 679,
      text: 'Restaurant - Unlicensed',
      enumType: 'RestaurantUnlicensed'
    },
    {
      code: '154',
      index: 680,
      text: 'Retailer - Mobile',
      enumType: 'RetailerMobile'
    },
    {
      code: '117',
      index: 681,
      text: 'Retailing',
      enumType: 'Retailing'
    },
    {
      code: '603',
      index: 682,
      text: 'Riding School',
      enumType: 'RidingSchool'
    },
    {
      code: '807',
      index: 683,
      text: 'Ring Sports',
      enumType: 'RingSports'
    },
    {
      code: '604',
      index: 684,
      text: 'River Authority',
      enumType: 'RiverAuthority'
    },
    {
      code: '605',
      index: 685,
      text: 'Road Haulage',
      enumType: 'RoadHaulage'
    },
    {
      code: '606',
      index: 686,
      text: 'Road Repair',
      enumType: 'RoadRepair'
    },
    {
      code: '607',
      index: 687,
      text: 'Road Surfacing',
      enumType: 'RoadSurfacing'
    },
    {
      code: '849',
      index: 688,
      text: 'Robotics Manufacturer',
      enumType: 'RoboticsManufacturer'
    },
    {
      code: '608',
      index: 689,
      text: 'Roller Shutter Manufacturer',
      enumType: 'RollerShutterManufacturer'
    },
    {
      code: '609',
      index: 690,
      text: 'Roofing Services',
      enumType: 'RoofingServices'
    },
    {
      code: '610',
      index: 691,
      text: 'Rope Merchant',
      enumType: 'RopeMerchant'
    },
    {
      code: '611',
      index: 692,
      text: 'Roughcasters',
      enumType: 'Roughcasters'
    },
    {
      code: '935',
      index: 693,
      text: 'Royal Air Force',
      enumType: 'RoyalAirForce'
    },
    {
      code: '934',
      index: 694,
      text: 'Royal Navy',
      enumType: 'RoyalNavy'
    },
    {
      code: '850',
      index: 695,
      text: 'RSPCA',
      enumType: 'RSPCA'
    },
    {
      code: '612',
      index: 696,
      text: 'Rubbish Disposal',
      enumType: 'RubbishDisposal'
    },
    {
      code: '613',
      index: 697,
      text: 'Rubble Removers',
      enumType: 'RubbleRemovers'
    },
    {
      code: '614',
      index: 698,
      text: 'Rustproofing Services',
      enumType: 'RustproofingServices'
    },
    {
      code: '615',
      index: 699,
      text: 'Saddlers And Harness Makers',
      enumType: 'SaddlersAndHarnessMakers'
    },
    {
      code: '616',
      index: 700,
      text: 'Safe Installation And Removal',
      enumType: 'SafeInstallationAndRemoval'
    },
    {
      code: '617',
      index: 701,
      text: 'Safe Manufacturer',
      enumType: 'SafeManufacturer'
    },
    {
      code: '618',
      index: 702,
      text: 'Safety Consultancy',
      enumType: 'SafetyConsultancy'
    },
    {
      code: '619',
      index: 703,
      text: 'Safety Equipment Supplier',
      enumType: 'SafetyEquipmentSupplier'
    },
    {
      code: '620',
      index: 704,
      text: 'Sail Makers And Repairers',
      enumType: 'SailMakersAndRepairers'
    },
    {
      code: '621',
      index: 705,
      text: 'Sailing Equipment Supplier',
      enumType: 'SailingEquipmentSupplier'
    },
    {
      code: '622',
      index: 706,
      text: 'Salvage',
      enumType: 'Salvage'
    },
    {
      code: '891',
      index: 707,
      text: 'Sample Distribution',
      enumType: 'SampleDistribution'
    },
    {
      code: '623',
      index: 708,
      text: 'Sample Distributors',
      enumType: 'SampleDistributors'
    },
    {
      code: '624',
      index: 709,
      text: 'Sand And Gravel Merchants',
      enumType: 'SandAndGravelMerchants'
    },
    {
      code: '625',
      index: 710,
      text: 'Sand Blasters',
      enumType: 'SandBlasters'
    },
    {
      code: '118',
      index: 711,
      text: 'Sand/Gravel',
      enumType: 'SandGravel'
    },
    {
      code: '626',
      index: 712,
      text: 'Satellite TV And Equipment Suppliers',
      enumType: 'SatelliteTVAndEquipmentSuppliers'
    },
    {
      code: '627',
      index: 713,
      text: 'Satellite TV Installers',
      enumType: 'SatelliteTVInstallers'
    },
    {
      code: '628',
      index: 714,
      text: 'Saw Sales And Repairs',
      enumType: 'SawSalesAndRepairs'
    },
    {
      code: '629',
      index: 715,
      text: 'Sawmill',
      enumType: 'Sawmill'
    },
    {
      code: '630',
      index: 716,
      text: 'Scaffolding Erection',
      enumType: 'ScaffoldingErection'
    },
    {
      code: '631',
      index: 717,
      text: 'Scaffolding Hire',
      enumType: 'ScaffoldingHire'
    },
    {
      code: '632',
      index: 718,
      text: 'School',
      enumType: 'School'
    },
    {
      code: '873',
      index: 719,
      text: 'School For Performing Arts',
      enumType: 'SchoolForPerformingArts'
    },
    {
      code: '851',
      index: 720,
      text: 'Scientific Research',
      enumType: 'ScientificResearch'
    },
    {
      code: '633',
      index: 721,
      text: 'Scrap Disposal',
      enumType: 'ScrapDisposal'
    },
    {
      code: '634',
      index: 722,
      text: 'Scrap Metal Merchants',
      enumType: 'ScrapMetalMerchants'
    },
    {
      code: '119',
      index: 723,
      text: 'Scrap Waste And Effluent Disposal',
      enumType: 'ScrapWasteAndEffluentDisposal'
    },
    {
      code: '635',
      index: 724,
      text: 'Screen Printing',
      enumType: 'ScreenPrinting'
    },
    {
      code: '636',
      index: 725,
      text: 'Screenwriting',
      enumType: 'Screenwriting'
    },
    {
      code: '637',
      index: 726,
      text: 'Sculptors',
      enumType: 'Sculptors'
    },
    {
      code: '638',
      index: 727,
      text: 'Secondhand Dealers',
      enumType: 'SecondhandDealers'
    },
    {
      code: '639',
      index: 728,
      text: 'Secretarial Services',
      enumType: 'SecretarialServices'
    },
    {
      code: '640',
      index: 729,
      text: 'Secretarial Training',
      enumType: 'SecretarialTraining'
    },
    {
      code: '860',
      index: 730,
      text: 'Security Equipment',
      enumType: 'SecurityEquipment'
    },
    {
      code: '120',
      index: 731,
      text: 'Security Services',
      enumType: 'SecurityServices'
    },
    {
      code: '641',
      index: 732,
      text: 'Seedsmen',
      enumType: 'Seedsmen'
    },
    {
      code: '642',
      index: 733,
      text: 'Self Catering Accommodation',
      enumType: 'SelfCateringAccommodation'
    },
    {
      code: '643',
      index: 734,
      text: 'Self Drive Hire',
      enumType: 'SelfDriveHire'
    },
    {
      code: '942',
      index: 735,
      text: 'Sewage',
      enumType: 'Sewage'
    },
    {
      code: '644',
      index: 736,
      text: 'Sharpening Services',
      enumType: 'SharpeningServices'
    },
    {
      code: '645',
      index: 737,
      text: 'Sheet Metal Work',
      enumType: 'SheetMetalWork'
    },
    {
      code: '646',
      index: 738,
      text: 'Sheriff Officers',
      enumType: 'SheriffOfficers'
    },
    {
      code: '647',
      index: 739,
      text: 'Ship Building And Repair',
      enumType: 'ShipBuildingAndRepair'
    },
    {
      code: '648',
      index: 740,
      text: 'Ship Chandlery',
      enumType: 'ShipChandlery'
    },
    {
      code: '649',
      index: 741,
      text: 'Ship Painting',
      enumType: 'ShipPainting'
    },
    {
      code: '650',
      index: 742,
      text: 'Shipbroking',
      enumType: 'Shipbroking'
    },
    {
      code: '651',
      index: 743,
      text: 'Shipping And Forwarding Agency',
      enumType: 'ShippingAndForwardingAgency'
    },
    {
      code: '652',
      index: 744,
      text: 'Shipping Company',
      enumType: 'ShippingCompany'
    },
    {
      code: '122',
      index: 745,
      text: 'Shipyard',
      enumType: 'Shipyard'
    },
    {
      code: '653',
      index: 746,
      text: 'Shoe Manufacturers',
      enumType: 'ShoeManufacturers'
    },
    {
      code: '654',
      index: 747,
      text: 'Shoe Repair',
      enumType: 'ShoeRepair'
    },
    {
      code: '655',
      index: 748,
      text: 'Shoe Shop',
      enumType: 'ShoeShop'
    },
    {
      code: '928',
      index: 749,
      text: 'Shooting Rights',
      enumType: 'ShootingRights'
    },
    {
      code: '656',
      index: 750,
      text: 'Shop Fitting',
      enumType: 'ShopFitting'
    },
    {
      code: '657',
      index: 751,
      text: 'Shopping Centre',
      enumType: 'ShoppingCentre'
    },
    {
      code: '658',
      index: 752,
      text: 'Shot Blasters',
      enumType: 'ShotBlasters'
    },
    {
      code: '659',
      index: 753,
      text: 'Shutter Manufacturer',
      enumType: 'ShutterManufacturer'
    },
    {
      code: '660',
      index: 754,
      text: 'Sightseeing Tours Operator',
      enumType: 'SightseeingToursOperator'
    },
    {
      code: '661',
      index: 755,
      text: 'Sign Making',
      enumType: 'SignMaking'
    },
    {
      code: '123',
      index: 756,
      text: 'Signwriting',
      enumType: 'Signwriting'
    },
    {
      code: '662',
      index: 757,
      text: 'Site Clearance',
      enumType: 'SiteClearance'
    },
    {
      code: '663',
      index: 758,
      text: 'Site Investigation',
      enumType: 'SiteInvestigation'
    },
    {
      code: '664',
      index: 759,
      text: 'Skating Rink',
      enumType: 'SkatingRink'
    },
    {
      code: '665',
      index: 760,
      text: 'Ski Centre',
      enumType: 'SkiCentre'
    },
    {
      code: '666',
      index: 761,
      text: 'Skip Hire',
      enumType: 'SkipHire'
    },
    {
      code: '827',
      index: 762,
      text: 'Skip Maintenance',
      enumType: 'SkipMaintenance'
    },
    {
      code: '667',
      index: 763,
      text: 'Slaughterhouse',
      enumType: 'Slaughterhouse'
    },
    {
      code: '892',
      index: 764,
      text: 'Slimming Distribution',
      enumType: 'SlimmingDistribution'
    },
    {
      code: '668',
      index: 765,
      text: 'Snack Bar',
      enumType: 'SnackBar'
    },
    {
      code: '669',
      index: 766,
      text: 'Snooker Club',
      enumType: 'SnookerClub'
    },
    {
      code: '670',
      index: 767,
      text: 'Social Club',
      enumType: 'SocialClub'
    },
    {
      code: '124',
      index: 768,
      text: 'Social Services',
      enumType: 'SocialServices'
    },
    {
      code: '671',
      index: 769,
      text: 'Soft Drinks Manufacturer',
      enumType: 'SoftDrinksManufacturer'
    },
    {
      code: '672',
      index: 770,
      text: 'Soft Drinks Supplier',
      enumType: 'SoftDrinksSupplier'
    },
    {
      code: '673',
      index: 771,
      text: 'Soil Engineers',
      enumType: 'SoilEngineers'
    },
    {
      code: '674',
      index: 772,
      text: 'Solar Panel Manufacturer',
      enumType: 'SolarPanelManufacturer'
    },
    {
      code: '675',
      index: 773,
      text: 'Solar Panel Supplier',
      enumType: 'SolarPanelSupplier'
    },
    {
      code: '178',
      index: 774,
      text: 'Solicitors',
      enumType: 'Solicitors'
    },
    {
      code: '676',
      index: 775,
      text: 'Sound Proofing',
      enumType: 'SoundProofing'
    },
    {
      code: '677',
      index: 776,
      text: 'Spinners',
      enumType: 'Spinners'
    },
    {
      code: '125',
      index: 777,
      text: 'Sports',
      enumType: 'Sports'
    },
    {
      code: '126',
      index: 778,
      text: 'Sports - Professional',
      enumType: 'SportsProfessional'
    },
    {
      code: '678',
      index: 779,
      text: 'Sports Centre',
      enumType: 'SportsCentre'
    },
    {
      code: '679',
      index: 780,
      text: 'Sports Club',
      enumType: 'SportsClub'
    },
    {
      code: '680',
      index: 781,
      text: 'Sports Goods Shop',
      enumType: 'SportsGoodsShop'
    },
    {
      code: '681',
      index: 782,
      text: 'Sports Ground',
      enumType: 'SportsGround'
    },
    {
      code: '682',
      index: 783,
      text: 'Sports Promotion',
      enumType: 'SportsPromotion'
    },
    {
      code: '683',
      index: 784,
      text: 'Sportswear Manufacturer',
      enumType: 'SportswearManufacturer'
    },
    {
      code: '684',
      index: 785,
      text: 'Sportswear Supplier',
      enumType: 'SportswearSupplier'
    },
    {
      code: '685',
      index: 786,
      text: 'Stables',
      enumType: 'Stables'
    },
    {
      code: '686',
      index: 787,
      text: 'Stamp Dealers',
      enumType: 'StampDealers'
    },
    {
      code: '687',
      index: 788,
      text: 'Stamp Manufacturer',
      enumType: 'StampManufacturer'
    },
    {
      code: '688',
      index: 789,
      text: 'Stamp Supplier Stationers',
      enumType: 'StampSupplierStationers'
    },
    {
      code: '874',
      index: 790,
      text: 'Stationers',
      enumType: 'Stationers'
    },
    {
      code: '127',
      index: 791,
      text: 'Steel Industry',
      enumType: 'SteelIndustry'
    },
    {
      code: '689',
      index: 792,
      text: 'Steel Stockholders',
      enumType: 'SteelStockholders'
    },
    {
      code: '690',
      index: 793,
      text: 'Sterilizing Services',
      enumType: 'SterilizingServices'
    },
    {
      code: '128',
      index: 794,
      text: 'Stockbroking',
      enumType: 'Stockbroking'
    },
    {
      code: '691',
      index: 795,
      text: 'Stonemasonry',
      enumType: 'Stonemasonry'
    },
    {
      code: '692',
      index: 796,
      text: 'Street Trading',
      enumType: 'StreetTrading'
    },
    {
      code: '129',
      index: 797,
      text: 'Street/Market Trading',
      enumType: 'StreetMarketTrading'
    },
    {
      code: '693',
      index: 798,
      text: 'Structural Engineering',
      enumType: 'StructuralEngineering'
    },
    {
      code: '694',
      index: 799,
      text: 'Studio',
      enumType: 'Studio'
    },
    {
      code: '929',
      index: 800,
      text: 'Sunbed',
      enumType: 'Sunbed'
    },
    {
      code: '179',
      index: 801,
      text: 'Supermarket',
      enumType: 'Supermarket'
    },
    {
      code: '695',
      index: 802,
      text: 'Surveying',
      enumType: 'Surveying'
    },
    {
      code: '180',
      index: 803,
      text: 'Surveyors',
      enumType: 'Surveyors'
    },
    {
      code: '922',
      index: 804,
      text: 'Suspended Ceiling Repairer',
      enumType: 'SuspendedCeilingRepairer'
    },
    {
      code: '696',
      index: 805,
      text: 'Swimming Pool',
      enumType: 'SwimmingPool'
    },
    {
      code: '697',
      index: 806,
      text: 'Tailor And Outfitter',
      enumType: 'TailorAndOutfitter'
    },
    {
      code: '698',
      index: 807,
      text: 'Take Away Food Supplier',
      enumType: 'TakeAwayFoodSupplier'
    },
    {
      code: '699',
      index: 808,
      text: 'Tank Cleaning Services',
      enumType: 'TankCleaningServices'
    },
    {
      code: '700',
      index: 809,
      text: 'Tarpaulin Manufacturer',
      enumType: 'TarpaulinManufacturer'
    },
    {
      code: '701',
      index: 810,
      text: 'Tarpaulin Suppliers',
      enumType: 'TarpaulinSuppliers'
    },
    {
      code: '912',
      index: 811,
      text: 'Tattoo Parlour/Clinic',
      enumType: 'TattooParlourClinic'
    },
    {
      code: '702',
      index: 812,
      text: 'Tax Consultancy',
      enumType: 'TaxConsultancy'
    },
    {
      code: '703',
      index: 813,
      text: 'Taxi Service',
      enumType: 'TaxiService'
    },
    {
      code: '704',
      index: 814,
      text: 'Taxidermy',
      enumType: 'Taxidermy'
    },
    {
      code: '705',
      index: 815,
      text: 'Tea Importer',
      enumType: 'TeaImporter'
    },
    {
      code: '706',
      index: 816,
      text: 'Tea Merchant',
      enumType: 'TeaMerchant'
    },
    {
      code: '707',
      index: 817,
      text: 'Tea Room',
      enumType: 'TeaRoom'
    },
    {
      code: '708',
      index: 818,
      text: 'Technical College',
      enumType: 'TechnicalCollege'
    },
    {
      code: '709',
      index: 819,
      text: 'Telecommunication Equipment Suppliers',
      enumType: 'TelecommunicationEquipmentSuppliers'
    },
    {
      code: '130',
      index: 820,
      text: 'Telecommunications',
      enumType: 'Telecommunications'
    },
    {
      code: '710',
      index: 821,
      text: 'Telemarketing',
      enumType: 'Telemarketing'
    },
    {
      code: '711',
      index: 822,
      text: 'Telephone Answering Service',
      enumType: 'TelephoneAnsweringService'
    },
    {
      code: '712',
      index: 823,
      text: 'Telesales',
      enumType: 'Telesales'
    },
    {
      code: '166',
      index: 824,
      text: 'Television',
      enumType: 'Television'
    },
    {
      code: '806',
      index: 825,
      text: 'Television Hire',
      enumType: 'TelevisionHire'
    },
    {
      code: '713',
      index: 826,
      text: 'Television Production',
      enumType: 'TelevisionProduction'
    },
    {
      code: '714',
      index: 827,
      text: 'Television Repairer',
      enumType: 'TelevisionRepairer'
    },
    {
      code: '715',
      index: 828,
      text: 'Television Sales',
      enumType: 'TelevisionSales'
    },
    {
      code: '716',
      index: 829,
      text: 'Tent And Marquee Hirer',
      enumType: 'TentAndMarqueeHirer'
    },
    {
      code: '837',
      index: 830,
      text: 'Territorial Army',
      enumType: 'TerritorialArmy'
    },
    {
      code: '717',
      index: 831,
      text: 'Textile Manufacturer',
      enumType: 'TextileManufacturer'
    },
    {
      code: '718',
      index: 832,
      text: 'Thatching',
      enumType: 'Thatching'
    },
    {
      code: '167',
      index: 833,
      text: 'Theatre',
      enumType: 'Theatre'
    },
    {
      code: '719',
      index: 834,
      text: 'Theatrical Suppliers',
      enumType: 'TheatricalSuppliers'
    },
    {
      code: '853',
      index: 835,
      text: 'Theme Park',
      enumType: 'ThemePark'
    },
    {
      code: '720',
      index: 836,
      text: 'Tilers',
      enumType: 'Tilers'
    },
    {
      code: '721',
      index: 837,
      text: 'Timber Importers',
      enumType: 'TimberImporters'
    },
    {
      code: '156',
      index: 838,
      text: 'Timber Merchants',
      enumType: 'TimberMerchants'
    },
    {
      code: '722',
      index: 839,
      text: 'Timber Preservation',
      enumType: 'TimberPreservation'
    },
    {
      code: '723',
      index: 840,
      text: 'Timeshare Operators',
      enumType: 'TimeshareOperators'
    },
    {
      code: '724',
      index: 841,
      text: 'Tobacco Importer',
      enumType: 'TobaccoImporter'
    },
    {
      code: '725',
      index: 842,
      text: 'Tobacco Manufacturer',
      enumType: 'TobaccoManufacturer'
    },
    {
      code: '726',
      index: 843,
      text: 'Tobacconist',
      enumType: 'Tobacconist'
    },
    {
      code: '727',
      index: 844,
      text: 'Tomato Grower',
      enumType: 'TomatoGrower'
    },
    {
      code: '728',
      index: 845,
      text: 'Tool Hire',
      enumType: 'ToolHire'
    },
    {
      code: '729',
      index: 846,
      text: 'Tour Operator',
      enumType: 'TourOperator'
    },
    {
      code: '730',
      index: 847,
      text: 'Tourist Board',
      enumType: 'TouristBoard'
    },
    {
      code: '731',
      index: 848,
      text: 'Tourist Information',
      enumType: 'TouristInformation'
    },
    {
      code: '732',
      index: 849,
      text: 'Towel Supplier',
      enumType: 'TowelSupplier'
    },
    {
      code: '733',
      index: 850,
      text: 'Toy And Game Manufacturer',
      enumType: 'ToyAndGameManufacturer'
    },
    {
      code: '734',
      index: 851,
      text: 'Toy And Game Supplier',
      enumType: 'ToyAndGameSupplier'
    },
    {
      code: '159',
      index: 852,
      text: 'Trade Association',
      enumType: 'TradeAssociation'
    },
    {
      code: '187',
      index: 853,
      text: 'Trade Demonstration',
      enumType: 'TradeDemonstration'
    },
    {
      code: '158',
      index: 854,
      text: 'Trade Union',
      enumType: 'TradeUnion'
    },
    {
      code: '735',
      index: 855,
      text: 'Trading Estate',
      enumType: 'TradingEstate'
    },
    {
      code: '736',
      index: 856,
      text: 'Trading Standards Enforcement',
      enumType: 'TradingStandardsEnforcement'
    },
    {
      code: '737',
      index: 857,
      text: 'Trailer Manufacturer',
      enumType: 'TrailerManufacturer'
    },
    {
      code: '738',
      index: 858,
      text: 'Trailer Supplier',
      enumType: 'TrailerSupplier'
    },
    {
      code: '924',
      index: 859,
      text: 'Training Consultancy',
      enumType: 'TrainingConsultancy'
    },
    {
      code: '739',
      index: 860,
      text: 'Translators',
      enumType: 'Translators'
    },
    {
      code: '131',
      index: 861,
      text: 'Transport - PSV',
      enumType: 'TransportPSV'
    },
    {
      code: '132',
      index: 862,
      text: 'Transport - Road',
      enumType: 'TransportRoad'
    },
    {
      code: '145',
      index: 863,
      text: 'Travel And Tourism',
      enumType: 'TravelAndTourism'
    },
    {
      code: '740',
      index: 864,
      text: 'Trinity House',
      enumType: 'TrinityHouse'
    },
    {
      code: '910',
      index: 865,
      text: 'Trust Company',
      enumType: 'TrustCompany'
    },
    {
      code: '169',
      index: 866,
      text: 'Tupperware',
      enumType: 'Tupperware'
    },
    {
      code: '133',
      index: 867,
      text: 'Turf Accountants',
      enumType: 'TurfAccountants'
    },
    {
      code: '741',
      index: 868,
      text: 'TV And Radio',
      enumType: 'TVAndRadio'
    },
    {
      code: '852',
      index: 869,
      text: 'TV And Video Rental',
      enumType: 'TVAndVideoRental'
    },
    {
      code: '742',
      index: 870,
      text: 'Typewriter Services',
      enumType: 'TypewriterServices'
    },
    {
      code: '863',
      index: 871,
      text: 'Tyre Dealer',
      enumType: 'TyreDealer'
    },
    {
      code: '864',
      index: 872,
      text: 'Tyre Manufacturer',
      enumType: 'TyreManufacturer'
    },
    {
      code: '743',
      index: 873,
      text: 'Tyre Supplier And Fitting',
      enumType: 'TyreSupplierAndFitting'
    },
    {
      code: '744',
      index: 874,
      text: 'Undertaker',
      enumType: 'Undertaker'
    },
    {
      code: '745',
      index: 875,
      text: 'Underwater Inspection',
      enumType: 'UnderwaterInspection'
    },
    {
      code: '746',
      index: 876,
      text: 'Underwriting Agency',
      enumType: 'UnderwritingAgency'
    },
    {
      code: '747',
      index: 877,
      text: 'Unemployed',
      enumType: 'Unemployed'
    },
    {
      code: '748',
      index: 878,
      text: 'Uniform Manufacturer',
      enumType: 'UniformManufacturer'
    },
    {
      code: '749',
      index: 879,
      text: 'University',
      enumType: 'University'
    },
    {
      code: '999',
      index: 880,
      text: 'Unknown',
      enumType: 'Unknown'
    },
    {
      code: '750',
      index: 881,
      text: 'Upholstery',
      enumType: 'Upholstery'
    },
    {
      code: '751',
      index: 882,
      text: 'Vacuum Cleaner Repairs And Service',
      enumType: 'VacuumCleanerRepairsAndService'
    },
    {
      code: '752',
      index: 883,
      text: 'Valuation',
      enumType: 'Valuation'
    },
    {
      code: '753',
      index: 884,
      text: 'Van And Lorry Hirer',
      enumType: 'VanAndLorryHirer'
    },
    {
      code: '155',
      index: 885,
      text: 'Vehicle Hire - Self Drive',
      enumType: 'VehicleHireSelfDrive'
    },
    {
      code: '754',
      index: 886,
      text: 'Vehicle Repairer',
      enumType: 'VehicleRepairer'
    },
    {
      code: '755',
      index: 887,
      text: 'Vending Machine Manufacturer',
      enumType: 'VendingMachineManufacturer'
    },
    {
      code: '756',
      index: 888,
      text: 'Vending Machine Supplier',
      enumType: 'VendingMachineSupplier'
    },
    {
      code: '828',
      index: 889,
      text: 'Vending Services',
      enumType: 'VendingServices'
    },
    {
      code: '757',
      index: 890,
      text: 'Veneering',
      enumType: 'Veneering'
    },
    {
      code: '758',
      index: 891,
      text: 'Venetian Blind Manufacturer',
      enumType: 'VenetianBlindManufacturer'
    },
    {
      code: '759',
      index: 892,
      text: 'Venetian Blind Supplier',
      enumType: 'VenetianBlindSupplier'
    },
    {
      code: '760',
      index: 893,
      text: 'Ventilation',
      enumType: 'Ventilation'
    },
    {
      code: '761',
      index: 894,
      text: 'Vermin Control',
      enumType: 'VerminControl'
    },
    {
      code: '134',
      index: 895,
      text: 'Veterinary',
      enumType: 'Veterinary'
    },
    {
      code: '762',
      index: 896,
      text: 'Veterinary Supplies',
      enumType: 'VeterinarySupplies'
    },
    {
      code: '763',
      index: 897,
      text: 'Veterinary Surgeons',
      enumType: 'VeterinarySurgeons'
    },
    {
      code: '135',
      index: 898,
      text: 'Video Hire',
      enumType: 'VideoHire'
    },
    {
      code: '764',
      index: 899,
      text: 'Video Services',
      enumType: 'VideoServices'
    },
    {
      code: '765',
      index: 900,
      text: 'Vineyard',
      enumType: 'Vineyard'
    },
    {
      code: '766',
      index: 901,
      text: 'Voluntary Organisation',
      enumType: 'VoluntaryOrganisation'
    },
    {
      code: '767',
      index: 902,
      text: 'Wallpaper Manufacturer/Supplier',
      enumType: 'WallpaperManufacturerSupplier'
    },
    {
      code: '768',
      index: 903,
      text: 'Washing Machine Repairs And Servicing',
      enumType: 'WashingMachineRepairsAndServicing'
    },
    {
      code: '769',
      index: 904,
      text: 'Waste Disposal',
      enumType: 'WasteDisposal'
    },
    {
      code: '770',
      index: 905,
      text: 'Watchmaker',
      enumType: 'Watchmaker'
    },
    {
      code: '136',
      index: 906,
      text: 'Water Industry',
      enumType: 'WaterIndustry'
    },
    {
      code: '771',
      index: 907,
      text: 'Water Sports Centre',
      enumType: 'WaterSportsCentre'
    },
    {
      code: '772',
      index: 908,
      text: 'Waterproof Cover Manufacturer',
      enumType: 'WaterproofCoverManufacturer'
    },
    {
      code: '773',
      index: 909,
      text: 'Waterproof Cover Supplier',
      enumType: 'WaterproofCoverSupplier'
    },
    {
      code: '774',
      index: 910,
      text: 'Weather Forecasting',
      enumType: 'WeatherForecasting'
    },
    {
      code: '775',
      index: 911,
      text: 'Weather Services',
      enumType: 'WeatherServices'
    },
    {
      code: '776',
      index: 912,
      text: 'Weights And Measures',
      enumType: 'WeightsAndMeasures'
    },
    {
      code: '777',
      index: 913,
      text: 'Welding',
      enumType: 'Welding'
    },
    {
      code: '778',
      index: 914,
      text: 'Welfare Organisation',
      enumType: 'WelfareOrganisation'
    },
    {
      code: '779',
      index: 915,
      text: 'Whisky Blenders',
      enumType: 'WhiskyBlenders'
    },
    {
      code: '137',
      index: 916,
      text: 'Wholesaler',
      enumType: 'Wholesaler'
    },
    {
      code: '780',
      index: 917,
      text: 'Window Cleaning',
      enumType: 'WindowCleaning'
    },
    {
      code: '781',
      index: 918,
      text: 'Wine And Spirit Merchants',
      enumType: 'WineAndSpiritMerchants'
    },
    {
      code: '782',
      index: 919,
      text: 'Wine Bar',
      enumType: 'WineBar'
    },
    {
      code: '783',
      index: 920,
      text: 'Wine Makers',
      enumType: 'WineMakers'
    },
    {
      code: '784',
      index: 921,
      text: 'Wire Rope Manufacturer',
      enumType: 'WireRopeManufacturer'
    },
    {
      code: '785',
      index: 922,
      text: 'Wood Carving',
      enumType: 'WoodCarving'
    },
    {
      code: '786',
      index: 923,
      text: 'Wood Preservation',
      enumType: 'WoodPreservation'
    },
    {
      code: '880',
      index: 924,
      text: 'Woodshavings Contractor',
      enumType: 'WoodshavingsContractor'
    },
    {
      code: '787',
      index: 925,
      text: 'Woodworking',
      enumType: 'Woodworking'
    },
    {
      code: '788',
      index: 926,
      text: 'Woodworm And Dry Rot Control',
      enumType: 'WoodwormAndDryRotControl'
    },
    {
      code: '789',
      index: 927,
      text: 'Woollen Goods Manufacturer',
      enumType: 'WoollenGoodsManufacturer'
    },
    {
      code: '790',
      index: 928,
      text: 'Woollen Goods Shop',
      enumType: 'WoollenGoodsShop'
    },
    {
      code: '791',
      index: 929,
      text: 'Woollen Mill',
      enumType: 'WoollenMill'
    },
    {
      code: '792',
      index: 930,
      text: 'Wrought Iron Manufacturer',
      enumType: 'WroughtIronManufacturer'
    },
    {
      code: '793',
      index: 931,
      text: 'Yacht Building',
      enumType: 'YachtBuilding'
    },
    {
      code: '794',
      index: 932,
      text: 'Yacht Chandlery',
      enumType: 'YachtChandlery'
    },
    {
      code: '877',
      index: 933,
      text: 'Yacht Service And Management',
      enumType: 'YachtServiceAndManagement'
    },
    {
      code: '795',
      index: 934,
      text: 'Yarn Spinning',
      enumType: 'YarnSpinning'
    },
    {
      code: '796',
      index: 935,
      text: 'Youth Hostel Organisation',
      enumType: 'YouthHostelOrganisation'
    },
    {
      code: '878',
      index: 936,
      text: 'Youth Organisation',
      enumType: 'YouthOrganisation'
    },
    {
      code: '797',
      index: 937,
      text: 'Zoo Operator',
      enumType: 'ZooOperator'
    },
    {
      code: '947',
      index: 0,
      text: 'None - Retired',
      enumType: '947'
    },
    {
      code: '948',
      index: 0,
      text: 'None - Household Duties',
      enumType: '948'
    },
    {
      code: '949',
      index: 0,
      text: 'None - Not Employed due to Disability',
      enumType: '949'
    },
    {
      code: '950',
      index: 0,
      text: 'None - Student',
      enumType: '950'
    }
  ],
  CriminalConvictionType: [
    {
      code: 'AFF01',
      index: 1,
      text: 'Affray',
      enumType: 'Affray'
    },
    {
      code: 'ARM01',
      index: 2,
      text: 'Armed robbery',
      enumType: 'Armedrobbery'
    },
    {
      code: 'ARS01',
      index: 3,
      text: 'Arson',
      enumType: 'Arson'
    },
    {
      code: 'ASS01',
      index: 4,
      text: 'Assault',
      enumType: 'Assault'
    },
    {
      code: 'ABH01',
      index: 5,
      text: 'Actual bodily harm',
      enumType: 'Actualbodilyharm'
    },
    {
      code: 'GBH01',
      index: 6,
      text: 'Grievous bodily harm',
      enumType: 'Grievousbodilyharm'
    },
    {
      code: 'OVO01',
      index: 7,
      text: 'Other violent offences',
      enumType: 'Otherviolentoffences'
    },
    {
      code: 'ABS01',
      index: 8,
      text: 'Bestiality',
      enumType: 'Bestiality'
    },
    {
      code: 'BKM01',
      index: 9,
      text: 'Blackmail',
      enumType: 'Blackmail'
    },
    {
      code: 'BNE01',
      index: 10,
      text: 'Breaking & entering',
      enumType: 'Breakingentering'
    },
    {
      code: 'BGL01',
      index: 11,
      text: 'Burglary',
      enumType: 'Burglary'
    },
    {
      code: 'ROB01',
      index: 12,
      text: 'Robbery',
      enumType: 'Robbery'
    },
    {
      code: 'BCO01',
      index: 13,
      text: 'Broken court order',
      enumType: 'Brokencourtorder'
    },
    {
      code: 'MBG01',
      index: 14,
      text: 'Buggery',
      enumType: 'Buggery'
    },
    {
      code: 'MAB01',
      index: 15,
      text: 'Attempted buggery',
      enumType: 'Attemptedbuggery'
    },
    {
      code: 'CRD01',
      index: 16,
      text: 'Criminal damage',
      enumType: 'Criminaldamage'
    },
    {
      code: 'MDM01',
      index: 17,
      text: 'Malicious damage',
      enumType: 'Maliciousdamage'
    },
    {
      code: 'DCP01',
      index: 18,
      text: 'Deception',
      enumType: 'Deception'
    },
    {
      code: 'DRI01',
      index: 19,
      text: 'Drugs intent to supply',
      enumType: 'Drugsintenttosupply'
    },
    {
      code: 'DGP01',
      index: 20,
      text: 'Drugs possession',
      enumType: 'Drugspossession'
    },
    {
      code: 'DND01',
      index: 21,
      text: 'Drunk & disorderly',
      enumType: 'Drunkdisorderly'
    },
    {
      code: 'EBZ01',
      index: 22,
      text: 'Embezzlement',
      enumType: 'Embezzlement'
    },
    {
      code: 'FIN01',
      index: 23,
      text: 'Finance offences',
      enumType: 'Financeoffences'
    },
    {
      code: 'FOR01',
      index: 24,
      text: 'Forgery',
      enumType: 'Forgery'
    },
    {
      code: 'FRD01',
      index: 25,
      text: 'Fraud',
      enumType: 'Fraud'
    },
    {
      code: 'HSG01',
      index: 26,
      text: 'Handling stolen goods',
      enumType: 'Handlingstolengoods'
    },
    {
      code: 'MAT01',
      index: 27,
      text: 'Abuse of position of trust with minor',
      enumType: 'Abuseofpositionoftrustwithminor'
    },
    {
      code: 'MGI01',
      index: 28,
      text: 'Gross indecency with minor',
      enumType: 'Grossindecencywithminor'
    },
    {
      code: 'MSA01',
      index: 29,
      text: 'Child sex abuse',
      enumType: 'Childsexabuse'
    },
    {
      code: 'MIM01',
      index: 30,
      text: 'Incest with a minor',
      enumType: 'Incestwithaminor'
    },
    {
      code: 'MIA01',
      index: 31,
      text: 'Indecent assault on a minor',
      enumType: 'Indecentassaultonaminor'
    },
    {
      code: 'MSX01',
      index: 32,
      text: 'Unlawful sexual intercourse with a minor',
      enumType: 'Unlawfulsexualintercoursewithaminor'
    },
    {
      code: 'MOT01',
      index: 33,
      text: 'Other sex offence on minor',
      enumType: 'Othersexoffenceonminor'
    },
    {
      code: 'AIN01',
      index: 34,
      text: 'Incest with an adult',
      enumType: 'Incestwithanadult'
    },
    {
      code: 'AIA01',
      index: 35,
      text: 'Indecent assault',
      enumType: 'Indecentassault'
    },
    {
      code: 'AOT01',
      index: 36,
      text: 'Other sex offence on adult',
      enumType: 'Othersexoffenceonadult'
    },
    {
      code: 'ASH01',
      index: 37,
      text: 'Sexual harassment',
      enumType: 'Sexualharassment'
    },
    {
      code: 'AIE01',
      index: 38,
      text: 'Indecent exposure',
      enumType: 'Indecentexposure'
    },
    {
      code: 'ALL01',
      index: 39,
      text: 'Lewd & libidinous behaviour',
      enumType: 'Lewdlibidinousbehaviour'
    },
    {
      code: 'API01',
      index: 40,
      text: 'Public indecency',
      enumType: 'Publicindecency'
    },
    {
      code: 'IDL01',
      index: 41,
      text: 'Possession of indecent images from internet',
      enumType: 'Possessionofindecentimagesfrominternet'
    },
    {
      code: 'IDS01',
      index: 42,
      text: 'Incitement to distribute indecent images',
      enumType: 'Incitementtodistributeindecentimages'
    },
    {
      code: 'IOT01',
      index: 43,
      text: 'Other internet offence',
      enumType: 'Otherinternetoffence'
    },
    {
      code: 'ARP01',
      index: 44,
      text: 'Rape',
      enumType: 'Rape'
    },
    {
      code: 'AAR01',
      index: 45,
      text: 'Attempted rape',
      enumType: 'Attemptedrape'
    },
    {
      code: 'MAN01',
      index: 46,
      text: 'Manslaughter',
      enumType: 'Manslaughter'
    },
    {
      code: 'MRD01',
      index: 47,
      text: 'Murder',
      enumType: 'Murder'
    },
    {
      code: 'IMW01',
      index: 48,
      text: 'Possession/use of imitation weapons',
      enumType: 'Possessionuseofimitationweapons'
    },
    {
      code: 'SSF01',
      index: 49,
      text: 'Social Security fraud',
      enumType: 'SocialSecurityfraud'
    },
    {
      code: 'TND01',
      index: 50,
      text: 'Taking & driving away',
      enumType: 'Takingdrivingaway'
    },
    {
      code: 'TFT01',
      index: 51,
      text: 'Theft',
      enumType: 'Theft'
    },
    {
      code: 'AVY01',
      index: 52,
      text: 'Voyeurism',
      enumType: 'Voyeurism'
    },
    {
      code: '99',
      index: 53,
      text: 'Other',
      enumType: 'Other'
    },
    {
      code: 'AGG99',
      index: 54,
      text: 'Unknown - Aggregator',
      enumType: 'UnknownAggregator'
    },
    {
      code: 'ABH101',
      index: 55,
      text: 'ABH, Offences Against the Person Act 1861, s.47',
      enumType: 'ABHOffencesAgainstthePersonAct1861s47'
    },
    {
      code: 'ABH102',
      index: 56,
      text: 'Assault occasioning actual bodily harm, Offences Against the Person Act 1861, s.47',
      enumType: 'AssaultoccasioningactualbodilyharmOffencesAgainstthePersonAct1861s47'
    },
    {
      code: 'RBH101',
      index: 57,
      text:
        'Racially or religiously aggravated assault occasioning actual bodily harm, Crime and Disorder Act 1998, s.29',
      enumType: 'RaciallyorreligiouslyaggravatedassaultoccasioningactualbodilyharmCrimeandDisorderAct1998s29'
    },
    {
      code: 'AFF101',
      index: 58,
      text: 'Affray, Public Order Act 1986, s.3',
      enumType: 'AffrayPublicOrderAct1986s3'
    },
    {
      code: 'AFF102',
      index: 59,
      text: 'Public Order Act, s.3 (affray)',
      enumType: 'PublicOrderActs3affray'
    },
    {
      code: 'EXP101',
      index: 60,
      text: 'Exposure, Sexual Offences Act 2003, s.66',
      enumType: 'ExposureSexualOffencesAct2003s66'
    },
    {
      code: 'ARS101',
      index: 61,
      text: 'Arson (criminal damage by fire), Criminal Damage Act 1971, s.1',
      enumType: 'ArsoncriminaldamagebyfireCriminalDamageAct1971s1'
    },
    {
      code: 'ARS102',
      index: 62,
      text: 'Criminal damage by fire (arson), Criminal Damage Act 1971, s.1',
      enumType: 'CriminaldamagebyfirearsonCriminalDamageAct1971s1'
    },
    {
      code: 'APC101',
      index: 63,
      text: 'Assault on a police constable, Police Act 1996, s.89(1)',
      enumType: 'AssaultonapoliceconstablePoliceAct1996s891'
    },
    {
      code: 'ARA101',
      index: 64,
      text: 'Assault with intent to resist arrest, Offences Against the Person Act 1861, s.38',
      enumType: 'AssaultwithintenttoresistarrestOffencesAgainstthePersonAct1861s38'
    },
    {
      code: 'CAS101',
      index: 65,
      text: 'Common assault, Criminal Justice Act 1988, s.39',
      enumType: 'CommonassaultCriminalJusticeAct1988s39'
    },
    {
      code: 'RCA101',
      index: 66,
      text: 'Racially or religiously aggravated common assault, Crime and Disorder Act 1998, s.29',
      enumType: 'RaciallyorreligiouslyaggravatedcommonassaultCrimeandDisorderAct1998s29'
    },
    {
      code: 'VOY101',
      index: 67,
      text: 'Voyeurism, Sexual Offences Act 2003, s.67',
      enumType: 'VoyeurismSexualOffencesAct2003s67'
    },
    {
      code: 'BAS101',
      index: 68,
      text: 'Anti-social behaviour order, breach of, Crime and Disorder Act 1988, s.1 (10)',
      enumType: 'AntisocialbehaviourorderbreachofCrimeandDisorderAct1988s110'
    },
    {
      code: 'BAS102',
      index: 69,
      text: 'Breach of anti-social behaviour order, Crime and Disorder Act 1988, s.1',
      enumType: 'BreachofantisocialbehaviourorderCrimeandDisorderAct1988s1'
    },
    {
      code: 'BCO101',
      index: 70,
      text: 'Breach of community order, Criminal Justice Act 2003, sch.8',
      enumType: 'BreachofcommunityorderCriminalJusticeAct2003sch8'
    },
    {
      code: 'BNM101',
      index: 71,
      text: 'Breach of non-molestation order, Family Law Act 1996, s.42A',
      enumType: 'BreachofnonmolestationorderFamilyLawAct1996s42A'
    },
    {
      code: 'BPO101',
      index: 72,
      text: 'Breach of protective order, Protection from Harassment Act 1997, s.5(5) and Family Law Act 1996, s.42A',
      enumType: 'BreachofprotectiveorderProtectionfromHarassmentAct1997s55andFamilyLawAct1996s42A'
    },
    {
      code: 'BRO101',
      index: 73,
      text: 'Breach of restraining order, Protection from Harassment Act 1997, s.5(5)',
      enumType: 'BreachofrestrainingorderProtectionfromHarassmentAct1997s55'
    },
    {
      code: 'BCO102',
      index: 74,
      text: 'Community order, breach of, Criminal Justice Act 2003, sch.8',
      enumType: 'CommunityorderbreachofCriminalJusticeAct2003sch8'
    },
    {
      code: 'BNM102',
      index: 75,
      text: 'Non-molestation order, breach of, Family Law Act 1996, s.42A',
      enumType: 'NonmolestationorderbreachofFamilyLawAct1996s42A'
    },
    {
      code: 'BPO102',
      index: 76,
      text: 'Protective order, breach of, Protection from Harassment Act 1997, s.5(5) and Family Law Act 1996, s.42A',
      enumType: 'ProtectiveorderbreachofProtectionfromHarassmentAct1997s55andFamilyLawAct1996s42A'
    },
    {
      code: 'BRO102',
      index: 77,
      text: 'Restraining order, breach of, Protection from Harassment Act 1997, s.5(5)',
      enumType: 'RestrainingorderbreachofProtectionfromHarassmentAct1997s55'
    },
    {
      code: 'BUR101',
      index: 78,
      text: 'Burglary in a dwelling, Theft Act 1968, s.9',
      enumType: 'BurglaryinadwellingTheftAct1968s9'
    },
    {
      code: 'BUR102',
      index: 79,
      text: 'Burglary in a building other than a dwelling, Theft Act 1968, s.9',
      enumType: 'BurglaryinabuildingotherthanadwellingTheftAct1968s9'
    },
    {
      code: 'CRD101',
      index: 80,
      text: 'Criminal damage (other than by fire), Criminal Damage Act 1971, s.1(1)',
      enumType: 'CriminaldamageotherthanbyfireCriminalDamageAct1971s11'
    },
    {
      code: 'VIN101',
      index: 81,
      text: 'Vehicle interference, Criminal Attempts Act 1981, s.9',
      enumType: 'VehicleinterferenceCriminalAttemptsAct1981s9'
    },
    {
      code: 'FAL101',
      index: 82,
      text: 'Falsify or alter records with intent to deceive',
      enumType: 'Falsifyoralterrecordswithintenttodeceive'
    },
    {
      code: 'FAL102',
      index: 83,
      text: 'Records, falsify/alter with intent to deceive',
      enumType: 'Recordsfalsifyalterwithintenttodeceive'
    },
    {
      code: 'DRP101',
      index: 84,
      text: 'Drugs – class A – possession, Misuse of Drugs Act 1971, s.5(2)',
      enumType: 'DrugsclassApossessionMisuseofDrugsAct1971s52'
    },
    {
      code: 'DRP102',
      index: 85,
      text: 'Drugs – class B and C – possession, Misuse of Drugs Act 1971, s.5(2)',
      enumType: 'DrugsclassBandCpossessionMisuseofDrugsAct1971s52'
    },
    {
      code: 'DND101',
      index: 86,
      text: 'Drunk and disorderly in a public place, Criminal Justice Act 1967, s.91',
      enumType: 'DrunkanddisorderlyinapublicplaceCriminalJusticeAct1967s91'
    },
    {
      code: 'DRP103',
      index: 87,
      text:
        'Drugs – class A – produce, supply, possess with intent to supply, Misuse of Drugs Act 1971, ss.4(2),4(3) and 5(3)',
      enumType: 'DrugsclassAproducesupplypossesswithintenttosupplyMisuseofDrugsAct1971ss4243and53'
    },
    {
      code: 'DRP104',
      index: 88,
      text: 'Drugs – class B and C – supply, possess with intent to supply, Misuse of Drugs Act 1971, ss.4(3) and 5(3)',
      enumType: 'DrugsclassBandCsupplypossesswithintenttosupplyMisuseofDrugsAct1971ss43and53'
    },
    {
      code: 'ITE101',
      index: 89,
      text: 'Income tax evasion, Finance Act 2000, s.144',
      enumType: 'IncometaxevasionFinanceAct2000s144'
    },
    {
      code: 'ATE101',
      index: 90,
      text: 'Alcohol/tobacco, fraudulently evade duty, Customs and Excise Management Act 1979, s.170',
      enumType: 'AlcoholtobaccofraudulentlyevadedutyCustomsandExciseManagementAct1979s170'
    },
    {
      code: 'OSD101',
      index: 91,
      text: 'Obtaining services dishonestly, Fraud Act 2006, s.11',
      enumType: 'ObtainingservicesdishonestlyFraudAct2006s11'
    },
    {
      code: 'TCF101',
      index: 92,
      text: 'Tax credit fraud, Tax Credits Act 2002, s.35',
      enumType: 'TaxcreditfraudTaxCreditsAct2002s35'
    },
    {
      code: 'VLF101',
      index: 93,
      text: 'Vehicle licence/registration fraud, Vehicle Excise and Registration Act 1994, s.44',
      enumType: 'VehiclelicenceregistrationfraudVehicleExciseandRegistrationAct1994s44'
    },
    {
      code: 'GBH101',
      index: 94,
      text: 'GBH, Offences Against the Person Act 1861, s.20',
      enumType: 'GBHOffencesAgainstthePersonAct1861s20'
    },
    {
      code: 'GBH102',
      index: 95,
      text: 'Grievous bodily harm/unlawful wounding, Offences Against the Person Act 1861, s.20',
      enumType: 'GrievousbodilyharmunlawfulwoundingOffencesAgainstthePersonAct1861s20'
    },
    {
      code: 'RGB101',
      index: 96,
      text:
        'Racially or religiously aggravated grievous bodily harm/unlawful wounding, Crime and Disorder Act 1998, s.29',
      enumType: 'RaciallyorreligiouslyaggravatedgrievousbodilyharmunlawfulwoundingCrimeandDisorderAct1998s29'
    },
    {
      code: 'HSG101',
      index: 97,
      text: 'Handling stolen goods, Theft Act 1968, s.22',
      enumType: 'HandlingstolengoodsTheftAct1968s22'
    },
    {
      code: 'MIP101',
      index: 98,
      text:
        'Indecent photographs of children, Protection of Children Act 1978, s.1 and Criminal Justice Act 1988, s.160',
      enumType: 'IndecentphotographsofchildrenProtectionofChildrenAct1978s1andCriminalJusticeAct1988s160'
    },
    {
      code: 'VIO101',
      index: 99,
      text: 'Public Order Act 1986, s.2 (violent disorder)',
      enumType: 'PublicOrderAct1986s2violentdisorder'
    },
    {
      code: 'THR101',
      index: 100,
      text: 'Public Order Act 1986, s.4 (threatening behaviour – fear or provocation of violence)',
      enumType: 'PublicOrderAct1986s4threateningbehaviourfearorprovocationofviolence'
    },
    {
      code: 'RHA101',
      index: 101,
      text:
        'Racially or religiously aggravated harassment – putting people in fear of violence, Crime and Disorder Act 1998, s.32',
      enumType: 'RaciallyorreligiouslyaggravatedharassmentputtingpeopleinfearofviolenceCrimeandDisorderAct1998s32'
    },
    {
      code: 'THR102',
      index: 102,
      text: 'Threatening behaviour – fear or provocation of violence, Public Order Act 1986, s.4',
      enumType: 'ThreateningbehaviourfearorprovocationofviolencePublicOrderAct1986s4'
    },
    {
      code: 'VIO103',
      index: 103,
      text: 'Violent disorder, Public Order Act 1986, s.2',
      enumType: 'ViolentdisorderPublicOrderAct1986s2'
    },
    {
      code: 'SSF101',
      index: 104,
      text:
        'Social security benefit, false statement/representation to obtain, Social Security Administration Act 1992, ss.111A and 112',
      enumType:
        'SocialsecuritybenefitfalsestatementrepresentationtoobtainSocialSecurityAdministrationAct1992ss111Aand112'
    },
    {
      code: 'TEL101',
      index: 105,
      text: 'Abstract/use without authority electricity, Theft Act 1968, s.13',
      enumType: 'AbstractusewithoutauthorityelectricityTheftAct1968s13'
    },
    {
      code: 'TEL102',
      index: 106,
      text: 'Electricity, abstract/use without authority, Theft Act 1968, s.13',
      enumType: 'ElectricityabstractusewithoutauthorityTheftAct1968s13'
    },
    {
      code: 'GET101',
      index: 107,
      text: 'Going equipped, for theft, Theft Act 1968, s.25',
      enumType: 'GoingequippedfortheftTheftAct1968s25'
    },
    {
      code: 'WOP101',
      index: 108,
      text: 'Making off without payment, Theft Act 1978, s.3',
      enumType: 'MakingoffwithoutpaymentTheftAct1978s3'
    },
    {
      code: 'TBT101',
      index: 109,
      text: 'Theft, breach of trust, Theft Act 1968, s.1 100a',
      enumType: 'TheftbreachoftrustTheftAct1968s1100a'
    },
    {
      code: 'TDT101',
      index: 110,
      text: 'Theft, dwelling, Theft Act 1968, s.1 101a',
      enumType: 'TheftdwellingTheftAct1968s1101a'
    },
    {
      code: 'TGP101',
      index: 111,
      text: 'Theft, general principles, Theft Act 1968, s.1',
      enumType: 'TheftgeneralprinciplesTheftAct1968s1'
    },
    {
      code: 'TPT101',
      index: 112,
      text: 'Theft, person, Theft Act 1968, s.1 102a',
      enumType: 'TheftpersonTheftAct1968s1102a'
    },
    {
      code: 'TST101',
      index: 113,
      text: 'Theft, shop, Theft Act 1968, s.1 103a',
      enumType: 'TheftshopTheftAct1968s1103a'
    },
    {
      code: 'AVT101',
      index: 114,
      text:
        'Aggravated vehicle-taking (damage caused to property other than the vehicle in accident or damage caused to vehicle), Theft Act 1968, ss.12A(2)(c) and 12A(2)(d)',
      enumType:
        'AggravatedvehicletakingdamagecausedtopropertyotherthanthevehicleinaccidentordamagecausedtovehicleTheftAct1968ss12A2cand12A2d'
    },
    {
      code: 'AVT102',
      index: 115,
      text:
        'Aggravated vehicle-taking (dangerous driving or accident causing injury), Theft Act 1968, ss.12A(2)(a) and 12A(2)(b)',
      enumType: 'AggravatedvehicletakingdangerousdrivingoraccidentcausinginjuryTheftAct1968ss12A2aand12A2b'
    },
    {
      code: 'TDA101',
      index: 116,
      text: 'TDA (vehicle taking without consent), Theft Act 1968, s.12',
      enumType: 'TDAvehicletakingwithoutconsentTheftAct1968s12'
    },
    {
      code: 'TWO101',
      index: 117,
      text: 'TWOC (vehicle taking without consent), Theft Act 1968, s.12',
      enumType: 'TWOCvehicletakingwithoutconsentTheftAct1968s12'
    },
    {
      code: 'VWC101',
      index: 118,
      text: 'Vehicle taking without consent, Theft Act 1968, s.12',
      enumType: 'VehicletakingwithoutconsentTheftAct1968s12'
    },
    {
      code: 'VAG101',
      index: 119,
      text:
        'Vehicle taking, aggravated (damage caused to property other than the vehicle in accident or damage caused to vehicle), Theft Act 1968, ss.12A(2)(c) and 12A(2)(d)',
      enumType:
        'VehicletakingaggravateddamagecausedtopropertyotherthanthevehicleinaccidentordamagecausedtovehicleTheftAct1968ss12A2cand12A2d'
    },
    {
      code: 'VAG102',
      index: 120,
      text:
        'Vehicle taking, aggravated (dangerous driving or accident causing injury), Theft Act 1968, ss.12A(2)(a) and 12A(2)(b)',
      enumType: 'VehicletakingaggravateddangerousdrivingoraccidentcausinginjuryTheftAct1968ss12A2aand12A2b'
    },
    {
      code: 'ALC101',
      index: 121,
      text: 'Alcohol sale offences, Licensing Act 2003, ss.141, 146 and 147',
      enumType: 'AlcoholsaleoffencesLicensingAct2003ss141146and147'
    },
    {
      code: 'ANC101',
      index: 122,
      text: 'Animal cruelty, Animal Welfare Act 2006, ss.4, 8 and 9',
      enumType: 'AnimalcrueltyAnimalWelfareAct2006ss48and9'
    },
    {
      code: 'BFS101',
      index: 123,
      text: 'Bail, failure to surrender, Bail Act 1976, ss.6(1) and 6(2)',
      enumType: 'BailfailuretosurrenderBailAct1976ss61and62'
    },
    {
      code: 'BLP101',
      index: 124,
      text: 'Bladed article, possession of, Criminal Justice Act 1988, s.139',
      enumType: 'BladedarticlepossessionofCriminalJusticeAct1988s139'
    },
    {
      code: 'BRK101',
      index: 125,
      text: 'Brothel keeping, Sexual Offences Act 2003, s.55',
      enumType: 'BrothelkeepingSexualOffencesAct2003s55'
    },
    {
      code: 'MPP101',
      index: 126,
      text: 'Child prostitution and pornography, Sexual Offences Act 2003, ss.48, 49 and 50',
      enumType: 'ChildprostitutionandpornographySexualOffencesAct2003ss4849and50'
    },
    {
      code: 'HCK101',
      index: 127,
      text: 'Communication network offences, Communications Act 2003, ss.127(1) and 127(2)',
      enumType: 'CommunicationnetworkoffencesCommunicationsAct2003ss1271and1272'
    },
    {
      code: 'MCR101',
      index: 128,
      text: 'Cruelty to a child, Children and Young Persons Act 1933, s.1(1)',
      enumType: 'CrueltytoachildChildrenandYoungPersonsAct1933s11'
    },
    {
      code: 'DCC101',
      index: 129,
      text: 'Cultivation of cannabis, Misuse of Drugs Act 1971, s.6(2)',
      enumType: 'CultivationofcannabisMisuseofDrugsAct1971s62'
    },
    {
      code: 'HRA101',
      index: 130,
      text: 'Disorderly behaviour (harassment, alarm or distress), Public Order Act 1986, s.5',
      enumType: 'DisorderlybehaviourharassmentalarmordistressPublicOrderAct1986s5'
    },
    {
      code: 'HRA102',
      index: 131,
      text: 'Disorderly behaviour with intent to cause harassment, alarm or distress, Public Order Act 1986, s.4A',
      enumType: 'DisorderlybehaviourwithintenttocauseharassmentalarmordistressPublicOrderAct1986s4A'
    },
    {
      code: 'DFA101',
      index: 132,
      text: 'Drugs – class A – fail to attend/remain for initial assessment, Drugs Act 2005, s.12',
      enumType: 'DrugsclassAfailtoattendremainforinitialassessmentDrugsAct2005s12'
    },
    {
      code: 'DFA102',
      index: 133,
      text: 'Drugs – class A – failure to attend/remain for initial assessment, Drugs Act 2005, s.12',
      enumType: 'DrugsclassAfailuretoattendremainforinitialassessmentDrugsAct2005s12'
    },
    {
      code: 'DRF101',
      index: 134,
      text: 'Drugs – class A – fail/refuse to provide a sample, Police and Criminal Evidence Act 1984, s.63B',
      enumType: 'DrugsclassAfailrefusetoprovideasamplePoliceandCriminalEvidenceAct1984s63B'
    },
    {
      code: 'DRF102',
      index: 135,
      text: 'Drugs – class A – failure/refuse to provide a sample, Police and Criminal Evidence Act 1984, s.63B',
      enumType: 'DrugsclassAfailurerefusetoprovideasamplePoliceandCriminalEvidenceAct1984s63B'
    },
    {
      code: 'DCC102',
      index: 136,
      text: 'Drugs – cultivation of cannabis, Misuse of Drugs Act 1971, s.6(2)',
      enumType: 'DrugscultivationofcannabisMisuseofDrugsAct1971s62'
    },
    {
      code: 'ATE102',
      index: 137,
      text: 'Evade duty – alcohol/tobacco, Customs and Excise Management Act 1979, s.170',
      enumType: 'EvadedutyalcoholtobaccoCustomsandExciseManagementAct1979s170'
    },
    {
      code: 'TVE101',
      index: 138,
      text: 'Evade TV licence payment, Communications Act 2003, s.363',
      enumType: 'EvadeTVlicencepaymentCommunicationsAct2003s363'
    },
    {
      code: 'EPR101',
      index: 139,
      text: 'Exploitation of prostitution, Sexual Offences Act 2003, ss.52 and 53',
      enumType: 'ExploitationofprostitutionSexualOffencesAct2003ss52and53'
    },
    {
      code: 'SXF101',
      index: 140,
      text:
        'Fail to comply with notification requirements, sex offenders register, Sexual Offences Act 2003, ss.91(1)(a) and 91(1)(b)',
      enumType: 'FailtocomplywithnotificationrequirementssexoffendersregisterSexualOffencesAct2003ss911aand911b'
    },
    {
      code: 'SXF102',
      index: 141,
      text:
        'Failure to comply with notification requirements, sex offenders register, Sexual Offences Act 2003, ss.91(1)(a) and 91(1)(b)',
      enumType: 'FailuretocomplywithnotificationrequirementssexoffendersregisterSexualOffencesAct2003ss911aand911b'
    },
    {
      code: 'FPC101',
      index: 142,
      text: 'Fail to comply with police constable directing traffic',
      enumType: 'Failtocomplywithpoliceconstabledirectingtraffic'
    },
    {
      code: 'FPC102',
      index: 143,
      text: 'Failure to comply with police constable directing traffic',
      enumType: 'Failuretocomplywithpoliceconstabledirectingtraffic'
    },
    {
      code: 'CFP101',
      index: 144,
      text: 'Firearm, carrying in public place, Firearms Act 1968, s.19',
      enumType: 'FirearmcarryinginpublicplaceFirearmsAct1968s19'
    },
    {
      code: 'FTB101',
      index: 145,
      text: 'Football related offences, Sporting Events (Control of Alcohol etc.) Act 1985, ss.2(1) and 2(2)',
      enumType: 'FootballrelatedoffencesSportingEventsControlofAlcoholetcAct1985ss21and22'
    },
    {
      code: 'FTB102',
      index: 146,
      text: 'Football Offences Act 1991, ss.2, 3 and 4, and Criminal Justice and Public Order Act 1994, s.166',
      enumType: 'FootballOffencesAct1991ss23and4andCriminalJusticeandPublicOrderAct1994s166'
    },
    {
      code: 'HRA103',
      index: 147,
      text: 'Harassment – putting people in fear of violence, Protection from Harassment Act 1997, s.4',
      enumType: 'HarassmentputtingpeopleinfearofviolenceProtectionfromHarassmentAct1997s4'
    },
    {
      code: 'HRA104',
      index: 148,
      text: 'Harassment (without violence), Protection from Harassment Act 1997, s.2',
      enumType: 'HarassmentwithoutviolenceProtectionfromHarassmentAct1997s2'
    },
    {
      code: 'IDP101',
      index: 149,
      text: "Identity documents – possess false/another's/improperly obtained, Identity Cards Act 2006, s.25(5)",
      enumType: 'IdentitydocumentspossessfalseanothersimproperlyobtainedIdentityCardsAct2006s255'
    },
    {
      code: 'RPC101',
      index: 150,
      text: 'Obstruct/resist a police constable in execution of duty, Police Act 1996, s.89(2)',
      enumType: 'ObstructresistapoliceconstableinexecutionofdutyPoliceAct1996s892'
    },
    {
      code: 'POW101',
      index: 151,
      text: 'Offensive weapon, possession of, Prevention of Crime Act 1953, s.1',
      enumType: 'OffensiveweaponpossessionofPreventionofCrimeAct1953s1'
    },
    {
      code: 'EPR102',
      index: 152,
      text: 'Prostitution, exploitation of, Sexual Offences Act 2003, ss.52 and 53',
      enumType: 'ProstitutionexploitationofSexualOffencesAct2003ss52and53'
    },
    {
      code: 'BRP101',
      index: 153,
      text: 'Prostitution, keeping a brothel used for, Sexual Offences Act 2003, s.55',
      enumType: 'ProstitutionkeepingabrothelusedforSexualOffencesAct2003s55'
    },
    {
      code: 'HRA105',
      index: 154,
      text: 'Public Order Act 1986, s.4A (disorderly behaviour with intent to cause harassment, alarm or distress)',
      enumType: 'PublicOrderAct1986s4Adisorderlybehaviourwithintenttocauseharassmentalarmordistress'
    },
    {
      code: 'HRA106',
      index: 155,
      text: 'Public Order Act 1986, s.5 (disorderly behaviour (harassment, alarm or distress))',
      enumType: 'PublicOrderAct1986s5disorderlybehaviourharassmentalarmordistress'
    },
    {
      code: 'RCD101',
      index: 156,
      text: 'Racially or religiously aggravated criminal damage, Crime and Disorder Act 1998, s.30',
      enumType: 'RaciallyorreligiouslyaggravatedcriminaldamageCrimeandDisorderAct1998s30'
    },
    {
      code: 'RDB101',
      index: 157,
      text: 'Racially or religiously aggravated disorderly behaviour, Crime and Disorder Act 1998, s.31',
      enumType: 'RaciallyorreligiouslyaggravateddisorderlybehaviourCrimeandDisorderAct1998s31'
    },
    {
      code: 'RDH101',
      index: 158,
      text:
        'Racially or religiously aggravated disorderly behaviour with intent to cause harassment, alarm or distress, Crime and Disorder Act 1998, s.31',
      enumType:
        'RaciallyorreligiouslyaggravateddisorderlybehaviourwithintenttocauseharassmentalarmordistressCrimeandDisorderAct1998s31'
    },
    {
      code: 'RDH102',
      index: 159,
      text: 'Racially or religiously aggravated harassment (non violent), Crime and Disorder Act 1998, s.32',
      enumType: 'RaciallyorreligiouslyaggravatedharassmentnonviolentCrimeandDisorderAct1998s32'
    },
    {
      code: 'RTB101',
      index: 160,
      text: 'Racially or religiously aggravated threatening behaviour, Crime and Disorder Act 1998, s.31',
      enumType: 'RaciallyorreligiouslyaggravatedthreateningbehaviourCrimeandDisorderAct1998s31'
    },
    {
      code: 'RFE101',
      index: 161,
      text: 'Railway fare evasion, Regulation of Railways Act 1889, ss.5(1) and (3)',
      enumType: 'RailwayfareevasionRegulationofRailwaysAct1889ss51and3'
    },
    {
      code: 'TRU101',
      index: 162,
      text: 'School non-attendance, Education Act 1996, ss.444(1) and 444(1A)',
      enumType: 'SchoolnonattendanceEducationAct1996ss4441and4441A'
    },
    {
      code: 'SXF103',
      index: 163,
      text:
        'Sex offenders register – fail to comply with notification requirements, Sexual Offences Act 2003, ss.91(1)(a) and 91(1)(b)',
      enumType: 'SexoffendersregisterfailtocomplywithnotificationrequirementsSexualOffencesAct2003ss911aand911b'
    },
    {
      code: 'SXF104',
      index: 164,
      text:
        'Sex offenders register – failure to comply with notification requirements, Sexual Offences Act 2003, ss.91(1)(a) and 91(1)(b)',
      enumType: 'SexoffendersregisterfailuretocomplywithnotificationrequirementsSexualOffencesAct2003ss911aand911b'
    },
    {
      code: 'SPL101',
      index: 165,
      text: 'Sexual activity in a public lavatory, Sexual Offences Act 2003, s.71',
      enumType: 'SexualactivityinapubliclavatorySexualOffencesAct2003s71'
    },
    {
      code: 'SXA101',
      index: 166,
      text: 'Sexual assault, Sexual Offences Act 2003, ss.3 and 7',
      enumType: 'SexualassaultSexualOffencesAct2003ss3and7'
    },
    {
      code: 'TXT101',
      index: 167,
      text: 'Taxi touting/soliciting for hire, Criminal Justice and Public Order Act 1994, s.167',
      enumType: 'TaxitoutingsolicitingforhireCriminalJusticeandPublicOrderAct1994s167'
    },
    {
      code: 'THK101',
      index: 168,
      text: 'Threats to kill, Offences Against the Person Act 1861, s.16',
      enumType: 'ThreatstokillOffencesAgainstthePersonAct1861s16'
    },
    {
      code: 'UTM101',
      index: 169,
      text: 'Trade mark, unauthorised use of etc., Trade Marks Act 1994, s.92',
      enumType: 'TrademarkunauthoriseduseofetcTradeMarksAct1994s92'
    },
    {
      code: 'TVE102',
      index: 170,
      text: 'TV licence payment evasion, Communications Act 2003, s.363',
      enumType: 'TVlicencepaymentevasionCommunicationsAct2003s363'
    },
    {
      code: 'UTM102',
      index: 171,
      text: 'Unauthorised use of trade mark, Trade Marks Act 1994, s.92',
      enumType: 'UnauthoriseduseoftrademarkTradeMarksAct1994s92'
    },
    {
      code: 'VTE101',
      index: 172,
      text: 'VAT evasion, Value Added Tax Act 1994, s.72',
      enumType: 'VATevasionValueAddedTaxAct1994s72'
    },
    {
      code: 'WIN101',
      index: 173,
      text: 'Witness intimidation, Criminal Justice and Public Order Act 1994, s.51',
      enumType: 'WitnessintimidationCriminalJusticeandPublicOrderAct1994s51'
    }
  ],
  MaritalStatus: [
    {
      code: '1',
      index: 1,
      text: 'Single',
      enumType: 'Single'
    },
    {
      code: '2',
      index: 2,
      text: 'Married',
      enumType: 'Married'
    },
    {
      code: '3',
      index: 3,
      text: 'Living Together',
      enumType: 'LivingTogether'
    },
    {
      code: '4',
      index: 4,
      text: 'Widowed',
      enumType: 'Widowed'
    },
    {
      code: '5',
      index: 5,
      text: 'Divorced',
      enumType: 'Divorced'
    },
    {
      code: '6',
      index: 6,
      text: 'Civil Partnership',
      enumType: 'CivilPartnership'
    }
  ],
  OccupationType: [
    {
      code: '001',
      index: 1,
      text: 'Abattoir Worker',
      enumType: 'AbattoirWorker'
    },
    {
      code: '391',
      index: 2,
      text: 'Accommodation Officer',
      enumType: 'AccommodationOfficer'
    },
    {
      code: 'D77',
      index: 3,
      text: 'Account Executive',
      enumType: 'AccountExecutive'
    },
    {
      code: 'D78',
      index: 4,
      text: 'Account Manager',
      enumType: 'AccountManager'
    },
    {
      code: 'A01',
      index: 5,
      text: 'Accountant',
      enumType: 'Accountant'
    },
    {
      code: 'A02',
      index: 6,
      text: 'Accountant - Chartered or Certified',
      enumType: 'AccountantCharteredorCertified'
    },
    {
      code: '002',
      index: 7,
      text: 'Accounts Assistant',
      enumType: 'AccountsAssistant'
    },
    {
      code: '003',
      index: 8,
      text: 'Accounts Clerk',
      enumType: 'AccountsClerk'
    },
    {
      code: 'M07',
      index: 9,
      text: 'Accounts Manager',
      enumType: 'AccountsManager'
    },
    {
      code: 'A04',
      index: 10,
      text: 'Accounts Staff',
      enumType: 'AccountsStaff'
    },
    {
      code: 'B76',
      index: 11,
      text: 'Acoustic Engineer',
      enumType: 'AcousticEngineer'
    },
    {
      code: '004',
      index: 12,
      text: 'Actor',
      enumType: 'Actor'
    },
    {
      code: 'A05',
      index: 13,
      text: 'Actor/Actress',
      enumType: 'ActorActress'
    },
    {
      code: '005',
      index: 14,
      text: 'Actress',
      enumType: 'Actress'
    },
    {
      code: 'A06',
      index: 15,
      text: 'Actuary',
      enumType: 'Actuary'
    },
    {
      code: '006',
      index: 16,
      text: 'Acupuncturist',
      enumType: 'Acupuncturist'
    },
    {
      code: '007',
      index: 17,
      text: 'Administration Assistant',
      enumType: 'AdministrationAssistant'
    },
    {
      code: '008',
      index: 18,
      text: 'Administration Clerk',
      enumType: 'AdministrationClerk'
    },
    {
      code: 'M08',
      index: 19,
      text: 'Administration Manager',
      enumType: 'AdministrationManager'
    },
    {
      code: 'A07',
      index: 20,
      text: 'Administration Staff',
      enumType: 'AdministrationStaff'
    },
    {
      code: '009',
      index: 21,
      text: 'Administrator',
      enumType: 'Administrator'
    },
    {
      code: 'A25',
      index: 22,
      text: 'Advertising Agent',
      enumType: 'AdvertisingAgent'
    },
    {
      code: '010',
      index: 23,
      text: 'Advertising Assistant',
      enumType: 'AdvertisingAssistant'
    },
    {
      code: '011',
      index: 24,
      text: 'Advertising Clerk',
      enumType: 'AdvertisingClerk'
    },
    {
      code: '680',
      index: 25,
      text: 'Advertising Contractor',
      enumType: 'AdvertisingContractor'
    },
    {
      code: 'E27',
      index: 26,
      text: 'Advertising Executive',
      enumType: 'AdvertisingExecutive'
    },
    {
      code: '012',
      index: 27,
      text: 'Advertising Manager',
      enumType: 'AdvertisingManager'
    },
    {
      code: 'A08',
      index: 28,
      text: 'Advertising Staff',
      enumType: 'AdvertisingStaff'
    },
    {
      code: '013',
      index: 29,
      text: 'Aerial Erector',
      enumType: 'AerialErector'
    },
    {
      code: 'A33',
      index: 30,
      text: 'Aerobic / Keep Fit Instructor',
      enumType: 'AerobicKeepFitInstructor'
    },
    {
      code: '014',
      index: 31,
      text: 'Aerobic Instructor',
      enumType: 'AerobicInstructor'
    },
    {
      code: 'E10',
      index: 32,
      text: 'Aeronautical Engineer',
      enumType: 'AeronauticalEngineer'
    },
    {
      code: 'D79',
      index: 33,
      text: 'Agister',
      enumType: 'Agister'
    },
    {
      code: 'B36',
      index: 34,
      text: 'Agricultural Consultant',
      enumType: 'AgriculturalConsultant'
    },
    {
      code: 'B37',
      index: 35,
      text: 'Agricultural Contractor',
      enumType: 'AgriculturalContractor'
    },
    {
      code: '015',
      index: 36,
      text: 'Agricultural Engineer',
      enumType: 'AgriculturalEngineer'
    },
    {
      code: 'B38',
      index: 37,
      text: 'Agricultural Merchant',
      enumType: 'AgriculturalMerchant'
    },
    {
      code: 'B70',
      index: 38,
      text: 'Agricultural Worker',
      enumType: 'AgriculturalWorker'
    },
    {
      code: 'D80',
      index: 39,
      text: 'Agronomist',
      enumType: 'Agronomist'
    },
    {
      code: 'A30',
      index: 40,
      text: 'Air Force - NCO/Commissioned Officer',
      enumType: 'AirForceNCOCommissionedOfficer'
    },
    {
      code: 'A29',
      index: 41,
      text: 'Air Force - Other Ranks',
      enumType: 'AirForceOtherRanks'
    },
    {
      code: 'A09',
      index: 42,
      text: 'Air Traffic Controller',
      enumType: 'AirTrafficController'
    },
    {
      code: 'A11',
      index: 43,
      text: 'Aircraft - Flight Deck Crew',
      enumType: 'AircraftFlightDeckCrew'
    },
    {
      code: '392',
      index: 44,
      text: 'Aircraft Buyer',
      enumType: 'AircraftBuyer'
    },
    {
      code: 'A10',
      index: 45,
      text: 'Aircraft Cabin Crew',
      enumType: 'AircraftCabinCrew'
    },
    {
      code: '016',
      index: 46,
      text: 'Aircraft Designer',
      enumType: 'AircraftDesigner'
    },
    {
      code: '559',
      index: 47,
      text: 'Aircraft Engineer',
      enumType: 'AircraftEngineer'
    },
    {
      code: 'B39',
      index: 48,
      text: 'Aircraft Maintenance Engineer',
      enumType: 'AircraftMaintenanceEngineer'
    },
    {
      code: 'B40',
      index: 49,
      text: 'Aircraft Surface Finisher',
      enumType: 'AircraftSurfaceFinisher'
    },
    {
      code: '017',
      index: 50,
      text: 'Airline Check-in Staff',
      enumType: 'AirlineCheckinStaff'
    },
    {
      code: 'A31',
      index: 51,
      text: 'Airline Employee - Airport',
      enumType: 'AirlineEmployeeAirport'
    },
    {
      code: 'A32',
      index: 52,
      text: 'Airline Employee - Non-Airport',
      enumType: 'AirlineEmployeeNonAirport'
    },
    {
      code: '018',
      index: 53,
      text: 'Airman',
      enumType: 'Airman'
    },
    {
      code: '588',
      index: 54,
      text: 'Airport Controller',
      enumType: 'AirportController'
    },
    {
      code: 'M09',
      index: 55,
      text: 'Airport Manager',
      enumType: 'AirportManager'
    },
    {
      code: '019',
      index: 56,
      text: 'Almoner',
      enumType: 'Almoner'
    },
    {
      code: 'B41',
      index: 57,
      text: 'Ambulance Controller',
      enumType: 'AmbulanceController'
    },
    {
      code: 'A12',
      index: 58,
      text: 'Ambulance Crew',
      enumType: 'AmbulanceCrew'
    },
    {
      code: 'D41',
      index: 59,
      text: 'Ambulance Driver',
      enumType: 'AmbulanceDriver'
    },
    {
      code: 'A34',
      index: 60,
      text: 'Amusement Arcade Worker',
      enumType: 'AmusementArcadeWorker'
    },
    {
      code: '020',
      index: 61,
      text: 'Anaesthetist',
      enumType: 'Anaesthetist'
    },
    {
      code: 'B42',
      index: 62,
      text: 'Analytical Chemist',
      enumType: 'AnalyticalChemist'
    },
    {
      code: '021',
      index: 63,
      text: 'Animal Breeder',
      enumType: 'AnimalBreeder'
    },
    {
      code: 'B86',
      index: 64,
      text: 'Anthropologist',
      enumType: 'Anthropologist'
    },
    {
      code: 'A13',
      index: 65,
      text: 'Antique Dealer',
      enumType: 'AntiqueDealer'
    },
    {
      code: '393',
      index: 66,
      text: 'Applications Engineer',
      enumType: 'ApplicationsEngineer'
    },
    {
      code: '394',
      index: 67,
      text: 'Applications Programmer',
      enumType: 'ApplicationsProgrammer'
    },
    {
      code: 'D81',
      index: 68,
      text: 'Aquarist',
      enumType: 'Aquarist'
    },
    {
      code: '022',
      index: 69,
      text: 'Arbitrator',
      enumType: 'Arbitrator'
    },
    {
      code: 'B84',
      index: 70,
      text: 'Arborist',
      enumType: 'Arborist'
    },
    {
      code: 'A14',
      index: 71,
      text: 'Archaeologist',
      enumType: 'Archaeologist'
    },
    {
      code: 'A15',
      index: 72,
      text: 'Architect',
      enumType: 'Architect'
    },
    {
      code: '023',
      index: 73,
      text: "Architect's Technician",
      enumType: 'ArchitectsTechnician'
    },
    {
      code: 'B43',
      index: 74,
      text: 'Architectural Surveyor',
      enumType: 'ArchitecturalSurveyor'
    },
    {
      code: 'A16',
      index: 75,
      text: 'Archivist',
      enumType: 'Archivist'
    },
    {
      code: 'M10',
      index: 76,
      text: 'Area Manager',
      enumType: 'AreaManager'
    },
    {
      code: 'B44',
      index: 77,
      text: 'Armourer',
      enumType: 'Armourer'
    },
    {
      code: 'A28',
      index: 78,
      text: 'Army - NCO/Commissioned Officer',
      enumType: 'ArmyNCOCommissionedOfficer'
    },
    {
      code: 'A27',
      index: 79,
      text: 'Army - Other Ranks',
      enumType: 'ArmyOtherRanks'
    },
    {
      code: '691',
      index: 80,
      text: 'Aromatherapist',
      enumType: 'Aromatherapist'
    },
    {
      code: '024',
      index: 81,
      text: 'Art Critic',
      enumType: 'ArtCritic'
    },
    {
      code: 'A17',
      index: 82,
      text: 'Art Dealer',
      enumType: 'ArtDealer'
    },
    {
      code: 'A74',
      index: 83,
      text: 'Art Historian',
      enumType: 'ArtHistorian'
    },
    {
      code: 'B45',
      index: 84,
      text: 'Art Restorer',
      enumType: 'ArtRestorer'
    },
    {
      code: 'B46',
      index: 85,
      text: 'Artexer',
      enumType: 'Artexer'
    },
    {
      code: '025',
      index: 86,
      text: 'Articled Clerk',
      enumType: 'ArticledClerk'
    },
    {
      code: 'B71',
      index: 87,
      text: 'Artificial Limb Fitter',
      enumType: 'ArtificialLimbFitter'
    },
    {
      code: 'A18',
      index: 88,
      text: 'Artist',
      enumType: 'Artist'
    },
    {
      code: 'C93',
      index: 89,
      text: 'Asbestos Remover',
      enumType: 'AsbestosRemover'
    },
    {
      code: '026',
      index: 90,
      text: 'Asphalter',
      enumType: 'Asphalter'
    },
    {
      code: 'A19',
      index: 91,
      text: 'Asphalter/Roadworker',
      enumType: 'AsphalterRoadworker'
    },
    {
      code: 'A20',
      index: 92,
      text: 'Assembly Worker',
      enumType: 'AssemblyWorker'
    },
    {
      code: 'A21',
      index: 93,
      text: 'Assessor',
      enumType: 'Assessor'
    },
    {
      code: '589',
      index: 94,
      text: 'Assistant Accounts Manager',
      enumType: 'AssistantAccountsManager'
    },
    {
      code: '590',
      index: 95,
      text: 'Assistant Caretaker',
      enumType: 'AssistantCaretaker'
    },
    {
      code: '591',
      index: 96,
      text: 'Assistant Cook',
      enumType: 'AssistantCook'
    },
    {
      code: '395',
      index: 97,
      text: 'Assistant Manager',
      enumType: 'AssistantManager'
    },
    {
      code: '592',
      index: 98,
      text: 'Assistant Nurse',
      enumType: 'AssistantNurse'
    },
    {
      code: '593',
      index: 99,
      text: 'Assistant Teacher',
      enumType: 'AssistantTeacher'
    },
    {
      code: '027',
      index: 100,
      text: 'Astrologer',
      enumType: 'Astrologer'
    },
    {
      code: '028',
      index: 101,
      text: 'Astronomer',
      enumType: 'Astronomer'
    },
    {
      code: 'A26',
      index: 102,
      text: 'Au Pair',
      enumType: 'AuPair'
    },
    {
      code: '692',
      index: 103,
      text: 'Auction Worker',
      enumType: 'AuctionWorker'
    },
    {
      code: 'A22',
      index: 104,
      text: 'Auctioneer',
      enumType: 'Auctioneer'
    },
    {
      code: '396',
      index: 105,
      text: 'Audiologist',
      enumType: 'Audiologist'
    },
    {
      code: '397',
      index: 106,
      text: 'Audit Clerk',
      enumType: 'AuditClerk'
    },
    {
      code: '515',
      index: 107,
      text: 'Audit Manager',
      enumType: 'AuditManager'
    },
    {
      code: 'A23',
      index: 108,
      text: 'Auditor',
      enumType: 'Auditor'
    },
    {
      code: 'A24',
      index: 109,
      text: 'Author',
      enumType: 'Author'
    },
    {
      code: '029',
      index: 110,
      text: 'Auto Electrician',
      enumType: 'AutoElectrician'
    },
    {
      code: '030',
      index: 111,
      text: 'Auxiliary Nurse',
      enumType: 'AuxiliaryNurse'
    },
    {
      code: '031',
      index: 112,
      text: 'Bacon Curer',
      enumType: 'BaconCurer'
    },
    {
      code: 'B01',
      index: 113,
      text: 'Baggage Handler',
      enumType: 'BaggageHandler'
    },
    {
      code: 'B02',
      index: 114,
      text: 'Bailiff',
      enumType: 'Bailiff'
    },
    {
      code: 'B03',
      index: 115,
      text: 'Baker',
      enumType: 'Baker'
    },
    {
      code: '560',
      index: 116,
      text: 'Bakery Assistant',
      enumType: 'BakeryAssistant'
    },
    {
      code: '681',
      index: 117,
      text: 'Bakery Manager',
      enumType: 'BakeryManager'
    },
    {
      code: '594',
      index: 118,
      text: 'Bakery Operator',
      enumType: 'BakeryOperator'
    },
    {
      code: '693',
      index: 119,
      text: 'Balloonist',
      enumType: 'Balloonist'
    },
    {
      code: '032',
      index: 120,
      text: 'Bank Clerk',
      enumType: 'BankClerk'
    },
    {
      code: '033',
      index: 121,
      text: 'Bank Manager',
      enumType: 'BankManager'
    },
    {
      code: 'B47',
      index: 122,
      text: 'Bank Messenger',
      enumType: 'BankMessenger'
    },
    {
      code: '398',
      index: 123,
      text: 'Bank Note Checker',
      enumType: 'BankNoteChecker'
    },
    {
      code: 'B04',
      index: 124,
      text: 'Bank Staff',
      enumType: 'BankStaff'
    },
    {
      code: '595',
      index: 125,
      text: 'Baptist Minister',
      enumType: 'BaptistMinister'
    },
    {
      code: '034',
      index: 126,
      text: 'Bar Manager',
      enumType: 'BarManager'
    },
    {
      code: 'B05',
      index: 127,
      text: 'Bar Staff',
      enumType: 'BarStaff'
    },
    {
      code: '035',
      index: 128,
      text: 'Bar Steward',
      enumType: 'BarSteward'
    },
    {
      code: '036',
      index: 129,
      text: 'Barber',
      enumType: 'Barber'
    },
    {
      code: '037',
      index: 130,
      text: 'Barmaid',
      enumType: 'Barmaid'
    },
    {
      code: '038',
      index: 131,
      text: 'Barman',
      enumType: 'Barman'
    },
    {
      code: 'B06',
      index: 132,
      text: 'Barrister',
      enumType: 'Barrister'
    },
    {
      code: 'B24',
      index: 133,
      text: 'BBC Employee - Clerical',
      enumType: 'BBCEmployeeClerical'
    },
    {
      code: 'B26',
      index: 134,
      text: 'BBC Stage Mover',
      enumType: 'BBCStageMover'
    },
    {
      code: 'B07',
      index: 135,
      text: 'Beautician',
      enumType: 'Beautician'
    },
    {
      code: '596',
      index: 136,
      text: 'Beauty Therapist',
      enumType: 'BeautyTherapist'
    },
    {
      code: '682',
      index: 137,
      text: 'Betting Shop Clerk',
      enumType: 'BettingShopClerk'
    },
    {
      code: '039',
      index: 138,
      text: 'Bill Poster',
      enumType: 'BillPoster'
    },
    {
      code: '876',
      index: 139,
      text: 'Bingo Caller',
      enumType: 'BingoCaller'
    },
    {
      code: '694',
      index: 140,
      text: 'Bingo Hall Staff',
      enumType: 'BingoHallStaff'
    },
    {
      code: '040',
      index: 141,
      text: 'Biochemist',
      enumType: 'Biochemist'
    },
    {
      code: '041',
      index: 142,
      text: 'Biologist',
      enumType: 'Biologist'
    },
    {
      code: 'B08',
      index: 143,
      text: 'Blacksmith',
      enumType: 'Blacksmith'
    },
    {
      code: '597',
      index: 144,
      text: 'Blind Assembler',
      enumType: 'BlindAssembler'
    },
    {
      code: '516',
      index: 145,
      text: 'Blind Fitter',
      enumType: 'BlindFitter'
    },
    {
      code: '042',
      index: 146,
      text: 'Blinds Installer',
      enumType: 'BlindsInstaller'
    },
    {
      code: 'B09',
      index: 147,
      text: 'Boat Builder',
      enumType: 'BoatBuilder'
    },
    {
      code: '598',
      index: 148,
      text: 'Body Fitter',
      enumType: 'BodyFitter'
    },
    {
      code: 'D69',
      index: 149,
      text: 'Bodyguard',
      enumType: 'Bodyguard'
    },
    {
      code: '476',
      index: 150,
      text: 'Bodyshop Manager',
      enumType: 'BodyshopManager'
    },
    {
      code: '043',
      index: 151,
      text: 'Boiler Maker',
      enumType: 'BoilerMaker'
    },
    {
      code: 'B10',
      index: 152,
      text: 'Boiler Man',
      enumType: 'BoilerMan'
    },
    {
      code: '044',
      index: 153,
      text: 'Book Binder',
      enumType: 'BookBinder'
    },
    {
      code: '045',
      index: 154,
      text: 'Book Seller',
      enumType: 'BookSeller'
    },
    {
      code: '399',
      index: 155,
      text: 'Book-Keeper',
      enumType: 'BookKeeper'
    },
    {
      code: '599',
      index: 156,
      text: 'Booking Agent',
      enumType: 'BookingAgent'
    },
    {
      code: 'C22',
      index: 157,
      text: 'Booking Clerk',
      enumType: 'BookingClerk'
    },
    {
      code: '400',
      index: 158,
      text: 'Booking Office Clerk',
      enumType: 'BookingOfficeClerk'
    },
    {
      code: 'B11',
      index: 159,
      text: 'Bookmaker',
      enumType: 'Bookmaker'
    },
    {
      code: '046',
      index: 160,
      text: 'Botanist',
      enumType: 'Botanist'
    },
    {
      code: '695',
      index: 161,
      text: 'Box Maker',
      enumType: 'BoxMaker'
    },
    {
      code: 'B67',
      index: 162,
      text: 'Box Office Clerk',
      enumType: 'BoxOfficeClerk'
    },
    {
      code: 'M11',
      index: 163,
      text: 'Branch Manager',
      enumType: 'BranchManager'
    },
    {
      code: 'B23',
      index: 164,
      text: 'Breeder',
      enumType: 'Breeder'
    },
    {
      code: '047',
      index: 165,
      text: 'Brewer',
      enumType: 'Brewer'
    },
    {
      code: 'B48',
      index: 166,
      text: 'Brewery Manager',
      enumType: 'BreweryManager'
    },
    {
      code: 'B12',
      index: 167,
      text: 'Brewery Worker',
      enumType: 'BreweryWorker'
    },
    {
      code: 'B13',
      index: 168,
      text: 'Bricklayer',
      enumType: 'Bricklayer'
    },
    {
      code: '048',
      index: 169,
      text: 'Broadcaster',
      enumType: 'Broadcaster'
    },
    {
      code: 'B14',
      index: 170,
      text: 'Broadcaster - TV/Radio',
      enumType: 'BroadcasterTVRadio'
    },
    {
      code: 'E11',
      index: 171,
      text: 'Broadcasting Engineer',
      enumType: 'BroadcastingEngineer'
    },
    {
      code: 'B15',
      index: 172,
      text: 'Builder',
      enumType: 'Builder'
    },
    {
      code: '049',
      index: 173,
      text: 'Builders Labourer',
      enumType: 'BuildersLabourer'
    },
    {
      code: '696',
      index: 174,
      text: 'Builders Merchant',
      enumType: 'BuildersMerchant'
    },
    {
      code: '600',
      index: 175,
      text: 'Building Advisor',
      enumType: 'BuildingAdvisor'
    },
    {
      code: '601',
      index: 176,
      text: 'Building Contractor',
      enumType: 'BuildingContractor'
    },
    {
      code: 'D47',
      index: 177,
      text: 'Building Control Officer',
      enumType: 'BuildingControlOfficer'
    },
    {
      code: 'B49',
      index: 178,
      text: 'Building Engineer',
      enumType: 'BuildingEngineer'
    },
    {
      code: 'B50',
      index: 179,
      text: 'Building Estimator',
      enumType: 'BuildingEstimator'
    },
    {
      code: '050',
      index: 180,
      text: 'Building Foreman',
      enumType: 'BuildingForeman'
    },
    {
      code: '401',
      index: 181,
      text: 'Building Inspector',
      enumType: 'BuildingInspector'
    },
    {
      code: '602',
      index: 182,
      text: 'Building Manager',
      enumType: 'BuildingManager'
    },
    {
      code: '697',
      index: 183,
      text: 'Building Site Inspector',
      enumType: 'BuildingSiteInspector'
    },
    {
      code: 'C70',
      index: 184,
      text: 'Building Society Agent',
      enumType: 'BuildingSocietyAgent'
    },
    {
      code: '683',
      index: 185,
      text: 'Building Society Clerk',
      enumType: 'BuildingSocietyClerk'
    },
    {
      code: '557',
      index: 186,
      text: 'Building Society Staff',
      enumType: 'BuildingSocietyStaff'
    },
    {
      code: '402',
      index: 187,
      text: 'Building Surveyor',
      enumType: 'BuildingSurveyor'
    },
    {
      code: 'B16',
      index: 188,
      text: 'Bursar',
      enumType: 'Bursar'
    },
    {
      code: 'B25',
      index: 189,
      text: 'Bus Company Employee',
      enumType: 'BusCompanyEmployee'
    },
    {
      code: 'B17',
      index: 190,
      text: 'Bus Conductor',
      enumType: 'BusConductor'
    },
    {
      code: '051',
      index: 191,
      text: 'Bus Driver',
      enumType: 'BusDriver'
    },
    {
      code: 'B51',
      index: 192,
      text: 'Bus Mechanic',
      enumType: 'BusMechanic'
    },
    {
      code: '603',
      index: 193,
      text: 'Bus Valeter',
      enumType: 'BusValeter'
    },
    {
      code: 'B18',
      index: 194,
      text: 'Business Consultant',
      enumType: 'BusinessConsultant'
    },
    {
      code: 'B19',
      index: 195,
      text: 'Business Proprietor',
      enumType: 'BusinessProprietor'
    },
    {
      code: 'B20',
      index: 196,
      text: 'Business Proprietor - Licensed Premises',
      enumType: 'BusinessProprietorLicensedPremises'
    },
    {
      code: 'B21',
      index: 197,
      text: 'Butcher',
      enumType: 'Butcher'
    },
    {
      code: '684',
      index: 198,
      text: 'Butchery Manager',
      enumType: 'ButcheryManager'
    },
    {
      code: '052',
      index: 199,
      text: 'Butler',
      enumType: 'Butler'
    },
    {
      code: 'B22',
      index: 200,
      text: 'Buyer',
      enumType: 'Buyer'
    },
    {
      code: '053',
      index: 201,
      text: 'Cabinet Maker',
      enumType: 'CabinetMaker'
    },
    {
      code: '517',
      index: 202,
      text: 'Cable Contractor',
      enumType: 'CableContractor'
    },
    {
      code: 'B52',
      index: 203,
      text: 'Cable Jointer',
      enumType: 'CableJointer'
    },
    {
      code: '698',
      index: 204,
      text: 'Cable TV Installer',
      enumType: 'CableTVInstaller'
    },
    {
      code: '604',
      index: 205,
      text: 'Cafe Owner',
      enumType: 'CafeOwner'
    },
    {
      code: '605',
      index: 206,
      text: 'Cafe Staff',
      enumType: 'CafeStaff'
    },
    {
      code: '686',
      index: 207,
      text: 'Cafe Worker',
      enumType: 'CafeWorker'
    },
    {
      code: '403',
      index: 208,
      text: 'Calibration Manager',
      enumType: 'CalibrationManager'
    },
    {
      code: 'CA1',
      index: 209,
      text: 'Call Centre Manager',
      enumType: 'CallCentreManager'
    },
    {
      code: 'CA2',
      index: 210,
      text: 'Call Centre Staff',
      enumType: 'CallCentreStaff'
    },
    {
      code: 'B53',
      index: 211,
      text: 'Camera Repairer',
      enumType: 'CameraRepairer'
    },
    {
      code: '054',
      index: 212,
      text: 'Cameraman',
      enumType: 'Cameraman'
    },
    {
      code: 'C01',
      index: 213,
      text: 'Cameraman - TV/Films',
      enumType: 'CameramanTVFilms'
    },
    {
      code: 'B54',
      index: 214,
      text: 'Canal Boat Broker',
      enumType: 'CanalBoatBroker'
    },
    {
      code: '606',
      index: 215,
      text: 'Car Body Repairer',
      enumType: 'CarBodyRepairer'
    },
    {
      code: '055',
      index: 216,
      text: 'Car Builder',
      enumType: 'CarBuilder'
    },
    {
      code: '607',
      index: 217,
      text: 'Car Dealer',
      enumType: 'CarDealer'
    },
    {
      code: 'D27',
      index: 218,
      text: 'Car Delivery Driver',
      enumType: 'CarDeliveryDriver'
    },
    {
      code: 'C51',
      index: 219,
      text: 'Car Park Attendant',
      enumType: 'CarParkAttendant'
    },
    {
      code: '056',
      index: 220,
      text: 'Car Salesman',
      enumType: 'CarSalesman'
    },
    {
      code: 'V05',
      index: 221,
      text: 'Car Valet',
      enumType: 'CarValet'
    },
    {
      code: '608',
      index: 222,
      text: 'Car Wash Attendant',
      enumType: 'CarWashAttendant'
    },
    {
      code: 'C49',
      index: 223,
      text: 'Care Assistant',
      enumType: 'CareAssistant'
    },
    {
      code: '404',
      index: 224,
      text: 'Care Manager',
      enumType: 'CareManager'
    },
    {
      code: '518',
      index: 225,
      text: 'Careers Advisor',
      enumType: 'CareersAdvisor'
    },
    {
      code: '057',
      index: 226,
      text: 'Careers Officer',
      enumType: 'CareersOfficer'
    },
    {
      code: 'D75',
      index: 227,
      text: 'Carer - Non Professional',
      enumType: 'CarerNonProfessional'
    },
    {
      code: 'D89',
      index: 228,
      text: 'Carer - Professional',
      enumType: 'CarerProfessional'
    },
    {
      code: 'C02',
      index: 229,
      text: 'Caretaker',
      enumType: 'Caretaker'
    },
    {
      code: '699',
      index: 230,
      text: 'Cargo Operator',
      enumType: 'CargoOperator'
    },
    {
      code: 'C03',
      index: 231,
      text: 'Carpenter',
      enumType: 'Carpenter'
    },
    {
      code: '609',
      index: 232,
      text: "Carpenter's Assistant",
      enumType: 'CarpentersAssistant'
    },
    {
      code: '700',
      index: 233,
      text: 'Carpet Cleaner',
      enumType: 'CarpetCleaner'
    },
    {
      code: '058',
      index: 234,
      text: 'Carpet Fitter',
      enumType: 'CarpetFitter'
    },
    {
      code: '610',
      index: 235,
      text: 'Carpet Retailer',
      enumType: 'CarpetRetailer'
    },
    {
      code: 'C04',
      index: 236,
      text: 'Carpetfitter',
      enumType: 'Carpetfitter'
    },
    {
      code: '701',
      index: 237,
      text: 'Carphone Fitter',
      enumType: 'CarphoneFitter'
    },
    {
      code: 'C05',
      index: 238,
      text: 'Cartographer',
      enumType: 'Cartographer'
    },
    {
      code: 'B90',
      index: 239,
      text: 'Cartoonist',
      enumType: 'Cartoonist'
    },
    {
      code: 'B55',
      index: 240,
      text: 'Cash Point Fitter',
      enumType: 'CashPointFitter'
    },
    {
      code: 'C06',
      index: 241,
      text: 'Cashier',
      enumType: 'Cashier'
    },
    {
      code: 'C07',
      index: 242,
      text: 'Casual Worker',
      enumType: 'CasualWorker'
    },
    {
      code: 'C08',
      index: 243,
      text: 'Caterer',
      enumType: 'Caterer'
    },
    {
      code: 'B91',
      index: 244,
      text: 'Catering Consultant',
      enumType: 'CateringConsultant'
    },
    {
      code: '611',
      index: 245,
      text: 'Catering Manager',
      enumType: 'CateringManager'
    },
    {
      code: 'C10',
      index: 246,
      text: 'Catering Staff',
      enumType: 'CateringStaff'
    },
    {
      code: '059',
      index: 247,
      text: 'Caulker',
      enumType: 'Caulker'
    },
    {
      code: '612',
      index: 248,
      text: 'Ceiling Contractor',
      enumType: 'CeilingContractor'
    },
    {
      code: '561',
      index: 249,
      text: 'Ceiling Fixer',
      enumType: 'CeilingFixer'
    },
    {
      code: '613',
      index: 250,
      text: 'Cellarman',
      enumType: 'Cellarman'
    },
    {
      code: '519',
      index: 251,
      text: 'Centre Lathe Operator',
      enumType: 'CentreLatheOperator'
    },
    {
      code: '060',
      index: 252,
      text: 'Certified Accountant',
      enumType: 'CertifiedAccountant'
    },
    {
      code: 'C11',
      index: 253,
      text: 'Chambermaid',
      enumType: 'Chambermaid'
    },
    {
      code: '061',
      index: 254,
      text: 'Chandler',
      enumType: 'Chandler'
    },
    {
      code: 'A91',
      index: 255,
      text: 'Chaplain',
      enumType: 'Chaplain'
    },
    {
      code: '405',
      index: 256,
      text: 'Charge Hand',
      enumType: 'ChargeHand'
    },
    {
      code: '062',
      index: 257,
      text: 'Charity Worker',
      enumType: 'CharityWorker'
    },
    {
      code: '063',
      index: 258,
      text: 'Chartered Accountant',
      enumType: 'CharteredAccountant'
    },
    {
      code: '614',
      index: 259,
      text: 'Chartered Engineer',
      enumType: 'CharteredEngineer'
    },
    {
      code: '064',
      index: 260,
      text: 'Chartered Surveyor',
      enumType: 'CharteredSurveyor'
    },
    {
      code: 'D90',
      index: 261,
      text: 'Chartered Valuer',
      enumType: 'CharteredValuer'
    },
    {
      code: 'C52',
      index: 262,
      text: 'Charterer',
      enumType: 'Charterer'
    },
    {
      code: 'C12',
      index: 263,
      text: 'Chauffeur',
      enumType: 'Chauffeur'
    },
    {
      code: '877',
      index: 264,
      text: 'Check-Out Assistant',
      enumType: 'CheckOutAssistant'
    },
    {
      code: 'C13',
      index: 265,
      text: 'Chef',
      enumType: 'Chef'
    },
    {
      code: 'E12',
      index: 266,
      text: 'Chemical Engineer',
      enumType: 'ChemicalEngineer'
    },
    {
      code: '065',
      index: 267,
      text: 'Chemist',
      enumType: 'Chemist'
    },
    {
      code: 'D50',
      index: 268,
      text: 'Chicken Chaser',
      enumType: 'ChickenChaser'
    },
    {
      code: '066',
      index: 269,
      text: 'Chicken Sexer',
      enumType: 'ChickenSexer'
    },
    {
      code: '615',
      index: 270,
      text: 'Chief Cashier',
      enumType: 'ChiefCashier'
    },
    {
      code: '616',
      index: 271,
      text: 'Chief Chemist',
      enumType: 'ChiefChemist'
    },
    {
      code: 'D62',
      index: 272,
      text: 'Chief Executive',
      enumType: 'ChiefExecutive'
    },
    {
      code: 'C14',
      index: 273,
      text: 'Child Minder (Registered)',
      enumType: 'ChildMinderRegistered'
    },
    {
      code: '067',
      index: 274,
      text: 'Childminder (Registered)',
      enumType: 'ChildminderRegistered'
    },
    {
      code: 'C50',
      index: 275,
      text: 'Childrens Entertainer',
      enumType: 'ChildrensEntertainer'
    },
    {
      code: 'C15',
      index: 276,
      text: 'Chimney Sweep',
      enumType: 'ChimneySweep'
    },
    {
      code: '702',
      index: 277,
      text: 'China Restorer',
      enumType: 'ChinaRestorer'
    },
    {
      code: 'C16',
      index: 278,
      text: 'Chiropodist',
      enumType: 'Chiropodist'
    },
    {
      code: '068',
      index: 279,
      text: 'Chiropractor',
      enumType: 'Chiropractor'
    },
    {
      code: '069',
      index: 280,
      text: 'Choreographer',
      enumType: 'Choreographer'
    },
    {
      code: '070',
      index: 281,
      text: 'Church Officer',
      enumType: 'ChurchOfficer'
    },
    {
      code: '071',
      index: 282,
      text: 'Church Warden',
      enumType: 'ChurchWarden'
    },
    {
      code: '495',
      index: 283,
      text: 'Cinema Assistant',
      enumType: 'CinemaAssistant'
    },
    {
      code: 'M12',
      index: 284,
      text: 'Cinema Manager',
      enumType: 'CinemaManager'
    },
    {
      code: 'B56',
      index: 285,
      text: 'Circus Proprietor',
      enumType: 'CircusProprietor'
    },
    {
      code: 'C17',
      index: 286,
      text: 'Circus Worker',
      enumType: 'CircusWorker'
    },
    {
      code: 'E13',
      index: 287,
      text: 'Civil Engineer',
      enumType: 'CivilEngineer'
    },
    {
      code: 'C18',
      index: 288,
      text: 'Civil Servant',
      enumType: 'CivilServant'
    },
    {
      code: '072',
      index: 289,
      text: 'Claims Adjustor',
      enumType: 'ClaimsAdjustor'
    },
    {
      code: '073',
      index: 290,
      text: 'Claims Assessor',
      enumType: 'ClaimsAssessor'
    },
    {
      code: '617',
      index: 291,
      text: 'Claims Manager',
      enumType: 'ClaimsManager'
    },
    {
      code: 'C19',
      index: 292,
      text: 'Claims/Loss Adjustor',
      enumType: 'ClaimsLossAdjustor'
    },
    {
      code: 'D51',
      index: 293,
      text: 'Clairvoyant',
      enumType: 'Clairvoyant'
    },
    {
      code: 'D48',
      index: 294,
      text: 'Classical Musician',
      enumType: 'ClassicalMusician'
    },
    {
      code: '406',
      index: 295,
      text: 'Classroom Aide',
      enumType: 'ClassroomAide'
    },
    {
      code: '703',
      index: 296,
      text: 'Clay Pigeon Instructor',
      enumType: 'ClayPigeonInstructor'
    },
    {
      code: 'C20',
      index: 297,
      text: 'Cleaner',
      enumType: 'Cleaner'
    },
    {
      code: '562',
      index: 298,
      text: 'Cleaning Contractor',
      enumType: 'CleaningContractor'
    },
    {
      code: '618',
      index: 299,
      text: 'Cleaning Supervisor',
      enumType: 'CleaningSupervisor'
    },
    {
      code: '074',
      index: 300,
      text: 'Clergyman',
      enumType: 'Clergyman'
    },
    {
      code: '075',
      index: 301,
      text: 'Cleric',
      enumType: 'Cleric'
    },
    {
      code: '619',
      index: 302,
      text: 'Clerical Assistant',
      enumType: 'ClericalAssistant'
    },
    {
      code: '496',
      index: 303,
      text: 'Clerical Officer',
      enumType: 'ClericalOfficer'
    },
    {
      code: 'C21',
      index: 304,
      text: 'Clerk',
      enumType: 'Clerk'
    },
    {
      code: 'C25',
      index: 305,
      text: 'Clerk Of Works',
      enumType: 'ClerkOfWorks'
    },
    {
      code: '620',
      index: 306,
      text: 'Clinical Psychologist',
      enumType: 'ClinicalPsychologist'
    },
    {
      code: '076',
      index: 307,
      text: 'Clock Maker',
      enumType: 'ClockMaker'
    },
    {
      code: 'C26',
      index: 308,
      text: 'Coach',
      enumType: 'Coach'
    },
    {
      code: '077',
      index: 309,
      text: 'Coach Builder',
      enumType: 'CoachBuilder'
    },
    {
      code: '078',
      index: 310,
      text: 'Coach Driver',
      enumType: 'CoachDriver'
    },
    {
      code: 'B57',
      index: 311,
      text: 'Coach Sprayer',
      enumType: 'CoachSprayer'
    },
    {
      code: '079',
      index: 312,
      text: 'Coal Merchant',
      enumType: 'CoalMerchant'
    },
    {
      code: 'C27',
      index: 313,
      text: 'Coastguard',
      enumType: 'Coastguard'
    },
    {
      code: '632',
      index: 314,
      text: 'Cobbler',
      enumType: 'Cobbler'
    },
    {
      code: 'B58',
      index: 315,
      text: 'Coffee Merchant',
      enumType: 'CoffeeMerchant'
    },
    {
      code: '704',
      index: 316,
      text: 'Coin Dealer',
      enumType: 'CoinDealer'
    },
    {
      code: '705',
      index: 317,
      text: 'College Dean',
      enumType: 'CollegeDean'
    },
    {
      code: '621',
      index: 318,
      text: 'College Lecturer',
      enumType: 'CollegeLecturer'
    },
    {
      code: 'B85',
      index: 319,
      text: 'College Principal',
      enumType: 'CollegePrincipal'
    },
    {
      code: '080',
      index: 320,
      text: 'Commercial Artist',
      enumType: 'CommercialArtist'
    },
    {
      code: '520',
      index: 321,
      text: 'Commercial Manager',
      enumType: 'CommercialManager'
    },
    {
      code: '081',
      index: 322,
      text: 'Commercial Traveller',
      enumType: 'CommercialTraveller'
    },
    {
      code: 'C54',
      index: 323,
      text: 'Commission Agent',
      enumType: 'CommissionAgent'
    },
    {
      code: 'C29',
      index: 324,
      text: 'Commissionaire',
      enumType: 'Commissionaire'
    },
    {
      code: '082',
      index: 325,
      text: 'Commissioned Officer',
      enumType: 'CommissionedOfficer'
    },
    {
      code: '622',
      index: 326,
      text: 'Commissioning Engineer',
      enumType: 'CommissioningEngineer'
    },
    {
      code: 'C30',
      index: 327,
      text: 'Commodity Broker',
      enumType: 'CommodityBroker'
    },
    {
      code: 'C31',
      index: 328,
      text: 'Commodity Dealer',
      enumType: 'CommodityDealer'
    },
    {
      code: 'A92',
      index: 329,
      text: 'Communications Officer',
      enumType: 'CommunicationsOfficer'
    },
    {
      code: '687',
      index: 330,
      text: 'Communications Supervisor',
      enumType: 'CommunicationsSupervisor'
    },
    {
      code: '623',
      index: 331,
      text: 'Community Craft Instructor',
      enumType: 'CommunityCraftInstructor'
    },
    {
      code: 'B59',
      index: 332,
      text: 'Community Nurse',
      enumType: 'CommunityNurse'
    },
    {
      code: '083',
      index: 333,
      text: 'Community Worker',
      enumType: 'CommunityWorker'
    },
    {
      code: 'D61',
      index: 334,
      text: 'Company Chairman',
      enumType: 'CompanyChairman'
    },
    {
      code: '084',
      index: 335,
      text: 'Company Director',
      enumType: 'CompanyDirector'
    },
    {
      code: 'C71',
      index: 336,
      text: 'Company Search Agent',
      enumType: 'CompanySearchAgent'
    },
    {
      code: 'C32',
      index: 337,
      text: 'Company Secretary',
      enumType: 'CompanySecretary'
    },
    {
      code: '407',
      index: 338,
      text: 'Complementary Therapist',
      enumType: 'ComplementaryTherapist'
    },
    {
      code: '085',
      index: 339,
      text: 'Composer',
      enumType: 'Composer'
    },
    {
      code: 'C33',
      index: 340,
      text: 'Compositor',
      enumType: 'Compositor'
    },
    {
      code: '086',
      index: 341,
      text: 'Computer Analyst',
      enumType: 'ComputerAnalyst'
    },
    {
      code: 'C55',
      index: 342,
      text: 'Computer Consultant',
      enumType: 'ComputerConsultant'
    },
    {
      code: '087',
      index: 343,
      text: 'Computer Engineer',
      enumType: 'ComputerEngineer'
    },
    {
      code: '688',
      index: 344,
      text: 'Computer Manager',
      enumType: 'ComputerManager'
    },
    {
      code: 'C56',
      index: 345,
      text: 'Computer Operator',
      enumType: 'ComputerOperator'
    },
    {
      code: 'C57',
      index: 346,
      text: 'Computer Programmer',
      enumType: 'ComputerProgrammer'
    },
    {
      code: 'C58',
      index: 347,
      text: 'Computer Technician',
      enumType: 'ComputerTechnician'
    },
    {
      code: 'C34',
      index: 348,
      text: 'Computing',
      enumType: 'Computing'
    },
    {
      code: '521',
      index: 349,
      text: 'Confectioner',
      enumType: 'Confectioner'
    },
    {
      code: 'B60',
      index: 350,
      text: 'Conference Manager',
      enumType: 'ConferenceManager'
    },
    {
      code: '706',
      index: 351,
      text: 'Conference Organiser',
      enumType: 'ConferenceOrganiser'
    },
    {
      code: '707',
      index: 352,
      text: 'Conservationist',
      enumType: 'Conservationist'
    },
    {
      code: '624',
      index: 353,
      text: 'Conservator',
      enumType: 'Conservator'
    },
    {
      code: '689',
      index: 354,
      text: 'Construction Engineer',
      enumType: 'ConstructionEngineer'
    },
    {
      code: 'C35',
      index: 355,
      text: 'Construction Worker',
      enumType: 'ConstructionWorker'
    },
    {
      code: '088',
      index: 356,
      text: 'Consultant',
      enumType: 'Consultant'
    },
    {
      code: 'C59',
      index: 357,
      text: 'Consultant Engineer',
      enumType: 'ConsultantEngineer'
    },
    {
      code: 'CA3',
      index: 358,
      text: 'Consumer Scientist',
      enumType: 'ConsumerScientist'
    },
    {
      code: '477',
      index: 359,
      text: 'Contract Cleaner',
      enumType: 'ContractCleaner'
    },
    {
      code: '625',
      index: 360,
      text: 'Contract Furnisher',
      enumType: 'ContractFurnisher'
    },
    {
      code: '497',
      index: 361,
      text: 'Contract Manager',
      enumType: 'ContractManager'
    },
    {
      code: 'C37',
      index: 362,
      text: 'Contractor',
      enumType: 'Contractor'
    },
    {
      code: '626',
      index: 363,
      text: 'Contracts Supervisor',
      enumType: 'ContractsSupervisor'
    },
    {
      code: '089',
      index: 364,
      text: 'Conveyancer',
      enumType: 'Conveyancer'
    },
    {
      code: '090',
      index: 365,
      text: 'Cook',
      enumType: 'Cook'
    },
    {
      code: '091',
      index: 366,
      text: 'Cooper',
      enumType: 'Cooper'
    },
    {
      code: '375',
      index: 367,
      text: 'Coppersmith',
      enumType: 'Coppersmith'
    },
    {
      code: '384',
      index: 368,
      text: 'Copywriter',
      enumType: 'Copywriter'
    },
    {
      code: 'C38',
      index: 369,
      text: 'Coroner',
      enumType: 'Coroner'
    },
    {
      code: 'C72',
      index: 370,
      text: 'Corrosion Consultant',
      enumType: 'CorrosionConsultant'
    },
    {
      code: 'B61',
      index: 371,
      text: 'Costume Designer',
      enumType: 'CostumeDesigner'
    },
    {
      code: 'C60',
      index: 372,
      text: 'Costume Jeweller',
      enumType: 'CostumeJeweller'
    },
    {
      code: 'A93',
      index: 373,
      text: 'Costumier',
      enumType: 'Costumier'
    },
    {
      code: '092',
      index: 374,
      text: 'Council Worker',
      enumType: 'CouncilWorker'
    },
    {
      code: '093',
      index: 375,
      text: 'Counsellor',
      enumType: 'Counsellor'
    },
    {
      code: '708',
      index: 376,
      text: 'Countryside Ranger',
      enumType: 'CountrysideRanger'
    },
    {
      code: '498',
      index: 377,
      text: 'County Councillor',
      enumType: 'CountyCouncillor'
    },
    {
      code: 'C39',
      index: 378,
      text: 'Courier',
      enumType: 'Courier'
    },
    {
      code: 'C40',
      index: 379,
      text: 'Courier - Driver',
      enumType: 'CourierDriver'
    },
    {
      code: 'C41',
      index: 380,
      text: 'Courier - Motorcycle',
      enumType: 'CourierMotorcycle'
    },
    {
      code: 'C42',
      index: 381,
      text: 'Courier - Parcel Delivery',
      enumType: 'CourierParcelDelivery'
    },
    {
      code: '408',
      index: 382,
      text: 'Court Officer',
      enumType: 'CourtOfficer'
    },
    {
      code: '627',
      index: 383,
      text: 'Craft Dealer',
      enumType: 'CraftDealer'
    },
    {
      code: 'C43',
      index: 384,
      text: 'Craftsman',
      enumType: 'Craftsman'
    },
    {
      code: '628',
      index: 385,
      text: 'Craftswoman',
      enumType: 'Craftswoman'
    },
    {
      code: '094',
      index: 386,
      text: 'Crane Driver',
      enumType: 'CraneDriver'
    },
    {
      code: 'D70',
      index: 387,
      text: 'Crane Erector',
      enumType: 'CraneErector'
    },
    {
      code: 'C44',
      index: 388,
      text: 'Crane Operator',
      enumType: 'CraneOperator'
    },
    {
      code: '522',
      index: 389,
      text: 'Creche Worker',
      enumType: 'CrecheWorker'
    },
    {
      code: 'B92',
      index: 390,
      text: 'Credit Broker',
      enumType: 'CreditBroker'
    },
    {
      code: 'C45',
      index: 391,
      text: 'Credit Control',
      enumType: 'CreditControl'
    },
    {
      code: 'C53',
      index: 392,
      text: 'Credit Controller',
      enumType: 'CreditController'
    },
    {
      code: 'B62',
      index: 393,
      text: 'Credit Draper',
      enumType: 'CreditDraper'
    },
    {
      code: '095',
      index: 394,
      text: 'Credit Manager',
      enumType: 'CreditManager'
    },
    {
      code: 'A94',
      index: 395,
      text: 'Crematorium Attendant',
      enumType: 'CrematoriumAttendant'
    },
    {
      code: '629',
      index: 396,
      text: 'Crime Examiner',
      enumType: 'CrimeExaminer'
    },
    {
      code: '096',
      index: 397,
      text: 'Crofter',
      enumType: 'Crofter'
    },
    {
      code: 'C46',
      index: 398,
      text: 'Croupier',
      enumType: 'Croupier'
    },
    {
      code: 'B82',
      index: 399,
      text: 'Crown Prosecutor',
      enumType: 'CrownProsecutor'
    },
    {
      code: 'C47',
      index: 400,
      text: 'Curator',
      enumType: 'Curator'
    },
    {
      code: '709',
      index: 401,
      text: 'Currency Trader',
      enumType: 'CurrencyTrader'
    },
    {
      code: '690',
      index: 402,
      text: 'Curtain Maker',
      enumType: 'CurtainMaker'
    },
    {
      code: '409',
      index: 403,
      text: 'Customer Advisor',
      enumType: 'CustomerAdvisor'
    },
    {
      code: '390',
      index: 404,
      text: 'Customer Liaison Officer',
      enumType: 'CustomerLiaisonOfficer'
    },
    {
      code: '097',
      index: 405,
      text: 'Customs & Excise Officer',
      enumType: 'CustomsExciseOfficer'
    },
    {
      code: 'C48',
      index: 406,
      text: 'Customs And Excise',
      enumType: 'CustomsAndExcise'
    },
    {
      code: '098',
      index: 407,
      text: 'Cutler',
      enumType: 'Cutler'
    },
    {
      code: '099',
      index: 408,
      text: 'Cutter',
      enumType: 'Cutter'
    },
    {
      code: '630',
      index: 409,
      text: 'Cycle Repairer',
      enumType: 'CycleRepairer'
    },
    {
      code: '633',
      index: 410,
      text: 'Dairy Engineer',
      enumType: 'DairyEngineer'
    },
    {
      code: 'D01',
      index: 411,
      text: 'Dairy Worker',
      enumType: 'DairyWorker'
    },
    {
      code: '410',
      index: 412,
      text: 'Dance Teacher',
      enumType: 'DanceTeacher'
    },
    {
      code: '100',
      index: 413,
      text: 'Dancer',
      enumType: 'Dancer'
    },
    {
      code: '385',
      index: 414,
      text: 'Dark Room Technician',
      enumType: 'DarkRoomTechnician'
    },
    {
      code: '634',
      index: 415,
      text: 'Data Administrator',
      enumType: 'DataAdministrator'
    },
    {
      code: '635',
      index: 416,
      text: 'Data Co-Ordinator',
      enumType: 'DataCoOrdinator'
    },
    {
      code: '563',
      index: 417,
      text: 'Data Processor',
      enumType: 'DataProcessor'
    },
    {
      code: '523',
      index: 418,
      text: 'Day Care Officer',
      enumType: 'DayCareOfficer'
    },
    {
      code: 'D02',
      index: 419,
      text: 'Dealer',
      enumType: 'Dealer'
    },
    {
      code: 'D03',
      index: 420,
      text: 'Dealer - General',
      enumType: 'DealerGeneral'
    },
    {
      code: 'D04',
      index: 421,
      text: 'Dealer - Scrap/Waste',
      enumType: 'DealerScrapWaste'
    },
    {
      code: 'D44',
      index: 422,
      text: 'Debt Collector',
      enumType: 'DebtCollector'
    },
    {
      code: '636',
      index: 423,
      text: 'Debt Counsellor',
      enumType: 'DebtCounsellor'
    },
    {
      code: '101',
      index: 424,
      text: 'Decorator',
      enumType: 'Decorator'
    },
    {
      code: '102',
      index: 425,
      text: 'Delivery Courier',
      enumType: 'DeliveryCourier'
    },
    {
      code: '637',
      index: 426,
      text: 'Delivery Driver',
      enumType: 'DeliveryDriver'
    },
    {
      code: 'D05',
      index: 427,
      text: 'Delivery Roundsman',
      enumType: 'DeliveryRoundsman'
    },
    {
      code: 'D06',
      index: 428,
      text: 'Demolition Worker',
      enumType: 'DemolitionWorker'
    },
    {
      code: '103',
      index: 429,
      text: 'Demonstrator',
      enumType: 'Demonstrator'
    },
    {
      code: 'A75',
      index: 430,
      text: 'Dendrochronologist',
      enumType: 'Dendrochronologist'
    },
    {
      code: '104',
      index: 431,
      text: 'Dental Assistant',
      enumType: 'DentalAssistant'
    },
    {
      code: '105',
      index: 432,
      text: 'Dental Hygienist',
      enumType: 'DentalHygienist'
    },
    {
      code: '106',
      index: 433,
      text: 'Dental Nurse',
      enumType: 'DentalNurse'
    },
    {
      code: '499',
      index: 434,
      text: 'Dental Surgeon',
      enumType: 'DentalSurgeon'
    },
    {
      code: '107',
      index: 435,
      text: 'Dental Technician',
      enumType: 'DentalTechnician'
    },
    {
      code: '108',
      index: 436,
      text: 'Dentist',
      enumType: 'Dentist'
    },
    {
      code: 'D07',
      index: 437,
      text: 'Dentist/Dentition',
      enumType: 'DentistDentition'
    },
    {
      code: '638',
      index: 438,
      text: 'Deputy Head Teacher',
      enumType: 'DeputyHeadTeacher'
    },
    {
      code: '639',
      index: 439,
      text: 'Deputy Manager',
      enumType: 'DeputyManager'
    },
    {
      code: '640',
      index: 440,
      text: 'Deputy Principal',
      enumType: 'DeputyPrincipal'
    },
    {
      code: '109',
      index: 441,
      text: 'Dermatologist',
      enumType: 'Dermatologist'
    },
    {
      code: '641',
      index: 442,
      text: 'Design Director',
      enumType: 'DesignDirector'
    },
    {
      code: '411',
      index: 443,
      text: 'Design Engineer',
      enumType: 'DesignEngineer'
    },
    {
      code: '642',
      index: 444,
      text: 'Design Manager',
      enumType: 'DesignManager'
    },
    {
      code: 'D08',
      index: 445,
      text: 'Designer',
      enumType: 'Designer'
    },
    {
      code: '643',
      index: 446,
      text: 'Despatch Driver',
      enumType: 'DespatchDriver'
    },
    {
      code: '644',
      index: 447,
      text: 'Despatch Rider',
      enumType: 'DespatchRider'
    },
    {
      code: '110',
      index: 448,
      text: 'Despatch Worker',
      enumType: 'DespatchWorker'
    },
    {
      code: '412',
      index: 449,
      text: 'Development Manager',
      enumType: 'DevelopmentManager'
    },
    {
      code: '710',
      index: 450,
      text: 'Diamond Dealer',
      enumType: 'DiamondDealer'
    },
    {
      code: '524',
      index: 451,
      text: 'Diecaster',
      enumType: 'Diecaster'
    },
    {
      code: '111',
      index: 452,
      text: 'Dietician',
      enumType: 'Dietician'
    },
    {
      code: '112',
      index: 453,
      text: 'Dinner Lady',
      enumType: 'DinnerLady'
    },
    {
      code: '113',
      index: 454,
      text: 'Diplomat',
      enumType: 'Diplomat'
    },
    {
      code: 'D13',
      index: 455,
      text: 'Diplomatic Staff - British',
      enumType: 'DiplomaticStaffBritish'
    },
    {
      code: 'D14',
      index: 456,
      text: 'Diplomatic Staff - Foreign',
      enumType: 'DiplomaticStaffForeign'
    },
    {
      code: 'D40',
      index: 457,
      text: 'Diplomatic Staff - Republic Of Ireland',
      enumType: 'DiplomaticStaffRepublicOfIreland'
    },
    {
      code: 'D15',
      index: 458,
      text: 'Director - Performing Arts',
      enumType: 'DirectorPerformingArts'
    },
    {
      code: 'D16',
      index: 459,
      text: 'Director/Company Director',
      enumType: 'DirectorCompanyDirector'
    },
    {
      code: 'D17',
      index: 460,
      text: 'Disc Jockey',
      enumType: 'DiscJockey'
    },
    {
      code: 'D45',
      index: 461,
      text: 'Disco Staff',
      enumType: 'DiscoStaff'
    },
    {
      code: '711',
      index: 462,
      text: 'Distillery Worker',
      enumType: 'DistilleryWorker'
    },
    {
      code: '645',
      index: 463,
      text: 'Distribution Manager',
      enumType: 'DistributionManager'
    },
    {
      code: 'N03',
      index: 464,
      text: 'District Nurse',
      enumType: 'DistrictNurse'
    },
    {
      code: 'D19',
      index: 465,
      text: 'District Valuer',
      enumType: 'DistrictValuer'
    },
    {
      code: 'D20',
      index: 466,
      text: 'Diver',
      enumType: 'Diver'
    },
    {
      code: 'D21',
      index: 467,
      text: 'Docker',
      enumType: 'Docker'
    },
    {
      code: '114',
      index: 468,
      text: 'Dockyard Worker',
      enumType: 'DockyardWorker'
    },
    {
      code: '115',
      index: 469,
      text: 'Doctor',
      enumType: 'Doctor'
    },
    {
      code: 'D23',
      index: 470,
      text: 'Doctor - Medical',
      enumType: 'DoctorMedical'
    },
    {
      code: '646',
      index: 471,
      text: 'Document Controller',
      enumType: 'DocumentController'
    },
    {
      code: '564',
      index: 472,
      text: 'Dog Beautician',
      enumType: 'DogBeautician'
    },
    {
      code: '116',
      index: 473,
      text: 'Dog Breeder',
      enumType: 'DogBreeder'
    },
    {
      code: '413',
      index: 474,
      text: 'Dog Groomer',
      enumType: 'DogGroomer'
    },
    {
      code: '647',
      index: 475,
      text: 'Dog Trainer',
      enumType: 'DogTrainer'
    },
    {
      code: 'D88',
      index: 476,
      text: 'Dog Walker',
      enumType: 'DogWalker'
    },
    {
      code: 'A84',
      index: 477,
      text: 'Dog Warden',
      enumType: 'DogWarden'
    },
    {
      code: 'B93',
      index: 478,
      text: 'Doll Maker',
      enumType: 'DollMaker'
    },
    {
      code: '648',
      index: 479,
      text: 'Domestic Staff',
      enumType: 'DomesticStaff'
    },
    {
      code: '649',
      index: 480,
      text: 'Door Fitter',
      enumType: 'DoorFitter'
    },
    {
      code: 'C28',
      index: 481,
      text: 'Door To Door Collector',
      enumType: 'DoorToDoorCollector'
    },
    {
      code: 'D24',
      index: 482,
      text: 'Doorman',
      enumType: 'Doorman'
    },
    {
      code: 'D39',
      index: 483,
      text: 'Double Glazing Fitter',
      enumType: 'DoubleGlazingFitter'
    },
    {
      code: '117',
      index: 484,
      text: 'Double Glazing Salesman',
      enumType: 'DoubleGlazingSalesman'
    },
    {
      code: 'D25',
      index: 485,
      text: 'Draughtsman',
      enumType: 'Draughtsman'
    },
    {
      code: '650',
      index: 486,
      text: 'Draughtswoman',
      enumType: 'Draughtswoman'
    },
    {
      code: '118',
      index: 487,
      text: 'Drayman',
      enumType: 'Drayman'
    },
    {
      code: 'D26',
      index: 488,
      text: 'Dressmaker',
      enumType: 'Dressmaker'
    },
    {
      code: '712',
      index: 489,
      text: 'Drilling Technician',
      enumType: 'DrillingTechnician'
    },
    {
      code: 'D43',
      index: 490,
      text: 'Driver',
      enumType: 'Driver'
    },
    {
      code: 'D42',
      index: 491,
      text: 'Driver - Hot Food Delivery',
      enumType: 'DriverHotFoodDelivery'
    },
    {
      code: 'D31',
      index: 492,
      text: 'Driver - Light Goods',
      enumType: 'DriverLightGoods'
    },
    {
      code: 'D32',
      index: 493,
      text: 'Driver - PSV',
      enumType: 'DriverPSV'
    },
    {
      code: 'D37',
      index: 494,
      text: 'Driving Examiner',
      enumType: 'DrivingExaminer'
    },
    {
      code: 'D38',
      index: 495,
      text: 'Driving Instructor',
      enumType: 'DrivingInstructor'
    },
    {
      code: 'D91',
      index: 496,
      text: 'Driving Instructor (HGV)',
      enumType: 'DrivingInstructorHGV'
    },
    {
      code: '414',
      index: 497,
      text: 'Drug Addiction Counsellor',
      enumType: 'DrugAddictionCounsellor'
    },
    {
      code: '651',
      index: 498,
      text: 'Dry Cleaner',
      enumType: 'DryCleaner'
    },
    {
      code: '525',
      index: 499,
      text: 'Dryliner',
      enumType: 'Dryliner'
    },
    {
      code: '119',
      index: 500,
      text: 'Dustman',
      enumType: 'Dustman'
    },
    {
      code: '652',
      index: 501,
      text: 'Dye Polisher',
      enumType: 'DyePolisher'
    },
    {
      code: '120',
      index: 502,
      text: 'Dyer',
      enumType: 'Dyer'
    },
    {
      code: 'E31',
      index: 503,
      text: 'Earth Moving Contractor',
      enumType: 'EarthMovingContractor'
    },
    {
      code: '653',
      index: 504,
      text: 'Ecologist',
      enumType: 'Ecologist'
    },
    {
      code: 'E01',
      index: 505,
      text: 'Economist',
      enumType: 'Economist'
    },
    {
      code: 'E02',
      index: 506,
      text: 'Editor',
      enumType: 'Editor'
    },
    {
      code: 'E03',
      index: 507,
      text: 'Editor - TV/Films',
      enumType: 'EditorTVFilms'
    },
    {
      code: 'C73',
      index: 508,
      text: 'Editorial Consultant',
      enumType: 'EditorialConsultant'
    },
    {
      code: '713',
      index: 509,
      text: 'Editorial Staff',
      enumType: 'EditorialStaff'
    },
    {
      code: '654',
      index: 510,
      text: 'Education Advisor',
      enumType: 'EducationAdvisor'
    },
    {
      code: 'A95',
      index: 511,
      text: 'Education Officer',
      enumType: 'EducationOfficer'
    },
    {
      code: '415',
      index: 512,
      text: 'Electrical Contractor',
      enumType: 'ElectricalContractor'
    },
    {
      code: 'E28',
      index: 513,
      text: 'Electrical Engineer',
      enumType: 'ElectricalEngineer'
    },
    {
      code: '655',
      index: 514,
      text: 'Electrical Fitter',
      enumType: 'ElectricalFitter'
    },
    {
      code: 'E04',
      index: 515,
      text: 'Electrician',
      enumType: 'Electrician'
    },
    {
      code: 'E05',
      index: 516,
      text: 'Electrician - Vehicle',
      enumType: 'ElectricianVehicle'
    },
    {
      code: 'C74',
      index: 517,
      text: 'Electrologist',
      enumType: 'Electrologist'
    },
    {
      code: '121',
      index: 518,
      text: 'Electronic Engineer',
      enumType: 'ElectronicEngineer'
    },
    {
      code: '656',
      index: 519,
      text: 'Electronics Supervisor',
      enumType: 'ElectronicsSupervisor'
    },
    {
      code: '657',
      index: 520,
      text: 'Electronics Technician',
      enumType: 'ElectronicsTechnician'
    },
    {
      code: '122',
      index: 521,
      text: 'Embalmer',
      enumType: 'Embalmer'
    },
    {
      code: '123',
      index: 522,
      text: 'Embassy Staff',
      enumType: 'EmbassyStaff'
    },
    {
      code: 'E06',
      index: 523,
      text: 'Embassy Staff - British',
      enumType: 'EmbassyStaffBritish'
    },
    {
      code: 'E07',
      index: 524,
      text: 'Embassy Staff - Foreign',
      enumType: 'EmbassyStaffForeign'
    },
    {
      code: 'E30',
      index: 525,
      text: 'Embassy Staff - Republic Of Ireland',
      enumType: 'EmbassyStaffRepublicOfIreland'
    },
    {
      code: 'B94',
      index: 526,
      text: 'Embroiderer',
      enumType: 'Embroiderer'
    },
    {
      code: 'E08',
      index: 527,
      text: 'Emergency Service Staff',
      enumType: 'EmergencyServiceStaff'
    },
    {
      code: '500',
      index: 528,
      text: 'Energy Analyst',
      enumType: 'EnergyAnalyst'
    },
    {
      code: 'E09',
      index: 529,
      text: 'Engineer',
      enumType: 'Engineer'
    },
    {
      code: 'E22',
      index: 530,
      text: 'Engraver',
      enumType: 'Engraver'
    },
    {
      code: 'E23',
      index: 531,
      text: 'Enquiry Agent',
      enumType: 'EnquiryAgent'
    },
    {
      code: 'E24',
      index: 532,
      text: 'Entertainer',
      enumType: 'Entertainer'
    },
    {
      code: 'A76',
      index: 533,
      text: 'Environmental Chemist',
      enumType: 'EnvironmentalChemist'
    },
    {
      code: 'B95',
      index: 534,
      text: 'Environmental Consultant',
      enumType: 'EnvironmentalConsultant'
    },
    {
      code: '124',
      index: 535,
      text: 'Environmental Health Officer',
      enumType: 'EnvironmentalHealthOfficer'
    },
    {
      code: 'C75',
      index: 536,
      text: 'Equity Agent',
      enumType: 'EquityAgent'
    },
    {
      code: 'E32',
      index: 537,
      text: 'Ergonomist',
      enumType: 'Ergonomist'
    },
    {
      code: 'E25',
      index: 538,
      text: 'Estate Agent',
      enumType: 'EstateAgent'
    },
    {
      code: '658',
      index: 539,
      text: 'Estate Manager',
      enumType: 'EstateManager'
    },
    {
      code: 'E29',
      index: 540,
      text: 'Estimator',
      enumType: 'Estimator'
    },
    {
      code: '416',
      index: 541,
      text: 'Evangelist',
      enumType: 'Evangelist'
    },
    {
      code: '659',
      index: 542,
      text: 'Events Organiser',
      enumType: 'EventsOrganiser'
    },
    {
      code: '417',
      index: 543,
      text: 'Excursion Manager',
      enumType: 'ExcursionManager'
    },
    {
      code: 'E26',
      index: 544,
      text: 'Executive',
      enumType: 'Executive'
    },
    {
      code: '125',
      index: 545,
      text: 'Exhaust Fitter',
      enumType: 'ExhaustFitter'
    },
    {
      code: 'B96',
      index: 546,
      text: 'Exhibition Designer',
      enumType: 'ExhibitionDesigner'
    },
    {
      code: '126',
      index: 547,
      text: 'Exhibition Organiser',
      enumType: 'ExhibitionOrganiser'
    },
    {
      code: '127',
      index: 548,
      text: 'Exotic Dancer',
      enumType: 'ExoticDancer'
    },
    {
      code: 'A85',
      index: 549,
      text: 'Expedition Leader',
      enumType: 'ExpeditionLeader'
    },
    {
      code: 'C76',
      index: 550,
      text: 'Export Consultant',
      enumType: 'ExportConsultant'
    },
    {
      code: '714',
      index: 551,
      text: 'Exporter',
      enumType: 'Exporter'
    },
    {
      code: '660',
      index: 552,
      text: 'Extrusion Operator',
      enumType: 'ExtrusionOperator'
    },
    {
      code: '128',
      index: 553,
      text: 'Fabricator',
      enumType: 'Fabricator'
    },
    {
      code: '661',
      index: 554,
      text: 'Factory Canteen Manager',
      enumType: 'FactoryCanteenManager'
    },
    {
      code: 'I07',
      index: 555,
      text: 'Factory Inspector',
      enumType: 'FactoryInspector'
    },
    {
      code: '662',
      index: 556,
      text: 'Factory Manager',
      enumType: 'FactoryManager'
    },
    {
      code: 'F01',
      index: 557,
      text: 'Factory Worker',
      enumType: 'FactoryWorker'
    },
    {
      code: 'F02',
      index: 558,
      text: 'Fairground Worker',
      enumType: 'FairgroundWorker'
    },
    {
      code: 'B78',
      index: 559,
      text: 'Falconer',
      enumType: 'Falconer'
    },
    {
      code: '565',
      index: 560,
      text: 'Farm Manager',
      enumType: 'FarmManager'
    },
    {
      code: 'F03',
      index: 561,
      text: 'Farm Worker',
      enumType: 'FarmWorker'
    },
    {
      code: 'F04',
      index: 562,
      text: 'Farmer',
      enumType: 'Farmer'
    },
    {
      code: '386',
      index: 563,
      text: 'Farrier',
      enumType: 'Farrier'
    },
    {
      code: 'D09',
      index: 564,
      text: 'Fashion Designer',
      enumType: 'FashionDesigner'
    },
    {
      code: '663',
      index: 565,
      text: 'Fashion Photographer',
      enumType: 'FashionPhotographer'
    },
    {
      code: 'F23',
      index: 566,
      text: 'Fast Food Caterer',
      enumType: 'FastFoodCaterer'
    },
    {
      code: '129',
      index: 567,
      text: 'Fast Food Delivery Driver',
      enumType: 'FastFoodDeliveryDriver'
    },
    {
      code: '715',
      index: 568,
      text: 'Fast Food Proprietor',
      enumType: 'FastFoodProprietor'
    },
    {
      code: '130',
      index: 569,
      text: 'Fence Erector',
      enumType: 'FenceErector'
    },
    {
      code: '131',
      index: 570,
      text: 'Fibre Glass Moulder',
      enumType: 'FibreGlassMoulder'
    },
    {
      code: 'A96',
      index: 571,
      text: 'Field Officer',
      enumType: 'FieldOfficer'
    },
    {
      code: '664',
      index: 572,
      text: 'Figure Painter',
      enumType: 'FigurePainter'
    },
    {
      code: '132',
      index: 573,
      text: 'Film Director',
      enumType: 'FilmDirector'
    },
    {
      code: '133',
      index: 574,
      text: 'Film Producer',
      enumType: 'FilmProducer'
    },
    {
      code: '134',
      index: 575,
      text: 'Film Technician',
      enumType: 'FilmTechnician'
    },
    {
      code: '418',
      index: 576,
      text: 'Finance Director',
      enumType: 'FinanceDirector'
    },
    {
      code: '665',
      index: 577,
      text: 'Finance Manager',
      enumType: 'FinanceManager'
    },
    {
      code: '666',
      index: 578,
      text: 'Finance Officer',
      enumType: 'FinanceOfficer'
    },
    {
      code: 'F05',
      index: 579,
      text: 'Financial Advisor',
      enumType: 'FinancialAdvisor'
    },
    {
      code: '419',
      index: 580,
      text: 'Financial Analyst',
      enumType: 'FinancialAnalyst'
    },
    {
      code: '478',
      index: 581,
      text: 'Financial Consultant',
      enumType: 'FinancialConsultant'
    },
    {
      code: 'F06',
      index: 582,
      text: 'Financier',
      enumType: 'Financier'
    },
    {
      code: 'B73',
      index: 583,
      text: 'Fire Officer',
      enumType: 'FireOfficer'
    },
    {
      code: '716',
      index: 584,
      text: 'Fire Prevention Officer',
      enumType: 'FirePreventionOfficer'
    },
    {
      code: 'D60',
      index: 585,
      text: 'Fire Protection Consultant',
      enumType: 'FireProtectionConsultant'
    },
    {
      code: '135',
      index: 586,
      text: 'Firefighter',
      enumType: 'Firefighter'
    },
    {
      code: 'F07',
      index: 587,
      text: 'Fireman/Woman',
      enumType: 'FiremanWoman'
    },
    {
      code: '667',
      index: 588,
      text: 'Fireplace Fitter',
      enumType: 'FireplaceFitter'
    },
    {
      code: '668',
      index: 589,
      text: 'Firewood Merchant',
      enumType: 'FirewoodMerchant'
    },
    {
      code: '669',
      index: 590,
      text: 'First Aid Worker',
      enumType: 'FirstAidWorker'
    },
    {
      code: '670',
      index: 591,
      text: 'Fish Buyer',
      enumType: 'FishBuyer'
    },
    {
      code: '501',
      index: 592,
      text: 'Fish Filleter',
      enumType: 'FishFilleter'
    },
    {
      code: '136',
      index: 593,
      text: 'Fish Fryer',
      enumType: 'FishFryer'
    },
    {
      code: '671',
      index: 594,
      text: 'Fish Merchant',
      enumType: 'FishMerchant'
    },
    {
      code: '672',
      index: 595,
      text: 'Fish Worker',
      enumType: 'FishWorker'
    },
    {
      code: '673',
      index: 596,
      text: 'Fisheries Inspector',
      enumType: 'FisheriesInspector'
    },
    {
      code: 'F08',
      index: 597,
      text: 'Fisherman',
      enumType: 'Fisherman'
    },
    {
      code: '566',
      index: 598,
      text: 'Fishery Manager',
      enumType: 'FisheryManager'
    },
    {
      code: 'F09',
      index: 599,
      text: 'Fishmonger',
      enumType: 'Fishmonger'
    },
    {
      code: '137',
      index: 600,
      text: 'Fitness Instructor',
      enumType: 'FitnessInstructor'
    },
    {
      code: 'F10',
      index: 601,
      text: 'Fitter',
      enumType: 'Fitter'
    },
    {
      code: 'F11',
      index: 602,
      text: 'Fitter - Tyre/Exhaust',
      enumType: 'FitterTyreExhaust'
    },
    {
      code: '526',
      index: 603,
      text: 'Flagger',
      enumType: 'Flagger'
    },
    {
      code: '138',
      index: 604,
      text: 'Flight Deck Crew',
      enumType: 'FlightDeckCrew'
    },
    {
      code: '420',
      index: 605,
      text: 'Floor Layer',
      enumType: 'FloorLayer'
    },
    {
      code: '421',
      index: 606,
      text: 'Floor Manager',
      enumType: 'FloorManager'
    },
    {
      code: 'F12',
      index: 607,
      text: 'Florist',
      enumType: 'Florist'
    },
    {
      code: '674',
      index: 608,
      text: 'Flour Miller',
      enumType: 'FlourMiller'
    },
    {
      code: 'B97',
      index: 609,
      text: 'Flower Arranger',
      enumType: 'FlowerArranger'
    },
    {
      code: '387',
      index: 610,
      text: 'Flying Instructor',
      enumType: 'FlyingInstructor'
    },
    {
      code: '527',
      index: 611,
      text: 'Foam Convertor',
      enumType: 'FoamConvertor'
    },
    {
      code: '422',
      index: 612,
      text: 'Food Processor',
      enumType: 'FoodProcessor'
    },
    {
      code: '675',
      index: 613,
      text: 'Footballer',
      enumType: 'Footballer'
    },
    {
      code: 'F13',
      index: 614,
      text: 'Forces - Foreign',
      enumType: 'ForcesForeign'
    },
    {
      code: 'F14',
      index: 615,
      text: 'Forces - H.M.',
      enumType: 'ForcesHM'
    },
    {
      code: 'F15',
      index: 616,
      text: 'Forces - U.S.',
      enumType: 'ForcesUS'
    },
    {
      code: '502',
      index: 617,
      text: 'Foreman',
      enumType: 'Foreman'
    },
    {
      code: 'C77',
      index: 618,
      text: 'Forensic Scientist',
      enumType: 'ForensicScientist'
    },
    {
      code: 'B75',
      index: 619,
      text: 'Forest Ranger',
      enumType: 'ForestRanger'
    },
    {
      code: 'F16',
      index: 620,
      text: 'Forester',
      enumType: 'Forester'
    },
    {
      code: 'D28',
      index: 621,
      text: 'Fork Lift Truck Driver',
      enumType: 'ForkLiftTruckDriver'
    },
    {
      code: 'F17',
      index: 622,
      text: 'Forwarding Agent',
      enumType: 'ForwardingAgent'
    },
    {
      code: 'A97',
      index: 623,
      text: 'Foster Parent',
      enumType: 'FosterParent'
    },
    {
      code: '139',
      index: 624,
      text: 'Foundry Worker',
      enumType: 'FoundryWorker'
    },
    {
      code: 'A86',
      index: 625,
      text: 'Fraud Investigator',
      enumType: 'FraudInvestigator'
    },
    {
      code: '140',
      index: 626,
      text: 'French Polisher',
      enumType: 'FrenchPolisher'
    },
    {
      code: '676',
      index: 627,
      text: 'Fruiterer',
      enumType: 'Fruiterer'
    },
    {
      code: '141',
      index: 628,
      text: 'Fuel Merchant',
      enumType: 'FuelMerchant'
    },
    {
      code: 'F18',
      index: 629,
      text: 'Fund Raiser',
      enumType: 'FundRaiser'
    },
    {
      code: '142',
      index: 630,
      text: 'Funeral Director',
      enumType: 'FuneralDirector'
    },
    {
      code: '143',
      index: 631,
      text: 'Funeral Furnisher',
      enumType: 'FuneralFurnisher'
    },
    {
      code: 'F19',
      index: 632,
      text: 'Furnace Man',
      enumType: 'FurnaceMan'
    },
    {
      code: '677',
      index: 633,
      text: 'Furniture Dealer',
      enumType: 'FurnitureDealer'
    },
    {
      code: 'F20',
      index: 634,
      text: 'Furniture Remover',
      enumType: 'FurnitureRemover'
    },
    {
      code: 'F21',
      index: 635,
      text: 'Furniture Restorer',
      enumType: 'FurnitureRestorer'
    },
    {
      code: 'F24',
      index: 636,
      text: 'Furrier',
      enumType: 'Furrier'
    },
    {
      code: '717',
      index: 637,
      text: 'Gallery Owner',
      enumType: 'GalleryOwner'
    },
    {
      code: '718',
      index: 638,
      text: 'Gambler',
      enumType: 'Gambler'
    },
    {
      code: 'G10',
      index: 639,
      text: 'Gamekeeper',
      enumType: 'Gamekeeper'
    },
    {
      code: 'C96',
      index: 640,
      text: 'Gaming Board Inspector',
      enumType: 'GamingBoardInspector'
    },
    {
      code: '719',
      index: 641,
      text: 'Gaming Club Manager',
      enumType: 'GamingClubManager'
    },
    {
      code: '720',
      index: 642,
      text: 'Gaming Club Proprietor',
      enumType: 'GamingClubProprietor'
    },
    {
      code: 'G13',
      index: 643,
      text: 'Gaming Club Staff - Licensed Premises',
      enumType: 'GamingClubStaffLicensedPremises'
    },
    {
      code: 'G14',
      index: 644,
      text: 'Gaming Club Staff - Unlicensed Premises',
      enumType: 'GamingClubStaffUnlicensedPremises'
    },
    {
      code: '721',
      index: 645,
      text: 'Garage Attendant',
      enumType: 'GarageAttendant'
    },
    {
      code: '423',
      index: 646,
      text: 'Garage Foreman',
      enumType: 'GarageForeman'
    },
    {
      code: '722',
      index: 647,
      text: 'Garage Manager',
      enumType: 'GarageManager'
    },
    {
      code: 'B66',
      index: 648,
      text: 'Garda',
      enumType: 'Garda'
    },
    {
      code: '723',
      index: 649,
      text: 'Garden Designer',
      enumType: 'GardenDesigner'
    },
    {
      code: 'G01',
      index: 650,
      text: 'Gardener',
      enumType: 'Gardener'
    },
    {
      code: '144',
      index: 651,
      text: 'Gas Fitter',
      enumType: 'GasFitter'
    },
    {
      code: '724',
      index: 652,
      text: 'Gas Mechanic',
      enumType: 'GasMechanic'
    },
    {
      code: '145',
      index: 653,
      text: 'Gas Technician',
      enumType: 'GasTechnician'
    },
    {
      code: 'D52',
      index: 654,
      text: 'Gate Keeper',
      enumType: 'GateKeeper'
    },
    {
      code: '784',
      index: 655,
      text: 'Genealogist',
      enumType: 'Genealogist'
    },
    {
      code: '146',
      index: 656,
      text: 'General Manager',
      enumType: 'GeneralManager'
    },
    {
      code: 'D22',
      index: 657,
      text: 'General Practitioner',
      enumType: 'GeneralPractitioner'
    },
    {
      code: 'G02',
      index: 658,
      text: 'General Worker',
      enumType: 'GeneralWorker'
    },
    {
      code: 'G09',
      index: 659,
      text: 'Geologist',
      enumType: 'Geologist'
    },
    {
      code: '424',
      index: 660,
      text: 'Geophysicist',
      enumType: 'Geophysicist'
    },
    {
      code: 'B79',
      index: 661,
      text: 'Gilder',
      enumType: 'Gilder'
    },
    {
      code: 'G03',
      index: 662,
      text: 'Glass Worker',
      enumType: 'GlassWorker'
    },
    {
      code: '147',
      index: 663,
      text: 'Glazier',
      enumType: 'Glazier'
    },
    {
      code: 'G04',
      index: 664,
      text: 'Goldsmith',
      enumType: 'Goldsmith'
    },
    {
      code: 'D68',
      index: 665,
      text: 'Golf Caddy',
      enumType: 'GolfCaddy'
    },
    {
      code: 'A77',
      index: 666,
      text: 'Golf Club Professional',
      enumType: 'GolfClubProfessional'
    },
    {
      code: '725',
      index: 667,
      text: 'Golfer',
      enumType: 'Golfer'
    },
    {
      code: '528',
      index: 668,
      text: 'Goods Handler',
      enumType: 'GoodsHandler'
    },
    {
      code: 'D57',
      index: 669,
      text: 'Governor',
      enumType: 'Governor'
    },
    {
      code: '726',
      index: 670,
      text: 'Granite Technician',
      enumType: 'GraniteTechnician'
    },
    {
      code: 'D10',
      index: 671,
      text: 'Graphic Designer',
      enumType: 'GraphicDesigner'
    },
    {
      code: 'B74',
      index: 672,
      text: 'Graphologist',
      enumType: 'Graphologist'
    },
    {
      code: 'G05',
      index: 673,
      text: 'Grave Digger',
      enumType: 'GraveDigger'
    },
    {
      code: '727',
      index: 674,
      text: 'Gravel Merchant',
      enumType: 'GravelMerchant'
    },
    {
      code: '148',
      index: 675,
      text: 'Green Keeper',
      enumType: 'GreenKeeper'
    },
    {
      code: 'G06',
      index: 676,
      text: 'Greengrocer',
      enumType: 'Greengrocer'
    },
    {
      code: '728',
      index: 677,
      text: 'Grocer',
      enumType: 'Grocer'
    },
    {
      code: 'G07',
      index: 678,
      text: 'Groom',
      enumType: 'Groom'
    },
    {
      code: '503',
      index: 679,
      text: 'Ground Worker',
      enumType: 'GroundWorker'
    },
    {
      code: 'G08',
      index: 680,
      text: 'Groundsman',
      enumType: 'Groundsman'
    },
    {
      code: '149',
      index: 681,
      text: 'Guard',
      enumType: 'Guard'
    },
    {
      code: 'G11',
      index: 682,
      text: 'Guest House Owner - Licensed',
      enumType: 'GuestHouseOwnerLicensed'
    },
    {
      code: 'G12',
      index: 683,
      text: 'Guest House Owner - Unlicensed',
      enumType: 'GuestHouseOwnerUnlicensed'
    },
    {
      code: '150',
      index: 684,
      text: 'Guest House Proprietor',
      enumType: 'GuestHouseProprietor'
    },
    {
      code: '729',
      index: 685,
      text: 'Guide',
      enumType: 'Guide'
    },
    {
      code: '151',
      index: 686,
      text: 'Gun Smith',
      enumType: 'GunSmith'
    },
    {
      code: '152',
      index: 687,
      text: 'Gynaecologist',
      enumType: 'Gynaecologist'
    },
    {
      code: 'H01',
      index: 688,
      text: 'Hairdresser',
      enumType: 'Hairdresser'
    },
    {
      code: 'H02',
      index: 689,
      text: 'Hairdresser - Mobile',
      enumType: 'HairdresserMobile'
    },
    {
      code: '529',
      index: 690,
      text: 'Handyman',
      enumType: 'Handyman'
    },
    {
      code: 'D82',
      index: 691,
      text: 'Harbour Master',
      enumType: 'HarbourMaster'
    },
    {
      code: '730',
      index: 692,
      text: 'Hardware Dealer',
      enumType: 'HardwareDealer'
    },
    {
      code: '731',
      index: 693,
      text: 'Haulage Contractor',
      enumType: 'HaulageContractor'
    },
    {
      code: 'H03',
      index: 694,
      text: 'Hawker',
      enumType: 'Hawker'
    },
    {
      code: '530',
      index: 695,
      text: 'Head Accurist',
      enumType: 'HeadAccurist'
    },
    {
      code: '732',
      index: 696,
      text: 'Head Greenkeeper',
      enumType: 'HeadGreenkeeper'
    },
    {
      code: 'A78',
      index: 697,
      text: 'Head Lad',
      enumType: 'HeadLad'
    },
    {
      code: 'H11',
      index: 698,
      text: 'Headteacher',
      enumType: 'Headteacher'
    },
    {
      code: '567',
      index: 699,
      text: 'Health Advisor',
      enumType: 'HealthAdvisor'
    },
    {
      code: '733',
      index: 700,
      text: 'Health And Safety Consultant',
      enumType: 'HealthAndSafetyConsultant'
    },
    {
      code: '376',
      index: 701,
      text: 'Health And Safety Officer',
      enumType: 'HealthAndSafetyOfficer'
    },
    {
      code: '734',
      index: 702,
      text: 'Health Care Assistant',
      enumType: 'HealthCareAssistant'
    },
    {
      code: '735',
      index: 703,
      text: 'Health Planner',
      enumType: 'HealthPlanner'
    },
    {
      code: 'H04',
      index: 704,
      text: 'Health Service Employee',
      enumType: 'HealthServiceEmployee'
    },
    {
      code: '479',
      index: 705,
      text: 'Health Therapist',
      enumType: 'HealthTherapist'
    },
    {
      code: 'H05',
      index: 706,
      text: 'Health Visitor',
      enumType: 'HealthVisitor'
    },
    {
      code: '425',
      index: 707,
      text: 'Hearing Therapist',
      enumType: 'HearingTherapist'
    },
    {
      code: '153',
      index: 708,
      text: 'Heating & Ventilation Engineer',
      enumType: 'HeatingVentilationEngineer'
    },
    {
      code: '154',
      index: 709,
      text: 'Heating Engineer',
      enumType: 'HeatingEngineer'
    },
    {
      code: '155',
      index: 710,
      text: 'Herbalist',
      enumType: 'Herbalist'
    },
    {
      code: 'D29',
      index: 711,
      text: 'HGV Driver',
      enumType: 'HGVDriver'
    },
    {
      code: '736',
      index: 712,
      text: 'HGV Mechanic',
      enumType: 'HGVMechanic'
    },
    {
      code: 'D53',
      index: 713,
      text: 'Highway Inspector',
      enumType: 'HighwayInspector'
    },
    {
      code: 'D30',
      index: 714,
      text: 'Hire Car Driver',
      enumType: 'HireCarDriver'
    },
    {
      code: 'H17',
      index: 715,
      text: 'Hirer',
      enumType: 'Hirer'
    },
    {
      code: '737',
      index: 716,
      text: 'Historian',
      enumType: 'Historian'
    },
    {
      code: '156',
      index: 717,
      text: 'Hod Carrier',
      enumType: 'HodCarrier'
    },
    {
      code: 'H13',
      index: 718,
      text: 'Holiday Camp Staff - Licensed Premises',
      enumType: 'HolidayCampStaffLicensedPremises'
    },
    {
      code: 'H14',
      index: 719,
      text: 'Holiday Camp Staff - Unlicensed Premises',
      enumType: 'HolidayCampStaffUnlicensedPremises'
    },
    {
      code: 'D76',
      index: 720,
      text: 'Home Economist',
      enumType: 'HomeEconomist'
    },
    {
      code: 'H06',
      index: 721,
      text: 'Home Help',
      enumType: 'HomeHelp'
    },
    {
      code: '738',
      index: 722,
      text: 'Homecare Manager',
      enumType: 'HomecareManager'
    },
    {
      code: '157',
      index: 723,
      text: 'Homeopath',
      enumType: 'Homeopath'
    },
    {
      code: 'C90',
      index: 724,
      text: 'Homeworker',
      enumType: 'Homeworker'
    },
    {
      code: '739',
      index: 725,
      text: 'Hop Merchant',
      enumType: 'HopMerchant'
    },
    {
      code: '158',
      index: 726,
      text: 'Horse Breeder',
      enumType: 'HorseBreeder'
    },
    {
      code: '159',
      index: 727,
      text: 'Horse Dealer',
      enumType: 'HorseDealer'
    },
    {
      code: 'H12',
      index: 728,
      text: 'Horse Riding Instructor',
      enumType: 'HorseRidingInstructor'
    },
    {
      code: '161',
      index: 729,
      text: 'Horse Trader',
      enumType: 'HorseTrader'
    },
    {
      code: '740',
      index: 730,
      text: 'Horse Trainer',
      enumType: 'HorseTrainer'
    },
    {
      code: 'C78',
      index: 731,
      text: 'Horticultural Consultant',
      enumType: 'HorticulturalConsultant'
    },
    {
      code: 'H07',
      index: 732,
      text: 'Horticulturalist',
      enumType: 'Horticulturalist'
    },
    {
      code: '741',
      index: 733,
      text: 'Hosiery Mechanic',
      enumType: 'HosieryMechanic'
    },
    {
      code: '742',
      index: 734,
      text: 'Hosiery Worker',
      enumType: 'HosieryWorker'
    },
    {
      code: '743',
      index: 735,
      text: 'Hospital Consultant',
      enumType: 'HospitalConsultant'
    },
    {
      code: '678',
      index: 736,
      text: 'Hospital Doctor',
      enumType: 'HospitalDoctor'
    },
    {
      code: '744',
      index: 737,
      text: 'Hospital Manager',
      enumType: 'HospitalManager'
    },
    {
      code: '745',
      index: 738,
      text: 'Hospital Orderly',
      enumType: 'HospitalOrderly'
    },
    {
      code: '426',
      index: 739,
      text: 'Hospital Technician',
      enumType: 'HospitalTechnician'
    },
    {
      code: 'A87',
      index: 740,
      text: 'Hospital Warden',
      enumType: 'HospitalWarden'
    },
    {
      code: '746',
      index: 741,
      text: 'Hospital Worker',
      enumType: 'HospitalWorker'
    },
    {
      code: 'H08',
      index: 742,
      text: 'Hostess',
      enumType: 'Hostess'
    },
    {
      code: '747',
      index: 743,
      text: 'Hot Foil Printer',
      enumType: 'HotFoilPrinter'
    },
    {
      code: 'B98',
      index: 744,
      text: 'Hotel Consultant',
      enumType: 'HotelConsultant'
    },
    {
      code: '748',
      index: 745,
      text: 'Hotel Worker',
      enumType: 'HotelWorker'
    },
    {
      code: '162',
      index: 746,
      text: 'Hotelier',
      enumType: 'Hotelier'
    },
    {
      code: '427',
      index: 747,
      text: 'House Parent',
      enumType: 'HouseParent'
    },
    {
      code: 'D83',
      index: 748,
      text: 'House Sitter',
      enumType: 'HouseSitter'
    },
    {
      code: '163',
      index: 749,
      text: 'Househusband',
      enumType: 'Househusband'
    },
    {
      code: 'H10',
      index: 750,
      text: 'Housekeeper',
      enumType: 'Housekeeper'
    },
    {
      code: 'H09',
      index: 751,
      text: 'Housewife',
      enumType: 'Housewife'
    },
    {
      code: '749',
      index: 752,
      text: 'Housing Assistant',
      enumType: 'HousingAssistant'
    },
    {
      code: '164',
      index: 753,
      text: 'Housing Officer',
      enumType: 'HousingOfficer'
    },
    {
      code: '750',
      index: 754,
      text: 'Housing Supervisor',
      enumType: 'HousingSupervisor'
    },
    {
      code: 'H15',
      index: 755,
      text: 'Human Resources Manager',
      enumType: 'HumanResourcesManager'
    },
    {
      code: 'H16',
      index: 756,
      text: 'Human Resources Staff',
      enumType: 'HumanResourcesStaff'
    },
    {
      code: 'H18',
      index: 757,
      text: 'Hunt Master',
      enumType: 'HuntMaster'
    },
    {
      code: 'H19',
      index: 758,
      text: 'Huntsman',
      enumType: 'Huntsman'
    },
    {
      code: '751',
      index: 759,
      text: 'Hydro Geologist',
      enumType: 'HydroGeologist'
    },
    {
      code: '568',
      index: 760,
      text: 'Hygienist',
      enumType: 'Hygienist'
    },
    {
      code: '752',
      index: 761,
      text: 'Hypnotherapist',
      enumType: 'Hypnotherapist'
    },
    {
      code: 'A98',
      index: 762,
      text: 'Hypnotist',
      enumType: 'Hypnotist'
    },
    {
      code: 'I01',
      index: 763,
      text: 'Ice Cream Vendor',
      enumType: 'IceCreamVendor'
    },
    {
      code: '378',
      index: 764,
      text: 'Illustrator',
      enumType: 'Illustrator'
    },
    {
      code: '428',
      index: 765,
      text: 'Immigration Officer',
      enumType: 'ImmigrationOfficer'
    },
    {
      code: 'C79',
      index: 766,
      text: 'Import Consultant',
      enumType: 'ImportConsultant'
    },
    {
      code: '753',
      index: 767,
      text: 'Importer',
      enumType: 'Importer'
    },
    {
      code: 'I02',
      index: 768,
      text: 'Independent Means',
      enumType: 'IndependentMeans'
    },
    {
      code: '785',
      index: 769,
      text: 'Induction Moulder',
      enumType: 'InductionMoulder'
    },
    {
      code: 'I03',
      index: 770,
      text: 'Industrial Chemist',
      enumType: 'IndustrialChemist'
    },
    {
      code: 'B99',
      index: 771,
      text: 'Industrial Consultant',
      enumType: 'IndustrialConsultant'
    },
    {
      code: 'D11',
      index: 772,
      text: 'Industrial Designer',
      enumType: 'IndustrialDesigner'
    },
    {
      code: '786',
      index: 773,
      text: 'Injection Moulder',
      enumType: 'InjectionMoulder'
    },
    {
      code: 'I04',
      index: 774,
      text: 'Inland Revenue Officer',
      enumType: 'InlandRevenueOfficer'
    },
    {
      code: 'I05',
      index: 775,
      text: 'Inspector',
      enumType: 'Inspector'
    },
    {
      code: 'I06',
      index: 776,
      text: 'Inspector - Customs and Excise',
      enumType: 'InspectorCustomsandExcise'
    },
    {
      code: 'I09',
      index: 777,
      text: 'Inspector - Insurance',
      enumType: 'InspectorInsurance'
    },
    {
      code: '429',
      index: 778,
      text: 'Instrument Engineer',
      enumType: 'InstrumentEngineer'
    },
    {
      code: 'I10',
      index: 779,
      text: 'Instrument Maker',
      enumType: 'InstrumentMaker'
    },
    {
      code: '531',
      index: 780,
      text: 'Instrument Supervisor',
      enumType: 'InstrumentSupervisor'
    },
    {
      code: '782',
      index: 781,
      text: 'Instrument Technician',
      enumType: 'InstrumentTechnician'
    },
    {
      code: 'I11',
      index: 782,
      text: 'Insurance Agent',
      enumType: 'InsuranceAgent'
    },
    {
      code: '165',
      index: 783,
      text: 'Insurance Assessor',
      enumType: 'InsuranceAssessor'
    },
    {
      code: 'I12',
      index: 784,
      text: 'Insurance Broker',
      enumType: 'InsuranceBroker'
    },
    {
      code: '787',
      index: 785,
      text: 'Insurance Consultant',
      enumType: 'InsuranceConsultant'
    },
    {
      code: '166',
      index: 786,
      text: 'Insurance Inspector',
      enumType: 'InsuranceInspector'
    },
    {
      code: '167',
      index: 787,
      text: 'Insurance Representative',
      enumType: 'InsuranceRepresentative'
    },
    {
      code: 'I17',
      index: 788,
      text: 'Insurance Staff',
      enumType: 'InsuranceStaff'
    },
    {
      code: '168',
      index: 789,
      text: 'Interior Decorator',
      enumType: 'InteriorDecorator'
    },
    {
      code: 'D12',
      index: 790,
      text: 'Interior Designer',
      enumType: 'InteriorDesigner'
    },
    {
      code: 'I13',
      index: 791,
      text: 'Interpreter',
      enumType: 'Interpreter'
    },
    {
      code: '169',
      index: 792,
      text: 'Interviewer',
      enumType: 'Interviewer'
    },
    {
      code: 'D63',
      index: 793,
      text: 'Inventor',
      enumType: 'Inventor'
    },
    {
      code: '975',
      index: 794,
      text: 'Investigator',
      enumType: 'Investigator'
    },
    {
      code: 'D64',
      index: 795,
      text: 'Investment Advisor',
      enumType: 'InvestmentAdvisor'
    },
    {
      code: '788',
      index: 796,
      text: 'Investment Banker',
      enumType: 'InvestmentBanker'
    },
    {
      code: 'M13',
      index: 797,
      text: 'Investment Manager',
      enumType: 'InvestmentManager'
    },
    {
      code: 'I14',
      index: 798,
      text: 'Ironmonger',
      enumType: 'Ironmonger'
    },
    {
      code: '870',
      index: 799,
      text: 'IT Consultant',
      enumType: 'ITConsultant'
    },
    {
      code: '871',
      index: 800,
      text: 'IT Manager',
      enumType: 'ITManager'
    },
    {
      code: '872',
      index: 801,
      text: 'IT Trainer',
      enumType: 'ITTrainer'
    },
    {
      code: 'I15',
      index: 802,
      text: 'Itinerant - Labourer',
      enumType: 'ItinerantLabourer'
    },
    {
      code: 'I16',
      index: 803,
      text: 'Itinerant - Trader',
      enumType: 'ItinerantTrader'
    },
    {
      code: '170',
      index: 804,
      text: 'Janitor',
      enumType: 'Janitor'
    },
    {
      code: '789',
      index: 805,
      text: 'Jazz Composer',
      enumType: 'JazzComposer'
    },
    {
      code: 'J01',
      index: 806,
      text: 'Jeweller',
      enumType: 'Jeweller'
    },
    {
      code: '480',
      index: 807,
      text: 'Jewellery Consultant',
      enumType: 'JewelleryConsultant'
    },
    {
      code: 'J02',
      index: 808,
      text: 'Jockey',
      enumType: 'Jockey'
    },
    {
      code: 'J03',
      index: 809,
      text: 'Joiner',
      enumType: 'Joiner'
    },
    {
      code: '790',
      index: 810,
      text: 'Joinery Consultant',
      enumType: 'JoineryConsultant'
    },
    {
      code: 'J04',
      index: 811,
      text: 'Journalist',
      enumType: 'Journalist'
    },
    {
      code: 'C80',
      index: 812,
      text: 'Journalistic Agent',
      enumType: 'JournalisticAgent'
    },
    {
      code: 'J05',
      index: 813,
      text: 'Judge',
      enumType: 'Judge'
    },
    {
      code: '791',
      index: 814,
      text: 'Junk Shop Proprietor',
      enumType: 'JunkShopProprietor'
    },
    {
      code: '171',
      index: 815,
      text: 'Justice Of The Peace',
      enumType: 'JusticeOfThePeace'
    },
    {
      code: '172',
      index: 816,
      text: 'Keep Fit Instructor',
      enumType: 'KeepFitInstructor'
    },
    {
      code: 'C94',
      index: 817,
      text: 'Kennel Hand',
      enumType: 'KennelHand'
    },
    {
      code: '173',
      index: 818,
      text: 'Kennel Maid',
      enumType: 'KennelMaid'
    },
    {
      code: 'K02',
      index: 819,
      text: 'Kennels / Cattery Employee',
      enumType: 'KennelsCatteryEmployee'
    },
    {
      code: 'K03',
      index: 820,
      text: 'Kennels / Cattery Owner',
      enumType: 'KennelsCatteryOwner'
    },
    {
      code: '174',
      index: 821,
      text: 'Kissagram Person',
      enumType: 'KissagramPerson'
    },
    {
      code: '175',
      index: 822,
      text: 'Kitchen Worker',
      enumType: 'KitchenWorker'
    },
    {
      code: 'K01',
      index: 823,
      text: 'Knitter',
      enumType: 'Knitter'
    },
    {
      code: '795',
      index: 824,
      text: 'Labelling Operator',
      enumType: 'LabellingOperator'
    },
    {
      code: '792',
      index: 825,
      text: 'Laboratory Analyst',
      enumType: 'LaboratoryAnalyst'
    },
    {
      code: '430',
      index: 826,
      text: 'Laboratory Assistant',
      enumType: 'LaboratoryAssistant'
    },
    {
      code: '797',
      index: 827,
      text: 'Laboratory Attendant',
      enumType: 'LaboratoryAttendant'
    },
    {
      code: '793',
      index: 828,
      text: 'Laboratory Manager',
      enumType: 'LaboratoryManager'
    },
    {
      code: '796',
      index: 829,
      text: 'Laboratory Operative',
      enumType: 'LaboratoryOperative'
    },
    {
      code: '794',
      index: 830,
      text: 'Laboratory Supervisor',
      enumType: 'LaboratorySupervisor'
    },
    {
      code: 'L01',
      index: 831,
      text: 'Laboratory Technician',
      enumType: 'LaboratoryTechnician'
    },
    {
      code: 'L02',
      index: 832,
      text: 'Labourer',
      enumType: 'Labourer'
    },
    {
      code: '379',
      index: 833,
      text: 'Laminator',
      enumType: 'Laminator'
    },
    {
      code: 'C61',
      index: 834,
      text: 'Lampshade Maker',
      enumType: 'LampshadeMaker'
    },
    {
      code: 'L12',
      index: 835,
      text: 'Land Agent',
      enumType: 'LandAgent'
    },
    {
      code: 'C81',
      index: 836,
      text: 'Land Surveyor',
      enumType: 'LandSurveyor'
    },
    {
      code: '798',
      index: 837,
      text: 'Landlady',
      enumType: 'Landlady'
    },
    {
      code: '176',
      index: 838,
      text: 'Landlord',
      enumType: 'Landlord'
    },
    {
      code: 'A79',
      index: 839,
      text: 'Landowner',
      enumType: 'Landowner'
    },
    {
      code: '532',
      index: 840,
      text: 'Landscape Architect',
      enumType: 'LandscapeArchitect'
    },
    {
      code: 'L03',
      index: 841,
      text: 'Landscape Gardener',
      enumType: 'LandscapeGardener'
    },
    {
      code: '874',
      index: 842,
      text: 'Landworker',
      enumType: 'Landworker'
    },
    {
      code: '431',
      index: 843,
      text: 'Lathe Operator',
      enumType: 'LatheOperator'
    },
    {
      code: 'L04',
      index: 844,
      text: 'Laundry Staff',
      enumType: 'LaundryStaff'
    },
    {
      code: '177',
      index: 845,
      text: 'Laundry Worker',
      enumType: 'LaundryWorker'
    },
    {
      code: '178',
      index: 846,
      text: 'Lavatory Attendant',
      enumType: 'LavatoryAttendant'
    },
    {
      code: '799',
      index: 847,
      text: 'Law Clerk',
      enumType: 'LawClerk'
    },
    {
      code: '800',
      index: 848,
      text: 'Lawn Mower Repairer',
      enumType: 'LawnMowerRepairer'
    },
    {
      code: 'L05',
      index: 849,
      text: 'Lawyer',
      enumType: 'Lawyer'
    },
    {
      code: '801',
      index: 850,
      text: 'Leaflet Distributor',
      enumType: 'LeafletDistributor'
    },
    {
      code: '179',
      index: 851,
      text: 'Leather Worker',
      enumType: 'LeatherWorker'
    },
    {
      code: 'L06',
      index: 852,
      text: 'Lecturer',
      enumType: 'Lecturer'
    },
    {
      code: '802',
      index: 853,
      text: 'Ledger Clerk',
      enumType: 'LedgerClerk'
    },
    {
      code: '803',
      index: 854,
      text: 'Legal Advisor',
      enumType: 'LegalAdvisor'
    },
    {
      code: '504',
      index: 855,
      text: 'Legal Assistant',
      enumType: 'LegalAssistant'
    },
    {
      code: '432',
      index: 856,
      text: 'Legal Executive',
      enumType: 'LegalExecutive'
    },
    {
      code: 'L07',
      index: 857,
      text: 'Legal Secretary',
      enumType: 'LegalSecretary'
    },
    {
      code: '180',
      index: 858,
      text: 'Leisure Centre Attendant',
      enumType: 'LeisureCentreAttendant'
    },
    {
      code: '804',
      index: 859,
      text: 'Leisure Centre Manager',
      enumType: 'LeisureCentreManager'
    },
    {
      code: '181',
      index: 860,
      text: 'Lens Grinder & Polisher',
      enumType: 'LensGrinderPolisher'
    },
    {
      code: '805',
      index: 861,
      text: 'Letting Agent',
      enumType: 'LettingAgent'
    },
    {
      code: 'C99',
      index: 862,
      text: 'Liaison Officer',
      enumType: 'LiaisonOfficer'
    },
    {
      code: 'L08',
      index: 863,
      text: 'Librarian',
      enumType: 'Librarian'
    },
    {
      code: '817',
      index: 864,
      text: 'Library Manager',
      enumType: 'LibraryManager'
    },
    {
      code: '182',
      index: 865,
      text: 'Licensee',
      enumType: 'Licensee'
    },
    {
      code: 'C62',
      index: 866,
      text: 'Licensing Consultant',
      enumType: 'LicensingConsultant'
    },
    {
      code: 'L11',
      index: 867,
      text: 'Lifeguard',
      enumType: 'Lifeguard'
    },
    {
      code: '183',
      index: 868,
      text: 'Lift Attendant',
      enumType: 'LiftAttendant'
    },
    {
      code: '184',
      index: 869,
      text: 'Lift Engineer',
      enumType: 'LiftEngineer'
    },
    {
      code: '818',
      index: 870,
      text: 'Lighterman',
      enumType: 'Lighterman'
    },
    {
      code: 'D49',
      index: 871,
      text: 'Lighthouse Keeper',
      enumType: 'LighthouseKeeper'
    },
    {
      code: '819',
      index: 872,
      text: 'Lighting Designer',
      enumType: 'LightingDesigner'
    },
    {
      code: '185',
      index: 873,
      text: 'Lighting Technician',
      enumType: 'LightingTechnician'
    },
    {
      code: '820',
      index: 874,
      text: 'Lime Kiln Attendant',
      enumType: 'LimeKilnAttendant'
    },
    {
      code: '875',
      index: 875,
      text: 'Line Manager',
      enumType: 'LineManager'
    },
    {
      code: '186',
      index: 876,
      text: 'Line Worker',
      enumType: 'LineWorker'
    },
    {
      code: '187',
      index: 877,
      text: 'Linguist',
      enumType: 'Linguist'
    },
    {
      code: '188',
      index: 878,
      text: 'Literary Agent',
      enumType: 'LiteraryAgent'
    },
    {
      code: '821',
      index: 879,
      text: 'Literary Editor',
      enumType: 'LiteraryEditor'
    },
    {
      code: 'L09',
      index: 880,
      text: 'Lithographer',
      enumType: 'Lithographer'
    },
    {
      code: '569',
      index: 881,
      text: 'Litigation Manager',
      enumType: 'LitigationManager'
    },
    {
      code: '493',
      index: 882,
      text: 'Loader',
      enumType: 'Loader'
    },
    {
      code: '822',
      index: 883,
      text: 'Loans Manager',
      enumType: 'LoansManager'
    },
    {
      code: '383',
      index: 884,
      text: 'Local Government Officer',
      enumType: 'LocalGovernmentOfficer'
    },
    {
      code: 'D58',
      index: 885,
      text: 'Lock Keeper',
      enumType: 'LockKeeper'
    },
    {
      code: 'L10',
      index: 886,
      text: 'Locksmith',
      enumType: 'Locksmith'
    },
    {
      code: '823',
      index: 887,
      text: 'Locum Pharmacist',
      enumType: 'LocumPharmacist'
    },
    {
      code: '824',
      index: 888,
      text: 'Log Merchant',
      enumType: 'LogMerchant'
    },
    {
      code: '189',
      index: 889,
      text: 'Lorry Driver',
      enumType: 'LorryDriver'
    },
    {
      code: '190',
      index: 890,
      text: 'Loss Adjustor',
      enumType: 'LossAdjustor'
    },
    {
      code: '191',
      index: 891,
      text: 'Loss Assessor',
      enumType: 'LossAssessor'
    },
    {
      code: '192',
      index: 892,
      text: 'Lumberjack',
      enumType: 'Lumberjack'
    },
    {
      code: '825',
      index: 893,
      text: 'Machine Fitters Mate',
      enumType: 'MachineFittersMate'
    },
    {
      code: '826',
      index: 894,
      text: 'Machine Minder',
      enumType: 'MachineMinder'
    },
    {
      code: 'M01',
      index: 895,
      text: 'Machine Operator',
      enumType: 'MachineOperator'
    },
    {
      code: '481',
      index: 896,
      text: 'Machine Setter',
      enumType: 'MachineSetter'
    },
    {
      code: '827',
      index: 897,
      text: 'Machine Technician',
      enumType: 'MachineTechnician'
    },
    {
      code: '828',
      index: 898,
      text: 'Machine Tool Engineer',
      enumType: 'MachineToolEngineer'
    },
    {
      code: '829',
      index: 899,
      text: 'Machine Tool Fitter',
      enumType: 'MachineToolFitter'
    },
    {
      code: 'M02',
      index: 900,
      text: 'Machinist',
      enumType: 'Machinist'
    },
    {
      code: '830',
      index: 901,
      text: 'Magician',
      enumType: 'Magician'
    },
    {
      code: 'M03',
      index: 902,
      text: 'Magistrate',
      enumType: 'Magistrate'
    },
    {
      code: '193',
      index: 903,
      text: 'Magistrates Clerk',
      enumType: 'MagistratesClerk'
    },
    {
      code: '831',
      index: 904,
      text: 'Maid',
      enumType: 'Maid'
    },
    {
      code: '832',
      index: 905,
      text: 'Maintenance Engineer',
      enumType: 'MaintenanceEngineer'
    },
    {
      code: '482',
      index: 906,
      text: 'Maintenance Fitter',
      enumType: 'MaintenanceFitter'
    },
    {
      code: '433',
      index: 907,
      text: 'Maintenance Man',
      enumType: 'MaintenanceMan'
    },
    {
      code: '833',
      index: 908,
      text: 'Maintenance Manager',
      enumType: 'MaintenanceManager'
    },
    {
      code: 'M04',
      index: 909,
      text: 'Maintenance Staff',
      enumType: 'MaintenanceStaff'
    },
    {
      code: '505',
      index: 910,
      text: 'Make Up Artist',
      enumType: 'MakeUpArtist'
    },
    {
      code: '834',
      index: 911,
      text: 'Make Up Supervisor',
      enumType: 'MakeUpSupervisor'
    },
    {
      code: 'M05',
      index: 912,
      text: 'Management Consultant',
      enumType: 'ManagementConsultant'
    },
    {
      code: '835',
      index: 913,
      text: 'Management Trainee',
      enumType: 'ManagementTrainee'
    },
    {
      code: 'M06',
      index: 914,
      text: 'Manager',
      enumType: 'Manager'
    },
    {
      code: 'M14',
      index: 915,
      text: 'Manager - Licensed Premises',
      enumType: 'ManagerLicensedPremises'
    },
    {
      code: 'M15',
      index: 916,
      text: 'Manager - Retail Shop',
      enumType: 'ManagerRetailShop'
    },
    {
      code: 'M16',
      index: 917,
      text: 'Manager - Ring Sports',
      enumType: 'ManagerRingSports'
    },
    {
      code: 'M17',
      index: 918,
      text: 'Manager - Sales (Non Travelling)',
      enumType: 'ManagerSalesNonTravelling'
    },
    {
      code: 'M18',
      index: 919,
      text: 'Manager - Sales (Travelling)',
      enumType: 'ManagerSalesTravelling'
    },
    {
      code: 'M19',
      index: 920,
      text: 'Manager - Sports',
      enumType: 'ManagerSports'
    },
    {
      code: 'M22',
      index: 921,
      text: 'Manager - Unlicensed Premises',
      enumType: 'ManagerUnlicensedPremises'
    },
    {
      code: '194',
      index: 922,
      text: 'Managing Director',
      enumType: 'ManagingDirector'
    },
    {
      code: '195',
      index: 923,
      text: 'Manicurist',
      enumType: 'Manicurist'
    },
    {
      code: 'M23',
      index: 924,
      text: 'Manufacturing Agent',
      enumType: 'ManufacturingAgent'
    },
    {
      code: '836',
      index: 925,
      text: 'Manufacturing Technician',
      enumType: 'ManufacturingTechnician'
    },
    {
      code: '837',
      index: 926,
      text: 'Map Mounter',
      enumType: 'MapMounter'
    },
    {
      code: '838',
      index: 927,
      text: 'Marble Finisher',
      enumType: 'MarbleFinisher'
    },
    {
      code: '839',
      index: 928,
      text: 'Marble Mason',
      enumType: 'MarbleMason'
    },
    {
      code: 'C85',
      index: 929,
      text: 'Marine Broker',
      enumType: 'MarineBroker'
    },
    {
      code: 'C63',
      index: 930,
      text: 'Marine Consultant',
      enumType: 'MarineConsultant'
    },
    {
      code: '840',
      index: 931,
      text: 'Marine Electrician',
      enumType: 'MarineElectrician'
    },
    {
      code: 'E15',
      index: 932,
      text: 'Marine Engineer',
      enumType: 'MarineEngineer'
    },
    {
      code: '841',
      index: 933,
      text: 'Marine Geologist',
      enumType: 'MarineGeologist'
    },
    {
      code: '196',
      index: 934,
      text: 'Marine Pilot',
      enumType: 'MarinePilot'
    },
    {
      code: '570',
      index: 935,
      text: 'Marine Surveyor',
      enumType: 'MarineSurveyor'
    },
    {
      code: 'M24',
      index: 936,
      text: 'Market Gardener',
      enumType: 'MarketGardener'
    },
    {
      code: '843',
      index: 937,
      text: 'Market Research Assistant',
      enumType: 'MarketResearchAssistant'
    },
    {
      code: 'M25',
      index: 938,
      text: 'Market Researcher',
      enumType: 'MarketResearcher'
    },
    {
      code: 'M26',
      index: 939,
      text: 'Market Trader',
      enumType: 'MarketTrader'
    },
    {
      code: 'M27',
      index: 940,
      text: 'Marketing - Non Travelling',
      enumType: 'MarketingNonTravelling'
    },
    {
      code: 'M28',
      index: 941,
      text: 'Marketing - Travelling',
      enumType: 'MarketingTravelling'
    },
    {
      code: '844',
      index: 942,
      text: 'Marketing Agent',
      enumType: 'MarketingAgent'
    },
    {
      code: '197',
      index: 943,
      text: 'Marketing Assistant',
      enumType: 'MarketingAssistant'
    },
    {
      code: '845',
      index: 944,
      text: 'Marketing Co-ordinator',
      enumType: 'MarketingCoordinator'
    },
    {
      code: '846',
      index: 945,
      text: 'Marketing Consultant',
      enumType: 'MarketingConsultant'
    },
    {
      code: '847',
      index: 946,
      text: 'Marketing Director',
      enumType: 'MarketingDirector'
    },
    {
      code: '198',
      index: 947,
      text: 'Marketing Executive',
      enumType: 'MarketingExecutive'
    },
    {
      code: '199',
      index: 948,
      text: 'Marketing Manager',
      enumType: 'MarketingManager'
    },
    {
      code: '848',
      index: 949,
      text: 'Marquee Erector',
      enumType: 'MarqueeErector'
    },
    {
      code: '849',
      index: 950,
      text: 'Massage Therapist',
      enumType: 'MassageTherapist'
    },
    {
      code: '200',
      index: 951,
      text: 'Masseur',
      enumType: 'Masseur'
    },
    {
      code: '201',
      index: 952,
      text: 'Masseuse',
      enumType: 'Masseuse'
    },
    {
      code: '850',
      index: 953,
      text: 'Master Mariner',
      enumType: 'MasterMariner'
    },
    {
      code: 'D84',
      index: 954,
      text: 'Master of Ceremonies',
      enumType: 'MasterofCeremonies'
    },
    {
      code: 'M53',
      index: 955,
      text: 'Master Of Foxhounds',
      enumType: 'MasterOfFoxhounds'
    },
    {
      code: '851',
      index: 956,
      text: 'Materials Controller',
      enumType: 'MaterialsController'
    },
    {
      code: '852',
      index: 957,
      text: 'Materials Manager',
      enumType: 'MaterialsManager'
    },
    {
      code: '853',
      index: 958,
      text: 'Mathematician',
      enumType: 'Mathematician'
    },
    {
      code: '434',
      index: 959,
      text: 'Matron',
      enumType: 'Matron'
    },
    {
      code: '854',
      index: 960,
      text: 'Mattress Maker',
      enumType: 'MattressMaker'
    },
    {
      code: '558',
      index: 961,
      text: 'Mature Student',
      enumType: 'MatureStudent'
    },
    {
      code: '855',
      index: 962,
      text: 'Meat Inspector',
      enumType: 'MeatInspector'
    },
    {
      code: '856',
      index: 963,
      text: 'Meat Wholesaler',
      enumType: 'MeatWholesaler'
    },
    {
      code: 'M29',
      index: 964,
      text: 'Mechanic',
      enumType: 'Mechanic'
    },
    {
      code: 'M30',
      index: 965,
      text: 'Mechanic - Airport',
      enumType: 'MechanicAirport'
    },
    {
      code: 'M31',
      index: 966,
      text: 'Mechanic - Vehicle',
      enumType: 'MechanicVehicle'
    },
    {
      code: 'E16',
      index: 967,
      text: 'Mechanical Engineer',
      enumType: 'MechanicalEngineer'
    },
    {
      code: '783',
      index: 968,
      text: 'Mechanical Technician',
      enumType: 'MechanicalTechnician'
    },
    {
      code: '857',
      index: 969,
      text: 'Medal Dealer',
      enumType: 'MedalDealer'
    },
    {
      code: '858',
      index: 970,
      text: 'Medical Advisor',
      enumType: 'MedicalAdvisor'
    },
    {
      code: '859',
      index: 971,
      text: 'Medical Assistant',
      enumType: 'MedicalAssistant'
    },
    {
      code: 'C36',
      index: 972,
      text: 'Medical Consultant',
      enumType: 'MedicalConsultant'
    },
    {
      code: 'B35',
      index: 973,
      text: 'Medical Officer',
      enumType: 'MedicalOfficer'
    },
    {
      code: '860',
      index: 974,
      text: 'Medical Physicist',
      enumType: 'MedicalPhysicist'
    },
    {
      code: 'B34',
      index: 975,
      text: 'Medical Practitioner',
      enumType: 'MedicalPractitioner'
    },
    {
      code: '861',
      index: 976,
      text: 'Medical Researcher',
      enumType: 'MedicalResearcher'
    },
    {
      code: '435',
      index: 977,
      text: 'Medical Secretary',
      enumType: 'MedicalSecretary'
    },
    {
      code: '631',
      index: 978,
      text: 'Medical Student',
      enumType: 'MedicalStudent'
    },
    {
      code: '862',
      index: 979,
      text: 'Medical Supplier',
      enumType: 'MedicalSupplier'
    },
    {
      code: '863',
      index: 980,
      text: 'Medical Technician',
      enumType: 'MedicalTechnician'
    },
    {
      code: 'M45',
      index: 981,
      text: 'Member Of Parliament',
      enumType: 'MemberOfParliament'
    },
    {
      code: '864',
      index: 982,
      text: 'Merchandiser',
      enumType: 'Merchandiser'
    },
    {
      code: 'M32',
      index: 983,
      text: 'Merchant',
      enumType: 'Merchant'
    },
    {
      code: '865',
      index: 984,
      text: 'Merchant Banker',
      enumType: 'MerchantBanker'
    },
    {
      code: 'M33',
      index: 985,
      text: 'Merchant Navy',
      enumType: 'MerchantNavy'
    },
    {
      code: '202',
      index: 986,
      text: 'Merchant Seaman',
      enumType: 'MerchantSeaman'
    },
    {
      code: 'M34',
      index: 987,
      text: 'Messenger',
      enumType: 'Messenger'
    },
    {
      code: '203',
      index: 988,
      text: 'Metal Dealer',
      enumType: 'MetalDealer'
    },
    {
      code: '571',
      index: 989,
      text: 'Metal Engineer',
      enumType: 'MetalEngineer'
    },
    {
      code: '506',
      index: 990,
      text: 'Metal Polisher',
      enumType: 'MetalPolisher'
    },
    {
      code: 'M50',
      index: 991,
      text: 'Metal Worker',
      enumType: 'MetalWorker'
    },
    {
      code: 'M35',
      index: 992,
      text: 'Metallurgist',
      enumType: 'Metallurgist'
    },
    {
      code: 'M36',
      index: 993,
      text: 'Meteorologist',
      enumType: 'Meteorologist'
    },
    {
      code: 'M37',
      index: 994,
      text: 'Meter Reader',
      enumType: 'MeterReader'
    },
    {
      code: '204',
      index: 995,
      text: 'Microbiologist',
      enumType: 'Microbiologist'
    },
    {
      code: '507',
      index: 996,
      text: 'Microfilm Operator',
      enumType: 'MicrofilmOperator'
    },
    {
      code: 'M38',
      index: 997,
      text: 'Midwife',
      enumType: 'Midwife'
    },
    {
      code: 'C97',
      index: 998,
      text: 'Milklady',
      enumType: 'Milklady'
    },
    {
      code: '205',
      index: 999,
      text: 'Milkman',
      enumType: 'Milkman'
    },
    {
      code: '866',
      index: 1000,
      text: 'Mill Operator',
      enumType: 'MillOperator'
    },
    {
      code: '206',
      index: 1001,
      text: 'Mill Worker',
      enumType: 'MillWorker'
    },
    {
      code: '207',
      index: 1002,
      text: 'Miller',
      enumType: 'Miller'
    },
    {
      code: 'M39',
      index: 1003,
      text: 'Milliner',
      enumType: 'Milliner'
    },
    {
      code: 'B80',
      index: 1004,
      text: 'Millwright',
      enumType: 'Millwright'
    },
    {
      code: 'M40',
      index: 1005,
      text: 'Miner',
      enumType: 'Miner'
    },
    {
      code: '208',
      index: 1006,
      text: 'Mineralologist',
      enumType: 'Mineralologist'
    },
    {
      code: 'A88',
      index: 1007,
      text: 'Minibus Driver',
      enumType: 'MinibusDriver'
    },
    {
      code: '209',
      index: 1008,
      text: 'Minicab Driver',
      enumType: 'MinicabDriver'
    },
    {
      code: '867',
      index: 1009,
      text: 'Mining Consultant',
      enumType: 'MiningConsultant'
    },
    {
      code: 'E17',
      index: 1010,
      text: 'Mining Engineer',
      enumType: 'MiningEngineer'
    },
    {
      code: 'M41',
      index: 1011,
      text: 'Minister Of Religion',
      enumType: 'MinisterOfReligion'
    },
    {
      code: 'B81',
      index: 1012,
      text: 'Missionary',
      enumType: 'Missionary'
    },
    {
      code: 'C09',
      index: 1013,
      text: 'Mobile Caterer',
      enumType: 'MobileCaterer'
    },
    {
      code: 'D18',
      index: 1014,
      text: 'Mobile Disc Jockey',
      enumType: 'MobileDiscJockey'
    },
    {
      code: '868',
      index: 1015,
      text: 'Mobile Disco Owner',
      enumType: 'MobileDiscoOwner'
    },
    {
      code: '210',
      index: 1016,
      text: 'Mobile Hairdresser',
      enumType: 'MobileHairdresser'
    },
    {
      code: 'A80',
      index: 1017,
      text: 'Mobile Motor Mechanic',
      enumType: 'MobileMotorMechanic'
    },
    {
      code: '211',
      index: 1018,
      text: 'Mobile Service Engineer',
      enumType: 'MobileServiceEngineer'
    },
    {
      code: 'M42',
      index: 1019,
      text: 'Model',
      enumType: 'Model'
    },
    {
      code: '869',
      index: 1020,
      text: 'Model Maker',
      enumType: 'ModelMaker'
    },
    {
      code: '754',
      index: 1021,
      text: 'Money Broker',
      enumType: 'MoneyBroker'
    },
    {
      code: '806',
      index: 1022,
      text: 'Money Dealer',
      enumType: 'MoneyDealer'
    },
    {
      code: 'M51',
      index: 1023,
      text: 'Moneylender',
      enumType: 'Moneylender'
    },
    {
      code: 'D85',
      index: 1024,
      text: 'Monk',
      enumType: 'Monk'
    },
    {
      code: '873',
      index: 1025,
      text: 'Monumental Sculptor',
      enumType: 'MonumentalSculptor'
    },
    {
      code: '807',
      index: 1026,
      text: 'Mooring Contractor',
      enumType: 'MooringContractor'
    },
    {
      code: '212',
      index: 1027,
      text: 'Mortgage Broker',
      enumType: 'MortgageBroker'
    },
    {
      code: '808',
      index: 1028,
      text: 'Mortgage Consultant',
      enumType: 'MortgageConsultant'
    },
    {
      code: '213',
      index: 1029,
      text: 'Mortician',
      enumType: 'Mortician'
    },
    {
      code: '809',
      index: 1030,
      text: 'Motor Dealer',
      enumType: 'MotorDealer'
    },
    {
      code: '214',
      index: 1031,
      text: 'Motor Engineer',
      enumType: 'MotorEngineer'
    },
    {
      code: '810',
      index: 1032,
      text: 'Motor Fitter',
      enumType: 'MotorFitter'
    },
    {
      code: '215',
      index: 1033,
      text: 'Motor Mechanic',
      enumType: 'MotorMechanic'
    },
    {
      code: 'M43',
      index: 1034,
      text: 'Motor Racing Organiser',
      enumType: 'MotorRacingOrganiser'
    },
    {
      code: 'M44',
      index: 1035,
      text: 'Motor Trader',
      enumType: 'MotorTrader'
    },
    {
      code: '812',
      index: 1036,
      text: 'Museum Assistant',
      enumType: 'MuseumAssistant'
    },
    {
      code: '813',
      index: 1037,
      text: 'Museum Attendant',
      enumType: 'MuseumAttendant'
    },
    {
      code: '814',
      index: 1038,
      text: 'Museum Consultant',
      enumType: 'MuseumConsultant'
    },
    {
      code: '436',
      index: 1039,
      text: 'Museum Technician',
      enumType: 'MuseumTechnician'
    },
    {
      code: '508',
      index: 1040,
      text: 'Music Teacher',
      enumType: 'MusicTeacher'
    },
    {
      code: '815',
      index: 1041,
      text: 'Music Therapist',
      enumType: 'MusicTherapist'
    },
    {
      code: '816',
      index: 1042,
      text: 'Music Wholesaler',
      enumType: 'MusicWholesaler'
    },
    {
      code: 'M46',
      index: 1043,
      text: 'Musician',
      enumType: 'Musician'
    },
    {
      code: 'M47',
      index: 1044,
      text: 'Musician - Classical',
      enumType: 'MusicianClassical'
    },
    {
      code: 'M48',
      index: 1045,
      text: 'Musician - Dance Band',
      enumType: 'MusicianDanceBand'
    },
    {
      code: 'M49',
      index: 1046,
      text: 'Musician - Pop Group',
      enumType: 'MusicianPopGroup'
    },
    {
      code: 'N08',
      index: 1047,
      text: 'Nanny',
      enumType: 'Nanny'
    },
    {
      code: 'C82',
      index: 1048,
      text: 'Naturopath',
      enumType: 'Naturopath'
    },
    {
      code: '216',
      index: 1049,
      text: 'Navigator',
      enumType: 'Navigator'
    },
    {
      code: 'N07',
      index: 1050,
      text: 'Navy - NCO/Commissioned Officer',
      enumType: 'NavyNCOCommissionedOfficer'
    },
    {
      code: 'N06',
      index: 1051,
      text: 'Navy - Other Ranks',
      enumType: 'NavyOtherRanks'
    },
    {
      code: 'N01',
      index: 1052,
      text: 'Negotiator',
      enumType: 'Negotiator'
    },
    {
      code: '217',
      index: 1053,
      text: 'Neurologist',
      enumType: 'Neurologist'
    },
    {
      code: 'N11',
      index: 1054,
      text: 'Newsagent',
      enumType: 'Newsagent'
    },
    {
      code: 'N12',
      index: 1055,
      text: 'Night Club Staff',
      enumType: 'NightClubStaff'
    },
    {
      code: '878',
      index: 1056,
      text: 'Night Porter',
      enumType: 'NightPorter'
    },
    {
      code: '218',
      index: 1057,
      text: 'Night Watchman',
      enumType: 'NightWatchman'
    },
    {
      code: '219',
      index: 1058,
      text: 'Non Commissioned Officer',
      enumType: 'NonCommissionedOfficer'
    },
    {
      code: '220',
      index: 1059,
      text: 'Not In Employment',
      enumType: 'NotInEmployment'
    },
    {
      code: '221',
      index: 1060,
      text: 'Notary Public',
      enumType: 'NotaryPublic'
    },
    {
      code: '222',
      index: 1061,
      text: 'Nuclear Scientist',
      enumType: 'NuclearScientist'
    },
    {
      code: 'N09',
      index: 1062,
      text: 'Nun',
      enumType: 'Nun'
    },
    {
      code: 'N02',
      index: 1063,
      text: 'Nurse',
      enumType: 'Nurse'
    },
    {
      code: '437',
      index: 1064,
      text: 'Nursery Assistant',
      enumType: 'NurseryAssistant'
    },
    {
      code: 'N10',
      index: 1065,
      text: 'Nursery Nurse',
      enumType: 'NurseryNurse'
    },
    {
      code: '879',
      index: 1066,
      text: 'Nursery Worker',
      enumType: 'NurseryWorker'
    },
    {
      code: 'N05',
      index: 1067,
      text: 'Nurseryman',
      enumType: 'Nurseryman'
    },
    {
      code: '533',
      index: 1068,
      text: 'Nursing Assistant',
      enumType: 'NursingAssistant'
    },
    {
      code: '880',
      index: 1069,
      text: 'Nursing Auxiliary',
      enumType: 'NursingAuxiliary'
    },
    {
      code: '572',
      index: 1070,
      text: 'Nursing Manager',
      enumType: 'NursingManager'
    },
    {
      code: 'D66',
      index: 1071,
      text: 'Nursing Sister',
      enumType: 'NursingSister'
    },
    {
      code: '755',
      index: 1072,
      text: 'Nutritionist',
      enumType: 'Nutritionist'
    },
    {
      code: 'C64',
      index: 1073,
      text: 'Occupational Health Consultant',
      enumType: 'OccupationalHealthConsultant'
    },
    {
      code: 'D54',
      index: 1074,
      text: 'Occupational Health Nurse',
      enumType: 'OccupationalHealthNurse'
    },
    {
      code: '223',
      index: 1075,
      text: 'Occupational Therapist',
      enumType: 'OccupationalTherapist'
    },
    {
      code: '224',
      index: 1076,
      text: 'Oculist',
      enumType: 'Oculist'
    },
    {
      code: '881',
      index: 1077,
      text: 'Off Shore Surveyor',
      enumType: 'OffShoreSurveyor'
    },
    {
      code: '882',
      index: 1078,
      text: 'Office Administrator',
      enumType: 'OfficeAdministrator'
    },
    {
      code: '225',
      index: 1079,
      text: 'Office Manager',
      enumType: 'OfficeManager'
    },
    {
      code: 'O01',
      index: 1080,
      text: 'Office Worker',
      enumType: 'OfficeWorker'
    },
    {
      code: '883',
      index: 1081,
      text: 'Oil Broker',
      enumType: 'OilBroker'
    },
    {
      code: '534',
      index: 1082,
      text: 'Oil Rig Crew',
      enumType: 'OilRigCrew'
    },
    {
      code: '884',
      index: 1083,
      text: 'Opera Singer',
      enumType: 'OperaSinger'
    },
    {
      code: '885',
      index: 1084,
      text: 'Operations Director',
      enumType: 'OperationsDirector'
    },
    {
      code: '226',
      index: 1085,
      text: 'Operations Manager',
      enumType: 'OperationsManager'
    },
    {
      code: '438',
      index: 1086,
      text: 'Operations Supervisor',
      enumType: 'OperationsSupervisor'
    },
    {
      code: '573',
      index: 1087,
      text: 'Opthalmic Technician',
      enumType: 'OpthalmicTechnician'
    },
    {
      code: '886',
      index: 1088,
      text: 'Optical Advisor',
      enumType: 'OpticalAdvisor'
    },
    {
      code: '380',
      index: 1089,
      text: 'Optical Assistant',
      enumType: 'OpticalAssistant'
    },
    {
      code: '535',
      index: 1090,
      text: 'Optical Technician',
      enumType: 'OpticalTechnician'
    },
    {
      code: 'O02',
      index: 1091,
      text: 'Optician',
      enumType: 'Optician'
    },
    {
      code: 'A89',
      index: 1092,
      text: 'Optometrist',
      enumType: 'Optometrist'
    },
    {
      code: '887',
      index: 1093,
      text: 'Orchestral Violinist',
      enumType: 'OrchestralViolinist'
    },
    {
      code: '888',
      index: 1094,
      text: 'Order Clerk',
      enumType: 'OrderClerk'
    },
    {
      code: '227',
      index: 1095,
      text: 'Organist',
      enumType: 'Organist'
    },
    {
      code: '889',
      index: 1096,
      text: 'Ornamental Blacksmith',
      enumType: 'OrnamentalBlacksmith'
    },
    {
      code: 'C91',
      index: 1097,
      text: 'Ornithologist',
      enumType: 'Ornithologist'
    },
    {
      code: '890',
      index: 1098,
      text: 'Orthopaedic Technician',
      enumType: 'OrthopaedicTechnician'
    },
    {
      code: '756',
      index: 1099,
      text: 'Orthoptist',
      enumType: 'Orthoptist'
    },
    {
      code: 'O03',
      index: 1100,
      text: 'Osteopath',
      enumType: 'Osteopath'
    },
    {
      code: '228',
      index: 1101,
      text: 'Ostler',
      enumType: 'Ostler'
    },
    {
      code: '891',
      index: 1102,
      text: 'Outdoor Pursuits Instructor',
      enumType: 'OutdoorPursuitsInstructor'
    },
    {
      code: '439',
      index: 1103,
      text: 'Outfitter',
      enumType: 'Outfitter'
    },
    {
      code: '892',
      index: 1104,
      text: 'Outreach Worker',
      enumType: 'OutreachWorker'
    },
    {
      code: '893',
      index: 1105,
      text: 'Overhead Line Instructor',
      enumType: 'OverheadLineInstructor'
    },
    {
      code: '894',
      index: 1106,
      text: 'Overhead Lineman',
      enumType: 'OverheadLineman'
    },
    {
      code: '895',
      index: 1107,
      text: 'Overlocker',
      enumType: 'Overlocker'
    },
    {
      code: '896',
      index: 1108,
      text: 'Overseas Mailer',
      enumType: 'OverseasMailer'
    },
    {
      code: '897',
      index: 1109,
      text: 'Overwriter',
      enumType: 'Overwriter'
    },
    {
      code: '898',
      index: 1110,
      text: 'Packaging Consultant',
      enumType: 'PackagingConsultant'
    },
    {
      code: 'P01',
      index: 1111,
      text: 'Packer',
      enumType: 'Packer'
    },
    {
      code: '899',
      index: 1112,
      text: 'Paediatrician',
      enumType: 'Paediatrician'
    },
    {
      code: 'D55',
      index: 1113,
      text: 'Pager Operator',
      enumType: 'PagerOperator'
    },
    {
      code: 'C83',
      index: 1114,
      text: 'Paint Consultant',
      enumType: 'PaintConsultant'
    },
    {
      code: '229',
      index: 1115,
      text: 'Paint Sprayer',
      enumType: 'PaintSprayer'
    },
    {
      code: 'P45',
      index: 1116,
      text: 'Paint Sprayer - Motor Trade',
      enumType: 'PaintSprayerMotorTrade'
    },
    {
      code: 'P46',
      index: 1117,
      text: 'Paint Sprayer - Non Motor Trade',
      enumType: 'PaintSprayerNonMotorTrade'
    },
    {
      code: 'P02',
      index: 1118,
      text: 'Painter',
      enumType: 'Painter'
    },
    {
      code: 'P03',
      index: 1119,
      text: 'Painter And Decorator',
      enumType: 'PainterAndDecorator'
    },
    {
      code: 'B89',
      index: 1120,
      text: 'Palaeobotanist',
      enumType: 'Palaeobotanist'
    },
    {
      code: 'D56',
      index: 1121,
      text: 'Palaeontologist',
      enumType: 'Palaeontologist'
    },
    {
      code: '381',
      index: 1122,
      text: 'Pallet Maker',
      enumType: 'PalletMaker'
    },
    {
      code: '230',
      index: 1123,
      text: 'Panel Beater',
      enumType: 'PanelBeater'
    },
    {
      code: '900',
      index: 1124,
      text: 'Paper Mill Worker',
      enumType: 'PaperMillWorker'
    },
    {
      code: 'D59',
      index: 1125,
      text: 'Parachute Packer',
      enumType: 'ParachutePacker'
    },
    {
      code: '231',
      index: 1126,
      text: 'Paramedic',
      enumType: 'Paramedic'
    },
    {
      code: '232',
      index: 1127,
      text: 'Park Attendant',
      enumType: 'ParkAttendant'
    },
    {
      code: '233',
      index: 1128,
      text: 'Park Keeper',
      enumType: 'ParkKeeper'
    },
    {
      code: '901',
      index: 1129,
      text: 'Park Ranger',
      enumType: 'ParkRanger'
    },
    {
      code: 'P04',
      index: 1130,
      text: 'Park/Recreational Attendant',
      enumType: 'ParkRecreationalAttendant'
    },
    {
      code: '902',
      index: 1131,
      text: 'Partition Erector',
      enumType: 'PartitionErector'
    },
    {
      code: '903',
      index: 1132,
      text: 'Parts Man',
      enumType: 'PartsMan'
    },
    {
      code: '483',
      index: 1133,
      text: 'Parts Manager',
      enumType: 'PartsManager'
    },
    {
      code: '536',
      index: 1134,
      text: 'Parts Supervisor',
      enumType: 'PartsSupervisor'
    },
    {
      code: 'P05',
      index: 1135,
      text: 'Party Planner',
      enumType: 'PartyPlanner'
    },
    {
      code: '537',
      index: 1136,
      text: 'Pasteuriser',
      enumType: 'Pasteuriser'
    },
    {
      code: '904',
      index: 1137,
      text: 'Pastry Chef',
      enumType: 'PastryChef'
    },
    {
      code: '757',
      index: 1138,
      text: 'Patent Agent',
      enumType: 'PatentAgent'
    },
    {
      code: '538',
      index: 1139,
      text: 'Patent Attorney',
      enumType: 'PatentAttorney'
    },
    {
      code: '440',
      index: 1140,
      text: 'Pathologist',
      enumType: 'Pathologist'
    },
    {
      code: 'C92',
      index: 1141,
      text: 'Patrol Person',
      enumType: 'PatrolPerson'
    },
    {
      code: 'P41',
      index: 1142,
      text: 'Patrolman',
      enumType: 'Patrolman'
    },
    {
      code: '905',
      index: 1143,
      text: 'Pattern Cutter',
      enumType: 'PatternCutter'
    },
    {
      code: 'P06',
      index: 1144,
      text: 'Pattern Maker',
      enumType: 'PatternMaker'
    },
    {
      code: '906',
      index: 1145,
      text: 'Pattern Weaver',
      enumType: 'PatternWeaver'
    },
    {
      code: '907',
      index: 1146,
      text: 'Paviour',
      enumType: 'Paviour'
    },
    {
      code: 'P07',
      index: 1147,
      text: 'Pawnbroker',
      enumType: 'Pawnbroker'
    },
    {
      code: '908',
      index: 1148,
      text: 'Payment Officer',
      enumType: 'PaymentOfficer'
    },
    {
      code: '574',
      index: 1149,
      text: 'Payroll Assistant',
      enumType: 'PayrollAssistant'
    },
    {
      code: '910',
      index: 1150,
      text: 'Payroll Clerk',
      enumType: 'PayrollClerk'
    },
    {
      code: '911',
      index: 1151,
      text: 'Payroll Manager',
      enumType: 'PayrollManager'
    },
    {
      code: '912',
      index: 1152,
      text: 'Payroll Supervisor',
      enumType: 'PayrollSupervisor'
    },
    {
      code: '913',
      index: 1153,
      text: 'Pearl Stringer',
      enumType: 'PearlStringer'
    },
    {
      code: 'P52',
      index: 1154,
      text: 'Pedicurist',
      enumType: 'Pedicurist'
    },
    {
      code: '914',
      index: 1155,
      text: 'Pensions Consultant',
      enumType: 'PensionsConsultant'
    },
    {
      code: '915',
      index: 1156,
      text: 'Pensions Manager',
      enumType: 'PensionsManager'
    },
    {
      code: 'P08',
      index: 1157,
      text: 'Personal Assistant',
      enumType: 'PersonalAssistant'
    },
    {
      code: 'P09',
      index: 1158,
      text: 'Personnel Administrator',
      enumType: 'PersonnelAdministrator'
    },
    {
      code: '234',
      index: 1159,
      text: 'Personnel Manager',
      enumType: 'PersonnelManager'
    },
    {
      code: '235',
      index: 1160,
      text: 'Personnel Officer',
      enumType: 'PersonnelOfficer'
    },
    {
      code: 'P10',
      index: 1161,
      text: 'Pest Control',
      enumType: 'PestControl'
    },
    {
      code: '236',
      index: 1162,
      text: 'Pest Controller',
      enumType: 'PestController'
    },
    {
      code: '916',
      index: 1163,
      text: 'Pet Minder',
      enumType: 'PetMinder'
    },
    {
      code: 'P11',
      index: 1164,
      text: 'Petrol Station Attendant',
      enumType: 'PetrolStationAttendant'
    },
    {
      code: '441',
      index: 1165,
      text: 'Petroleum Engineer',
      enumType: 'PetroleumEngineer'
    },
    {
      code: '917',
      index: 1166,
      text: 'Petty Officer',
      enumType: 'PettyOfficer'
    },
    {
      code: '918',
      index: 1167,
      text: 'Pharmaceutical Assistant',
      enumType: 'PharmaceuticalAssistant'
    },
    {
      code: 'P12',
      index: 1168,
      text: 'Pharmacist',
      enumType: 'Pharmacist'
    },
    {
      code: '919',
      index: 1169,
      text: 'Pharmacy Manager',
      enumType: 'PharmacyManager'
    },
    {
      code: '920',
      index: 1170,
      text: 'Pharmacy Technician',
      enumType: 'PharmacyTechnician'
    },
    {
      code: 'B87',
      index: 1171,
      text: 'Philatelist',
      enumType: 'Philatelist'
    },
    {
      code: 'P50',
      index: 1172,
      text: 'Phlebotomist',
      enumType: 'Phlebotomist'
    },
    {
      code: '237',
      index: 1173,
      text: 'Photo Engraver',
      enumType: 'PhotoEngraver'
    },
    {
      code: '921',
      index: 1174,
      text: 'Photo Laboratory Processor',
      enumType: 'PhotoLaboratoryProcessor'
    },
    {
      code: '922',
      index: 1175,
      text: 'Photo Technician',
      enumType: 'PhotoTechnician'
    },
    {
      code: 'A99',
      index: 1176,
      text: 'Photocopy Machine Technician',
      enumType: 'PhotocopyMachineTechnician'
    },
    {
      code: 'P13',
      index: 1177,
      text: 'Photographer',
      enumType: 'Photographer'
    },
    {
      code: 'P14',
      index: 1178,
      text: 'Photographer - Fashion',
      enumType: 'PhotographerFashion'
    },
    {
      code: 'P47',
      index: 1179,
      text: 'Photographer - Location',
      enumType: 'PhotographerLocation'
    },
    {
      code: 'P15',
      index: 1180,
      text: 'Photographer - Studio',
      enumType: 'PhotographerStudio'
    },
    {
      code: 'C84',
      index: 1181,
      text: 'Photographic Agent',
      enumType: 'PhotographicAgent'
    },
    {
      code: '923',
      index: 1182,
      text: 'Physician',
      enumType: 'Physician'
    },
    {
      code: '238',
      index: 1183,
      text: 'Physicist',
      enumType: 'Physicist'
    },
    {
      code: '388',
      index: 1184,
      text: 'Physiologist',
      enumType: 'Physiologist'
    },
    {
      code: 'P16',
      index: 1185,
      text: 'Physiotherapist',
      enumType: 'Physiotherapist'
    },
    {
      code: '924',
      index: 1186,
      text: 'Piano Teacher',
      enumType: 'PianoTeacher'
    },
    {
      code: 'P17',
      index: 1187,
      text: 'Piano Tuner',
      enumType: 'PianoTuner'
    },
    {
      code: '239',
      index: 1188,
      text: 'Picker',
      enumType: 'Picker'
    },
    {
      code: '925',
      index: 1189,
      text: 'Picture Editor',
      enumType: 'PictureEditor'
    },
    {
      code: '240',
      index: 1190,
      text: 'Picture Framer',
      enumType: 'PictureFramer'
    },
    {
      code: '926',
      index: 1191,
      text: 'Picture Researcher',
      enumType: 'PictureResearcher'
    },
    {
      code: '927',
      index: 1192,
      text: 'Pig Man',
      enumType: 'PigMan'
    },
    {
      code: '928',
      index: 1193,
      text: 'Pig Manager',
      enumType: 'PigManager'
    },
    {
      code: '241',
      index: 1194,
      text: 'Pilot',
      enumType: 'Pilot'
    },
    {
      code: '509',
      index: 1195,
      text: 'Pipe Fitter',
      enumType: 'PipeFitter'
    },
    {
      code: '758',
      index: 1196,
      text: 'Pipe Inspector',
      enumType: 'PipeInspector'
    },
    {
      code: '929',
      index: 1197,
      text: 'Pipe Insulator',
      enumType: 'PipeInsulator'
    },
    {
      code: 'P48',
      index: 1198,
      text: 'Pipe Layer',
      enumType: 'PipeLayer'
    },
    {
      code: '575',
      index: 1199,
      text: 'Planning Engineer',
      enumType: 'PlanningEngineer'
    },
    {
      code: '930',
      index: 1200,
      text: 'Planning Manager',
      enumType: 'PlanningManager'
    },
    {
      code: '539',
      index: 1201,
      text: 'Planning Officer',
      enumType: 'PlanningOfficer'
    },
    {
      code: '931',
      index: 1202,
      text: 'Planning Technician',
      enumType: 'PlanningTechnician'
    },
    {
      code: '932',
      index: 1203,
      text: 'Plant Attendant',
      enumType: 'PlantAttendant'
    },
    {
      code: 'D33',
      index: 1204,
      text: 'Plant Driver',
      enumType: 'PlantDriver'
    },
    {
      code: '933',
      index: 1205,
      text: 'Plant Engineer',
      enumType: 'PlantEngineer'
    },
    {
      code: '934',
      index: 1206,
      text: 'Plant Fitter',
      enumType: 'PlantFitter'
    },
    {
      code: '442',
      index: 1207,
      text: 'Plant Manager',
      enumType: 'PlantManager'
    },
    {
      code: '935',
      index: 1208,
      text: 'Plant Operator',
      enumType: 'PlantOperator'
    },
    {
      code: 'P18',
      index: 1209,
      text: 'Plasterer',
      enumType: 'Plasterer'
    },
    {
      code: '484',
      index: 1210,
      text: 'Plastics Consultant',
      enumType: 'PlasticsConsultant'
    },
    {
      code: '540',
      index: 1211,
      text: 'Plastics Engineer',
      enumType: 'PlasticsEngineer'
    },
    {
      code: '936',
      index: 1212,
      text: 'Plate Layer',
      enumType: 'PlateLayer'
    },
    {
      code: '443',
      index: 1213,
      text: 'Plater',
      enumType: 'Plater'
    },
    {
      code: '541',
      index: 1214,
      text: 'Playgroup Assistant',
      enumType: 'PlaygroupAssistant'
    },
    {
      code: '444',
      index: 1215,
      text: 'Playgroup Leader',
      enumType: 'PlaygroupLeader'
    },
    {
      code: 'P19',
      index: 1216,
      text: 'Plumber',
      enumType: 'Plumber'
    },
    {
      code: 'C98',
      index: 1217,
      text: 'Plumbing & Heating Engineer',
      enumType: 'PlumbingHeatingEngineer'
    },
    {
      code: 'C95',
      index: 1218,
      text: 'Podiatrist',
      enumType: 'Podiatrist'
    },
    {
      code: 'P20',
      index: 1219,
      text: 'Police Officer',
      enumType: 'PoliceOfficer'
    },
    {
      code: '937',
      index: 1220,
      text: 'Polisher',
      enumType: 'Polisher'
    },
    {
      code: '242',
      index: 1221,
      text: 'Pool Attendant',
      enumType: 'PoolAttendant'
    },
    {
      code: 'P43',
      index: 1222,
      text: 'Pools Collector',
      enumType: 'PoolsCollector'
    },
    {
      code: 'P21',
      index: 1223,
      text: 'Porter',
      enumType: 'Porter'
    },
    {
      code: '938',
      index: 1224,
      text: 'Portfolio Manager',
      enumType: 'PortfolioManager'
    },
    {
      code: '939',
      index: 1225,
      text: 'Post Card Seller',
      enumType: 'PostCardSeller'
    },
    {
      code: '244',
      index: 1226,
      text: 'Post Office Counter Clerk',
      enumType: 'PostOfficeCounterClerk'
    },
    {
      code: 'P22',
      index: 1227,
      text: 'Post Office Staff',
      enumType: 'PostOfficeStaff'
    },
    {
      code: '940',
      index: 1228,
      text: 'Post Sorter',
      enumType: 'PostSorter'
    },
    {
      code: '245',
      index: 1229,
      text: 'Postman',
      enumType: 'Postman'
    },
    {
      code: 'P23',
      index: 1230,
      text: 'Postman/Woman',
      enumType: 'PostmanWoman'
    },
    {
      code: 'B27',
      index: 1231,
      text: 'Postmaster',
      enumType: 'Postmaster'
    },
    {
      code: '246',
      index: 1232,
      text: 'Postwoman',
      enumType: 'Postwoman'
    },
    {
      code: '759',
      index: 1233,
      text: 'Potato Merchant',
      enumType: 'PotatoMerchant'
    },
    {
      code: 'P24',
      index: 1234,
      text: 'Potter',
      enumType: 'Potter'
    },
    {
      code: '445',
      index: 1235,
      text: 'Practice Manager',
      enumType: 'PracticeManager'
    },
    {
      code: '941',
      index: 1236,
      text: 'Preacher',
      enumType: 'Preacher'
    },
    {
      code: '446',
      index: 1237,
      text: 'Precision Engineer',
      enumType: 'PrecisionEngineer'
    },
    {
      code: 'B65',
      index: 1238,
      text: 'Premises Security Installers',
      enumType: 'PremisesSecurityInstallers'
    },
    {
      code: '576',
      index: 1239,
      text: 'Press Officer',
      enumType: 'PressOfficer'
    },
    {
      code: '510',
      index: 1240,
      text: 'Press Operator',
      enumType: 'PressOperator'
    },
    {
      code: '942',
      index: 1241,
      text: 'Press Setter',
      enumType: 'PressSetter'
    },
    {
      code: '943',
      index: 1242,
      text: 'Presser',
      enumType: 'Presser'
    },
    {
      code: '247',
      index: 1243,
      text: 'Priest',
      enumType: 'Priest'
    },
    {
      code: '248',
      index: 1244,
      text: 'Print Finisher',
      enumType: 'PrintFinisher'
    },
    {
      code: 'P25',
      index: 1245,
      text: 'Printer',
      enumType: 'Printer'
    },
    {
      code: '944',
      index: 1246,
      text: 'Prison Chaplain',
      enumType: 'PrisonChaplain'
    },
    {
      code: 'P26',
      index: 1247,
      text: 'Prison Officer',
      enumType: 'PrisonOfficer'
    },
    {
      code: '249',
      index: 1248,
      text: 'Private Investigator',
      enumType: 'PrivateInvestigator'
    },
    {
      code: 'P27',
      index: 1249,
      text: 'Probation Officer',
      enumType: 'ProbationOfficer'
    },
    {
      code: '945',
      index: 1250,
      text: 'Probation Worker',
      enumType: 'ProbationWorker'
    },
    {
      code: '485',
      index: 1251,
      text: 'Process Engineer',
      enumType: 'ProcessEngineer'
    },
    {
      code: '946',
      index: 1252,
      text: 'Process Operator',
      enumType: 'ProcessOperator'
    },
    {
      code: 'P28',
      index: 1253,
      text: 'Process Worker',
      enumType: 'ProcessWorker'
    },
    {
      code: '250',
      index: 1254,
      text: 'Procurator Fiscal',
      enumType: 'ProcuratorFiscal'
    },
    {
      code: '447',
      index: 1255,
      text: 'Produce Supervisor',
      enumType: 'ProduceSupervisor'
    },
    {
      code: 'P29',
      index: 1256,
      text: 'Producer',
      enumType: 'Producer'
    },
    {
      code: '948',
      index: 1257,
      text: 'Product Installer',
      enumType: 'ProductInstaller'
    },
    {
      code: '448',
      index: 1258,
      text: 'Product Manager',
      enumType: 'ProductManager'
    },
    {
      code: '449',
      index: 1259,
      text: 'Production Engineer',
      enumType: 'ProductionEngineer'
    },
    {
      code: '949',
      index: 1260,
      text: 'Production Hand',
      enumType: 'ProductionHand'
    },
    {
      code: 'M52',
      index: 1261,
      text: 'Production Manager',
      enumType: 'ProductionManager'
    },
    {
      code: '542',
      index: 1262,
      text: 'Production Planner',
      enumType: 'ProductionPlanner'
    },
    {
      code: 'P30',
      index: 1263,
      text: 'Professional Boxer',
      enumType: 'ProfessionalBoxer'
    },
    {
      code: 'P31',
      index: 1264,
      text: 'Professional Racing Driver',
      enumType: 'ProfessionalRacingDriver'
    },
    {
      code: 'P32',
      index: 1265,
      text: 'Professional Racing Motorcyclist',
      enumType: 'ProfessionalRacingMotorcyclist'
    },
    {
      code: 'P33',
      index: 1266,
      text: 'Professional Sportsperson',
      enumType: 'ProfessionalSportsperson'
    },
    {
      code: 'P34',
      index: 1267,
      text: 'Professional Wrestler',
      enumType: 'ProfessionalWrestler'
    },
    {
      code: '251',
      index: 1268,
      text: 'Professor',
      enumType: 'Professor'
    },
    {
      code: '950',
      index: 1269,
      text: 'Progress Chaser',
      enumType: 'ProgressChaser'
    },
    {
      code: '252',
      index: 1270,
      text: 'Progress Clerk',
      enumType: 'ProgressClerk'
    },
    {
      code: '951',
      index: 1271,
      text: 'Project Co-ordinator',
      enumType: 'ProjectCoordinator'
    },
    {
      code: '253',
      index: 1272,
      text: 'Project Engineer',
      enumType: 'ProjectEngineer'
    },
    {
      code: '577',
      index: 1273,
      text: 'Project Leader',
      enumType: 'ProjectLeader'
    },
    {
      code: '254',
      index: 1274,
      text: 'Project Manager',
      enumType: 'ProjectManager'
    },
    {
      code: '952',
      index: 1275,
      text: 'Project Worker',
      enumType: 'ProjectWorker'
    },
    {
      code: 'P35',
      index: 1276,
      text: 'Projectionist',
      enumType: 'Projectionist'
    },
    {
      code: 'P36',
      index: 1277,
      text: 'Promoter',
      enumType: 'Promoter'
    },
    {
      code: 'P37',
      index: 1278,
      text: 'Promoter - Racing',
      enumType: 'PromoterRacing'
    },
    {
      code: 'P38',
      index: 1279,
      text: 'Promoter - Ring Sports',
      enumType: 'PromoterRingSports'
    },
    {
      code: '511',
      index: 1280,
      text: 'Proof Reader',
      enumType: 'ProofReader'
    },
    {
      code: '255',
      index: 1281,
      text: 'Property Buyer',
      enumType: 'PropertyBuyer'
    },
    {
      code: '256',
      index: 1282,
      text: 'Property Dealer',
      enumType: 'PropertyDealer'
    },
    {
      code: 'P49',
      index: 1283,
      text: 'Property Developer',
      enumType: 'PropertyDeveloper'
    },
    {
      code: '257',
      index: 1284,
      text: 'Property Manager',
      enumType: 'PropertyManager'
    },
    {
      code: '258',
      index: 1285,
      text: 'Property Valuer',
      enumType: 'PropertyValuer'
    },
    {
      code: '259',
      index: 1286,
      text: 'Proprietor',
      enumType: 'Proprietor'
    },
    {
      code: 'P51',
      index: 1287,
      text: 'Prosthetist',
      enumType: 'Prosthetist'
    },
    {
      code: '260',
      index: 1288,
      text: 'Psychiatrist',
      enumType: 'Psychiatrist'
    },
    {
      code: 'A90',
      index: 1289,
      text: 'Psychoanalyst',
      enumType: 'Psychoanalyst'
    },
    {
      code: '261',
      index: 1290,
      text: 'Psychologist',
      enumType: 'Psychologist'
    },
    {
      code: '262',
      index: 1291,
      text: 'Psychotherapist',
      enumType: 'Psychotherapist'
    },
    {
      code: '953',
      index: 1292,
      text: 'Psycodynamic Counsellor',
      enumType: 'PsycodynamicCounsellor'
    },
    {
      code: '486',
      index: 1293,
      text: 'Public House Manager',
      enumType: 'PublicHouseManager'
    },
    {
      code: 'P39',
      index: 1294,
      text: 'Public Relations Officer',
      enumType: 'PublicRelationsOfficer'
    },
    {
      code: 'P42',
      index: 1295,
      text: 'Publican',
      enumType: 'Publican'
    },
    {
      code: '450',
      index: 1296,
      text: 'Publicity Manager',
      enumType: 'PublicityManager'
    },
    {
      code: 'P40',
      index: 1297,
      text: 'Publisher',
      enumType: 'Publisher'
    },
    {
      code: '760',
      index: 1298,
      text: 'Publishing Manager',
      enumType: 'PublishingManager'
    },
    {
      code: '954',
      index: 1299,
      text: 'Purchase Clerk',
      enumType: 'PurchaseClerk'
    },
    {
      code: '955',
      index: 1300,
      text: 'Purchase Ledger Clerk',
      enumType: 'PurchaseLedgerClerk'
    },
    {
      code: '578',
      index: 1301,
      text: 'Purchasing Assistant',
      enumType: 'PurchasingAssistant'
    },
    {
      code: '956',
      index: 1302,
      text: 'Purchasing Manager',
      enumType: 'PurchasingManager'
    },
    {
      code: '263',
      index: 1303,
      text: 'Purser',
      enumType: 'Purser'
    },
    {
      code: 'Q01',
      index: 1304,
      text: 'Quality Controller',
      enumType: 'QualityController'
    },
    {
      code: '543',
      index: 1305,
      text: 'Quality Engineer',
      enumType: 'QualityEngineer'
    },
    {
      code: '957',
      index: 1306,
      text: 'Quality Inspector',
      enumType: 'QualityInspector'
    },
    {
      code: '544',
      index: 1307,
      text: 'Quality Manager',
      enumType: 'QualityManager'
    },
    {
      code: '545',
      index: 1308,
      text: 'Quality Technician',
      enumType: 'QualityTechnician'
    },
    {
      code: 'Q02',
      index: 1309,
      text: 'Quantity Surveyor',
      enumType: 'QuantitySurveyor'
    },
    {
      code: '264',
      index: 1310,
      text: 'Quarry Worker',
      enumType: 'QuarryWorker'
    },
    {
      code: '265',
      index: 1311,
      text: 'Queens Council',
      enumType: 'QueensCouncil'
    },
    {
      code: '266',
      index: 1312,
      text: 'Rabbi',
      enumType: 'Rabbi'
    },
    {
      code: '761',
      index: 1313,
      text: 'Racehorse Groom',
      enumType: 'RacehorseGroom'
    },
    {
      code: 'R01',
      index: 1314,
      text: 'Racing Organiser',
      enumType: 'RacingOrganiser'
    },
    {
      code: '762',
      index: 1315,
      text: 'Radio Controller',
      enumType: 'RadioController'
    },
    {
      code: '267',
      index: 1316,
      text: 'Radio Director',
      enumType: 'RadioDirector'
    },
    {
      code: '958',
      index: 1317,
      text: 'Radio Engineer',
      enumType: 'RadioEngineer'
    },
    {
      code: '579',
      index: 1318,
      text: 'Radio Operator',
      enumType: 'RadioOperator'
    },
    {
      code: '268',
      index: 1319,
      text: 'Radio Presenter',
      enumType: 'RadioPresenter'
    },
    {
      code: '269',
      index: 1320,
      text: 'Radio Producer',
      enumType: 'RadioProducer'
    },
    {
      code: 'R02',
      index: 1321,
      text: 'Radiographer',
      enumType: 'Radiographer'
    },
    {
      code: '451',
      index: 1322,
      text: 'Radiologist',
      enumType: 'Radiologist'
    },
    {
      code: 'R03',
      index: 1323,
      text: 'Railway Staff',
      enumType: 'RailwayStaff'
    },
    {
      code: '959',
      index: 1324,
      text: 'Rally Driver',
      enumType: 'RallyDriver'
    },
    {
      code: '960',
      index: 1325,
      text: 'Ramp Agent',
      enumType: 'RampAgent'
    },
    {
      code: 'R14',
      index: 1326,
      text: 'Re-Settlement Officer',
      enumType: 'ReSettlementOfficer'
    },
    {
      code: 'R04',
      index: 1327,
      text: 'Receptionist',
      enumType: 'Receptionist'
    },
    {
      code: '961',
      index: 1328,
      text: 'Records Supervisor',
      enumType: 'RecordsSupervisor'
    },
    {
      code: '962',
      index: 1329,
      text: 'Recovery Vehicle Co-ordinator',
      enumType: 'RecoveryVehicleCoordinator'
    },
    {
      code: 'R13',
      index: 1330,
      text: 'Recruitment Consultant',
      enumType: 'RecruitmentConsultant'
    },
    {
      code: '270',
      index: 1331,
      text: 'Rector',
      enumType: 'Rector'
    },
    {
      code: 'R15',
      index: 1332,
      text: 'Referee',
      enumType: 'Referee'
    },
    {
      code: '494',
      index: 1333,
      text: 'Refit Merchandiser',
      enumType: 'RefitMerchandiser'
    },
    {
      code: '764',
      index: 1334,
      text: 'Reflexologist',
      enumType: 'Reflexologist'
    },
    {
      code: '963',
      index: 1335,
      text: 'Refractory Engineer',
      enumType: 'RefractoryEngineer'
    },
    {
      code: '763',
      index: 1336,
      text: 'Refrigeration Engineer',
      enumType: 'RefrigerationEngineer'
    },
    {
      code: 'R05',
      index: 1337,
      text: 'Refuse Collector',
      enumType: 'RefuseCollector'
    },
    {
      code: 'R06',
      index: 1338,
      text: 'Registrar',
      enumType: 'Registrar'
    },
    {
      code: '964',
      index: 1339,
      text: 'Regulator',
      enumType: 'Regulator'
    },
    {
      code: '965',
      index: 1340,
      text: 'Relocation Agent',
      enumType: 'RelocationAgent'
    },
    {
      code: '966',
      index: 1341,
      text: 'Remedial Therapist',
      enumType: 'RemedialTherapist'
    },
    {
      code: '765',
      index: 1342,
      text: 'Rent Collector',
      enumType: 'RentCollector'
    },
    {
      code: 'D67',
      index: 1343,
      text: 'Rent Officer',
      enumType: 'RentOfficer'
    },
    {
      code: '967',
      index: 1344,
      text: 'Repair Man',
      enumType: 'RepairMan'
    },
    {
      code: 'R07',
      index: 1345,
      text: 'Reporter',
      enumType: 'Reporter'
    },
    {
      code: '968',
      index: 1346,
      text: 'Reprographic Assistant',
      enumType: 'ReprographicAssistant'
    },
    {
      code: '969',
      index: 1347,
      text: 'Research Analyst',
      enumType: 'ResearchAnalyst'
    },
    {
      code: 'C65',
      index: 1348,
      text: 'Research Consultant',
      enumType: 'ResearchConsultant'
    },
    {
      code: '452',
      index: 1349,
      text: 'Research Director',
      enumType: 'ResearchDirector'
    },
    {
      code: '487',
      index: 1350,
      text: 'Research Scientist',
      enumType: 'ResearchScientist'
    },
    {
      code: '453',
      index: 1351,
      text: 'Research Technician',
      enumType: 'ResearchTechnician'
    },
    {
      code: 'R08',
      index: 1352,
      text: 'Researcher',
      enumType: 'Researcher'
    },
    {
      code: 'A81',
      index: 1353,
      text: 'Resin Caster',
      enumType: 'ResinCaster'
    },
    {
      code: '271',
      index: 1354,
      text: 'Restaurant Manager',
      enumType: 'RestaurantManager'
    },
    {
      code: '272',
      index: 1355,
      text: 'Restaurateur',
      enumType: 'Restaurateur'
    },
    {
      code: '273',
      index: 1356,
      text: 'Restorer',
      enumType: 'Restorer'
    },
    {
      code: 'R09',
      index: 1357,
      text: 'Retired',
      enumType: 'Retired'
    },
    {
      code: '970',
      index: 1358,
      text: 'Revenue Clerk',
      enumType: 'RevenueClerk'
    },
    {
      code: '454',
      index: 1359,
      text: 'Revenue Officer',
      enumType: 'RevenueOfficer'
    },
    {
      code: '274',
      index: 1360,
      text: 'Riding Instructor',
      enumType: 'RidingInstructor'
    },
    {
      code: 'R10',
      index: 1361,
      text: 'Rig Worker',
      enumType: 'RigWorker'
    },
    {
      code: 'R11',
      index: 1362,
      text: 'Rig Worker - Off Shore',
      enumType: 'RigWorkerOffShore'
    },
    {
      code: '275',
      index: 1363,
      text: 'Rigger',
      enumType: 'Rigger'
    },
    {
      code: '276',
      index: 1364,
      text: 'Riveter',
      enumType: 'Riveter'
    },
    {
      code: 'B28',
      index: 1365,
      text: 'Road Safety Officer',
      enumType: 'RoadSafetyOfficer'
    },
    {
      code: '389',
      index: 1366,
      text: 'Road Sweeper',
      enumType: 'RoadSweeper'
    },
    {
      code: '277',
      index: 1367,
      text: 'Road Worker',
      enumType: 'RoadWorker'
    },
    {
      code: '580',
      index: 1368,
      text: 'Roof Tiler',
      enumType: 'RoofTiler'
    },
    {
      code: 'R12',
      index: 1369,
      text: 'Roofer',
      enumType: 'Roofer'
    },
    {
      code: '971',
      index: 1370,
      text: 'Rose Grower',
      enumType: 'RoseGrower'
    },
    {
      code: '278',
      index: 1371,
      text: 'Royal Marine',
      enumType: 'RoyalMarine'
    },
    {
      code: 'C66',
      index: 1372,
      text: 'Rug Maker',
      enumType: 'RugMaker'
    },
    {
      code: '279',
      index: 1373,
      text: 'Saddler',
      enumType: 'Saddler'
    },
    {
      code: '512',
      index: 1374,
      text: 'Safety Officer',
      enumType: 'SafetyOfficer'
    },
    {
      code: '280',
      index: 1375,
      text: 'Sail Maker',
      enumType: 'SailMaker'
    },
    {
      code: 'S01',
      index: 1376,
      text: 'Sales - Non Travelling',
      enumType: 'SalesNonTravelling'
    },
    {
      code: 'S03',
      index: 1377,
      text: 'Sales - Travelling',
      enumType: 'SalesTravelling'
    },
    {
      code: '455',
      index: 1378,
      text: 'Sales Administrator',
      enumType: 'SalesAdministrator'
    },
    {
      code: 'S04',
      index: 1379,
      text: 'Sales Assistant',
      enumType: 'SalesAssistant'
    },
    {
      code: '456',
      index: 1380,
      text: 'Sales Director',
      enumType: 'SalesDirector'
    },
    {
      code: 'E18',
      index: 1381,
      text: 'Sales Engineer',
      enumType: 'SalesEngineer'
    },
    {
      code: '281',
      index: 1382,
      text: 'Sales Executive',
      enumType: 'SalesExecutive'
    },
    {
      code: '282',
      index: 1383,
      text: 'Sales Manager',
      enumType: 'SalesManager'
    },
    {
      code: '283',
      index: 1384,
      text: 'Sales Representative',
      enumType: 'SalesRepresentative'
    },
    {
      code: '457',
      index: 1385,
      text: 'Sales Support',
      enumType: 'SalesSupport'
    },
    {
      code: 'D73',
      index: 1386,
      text: 'Sales Woman',
      enumType: 'SalesWoman'
    },
    {
      code: '284',
      index: 1387,
      text: 'Salesman',
      enumType: 'Salesman'
    },
    {
      code: '285',
      index: 1388,
      text: 'Sand Blaster',
      enumType: 'SandBlaster'
    },
    {
      code: '286',
      index: 1389,
      text: 'Saw Miller',
      enumType: 'SawMiller'
    },
    {
      code: 'S05',
      index: 1390,
      text: 'Scaffolder',
      enumType: 'Scaffolder'
    },
    {
      code: '458',
      index: 1391,
      text: 'School Crossing Warden',
      enumType: 'SchoolCrossingWarden'
    },
    {
      code: 'B68',
      index: 1392,
      text: 'School Inspector',
      enumType: 'SchoolInspector'
    },
    {
      code: '766',
      index: 1393,
      text: 'Scientific Officer',
      enumType: 'ScientificOfficer'
    },
    {
      code: 'S06',
      index: 1394,
      text: 'Scientist',
      enumType: 'Scientist'
    },
    {
      code: '287',
      index: 1395,
      text: 'Scrap Dealer',
      enumType: 'ScrapDealer'
    },
    {
      code: '288',
      index: 1396,
      text: 'Screen Printer',
      enumType: 'ScreenPrinter'
    },
    {
      code: '289',
      index: 1397,
      text: 'Screen Writer',
      enumType: 'ScreenWriter'
    },
    {
      code: 'S07',
      index: 1398,
      text: 'Script Writer',
      enumType: 'ScriptWriter'
    },
    {
      code: 'S08',
      index: 1399,
      text: 'Sculptor',
      enumType: 'Sculptor'
    },
    {
      code: '290',
      index: 1400,
      text: 'Seaman',
      enumType: 'Seaman'
    },
    {
      code: '291',
      index: 1401,
      text: 'Seamstress',
      enumType: 'Seamstress'
    },
    {
      code: '292',
      index: 1402,
      text: 'Second Hand Dealer',
      enumType: 'SecondHandDealer'
    },
    {
      code: 'S09',
      index: 1403,
      text: 'Secretary',
      enumType: 'Secretary'
    },
    {
      code: '459',
      index: 1404,
      text: 'Secretary And PA',
      enumType: 'SecretaryAndPA'
    },
    {
      code: 'C67',
      index: 1405,
      text: 'Security Consultant',
      enumType: 'SecurityConsultant'
    },
    {
      code: '546',
      index: 1406,
      text: 'Security Controller',
      enumType: 'SecurityController'
    },
    {
      code: 'S10',
      index: 1407,
      text: 'Security Guard',
      enumType: 'SecurityGuard'
    },
    {
      code: 'S11',
      index: 1408,
      text: 'Security Officer',
      enumType: 'SecurityOfficer'
    },
    {
      code: '293',
      index: 1409,
      text: 'Seedsman',
      enumType: 'Seedsman'
    },
    {
      code: 'S12',
      index: 1410,
      text: 'Semi-Professional Sportsperson',
      enumType: 'SemiProfessionalSportsperson'
    },
    {
      code: '294',
      index: 1411,
      text: 'Servant',
      enumType: 'Servant'
    },
    {
      code: 'E19',
      index: 1412,
      text: 'Service Engineer',
      enumType: 'ServiceEngineer'
    },
    {
      code: 'E20',
      index: 1413,
      text: 'Service Engineer (Non-Mobile)',
      enumType: 'ServiceEngineerNonMobile'
    },
    {
      code: '547',
      index: 1414,
      text: 'Service Manager',
      enumType: 'ServiceManager'
    },
    {
      code: '460',
      index: 1415,
      text: 'Share Dealer',
      enumType: 'ShareDealer'
    },
    {
      code: '295',
      index: 1416,
      text: 'Sheet Metal Worker',
      enumType: 'SheetMetalWorker'
    },
    {
      code: '296',
      index: 1417,
      text: 'Shelf Filler',
      enumType: 'ShelfFiller'
    },
    {
      code: '767',
      index: 1418,
      text: 'Shelter Warden',
      enumType: 'ShelterWarden'
    },
    {
      code: '297',
      index: 1419,
      text: 'Shepherd',
      enumType: 'Shepherd'
    },
    {
      code: '298',
      index: 1420,
      text: 'Sheriff',
      enumType: 'Sheriff'
    },
    {
      code: '299',
      index: 1421,
      text: 'Sheriff Clerk',
      enumType: 'SheriffClerk'
    },
    {
      code: '300',
      index: 1422,
      text: 'Sheriff Principal',
      enumType: 'SheriffPrincipal'
    },
    {
      code: '301',
      index: 1423,
      text: 'Sheriffs Officer',
      enumType: 'SheriffsOfficer'
    },
    {
      code: '581',
      index: 1424,
      text: 'Shift Controller',
      enumType: 'ShiftController'
    },
    {
      code: 'B83',
      index: 1425,
      text: 'Ship Broker',
      enumType: 'ShipBroker'
    },
    {
      code: '302',
      index: 1426,
      text: 'Ship Builder',
      enumType: 'ShipBuilder'
    },
    {
      code: 'C23',
      index: 1427,
      text: 'Shipping Clerk',
      enumType: 'ShippingClerk'
    },
    {
      code: '488',
      index: 1428,
      text: 'Shipping Officer',
      enumType: 'ShippingOfficer'
    },
    {
      code: '303',
      index: 1429,
      text: 'Shipwright',
      enumType: 'Shipwright'
    },
    {
      code: 'S13',
      index: 1430,
      text: 'Shipyard Worker',
      enumType: 'ShipyardWorker'
    },
    {
      code: 'B69',
      index: 1431,
      text: 'Shoe Maker',
      enumType: 'ShoeMaker'
    },
    {
      code: '304',
      index: 1432,
      text: 'Shoe Repairer',
      enumType: 'ShoeRepairer'
    },
    {
      code: '768',
      index: 1433,
      text: 'Shooting Instructor',
      enumType: 'ShootingInstructor'
    },
    {
      code: 'S14',
      index: 1434,
      text: 'Shop Assistant',
      enumType: 'ShopAssistant'
    },
    {
      code: 'S17',
      index: 1435,
      text: 'Shop Fitter',
      enumType: 'ShopFitter'
    },
    {
      code: '305',
      index: 1436,
      text: 'Shop Keeper',
      enumType: 'ShopKeeper'
    },
    {
      code: '306',
      index: 1437,
      text: 'Shop Manager',
      enumType: 'ShopManager'
    },
    {
      code: 'S15',
      index: 1438,
      text: 'Shop Proprietor',
      enumType: 'ShopProprietor'
    },
    {
      code: 'S16',
      index: 1439,
      text: 'Shop Proprietor - Mobile',
      enumType: 'ShopProprietorMobile'
    },
    {
      code: '307',
      index: 1440,
      text: 'Shot Blaster',
      enumType: 'ShotBlaster'
    },
    {
      code: 'B72',
      index: 1441,
      text: 'Show Jumper',
      enumType: 'ShowJumper'
    },
    {
      code: 'S39',
      index: 1442,
      text: 'Showman',
      enumType: 'Showman'
    },
    {
      code: '308',
      index: 1443,
      text: 'Shunter',
      enumType: 'Shunter'
    },
    {
      code: 'A82',
      index: 1444,
      text: 'Sign Maker',
      enumType: 'SignMaker'
    },
    {
      code: '309',
      index: 1445,
      text: 'Signalman',
      enumType: 'Signalman'
    },
    {
      code: 'S18',
      index: 1446,
      text: 'Signwriter',
      enumType: 'Signwriter'
    },
    {
      code: '548',
      index: 1447,
      text: 'Site Agent',
      enumType: 'SiteAgent'
    },
    {
      code: '461',
      index: 1448,
      text: 'Site Engineer',
      enumType: 'SiteEngineer'
    },
    {
      code: '549',
      index: 1449,
      text: 'Skipper',
      enumType: 'Skipper'
    },
    {
      code: '310',
      index: 1450,
      text: 'Slater',
      enumType: 'Slater'
    },
    {
      code: '311',
      index: 1451,
      text: 'Slaughterman',
      enumType: 'Slaughterman'
    },
    {
      code: '312',
      index: 1452,
      text: 'Smallholder',
      enumType: 'Smallholder'
    },
    {
      code: 'S19',
      index: 1453,
      text: 'Social Worker',
      enumType: 'SocialWorker'
    },
    {
      code: '462',
      index: 1454,
      text: 'Software Consultant',
      enumType: 'SoftwareConsultant'
    },
    {
      code: '463',
      index: 1455,
      text: 'Software Engineer',
      enumType: 'SoftwareEngineer'
    },
    {
      code: '313',
      index: 1456,
      text: 'Soldier',
      enumType: 'Soldier'
    },
    {
      code: 'S20',
      index: 1457,
      text: 'Solicitor',
      enumType: 'Solicitor'
    },
    {
      code: '314',
      index: 1458,
      text: 'Song Writer',
      enumType: 'SongWriter'
    },
    {
      code: 'S21',
      index: 1459,
      text: 'Sorter',
      enumType: 'Sorter'
    },
    {
      code: '315',
      index: 1460,
      text: 'Sound Engineer',
      enumType: 'SoundEngineer'
    },
    {
      code: '550',
      index: 1461,
      text: 'Sound Technician',
      enumType: 'SoundTechnician'
    },
    {
      code: '769',
      index: 1462,
      text: 'Special Constable',
      enumType: 'SpecialConstable'
    },
    {
      code: 'B32',
      index: 1463,
      text: 'Special Needs Assistant',
      enumType: 'SpecialNeedsAssistant'
    },
    {
      code: '316',
      index: 1464,
      text: 'Speech Therapist',
      enumType: 'SpeechTherapist'
    },
    {
      code: 'S22',
      index: 1465,
      text: 'Sports Administrator - Other Sports',
      enumType: 'SportsAdministratorOtherSports'
    },
    {
      code: 'S23',
      index: 1466,
      text: 'Sports Administrator - Ring Sports',
      enumType: 'SportsAdministratorRingSports'
    },
    {
      code: 'S40',
      index: 1467,
      text: 'Sports Centre Attendant',
      enumType: 'SportsCentreAttendant'
    },
    {
      code: '317',
      index: 1468,
      text: 'Sports Coach',
      enumType: 'SportsCoach'
    },
    {
      code: '770',
      index: 1469,
      text: 'Sports Commentator',
      enumType: 'SportsCommentator'
    },
    {
      code: '318',
      index: 1470,
      text: 'Sportsman',
      enumType: 'Sportsman'
    },
    {
      code: '319',
      index: 1471,
      text: 'Sportswoman',
      enumType: 'Sportswoman'
    },
    {
      code: '582',
      index: 1472,
      text: 'Spring Maker',
      enumType: 'SpringMaker'
    },
    {
      code: 'S24',
      index: 1473,
      text: 'Stable Hand',
      enumType: 'StableHand'
    },
    {
      code: '489',
      index: 1474,
      text: 'Staff Nurse',
      enumType: 'StaffNurse'
    },
    {
      code: '320',
      index: 1475,
      text: 'Stage Director',
      enumType: 'StageDirector'
    },
    {
      code: '321',
      index: 1476,
      text: 'Stage Hand',
      enumType: 'StageHand'
    },
    {
      code: '322',
      index: 1477,
      text: 'Stage Manager',
      enumType: 'StageManager'
    },
    {
      code: '323',
      index: 1478,
      text: 'Stage Mover',
      enumType: 'StageMover'
    },
    {
      code: 'M20',
      index: 1479,
      text: 'Station Manager',
      enumType: 'StationManager'
    },
    {
      code: 'S43',
      index: 1480,
      text: 'Stationer',
      enumType: 'Stationer'
    },
    {
      code: 'S25',
      index: 1481,
      text: 'Statistician',
      enumType: 'Statistician'
    },
    {
      code: '324',
      index: 1482,
      text: 'Steel Erector',
      enumType: 'SteelErector'
    },
    {
      code: 'S41',
      index: 1483,
      text: 'Steel Worker',
      enumType: 'SteelWorker'
    },
    {
      code: 'S26',
      index: 1484,
      text: 'Steeplejack',
      enumType: 'Steeplejack'
    },
    {
      code: '513',
      index: 1485,
      text: 'Stenographer',
      enumType: 'Stenographer'
    },
    {
      code: 'S27',
      index: 1486,
      text: 'Stevedore',
      enumType: 'Stevedore'
    },
    {
      code: '325',
      index: 1487,
      text: 'Steward',
      enumType: 'Steward'
    },
    {
      code: 'S28',
      index: 1488,
      text: 'Steward/Stewardess',
      enumType: 'StewardStewardess'
    },
    {
      code: '326',
      index: 1489,
      text: 'Stewardess',
      enumType: 'Stewardess'
    },
    {
      code: 'S29',
      index: 1490,
      text: 'Stock Controller',
      enumType: 'StockController'
    },
    {
      code: '551',
      index: 1491,
      text: 'Stock Manager',
      enumType: 'StockManager'
    },
    {
      code: 'S30',
      index: 1492,
      text: 'Stockbroker',
      enumType: 'Stockbroker'
    },
    {
      code: '327',
      index: 1493,
      text: 'Stockman',
      enumType: 'Stockman'
    },
    {
      code: '771',
      index: 1494,
      text: 'Stocktaker',
      enumType: 'Stocktaker'
    },
    {
      code: '552',
      index: 1495,
      text: 'Stone Cutter',
      enumType: 'StoneCutter'
    },
    {
      code: 'B77',
      index: 1496,
      text: 'Stone Sawyer',
      enumType: 'StoneSawyer'
    },
    {
      code: 'S31',
      index: 1497,
      text: 'Stonemason',
      enumType: 'Stonemason'
    },
    {
      code: '587',
      index: 1498,
      text: 'Store Detective',
      enumType: 'StoreDetective'
    },
    {
      code: '328',
      index: 1499,
      text: 'Storeman',
      enumType: 'Storeman'
    },
    {
      code: 'S32',
      index: 1500,
      text: 'Storeman/Woman',
      enumType: 'StoremanWoman'
    },
    {
      code: '329',
      index: 1501,
      text: 'Storewoman',
      enumType: 'Storewoman'
    },
    {
      code: 'D71',
      index: 1502,
      text: 'Street Entertainer',
      enumType: 'StreetEntertainer'
    },
    {
      code: 'S33',
      index: 1503,
      text: 'Street Trader',
      enumType: 'StreetTrader'
    },
    {
      code: '330',
      index: 1504,
      text: 'Stud Hand',
      enumType: 'StudHand'
    },
    {
      code: 'S34',
      index: 1505,
      text: 'Student',
      enumType: 'Student'
    },
    {
      code: 'S35',
      index: 1506,
      text: 'Student - Foreign',
      enumType: 'StudentForeign'
    },
    {
      code: 'N04',
      index: 1507,
      text: 'Student Nurse',
      enumType: 'StudentNurse'
    },
    {
      code: '331',
      index: 1508,
      text: 'Student Teacher',
      enumType: 'StudentTeacher'
    },
    {
      code: '553',
      index: 1509,
      text: 'Studio Manager',
      enumType: 'StudioManager'
    },
    {
      code: 'B33',
      index: 1510,
      text: 'Sub-Postmaster',
      enumType: 'SubPostmaster'
    },
    {
      code: '583',
      index: 1511,
      text: 'Sub-Postmistress',
      enumType: 'SubPostmistress'
    },
    {
      code: 'S42',
      index: 1512,
      text: 'Supervisor',
      enumType: 'Supervisor'
    },
    {
      code: '514',
      index: 1513,
      text: 'Supply Teacher',
      enumType: 'SupplyTeacher'
    },
    {
      code: 'S36',
      index: 1514,
      text: 'Surgeon',
      enumType: 'Surgeon'
    },
    {
      code: 'S37',
      index: 1515,
      text: 'Surveyor',
      enumType: 'Surveyor'
    },
    {
      code: 'S38',
      index: 1516,
      text: 'Surveyor - Chartered',
      enumType: 'SurveyorChartered'
    },
    {
      code: '332',
      index: 1517,
      text: 'Systems Analyst',
      enumType: 'SystemsAnalyst'
    },
    {
      code: '584',
      index: 1518,
      text: 'Systems Engineer',
      enumType: 'SystemsEngineer'
    },
    {
      code: '464',
      index: 1519,
      text: 'Systems Manager',
      enumType: 'SystemsManager'
    },
    {
      code: 'C68',
      index: 1520,
      text: 'T-Shirt Printer',
      enumType: 'ShirtPrinter'
    },
    {
      code: 'C86',
      index: 1521,
      text: 'Tachograph Analyst',
      enumType: 'TachographAnalyst'
    },
    {
      code: '554',
      index: 1522,
      text: 'Tacker',
      enumType: 'Tacker'
    },
    {
      code: 'T01',
      index: 1523,
      text: 'Tailor',
      enumType: 'Tailor'
    },
    {
      code: 'B88',
      index: 1524,
      text: 'Tank Farm Operative',
      enumType: 'TankFarmOperative'
    },
    {
      code: '976',
      index: 1525,
      text: 'Tanker Driver',
      enumType: 'TankerDriver'
    },
    {
      code: '333',
      index: 1526,
      text: 'Tanner',
      enumType: 'Tanner'
    },
    {
      code: '977',
      index: 1527,
      text: 'Tarmacer',
      enumType: 'Tarmacer'
    },
    {
      code: 'D74',
      index: 1528,
      text: 'Tarot Reader/Palmistry Expert',
      enumType: 'TarotReaderPalmistryExpert'
    },
    {
      code: '772',
      index: 1529,
      text: 'Tattooist',
      enumType: 'Tattooist'
    },
    {
      code: '978',
      index: 1530,
      text: 'Tax Advisor',
      enumType: 'TaxAdvisor'
    },
    {
      code: '490',
      index: 1531,
      text: 'Tax Analyst',
      enumType: 'TaxAnalyst'
    },
    {
      code: '979',
      index: 1532,
      text: 'Tax Assistant',
      enumType: 'TaxAssistant'
    },
    {
      code: '334',
      index: 1533,
      text: 'Tax Consultant',
      enumType: 'TaxConsultant'
    },
    {
      code: 'I08',
      index: 1534,
      text: 'Tax Inspector',
      enumType: 'TaxInspector'
    },
    {
      code: '980',
      index: 1535,
      text: 'Tax Manager',
      enumType: 'TaxManager'
    },
    {
      code: '981',
      index: 1536,
      text: 'Tax Officer',
      enumType: 'TaxOfficer'
    },
    {
      code: '982',
      index: 1537,
      text: 'Taxi Controller',
      enumType: 'TaxiController'
    },
    {
      code: 'D34',
      index: 1538,
      text: 'Taxi Driver',
      enumType: 'TaxiDriver'
    },
    {
      code: 'T02',
      index: 1539,
      text: 'Taxidermist',
      enumType: 'Taxidermist'
    },
    {
      code: '335',
      index: 1540,
      text: 'Tea Blender',
      enumType: 'TeaBlender'
    },
    {
      code: '336',
      index: 1541,
      text: 'Tea Taster',
      enumType: 'TeaTaster'
    },
    {
      code: 'T03',
      index: 1542,
      text: 'Teacher',
      enumType: 'Teacher'
    },
    {
      code: '465',
      index: 1543,
      text: 'Teachers Assistant',
      enumType: 'TeachersAssistant'
    },
    {
      code: '983',
      index: 1544,
      text: 'Technical Advisor',
      enumType: 'TechnicalAdvisor'
    },
    {
      code: '984',
      index: 1545,
      text: 'Technical Analyst',
      enumType: 'TechnicalAnalyst'
    },
    {
      code: '985',
      index: 1546,
      text: 'Technical Assistant',
      enumType: 'TechnicalAssistant'
    },
    {
      code: '337',
      index: 1547,
      text: 'Technical Author',
      enumType: 'TechnicalAuthor'
    },
    {
      code: '986',
      index: 1548,
      text: 'Technical Clerk',
      enumType: 'TechnicalClerk'
    },
    {
      code: '987',
      index: 1549,
      text: 'Technical Co-ordinator',
      enumType: 'TechnicalCoordinator'
    },
    {
      code: '988',
      index: 1550,
      text: 'Technical Director',
      enumType: 'TechnicalDirector'
    },
    {
      code: '989',
      index: 1551,
      text: 'Technical Editor',
      enumType: 'TechnicalEditor'
    },
    {
      code: '990',
      index: 1552,
      text: 'Technical Engineer',
      enumType: 'TechnicalEngineer'
    },
    {
      code: '773',
      index: 1553,
      text: 'Technical Illustrator',
      enumType: 'TechnicalIllustrator'
    },
    {
      code: '774',
      index: 1554,
      text: 'Technical Instructor',
      enumType: 'TechnicalInstructor'
    },
    {
      code: '991',
      index: 1555,
      text: 'Technical Liaison Engineer',
      enumType: 'TechnicalLiaisonEngineer'
    },
    {
      code: '992',
      index: 1556,
      text: 'Technical Manager',
      enumType: 'TechnicalManager'
    },
    {
      code: 'T04',
      index: 1557,
      text: 'Technician - Performing Arts',
      enumType: 'TechnicianPerformingArts'
    },
    {
      code: 'D65',
      index: 1558,
      text: 'Telecommunication Consultant',
      enumType: 'TelecommunicationConsultant'
    },
    {
      code: '338',
      index: 1559,
      text: 'Telecommunications Engineer',
      enumType: 'TelecommunicationsEngineer'
    },
    {
      code: '993',
      index: 1560,
      text: 'Telecommunications Manager',
      enumType: 'TelecommunicationsManager'
    },
    {
      code: '994',
      index: 1561,
      text: 'Telegraphist',
      enumType: 'Telegraphist'
    },
    {
      code: '995',
      index: 1562,
      text: 'Telemarketeer',
      enumType: 'Telemarketeer'
    },
    {
      code: '339',
      index: 1563,
      text: 'Telephone Engineer',
      enumType: 'TelephoneEngineer'
    },
    {
      code: 'T05',
      index: 1564,
      text: 'Telephonist',
      enumType: 'Telephonist'
    },
    {
      code: 'S02',
      index: 1565,
      text: 'Telesales Person',
      enumType: 'TelesalesPerson'
    },
    {
      code: '340',
      index: 1566,
      text: 'Television Director',
      enumType: 'TelevisionDirector'
    },
    {
      code: '341',
      index: 1567,
      text: 'Television Engineer',
      enumType: 'TelevisionEngineer'
    },
    {
      code: '342',
      index: 1568,
      text: 'Television Presenter',
      enumType: 'TelevisionPresenter'
    },
    {
      code: '343',
      index: 1569,
      text: 'Television Producer',
      enumType: 'TelevisionProducer'
    },
    {
      code: '775',
      index: 1570,
      text: 'Telex Operator',
      enumType: 'TelexOperator'
    },
    {
      code: '996',
      index: 1571,
      text: 'Temperature Time Recorder',
      enumType: 'TemperatureTimeRecorder'
    },
    {
      code: '997',
      index: 1572,
      text: 'Tennis Coach',
      enumType: 'TennisCoach'
    },
    {
      code: 'D86',
      index: 1573,
      text: 'Terrier',
      enumType: 'Terrier'
    },
    {
      code: '998',
      index: 1574,
      text: 'Textile Consultant',
      enumType: 'TextileConsultant'
    },
    {
      code: '999',
      index: 1575,
      text: 'Textile Engineer',
      enumType: 'TextileEngineer'
    },
    {
      code: 'A35',
      index: 1576,
      text: 'Textile Technician',
      enumType: 'TextileTechnician'
    },
    {
      code: 'T06',
      index: 1577,
      text: 'Textile Worker',
      enumType: 'TextileWorker'
    },
    {
      code: '344',
      index: 1578,
      text: 'Thatcher',
      enumType: 'Thatcher'
    },
    {
      code: '345',
      index: 1579,
      text: 'Theatre Manager',
      enumType: 'TheatreManager'
    },
    {
      code: 'A36',
      index: 1580,
      text: 'Theatre Technician',
      enumType: 'TheatreTechnician'
    },
    {
      code: '346',
      index: 1581,
      text: 'Theatrical Agent',
      enumType: 'TheatricalAgent'
    },
    {
      code: '466',
      index: 1582,
      text: 'Therapist',
      enumType: 'Therapist'
    },
    {
      code: '491',
      index: 1583,
      text: 'Thermal Engineer',
      enumType: 'ThermalEngineer'
    },
    {
      code: 'A37',
      index: 1584,
      text: 'Thermal Insulator',
      enumType: 'ThermalInsulator'
    },
    {
      code: 'C88',
      index: 1585,
      text: 'Ticket Agent',
      enumType: 'TicketAgent'
    },
    {
      code: 'T07',
      index: 1586,
      text: 'Ticket Inspector',
      enumType: 'TicketInspector'
    },
    {
      code: 'T24',
      index: 1587,
      text: 'Tiler',
      enumType: 'Tiler'
    },
    {
      code: 'A38',
      index: 1588,
      text: 'Timber Inspector',
      enumType: 'TimberInspector'
    },
    {
      code: 'A39',
      index: 1589,
      text: 'Timber Worker',
      enumType: 'TimberWorker'
    },
    {
      code: 'T08',
      index: 1590,
      text: 'Tobacconist',
      enumType: 'Tobacconist'
    },
    {
      code: '972',
      index: 1591,
      text: 'Toll Collector',
      enumType: 'TollCollector'
    },
    {
      code: 'T09',
      index: 1592,
      text: 'Tool Maker',
      enumType: 'ToolMaker'
    },
    {
      code: '382',
      index: 1593,
      text: 'Tool Setter',
      enumType: 'ToolSetter'
    },
    {
      code: 'A40',
      index: 1594,
      text: 'Tour Agent',
      enumType: 'TourAgent'
    },
    {
      code: '347',
      index: 1595,
      text: 'Tour Guide',
      enumType: 'TourGuide'
    },
    {
      code: 'A41',
      index: 1596,
      text: 'Town Clerk',
      enumType: 'TownClerk'
    },
    {
      code: '467',
      index: 1597,
      text: 'Town Planner',
      enumType: 'TownPlanner'
    },
    {
      code: 'T10',
      index: 1598,
      text: 'Toy Maker',
      enumType: 'ToyMaker'
    },
    {
      code: 'A83',
      index: 1599,
      text: 'Toy Trader',
      enumType: 'ToyTrader'
    },
    {
      code: 'A42',
      index: 1600,
      text: 'Track Worker',
      enumType: 'TrackWorker'
    },
    {
      code: 'A43',
      index: 1601,
      text: 'Tractor Driver',
      enumType: 'TractorDriver'
    },
    {
      code: 'A44',
      index: 1602,
      text: 'Tractor Mechanic',
      enumType: 'TractorMechanic'
    },
    {
      code: 'A45',
      index: 1603,
      text: 'Trade Mark Agent',
      enumType: 'TradeMarkAgent'
    },
    {
      code: 'T23',
      index: 1604,
      text: 'Trade Union Official',
      enumType: 'TradeUnionOfficial'
    },
    {
      code: '348',
      index: 1605,
      text: 'Trading Standards Officer',
      enumType: 'TradingStandardsOfficer'
    },
    {
      code: 'A46',
      index: 1606,
      text: 'Traffic Clerk',
      enumType: 'TrafficClerk'
    },
    {
      code: 'A47',
      index: 1607,
      text: 'Traffic Engineer',
      enumType: 'TrafficEngineer'
    },
    {
      code: 'A48',
      index: 1608,
      text: 'Traffic Officer',
      enumType: 'TrafficOfficer'
    },
    {
      code: 'A49',
      index: 1609,
      text: 'Traffic Planner',
      enumType: 'TrafficPlanner'
    },
    {
      code: 'A50',
      index: 1610,
      text: 'Traffic Supervisor',
      enumType: 'TrafficSupervisor'
    },
    {
      code: 'T11',
      index: 1611,
      text: 'Traffic Warden',
      enumType: 'TrafficWarden'
    },
    {
      code: 'D35',
      index: 1612,
      text: 'Train Driver',
      enumType: 'TrainDriver'
    },
    {
      code: '555',
      index: 1613,
      text: 'Trainee Manager',
      enumType: 'TraineeManager'
    },
    {
      code: 'T12',
      index: 1614,
      text: 'Trainer',
      enumType: 'Trainer'
    },
    {
      code: 'T13',
      index: 1615,
      text: 'Trainer - Animal',
      enumType: 'TrainerAnimal'
    },
    {
      code: 'T14',
      index: 1616,
      text: 'Trainer - Greyhound',
      enumType: 'TrainerGreyhound'
    },
    {
      code: 'T15',
      index: 1617,
      text: 'Trainer - Race Horse',
      enumType: 'TrainerRaceHorse'
    },
    {
      code: 'A51',
      index: 1618,
      text: 'Training Advisor',
      enumType: 'TrainingAdvisor'
    },
    {
      code: 'A52',
      index: 1619,
      text: 'Training Assistant',
      enumType: 'TrainingAssistant'
    },
    {
      code: 'A54',
      index: 1620,
      text: 'Training Co-ordinator',
      enumType: 'TrainingCoordinator'
    },
    {
      code: 'A53',
      index: 1621,
      text: 'Training Consultant',
      enumType: 'TrainingConsultant'
    },
    {
      code: 'A55',
      index: 1622,
      text: 'Training Instructor',
      enumType: 'TrainingInstructor'
    },
    {
      code: '468',
      index: 1623,
      text: 'Training Manager',
      enumType: 'TrainingManager'
    },
    {
      code: 'T16',
      index: 1624,
      text: 'Training Officer',
      enumType: 'TrainingOfficer'
    },
    {
      code: 'A56',
      index: 1625,
      text: 'Transcriber',
      enumType: 'Transcriber'
    },
    {
      code: 'T17',
      index: 1626,
      text: 'Translator',
      enumType: 'Translator'
    },
    {
      code: 'A57',
      index: 1627,
      text: 'Transport Clerk',
      enumType: 'TransportClerk'
    },
    {
      code: 'A58',
      index: 1628,
      text: 'Transport Consultant',
      enumType: 'TransportConsultant'
    },
    {
      code: '469',
      index: 1629,
      text: 'Transport Controller',
      enumType: 'TransportController'
    },
    {
      code: '470',
      index: 1630,
      text: 'Transport Engineer',
      enumType: 'TransportEngineer'
    },
    {
      code: 'M21',
      index: 1631,
      text: 'Transport Manager',
      enumType: 'TransportManager'
    },
    {
      code: '349',
      index: 1632,
      text: 'Transport Officer',
      enumType: 'TransportOfficer'
    },
    {
      code: 'A59',
      index: 1633,
      text: 'Transport Planner',
      enumType: 'TransportPlanner'
    },
    {
      code: 'T18',
      index: 1634,
      text: 'Travel Agent',
      enumType: 'TravelAgent'
    },
    {
      code: 'A60',
      index: 1635,
      text: 'Travel Clerk',
      enumType: 'TravelClerk'
    },
    {
      code: '350',
      index: 1636,
      text: 'Travel Consultant',
      enumType: 'TravelConsultant'
    },
    {
      code: '351',
      index: 1637,
      text: 'Travel Courier',
      enumType: 'TravelCourier'
    },
    {
      code: 'A61',
      index: 1638,
      text: 'Travel Guide',
      enumType: 'TravelGuide'
    },
    {
      code: 'A62',
      index: 1639,
      text: 'Travel Guide Writer',
      enumType: 'TravelGuideWriter'
    },
    {
      code: 'A63',
      index: 1640,
      text: 'Travel Representative',
      enumType: 'TravelRepresentative'
    },
    {
      code: 'T19',
      index: 1641,
      text: 'Travelling Showman',
      enumType: 'TravellingShowman'
    },
    {
      code: 'A64',
      index: 1642,
      text: 'Treasurer',
      enumType: 'Treasurer'
    },
    {
      code: '352',
      index: 1643,
      text: 'Tree Feller',
      enumType: 'TreeFeller'
    },
    {
      code: 'T20',
      index: 1644,
      text: 'Tree Surgeon',
      enumType: 'TreeSurgeon'
    },
    {
      code: 'C87',
      index: 1645,
      text: 'Trichologist',
      enumType: 'Trichologist'
    },
    {
      code: 'T21',
      index: 1646,
      text: 'Trinity House Pilot',
      enumType: 'TrinityHousePilot'
    },
    {
      code: 'A65',
      index: 1647,
      text: 'Trout Farmer',
      enumType: 'TroutFarmer'
    },
    {
      code: '776',
      index: 1648,
      text: 'Tug Skipper',
      enumType: 'TugSkipper'
    },
    {
      code: '353',
      index: 1649,
      text: 'Tunneller',
      enumType: 'Tunneller'
    },
    {
      code: 'A03',
      index: 1650,
      text: 'Turf Accountant',
      enumType: 'TurfAccountant'
    },
    {
      code: 'A66',
      index: 1651,
      text: 'Turkey Farmer',
      enumType: 'TurkeyFarmer'
    },
    {
      code: '354',
      index: 1652,
      text: 'Turner',
      enumType: 'Turner'
    },
    {
      code: '355',
      index: 1653,
      text: 'Tutor',
      enumType: 'Tutor'
    },
    {
      code: 'A67',
      index: 1654,
      text: 'TV And Video Installer',
      enumType: 'TVAndVideoInstaller'
    },
    {
      code: 'A68',
      index: 1655,
      text: 'TV And Video Repairer',
      enumType: 'TVAndVideoRepairer'
    },
    {
      code: 'A69',
      index: 1656,
      text: 'TV Editor',
      enumType: 'TVEditor'
    },
    {
      code: '356',
      index: 1657,
      text: 'Typesetter',
      enumType: 'Typesetter'
    },
    {
      code: 'A70',
      index: 1658,
      text: 'Typewriter Engineer',
      enumType: 'TypewriterEngineer'
    },
    {
      code: 'T22',
      index: 1659,
      text: 'Typist',
      enumType: 'Typist'
    },
    {
      code: 'A71',
      index: 1660,
      text: 'Tyre Builder',
      enumType: 'TyreBuilder'
    },
    {
      code: '357',
      index: 1661,
      text: 'Tyre Fitter',
      enumType: 'TyreFitter'
    },
    {
      code: 'A72',
      index: 1662,
      text: 'Tyre Inspector',
      enumType: 'TyreInspector'
    },
    {
      code: 'A73',
      index: 1663,
      text: 'Tyre Technician',
      enumType: 'TyreTechnician'
    },
    {
      code: 'U06',
      index: 1664,
      text: 'Umpire',
      enumType: 'Umpire'
    },
    {
      code: 'U01',
      index: 1665,
      text: 'Undertaker',
      enumType: 'Undertaker'
    },
    {
      code: 'U02',
      index: 1666,
      text: 'Underwriter',
      enumType: 'Underwriter'
    },
    {
      code: 'U03',
      index: 1667,
      text: 'Unemployed',
      enumType: 'Unemployed'
    },
    {
      code: 'ZZZ',
      index: 1668,
      text: 'Unknown',
      enumType: 'Unknown'
    },
    {
      code: 'U04',
      index: 1669,
      text: 'Upholsterer',
      enumType: 'Upholsterer'
    },
    {
      code: 'U05',
      index: 1670,
      text: 'Usher',
      enumType: 'Usher'
    },
    {
      code: 'V01',
      index: 1671,
      text: 'Valuer',
      enumType: 'Valuer'
    },
    {
      code: '777',
      index: 1672,
      text: 'Valve Technician',
      enumType: 'ValveTechnician'
    },
    {
      code: 'D46',
      index: 1673,
      text: 'Van Driver',
      enumType: 'VanDriver'
    },
    {
      code: 'V02',
      index: 1674,
      text: 'VDU Operator',
      enumType: 'VDUOperator'
    },
    {
      code: '358',
      index: 1675,
      text: 'Vehicle Assessor',
      enumType: 'VehicleAssessor'
    },
    {
      code: 'V03',
      index: 1676,
      text: 'Vehicle Body Worker',
      enumType: 'VehicleBodyWorker'
    },
    {
      code: 'E21',
      index: 1677,
      text: 'Vehicle Engineer',
      enumType: 'VehicleEngineer'
    },
    {
      code: '471',
      index: 1678,
      text: 'Vehicle Technician',
      enumType: 'VehicleTechnician'
    },
    {
      code: '778',
      index: 1679,
      text: 'Vending Machine Filler',
      enumType: 'VendingMachineFiller'
    },
    {
      code: '779',
      index: 1680,
      text: 'Vending Machine Technician',
      enumType: 'VendingMachineTechnician'
    },
    {
      code: 'D72',
      index: 1681,
      text: 'Ventriloquist',
      enumType: 'Ventriloquist'
    },
    {
      code: '472',
      index: 1682,
      text: 'Verger',
      enumType: 'Verger'
    },
    {
      code: 'V07',
      index: 1683,
      text: 'Veterinary Assistant',
      enumType: 'VeterinaryAssistant'
    },
    {
      code: 'V04',
      index: 1684,
      text: 'Veterinary Surgeon',
      enumType: 'VeterinarySurgeon'
    },
    {
      code: '359',
      index: 1685,
      text: 'Vicar',
      enumType: 'Vicar'
    },
    {
      code: '492',
      index: 1686,
      text: 'Violin Maker',
      enumType: 'ViolinMaker'
    },
    {
      code: 'V06',
      index: 1687,
      text: 'Voluntary Worker',
      enumType: 'VoluntaryWorker'
    },
    {
      code: 'C24',
      index: 1688,
      text: 'Wages Clerk',
      enumType: 'WagesClerk'
    },
    {
      code: '360',
      index: 1689,
      text: 'Waiter',
      enumType: 'Waiter'
    },
    {
      code: 'W07',
      index: 1690,
      text: 'Waiter / Waitress - Licensed',
      enumType: 'WaiterWaitressLicensed'
    },
    {
      code: 'W08',
      index: 1691,
      text: 'Waiter / Waitress - Unlicensed',
      enumType: 'WaiterWaitressUnlicensed'
    },
    {
      code: '361',
      index: 1692,
      text: 'Waitress',
      enumType: 'Waitress'
    },
    {
      code: '473',
      index: 1693,
      text: 'Warehouse Manager',
      enumType: 'WarehouseManager'
    },
    {
      code: '362',
      index: 1694,
      text: 'Warehouseman',
      enumType: 'Warehouseman'
    },
    {
      code: 'W01',
      index: 1695,
      text: 'Warehouseman/Woman',
      enumType: 'WarehousemanWoman'
    },
    {
      code: '363',
      index: 1696,
      text: 'Warehousewoman',
      enumType: 'Warehousewoman'
    },
    {
      code: '364',
      index: 1697,
      text: 'Waste Dealer',
      enumType: 'WasteDealer'
    },
    {
      code: 'W02',
      index: 1698,
      text: 'Watchmaker',
      enumType: 'Watchmaker'
    },
    {
      code: 'D87',
      index: 1699,
      text: 'Water Diviner',
      enumType: 'WaterDiviner'
    },
    {
      code: 'W03',
      index: 1700,
      text: 'Water Industry Worker',
      enumType: 'WaterIndustryWorker'
    },
    {
      code: '365',
      index: 1701,
      text: 'Weaver',
      enumType: 'Weaver'
    },
    {
      code: 'W09',
      index: 1702,
      text: 'Web Designer',
      enumType: 'WebDesigner'
    },
    {
      code: '780',
      index: 1703,
      text: 'Weighbridge Clerk',
      enumType: 'WeighbridgeClerk'
    },
    {
      code: '781',
      index: 1704,
      text: 'Weighbridge Operator',
      enumType: 'WeighbridgeOperator'
    },
    {
      code: 'W04',
      index: 1705,
      text: 'Welder',
      enumType: 'Welder'
    },
    {
      code: '585',
      index: 1706,
      text: 'Welfare Assistant',
      enumType: 'WelfareAssistant'
    },
    {
      code: '366',
      index: 1707,
      text: 'Welfare Officer',
      enumType: 'WelfareOfficer'
    },
    {
      code: '474',
      index: 1708,
      text: 'Welfare Rights Officer',
      enumType: 'WelfareRightsOfficer'
    },
    {
      code: '367',
      index: 1709,
      text: 'Wheel Clamper',
      enumType: 'WheelClamper'
    },
    {
      code: 'D36',
      index: 1710,
      text: 'Wholesale Newspaper Delivery Driver',
      enumType: 'WholesaleNewspaperDeliveryDriver'
    },
    {
      code: 'W05',
      index: 1711,
      text: 'Window Cleaner',
      enumType: 'WindowCleaner'
    },
    {
      code: '368',
      index: 1712,
      text: 'Window Dresser',
      enumType: 'WindowDresser'
    },
    {
      code: 'F22',
      index: 1713,
      text: 'Windscreen Fitter',
      enumType: 'WindscreenFitter'
    },
    {
      code: '369',
      index: 1714,
      text: 'Wine Merchant',
      enumType: 'WineMerchant'
    },
    {
      code: '370',
      index: 1715,
      text: 'Wood Carver',
      enumType: 'WoodCarver'
    },
    {
      code: '371',
      index: 1716,
      text: 'Wood Cutter',
      enumType: 'WoodCutter'
    },
    {
      code: '372',
      index: 1717,
      text: 'Wood Worker',
      enumType: 'WoodWorker'
    },
    {
      code: 'C69',
      index: 1718,
      text: 'Word Processing Operator',
      enumType: 'WordProcessingOperator'
    },
    {
      code: '586',
      index: 1719,
      text: 'Works Manager',
      enumType: 'WorksManager'
    },
    {
      code: 'W06',
      index: 1720,
      text: 'Writer',
      enumType: 'Writer'
    },
    {
      code: 'B63',
      index: 1721,
      text: 'Yacht Master',
      enumType: 'YachtMaster'
    },
    {
      code: '556',
      index: 1722,
      text: 'Yard Manager',
      enumType: 'YardManager'
    },
    {
      code: 'Y01',
      index: 1723,
      text: 'Yoga Teacher',
      enumType: 'YogaTeacher'
    },
    {
      code: '475',
      index: 1724,
      text: 'Youth Hostel Warden',
      enumType: 'YouthHostelWarden'
    },
    {
      code: '373',
      index: 1725,
      text: 'Youth Worker',
      enumType: 'YouthWorker'
    },
    {
      code: 'Z01',
      index: 1726,
      text: 'Zoo Keeper',
      enumType: 'ZooKeeper'
    },
    {
      code: 'B64',
      index: 1727,
      text: 'Zoo Manager',
      enumType: 'ZooManager'
    },
    {
      code: '374',
      index: 1728,
      text: 'Zoologist',
      enumType: 'Zoologist'
    },
    {
      code: 'C89',
      index: 1729,
      text: 'Zoology Consultant',
      enumType: 'ZoologyConsultant'
    },
    {
      code: 'U07',
      index: 0,
      text: 'Not Employed Due to Disability',
      enumType: 'U07'
    }
  ],
  PersonTitle: [
    {
      code: '001',
      index: 1,
      text: 'Doctor',
      enumType: 'Doctor',
      shortText: 'Dr.'
    },
    {
      code: '002',
      index: 2,
      text: 'Miss',
      enumType: 'Miss',
      shortText: 'Miss'
    },
    {
      code: '003',
      index: 3,
      text: 'Mr',
      enumType: 'Mr',
      shortText: 'Mr.'
    },
    {
      code: '004',
      index: 4,
      text: 'Mrs',
      enumType: 'Mrs',
      shortText: 'Mrs.'
    },
    {
      code: '005',
      index: 5,
      text: 'Ms',
      enumType: 'Ms',
      shortText: 'Ms.'
    },
    {
      code: '006',
      index: 6,
      text: 'Reverend',
      enumType: 'Reverend',
      shortText: 'Rev.'
    },
    {
      code: '007',
      index: 7,
      text: 'Sir',
      enumType: 'Sir',
      shortText: 'Sir'
    },
    {
      code: '014',
      index: 8,
      text: 'Dame',
      enumType: 'Dame',
      shortText: 'Dame'
    },
    {
      code: '019',
      index: 9,
      text: 'Lady',
      enumType: 'Lady',
      shortText: 'Lady'
    },
    {
      code: '021',
      index: 10,
      text: 'Lord',
      enumType: 'Lord',
      shortText: 'Lord'
    },
    {
      code: '024',
      index: 11,
      text: 'Professor',
      enumType: 'Professor',
      shortText: 'Prof.'
    },
    {
      code: '031',
      index: 12,
      text: 'The Right Honourable',
      enumType: 'TheRightHonourable',
      shortText: 'The Rt Hon.'
    },
    {
      code: '082',
      index: 13,
      text: 'Estate of',
      enumType: 'EstateOf',
      shortText: 'Est. of'
    }
  ],
  RelationshipType: [
    {
      code: '1',
      index: 1,
      text: 'Husband',
      enumType: 'Husband'
    },
    {
      code: '2',
      index: 2,
      text: 'Wife',
      enumType: 'Wife'
    },
    {
      code: '3',
      index: 3,
      text: 'Civil Partner',
      enumType: 'CivilPartner'
    },
    {
      code: '4',
      index: 4,
      text: 'Dependant',
      enumType: 'Dependant'
    },
    {
      code: '5',
      index: 5,
      text: 'Other Close Family',
      enumType: 'OtherCloseFamily',
      overrideText: ['Other Family']
    },
    {
      code: '6',
      index: 6,
      text: 'Unrelated flatmate/housemate',
      enumType: 'Unrelatedflatmatehousemate',
      overrideText: ['Flatmate/ housemate']
    },
    {
      code: '7',
      index: 7,
      text: 'Paying Guest',
      enumType: 'PayingGuest'
    },
    {
      code: '8',
      index: 8,
      text: 'Non-Paying Guest (unrelated to your family)',
      enumType: 'NonPayingGuest',
      overrideText: ['Non-paying guest']
    },
    {
      code: '9',
      index: 9,
      text: 'Partner',
      enumType: 'Partner'
    },
    {
      code: '11',
      index: 10,
      text: 'Spouse',
      enumType: 'Spouse'
    },
    {
      code: '10',
      index: 11,
      text: 'Fellow members of residents commitee',
      enumType: 'ResidentsComitee'
    }
  ],
  Sex: [
    {
      code: '1',
      index: 1,
      text: 'Male',
      enumType: '1'
    },
    {
      code: '2',
      index: 2,
      text: 'Female',
      enumType: 'Female'
    }
  ],
  TypeOfCover: [
    {
      code: '2',
      index: 0,
      text: 'Buildings & Contents',
      enumType: 'BuildingsAndContents'
    },
    {
      code: '0',
      index: 1,
      text: 'Buildings only',
      enumType: 'Buildings'
    },
    {
      code: '1',
      index: 2,
      text: 'Contents only',
      enumType: 'Contents'
    }
  ],
  ArtemisRiskDataState: [
    {
      code: 'Mta',
      index: 0,
      text: 'Mta',
      enumType: 'Mta'
    },
    {
      code: 'Invited',
      index: 1,
      text: 'Invited',
      enumType: 'Invited'
    },
    {
      code: 'RenewalPending',
      index: 2,
      text: 'RenewalPending',
      enumType: 'RenewalPending'
    },
    {
      code: 'CoolingOff',
      index: 3,
      text: 'CoolingOff',
      enumType: 'CoolingOff'
    }
  ],
  QuoteStatus: [
    {
      code: '0',
      index: 0,
      text: 'Default',
      enumType: 'Default'
    },
    {
      code: '1',
      index: 1,
      text: 'Is Purchased',
      enumType: 'IsPurchased'
    },
    {
      code: '2',
      index: 2,
      text: 'Has External Modification',
      enumType: 'HasExternalModification'
    },
    {
      code: '3',
      index: 3,
      text: 'Is Manually Referred',
      enumType: 'IsManuallyReferred'
    },
    {
      code: '4',
      index: 4,
      text: 'Referral Approved',
      enumType: 'ReferralApproved'
    },
    {
      code: '5',
      index: 5,
      text: 'In Progress',
      enumType: 'InProgress'
    }
  ],
  GradeOfListingType: [
    {
      code: 'EX01',
      index: 1,
      text: 'Excellent',
      enumType: 'Excellent',
      overrideText: ['Grade I Star']
    },
    {
      code: 'GRD01',
      index: 2,
      text: 'Grade I listed with star features',
      enumType: 'GradeI',
      overrideText: ['Grade I']
    },
    {
      code: 'GRD02',
      index: 3,
      text: 'Grade I listed',
      enumType: 'GradeIListed',
      overrideText: ['Grade A (Scotland & N Ireland)']
    },
    {
      code: 'GRD03',
      index: 4,
      text: 'Grade A listed (Scotland and N Ireland)',
      enumType: 'GradeAlisted',
      overrideText: ['Grade II Star']
    },
    {
      code: 'GRD04',
      index: 5,
      text: 'Grade II listed with star features',
      enumType: 'GradeIIlistedStar',
      overrideText: ['Grade B (Scotland & N Ireland)']
    },
    {
      code: 'GRD05',
      index: 6,
      text: 'Grade B listed (Scotland and N Ireland)',
      enumType: 'GradeBlisted',
      overrideText: ['Grade II']
    },
    {
      code: 'GRD06',
      index: 7,
      text: 'Grade II listed',
      enumType: 'GradeIIlisted',
      overrideText: ['Grade C (Scotland & N Ireland)']
    },
    {
      code: 'GRD07',
      index: 8,
      text: 'Grade C listed (Scotland and N Ireland)',
      enumType: 'GradeClisted'
    }
  ],
  ListedItemCategory: [
    {
      code: 'M03',
      index: 1,
      text: 'Mobile Phone',
      enumType: 'MobilePhone'
    },
    {
      code: 'P02',
      index: 2,
      text: 'Pedal Cycle',
      enumType: 'PedalCycle'
    },
    {
      code: 'P23',
      index: 3,
      text: 'Portable Computer',
      enumType: 'PortableComputer'
    },
    {
      code: 'A21',
      index: 4,
      text: 'Antique or rare book',
      enumType: 'AntiqueOrRareBook',
      overrideText: ['Antiques', 'Rare books']
    },
    {
      code: 'C07',
      index: 5,
      text: 'China, glass or porcelain',
      enumType: 'ChinaGlasssOrPorcelain',
      overrideText: ['China', 'Porcelain', 'Glassware']
    },
    {
      code: 'C20',
      index: 6,
      text: 'Clock',
      enumType: 'Clock',
      overrideText: ['Clocks']
    },
    {
      code: 'C19',
      index: 7,
      text: 'Coin collection',
      enumType: 'CoinCollection',
      overrideText: ['Coins']
    },
    {
      code: 'E03',
      index: 8,
      text: 'Electric wheelchair or disability scooter',
      enumType: 'ElectricWheelchairOrDisabilityScooter',
      overrideText: ['Electric wheelchairs or disability scooter']
    },
    {
      code: 'G07',
      index: 9,
      text: 'Gold, silver or gold plated item',
      enumType: 'GoldSilverOrGoldPlatedItem',
      overrideText: ['Gold, silver or plated items, except jewellery']
    },
    {
      code: 'G04',
      index: 10,
      text: 'Gun',
      enumType: 'Gun',
      overrideText: ['Guns']
    },
    {
      code: 'J01',
      index: 11,
      text: 'Jewellery or watch',
      enumType: 'JewelleryOrWatch',
      overrideText: ['Jewellery', 'Watches']
    },
    {
      code: 'M06',
      index: 12,
      text: 'Medal collection',
      enumType: 'MedalCollection',
      overrideText: ['Medals']
    },
    {
      code: 'P06',
      index: 13,
      text: 'Personal item(excluding jewellery)',
      enumType: 'PersonalItemExcludingJewellery',
      overrideText: [
        'Furs',
        'Handbags',
        'Medical equipment (inc. hearing aids)​',
        'Sports equipment',
        'Musical equipment',
        'Garden machinery (e.g. lawnmowers)'
      ]
    },
    {
      code: 'P20',
      index: 14,
      text: 'Picture',
      enumType: 'Picture',
      overrideText: ['Artworks']
    },
    {
      code: 'R03',
      index: 15,
      text: 'Ride on lawn mower',
      enumType: 'RideOnLawnMower'
    },
    {
      code: 'S11',
      index: 16,
      text: 'Stamp collection',
      enumType: 'StampCollection',
      overrideText: ['Stamp collections']
    }
  ],
  SafeMake: [
    {
      code: 'ADL01',
      index: 1,
      text: 'A & D Lock & Safe',
      enumType: 'ADLockSafe'
    },
    {
      code: 'ALL01',
      index: 2,
      text: 'Allsafe',
      enumType: 'Allsafe'
    },
    {
      code: 'AMJ01',
      index: 3,
      text: 'AM & J Safe',
      enumType: 'AMJSafe'
    },
    {
      code: 'CHA01',
      index: 4,
      text: 'Chatwood',
      enumType: 'Chatwood'
    },
    {
      code: 'CHA02',
      index: 5,
      text: 'Chatwood Milner',
      enumType: 'ChatwoodMilner'
    },
    {
      code: 'CHB01',
      index: 6,
      text: 'Chubb',
      enumType: 'Chubb'
    },
    {
      code: 'CHC01',
      index: 7,
      text: 'Churchill',
      enumType: 'Churchill'
    },
    {
      code: 'COX01',
      index: 8,
      text: 'Cox',
      enumType: 'Cox'
    },
    {
      code: 'DDN01',
      index: 9,
      text: 'Dreadnought',
      enumType: 'Dreadnought'
    },
    {
      code: 'DUD01',
      index: 10,
      text: 'Dudley Safes Ltd',
      enumType: 'DudleySafesLtd'
    },
    {
      code: 'EPC01',
      index: 11,
      text: 'Epic International',
      enumType: 'EpicInternational'
    },
    {
      code: 'FIC01',
      index: 12,
      text: 'Fichet (Bauche)',
      enumType: 'FichetBauche'
    },
    {
      code: 'GPS01',
      index: 13,
      text: 'G P Security',
      enumType: 'GPSecurity'
    },
    {
      code: 'GSG01',
      index: 14,
      text: 'Guardian Security Group',
      enumType: 'GuardianSecurityGroup'
    },
    {
      code: 'HAM01',
      index: 15,
      text: 'Hamber',
      enumType: 'Hamber'
    },
    {
      code: 'HHT01',
      index: 16,
      text: 'Hobbs Hart',
      enumType: 'HobbsHart'
    },
    {
      code: 'ISM01',
      index: 17,
      text: 'ISM',
      enumType: 'ISM'
    },
    {
      code: 'ISM02',
      index: 18,
      text: 'Israel Safe Manufacturers',
      enumType: 'IsraelSafeManufacturers'
    },
    {
      code: 'KAS01',
      index: 19,
      text: 'Kaso',
      enumType: 'Kaso'
    },
    {
      code: 'LEI01',
      index: 20,
      text: 'Leigh',
      enumType: 'Leigh'
    },
    {
      code: 'LJW01',
      index: 21,
      text: 'Levy J W Group',
      enumType: 'LevyJWGroup'
    },
    {
      code: 'LSS01',
      index: 22,
      text: 'Lock Security & Safe',
      enumType: 'LockSecuritySafe'
    },
    {
      code: 'LON01',
      index: 23,
      text: 'London Safes',
      enumType: 'LondonSafes'
    },
    {
      code: 'LSC01',
      index: 24,
      text: 'Lord Safe Company',
      enumType: 'LordSafeCompany'
    },
    {
      code: 'MIL01',
      index: 25,
      text: 'Milner',
      enumType: 'Milner'
    },
    {
      code: 'MLS01',
      index: 26,
      text: 'MLS (Mercian Lock & Safe)',
      enumType: 'MLSMercianLockSafe'
    },
    {
      code: '99',
      index: 27,
      text: 'Other',
      enumType: 'Other'
    },
    {
      code: 'RAD01',
      index: 28,
      text: 'Radway',
      enumType: 'Radway'
    },
    {
      code: 'RAT01',
      index: 29,
      text: 'Ratner (Tann Group)',
      enumType: 'RatnerTannGroup'
    },
    {
      code: 'ROS01',
      index: 30,
      text: 'Rosengren',
      enumType: 'Rosengren'
    },
    {
      code: 'RUS01',
      index: 31,
      text: 'Rusper',
      enumType: 'Rusper'
    },
    {
      code: 'SWT01',
      index: 32,
      text: 'Samuel Withers',
      enumType: 'SamuelWithers'
    },
    {
      code: 'SLS01',
      index: 33,
      text: 'SLS - Security Lock & Safe',
      enumType: 'SLSSecurityLockSafe'
    },
    {
      code: 'SMP01',
      index: 34,
      text: 'SMP',
      enumType: 'SMP'
    },
    {
      code: 'SCS01',
      index: 35,
      text: 'Stephen Cox & Son Ltd',
      enumType: 'StephenCoxSonLtd'
    },
    {
      code: 'STR01',
      index: 36,
      text: 'Stratford',
      enumType: 'Stratford'
    },
    {
      code: 'TNJ01',
      index: 37,
      text: 'Tann John',
      enumType: 'TannJohn'
    },
    {
      code: 'TER01',
      index: 38,
      text: 'Terry Security',
      enumType: 'TerrySecurity'
    },
    {
      code: 'THT01',
      index: 39,
      text: 'Thomas Withers',
      enumType: 'ThomasWithers'
    },
    {
      code: 'THO01',
      index: 40,
      text: 'Thorne',
      enumType: 'Thorne'
    },
    {
      code: 'WTH01',
      index: 41,
      text: 'Werthein',
      enumType: 'Werthein'
    },
    {
      code: 'WTG01',
      index: 42,
      text: 'Withy Grove',
      enumType: 'WithyGrove'
    }
  ],
  SafeRatingType: [
    {
      code: 'SF0001',
      index: 1,
      text: 'UK - £1,000 cash/£10,000 valuables',
      enumType: 'UK1000',
      overrideText: ['UK: £1k /£10k']
    },
    {
      code: 'SF0002',
      index: 2,
      text: 'UK - £2,000 cash/£20,000 valuables',
      enumType: 'UK2000',
      overrideText: ['UK: £2k /£20k']
    },
    {
      code: 'SF0003',
      index: 3,
      text: 'UK - £3,000 cash/£30,000 valuables',
      enumType: 'UK3000',
      overrideText: ['UK: £3k /£30k']
    },
    {
      code: 'SF0004',
      index: 4,
      text: 'UK - £4,000 cash/£40,000 valuables',
      enumType: 'UK4000',
      overrideText: ['UK: £4k /£40k']
    },
    {
      code: 'SF0005',
      index: 5,
      text: 'UK - £5,000 cash/£50,000 valuables',
      enumType: 'UK5000',
      overrideText: ['UK: £5k /£50k']
    },
    {
      code: 'SF0006',
      index: 6,
      text: 'Euro Grade 0 - £6,000 cash/£60,000 valuables',
      enumType: 'EuroGrade0',
      overrideText: ['Euro 0: £6k /£60k']
    },
    {
      code: 'SF0010',
      index: 7,
      text: 'Euro Grade 1 - £10,000 cash/£100,000 valuables',
      enumType: 'EuroGrade1',
      overrideText: ['Euro 1: £10k /£100k']
    },
    {
      code: 'SF0017',
      index: 8,
      text: 'Euro Grade 2 - £17,500 cash/£175,000 valuables',
      enumType: 'EuroGrade2',
      overrideText: ['Euro 2: £17.5k /£175k']
    },
    {
      code: 'SF0035',
      index: 9,
      text: 'Euro Grade 3 - £35,000 cash/£350,000 valuables',
      enumType: 'EuroGrade3',
      overrideText: ['Euro 3: £35k /£350k']
    },
    {
      code: 'SF0060',
      index: 10,
      text: 'Euro Grade 4 - £60,000 cash/£600,000 valuables',
      enumType: 'EuroGrade4',
      overrideText: ['Euro 4: £60k /£600k']
    },
    {
      code: 'SF0100',
      index: 11,
      text: 'Euro Grade 5 - £100,000 cash/£1m valuables',
      enumType: 'EuroGrade5',
      overrideText: ['Euro 5: £100k /£1m']
    },
    {
      code: 'SF0150',
      index: 12,
      text: 'Euro Grade 6 - £150,000 cash/£1.5m valuables',
      enumType: 'EuroGrade6',
      overrideText: ['Euro 6: £150k /£1.5m']
    },
    {
      code: '99',
      index: 13,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  BuildingConstructionRoofType: [
    {
      code: '04',
      index: 1,
      text: 'Felt On Timber',
      enumType: 'FeltOnTimber'
    },
    {
      code: '01',
      index: 2,
      text: 'Asbestos',
      enumType: 'Asbestos'
    },
    {
      code: '19',
      index: 3,
      text: 'Asphalt',
      enumType: 'Asphalt'
    },
    {
      code: '02',
      index: 4,
      text: 'Concrete',
      enumType: 'Concrete'
    },
    {
      code: '03',
      index: 5,
      text: 'Corrugated Iron',
      enumType: 'CorrugatedIron'
    },
    {
      code: '05',
      index: 6,
      text: 'Fibreglass',
      enumType: 'Fibreglass'
    },
    {
      code: '06',
      index: 7,
      text: 'Glass',
      enumType: 'Glass'
    },
    {
      code: '07',
      index: 8,
      text: 'Metal',
      enumType: 'Metal'
    },
    {
      code: '08',
      index: 9,
      text: 'Plastic',
      enumType: 'Plastic'
    },
    {
      code: '09',
      index: 10,
      text: 'Shingle',
      enumType: 'Shingle'
    },
    {
      code: '16',
      index: 11,
      text: 'Timber ',
      enumType: 'Timber'
    },
    {
      code: '17',
      index: 12,
      text: 'Turnerised',
      enumType: 'Turnerised'
    },
    {
      code: '18',
      index: 13,
      text: 'Woodwork Construction ',
      enumType: 'WoodworkConstruction'
    },
    {
      code: '20',
      index: 14,
      text: 'Eco',
      enumType: 'Eco'
    },
    {
      code: '21',
      index: 15,
      text: 'Rubber',
      enumType: 'Rubber'
    }
  ],
  ChimneyType: [
    {
      code: '00',
      index: 1,
      text: 'No chimneys',
      enumType: 'None'
    },
    {
      code: 'ONE01',
      index: 2,
      text: 'One chimney at one end of roof',
      enumType: 'OneChimneyAtOneEnd'
    },
    {
      code: 'ONE02',
      index: 3,
      text: 'One chimney in middle of roof',
      enumType: 'OneChimneyInMiddle'
    },
    {
      code: 'TWO01',
      index: 4,
      text: 'Two chimneys each at the ends of the roof',
      enumType: 'TwoChimneysEachAtTheEnds'
    },
    {
      code: 'TWO02',
      index: 5,
      text: 'Two chimneys - one at the end of the roof, one in the middle',
      enumType: 'TwoChimneysOneAtTheEndOneInTheMiddle'
    },
    {
      code: 'TWO03',
      index: 6,
      text: 'Two chimneys both in the middle of the roof',
      enumType: 'TwoChimneysBothInTheMiddleOfTheRoof'
    },
    {
      code: 'TWO04',
      index: 7,
      text: 'More than two chimneys',
      enumType: 'MoreThanTwoChimneys'
    },
    {
      code: '99',
      index: 8,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  FireExtinguishingTypes: [
    {
      code: 'FBL01',
      index: 1,
      text: '1 fire blanket in kitchen',
      enumType: 'FireBlanket'
    },
    {
      code: 'FBL02',
      index: 2,
      text: 'More than 1 fire blanket in kitchen',
      enumType: 'MoreThanOneFireBlanket'
    },
    {
      code: 'FEX01',
      index: 3,
      text: '1 fire extinguisher (water)',
      enumType: 'FireExtinguisherWater'
    },
    {
      code: 'FEX02',
      index: 4,
      text: '1 fire extinguisher (foam)',
      enumType: 'FireExtinguisherFoam'
    },
    {
      code: 'FEX03',
      index: 5,
      text: '2 fire extinguisher (water)',
      enumType: 'TwoFireExtinguishersWater'
    },
    {
      code: 'FEX04',
      index: 6,
      text: '2 fire extinguisher (foam)',
      enumType: 'TwoFireExtinguishersFoam'
    },
    {
      code: 'FEX05',
      index: 7,
      text: '2 fire extinguisher (foam & water)',
      enumType: 'TwoFireExtinguishersFoamandWater'
    },
    {
      code: 'FEX06',
      index: 8,
      text: 'More than 2 fire extinguishers (water)',
      enumType: 'MoreThanTwoFireExtinguishesrWater'
    },
    {
      code: 'FEX07',
      index: 9,
      text: 'More than 2 fire extinguishers (foam)',
      enumType: 'MoreThanTwoFireExtinguishersFoam'
    },
    {
      code: 'FEX08',
      index: 10,
      text: 'More than 2 fire extinguishers (foam & water)',
      enumType: 'MoreThanTwoFireExtinguishersFoamandWater'
    },
    {
      code: 'SPR01',
      index: 11,
      text: 'Sprinkler system kitchen/fireplace only',
      enumType: 'SprinklerSystemKitchenFirePlaceOnly'
    },
    {
      code: 'SPR02',
      index: 12,
      text: 'Sprinkler system throughout the house',
      enumType: 'SprinklerSystemThroughout'
    },
    {
      code: '99',
      index: 13,
      text: 'none / other',
      enumType: 'Other'
    }
  ],
  FlatRoofPercentage: [
    {
      code: '50',
      index: 1,
      text: '34%-50% (up to half)',
      enumType: 'Half',
      overrideText: ['Up to half']
    },
    {
      code: '75',
      index: 2,
      text: '51%-75% (up to three-quarters)',
      enumType: 'ThreeQuarters',
      overrideText: ['Up to three quarters']
    },
    {
      code: '100',
      index: 3,
      text: '76%-100% (three-quarters to all)',
      enumType: 'All',
      overrideText: ['Over three-quarters']
    }
  ],
  HeatingType: [
    {
      code: 'GCH01',
      index: 1,
      text: 'Gas central heating with room radiators',
      enumType: 'GasCentralHeatingRadiators'
    },
    {
      code: 'GCH02',
      index: 2,
      text: 'Gas central heating with forced air ducting',
      enumType: 'GasCentralHeatingAirDuct'
    },
    {
      code: 'UFH01',
      index: 3,
      text: 'Underfloor heating - electrical',
      enumType: 'UnderfloorElectrical'
    },
    {
      code: 'UFH02',
      index: 4,
      text: 'Underfloor heating - water-filled',
      enumType: 'UnderfloorWater'
    },
    {
      code: 'OCH01',
      index: 5,
      text: 'Oil-fired central heating with room radiators',
      enumType: 'OilFiredCentralHeatingRadiator'
    },
    {
      code: 'OCH02',
      index: 6,
      text: 'Oil-fired central heating with forced air ducting',
      enumType: 'OilFiredCentralHeatingAirDuct'
    },
    {
      code: 'ELC01',
      index: 7,
      text: 'Central heating with electric radiators',
      enumType: 'CentralHEatingElectrical'
    },
    {
      code: 'OPF01',
      index: 8,
      text: 'Open fire(s)',
      enumType: 'OpenFire'
    },
    {
      code: 'STO01',
      index: 9,
      text: 'Wood/Coal-burning stove(s)',
      enumType: 'WoodCoalStove'
    },
    {
      code: 'AGA01',
      index: 10,
      text: 'AGA or similar combined cooker/heater',
      enumType: 'AGA'
    },
    {
      code: '99',
      index: 11,
      text: 'Other type of heating',
      enumType: 'Other'
    },
    {
      code: '00',
      index: 12,
      text: 'No heating',
      enumType: 'NoHeating'
    }
  ],
  OutbuildingsConstructionRoofType: [
    {
      code: '15',
      index: 1,
      text: 'Tile',
      enumType: 'Tile'
    },
    {
      code: '10',
      index: 2,
      text: 'Slate',
      enumType: 'Slate'
    },
    {
      code: '02',
      index: 3,
      text: 'Concrete',
      enumType: 'Concrete'
    },
    {
      code: '01',
      index: 4,
      text: 'Asbestos',
      enumType: 'Asbestos'
    },
    {
      code: '19',
      index: 5,
      text: 'Asphalt',
      enumType: 'Asphalt'
    },
    {
      code: '03',
      index: 6,
      text: 'Corrugated Iron',
      enumType: 'CorrugatedIron'
    },
    {
      code: '04',
      index: 7,
      text: 'Felt On Timber',
      enumType: 'FeltOnTimber'
    },
    {
      code: '05',
      index: 8,
      text: 'Fibreglass',
      enumType: 'Fibreglass'
    },
    {
      code: '06',
      index: 9,
      text: 'Glass',
      enumType: 'Glass'
    },
    {
      code: '07',
      index: 10,
      text: 'Metal',
      enumType: 'Metal'
    },
    {
      code: '08',
      index: 11,
      text: 'Plastic',
      enumType: 'Plastic'
    },
    {
      code: '09',
      index: 12,
      text: 'Shingle',
      enumType: 'Shingle'
    },
    {
      code: '12',
      index: 13,
      text: 'Stramit',
      enumType: 'Stramit'
    },
    {
      code: '13',
      index: 14,
      text: 'Thatch',
      enumType: 'Thatch'
    },
    {
      code: '16',
      index: 15,
      text: 'Timber',
      enumType: 'Timber'
    },
    {
      code: '17',
      index: 16,
      text: 'Turnerised',
      enumType: 'Turnerised'
    },
    {
      code: '18',
      index: 17,
      text: 'Woodwork Construction',
      enumType: 'WoodworkConstruction'
    },
    {
      code: '99',
      index: 18,
      text: 'Other',
      enumType: 'Other'
    },
    {
      code: '20',
      index: 19,
      text: 'Eco',
      enumType: 'Eco'
    },
    {
      code: '21',
      index: 20,
      text: 'Rubber',
      enumType: 'Rubber'
    },
    {
      code: 'AGG99',
      index: 21,
      text: 'Aggregator - OTHER',
      enumType: 'AggregatorOther'
    }
  ],
  OutbuildingsStateOfRepair: [
    {
      code: 'EX01',
      index: 1,
      text: 'Excellent',
      enumType: 'Excellent'
    },
    {
      code: 'FA01',
      index: 2,
      text: 'Fair',
      enumType: 'Fair'
    },
    {
      code: 'GD01',
      index: 3,
      text: 'Good',
      enumType: 'Good'
    },
    {
      code: 'AV01',
      index: 4,
      text: 'Average',
      enumType: 'Average'
    },
    {
      code: 'PO01',
      index: 5,
      text: 'Poor',
      enumType: 'Poor'
    },
    {
      code: 'DE01',
      index: 6,
      text: 'Derelict',
      enumType: 'Derelict'
    },
    {
      code: '99',
      index: 7,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  OutbuildingsThatchRoofPercentage: [
    {
      code: '20',
      index: 1,
      text: '1%-20% (up to a fifth)',
      enumType: 'Fifth'
    },
    {
      code: '33',
      index: 2,
      text: '21%-33% (up to a third)',
      enumType: 'Third'
    },
    {
      code: '50',
      index: 3,
      text: '34%-50% (up to three-quarters))',
      enumType: 'Half'
    },
    {
      code: '75',
      index: 4,
      text: '51%-75% (up to three-quarters))',
      enumType: 'ThreeQuaters'
    },
    {
      code: '100',
      index: 5,
      text: '76%-100% (three-quarters to entirely thatched)',
      enumType: 'Full'
    }
  ],
  OutBuildingsWallConstructionMaterialType: [
    {
      code: '02',
      index: 1,
      text: 'Brick',
      enumType: 'Brick'
    },
    {
      code: '03',
      index: 2,
      text: 'Brick/Timber Frame',
      enumType: 'BrickTimberFrame'
    },
    {
      code: '16',
      index: 3,
      text: 'Stone',
      enumType: 'Stone'
    },
    {
      code: '18',
      index: 4,
      text: 'Timber',
      enumType: 'Timber'
    },
    {
      code: '19',
      index: 5,
      text: 'Timber Frame',
      enumType: 'TimberFrame'
    },
    {
      code: '20',
      index: 6,
      text: 'Timber/Plaster',
      enumType: 'TimberPlaster'
    },
    {
      code: '01',
      index: 7,
      text: 'Asbestos',
      enumType: 'Asbestos'
    },
    {
      code: '04',
      index: 8,
      text: 'Cob Construction',
      enumType: 'CobConstruction'
    },
    {
      code: '05',
      index: 9,
      text: 'Concrete',
      enumType: 'Concrete'
    },
    {
      code: '06',
      index: 10,
      text: 'Corrugated Iron',
      enumType: 'CorrugatedIron'
    },
    {
      code: '07',
      index: 11,
      text: 'Essex Construction',
      enumType: 'EssexConstruction'
    },
    {
      code: '08',
      index: 12,
      text: 'Fibreglass Construction',
      enumType: 'FibreglassConstruction'
    },
    {
      code: '09',
      index: 13,
      text: 'Flint',
      enumType: 'Flint'
    },
    {
      code: '10',
      index: 14,
      text: 'Glass',
      enumType: 'Glass'
    },
    {
      code: '11',
      index: 15,
      text: 'Metal',
      enumType: 'Metal'
    },
    {
      code: '12',
      index: 16,
      text: 'Plastic',
      enumType: 'Plastic'
    },
    {
      code: '13',
      index: 17,
      text: 'Prefabricated Building - Combustible Materials',
      enumType: 'PrefabricatedBuildingCombustibleMaterials'
    },
    {
      code: '14',
      index: 18,
      text: 'Prefabricated Building - Non Combustible Materials',
      enumType: 'PrefabricatedBuildingNonCombustibleMaterials'
    },
    {
      code: '17',
      index: 19,
      text: 'Stramit Construction',
      enumType: 'StramitConstruction'
    },
    {
      code: '21',
      index: 20,
      text: 'Wattle And Daub Construction',
      enumType: 'WattleAndDaubConstruction'
    },
    {
      code: '22',
      index: 21,
      text: 'Woodwall',
      enumType: 'Woodwall'
    },
    {
      code: '23',
      index: 22,
      text: 'Woodwork Construction',
      enumType: 'WoodworkConstruction'
    },
    {
      code: '99',
      index: 23,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  OutBuildingType: [
    {
      code: 'GA01',
      index: 1,
      text: 'Garage',
      enumType: 'Garage'
    },
    {
      code: 'GA02',
      index: 2,
      text: 'Garage with conversion',
      enumType: 'GarageWithConversion'
    },
    {
      code: 'SH01',
      index: 3,
      text: 'Shed (timber)',
      enumType: 'Shedtimber'
    },
    {
      code: 'SH02',
      index: 4,
      text: 'Shed (concrete/stone)',
      enumType: 'ShedConcreteStone'
    },
    {
      code: 'ST01',
      index: 5,
      text: 'Stables (timber)',
      enumType: 'StablesTimber'
    },
    {
      code: 'ST02',
      index: 6,
      text: 'Stables (concrete/stone)',
      enumType: 'StablesConcreteStone'
    },
    {
      code: 'ST03',
      index: 7,
      text: 'Converted stables (timber)',
      enumType: 'ConvertedStablesTimber'
    },
    {
      code: 'ST04',
      index: 8,
      text: 'Converted stables (concrete/stone)',
      enumType: 'ConvertedStablesConcreteStone'
    },
    {
      code: 'SU01',
      index: 9,
      text: 'Summerhouse (timber)',
      enumType: 'SummerhouseTimber'
    },
    {
      code: 'SU02',
      index: 10,
      text: 'Summerhouse (concrete/stone)',
      enumType: 'SummerhouseConcreteStone'
    },
    {
      code: 'WS01',
      index: 11,
      text: 'Workshop',
      enumType: 'Workshop'
    },
    {
      code: '99',
      index: 12,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  PercentageOfRoofThatched: [
    {
      code: '00',
      index: 1,
      text: '0% (none)',
      enumType: 'None'
    },
    {
      code: '20',
      index: 2,
      text: '1%-20% (up to a fifth)',
      enumType: 'OneFifth'
    },
    {
      code: '33',
      index: 3,
      text: '21%-33% (up to a third)',
      enumType: 'Third'
    },
    {
      code: '50',
      index: 4,
      text: '34%-50% (up to half)',
      enumType: 'Half'
    },
    {
      code: '75',
      index: 5,
      text: '51%-75% (up to three-quarters)',
      enumType: 'ThreeQuaters'
    },
    {
      code: '100',
      index: 6,
      text: '76%-100% (three-quarters to all)',
      enumType: 'All'
    }
  ],
  RoofType: [
    {
      code: '15',
      index: 1,
      text: 'Tile',
      enumType: 'Tile'
    },
    {
      code: '10',
      index: 2,
      text: 'Slate',
      enumType: 'Slate'
    },
    {
      code: '02',
      index: 3,
      text: 'Concrete',
      enumType: 'Concrete'
    },
    {
      code: '01',
      index: 4,
      text: 'Asbestos',
      enumType: 'Asbestos'
    },
    {
      code: '19',
      index: 5,
      text: 'Asphalt',
      enumType: 'Asphalt'
    },
    {
      code: '03',
      index: 6,
      text: 'Corrugated Iron',
      enumType: 'CorrugatedIron'
    },
    {
      code: '20',
      index: 7,
      text: 'Eco',
      enumType: 'Eco'
    },
    {
      code: '04',
      index: 8,
      text: 'Felt On Timber',
      enumType: 'FeltOnTimber'
    },
    {
      code: '05',
      index: 9,
      text: 'Fibreglass',
      enumType: 'Fibreglass'
    },
    {
      code: '06',
      index: 10,
      text: 'Glass',
      enumType: 'Glass'
    },
    {
      code: '07',
      index: 11,
      text: 'Metal',
      enumType: 'Metal'
    },
    {
      code: '08',
      index: 12,
      text: 'Plastic',
      enumType: 'Plastic'
    },
    {
      code: '21',
      index: 13,
      text: 'Rubber',
      enumType: 'Rubber'
    },
    {
      code: '09',
      index: 14,
      text: 'Shingle',
      enumType: 'Shingle'
    },
    {
      code: '12',
      index: 15,
      text: 'Stramit',
      enumType: 'Stramit'
    },
    {
      code: '13',
      index: 16,
      text: 'Thatch',
      enumType: 'Thatch'
    },
    {
      code: '16',
      index: 17,
      text: 'Timber',
      enumType: 'Timber'
    },
    {
      code: '17',
      index: 18,
      text: 'Turnerised',
      enumType: 'Turnerised'
    },
    {
      code: '18',
      index: 19,
      text: 'Woodwork Construction',
      enumType: 'WoodworkConstruction'
    },
    {
      code: '99',
      index: 20,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  ThatchCondition: [
    {
      code: 'EX01',
      index: 1,
      text: 'Excellent',
      enumType: 'Excellent'
    },
    {
      code: 'FA01',
      index: 2,
      text: 'Fair',
      enumType: 'Fair'
    },
    {
      code: 'GD01',
      index: 3,
      text: 'Good',
      enumType: 'Good'
    },
    {
      code: 'AV01',
      index: 4,
      text: 'Average',
      enumType: 'Average'
    },
    {
      code: 'PO01',
      index: 5,
      text: 'Poor',
      enumType: 'Poor'
    },
    {
      code: '99',
      index: 6,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  ThatchType: [
    {
      code: 'THR01',
      index: 1,
      text: 'Thatch - Rush',
      enumType: 'ThatchRush'
    },
    {
      code: 'TWR01',
      index: 2,
      text: 'Thatch - Reed',
      enumType: 'ThatchReed'
    },
    {
      code: 'THF01',
      index: 3,
      text: 'Thatch - Fibre',
      enumType: 'ThatchFibre'
    },
    {
      code: 'THS01',
      index: 4,
      text: 'Thatch - Straw',
      enumType: 'ThatchStraw'
    },
    {
      code: 'THO01',
      index: 5,
      text: 'Thatch - Other',
      enumType: 'ThatchOther'
    }
  ],
  WallConstructionMaterialType: [
    {
      code: '02',
      index: 1,
      text: 'Brick',
      enumType: 'Brick'
    },
    {
      code: '16',
      index: 2,
      text: 'Stone',
      enumType: 'Stone'
    },
    {
      code: '99',
      index: 3,
      text: 'Other',
      enumType: 'Other'
    },
    {
      code: '03',
      index: 4,
      text: 'Brick/Timber Frame',
      enumType: 'BrickAndTimber',
      overrideText: ['Brick/Timber']
    },
    {
      code: '18',
      index: 5,
      text: 'Timber',
      enumType: 'Timber'
    },
    {
      code: '19',
      index: 6,
      text: 'Timber Frame',
      enumType: 'TimberFrame'
    },
    {
      code: '20',
      index: 7,
      text: 'Timber/Plaster',
      enumType: 'TimberPlaster'
    },
    {
      code: '01',
      index: 8,
      text: 'Asbestos',
      enumType: 'Asbestos'
    },
    {
      code: '04',
      index: 9,
      text: 'Cob Construction',
      enumType: 'CobConstruction',
      overrideText: ['Cob']
    },
    {
      code: '05',
      index: 10,
      text: 'Concrete',
      enumType: 'Concrete'
    },
    {
      code: '06',
      index: 11,
      text: 'Corrugated Iron',
      enumType: 'CorrugatedIron'
    },
    {
      code: '07',
      index: 12,
      text: 'Essex Construction',
      enumType: 'EssexConstruction'
    },
    {
      code: '08',
      index: 13,
      text: 'Fibreglass Construction',
      enumType: 'FibreglassConstruction',
      overrideText: ['Fibreglass']
    },
    {
      code: '09',
      index: 14,
      text: 'Flint',
      enumType: 'Flint'
    },
    {
      code: '10',
      index: 15,
      text: 'Glass',
      enumType: 'Glass'
    },
    {
      code: '11',
      index: 16,
      text: 'Metal',
      enumType: 'Metal'
    },
    {
      code: '12',
      index: 17,
      text: 'Plastic',
      enumType: 'Plastic'
    },
    {
      code: '13',
      index: 18,
      text: 'Prefabricated Building - Combustible Materials',
      enumType: 'PrefabricatedBuildingCombustibleMaterials',
      overrideText: ['Prefab/ Combustible']
    },
    {
      code: '14',
      index: 19,
      text: 'Prefabricated Building - Non Combustible Materials',
      enumType: 'PrefabricatedBuildingNonCombustibleMaterials',
      overrideText: ['Prefab/ Non-Combustible']
    },
    {
      code: '17',
      index: 20,
      text: 'Stramit Construction',
      enumType: 'StramitConstruction',
      overrideText: ['Stramit']
    },
    {
      code: '21',
      index: 21,
      text: 'Wattle And Daub Construction',
      enumType: 'WattleAndDaubConstruction',
      overrideText: ['Wattle & Daub']
    },
    {
      code: '22',
      index: 22,
      text: 'Woodwall',
      enumType: 'Woodwall'
    },
    {
      code: '23',
      index: 23,
      text: 'Woodwork Construction',
      enumType: 'WoodworkConstruction',
      overrideText: ['Woodwork']
    }
  ],
  AlarmMonitoredType: [
    {
      code: '1',
      index: 1,
      text: 'Audible only',
      enumType: 'Audibleonly'
    },
    {
      code: '2',
      index: 2,
      text: 'Monitored centrally',
      enumType: 'Monitoredcentrally'
    }
  ],
  CauseOfFlood: [
    {
      code: 'FLO01',
      index: 1,
      text: 'Flood',
      enumType: 'Flood'
    },
    {
      code: 'BUD01',
      index: 2,
      text: 'Backing up of drains',
      enumType: 'BackingUpOfDrains'
    },
    {
      code: 'COA01',
      index: 3,
      text: 'Coastal',
      enumType: 'Coastal'
    },
    {
      code: 'NCO01',
      index: 4,
      text: 'Non-coastal body of water',
      enumType: 'NonCoastalBodyOfWater'
    },
    {
      code: 'FFL01',
      index: 5,
      text: 'Flash flood',
      enumType: 'FlashFlood'
    },
    {
      code: '99',
      index: 6,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  CauseOfGroundMovement: [
    {
      code: 'CLI01',
      index: 1,
      text: 'Climatic conditions',
      enumType: 'ClimaticConditions'
    },
    {
      code: 'DRA01',
      index: 2,
      text: 'Drain crash',
      enumType: 'DrainCrash',
      overrideText: ['Drain collapse']
    },
    {
      code: 'DRA02',
      index: 3,
      text: 'Drain crash caused by tree roots',
      enumType: 'DrainCrashCausedByTreeRoots',
      overrideText: ['Drain damaged by roots']
    },
    {
      code: 'TRE01',
      index: 4,
      text: 'Tree root damage',
      enumType: 'TreeRootDamage'
    },
    {
      code: 'TRE02',
      index: 5,
      text: 'Removal/over-pruning of tree',
      enumType: 'RemovalOverPruningOfTree',
      overrideText: ['Tree removal']
    },
    {
      code: 'BUI01',
      index: 6,
      text: 'Building works at the property',
      enumType: 'BuildingWorksAtTheProperty',
      overrideText: ['Building work at property']
    },
    {
      code: 'BUI02',
      index: 7,
      text: 'Building works at a neighbouring property',
      enumType: 'BuildingWorksAtNeighbouringProperty',
      overrideText: ['Building work nearby']
    },
    {
      code: '99',
      index: 8,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  CauseRemovedRectified: [
    {
      code: '1',
      index: 1,
      text: 'Removed',
      enumType: 'Removed'
    },
    {
      code: '2',
      index: 2,
      text: 'Rectified',
      enumType: 'Rectified'
    },
    {
      code: '3',
      index: 3,
      text: 'Neither removed nor rectified',
      enumType: 'NeitherRemovedNorRectified',
      overrideText: ['Neither']
    },
    {
      code: '99',
      index: 4,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  NumberOfBedrooms: [
    {
      code: '1',
      index: 1,
      text: '1',
      enumType: 'One'
    },
    {
      code: '2',
      index: 2,
      text: '2',
      enumType: 'Two'
    },
    {
      code: '3',
      index: 3,
      text: '3',
      enumType: 'Three'
    },
    {
      code: '4',
      index: 4,
      text: '4',
      enumType: 'Four'
    },
    {
      code: '5',
      index: 5,
      text: '5',
      enumType: 'Five'
    },
    {
      code: '6',
      index: 6,
      text: '6',
      enumType: 'Six'
    },
    {
      code: '7',
      index: 7,
      text: '7',
      enumType: 'Seven'
    },
    {
      code: '8',
      index: 8,
      text: '8',
      enumType: 'Eight'
    },
    {
      code: '9',
      index: 9,
      text: '9',
      enumType: 'Nine'
    },
    {
      code: '10',
      index: 10,
      text: '10',
      enumType: 'Ten'
    },
    {
      code: '11',
      index: 11,
      text: 'More than 10',
      enumType: 'GeaterThan10',
      overrideText: ['10 or more']
    }
  ],
  NumberOfGuestBedrooms: [
    {
      code: '1',
      index: 1,
      text: '1',
      enumType: 'One'
    },
    {
      code: '2',
      index: 2,
      text: '2',
      enumType: 'Two'
    },
    {
      code: '3',
      index: 3,
      text: '3',
      enumType: 'Three'
    },
    {
      code: '4',
      index: 4,
      text: '4',
      enumType: 'Four'
    },
    {
      code: '5',
      index: 5,
      text: '5',
      enumType: 'Five'
    },
    {
      code: '6',
      index: 6,
      text: '6',
      enumType: 'Six'
    },
    {
      code: '7',
      index: 7,
      text: '7',
      enumType: 'Seven'
    },
    {
      code: '8',
      index: 8,
      text: '8',
      enumType: 'Eight'
    },
    {
      code: '9',
      index: 9,
      text: '9',
      enumType: 'Nine'
    },
    {
      code: '99',
      index: 10,
      text: '10 or more',
      enumType: 'TenOrMore'
    }
  ],
  PropertyListingGradeType: [
    {
      code: 'GRD01',
      index: 1,
      text: 'Grade I listed with star features',
      enumType: 'GradeIListedStar'
    },
    {
      code: 'GRD02',
      index: 2,
      text: 'Grade I listed',
      enumType: 'GradeIListed'
    },
    {
      code: 'GRD03',
      index: 3,
      text: 'Grade A listed (Scotland and N Ireland)',
      enumType: 'GradeAListed'
    },
    {
      code: 'GRD04',
      index: 4,
      text: 'Grade II listed with star features',
      enumType: 'GradeIIListedStar'
    },
    {
      code: 'GRD05',
      index: 5,
      text: 'Grade B listed (Scotland and N Ireland)',
      enumType: 'GradeB'
    },
    {
      code: 'GRD06',
      index: 6,
      text: 'Grade II listed',
      enumType: 'GradeIIListed'
    },
    {
      code: 'GRD07',
      index: 7,
      text: 'Grade C listed (Scotland and N Ireland)',
      enumType: 'GradeCListed'
    },
    {
      code: '99',
      index: 8,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  PropertyOwner: [
    {
      code: 'OWN01',
      index: 1,
      text: 'Owned outright by you',
      enumType: 'OwnedOutright',
      overrideText: ['Own (Outright)']
    },
    {
      code: 'MOR01',
      index: 2,
      text: 'Mortgaged in your name',
      enumType: 'Mortgaged',
      overrideText: ['Own (Mortgage)']
    },
    {
      code: 'SHA01',
      index: 3,
      text: 'Mortgaged by you as part of shared equity scheme',
      enumType: 'MortgagedEquityScheme',
      overrideText: ['Own (Shared Equity)']
    },
    {
      code: 'RPL01',
      index: 4,
      text: 'Rented from private landlord',
      enumType: 'PrivateLandlord',
      overrideText: ['Rent (from a Landlord)']
    },
    {
      code: 'RLA01',
      index: 5,
      text: 'Rented from Local Authority',
      enumType: 'LocalAuthority',
      overrideText: ['Rent (from Local Authority)']
    },
    {
      code: 'RHA01',
      index: 6,
      text: 'Rented from Housing Association',
      enumType: 'HousingAssociation',
      overrideText: ['Rent (from Housing Association)']
    },
    {
      code: '99',
      index: 7,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  PropertyType: [
    {
      code: '1',
      index: 1,
      text: 'Detached Bungalow',
      enumType: 'DetachedBungalow'
    },
    {
      code: '10',
      index: 2,
      text: 'Semi-Detached House',
      enumType: 'SemiDetachedHouse'
    },
    {
      code: '12',
      index: 3,
      text: 'Terraced Bungalow',
      enumType: 'TerracedBungalow'
    },
    {
      code: '13',
      index: 4,
      text: 'Terraced House',
      enumType: 'TerracedHouse'
    },
    {
      code: '16',
      index: 5,
      text: 'End-Terraced Bungalow',
      enumType: 'EndTerracedBungalow'
    },
    {
      code: '17',
      index: 6,
      text: 'Mid-Terraced Bungalow',
      enumType: 'MidTerracedBungalow'
    },
    {
      code: '18',
      index: 7,
      text: 'End-Terraced House',
      enumType: 'EndTerracedHouse'
    },
    {
      code: '19',
      index: 8,
      text: 'Mid-Terraced House',
      enumType: 'MidTerracedHouse'
    },
    {
      code: '2',
      index: 9,
      text: 'Detached House',
      enumType: 'DetachedHouse'
    },
    {
      code: '20',
      index: 10,
      text: 'Basement Flat Conversion',
      enumType: 'BasementFlatCo'
    },
    {
      code: '21',
      index: 11,
      text: 'Basement Purpose Built Flat',
      enumType: 'BasementPurposeBuiltFlat'
    },
    {
      code: '22',
      index: 12,
      text: 'Chalet',
      enumType: 'Chalet'
    },
    {
      code: '25',
      index: 13,
      text: 'Ground Floor Flat Conversion',
      enumType: 'GroundFloorFlatConversion'
    },
    {
      code: '26',
      index: 14,
      text: 'Ground Floor Purpose Built Flat',
      enumType: 'GroundFloorPurposeBuiltFlat'
    },
    {
      code: '33',
      index: 15,
      text: 'House Boat',
      enumType: 'HouseBoat'
    },
    {
      code: '34',
      index: 16,
      text: 'Residential Caravan',
      enumType: 'ResidentialCaravan'
    },
    {
      code: '4',
      index: 17,
      text: 'Maisonette',
      enumType: 'Maisonette'
    },
    {
      code: '44',
      index: 18,
      text: 'Above Second Floor Flat Conversion',
      enumType: 'AboveSecondFloorFlatConversion'
    },
    {
      code: '45',
      index: 19,
      text: 'First Floor Flat Conversion',
      enumType: 'FirstFloorFlatConversion'
    },
    {
      code: '46',
      index: 20,
      text: 'Second Floor Flat Conversion',
      enumType: 'SecondFloorFlatConversion'
    },
    {
      code: '47',
      index: 21,
      text: 'Above Second Floor Purpose Built Flat',
      enumType: 'AboveSecondFloorPurposeBuiltFlat'
    },
    {
      code: '48',
      index: 22,
      text: 'First Floor Purpose Built Flat',
      enumType: 'FirstFloorPurposeBuiltFlat'
    },
    {
      code: '49',
      index: 23,
      text: 'Second Floor Purpose Built Flat',
      enumType: 'SecondFloorPurposeBuiltFlat'
    },
    {
      code: '5',
      index: 24,
      text: 'Mansion',
      enumType: 'Mansion'
    },
    {
      code: '52',
      index: 25,
      text: 'Student hall of residence',
      enumType: 'StudentHallOfResidence'
    },
    {
      code: '53',
      index: 26,
      text: 'Bedsits/Rooms - as landlord',
      enumType: 'BedsitsRoomsAsLandlord'
    },
    {
      code: '54',
      index: 27,
      text: 'Converted Barn',
      enumType: 'ConvertedBarn'
    },
    {
      code: '6',
      index: 28,
      text: 'Mobile Home',
      enumType: 'MobileHome'
    },
    {
      code: '8',
      index: 29,
      text: 'Bedsit/Room - as tenant',
      enumType: 'BedsitRoomAsTenant'
    },
    {
      code: '9',
      index: 30,
      text: 'Semi-Detached Bungalow',
      enumType: 'SemiDetachedBungalow'
    },
    {
      code: '99',
      index: 31,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  PropertyTypeGrouping: [
    {
      code: 'House',
      index: 0,
      text: 'House',
      enumType: 'House'
    },
    {
      code: 'Flat',
      index: 1,
      text: 'Flat',
      enumType: 'Flat'
    },
    {
      code: 'Bungalow',
      index: 2,
      text: 'Bungalow',
      enumType: 'Bungalow'
    },
    {
      code: 'Other',
      index: 3,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  TreeLocation: [
    {
      code: '1',
      index: 1,
      text: 'Your property',
      enumType: 'YourProperty'
    },
    {
      code: '2',
      index: 2,
      text: "A neighbour's property",
      enumType: 'NeighboursProperty'
    },
    {
      code: '3',
      index: 3,
      text: 'Council property or roadside',
      enumType: 'CouncilPropertyOrRoadside'
    },
    {
      code: '99',
      index: 4,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  TreeType: [
    {
      code: '1',
      index: 1,
      text: 'Acacia False',
      enumType: 'AcaciaFalse'
    },
    {
      code: '2',
      index: 2,
      text: 'Alder',
      enumType: 'Alder'
    },
    {
      code: '3',
      index: 3,
      text: 'Apple',
      enumType: 'Apple'
    },
    {
      code: '4',
      index: 4,
      text: 'Ash',
      enumType: 'Ash'
    },
    {
      code: '5',
      index: 5,
      text: 'Bay Laurel',
      enumType: 'BayLaurel'
    },
    {
      code: '6',
      index: 6,
      text: 'Beech',
      enumType: 'Beech'
    },
    {
      code: '7',
      index: 7,
      text: 'Birch',
      enumType: 'Birch'
    },
    {
      code: '8',
      index: 8,
      text: 'Blackthorn',
      enumType: 'Blackthorn'
    },
    {
      code: '9',
      index: 9,
      text: 'Cedar',
      enumType: 'Cedar'
    },
    {
      code: '10',
      index: 10,
      text: 'Cherry - Japanese',
      enumType: 'CherryJapanese'
    },
    {
      code: '11',
      index: 11,
      text: 'Cherry - Laurel',
      enumType: 'CherryLaurel'
    },
    {
      code: '12',
      index: 12,
      text: 'Cherry - Wild',
      enumType: 'CherryWild'
    },
    {
      code: '13',
      index: 13,
      text: 'Cherry (fruiting)',
      enumType: 'CherryFruiting'
    },
    {
      code: '14',
      index: 14,
      text: 'Cypress - Lawsons',
      enumType: 'CypressLawsons'
    },
    {
      code: '15',
      index: 15,
      text: 'Cypress - Leyland',
      enumType: 'CypressLeyland'
    },
    {
      code: '16',
      index: 16,
      text: 'Cypress - Monterey',
      enumType: 'CypressMonterey'
    },
    {
      code: '17',
      index: 17,
      text: 'Damson',
      enumType: 'Damson'
    },
    {
      code: '18',
      index: 18,
      text: 'Douglas Fir',
      enumType: 'DouglasFir'
    },
    {
      code: '19',
      index: 19,
      text: 'Elm - English',
      enumType: 'ElmEnglish'
    },
    {
      code: '20',
      index: 20,
      text: 'Elm - Wheatley',
      enumType: 'ElmWheatley'
    },
    {
      code: '21',
      index: 21,
      text: 'Elm - Wych',
      enumType: 'ElmWych'
    },
    {
      code: '22',
      index: 22,
      text: 'Eucalyptus',
      enumType: 'Eucalyptus'
    },
    {
      code: '23',
      index: 23,
      text: 'Hawthorn',
      enumType: 'Hawthorn'
    },
    {
      code: '24',
      index: 24,
      text: 'Holly',
      enumType: 'Holly'
    },
    {
      code: '25',
      index: 25,
      text: 'Honey Locust',
      enumType: 'HoneyLocust'
    },
    {
      code: '26',
      index: 26,
      text: 'Hornbeam',
      enumType: 'Hornbeam'
    },
    {
      code: '27',
      index: 27,
      text: 'Horse Chestnut',
      enumType: 'HorseChestnut'
    },
    {
      code: '28',
      index: 28,
      text: 'Laburnum',
      enumType: 'Laburnum'
    },
    {
      code: '29',
      index: 29,
      text: 'Laurel',
      enumType: 'Laurel'
    },
    {
      code: '30',
      index: 30,
      text: 'Lime',
      enumType: 'Lime'
    },
    {
      code: '31',
      index: 31,
      text: 'Magnolia',
      enumType: 'Magnolia'
    },
    {
      code: '32',
      index: 32,
      text: 'Maple - Japanese',
      enumType: 'MapleJapanese'
    },
    {
      code: '33',
      index: 33,
      text: 'Maple - Norway',
      enumType: 'MapleNorway'
    },
    {
      code: '34',
      index: 34,
      text: 'Mountain Ash',
      enumType: 'MountainAsh'
    },
    {
      code: '35',
      index: 35,
      text: 'Mulberry',
      enumType: 'Mulberry'
    },
    {
      code: '36',
      index: 36,
      text: 'Oak - English',
      enumType: 'OakEnglish'
    },
    {
      code: '37',
      index: 37,
      text: 'Oak _ Holm',
      enumType: 'OakHolm'
    },
    {
      code: '38',
      index: 38,
      text: 'Oak - Red',
      enumType: 'OakRed'
    },
    {
      code: '39',
      index: 39,
      text: 'Oak - Turkey',
      enumType: 'OakTurkey'
    },
    {
      code: '40',
      index: 40,
      text: 'Pear',
      enumType: 'Pear'
    },
    {
      code: '41',
      index: 41,
      text: 'Pine',
      enumType: 'Pine'
    },
    {
      code: '42',
      index: 42,
      text: 'Plane',
      enumType: 'Plane'
    },
    {
      code: '43',
      index: 43,
      text: 'Plum',
      enumType: 'Plum'
    },
    {
      code: '44',
      index: 44,
      text: 'Poplar - Hybrid Black',
      enumType: 'PoplarHybridBlack'
    },
    {
      code: '45',
      index: 45,
      text: 'Poplar - Lombardy',
      enumType: 'PoplarLombardy'
    },
    {
      code: '46',
      index: 46,
      text: 'Rowan',
      enumType: 'Rowan'
    },
    {
      code: '47',
      index: 47,
      text: 'Spruce',
      enumType: 'Spruce'
    },
    {
      code: '48',
      index: 48,
      text: 'Sycamore',
      enumType: 'Sycamore'
    },
    {
      code: '49',
      index: 49,
      text: 'Tree of Heaven',
      enumType: 'TreeOfHeaven'
    },
    {
      code: '50',
      index: 50,
      text: 'Walnut',
      enumType: 'Walnut'
    },
    {
      code: '51',
      index: 51,
      text: 'Wellingtonia',
      enumType: 'Wellingtonia'
    },
    {
      code: '52',
      index: 52,
      text: 'White Beam',
      enumType: 'WhiteBeam'
    },
    {
      code: '53',
      index: 53,
      text: 'Willow - Crack',
      enumType: 'WillowCrack'
    },
    {
      code: '54',
      index: 54,
      text: 'Willow - Weeping',
      enumType: 'WillowWeeping'
    },
    {
      code: '55',
      index: 55,
      text: 'Willow - White',
      enumType: 'WillowWhite'
    },
    {
      code: '56',
      index: 56,
      text: 'Yew',
      enumType: 'Yew'
    },
    {
      code: '999',
      index: 57,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  TypeOfLocks: [
    {
      code: '2',
      index: 1,
      text: '5 lever mortice deadlock conforming to BS3621',
      enumType: 'FiveLever'
    },
    {
      code: '3',
      index: 2,
      text: 'Key operated multi-point locking system',
      enumType: 'KeyOperated'
    },
    {
      code: '4',
      index: 3,
      text: 'Rim automatic deadlatch with key locking handle',
      enumType: 'Rim'
    },
    {
      code: '99',
      index: 4,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  TypeOfLocksOtherExists: [
    {
      code: '2',
      index: 1,
      text: '5 lever mortice deadlock conforming to BS3621',
      enumType: 'FiveLever',
      overrideText: ['5-lever mortice deadlock (BS 3621)']
    },
    {
      code: '3',
      index: 2,
      text: 'Key operated multi-point locking system',
      enumType: 'KeyOperatedMultiPoint',
      overrideText: ['Multi-point lock']
    },
    {
      code: '4',
      index: 3,
      text: 'Rim automatic deadlatch with key locking handle',
      enumType: 'Rim',
      overrideText: ['Deadlatch with locking handle']
    },
    {
      code: '6',
      index: 4,
      text: 'Key operated security bolts at top & bottom',
      enumType: 'KeyOperatedSecurityBolts',
      overrideText: ['Security bolts at top & bottom']
    },
    {
      code: '5',
      index: 5,
      text: 'No other exit',
      enumType: 'NoOtherExit'
    },
    {
      code: '99',
      index: 6,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  TypeOfLocksPatioDoors: [
    {
      code: '1',
      index: 1,
      text: 'No patio doors',
      enumType: 'NoPatioDoors'
    },
    {
      code: '2',
      index: 2,
      text: 'Top & bottom key operated lock',
      enumType: 'TopBottom',
      overrideText: ['Top & bottom locks']
    },
    {
      code: '3',
      index: 3,
      text: 'Central rail key operated lock',
      enumType: 'CentralRail',
      overrideText: ['Central lock']
    },
    {
      code: '4',
      index: 4,
      text: 'Key operated multi point lock',
      enumType: 'KeyOperatedMultiPoint',
      overrideText: ['Multi-point lock']
    },
    {
      code: '99',
      index: 5,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  UnitOfMeasureType: [
    {
      code: '1',
      index: 1,
      text: 'Metres',
      enumType: 'Metres'
    },
    {
      code: '0.305',
      index: 2,
      text: 'Feet',
      enumType: 'Feet'
    }
  ],
  YearsHeldInsurance: [
    {
      code: 'N_10556',
      index: 1,
      text: 'No current insurance',
      enumType: 'NoInsurance'
    },
    {
      code: 'N',
      index: 2,
      text: 'Less than a year',
      enumType: 'LessThanAYear',
      overrideText: ['0']
    },
    {
      code: '1',
      index: 3,
      text: '1 year',
      enumType: 'OneYear',
      overrideText: ['1']
    },
    {
      code: '2',
      index: 4,
      text: '2 years',
      enumType: 'TwoYears',
      overrideText: ['2']
    },
    {
      code: '3',
      index: 5,
      text: '3 years',
      enumType: 'ThreeYears',
      overrideText: ['3']
    },
    {
      code: '4',
      index: 6,
      text: '4 years',
      enumType: 'FourYears',
      overrideText: ['4']
    },
    {
      code: '5',
      index: 7,
      text: '5 years',
      enumType: 'FiveYears',
      overrideText: ['5']
    },
    {
      code: '6',
      index: 8,
      text: '6 years',
      enumType: 'SixYears',
      overrideText: ['6']
    },
    {
      code: '7',
      index: 9,
      text: '7 years',
      enumType: 'SevenYears',
      overrideText: ['7']
    },
    {
      code: '8',
      index: 10,
      text: '8 years',
      enumType: 'EightYears',
      overrideText: ['8']
    },
    {
      code: '9',
      index: 11,
      text: '9 years',
      enumType: 'NineYears',
      overrideText: ['9']
    },
    {
      code: '10',
      index: 12,
      text: '10 years',
      enumType: 'TenYears',
      overrideText: ['10']
    },
    {
      code: '50',
      index: 13,
      text: 'More than 10 years',
      enumType: 'GreterThanTenYears',
      overrideText: ['10 or more']
    }
  ],
  BCCJIVAReason: [
    {
      code: 'BAN01',
      index: 1,
      text: 'Bankruptcy',
      enumType: 'Bankruptcy'
    },
    {
      code: 'CCJ01',
      index: 2,
      text: 'County Court Judgment (CCJ)',
      enumType: 'CountyCourtJudgment'
    },
    {
      code: 'IVA01',
      index: 3,
      text: 'Individual Voluntary Arrangement (IVA)',
      enumType: 'IndividualVoluntaryArrangement'
    }
  ],
  BCCJIVASituation: [
    {
      code: '7',
      index: 1,
      text: 'Bankruptcy',
      enumType: 'Bankruptcy'
    },
    {
      code: '9',
      index: 2,
      text: 'County Court Judgment (CCJ)',
      enumType: 'CountyCourtJudgment'
    },
    {
      code: '10',
      index: 3,
      text: 'Individual Voluntary Arrangement (IVA)',
      enumType: 'IndividualVoluntaryArrangement'
    }
  ],
  ClaimSectionType: [
    {
      code: '2',
      index: 1,
      text: 'Buildings',
      enumType: 'Buildings'
    },
    {
      code: '1',
      index: 2,
      text: 'Buildings & Contents',
      enumType: 'BuildingsContents'
    },
    {
      code: '3',
      index: 3,
      text: 'Contents',
      enumType: 'Contents'
    }
  ],
  ClaimType: [
    {
      code: 'AA',
      index: 1,
      text: 'Accidental damage - other cause',
      enumType: 'Accidentaldamageothercause'
    },
    {
      code: 'AD',
      index: 2,
      text: 'Accidental damage by spillage',
      enumType: 'Accidentaldamagebyspillage'
    },
    {
      code: 'AE',
      index: 3,
      text: 'Accidental damage by tearing/ripping',
      enumType: 'Accidentaldamagebytearingripping'
    },
    {
      code: 'AF',
      index: 4,
      text: 'Accidental damage by water coming in through flat roof',
      enumType: 'Accidentaldamagebywatercominginthroughflatroof'
    },
    {
      code: 'AB',
      index: 5,
      text: 'Accidental damage to audio/audio visual equipment',
      enumType: 'Accidentaldamagetoaudioaudiovisualequipment'
    },
    {
      code: 'AG',
      index: 6,
      text: 'Accidental damage to computer equipment',
      enumType: 'Accidentaldamagetocomputerequipment'
    },
    {
      code: 'AH',
      index: 7,
      text: 'Accidental damage to pedal cycle',
      enumType: 'Accidentaldamagetopedalcycle'
    },
    {
      code: 'AJ',
      index: 8,
      text: 'Accidental damage to soft furnishings/carpet',
      enumType: 'Accidentaldamagetosoftfurnishingscarpet'
    },
    {
      code: 'AC',
      index: 9,
      text: 'Accidental damage while loading or unloading',
      enumType: 'Accidentaldamagewhileloadingorunloading'
    },
    {
      code: 'BA',
      index: 10,
      text: 'Accidental loss - other',
      enumType: 'Accidentallossother'
    },
    {
      code: 'BB',
      index: 11,
      text: 'Accidental loss of audio/audio visual equipment',
      enumType: 'Accidentallossofaudioaudiovisualequipment'
    },
    {
      code: '2',
      index: 12,
      text: 'Burst Pipes',
      enumType: 'BurstPipes'
    },
    {
      code: 'LA',
      index: 13,
      text: 'Damage to glass/hobs/mirrors/bathroom fittings',
      enumType: 'Damagetoglasshobsmirrorsbathroomfittings'
    },
    {
      code: 'CA',
      index: 14,
      text: 'Earthquake',
      enumType: 'Earthquake'
    },
    {
      code: 'DA',
      index: 15,
      text: 'Escape of water - other cause',
      enumType: 'Escapeofwaterothercause'
    },
    {
      code: 'DB',
      index: 16,
      text: 'Escape of water due to backing up of drains',
      enumType: 'Escapeofwaterduetobackingupofdrains'
    },
    {
      code: 'DC',
      index: 17,
      text: 'Escape of water due to burst pipes',
      enumType: 'Escapeofwaterduetoburstpipes'
    },
    {
      code: 'DE',
      index: 18,
      text: 'Escape of water due to freezing conditions',
      enumType: 'Escapeofwaterduetofreezingconditions'
    },
    {
      code: 'DF',
      index: 19,
      text: 'Escape of water from appliance',
      enumType: 'Escapeofwaterfromappliance'
    },
    {
      code: 'EA',
      index: 20,
      text: 'Explosion',
      enumType: 'Explosion'
    },
    {
      code: 'FB',
      index: 21,
      text: 'Falling satellite dish',
      enumType: 'Fallingsatellitedish'
    },
    {
      code: 'FC',
      index: 22,
      text: 'Falling television or radio aerial',
      enumType: 'Fallingtelevisionorradioaerial'
    },
    {
      code: 'GA',
      index: 23,
      text: 'Falling tree(s)',
      enumType: 'Fallingtrees'
    },
    {
      code: '7A',
      index: 24,
      text: 'Fatal Accident',
      enumType: 'FatalAccident'
    },
    {
      code: 'HA',
      index: 25,
      text: 'Fire - other cause',
      enumType: 'Fireothercause'
    },
    {
      code: 'HB',
      index: 26,
      text: 'Fire caused by arson',
      enumType: 'Firecausedbyarson'
    },
    {
      code: 'HC',
      index: 27,
      text: 'Fire caused by cigarette/smoking',
      enumType: 'Firecausedbycigarettesmoking'
    },
    {
      code: 'HD',
      index: 28,
      text: 'Fire caused by contractors/repairers',
      enumType: 'Firecausedbycontractorsrepairers'
    },
    {
      code: 'HE',
      index: 29,
      text: 'Fire caused by cooking',
      enumType: 'Firecausedbycooking'
    },
    {
      code: 'HF',
      index: 30,
      text: 'Fire caused by electrical fault',
      enumType: 'Firecausedbyelectricalfault'
    },
    {
      code: 'HG',
      index: 31,
      text: 'Fire caused by heating appliance',
      enumType: 'Firecausedbyheatingappliance'
    },
    {
      code: 'HJ',
      index: 32,
      text: 'Fire caused by scorching',
      enumType: 'Firecausedbyscorching'
    },
    {
      code: 'HP',
      index: 33,
      text: 'Fire caused by terrorism',
      enumType: 'Firecausedbyterrorism'
    },
    {
      code: 'HH',
      index: 34,
      text: 'Fire caused maliciously',
      enumType: 'Firecausedmaliciously'
    },
    {
      code: 'HK',
      index: 35,
      text: 'Fire resulting in smoke damage',
      enumType: 'Fireresultinginsmokedamage'
    },
    {
      code: 'HM',
      index: 36,
      text: 'Fire spread from adjacent property',
      enumType: 'Firespreadfromadjacentproperty'
    },
    {
      code: 'JC',
      index: 37,
      text: 'Flood - Coastal',
      enumType: 'FloodCoastal'
    },
    {
      code: 'FFL01',
      index: 38,
      text: 'Flood - flash flood',
      enumType: 'Floodflashflood'
    },
    {
      code: 'JD',
      index: 39,
      text: 'Flood - Non-coastal',
      enumType: 'FloodNoncoastal'
    },
    {
      code: 'JA',
      index: 40,
      text: 'Flood - other cause',
      enumType: 'Floodothercause'
    },
    {
      code: 'JB',
      index: 41,
      text: 'Flood caused by backing up of drains',
      enumType: 'Floodcausedbybackingupofdrains'
    },
    {
      code: 'KB',
      index: 42,
      text: 'Freezer contents lost/damaged due to failure of appliance',
      enumType: 'Freezercontentslostdamagedduetofailureofappliance'
    },
    {
      code: 'KC',
      index: 43,
      text: 'Freezer contents lost/damaged due to power failure',
      enumType: 'Freezercontentslostdamagedduetopowerfailure'
    },
    {
      code: 'MA',
      index: 44,
      text: 'Heave',
      enumType: 'Heave'
    },
    {
      code: '7',
      index: 45,
      text: 'Impact',
      enumType: 'Impact'
    },
    {
      code: 'PA',
      index: 46,
      text: 'Landslip',
      enumType: 'Landslip'
    },
    {
      code: 'RA',
      index: 47,
      text: 'Liability',
      enumType: 'Liability'
    },
    {
      code: 'SA',
      index: 48,
      text: 'Lightning',
      enumType: 'Lightning'
    },
    {
      code: 'TA',
      index: 49,
      text: 'Loss of Keys',
      enumType: 'LossofKeys'
    },
    {
      code: '10',
      index: 50,
      text: 'Loss of or damage to personal possessions',
      enumType: 'Lossofordamagetopersonalpossessions'
    },
    {
      code: '8',
      index: 51,
      text: 'Malicious Acts, Riot or Vandalism',
      enumType: 'MaliciousActsRiotOrVandalism'
    },
    {
      code: 'XB',
      index: 52,
      text: 'Malicious damage at property',
      enumType: 'Maliciousdamageatproperty'
    },
    {
      code: 'XC',
      index: 53,
      text: 'Malicious damage away from property',
      enumType: 'Maliciousdamageawayfromproperty'
    },
    {
      code: 'YB',
      index: 54,
      text: 'Money/credit cards lost accidentally',
      enumType: 'Moneycreditcardslostaccidentally'
    },
    {
      code: 'YC',
      index: 55,
      text: 'Money/credit cards misused',
      enumType: 'Moneycreditcardsmisused'
    },
    {
      code: 'YD',
      index: 56,
      text: 'Money/credit cards stolen',
      enumType: 'Moneycreditcardsstolen'
    },
    {
      code: '99',
      index: 57,
      text: 'Other',
      enumType: 'Other'
    },
    {
      code: '15',
      index: 58,
      text: 'Pedal Cycles',
      enumType: 'PedalCycles'
    },
    {
      code: 'ZA',
      index: 59,
      text: 'Reinstatement of Documents',
      enumType: 'ReinstatementofDocuments'
    },
    {
      code: '1A',
      index: 60,
      text: 'Riot',
      enumType: 'Riot'
    },
    {
      code: '2A',
      index: 61,
      text: 'Storm',
      enumType: 'Storm'
    },
    {
      code: '3A',
      index: 62,
      text: 'Subsidence - other cause',
      enumType: 'Subsidenceothercause'
    },
    {
      code: '3B',
      index: 63,
      text: 'Subsidence due to clay soil',
      enumType: 'Subsidenceduetoclaysoil'
    },
    {
      code: '3C',
      index: 64,
      text: 'Subsidence due to drains',
      enumType: 'Subsidenceduetodrains'
    },
    {
      code: '3D',
      index: 65,
      text: 'Subsidence due to foundation movement',
      enumType: 'Subsidenceduetofoundationmovement'
    },
    {
      code: '3E',
      index: 66,
      text: 'Subsidence due to latent defect',
      enumType: 'Subsidenceduetolatentdefect'
    },
    {
      code: '3F',
      index: 67,
      text: 'Subsidence due to made-up ground',
      enumType: 'Subsidenceduetomadeupground'
    },
    {
      code: '3G',
      index: 68,
      text: 'Subsidence due to mining',
      enumType: 'Subsidenceduetomining'
    },
    {
      code: '3J',
      index: 69,
      text: 'Subsidence due to sloping ground',
      enumType: 'Subsidenceduetoslopingground'
    },
    {
      code: '3H',
      index: 70,
      text: 'Subsidence due to soil type (not clay)',
      enumType: 'Subsidenceduetosoiltypenotclay'
    },
    {
      code: '3K',
      index: 71,
      text: 'Subsidence due to tree root damage',
      enumType: 'Subsidenceduetotreerootdamage'
    },
    {
      code: '4A',
      index: 72,
      text: 'Theft - other cause',
      enumType: 'Theftothercause'
    },
    {
      code: '4C',
      index: 73,
      text: 'Theft away from the property',
      enumType: 'Theftawayfromtheproperty'
    },
    {
      code: '4P',
      index: 74,
      text: 'Theft by deception',
      enumType: 'Theftbydeception'
    },
    {
      code: '4H',
      index: 75,
      text: 'Theft by robbery',
      enumType: 'Theftbyrobbery'
    },
    {
      code: '4E',
      index: 76,
      text: 'Theft following break-in at the property',
      enumType: 'Theftfollowingbreakinattheproperty'
    },
    {
      code: '4D',
      index: 77,
      text: 'Theft from a bank or safe deposit box',
      enumType: 'Theftfromabankorsafedepositbox'
    },
    {
      code: '4K',
      index: 78,
      text: 'Theft from outbuildings at property',
      enumType: 'Theftfromoutbuildingsatproperty'
    },
    {
      code: '4N',
      index: 79,
      text: 'Theft from unattended vehicle',
      enumType: 'Theftfromunattendedvehicle'
    },
    {
      code: '4L',
      index: 80,
      text: 'Theft of pedal cycle which was locked-up',
      enumType: 'Theftofpedalcyclewhichwaslockedup'
    },
    {
      code: '4M',
      index: 81,
      text: 'Theft of pedal cycle which was not locked-up',
      enumType: 'Theftofpedalcyclewhichwasnotlockedup'
    },
    {
      code: '4B',
      index: 82,
      text: 'Theft while you were at the property',
      enumType: 'Theftwhileyouwereattheproperty'
    },
    {
      code: '4G',
      index: 83,
      text: 'Theft without breaking-in to the property',
      enumType: 'Theftwithoutbreakingintotheproperty'
    },
    {
      code: '6A',
      index: 84,
      text: 'Travel - Loss of Baggage',
      enumType: 'TravelLossofBaggage'
    },
    {
      code: '5B',
      index: 85,
      text: 'Underground services damage caused by cables',
      enumType: 'Undergroundservicesdamagecausedbycables'
    },
    {
      code: '5C',
      index: 86,
      text: 'Underground services damage caused by drains',
      enumType: 'Undergroundservicesdamagecausedbydrains'
    },
    {
      code: '5D',
      index: 87,
      text: 'Underground services damage caused by pipes',
      enumType: 'Undergroundservicesdamagecausedbypipes'
    },
    {
      code: '5E',
      index: 88,
      text: 'Underground services damage caused by underground tank',
      enumType: 'Undergroundservicesdamagecausedbyundergroundtank'
    }
  ],
  EligibilityReasons: [
    {
      code: 'CLA01',
      index: 1,
      text: 'Claims history',
      enumType: 'ClaimsHistory'
    },
    {
      code: 'MAT01',
      index: 2,
      text: 'Material fact disclosed while policy in force',
      enumType: 'MaterialFactDisclosed',
      overrideText: ['Material fact disclosed mid-term']
    },
    {
      code: 'PAY01',
      index: 3,
      text: 'Non-payment of premium',
      enumType: 'NonPaymentOfPremium',
      overrideText: ['Premium arrears']
    },
    {
      code: 'LET01',
      index: 4,
      text: 'Let the property out',
      enumType: 'LetThePropertyOut',
      overrideText: ['Property rented out']
    },
    {
      code: 'MOV01',
      index: 5,
      text: 'Moved house',
      enumType: 'MovedHouse',
      overrideText: ['Property sold']
    },
    {
      code: 'REP01',
      index: 6,
      text: 'Property repossessed',
      enumType: 'PropertyRepossessed'
    },
    {
      code: 'UNO01',
      index: 7,
      text: 'Property left unoccupied',
      enumType: 'PropertyLeftUnoccupied',
      overrideText: ['Property unoccupied']
    },
    {
      code: 'CRI01',
      index: 8,
      text: 'Unspent Criminal Conviction',
      enumType: 'UnspentCriminalConviction',
      overrideText: ['Unspent conviction']
    },
    {
      code: 'SCR01',
      index: 9,
      text: 'Spent Criminal Conviction',
      enumType: 'SpentCriminalConviction',
      overrideText: ['Spent conviction']
    },
    {
      code: 'BAN01',
      index: 10,
      text: 'Declared bankrupt',
      enumType: 'DeclaredBankrupt'
    },
    {
      code: 'CCJ01',
      index: 11,
      text: 'County Court Judgment (CCJ)',
      enumType: 'CountyCourtJudgment'
    },
    {
      code: 'IVA01',
      index: 12,
      text: 'Individual Voluntary Arrangement (IVA)',
      enumType: 'IndividualVoluntaryArrangement',
      overrideText: ['Declared insolvent (IVA)']
    },
    {
      code: 'LIA01',
      index: 13,
      text: 'Liability Claim',
      enumType: 'LiabilityClaim',
      overrideText: ['Liability claim']
    },
    {
      code: 'MOT01',
      index: 14,
      text: 'Convicted of motoring offence',
      enumType: 'ConvictedOfMotoringOffence',
      overrideText: ['Motoring conviction']
    },
    {
      code: '99',
      index: 15,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  EligibilitySituationType: [
    {
      code: '1',
      index: 1,
      text: 'Insurance Cancelled',
      enumType: 'InsuranceCancelled'
    },
    {
      code: '2',
      index: 2,
      text: 'Insurance Refused',
      enumType: 'InsuranceRefused'
    },
    {
      code: '3',
      index: 3,
      text: 'Renewal Refused',
      enumType: 'RenewalRefused'
    },
    {
      code: '4',
      index: 4,
      text: 'Special Terms or Conditions Imposed',
      enumType: 'SpecialTermsOrConditionsImposed',
      overrideText: ['Special terms imposed']
    },
    {
      code: '5',
      index: 5,
      text: 'Increased Premium',
      enumType: 'IncreasedPremium'
    }
  ],
  EntryGain: [
    {
      code: '99',
      index: 1,
      text: 'Other',
      enumType: 'Other'
    },
    {
      code: 'GAR01',
      index: 2,
      text: 'Unsecured garage door',
      enumType: 'UnsecuredGarageDoor'
    },
    {
      code: 'GAR02',
      index: 3,
      text: 'Secure garage door',
      enumType: 'SecureGarageDoor'
    },
    {
      code: 'GFD01',
      index: 4,
      text: 'Ground Floor/ accessible door (open)',
      enumType: 'GroundFloorAccessibleDoorOpen'
    },
    {
      code: 'GFD02',
      index: 5,
      text: 'Ground Floor/ accessible door (closed but unlocked)',
      enumType: 'GroundFloorAccessibleDoorClosedButUnlocked'
    },
    {
      code: 'GFD03',
      index: 6,
      text: 'Ground Floor/ accessible door (locked)',
      enumType: 'GroundFloorAaccessibleDoorLocked'
    },
    {
      code: 'GFD04',
      index: 7,
      text: 'Ground Floor/ accessible door smashed through',
      enumType: 'GroundFloorAccessibleDoorSmashedThrough'
    },
    {
      code: 'GFW01',
      index: 8,
      text: 'Ground Floor/ accessible window (open)',
      enumType: 'GroundFloorAccessibleWindowOpen'
    },
    {
      code: 'GFW02',
      index: 9,
      text: 'Ground Floor/ accessible window (closed but unlocked)',
      enumType: 'GroundFloorAccessibleWindowClosedButUnlocked'
    },
    {
      code: 'GFW03',
      index: 10,
      text: 'Ground Floor/ accessible window (locked)',
      enumType: 'GroundFloorAccessibleWindowLocked'
    },
    {
      code: 'GFW04',
      index: 11,
      text: 'Ground Floor/ accessible glass smashed ',
      enumType: 'GroundFloorAccessibleGlassSmashed'
    },
    {
      code: 'SKY01',
      index: 12,
      text: 'Unsecure skylight',
      enumType: 'UnsecureSkylight'
    },
    {
      code: 'SKY02',
      index: 13,
      text: 'Secure skylight',
      enumType: 'SecureSkylight'
    }
  ],
  FloodDefenceType: [
    {
      code: 'CUL01',
      index: 1,
      text: 'Culvert(s)',
      enumType: 'Culverts'
    },
    {
      code: 'FLB01',
      index: 2,
      text: 'Raised floodbank',
      enumType: 'RaisedFloodbank'
    },
    {
      code: 'FLB02',
      index: 3,
      text: 'Additional floodbank',
      enumType: 'AdditionalFloodbank'
    },
    {
      code: 'FLB03',
      index: 4,
      text: 'Floodbank erosion control',
      enumType: 'FloodbankErosionControl'
    },
    {
      code: 'SEA01',
      index: 5,
      text: 'Heightened sea wall',
      enumType: 'HeightenedSeaWall'
    },
    {
      code: 'SEA02',
      index: 6,
      text: 'Broadened sea wall',
      enumType: 'BroadenedSeaWall'
    },
    {
      code: 'SEW01',
      index: 7,
      text: 'Sewer improvement works',
      enumType: 'SewerImprovementWorks'
    },
    {
      code: '99',
      index: 8,
      text: 'Other',
      enumType: 'Other'
    }
  ],
  HowMuchUnderpinned: [
    {
      code: '100',
      index: 1,
      text: '76%-100% (three-quarters to completely underpinned)',
      enumType: 'ThreeQuarters',
      overrideText: ['76% -100% (more than three-quarters)']
    },
    {
      code: '20',
      index: 2,
      text: '1%-20% (up to a fifth)',
      enumType: 'UpToAFifth'
    },
    {
      code: '33',
      index: 3,
      text: '21%-33% (up to a third)',
      enumType: 'UpToAThird'
    },
    {
      code: '50',
      index: 4,
      text: '34%-50% (up to half)',
      enumType: 'UpToHalf'
    },
    {
      code: '75',
      index: 5,
      text: '51%-75% (up to three-quarters)',
      enumType: 'UpToThreeQuarters'
    },
    {
      code: '10',
      index: 6,
      text: 'Just one bay window',
      enumType: 'JustOneBayWindow',
      overrideText: ['One bay window']
    },
    {
      code: '15',
      index: 7,
      text: 'Bay windows only',
      enumType: 'BayWindowsOnly',
      overrideText: ['Multiple bay windows']
    },
    {
      code: '01',
      index: 8,
      text: 'Outbuilding not attached to main property',
      enumType: 'OutbuildingNotAttachedToMainProperty',
      overrideText: ['Outbuilding underpinned only']
    }
  ],
  ImpactOfRenovation: [
    {
      code: '20',
      index: 1,
      text: '1-20% (up to a fifth)',
      enumType: 'UpToAFifthBigger'
    },
    {
      code: '33',
      index: 2,
      text: '21-33% (up to a third)',
      enumType: 'UpToAThirdBigger'
    },
    {
      code: '50',
      index: 3,
      text: '34-50% (up to half)',
      enumType: 'UpToHalf'
    },
    {
      code: '75',
      index: 4,
      text: '51-75% (up to three-quarters)',
      enumType: 'UpToThreeQuarters'
    },
    {
      code: '100',
      index: 5,
      text: '76-100% (more than three-quarters)',
      enumType: 'ThreeQuartersBigger'
    },
    {
      code: '101PLUS',
      index: 6,
      text: '>100% (more than twice the size)',
      enumType: 'MoreThanTwiceTheSize'
    },
    {
      code: 'N',
      index: 7,
      text: '0% (no change)',
      enumType: 'NoChange'
    },
    {
      code: '-1',
      index: 8,
      text: 'Property footprint reduced',
      enumType: 'PropertyFootprintreduced'
    }
  ],
  NatureOfRenovation: [
    {
      code: 'FOU01',
      index: 1,
      text: 'New footings/ foundations',
      enumType: 'NewFootingsFoundations'
    },
    {
      code: 'EXT02',
      index: 2,
      text: 'Double storey extension',
      enumType: 'DoubleStoreyExtension'
    },
    {
      code: 'EXT01',
      index: 3,
      text: 'Single storey extension',
      enumType: 'SingleStoreyExtension'
    },
    {
      code: 'STR01',
      index: 4,
      text: 'Work on load-bearing walls',
      enumType: 'StructuralChange'
    },
    {
      code: 'LFT01',
      index: 5,
      text: 'Loft conversion',
      enumType: 'LoftConversion'
    },
    {
      code: 'RER01',
      index: 6,
      text: 'Roofing work',
      enumType: 'BeingReroofed'
    },
    {
      code: 'REW01',
      index: 7,
      text: 'Rewiring or replumbing',
      enumType: 'Rewiring'
    },
    {
      code: 'KIT01',
      index: 8,
      text: 'New kitchen or bathroom',
      enumType: 'NewKitchenOrBathroom'
    },
    {
      code: 'GAR02',
      index: 9,
      text: 'Attached garage/ outbuilding',
      enumType: 'NewGarageOutbuildingFormingPartOfMain'
    },
    {
      code: 'REP01',
      index: 10,
      text: 'Property damage repairs',
      enumType: 'Repairs'
    },
    {
      code: 'GAR01',
      index: 11,
      text: 'Unattached garage/ outbuilding',
      enumType: 'NewGarageOutbuildingNotAttached'
    },
    {
      code: 'COS01',
      index: 12,
      text: 'Cosmetic works',
      enumType: 'CosmeticOnly'
    },
    {
      code: 'GDN01',
      index: 13,
      text: 'Garden/landscaping',
      enumType: 'GardenWork'
    },
    {
      code: '99',
      index: 14,
      text: 'Other',
      enumType: 'Other'
    },
    {
      code: 'NEW01',
      index: 15,
      text: 'Ground up construction or basement excavation ',
      enumType: 'GroundUpConstruction'
    }
  ],
  NotGoodStateOfRepairReasons: [
    {
      code: 'INH01',
      index: 1,
      text: 'Habitable - Recently inherited (improvement work planned)',
      enumType: 'RecentlyInheritedImprovementWorkPlanned'
    },
    {
      code: 'INH02',
      index: 2,
      text: 'Habitable - Recently inherited (no improvement work planned)',
      enumType: 'RecentlyInheritedNoImprovementWorkPlanned'
    },
    {
      code: 'PRO01',
      index: 3,
      text: 'Habitable - In probate',
      enumType: 'InProbate'
    },
    {
      code: 'PUR01',
      index: 4,
      text: 'Habitable -  Recently purchased (improvement work planned)',
      enumType: 'RecentlyPurchasedImprovementWorkPlanned'
    },
    {
      code: 'PUR02',
      index: 5,
      text: 'Habitable - Recently purchased (no improvement work planned)',
      enumType: 'RecentlyPurchasedNoImprovementWorkPlanned'
    },
    {
      code: 'DER01',
      index: 6,
      text: 'Uninhabitable - Derelict',
      enumType: 'Derelict'
    },
    {
      code: 'FIR01',
      index: 7,
      text: 'Uninhabitable - Fire damaged',
      enumType: 'FireDamaged'
    },
    {
      code: 'SUB01',
      index: 8,
      text: 'Uninhabitable - Damaged by subsidence/structural movement and not remedied',
      enumType: 'DamagedBySubsidence'
    },
    {
      code: 'REN01',
      index: 9,
      text: 'Renovations as advised in this application',
      enumType: 'RenovationsAsAdvised'
    },
    {
      code: 'REN02',
      index: 10,
      text: 'Renovations (other)',
      enumType: 'RenovationsOther'
    },
    {
      code: '99',
      index: 11,
      text: 'Other',
      enumType: 'Other'
    }
  ]
};
