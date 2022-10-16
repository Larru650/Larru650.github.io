- Multiple matches against a code for HighRiskItemCategory (see C07; Glassware, Porcelain, China)

- BankruptcyReason and BankruptcySituation are identical. We should surely remove one of them.

- Missing matches in Enums:

  Processing Enums/Person/OcuppationTypeList.cs (1730 candidates)
  The code 'U07' is new for Enum ('OccupationType'): {"code":"U07","index":0,"text":"Not Employed Due to Disability","enumType":"U07"}

  Processing Enums/Person/BusinessTypeList.cs (941 candidates)
  The code '947' is new for Enum ('BusinessType'): {"code":"947","index":0,"text":"None - Retired","enumType":"947"}
  The code '948' is new for Enum ('BusinessType'): {"code":"948","index":0,"text":"None - Household Duties","enumType":"948"}
  The code '949' is new for Enum ('BusinessType'): {"code":"949","index":0,"text":"None - Not Employed due to Disability","enumType":"949"}
  The code '950' is new for Enum ('BusinessType'): {"code":"950","index":0,"text":"None - Student","enumType":"950"}
  The code for '164' does not match in Enum ('BusinessType')
  Existing: {"code":"164","index":547,"text":"Other ","enumType":"OtherNotSignificantForUnderwriting"}
  New: {"code":"164","index":547,"text":"Other","enumType":"OtherNotSignificantForUnderwriting"}

- Duplicated values (with separate codes) in Q&B site (refer qabEnumTypes.ts):

  - "Horse Riding Instructor"
  - "Junk Shop Proprietor"
  - "Motor Racing Organiser"
  - "Pools Collector"
  - "Private Investigator"

- We need to test/verify adding a separate name to each of Cancelled Insurance, Bankruptcy, Liability Claim, Criminal Conviction.
