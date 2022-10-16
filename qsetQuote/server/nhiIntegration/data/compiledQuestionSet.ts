export const compiledQuestionSet = {
  questionSetId: '733bb11b-d17e-4fc5-9f6d-9ad3dbcf811b',
  version: 'v1.0.159',
  friendlyName: 'Quote Journey',
  timestamp: '2020-10-23T18:07:53.361Z',
  stylesheets: [],
  questionFormats: ['fluent', 'standard', 'narrative'],
  questions: {
    '041fb9d0-3d1f-11ea-b675-ffaf1ec7b93a': {
      questionId: '041fb9d0-3d1f-11ea-b675-ffaf1ec7b93a',
      name: 'coverType',
      dataType: 'string',
      label: 'Cover Type',
      mappingField: 'TypeOfCover',
      data: {
        textAndStyle: {
          standard: { controlType: 'ImageButtonList', questionText: 'What would you like your insurance to cover?' }
        },
        helpInfo: {
          helpText:
            '<strong>Buildings:</strong><br /><br />Your buildings are classed as the actual structure of the property and its decorations including fixtures and fittings (including fitted carpets). It also includes outbuildings, garages, drives, patios, walls, fences, tennis courts and swimming pools.<br /><br /><strong>Contents:</strong><br /><br />Your contents are classed as your household goods, eg furniture, furnishings, rugs, curtains, clothes, televisions, etc. as well as valuables and personal belongings within the home. These must be your property or of a joint policyholder or of anyone permanently living at the property.'
        },
        lookup: {
          BC: { text: 'Buildings & Contents', image: 'coverTypes/B_C_Icon.png' },
          B: { text: 'Buildings only', image: 'coverTypes/B_Icon.png' },
          C: { text: 'Contents only', image: 'coverTypes/C_Icon.png' }
        },
        validation: [{ type: 'required', message: 'Please choose an option.' }]
      },
      sectionId: '774caad0-4125-11ea-b9f2-237954363c83',
      order: 1,
      groupOrder: 0,
      gtmTag: 'cover-type'
    },
    'f29621e0-3d1e-11ea-b675-ffaf1ec7b93a': {
      questionId: 'f29621e0-3d1e-11ea-b675-ffaf1ec7b93a',
      name: 'coverStart',
      dataType: 'string',
      defaultExpr: '{{function:f001}}',
      label: 'Cover start',
      mappingField: 'StartDate',
      data: {
        textAndStyle: { standard: { controlType: 'DatePicker', questionText: 'When do you need cover to start?' } },
        validation: [
          { type: 'required' },
          { type: 'date', minValueExpr: '{{function:f002}}', maxValueExpr: '{{function:f003}}' }
        ]
      },
      sectionId: '774caad0-4125-11ea-b9f2-237954363c83',
      order: 2,
      gtmTag: 'cover-start'
    },
    'fe7e0ad0-4125-11ea-b9f2-237954363c83': {
      questionId: 'fe7e0ad0-4125-11ea-b9f2-237954363c83',
      name: 'toPropertyType',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Continue', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'next-section' }]
      },
      groupId: 'button-grouping',
      sectionId: '774caad0-4125-11ea-b9f2-237954363c83',
      order: 3,
      groupOrder: 0,
      gtmTag: 'to-property-type'
    },
    'ed919978-ffcd-42a7-b507-3f728e1f8929': {
      questionId: 'ed919978-ffcd-42a7-b507-3f728e1f8929',
      name: 'propertyNameNumber',
      dataType: 'string',
      mappingField: 'PropertyNameNumber',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'House number or name' } },
        dependentAnswers: { '86676452-9631-4ca5-a93d-e0217990a253': [{ condition: '{{function:f004}}', answer: '' }] },
        validation: [{ type: 'required', message: 'Please enter your house name or number.' }]
      },
      groupId: 'address',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 1,
      gtmTag: 'property-name-number'
    },
    '2a9c97ad-838a-429d-ad36-ee92fe8954cd': {
      questionId: '2a9c97ad-838a-429d-ad36-ee92fe8954cd',
      name: 'postcode',
      dataType: 'string',
      mappingField: 'PostCode',
      data: {
        textAndStyle: { standard: { controlType: 'PostCodeInput', questionText: 'Postcode' } },
        dependentAnswers: { '86676452-9631-4ca5-a93d-e0217990a253': [{ condition: '{{function:f005}}', answer: '' }] },
        validation: [{ type: 'required', message: 'Please enter your postcode.' }]
      },
      groupId: 'address',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 1,
      gtmTag: 'postcode'
    },
    '41569e85-b7d3-41ae-8ab7-20f878933158': {
      questionId: '41569e85-b7d3-41ae-8ab7-20f878933158',
      name: 'addressLookupButton',
      dataType: 'button',
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Lookup' } },
        dependentActions: [
          {
            action: 'validate-fields',
            props: {
              fieldsToValidate: ['ed919978-ffcd-42a7-b507-3f728e1f8929', '2a9c97ad-838a-429d-ad36-ee92fe8954cd']
            }
          },
          {
            action: 'address-lookup',
            props: {
              searchFields: ['2a9c97ad-838a-429d-ad36-ee92fe8954cd', 'ed919978-ffcd-42a7-b507-3f728e1f8929'],
              lookupResultsId: '225c6c3d-df13-411e-ad19-5fddaf372aac',
              lookupButtonId: '41569e85-b7d3-41ae-8ab7-20f878933158',
              noResultsFoundMessage:
                'No addresses match the values you entered. Try something less specific or enter the address manually.',
              errorLoadingAddressesMessage:
                "We're having problems loading the addresses. Please try again or enter your address manually."
            }
          }
        ],
        validation: [
          {
            type: 'custom',
            validator: '{{function:f006}}',
            message:
              'Please start typing an address or postcode in the search field and select a result or manually enter an address.'
          }
        ]
      },
      groupId: 'address',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 1,
      gtmTag: 'address-lookup-button'
    },
    '0eaee082-5b1f-4d89-9060-bb34d2649f45': {
      questionId: '0eaee082-5b1f-4d89-9060-bb34d2649f45',
      name: 'addressEnterManuallyButton',
      dataType: 'boolean',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Switch', questionText: '' } },
        lookup: { false: { text: 'Use address lookup' }, true: { text: 'Enter manually' } }
      },
      groupId: 'address',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 1,
      gtmTag: 'address-enter-manually-button'
    },
    '225c6c3d-df13-411e-ad19-5fddaf372aac': {
      questionId: '225c6c3d-df13-411e-ad19-5fddaf372aac',
      name: 'addressLookupResults',
      dataType: 'string',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'DropDownList',
            placeholder: 'Select an address',
            questionText: '',
            sortItemsBy: 'numberPrefixedStringSorter'
          }
        },
        dependentActions: [
          {
            action: 'address-select',
            props: {
              lookupResultsId: '225c6c3d-df13-411e-ad19-5fddaf372aac',
              lookupButtonId: '41569e85-b7d3-41ae-8ab7-20f878933158',
              searchFields: ['propertyNameNumberSearchTerm', 'postcodeSearchTerm'],
              errorLoadingAddressMessage:
                "We're having problems loading the address you selected. Please try again or enter your address manually."
            }
          }
        ],
        dependentAnswers: {
          'ed919978-ffcd-42a7-b507-3f728e1f8929': [{ condition: '{{function:f007}}', answerExpr: '{{function:f008}}' }],
          '93680d0a-8dcb-40fd-a874-85a31a1b7c7b': [{ condition: '{{function:f009}}', answerExpr: '{{function:f010}}' }],
          '1e9d0d76-7227-4fc6-83c5-bd8d280f2755': [{ condition: '{{function:f011}}', answerExpr: '{{function:f012}}' }],
          'be180206-55aa-403d-a0b3-5854c97665b0': [{ condition: '{{function:f013}}', answerExpr: '{{function:f014}}' }],
          '6e5b62a7-f89a-48d3-b758-46b099d35eb6': [{ condition: '{{function:f015}}', answerExpr: '{{function:f016}}' }],
          '2a9c97ad-838a-429d-ad36-ee92fe8954cd': [{ condition: '{{function:f017}}', answerExpr: '{{function:f018}}' }],
          '86676452-9631-4ca5-a93d-e0217990a253': [{ condition: '{{function:f019}}', answerExpr: '{{function:f020}}' }],
          '4a96bc2b-002a-4376-a27e-76302eaf6347': [{ condition: '{{function:f021}}', answerExpr: '{{function:f022}}' }]
        },
        validation: [{ type: 'required', condition: '{{function:f023}}', message: 'You need to select an address' }]
      },
      groupId: 'address',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 1,
      gtmTag: 'address-lookup-results'
    },
    '86676452-9631-4ca5-a93d-e0217990a253': {
      questionId: '86676452-9631-4ca5-a93d-e0217990a253',
      name: 'addressId',
      dataType: 'number',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Address ID' } },
        dependentAnswers: { '4a96bc2b-002a-4376-a27e-76302eaf6347': [{ condition: '{{function:f024}}', answer: '' }] },
        validation: [{ type: 'integer', messages: {} }]
      },
      groupId: 'address',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 1,
      gtmTag: 'address-id'
    },
    '4a96bc2b-002a-4376-a27e-76302eaf6347': {
      questionId: '4a96bc2b-002a-4376-a27e-76302eaf6347',
      name: 'addressLookupJson',
      dataType: 'string',
      mappingField: 'AddressLookupJson',
      data: { textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Address Lookup JSON' } } },
      groupId: 'address',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 1
    },
    '93680d0a-8dcb-40fd-a874-85a31a1b7c7b': {
      questionId: '93680d0a-8dcb-40fd-a874-85a31a1b7c7b',
      name: 'addressLine1',
      dataType: 'string',
      label: 'Address first line',
      mappingField: 'AddressLine1',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Address Line 1' } },
        validation: [{ type: 'required', condition: '{{function:f025}}' }]
      },
      groupId: 'address',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 1,
      gtmTag: 'address-line1'
    },
    '1e9d0d76-7227-4fc6-83c5-bd8d280f2755': {
      questionId: '1e9d0d76-7227-4fc6-83c5-bd8d280f2755',
      name: 'addressLine2',
      dataType: 'string',
      mappingField: 'AddressLine2',
      data: { textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Address Line 2' } } },
      groupId: 'address',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 1,
      gtmTag: 'address-line2'
    },
    'be180206-55aa-403d-a0b3-5854c97665b0': {
      questionId: 'be180206-55aa-403d-a0b3-5854c97665b0',
      name: 'townCity',
      dataType: 'string',
      label: 'Town/City',
      mappingField: 'TownCity',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Town or City' } },
        validation: [{ type: 'required', condition: '{{function:f026}}' }]
      },
      groupId: 'address',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 1,
      gtmTag: 'town-city'
    },
    '6e5b62a7-f89a-48d3-b758-46b099d35eb6': {
      questionId: '6e5b62a7-f89a-48d3-b758-46b099d35eb6',
      name: 'county',
      dataType: 'string',
      label: 'County',
      mappingField: 'County',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'County' } },
        validation: [{ type: 'required', condition: '{{function:f027}}' }]
      },
      groupId: 'address',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 1,
      gtmTag: 'county'
    },
    '8b7bd543-0855-4873-a3ad-cb32739480c0': {
      questionId: '8b7bd543-0855-4873-a3ad-cb32739480c0',
      name: 'contactAddressLookupJson',
      dataType: 'string',
      mappingField: 'CorrespondenceAddressLookupJson',
      data: { textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Address Lookup JSON' } } },
      groupId: 'address',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 1
    },
    'db024fe7-4c2d-41b3-80ea-2ce74ad8d869': {
      questionId: 'db024fe7-4c2d-41b3-80ea-2ce74ad8d869',
      name: 'propertyType',
      dataType: 'string',
      label: 'Property type',
      mappingField: 'PropertyTypeGrouping',
      data: {
        textAndStyle: { standard: { controlType: 'ImageButtonList', questionText: 'What type of property is it?' } },
        lookup: {
          House: { image: 'houseTypes/house.png' },
          Flat: { image: 'houseTypes/flat.png' },
          Bungalow: { image: 'houseTypes/bungalow.png' },
          Other: { image: 'houseTypes/other.png' }
        },
        validation: [{ type: 'required', message: 'Please choose a property sub type.' }]
      },
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 4,
      gtmTag: 'property-type'
    },
    '021d512c-8fe2-4463-bfaa-0b6d33141d5b': {
      questionId: '021d512c-8fe2-4463-bfaa-0b6d33141d5b',
      name: 'house',
      dataType: 'string',
      label: 'House type',
      mappingField: 'PropertyType~House',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'DropDownList',
            placeholder: 'Select the type of house',
            questionText: 'What type of house is it?'
          }
        },
        lookup: {
          'Semi-Detached House': null,
          'Terraced House': null,
          'End-Terraced House': null,
          'Mid-Terraced House': null,
          'Detached House': null
        },
        validation: [{ type: 'required', message: 'Please tell us what type of house it is.' }]
      },
      prerequisites: ['{{function:f028}}'],
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 5,
      gtmTag: 'house'
    },
    '32440682-463d-462d-a633-a63614a52983': {
      questionId: '32440682-463d-462d-a633-a63614a52983',
      name: 'flat',
      dataType: 'string',
      label: 'Flat type',
      mappingField: 'PropertyType~Flat',
      data: {
        textAndStyle: { standard: { controlType: 'DropDownList', questionText: 'What type of flat is it?' } },
        lookup: {
          'Above Second Floor Flat Conversion': null,
          'Above Second Floor Flat Purpose Built Flat': null,
          'Basement Flat Conversion': null,
          'Basement Purpose Built Flat': null,
          'First Floor Flat Conversion': null,
          'First Floor Purpose Built Flat': null,
          'Second Floor Flat Conversion': null,
          'Second Floor Flat Purpose Built Flat': null
        },
        validation: [{ type: 'required', message: 'Please tell us what type of flat it is.' }]
      },
      prerequisites: ['{{function:f029}}'],
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 6,
      gtmTag: 'flat'
    },
    '2e9b33c7-1e5f-4433-9981-a6e270f6b4e2': {
      questionId: '2e9b33c7-1e5f-4433-9981-a6e270f6b4e2',
      name: 'bungalow',
      dataType: 'string',
      label: 'Bungalow type',
      mappingField: 'PropertyType~Bungalow',
      data: {
        textAndStyle: {
          standard: { controlType: 'DropDownList', layout: 'float', questionText: 'What type of bungalow is it?' }
        },
        lookup: {
          'Detached Bungalow': null,
          'Terraced Bungalow': null,
          'End-Terraced Bungalow': null,
          'Mid-Terraced Bungalow': null,
          'Semi-Detached Bungalow': null
        },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f030}}'],
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 7,
      gtmTag: 'bungalow'
    },
    '30ef1e9f-752f-454f-a154-0cc440f6ee7c': {
      questionId: '30ef1e9f-752f-454f-a154-0cc440f6ee7c',
      name: 'other',
      dataType: 'string',
      mappingField: 'PropertyType~Other',
      data: {
        textAndStyle: { standard: { controlType: 'DropDownList', questionText: 'What type of property is it?' } },
        lookup: {
          'Bedsit/Room - as tenant': null,
          'Bedsits/Rooms - as landlord': null,
          Chalet: null,
          'Converted Barn': null,
          'House Boat': null,
          Maisonette: null,
          Mansion: null,
          'Mobile Home': null,
          'Residential Caravan': null,
          'Student hall of residence': null
        },
        validation: [{ type: 'required', message: 'Please tell us what type of property it is.' }]
      },
      prerequisites: ['{{function:f031}}'],
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 8,
      gtmTag: 'other'
    },
    '6516e060-3d1f-11ea-b235-d7e3a967f0e2': {
      questionId: '6516e060-3d1f-11ea-b235-d7e3a967f0e2',
      name: 'ownOrRent',
      dataType: 'string',
      mappingField: 'WhoOwnsTheProperty',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: "Do you (or will you) own or rent the property you're insuring?"
          }
        },
        helpInfo: { infoText: "If you are a landlord then please select the appropriate 'own' option" },
        lookup: {
          OWN01: { text: 'Own (Outright)' },
          MOR01: { text: 'Own (Mortgage)' },
          SHA01: { text: 'Own (Shared Equity)' },
          RPL01: { text: 'Rent (from a Landlord)' },
          RLA01: { text: 'Rent (from Local Authority)' },
          RHA01: { text: 'Rent (from Housing Association)' },
          ky99: { text: 'Other' }
        },
        validation: [{ type: 'required', message: 'Please answer this question.' }]
      },
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 9,
      groupOrder: 0,
      gtmTag: 'own-or-rent'
    },
    '068552d9-e0b5-4610-9b6c-f6286491b95b': {
      questionId: '068552d9-e0b5-4610-9b6c-f6286491b95b',
      name: 'yearBuilt',
      dataType: 'number',
      label: 'Property year built',
      mappingField: 'PropertyBuildYear',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'TextInput',
            helpText:
              "Please give the approximate year that the property's foundations were first built - not subsequent re-builds, renovations or extensions. If you don't know when the property was built, please check your mortgage valuation or a previous survey. If you are still unsure please enter your best estimate.",
            questionText: 'Using your best estimate, when was the property built?',
            width: 'x-small'
          }
        },
        validation: [
          { type: 'required', message: 'Please enter the year the property was built.' },
          {
            type: 'integer',
            minValueExpr: '{{function:f032}}',
            maxValueExpr: '{{function:f033}}',
            messages: { invalidFormat: '${messagePrefix} needs to contain a numeric value' }
          }
        ]
      },
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 10,
      groupOrder: 0,
      gtmTag: 'year-built'
    },
    'c63fc550-3d1f-11ea-a779-c7fec508e6ed': {
      questionId: 'c63fc550-3d1f-11ea-a779-c7fec508e6ed',
      name: 'bedrooms',
      dataType: 'string',
      label: 'Number of bedrooms',
      mappingField: 'NumberOfBedrooms',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'How many bedrooms does the property have?' }
        },
        helpInfo: {
          infoText:
            'You need to include rooms that were originally designed for sleeping in even if they are now used for other purposes, or rooms that have been adapted or converted for sleeping in e.g. loft conversions.'
        },
        lookup: {
          '1': null,
          '2': null,
          '3': null,
          '4': null,
          '5': null,
          '6': null,
          '7': null,
          '8': null,
          '9': null,
          '11': { text: '10 or more' }
        },
        validation: [{ type: 'required', message: 'Please select the number of bedrooms.' }]
      },
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 11,
      groupOrder: 0,
      gtmTag: 'bedrooms'
    },
    '26809430-3d20-11ea-a779-c7fec508e6ed': {
      questionId: '26809430-3d20-11ea-a779-c7fec508e6ed',
      name: 'insuranceTypeLength',
      dataType: 'string',
      label: 'Insurance type length',
      mappingField: 'YearsHeldBuildingInsurance',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'How many years have you continuously held this type of insurance?'
          }
        },
        helpInfo: {
          helpText:
            "Used to calculate your No Claims Discount (NCD) which could save you up to 25%.<br /><br /><strong>Important</strong>: A gap between one policy ending and another one starting will affect your NCD. For example, if you were insured claim-free for two years, had a month's break, and were then insured claim-free for another four years, your NCD will be four years.<br /><br /><strong>NCD validity</strong>: NCD is only valid for the type of insurance it was earned on. For example, NCD earned on buildings insurance can only be used against buildings insurance; it cannot be used against contents insurance."
        },
        lookup: {
          N: { text: '0' },
          ky1: { text: '1' },
          ky2: { text: '2' },
          ky3: { text: '3' },
          ky4: { text: '4' },
          ky5: { text: '5' },
          ky6: { text: '6' },
          ky7: { text: '7' },
          ky8: { text: '8' },
          ky9: { text: '9' },
          ky50: { text: '10 or more' }
        },
        validation: [{ type: 'required', message: 'Please enter how long you held this type of insurance for.' }]
      },
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 12,
      groupOrder: 0,
      gtmTag: 'insurance-type-length'
    },
    '94e2e23d-f5fe-4174-81d6-4dad96af808d': {
      questionId: '94e2e23d-f5fe-4174-81d6-4dad96af808d',
      name: 'toCoverDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Back', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'previous-section' }]
      },
      groupId: 'button-grouping',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 30,
      groupOrder: 0,
      gtmTag: 'to-property-type'
    },
    '9069255c-6249-4897-8001-914416458ba1': {
      questionId: '9069255c-6249-4897-8001-914416458ba1',
      name: 'continueButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Continue', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'next-section' }]
      },
      groupId: 'button-grouping',
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      order: 31,
      groupOrder: 0,
      gtmTag: 'continue-button'
    },
    '0a6c86ed-9428-4de3-b52a-ec94cb99ba4d': {
      questionId: '0a6c86ed-9428-4de3-b52a-ec94cb99ba4d',
      name: 'validateButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Validate', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'validate-fields' }]
      },
      prerequisites: ['{{function:f034}}'],
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      order: 1,
      groupOrder: 0,
      gtmTag: 'validate-button'
    },
    'bf942e40-3d32-11ea-a5a2-976afc8b4d0a': {
      questionId: 'bf942e40-3d32-11ea-a5a2-976afc8b4d0a',
      name: 'wallMaterial',
      dataType: 'string',
      label: 'Wall material',
      mappingField: 'WallConstructionMaterialTypePictorial',
      data: {
        textAndStyle: {
          standard: { controlType: 'ImageButtonList', questionText: 'What are the external walls built with?' }
        },
        lookup: {
          ky02: { text: 'Brick', image: 'wallMaterials/brick.png' },
          ky16: { text: 'Stone', image: 'wallMaterials/stone.png' },
          ky99: { text: 'Other', image: 'wallMaterials/other.png' }
        },
        validation: [{ type: 'required', message: 'Please select what your external walls are made of.' }]
      },
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      order: 1,
      groupOrder: 0,
      gtmTag: 'wall-material'
    },
    '0a249ee0-3d33-11ea-a5a2-976afc8b4d0a': {
      questionId: '0a249ee0-3d33-11ea-a5a2-976afc8b4d0a',
      name: 'wallMaterialOther',
      dataType: 'string',
      label: 'Wall material other',
      mappingField: 'WallConstructionMaterialTypeSelected',
      data: {
        textAndStyle: {
          standard: { controlType: 'DropDownList', questionText: 'Please select what your walls are made of:' }
        },
        lookup: {
          ky03: { text: 'Brick/Timber' },
          ky18: { text: 'Timber' },
          ky19: { text: 'Timber Frame' },
          ky20: { text: 'Timber/Plaster' },
          ky01: { text: 'Asbestos' },
          ky04: { text: 'Cob' },
          ky05: { text: 'Concrete' },
          ky06: { text: 'Corrugated Iron' },
          ky07: { text: 'Essex Construction' },
          ky08: { text: 'Fibreglass' },
          ky09: { text: 'Flint' },
          ky10: { text: 'Glass' },
          ky11: { text: 'Metal' },
          ky12: { text: 'Plastic' },
          ky13: { text: 'Prefab/ Combustible' },
          ky14: { text: 'Prefab/ Non-Combustible' },
          ky17: { text: 'Stramit' },
          ky21: { text: 'Wattle & Daub' },
          ky22: { text: 'Woodwall' },
          ky23: { text: 'Woodwork' }
        },
        validation: [{ type: 'required', message: 'Please choose a wall material.' }]
      },
      prerequisites: ['{{function:f035}}'],
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      order: 2,
      groupOrder: 0,
      gtmTag: 'wall-material-other'
    },
    '5b5a98a1-2a77-4aff-b5fc-412c63e34100': {
      questionId: '5b5a98a1-2a77-4aff-b5fc-412c63e34100',
      name: 'roofMaterial',
      dataType: 'string',
      label: 'Roof material',
      mappingField: 'RoofConstructionMaterial',
      data: {
        textAndStyle: { standard: { controlType: 'DropDownList', questionText: 'What is the main roof made of?' } },
        lookup: {
          ky15: { text: 'Tile' },
          ky10: { text: 'Slate' },
          ky02: { text: 'Concrete' },
          ky01: { text: 'Asbestos' },
          ky19: { text: 'Asphalt' },
          ky03: { text: 'Corrugated Iron' },
          ky20: { text: 'Eco' },
          ky04: { text: 'Felt On Timber' },
          ky05: { text: 'Fibreglass' },
          ky06: { text: 'Glass' },
          ky07: { text: 'Metal' },
          ky08: { text: 'Plastic' },
          ky09: { text: 'Shingle' },
          ky12: { text: 'Stramit' },
          ky13: { text: 'Thatch' },
          ky16: { text: 'Timber' },
          ky17: { text: 'Turnerised' },
          ky18: { text: 'Woodwork Construction' }
        },
        validation: [{ type: 'required', message: 'Please select what your roof is made of.' }]
      },
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      order: 3,
      groupOrder: 0,
      gtmTag: 'roof-material'
    },
    'd8b1f870-3d33-11ea-9262-3fcbef26986f': {
      questionId: 'd8b1f870-3d33-11ea-9262-3fcbef26986f',
      name: 'thatchedRoof',
      dataType: 'boolean',
      default: false,
      label: 'Thatched roof',
      mappingField: 'IsRoofThatched',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Is any of the roof thatched?' } },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      visible: false,
      order: 4,
      groupOrder: 0,
      gtmTag: 'thatched-roof'
    },
    '45a50da0-3d34-11ea-9262-3fcbef26986f': {
      questionId: '45a50da0-3d34-11ea-9262-3fcbef26986f',
      name: 'flatRoof',
      dataType: 'boolean',
      default: false,
      label: 'Flat roof',
      mappingField: 'IsRoofMoreThan33PercentFlat',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Is the roof more than 33% flat?' } },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      visible: false,
      order: 5,
      groupOrder: 0,
      gtmTag: 'flat-roof'
    },
    '15b30c60-3d38-11ea-9270-e124e355055b': {
      questionId: '15b30c60-3d38-11ea-9270-e124e355055b',
      name: 'flatRoofPercentage',
      dataType: 'string',
      label: 'Flat roof percentage',
      mappingField: 'PercentageOfRoofFlat',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            informationText: 'Test',
            questionText: 'What percentage of the roof is flat?'
          }
        },
        lookup: {
          '50': { text: 'Up to half' },
          '75': { text: 'Up to three quarters' },
          '100': { text: 'Over three-quarters' }
        },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f036}}'],
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      order: 6,
      groupOrder: 0,
      gtmTag: 'flat-roof-percentage'
    },
    '55a91700-3d34-11ea-9262-3fcbef26986f': {
      questionId: '55a91700-3d34-11ea-9262-3fcbef26986f',
      name: 'propertyPartListed',
      dataType: 'boolean',
      default: false,
      label: 'Listed property',
      mappingField: 'PropertyIsListed',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Is any part of the property listed?' } },
        helpInfo: {
          helpText:
            'A listed building is one which has been placed on the Statutory List of Buildings of Special Architectural or Historic Interest. In England &amp; Wales you can search The National Heritage List (<a href="https://www.english-heritage.org.uk/">https://www.english-heritage.org.uk/</a>) to find out if your property is listed. Alternatively you can contact your local authority.<br /><br />  As a guide:<br /><ul><li>All buildings built before 1700 which survive in anything like their original condition are listed, as are most of those built between 1700 and 1840.-   Post 1945, buildings have to be exceptionally important to be listed.-   A building normally has to be over 30 years old to be listed.</li></ul>'
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      visible: false,
      order: 7,
      groupOrder: 0,
      gtmTag: 'property-part-listed'
    },
    '7c78dce0-3d38-11ea-9270-e124e355055b': {
      questionId: '7c78dce0-3d38-11ea-9270-e124e355055b',
      name: 'propertyPartListingGrade',
      dataType: 'string',
      label: 'Grade of listing',
      mappingField: 'PropertyListingGrade',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            informationText: 'Test',
            layout: 'vertical',
            questionText: 'Which grade of listing is it?'
          }
        },
        lookup: {
          EX01: { text: 'Grade I Star' },
          GRD01: { text: 'Grade I' },
          GRD02: { text: 'Grade A (Scotland & N Ireland)' },
          GRD03: { text: 'Grade II Star' },
          GRD04: { text: 'Grade B (Scotland & N Ireland)' },
          GRD05: { text: 'Grade II' },
          GRD06: { text: 'Grade C (Scotland & N Ireland)' }
        },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f037}}'],
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      order: 8,
      groupOrder: 0,
      gtmTag: 'property-part-listing-grade'
    },
    '610d8090-3d34-11ea-9262-3fcbef26986f': {
      questionId: '610d8090-3d34-11ea-9262-3fcbef26986f',
      name: 'belowGroundLevelArea',
      dataType: 'boolean',
      default: false,
      label: 'Area below ground',
      mappingField: 'PropertyHasBelowGroundLevel',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Does the property have a basement, cellar or other area below ground level?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      visible: false,
      order: 9,
      groupOrder: 0,
      gtmTag: 'below-ground-level-area'
    },
    '4420dc2b-4909-424f-892d-d7c444de66ae': {
      questionId: '4420dc2b-4909-424f-892d-d7c444de66ae',
      name: 'toPropertyType',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Back', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'previous-section' }]
      },
      groupId: 'button-grouping',
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      order: 10,
      groupOrder: 0,
      gtmTag: 'to-contents'
    },
    'b9bf2f40-41b2-11ea-891e-c99fdec013eb': {
      questionId: 'b9bf2f40-41b2-11ea-891e-c99fdec013eb',
      name: 'toCircumstances',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Continue', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'next-section' }]
      },
      groupId: 'button-grouping',
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      order: 11,
      groupOrder: 0,
      gtmTag: 'to-circumstances'
    },
    '80d00960-3d35-11ea-9270-e124e355055b': {
      questionId: '80d00960-3d35-11ea-9270-e124e355055b',
      name: 'rebuildingCost',
      dataType: 'number',
      label: 'Rebuilding cost',
      mappingField: 'PropertyRebuildCost',
      data: {
        textAndStyle: {
          standard: { controlType: 'CurrencyInput', questionText: 'What is the cost of rebuilding the property?' }
        },
        helpInfo: {
          infoText:
            '<h3>Quick guide to rebuild costs</h3>  <details>\n<br />  <summary><strong>Things to consider</strong></summary>\n<br />  This is the cost to rebuild the property if destroyed or damaged beyond repair. The rebuild cost is different to market value as it does not include the cost of the land itself.The rebuild cost is different to market value as it does not include the cost of the land itself. It is often lower than the market value unless the property has special architectural features, rare building materials or listed property status. You don\'t need to include the cost of any outbuildings.If you don\'t know the rebuild cost you should be able to find it if you have a recent surveyors report, mortgage valuation report or insurance renewal document. Alternatively, the <a href="https://calculator.bcis.co.uk">Chartered Institute of Surveyors website</a> includes a calculator which may help you decide how much to insure your property for. If you are still unsure, please call us.</details>'
        },
        validation: [
          {
            type: 'currency',
            minValue: 10000,
            maxValue: 10000000,
            messages: { notBetween: 'Must be between £10,000 and £10,000,000.' }
          },
          { type: 'required', message: 'Please enter the cost of rebuilding the property.' }
        ]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 1,
      groupOrder: 0,
      gtmTag: 'rebuilding-cost'
    },
    '99aa5760-3d35-11ea-9270-e124e355055b': {
      questionId: '99aa5760-3d35-11ea-9270-e124e355055b',
      name: 'additionalOutbuildingCover',
      dataType: 'boolean',
      default: true,
      label: 'Additional building cover',
      mappingField: 'Is7500CoverSufficient',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'Your policy includes £7,500 cover for rebuilding or repairing all detached outbuildings. Is this sufficient?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      visible: false,
      order: 1,
      groupOrder: 0,
      gtmTag: 'additional-outbuilding-cover'
    },
    '712c0f70-3d37-11ea-9270-e124e355055b': {
      questionId: '712c0f70-3d37-11ea-9270-e124e355055b',
      name: 'outbuildingsCoverTotalAmount',
      dataType: 'number',
      mappingField: 'OutbuildingRebuildCoverAmount',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'CurrencyInput',
            questionText: 'Please enter the total amount of cover you require for rebuilding or repairing outbuildings.'
          }
        },
        validation: [
          {
            type: 'currency',
            minValue: 7500,
            maxValue: 10000000,
            messages: {
              invalidFormat: '${messagePrefix} needs to contain a numeric value',
              notBetween: 'Please check the amount you have entered. This must be between £7,500 and £10,000,000.'
            }
          },
          { type: 'required', message: 'Please enter the cost of rebuilding the outbuildings.' }
        ]
      },
      prerequisites: ['{{function:f038}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 2,
      groupOrder: 0,
      gtmTag: 'outbuildings-cover-total-amount'
    },
    'db0859a0-3d35-11ea-9270-e124e355055b': {
      questionId: 'db0859a0-3d35-11ea-9270-e124e355055b',
      name: 'stateOfRepair',
      dataType: 'boolean',
      default: true,
      label: 'State of repair',
      mappingField: 'IsInGoodStateOfRepair',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Is the property in a good state of repair and will it be kept so during the policy term?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      visible: false,
      order: 3,
      groupOrder: 0,
      gtmTag: 'state-of-repair'
    },
    '53c3a828-b2fd-4cb5-a3cb-a97e4af203fc': {
      questionId: '53c3a828-b2fd-4cb5-a3cb-a97e4af203fc',
      name: 'stateOfRepairReason',
      dataType: 'string',
      mappingField: 'WhyIsNotInGoodStateOfRepair',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            informationText: 'Test',
            questionText: 'Why is the property not in a good state of repair?'
          }
        },
        lookup: {
          PUR01: { text: 'Habitable - Recently purchased (improvement work planned)' },
          PRO01: { text: 'Habitable - In probate' },
          INH01: { text: 'Habitable - Recently inherited (improvement work planned)' },
          INH02: { text: 'Habitable - Recently inherited (no improvement work planned)' },
          PUR02: { text: 'Habitable - Recently purchased (no improvement work planned)' },
          REN01: { text: 'Renovations as advised in this application' },
          REN02: { text: 'Renovations (other)' },
          SUB01: { text: 'Uninhabitable - Damaged by subsidence/structural movement and not remedied' },
          DER01: { text: 'Uninhabitable - Derelict' },
          FIR01: { text: 'Uninhabitable - Fire damaged' },
          ky99: { text: 'Other' }
        },
        validation: [{ type: 'required', message: 'Please select an option.' }]
      },
      prerequisites: ['{{function:f039}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 3,
      groupOrder: 0,
      gtmTag: 'state-of-repair-reason'
    },
    '55ed32a0-3d39-11ea-9270-e124e355055b': {
      questionId: '55ed32a0-3d39-11ea-9270-e124e355055b',
      name: 'groundMovement',
      dataType: 'array',
      mappingField: 'SubsidenceSigns',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            layout: 'vertical',
            questionText: 'To the best of your knowledge, within the last 10 years, has the property',
            subtext: 'Test'
          }
        },
        lookup: {
          HasSubsidenceClaim: { text: 'Been the subject of an insurance claim for subsidence, landslip or heave?' },
          IsMonitoredForSubsidence: {
            text: 'Been monitored or had monitoring recommended for signs of subsidence, landslip or heave?'
          },
          HasStructuralMovement: {
            text: 'Suffered any structural movement or settlement, subsidence, landslip or heave?'
          },
          HasSignsOfDamage: {
            text: 'Shown signs of damage caused by structural movement or settlement, subsidence landslip or heave?'
          }
        }
      },
      isMultiSelect: true,
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 4,
      groupOrder: 0,
      gtmTag: 'ground-movement'
    },
    '287f2f10-3d3b-11ea-9270-e124e355055b': {
      questionId: '287f2f10-3d3b-11ea-9270-e124e355055b',
      name: 'groundMovementYear',
      dataType: 'number',
      mappingField: 'SubsidenceOccurrenceYear',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'In what year did the issue occur?' } },
        validation: [
          { type: 'required', message: 'Please enter the year the issue occured.' },
          {
            type: 'integer',
            minValueExpr: '{{function:f041}}',
            maxValueExpr: '{{function:f042}}',
            messages: { notBetween: 'The entered value must be between 1753 and the current year.' }
          }
        ]
      },
      prerequisites: ['{{function:f040}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 5,
      gtmTag: 'ground-movement-year'
    },
    '7be34c40-3d3b-11ea-9270-e124e355055b': {
      questionId: '7be34c40-3d3b-11ea-9270-e124e355055b',
      name: 'reiteratedSubsidence',
      dataType: 'boolean',
      default: false,
      label: 'Reiterated subsidence',
      mappingField: 'SubsidenceIsOnlyOccurrence',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Was this the only subsidence incident?' }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f043}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 6,
      groupOrder: 0,
      gtmTag: 'reiterated-subsidence'
    },
    'efb3bc40-3d3b-11ea-9270-e124e355055b': {
      questionId: 'efb3bc40-3d3b-11ea-9270-e124e355055b',
      name: 'groundMovementCause',
      dataType: 'string',
      mappingField: 'CauseOfGroundMovement',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'What was the cause of the ground movement?',
            subtext: 'Test'
          }
        },
        lookup: {
          BUI01: { text: 'Building work at property' },
          BUI02: { text: 'Building work nearby' },
          CLI01: { text: 'Climatic conditions' },
          DRA01: { text: 'Drain collapse' },
          DRA02: { text: 'Drain damaged by roots' },
          TRE02: { text: 'Tree removal' },
          TRE01: { text: 'Tree root damage' },
          ky99: { text: 'Other' }
        }
      },
      prerequisites: ['{{function:f044}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 7,
      groupOrder: 0,
      gtmTag: 'ground-movement-cause'
    },
    '2623bd70-3d3c-11ea-9270-e124e355055b': {
      questionId: '2623bd70-3d3c-11ea-9270-e124e355055b',
      name: 'subsidenceAffectedStructure',
      dataType: 'boolean',
      default: false,
      label: 'Subsidence affected structure',
      mappingField: 'WasMainStructureAffected',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Was the main structure of the property affected?' }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f045}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 8,
      groupOrder: 0,
      gtmTag: 'subsidence-affected-structure'
    },
    '78a73ea0-3d3c-11ea-9270-e124e355055b': {
      questionId: '78a73ea0-3d3c-11ea-9270-e124e355055b',
      name: 'subsidenceAffectedNearbyProperties',
      dataType: 'boolean',
      default: false,
      label: 'Subsidence nearby properties',
      mappingField: 'WereOtherPropertiesAffected',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Were any other properties nearby affected in a similar way at the time?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f046}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 9,
      groupOrder: 0,
      gtmTag: 'subsidence-affected-nearby-properties'
    },
    'd129efa0-3d3c-11ea-9270-e124e355055b': {
      questionId: 'd129efa0-3d3c-11ea-9270-e124e355055b',
      name: 'subsidenceCauseRectified',
      dataType: 'string',
      label: 'Subsidence cause rectified',
      mappingField: 'CauseRemovedRectified',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Was the cause removed or rectified?', subtext: 'Test' }
        },
        lookup: { '1': { text: 'Removed' }, '2': { text: 'Rectified' }, '3': { text: 'Neither' } },
        validation: [{ type: 'required', message: 'Please select an option.' }]
      },
      prerequisites: ['{{function:f047}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 10,
      groupOrder: 0,
      gtmTag: 'subsidence-cause-rectified'
    },
    '0675e330-3d3d-11ea-9270-e124e355055b': {
      questionId: '0675e330-3d3d-11ea-9270-e124e355055b',
      name: 'miningHistory',
      dataType: 'boolean',
      default: false,
      label: 'Mining history',
      mappingField: 'IsPropertyInMiningArea',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Is the property situated in an area known to have had a history of mining?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f048}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 11,
      groupOrder: 0,
      gtmTag: 'mining-history'
    },
    '15eceed0-3d3d-11ea-9270-e124e355055b': {
      questionId: '15eceed0-3d3d-11ea-9270-e124e355055b',
      name: 'subsidenceValuation',
      dataType: 'boolean',
      default: false,
      label: 'Subsidence valuation',
      mappingField: 'HasValuationSurveyReport',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'Do you have a valuation or survey from a qualified professional into any structural movement or settlement?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f049}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 12,
      groupOrder: 0,
      gtmTag: 'subsidence-valuation'
    },
    '66bb6a90-3dcd-11ea-b29c-cd65fd300111': {
      questionId: '66bb6a90-3dcd-11ea-b29c-cd65fd300111',
      name: 'subsidenceValuationReport',
      dataType: 'boolean',
      default: false,
      label: 'Subsidence valuation report',
      mappingField: 'IsMovementLongstanding',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'Does that report confirm that movement is longstanding, no longer affecting the property and insignificant enough not to require further investigation?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f050}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 13,
      groupOrder: 0,
      gtmTag: 'subsidence-valuation-report'
    },
    '4f244d60-3d3d-11ea-9270-e124e355055b': {
      questionId: '4f244d60-3d3d-11ea-9270-e124e355055b',
      name: 'nearbyTrees',
      dataType: 'boolean',
      label: 'Nearby trees',
      mappingField: 'HasTreesOver5MetersTallWithin7Meters',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Are there any trees over 5 metres tall which are within 7 metres of the property?'
          }
        },
        dependentActions: [
          {
            action: 'add-control-group',
            condition: '{{function:f052}}',
            props: { groupId: 'a8f887c0-3e05-11ea-a17c-1fc30bae3b9d' }
          }
        ],
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required', message: 'Please select yes or no.' }]
      },
      prerequisites: ['{{function:f051}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 14,
      groupOrder: 0,
      gtmTag: 'nearby-trees'
    },
    '129bf730-3dce-11ea-b29c-cd65fd300111': {
      questionId: '129bf730-3dce-11ea-b29c-cd65fd300111',
      name: 'treeLocation',
      dataType: 'string',
      label: 'Tree location',
      mappingField: 'TreeLocation',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Where is the tree situated?' } },
        lookup: {
          '1': { text: 'Your property' },
          '2': { text: "A neighbour's property" },
          '3': { text: 'Council property or roadside' },
          '99': { text: 'Other' }
        },
        validation: [{ type: 'required' }]
      },
      groupId: 'a8f887c0-3e05-11ea-a17c-1fc30bae3b9d',
      prerequisites: ['{{function:f053}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 14,
      groupOrder: 0,
      gtmTag: 'tree-location'
    },
    '775e7da0-3dce-11ea-b29c-cd65fd300111': {
      questionId: '775e7da0-3dce-11ea-b29c-cd65fd300111',
      name: 'nearbyTreeDistance',
      dataType: 'number',
      label: 'Tree distance',
      mappingField: 'Distance',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'TextInput',
            questionText: 'Distance (in metres) from the property, e.g. 0.55, 1.3',
            width: 'x-small'
          }
        },
        validation: [
          { type: 'required' },
          {
            type: 'numeric',
            minValue: 0,
            maxValue: 7,
            messages: { notBetween: 'The distance must be within 7 metres of the property.' }
          }
        ]
      },
      groupId: 'a8f887c0-3e05-11ea-a17c-1fc30bae3b9d',
      prerequisites: ['{{function:f054}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 15,
      groupOrder: 0,
      gtmTag: 'nearby-tree-distance'
    },
    'b0813830-3dcd-11ea-b29c-cd65fd300111': {
      questionId: 'b0813830-3dcd-11ea-b29c-cd65fd300111',
      name: 'nearbyTreeDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Add another' } },
        dependentActions: [{ action: 'add-control-group', props: { groupId: 'a8f887c0-3e05-11ea-a17c-1fc30bae3b9d' } }]
      },
      prerequisites: ['{{function:f055}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 16,
      groupOrder: 0,
      gtmTag: 'nearby-tree-details'
    },
    'bb4a0890-3dce-11ea-b29c-cd65fd300111': {
      questionId: 'bb4a0890-3dce-11ea-b29c-cd65fd300111',
      name: 'nearbyTreesCausedDamage',
      dataType: 'boolean',
      label: 'Damage caused by tree',
      mappingField: 'HasTreeRootsCausedDamaged',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Has this tree or its roots been the cause of damage to the property?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      groupId: 'a8f887c0-3e05-11ea-a17c-1fc30bae3b9d',
      prerequisites: ['{{function:f056}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 16,
      groupOrder: 0,
      gtmTag: 'nearby-trees-caused-damage'
    },
    '6c1ef910-3d3d-11ea-9270-e124e355055b': {
      questionId: '6c1ef910-3d3d-11ea-9270-e124e355055b',
      name: 'underpinnedOrReinforced',
      dataType: 'boolean',
      default: false,
      mappingField: 'HasBeenUnderpinnedOrReinforcedFoundations',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'To the best of your knowledge, has the property ever been underpinned or had foundations reinforced?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required', message: 'Please enter the year the property was underpinned.' }]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      visible: false,
      order: 17,
      gtmTag: 'underpinned-or-reinforced'
    },
    '201f7ef0-3dc8-11ea-b29c-cd65fd300111': {
      questionId: '201f7ef0-3dc8-11ea-b29c-cd65fd300111',
      name: 'underpinnedYear',
      dataType: 'number',
      mappingField: 'UnderpinnedYear',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'TextInput',
            questionText: 'In what year was the property underpinned?',
            width: 'x-small'
          }
        },
        validation: [
          { type: 'required', message: 'Please enter the year the issue occured.' },
          {
            type: 'integer',
            minValueExpr: '{{function:f058}}',
            maxValueExpr: '{{function:f059}}',
            messages: {
              invalidFormat: '${messagePrefix} needs to contain a numeric value',
              notBetween: 'The entered value must be between 1753 and the current year.'
            }
          }
        ]
      },
      prerequisites: ['{{function:f057}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 18,
      groupOrder: 0,
      gtmTag: 'underpinned-year'
    },
    '5a3d1ed0-3dc8-11ea-b29c-cd65fd300111': {
      questionId: '5a3d1ed0-3dc8-11ea-b29c-cd65fd300111',
      name: 'underpinPercentage',
      dataType: 'string',
      mappingField: 'HowMuchHasBeenUnderpinned',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            informationText: 'Test',
            layout: 'float',
            questionText: 'How much of the property was underpinned?'
          }
        },
        lookup: {
          ky20: { text: '1%-20% (up to a fifth)' },
          ky33: { text: '21%-33% (up to a third)' },
          ky50: { text: '34%-50% (up to half)' },
          ky75: { text: '51%-75% (up to three-quarters)' },
          ky100: { text: '76% -100% (more than three-quarters)' },
          ky15: { text: 'Multiple bay windows' },
          ky10: { text: 'One bay window' },
          ky01: { text: 'Outbuilding underpinned only' }
        },
        validation: [{ type: 'required', message: 'Please select an option.' }]
      },
      prerequisites: ['{{function:f060}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 18,
      groupOrder: 0,
      gtmTag: 'underpin-percentage'
    },
    '541108f5-6238-49bf-830e-9187e50e64ea': {
      questionId: '541108f5-6238-49bf-830e-9187e50e64ea',
      name: 'removeTreeButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Remove', buttonStyle: 'danger', type: 'button' }
        },
        dependentActions: [{ action: 'remove-control-group' }]
      },
      groupId: 'a8f887c0-3e05-11ea-a17c-1fc30bae3b9d',
      prerequisites: ['{{function:f061}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 18,
      gtmTag: 'remove-tree-button'
    },
    'f39a2db0-3dc9-11ea-b29c-cd65fd300111': {
      questionId: 'f39a2db0-3dc9-11ea-b29c-cd65fd300111',
      name: 'structuralWorkGuarantee',
      dataType: 'boolean',
      default: false,
      label: 'Structural work guarantee',
      mappingField: 'IsStructuralWorkCoveredByContractorGuarantee',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: "Is the structural work that was carried out still covered by a contractor's guarantee?"
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f062}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 19,
      gtmTag: 'structural-work-guarantee'
    },
    '07c28c60-3dca-11ea-b29c-cd65fd300111': {
      questionId: '07c28c60-3dca-11ea-b29c-cd65fd300111',
      name: 'structuralWorkGuaranteeExpirationDate',
      dataType: 'number',
      mappingField: 'GuaranteeExipirationYear',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'TextInput',
            questionText: 'In what year does that guarantee expire?',
            width: 'x-small'
          }
        },
        validation: [
          { type: 'required', message: 'Please enter the year when the guarantee expires.' },
          { type: 'integer', minValueExpr: '{{function:f065}}', maxValueExpr: '{{function:f066}}', messages: {} }
        ]
      },
      prerequisites: ['{{function:f063}}', '{{function:f064}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 20,
      groupOrder: 0,
      gtmTag: 'structural-work-guarantee-expiration-date'
    },
    '871c5310-3dca-11ea-b29c-cd65fd300111': {
      questionId: '871c5310-3dca-11ea-b29c-cd65fd300111',
      name: 'buildingControlDepartmentInvolvement',
      dataType: 'boolean',
      default: false,
      label: 'Building control department involvement',
      mappingField: 'WasLocalAuthorityInvolvedInWork',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Was the local authority Building Control Department involved in the work?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f067}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 21,
      groupOrder: 0,
      gtmTag: 'building-control-department-involvement'
    },
    '0262a390-3eab-11ea-9eff-f118e7c9b0f4': {
      questionId: '0262a390-3eab-11ea-9eff-f118e7c9b0f4',
      name: 'flood',
      dataType: 'boolean',
      label: 'Flood',
      mappingField: 'HasPropertyFloodedInLast25Year',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'To the best of your knowledge, has anywhere within the boundary of the property been flooded by an outside source in the last 10 years?'
          }
        },
        dependentActions: [
          {
            action: 'add-control-group',
            condition: '{{function:f068}}',
            props: { groupId: 'ffdfd3d0-3eab-11ea-9eff-f118e7c9b0f4' }
          }
        ],
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required', message: 'Please select yes or no.' }]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 22,
      groupOrder: 0,
      gtmTag: 'flood'
    },
    '0ded6460-3eac-11ea-9eff-f118e7c9b0f4': {
      questionId: '0ded6460-3eac-11ea-9eff-f118e7c9b0f4',
      name: 'floodDate',
      dataType: 'date',
      mappingField: 'FloodDate',
      data: {
        textAndStyle: { standard: { controlType: 'DateDropDown', questionText: 'What was the date of the flood?' } },
        validation: [
          { type: 'custom', validator: '{{function:f070}}', message: '' },
          { type: 'custom', validator: '{{function:f071}}', message: 'Please select day, month and year.' },
          { type: 'date', minValueExpr: '{{function:f072}}', maxValueExpr: '{{function:f073}}' }
        ]
      },
      groupId: 'ffdfd3d0-3eab-11ea-9eff-f118e7c9b0f4',
      prerequisites: ['{{function:f069}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 24,
      groupOrder: 0,
      gtmTag: 'flood-date'
    },
    '30d8e800-3eac-11ea-9eff-f118e7c9b0f4': {
      questionId: '30d8e800-3eac-11ea-9eff-f118e7c9b0f4',
      name: 'floodCause',
      dataType: 'string',
      label: 'Flood cause',
      mappingField: 'CauseOfFlood',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'What was the cause of the flood?' } },
        lookup: {
          FLO01: { text: 'Flood' },
          BUD01: { text: 'Backing up of drains' },
          COA01: { text: 'Coastal' },
          NCO01: { text: 'Non-coastal body of water' },
          FFL01: { text: 'Flash flood' },
          ky99: { text: 'Other' }
        },
        validation: [{ type: 'required' }]
      },
      groupId: 'ffdfd3d0-3eab-11ea-9eff-f118e7c9b0f4',
      prerequisites: ['{{function:f074}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 25,
      groupOrder: 0,
      gtmTag: 'flood-cause'
    },
    '624ca9b3-f6b3-45ba-885e-4f9fa9286d40': {
      questionId: '624ca9b3-f6b3-45ba-885e-4f9fa9286d40',
      name: 'removeFloodButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Remove', buttonStyle: 'danger', type: 'button' }
        },
        dependentActions: [{ action: 'remove-control-group' }]
      },
      groupId: 'ffdfd3d0-3eab-11ea-9eff-f118e7c9b0f4',
      prerequisites: ['{{function:f075}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 25,
      gtmTag: 'remove-flood-button'
    },
    'd87a12b0-3eab-11ea-9eff-f118e7c9b0f4': {
      questionId: 'd87a12b0-3eab-11ea-9eff-f118e7c9b0f4',
      name: 'floodDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Add another' } },
        dependentActions: [{ action: 'add-control-group', props: { groupId: 'ffdfd3d0-3eab-11ea-9eff-f118e7c9b0f4' } }]
      },
      prerequisites: ['{{function:f076}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 26,
      groupOrder: 0,
      gtmTag: 'flood-details'
    },
    '2aecd590-3ead-11ea-9eff-f118e7c9b0f4': {
      questionId: '2aecd590-3ead-11ea-9eff-f118e7c9b0f4',
      name: 'communityFloodDefence',
      dataType: 'boolean',
      label: 'Community flood defence',
      mappingField: 'HasCommunityFloodDefence',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Is a community flood defence in place?' }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f077}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 27,
      groupOrder: 0,
      gtmTag: 'community-flood-defence'
    },
    '98601740-3ead-11ea-9eff-f118e7c9b0f4': {
      questionId: '98601740-3ead-11ea-9eff-f118e7c9b0f4',
      name: 'floodDefenceType',
      dataType: 'string',
      label: 'Flood defence type',
      mappingField: 'FloodDefenceType',
      data: {
        textAndStyle: {
          standard: { controlType: 'DropDownList', questionText: 'What type of flood defence?', subtext: 'Test' }
        },
        lookup: {
          FLB02: { text: 'Additional floodbank' },
          SEA02: { text: 'Broadened sea wall' },
          CUL01: { text: 'Culvert(s)' },
          FLB03: { text: 'Floodbank erosion control' },
          SEA01: { text: 'Heightened sea wall' },
          FLB01: { text: 'Raised floodbank' },
          SEW01: { text: 'Sewer improvement works' },
          ky99: { text: 'Other' }
        },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f078}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 27,
      groupOrder: 0,
      gtmTag: 'flood-defence-type'
    },
    '66a90a40-3ead-11ea-9eff-f118e7c9b0f4': {
      questionId: '66a90a40-3ead-11ea-9eff-f118e7c9b0f4',
      name: 'floodDefenceYear',
      dataType: 'number',
      label: 'Flood defence year',
      mappingField: 'FloodDefenceConstructionYear',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'TextInput',
            questionText: 'What year was the flood defence constructed?',
            width: 'x-small'
          }
        },
        validation: [
          { type: 'required', message: 'Please enter the year the flood defence was constructed.' },
          { type: 'integer', minValueExpr: '{{function:f080}}', maxValueExpr: '{{function:f081}}', messages: {} }
        ]
      },
      prerequisites: ['{{function:f079}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 28,
      groupOrder: 0,
      gtmTag: 'flood-defence-year'
    },
    'd591d4f0-3ead-11ea-9eff-f118e7c9b0f4': {
      questionId: 'd591d4f0-3ead-11ea-9eff-f118e7c9b0f4',
      name: 'floodedSince',
      dataType: 'boolean',
      default: false,
      label: 'New floods',
      mappingField: 'HasPropertyFloodedSince',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Has your property flooded since?' } },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f082}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 29,
      groupOrder: 0,
      gtmTag: 'flooded-since'
    },
    '7715a300-3eb9-11ea-9eff-f118e7c9b0f4': {
      questionId: '7715a300-3eb9-11ea-9eff-f118e7c9b0f4',
      name: 'nearbyWater',
      dataType: 'boolean',
      default: false,
      label: 'Nearby Water',
      mappingField: 'IsPropertyWithin200MetersOfWater',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Is the property within 200 metres of water?' }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      visible: false,
      order: 30,
      groupOrder: 0,
      gtmTag: 'nearby-water'
    },
    '9f66ae80-3eb9-11ea-9eff-f118e7c9b0f4': {
      questionId: '9f66ae80-3eb9-11ea-9eff-f118e7c9b0f4',
      name: 'metresFromWater',
      dataType: 'number',
      label: 'Metres from the water',
      mappingField: 'HowFarFromWaterIsNearestBuilding',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'TextInput',
            questionText: 'How many metres from the water is the nearest building/outbuilding on your premises?'
          }
        },
        validation: [
          { type: 'required', message: 'Please enter a number between 0 and 700 to two decimal places.' },
          {
            type: 'integer',
            minValue: 0,
            messages: { notBetween: 'Please enter a number between 0 and 700 to two decimal places.' }
          }
        ]
      },
      prerequisites: ['{{function:f083}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 31,
      groupOrder: 0,
      gtmTag: 'metres-from-water'
    },
    'ebd295e0-3eb9-11ea-9eff-f118e7c9b0f4': {
      questionId: 'ebd295e0-3eb9-11ea-9eff-f118e7c9b0f4',
      name: 'renovation',
      dataType: 'boolean',
      default: false,
      label: 'Renovation',
      mappingField: 'IsPropertyUndergoingRenovation',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'Is there any building or renovation works underway or due to take place costing more than £20,000?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      visible: false,
      order: 32,
      groupOrder: 0,
      gtmTag: 'renovation'
    },
    '2a40f240-3eba-11ea-9eff-f118e7c9b0f4': {
      questionId: '2a40f240-3eba-11ea-9eff-f118e7c9b0f4',
      name: 'renovationStructure',
      dataType: 'boolean',
      label: 'Renovation structure',
      mappingField: 'IsPropertyUndergoingGroundUpBasementExcavation',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Does the renovation involve ground up construction or basement excavation?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f084}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 33,
      groupOrder: 0,
      gtmTag: 'renovation-structure'
    },
    '4fbbd350-3eba-11ea-9eff-f118e7c9b0f4': {
      questionId: '4fbbd350-3eba-11ea-9eff-f118e7c9b0f4',
      name: 'renovationType',
      dataType: 'string',
      label: 'Renovation type',
      mappingField: 'NatureOfRenovation',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'What is the main renovation work being undertaken?',
            subtext: 'Test'
          }
        },
        lookup: {
          GAR02: { text: 'Attached garage/ outbuilding' },
          COS01: { text: 'Cosmetic works' },
          EXT02: { text: 'Double storey extension' },
          GDN01: { text: 'Garden/landscaping' },
          LFT01: { text: 'Loft conversion' },
          FOU01: { text: 'New footings/ foundations' },
          KIT01: { text: 'New kitchen or bathroom' },
          REP01: { text: 'Property damage repairs' },
          REW01: { text: 'Rewiring or replumbing' },
          RER01: { text: 'Roofing work' },
          EXT01: { text: 'Single storey extension' },
          GAR01: { text: 'Unattached garage/ outbuilding' },
          STR01: { text: 'Work on load-bearing walls' },
          ky99: { text: 'Other' }
        },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f085}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 34,
      groupOrder: 0,
      gtmTag: 'renovation-type'
    },
    '5396a710-3ebb-11ea-9eff-f118e7c9b0f4': {
      questionId: '5396a710-3ebb-11ea-9eff-f118e7c9b0f4',
      name: 'renovationStart',
      dataType: 'date',
      mappingField: 'WhenRenovationIsDueToStart',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'DateDropDown',
            questionText: 'When did the renovation start or when is it due to start?'
          }
        },
        validation: [
          { type: 'custom', validator: '{{function:f087}}', message: '' },
          { type: 'custom', validator: '{{function:f088}}', message: 'Please select day, month and year.' },
          {
            type: 'custom',
            validator: '{{function:f089}}',
            message: 'The renovation start date should be on or before the renovation end date.'
          },
          { type: 'date', minValueExpr: '{{function:f090}}', maxValueExpr: '{{function:f091}}' }
        ]
      },
      prerequisites: ['{{function:f086}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 35,
      groupOrder: 0,
      gtmTag: 'renovation-start'
    },
    '97f231e0-3ebb-11ea-9eff-f118e7c9b0f4': {
      questionId: '97f231e0-3ebb-11ea-9eff-f118e7c9b0f4',
      name: 'renovationEnd',
      dataType: 'date',
      mappingField: 'WhenRenovationIsDueToComplete',
      data: {
        textAndStyle: {
          standard: { controlType: 'DateDropDown', questionText: 'When is the work due to be completed?' }
        },
        validation: [
          { type: 'custom', validator: '{{function:f093}}', message: '' },
          { type: 'custom', validator: '{{function:f094}}', message: 'Please select day, month and year.' },
          {
            type: 'custom',
            validator: '{{function:f095}}',
            message: 'Please select a renovation end date that comes after the renovation start date.'
          },
          { type: 'date', minValueExpr: '{{function:f096}}', maxValueExpr: '{{function:f097}}' }
        ]
      },
      prerequisites: ['{{function:f092}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 36,
      groupOrder: 0,
      gtmTag: 'renovation-end'
    },
    'ebda6bd0-3ebe-11ea-9974-a9ac1356511b': {
      questionId: 'ebda6bd0-3ebe-11ea-9974-a9ac1356511b',
      name: 'contractorsWorking',
      dataType: 'boolean',
      label: 'Renovation contractors',
      mappingField: 'AreContractorDoingWork',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Are contractors (i.e. tradespeople) carrying out the work?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f098}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 37,
      groupOrder: 0,
      gtmTag: 'contractors-working'
    },
    '2c13c430-3ebf-11ea-9974-a9ac1356511b': {
      questionId: '2c13c430-3ebf-11ea-9974-a9ac1356511b',
      name: 'contractorLiabilityWaiver',
      dataType: 'boolean',
      label: "Contractors' liability waiver",
      mappingField: 'HasSignedWaiver',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Have you signed any liability waivers with your contractor(s)?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f099}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 39,
      groupOrder: 0,
      gtmTag: 'contractor-liability-waiver'
    },
    '3e076890-3ebf-11ea-9974-a9ac1356511b': {
      questionId: '3e076890-3ebf-11ea-9974-a9ac1356511b',
      name: 'contractorInsurance',
      dataType: 'boolean',
      label: 'Contractors insurance',
      mappingField: 'Has1MillionLiabilityInsurancePerContractor',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'Do the people carrying out the work have at least £1 million liability insurance to cover personal injury, death or damage to property?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f100}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 40,
      groupOrder: 0,
      gtmTag: 'contractor-insurance'
    },
    '6443c4e0-3ebf-11ea-9974-a9ac1356511b': {
      questionId: '6443c4e0-3ebf-11ea-9974-a9ac1356511b',
      name: 'atHomeDuringRenovation',
      dataType: 'boolean',
      label: 'At home during renovation',
      mappingField: 'AreYouLivingAtProperty',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Are you living in the property during the renovation?' }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f101}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 41,
      groupOrder: 0,
      gtmTag: 'at-home-during-renovation'
    },
    '87c5e330-3ebf-11ea-9974-a9ac1356511b': {
      questionId: '87c5e330-3ebf-11ea-9974-a9ac1356511b',
      name: 'renovationCost',
      dataType: 'number',
      label: 'Renovation cost',
      mappingField: 'TotalCostOfRenovation',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'CurrencyInput',
            questionText: 'What is the total expected cost of the renovation including VAT?',
            width: 'x-small'
          }
        },
        validation: [
          { type: 'required' },
          {
            type: 'integer',
            minValue: 0,
            maxValue: 10000000,
            messages: { invalidFormat: '${messagePrefix} needs to contain a numeric value' }
          }
        ]
      },
      prerequisites: ['{{function:f102}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 42,
      groupOrder: 0,
      gtmTag: 'renovation-cost'
    },
    'bd73f3f0-3ebf-11ea-9974-a9ac1356511b': {
      questionId: 'bd73f3f0-3ebf-11ea-9974-a9ac1356511b',
      name: 'renovationSizeImpact',
      dataType: 'string',
      label: 'Renovation size',
      mappingField: 'ImpactOfRenovation',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'What impact will the renovation have on the size of the property?',
            subtext: 'Test'
          }
        },
        lookup: {
          ky20: { text: '1-20% (up to a fifth)' },
          ky33: { text: '21-33% (up to a third)' },
          ky50: { text: '34-50% (up to half)' },
          ky75: { text: '51-75% (up to three-quarters)' },
          ky100: { text: '76-100% (more than three-quarters)' },
          N: { text: '0% (no change)' },
          'ky-1': { text: 'Property footprint reduced' }
        },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f103}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 43,
      groupOrder: 0,
      gtmTag: 'renovation-size-impact'
    },
    '153fd810-3ec0-11ea-9974-a9ac1356511b': {
      questionId: '153fd810-3ec0-11ea-9974-a9ac1356511b',
      name: 'ownLockableEntrances',
      dataType: 'boolean',
      default: true,
      label: 'Own lockable entrances',
      mappingField: 'IsPropertySelfContained',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Is the property self-contained with its own lockable entrances?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      visible: false,
      order: 44,
      groupOrder: 0,
      gtmTag: 'own-lockable-entrances'
    },
    '35524b10-3ec0-11ea-9974-a9ac1356511b': {
      questionId: '35524b10-3ec0-11ea-9974-a9ac1356511b',
      name: 'lockType',
      dataType: 'string',
      label: 'Lock type',
      mappingField: 'TypeOfLocksInMainEntrance',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ImageButtonList',
            informationText: 'Test',
            questionText: 'What type of key-operated lock is fitted to the main entrance?'
          }
        },
        lookup: {
          '2': { text: '5-lever mortice deadlock (BS 3621)', image: 'lockTypes/mortice.png' },
          '3': { text: 'Multi-point lock', image: 'lockTypes/multipoint.png' },
          '4': { text: 'Deadlatch with locking handle', image: 'lockTypes/deadlatch.png' },
          '99': { text: 'Other', image: 'lockTypes/other.png' }
        },
        validation: [{ type: 'required', message: 'Please select an option.' }]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 45,
      groupOrder: 0,
      gtmTag: 'lock-type'
    },
    '7f6a7e70-3ec0-11ea-9974-a9ac1356511b': {
      questionId: '7f6a7e70-3ec0-11ea-9974-a9ac1356511b',
      name: 'patioLockType',
      dataType: 'string',
      label: 'Patio lock type',
      mappingField: 'TypeOfLocksInPatioDoor',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'What type of key-operated lock is fitted to your patio doors?',
            subtext: 'Test'
          }
        },
        lookup: {
          '1': { text: 'No patio doors' },
          '2': { text: 'Top & bottom locks' },
          '3': { text: 'Central lock' },
          '4': { text: 'Multi-point lock' },
          '99': { text: 'Other' }
        },
        validation: [{ type: 'required', message: 'Please select an option.' }]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      visible: false,
      order: 46,
      groupOrder: 0,
      gtmTag: 'patio-lock-type'
    },
    'c50abe40-3ec0-11ea-9974-a9ac1356511b': {
      questionId: 'c50abe40-3ec0-11ea-9974-a9ac1356511b',
      name: 'otherExitsLockType',
      dataType: 'string',
      mappingField: 'TypeOfLocksInOtherExists',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'What type of lock is fitted to other exits?',
            subtext: 'Test'
          }
        },
        lookup: {
          ky2: { text: '5-lever mortice deadlock (BS 3621)' },
          ky3: { text: 'Multi-point lock' },
          ky4: { text: 'Deadlatch with locking handle' },
          ky6: { text: 'Security bolts at top & bottom' },
          ky5: { text: 'No other exit' },
          ky99: { text: 'Other' }
        },
        validation: [{ type: 'required', message: 'Please select an option.' }]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      visible: false,
      order: 47,
      groupOrder: 0,
      gtmTag: 'other-exits-lock-type'
    },
    '09d314a0-3ec1-11ea-9974-a9ac1356511b': {
      questionId: '09d314a0-3ec1-11ea-9974-a9ac1356511b',
      name: 'windowsKeyLocks',
      dataType: 'boolean',
      default: false,
      label: 'Window locks',
      mappingField: 'HasKeysOperatedLocksOnWindows',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Are there key operated locks on all accessible windows?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      visible: false,
      order: 48,
      groupOrder: 0,
      gtmTag: 'windows-key-locks'
    },
    '27598590-3ec1-11ea-9974-a9ac1356511b': {
      questionId: '27598590-3ec1-11ea-9974-a9ac1356511b',
      name: 'alarm',
      dataType: 'boolean',
      default: false,
      label: 'Alarm',
      mappingField: 'HasAlarm',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Is there a functioning alarm at the property?' }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      visible: false,
      order: 49,
      groupOrder: 0,
      gtmTag: 'alarm'
    },
    '32fd4210-3ec1-11ea-9974-a9ac1356511b': {
      questionId: '32fd4210-3ec1-11ea-9974-a9ac1356511b',
      name: 'approvedAlarm',
      dataType: 'boolean',
      default: false,
      label: 'Approved alarm',
      mappingField: 'IsAlarmFittedAndMaintained',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Is it a NSI, NACOSS, SSAIB or BSIA alarm system, fitted and maintained under contract?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f104}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 50,
      groupOrder: 0,
      gtmTag: 'approved-alarm'
    },
    '59d67aa0-3ec1-11ea-9974-a9ac1356511b': {
      questionId: '59d67aa0-3ec1-11ea-9974-a9ac1356511b',
      name: 'monitoredAlarm',
      dataType: 'string',
      default: false,
      label: 'Monitored alarm',
      mappingField: 'AlarmAudibleOrCentrallyMonitored',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'Does the alarm only ring at the property (audible only) or is it also connected to a central monitoring service?'
          }
        },
        lookup: { '1': { text: 'Audible only' }, '2': { text: 'Monitored centrally' } },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f105}}', '{{function:f106}}'],
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 51,
      groupOrder: 0,
      gtmTag: 'monitored-alarm'
    },
    '44ad3e03-978a-4c59-a84b-7441fa2852fd': {
      questionId: '44ad3e03-978a-4c59-a84b-7441fa2852fd',
      name: 'toPropertyConstruction',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Back', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'previous-section' }]
      },
      groupId: 'button-grouping',
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 53,
      groupOrder: 0,
      gtmTag: 'to-circumstances'
    },
    'c8e98aa0-4127-11ea-8a49-bd4e9101dfd5': {
      questionId: 'c8e98aa0-4127-11ea-8a49-bd4e9101dfd5',
      name: 'toContents',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Continue', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'next-section' }]
      },
      groupId: 'button-grouping',
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      order: 54,
      groupOrder: 0,
      gtmTag: 'to-contents'
    },
    '7c4d22c0-3ec9-11ea-9974-a9ac1356511b': {
      questionId: '7c4d22c0-3ec9-11ea-9974-a9ac1356511b',
      name: 'contentsCost',
      dataType: 'number',
      mappingField: 'TotalValueContents',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'CurrencyInput',
            questionText: 'How much would it cost to replace the entire contents of your home as new?',
            width: 'x-small'
          }
        },
        validation: [
          { type: 'required', message: 'Please enter the total value of your contents to be insured.' },
          {
            type: 'integer',
            minValue: 0,
            maxValue: 10000000,
            messages: {
              invalidFormat: '${messagePrefix} needs to contain a numeric value',
              notBetween: 'Must be between £1 and £10,000,000.'
            }
          }
        ]
      },
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 1,
      groupOrder: 0,
      gtmTag: 'contents-cost'
    },
    'b7ff1e40-3ec9-11ea-9974-a9ac1356511b': {
      questionId: 'b7ff1e40-3ec9-11ea-9974-a9ac1356511b',
      name: 'specificItems',
      dataType: 'boolean',
      default: false,
      label: 'Specific items',
      mappingField: 'HasAnyHRHVItems',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              "Do you want to add extended cover for 'specific items' such as bikes, electronic gadgets (including mobile phones) or high risk items? (you can edit this after you have got your quote but please note you won't be covered for these items unless you add the extended cover)"
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      visible: false,
      order: 2,
      groupOrder: 0,
      gtmTag: 'specific-items'
    },
    'd6ba1790-3ec9-11ea-9974-a9ac1356511b': {
      questionId: 'd6ba1790-3ec9-11ea-9974-a9ac1356511b',
      name: 'bikes',
      dataType: 'boolean',
      mappingField: 'HasPedalCycles',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Do you want to add cover for bikes ("pedal cycles")?' }
        },
        dependentActions: [
          {
            action: 'add-control-group',
            condition: '{{function:f108}}',
            props: { groupId: '48fd7ef0-3eca-11ea-9974-a9ac1356511b' }
          }
        ],
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required', message: 'Please select yes or no.' }]
      },
      prerequisites: ['{{function:f107}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 3,
      groupOrder: 0,
      gtmTag: 'bikes'
    },
    'bfabe190-3eca-11ea-9974-a9ac1356511b': {
      questionId: 'bfabe190-3eca-11ea-9974-a9ac1356511b',
      name: 'bikeMakeAndModel',
      dataType: 'string',
      label: 'Bike and model',
      mappingField: 'PedalCycleDescription',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Make and model' } },
        validation: [{ type: 'required' }]
      },
      groupId: '48fd7ef0-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f109}}', '{{function:f110}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 4,
      groupOrder: 0,
      gtmTag: 'bike-make-and-model'
    },
    '0188fee0-3ecb-11ea-9974-a9ac1356511b': {
      questionId: '0188fee0-3ecb-11ea-9974-a9ac1356511b',
      name: 'bikeValue',
      dataType: 'number',
      label: 'Bike value',
      mappingField: 'PedalCycleValue',
      data: {
        textAndStyle: { standard: { controlType: 'CurrencyInput', questionText: 'Value' } },
        validation: [
          { type: 'required' },
          {
            type: 'integer',
            minValue: 1,
            maxValue: 1000000,
            messages: { notBetween: 'Must be between £1 and £1,000,000.' }
          }
        ]
      },
      groupId: '48fd7ef0-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f111}}', '{{function:f112}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 5,
      groupOrder: 0,
      gtmTag: 'bike-value'
    },
    '43b7bea0-3ecb-11ea-9974-a9ac1356511b': {
      questionId: '43b7bea0-3ecb-11ea-9974-a9ac1356511b',
      name: 'bikeCoverAwayHome',
      dataType: 'boolean',
      label: 'Bike cover away from home',
      mappingField: 'PedalCycleIsAwayFromHomeCoverRequired',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Cover away from home?' } },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      groupId: '48fd7ef0-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f113}}', '{{function:f114}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 6,
      groupOrder: 0,
      gtmTag: 'bike-cover-away-home'
    },
    '7a6540d5-7c1a-4d45-a93c-1dda92c70dd2': {
      questionId: '7a6540d5-7c1a-4d45-a93c-1dda92c70dd2',
      name: 'removeBikeButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Remove', buttonStyle: 'danger', type: 'button' }
        },
        dependentActions: [{ action: 'remove-control-group' }]
      },
      groupId: '48fd7ef0-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f115}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 7,
      gtmTag: 'remove-bike-button'
    },
    'f6bc5df0-3ec9-11ea-9974-a9ac1356511b': {
      questionId: 'f6bc5df0-3ec9-11ea-9974-a9ac1356511b',
      name: 'bikeDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Add another', type: 'button' } },
        dependentActions: [{ action: 'add-control-group', props: { groupId: '48fd7ef0-3eca-11ea-9974-a9ac1356511b' } }]
      },
      prerequisites: ['{{function:f116}}', '{{function:f117}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 8,
      groupOrder: 0,
      gtmTag: 'bike-details'
    },
    '976ba980-3ecb-11ea-9974-a9ac1356511b': {
      questionId: '976ba980-3ecb-11ea-9974-a9ac1356511b',
      name: 'phones',
      dataType: 'boolean',
      mappingField: 'HasMobilePhones',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Do you have a mobile phone you would like covered?' }
        },
        dependentActions: [
          {
            action: 'add-control-group',
            condition: '{{function:f120}}',
            props: { groupId: '48fd7ef1-3eca-11ea-9974-a9ac1356511b' }
          }
        ],
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required', message: 'Please select yes or no.' }]
      },
      prerequisites: ['{{function:f118}}', '{{function:f119}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 9,
      groupOrder: 0,
      gtmTag: 'phones'
    },
    '832a4490-3ecb-11ea-9974-a9ac1356511b': {
      questionId: '832a4490-3ecb-11ea-9974-a9ac1356511b',
      name: 'phoneMakeAndModel',
      dataType: 'string',
      label: 'Phone make and model',
      mappingField: 'MobilePhoneDescription',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Make and model' } },
        validation: [{ type: 'required' }]
      },
      groupId: '48fd7ef1-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f121}}', '{{function:f122}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 10,
      groupOrder: 0,
      gtmTag: 'phone-make-and-model'
    },
    '83d50380-3ecb-11ea-9974-a9ac1356511b': {
      questionId: '83d50380-3ecb-11ea-9974-a9ac1356511b',
      name: 'phoneValue',
      dataType: 'number',
      label: 'Phone value',
      mappingField: 'MobilePhoneValue',
      data: {
        textAndStyle: { standard: { controlType: 'CurrencyInput', questionText: 'Value' } },
        validation: [
          { type: 'required' },
          {
            type: 'integer',
            minValue: 1,
            maxValue: 1000000,
            messages: { notBetween: 'Must be between £1 and £1,000,000.' }
          }
        ]
      },
      groupId: '48fd7ef1-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f123}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 11,
      groupOrder: 0,
      gtmTag: 'phone-value'
    },
    '84974210-3ecb-11ea-9974-a9ac1356511b': {
      questionId: '84974210-3ecb-11ea-9974-a9ac1356511b',
      name: 'phoneCoverAwayHome',
      dataType: 'boolean',
      label: 'Phone cover away from home',
      mappingField: 'MobilePhoneIsAwayFromHomeCoverRequired',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Cover away from home?' } },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      groupId: '48fd7ef1-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f124}}', '{{function:f125}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 12,
      groupOrder: 0,
      gtmTag: 'phone-cover-away-home'
    },
    '69ecc05d-c36d-4eb5-aefd-ee958bac6ce6': {
      questionId: '69ecc05d-c36d-4eb5-aefd-ee958bac6ce6',
      name: 'removePhoneButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Remove', buttonStyle: 'danger' } },
        dependentActions: [{ action: 'remove-control-group' }]
      },
      groupId: '48fd7ef1-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f126}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 13,
      gtmTag: 'remove-phone-button'
    },
    '824c40a0-3ecb-11ea-9974-a9ac1356511b': {
      questionId: '824c40a0-3ecb-11ea-9974-a9ac1356511b',
      name: 'phoneDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Add another' } },
        dependentActions: [{ action: 'add-control-group', props: { groupId: '48fd7ef1-3eca-11ea-9974-a9ac1356511b' } }]
      },
      prerequisites: ['{{function:f127}}', '{{function:f128}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 14,
      groupOrder: 0,
      gtmTag: 'phone-details'
    },
    '432e74f0-3ecc-11ea-9974-a9ac1356511b': {
      questionId: '432e74f0-3ecc-11ea-9974-a9ac1356511b',
      name: 'gadgets',
      dataType: 'boolean',
      mappingField: 'HasPortableComputers',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Do you want to add cover for electronic gadgets (excluding mobile phones)?',
            subtext: '(for example a smart watch, laptop, tablet, digital camera, camcorder, gaming device etc.)'
          }
        },
        dependentActions: [
          {
            action: 'add-control-group',
            condition: '{{function:f131}}',
            props: { groupId: '48fd7ef2-3eca-11ea-9974-a9ac1356511b' }
          }
        ],
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required', message: 'Please select yes or no.' }]
      },
      prerequisites: ['{{function:f129}}', '{{function:f130}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 15,
      groupOrder: 0,
      gtmTag: 'gadgets'
    },
    '4a56bb70-3ecc-11ea-9974-a9ac1356511b': {
      questionId: '4a56bb70-3ecc-11ea-9974-a9ac1356511b',
      name: 'gadgetsMakeAndModel',
      dataType: 'string',
      label: 'Gadgets make and model',
      mappingField: 'PortableComputerDescription',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Make and model' } },
        validation: [{ type: 'required' }]
      },
      groupId: '48fd7ef2-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f132}}', '{{function:f133}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 16,
      groupOrder: 0,
      gtmTag: 'gadgets-make-and-model'
    },
    '4cc91b00-3ecc-11ea-9974-a9ac1356511b': {
      questionId: '4cc91b00-3ecc-11ea-9974-a9ac1356511b',
      name: 'gadgetsValue',
      dataType: 'number',
      label: 'Gadgets value',
      mappingField: 'PortableComputerValue',
      data: {
        textAndStyle: { standard: { controlType: 'CurrencyInput', questionText: 'Value' } },
        validation: [
          { type: 'required' },
          {
            type: 'integer',
            minValue: 1,
            maxValue: 1000000,
            messages: { notBetween: 'Must be between £1 and £1,000,000.' }
          }
        ]
      },
      groupId: '48fd7ef2-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f134}}', '{{function:f135}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 17,
      groupOrder: 0,
      gtmTag: 'gadgets-value'
    },
    '4e299560-3ecc-11ea-9974-a9ac1356511b': {
      questionId: '4e299560-3ecc-11ea-9974-a9ac1356511b',
      name: 'gadgetsCoverAwayHome',
      dataType: 'boolean',
      label: 'Gadgets cover away home',
      mappingField: 'PortableComputerIsAwayFromHomeCoverRequired',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Cover away from home?' } },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      groupId: '48fd7ef2-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f136}}', '{{function:f137}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 18,
      groupOrder: 0,
      gtmTag: 'gadgets-cover-away-home'
    },
    '11ef810d-572c-4b18-a962-5a2a6e6c7173': {
      questionId: '11ef810d-572c-4b18-a962-5a2a6e6c7173',
      name: 'removeGadgetButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Remove', buttonStyle: 'danger' } },
        dependentActions: [{ action: 'remove-control-group' }]
      },
      groupId: '48fd7ef2-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f138}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 19,
      gtmTag: 'remove-gadget-button'
    },
    '493d0e10-3ecc-11ea-9974-a9ac1356511b': {
      questionId: '493d0e10-3ecc-11ea-9974-a9ac1356511b',
      name: 'gadgetsDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Add another', type: 'button' } },
        dependentActions: [{ action: 'add-control-group', props: { groupId: '48fd7ef2-3eca-11ea-9974-a9ac1356511b' } }]
      },
      prerequisites: ['{{function:f139}}', '{{function:f140}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 20,
      groupOrder: 0,
      gtmTag: 'gadgets-details'
    },
    '5a33e670-3ecd-11ea-9974-a9ac1356511b': {
      questionId: '5a33e670-3ecd-11ea-9974-a9ac1356511b',
      name: 'highRiskItems',
      dataType: 'boolean',
      mappingField: 'HasOtherHRHVItems',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Do you want to add cover for high-risk items?' }
        },
        dependentActions: [
          {
            action: 'add-control-group',
            condition: '{{function:f142}}',
            props: { groupId: '48fd7ef3-3eca-11ea-9974-a9ac1356511b' }
          }
        ],
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required', message: 'Please select yes or no.' }]
      },
      prerequisites: ['{{function:f141}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 21,
      groupOrder: 0,
      gtmTag: 'high-risk-items'
    },
    '673a8e50-3ecd-11ea-9974-a9ac1356511b': {
      questionId: '673a8e50-3ecd-11ea-9974-a9ac1356511b',
      name: 'highRiskItemCategory',
      dataType: 'string',
      default: false,
      label: 'High risk item category',
      mappingField: 'HighRiskItemCategory',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Category' } },
        lookup: {
          'A21>1': { text: 'Antiques' },
          P20: { text: 'Artworks' },
          'C07>1': { text: 'China' },
          C20: { text: 'Clocks' },
          C19: { text: 'Coins' },
          E03: { text: 'Electric wheelchairs or disability scooter' },
          'P06>1': { text: 'Furs' },
          'P06>6': { text: 'Garden machinery (e.g. lawnmowers)' },
          'C07>3': { text: 'Glassware' },
          G07: { text: 'Gold, silver or plated items, except jewellery' },
          G04: { text: 'Guns' },
          'P06>2': { text: 'Handbags' },
          'J01>1': { text: 'Jewellery' },
          M06: { text: 'Medals' },
          'P06>3': { text: 'Medical equipment (inc. hearing aids)​' },
          'P06>5': { text: 'Musical equipment' },
          'C07>2': { text: 'Porcelain' },
          'A21>2': { text: 'Rare books' },
          'P06>4': { text: 'Sports equipment' },
          S11: { text: 'Stamp collections' },
          'J01>2': { text: 'Watches' }
        },
        validation: [{ type: 'required' }]
      },
      groupId: '48fd7ef3-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f143}}', '{{function:f144}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 22,
      groupOrder: 0,
      gtmTag: 'high-risk-item-category'
    },
    '5bded750-3ecd-11ea-9974-a9ac1356511b': {
      questionId: '5bded750-3ecd-11ea-9974-a9ac1356511b',
      name: 'highRiskItemDescription',
      dataType: 'string',
      label: 'High risk item description',
      mappingField: 'HighRiskItemDescription',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'TextInput',
            questionText: 'Description (e.g. Tiffany ring, platinum, 5 diamonds, 1 carat total)'
          }
        },
        validation: [{ type: 'required' }]
      },
      groupId: '48fd7ef3-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f145}}', '{{function:f146}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 23,
      groupOrder: 0,
      gtmTag: 'high-risk-item-description'
    },
    '5cbbc9d0-3ecd-11ea-9974-a9ac1356511b': {
      questionId: '5cbbc9d0-3ecd-11ea-9974-a9ac1356511b',
      name: 'highRiskItemValue',
      dataType: 'number',
      label: 'High risk item value',
      mappingField: 'HighRiskItemValue',
      data: {
        textAndStyle: { standard: { controlType: 'CurrencyInput', questionText: 'Value' } },
        validation: [
          { type: 'required' },
          {
            type: 'integer',
            minValue: 1500,
            maxValue: 1000000,
            messages: { notBetween: 'Must be between £1,500 and £1,000,000.' }
          }
        ]
      },
      groupId: '48fd7ef3-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f147}}', '{{function:f148}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 24,
      groupOrder: 0,
      gtmTag: 'high-risk-item-value'
    },
    'bacdf8e0-3ecd-11ea-9974-a9ac1356511b': {
      questionId: 'bacdf8e0-3ecd-11ea-9974-a9ac1356511b',
      name: 'highRiskItemCoverAwayHome',
      dataType: 'boolean',
      label: 'High risk item cover away home',
      mappingField: 'HighRiskItemIsAwayFromHomeCoverRequired',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Cover away from home?' } },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      groupId: '48fd7ef3-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f149}}', '{{function:f150}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 25,
      groupOrder: 0,
      gtmTag: 'high-risk-item-cover-away-home'
    },
    '34f028c0-c1fa-4b66-b145-91616848cf1c': {
      questionId: '34f028c0-c1fa-4b66-b145-91616848cf1c',
      name: 'removeHighRiskItemButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Remove', buttonStyle: 'danger', type: 'button' }
        },
        dependentActions: [{ action: 'remove-control-group' }]
      },
      groupId: '48fd7ef3-3eca-11ea-9974-a9ac1356511b',
      prerequisites: ['{{function:f151}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 26,
      gtmTag: 'remove-high-risk-item-button'
    },
    '5b3b6b60-3ecd-11ea-9974-a9ac1356511b': {
      questionId: '5b3b6b60-3ecd-11ea-9974-a9ac1356511b',
      name: 'highRiskItemsDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Add another' } },
        dependentActions: [{ action: 'add-control-group', props: { groupId: '48fd7ef3-3eca-11ea-9974-a9ac1356511b' } }]
      },
      prerequisites: ['{{function:f152}}', '{{function:f153}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 27,
      groupOrder: 0,
      gtmTag: 'high-risk-items-details'
    },
    'c8317150-3ece-11ea-9974-a9ac1356511b': {
      questionId: 'c8317150-3ece-11ea-9974-a9ac1356511b',
      name: 'safe',
      dataType: 'boolean',
      default: false,
      label: 'Safe',
      mappingField: 'HasASafe',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Do you have a safe in the property?' } },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      visible: false,
      order: 28,
      groupOrder: 0,
      gtmTag: 'safe'
    },
    'e6de12c0-3ece-11ea-9974-a9ac1356511b': {
      questionId: 'e6de12c0-3ece-11ea-9974-a9ac1356511b',
      name: 'safeRating',
      dataType: 'string',
      default: false,
      label: 'Safe rating',
      mappingField: 'SafeRating',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Do you know the rating of the safe?',
            subtext: 'The figures below refer to cash and valuables. E.g. £1k / £10k means £1k cash and £10k valuables.'
          }
        },
        lookup: {
          SF0001: { text: 'UK: £1k /£10k' },
          SF0002: { text: 'UK: £2k /£20k' },
          SF0003: { text: 'UK: £3k /£30k' },
          SF0004: { text: 'UK: £4k /£40k' },
          SF0005: { text: 'UK: £5k /£50k' },
          SF0006: { text: 'Euro 0: £6k /£60k' },
          SF0010: { text: 'Euro 1: £10k /£100k' },
          SF0017: { text: 'Euro 2: £17.5k /£175k' },
          SF0035: { text: 'Euro 3: £35k /£350k' },
          SF0060: { text: 'Euro 4: £60k /£600k' },
          SF0100: { text: 'Euro 5: £100k /£1m' },
          SF0150: { text: 'Euro 6: £150k /£1.5m' }
        },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f154}}'],
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 29,
      groupOrder: 0,
      gtmTag: 'safe-rating'
    },
    'fdd53a0f-5180-4e44-8110-707fa0b6301e': {
      questionId: 'fdd53a0f-5180-4e44-8110-707fa0b6301e',
      name: 'toPropertyCircumstances',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Back', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'previous-section' }]
      },
      groupId: 'button-grouping',
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 31,
      groupOrder: 0,
      gtmTag: 'to-resident-details'
    },
    '81b6e790-41c2-11ea-891e-c99fdec013eb': {
      questionId: '81b6e790-41c2-11ea-891e-c99fdec013eb',
      name: 'toResidentDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Continue', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'next-section' }]
      },
      groupId: 'button-grouping',
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      order: 33,
      groupOrder: 0,
      gtmTag: 'to-resident-details'
    },
    'ab589f00-1d2f-47e4-b446-d070b50a92d1': {
      questionId: 'ab589f00-1d2f-47e4-b446-d070b50a92d1',
      name: 'howIsThePropertyUsed',
      dataType: 'string',
      label: 'Property usage',
      mappingField: 'PropertyUsage',
      data: {
        textAndStyle: { standard: { controlType: 'DropDownList', questionText: 'How is the property used?' } },
        dependentAnswers: {
          '9f17efb5-7ba4-47a3-aac9-c100d34ab474': [
            { condition: '{{function:f155}}', answer: ['HasYou'] },
            { condition: '{{function:f156}}', answer: ['HasWorkingTenant'] }
          ]
        },
        lookup: {
          OWN01: { text: 'Your permanent home' },
          TEN01: { text: 'Let to tenants - contract of 12 months or more' },
          STL01: { text: 'Short-term lets of less than 12 months' },
          HOL01: { text: 'Holiday home' },
          WED01: { text: 'Weekday home - otherwise unoccupied' },
          WEE01: { text: 'Weekend home - otherwise unoccupied' },
          UNO01: { text: 'Unoccupied' }
        },
        validation: [{ type: 'required', message: 'Please select an option.' }]
      },
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 1,
      groupOrder: 0,
      gtmTag: 'how-is-the-property-used'
    },
    '9f17efb5-7ba4-47a3-aac9-c100d34ab474': {
      questionId: '9f17efb5-7ba4-47a3-aac9-c100d34ab474',
      name: 'whoLivesAtProperty',
      dataType: 'array',
      label: 'Who lives at the property',
      mappingField: 'WhoLivesAtPropertyOptions',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', layout: 'float', questionText: 'Who lives at the property?' }
        },
        lookup: {
          HasYou: { condition: '{{function:f157}}', text: 'You' },
          HasYourCloseFamily: { condition: '{{function:f158}}', text: 'Your spouse, partner, dependants or parents' },
          HasWorkingTenant: { condition: '{{function:f159}}', text: 'Working tenants' },
          HasUnemployedTenants: { condition: '{{function:f160}}', text: 'Unemployed tenants' },
          HasStudents: { condition: '{{function:f161}}', text: 'Students' },
          HasOtherNonRelative: { condition: '{{function:f162}}', text: 'Other residents (not related to you)' },
          HasOtherFamilyMembers: { condition: '{{function:f163}}', text: 'Other family members' },
          HasLodgers: { condition: '{{function:f164}}', text: 'Lodgers' },
          HasHolidayHomeGuests: { condition: '{{function:f165}}', text: 'Holiday home guests' },
          HasDssRecipients: { condition: '{{function:f166}}', text: 'DSS recipients' },
          HasAsylumSeekers: { condition: '{{function:f167}}', text: 'Asylum seekers' }
        },
        validation: [{ type: 'required' }]
      },
      isMultiSelect: true,
      prerequisites: ['{{function:f168}}', '{{function:f169}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 2,
      groupOrder: 0,
      gtmTag: 'who-lives-at-property'
    },
    'e13177c0-40e7-11ea-841c-bb3040cb10d0': {
      questionId: 'e13177c0-40e7-11ea-841c-bb3040cb10d0',
      name: 'adults',
      dataType: 'string',
      label: 'Adults',
      mappingField: 'NumberOfAdults',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', layout: 'float', questionText: 'How many adults live there?' }
        },
        lookup: {
          ky00: { text: '0' },
          ky1: { text: '1' },
          ky2: { text: '2' },
          ky3: { text: '3' },
          ky4: { text: '4' },
          ky5: { text: '5' },
          ky6: { text: '6' },
          ky7: { text: '7' },
          '7_10047': { text: '8' },
          '7_10048': { text: '9' },
          '7_10049': { text: '10' },
          '7_10050': { text: 'More than 10' }
        },
        validation: [{ type: 'required', message: 'Please tell us how many adults live at the property.' }]
      },
      prerequisites: ['{{function:f170}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 3,
      groupOrder: 0,
      gtmTag: 'adults'
    },
    'bab69660-40e8-11ea-841c-bb3040cb10d0': {
      questionId: 'bab69660-40e8-11ea-841c-bb3040cb10d0',
      name: 'children',
      dataType: 'string',
      label: 'Children',
      mappingField: 'NumberOfChildren',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            layout: 'float',
            questionText: 'How many children aged under 16 live there?'
          }
        },
        lookup: {
          ky00: { text: '0' },
          ky1: { text: '1' },
          ky2: { text: '2' },
          ky3: { text: '3' },
          ky4: { text: '4' },
          ky5: { text: '5' },
          ky6: { text: '6' },
          ky7: { text: '7' },
          '7_6060': { text: '8' },
          '7_6061': { text: '9' },
          '7_6062': { text: '10' },
          '7_6063': { text: 'More than 10' }
        },
        validation: [{ type: 'required', message: 'Please tell us how many children live at the property.' }]
      },
      prerequisites: ['{{function:f171}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 4,
      groupOrder: 0,
      gtmTag: 'children'
    },
    'cf52c580-40e8-11ea-841c-bb3040cb10d0': {
      questionId: 'cf52c580-40e8-11ea-841c-bb3040cb10d0',
      name: 'whenIsOccupied',
      dataType: 'string',
      label: 'When is occupied',
      mappingField: 'PropertyOccupancyType',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', layout: 'float', questionText: 'When is the property occupied?' }
        },
        lookup: {
          OCC01: { text: 'At night' },
          OCC03: { text: 'Day and night' },
          OCC02: { text: 'During the day' },
          UNO07: { text: 'Holidays only' },
          UNO03: { text: 'Permanently unoccupied' },
          UNO02: { text: 'Weekdays only' },
          UNO01: { text: 'Weekend only' }
        },
        validation: [{ type: 'required', message: 'Please select an option.' }]
      },
      prerequisites: ['{{function:f172}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 5,
      groupOrder: 0,
      gtmTag: 'when-is-occupied'
    },
    '2010c8f0-40e9-11ea-841c-bb3040cb10d0': {
      questionId: '2010c8f0-40e9-11ea-841c-bb3040cb10d0',
      name: 'consecutiveDaysUnoccupied',
      dataType: 'string',
      label: 'Unoccupied consecutive days',
      mappingField: 'DaysUnoccupied',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            layout: 'float',
            questionText: 'For how many consecutive days is your property left unoccupied?'
          }
        },
        lookup: {
          '30': { text: '0-30' },
          '45': { text: '31-45' },
          '60': { text: '45-60' },
          '90': { text: '61-90' },
          '180': { text: '91-180' },
          '365': { text: '181-365' },
          '730': { text: '1 to 2 years' },
          '1095': { text: '2 years+' }
        },
        validation: [{ type: 'required', message: 'Please select an option.' }]
      },
      prerequisites: ['{{function:f173}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 6,
      groupOrder: 0,
      gtmTag: 'consecutive-days-unoccupied'
    },
    '8bd0b550-40e9-11ea-841c-bb3040cb10d0': {
      questionId: '8bd0b550-40e9-11ea-841c-bb3040cb10d0',
      name: 'furnished',
      dataType: 'boolean',
      default: true,
      label: 'Furnished',
      mappingField: 'IsPropertyFurnished',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Is the property furnished for day to day living?' }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      visible: false,
      order: 7,
      groupOrder: 0,
      gtmTag: 'furnished'
    },
    'a8c9da60-40e9-11ea-841c-bb3040cb10d0': {
      questionId: 'a8c9da60-40e9-11ea-841c-bb3040cb10d0',
      name: 'businessPurposes',
      dataType: 'boolean',
      default: false,
      label: 'Business purposes',
      mappingField: 'IsUsedForBusinessUse',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Is any part of the property used for business purposes?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      visible: false,
      order: 8,
      groupOrder: 0,
      gtmTag: 'business-purposes'
    },
    'b9fa2ec0-40e9-11ea-841c-bb3040cb10d0': {
      questionId: 'b9fa2ec0-40e9-11ea-841c-bb3040cb10d0',
      name: 'householdMainSourceIncome',
      dataType: 'boolean',
      label: 'Household main source income',
      mappingField: 'IsBusinessUseMainSourceOfIncome',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: "Is this the household's main source of income?" }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f174}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 9,
      groupOrder: 0,
      gtmTag: 'household-main-source-income'
    },
    'e55768d0-40e9-11ea-841c-bb3040cb10d0': {
      questionId: 'e55768d0-40e9-11ea-841c-bb3040cb10d0',
      name: 'officeOwnAccess',
      dataType: 'boolean',
      label: 'Office own access',
      mappingField: 'IsPassThroughToOffice',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'If the property has an office, do visitors have to pass through a residential part of the property in order to reach it?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required', message: 'Please select an option.' }]
      },
      prerequisites: ['{{function:f175}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 10,
      groupOrder: 0,
      gtmTag: 'office-own-access'
    },
    '04c70c20-40ea-11ea-841c-bb3040cb10d0': {
      questionId: '04c70c20-40ea-11ea-841c-bb3040cb10d0',
      name: 'commercialInsurance',
      dataType: 'boolean',
      label: 'Commercial insurance',
      mappingField: 'IsCommercialInsuranceInPlace',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Do you have commercial insurance for the business in place?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f176}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 11,
      groupOrder: 0,
      gtmTag: 'commercial-insurance'
    },
    'b1dd80b0-40ea-11ea-841c-bb3040cb10d0': {
      questionId: 'b1dd80b0-40ea-11ea-841c-bb3040cb10d0',
      name: 'staff',
      dataType: 'string',
      label: 'Staff',
      mappingField: 'StaffAtProperty',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'How many business-related staff work from the property?'
          }
        },
        lookup: {
          ky00: { text: '0' },
          ky1: { text: '1' },
          ky2: { text: '2' },
          ky3: { text: '3' },
          ky4: { text: '4' },
          ky5: { text: '5' },
          ky6: { text: '6' },
          ky7: { text: '7' },
          ky8: { text: '8' },
          ky9: { text: '9' },
          ky10: { text: '10 or more' }
        },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f177}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 12,
      groupOrder: 0,
      gtmTag: 'staff'
    },
    'fbb46550-40ea-11ea-841c-bb3040cb10d0': {
      questionId: 'fbb46550-40ea-11ea-841c-bb3040cb10d0',
      name: 'publicLiabilityInsurance',
      dataType: 'boolean',
      label: 'Public liability insurance',
      mappingField: 'IsPublicLiabliatyInPlace',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: "Do you have employer's / public liability insurance in place?"
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f178}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 13,
      groupOrder: 0,
      gtmTag: 'public-liability-insurance'
    },
    '1048f350-40eb-11ea-841c-bb3040cb10d0': {
      questionId: '1048f350-40eb-11ea-841c-bb3040cb10d0',
      name: 'businessVisitorsFrequency',
      dataType: 'string',
      label: 'Business visitors frequency',
      mappingField: 'FrequencyOfBusinessVisitors',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'DropDownList',
            questionText: 'How often do you have business-related visitors (not paying guests) at the property?'
          }
        },
        lookup: {
          ky999: { text: 'Every day' },
          ky1: { text: 'Once a week' },
          ky2: { text: 'Twice a week' },
          ky31: { text: 'Twice a month' },
          ky30: { text: 'Once a month' },
          ky90: { text: 'Once every 3 months' },
          ky180: { text: 'Once every 6 months' },
          ky365: { text: 'Once a year' },
          N: { text: 'Never' }
        },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f179}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 14,
      groupOrder: 0,
      gtmTag: 'business-visitors-frequency'
    },
    '62b283e0-40eb-11ea-841c-bb3040cb10d0': {
      questionId: '62b283e0-40eb-11ea-841c-bb3040cb10d0',
      name: 'bedAndBreakfast',
      dataType: 'boolean',
      label: 'Bed and breakfast',
      mappingField: 'IsPayingGuestStayingAtProperty',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'Do you ever have paying guests staying at the property? e.g. the property is run as a Bed & Breakfast'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f180}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 15,
      groupOrder: 0,
      gtmTag: 'bed-and-breakfast'
    },
    '74ea0f10-40eb-11ea-841c-bb3040cb10d0': {
      questionId: '74ea0f10-40eb-11ea-841c-bb3040cb10d0',
      name: 'concurrentGuests',
      dataType: 'string',
      label: 'Concurrent guests',
      mappingField: 'MaximumNumberOfGuests',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'How many guests can stay at the property at any one time?'
          }
        },
        lookup: {
          '1': null,
          '2': null,
          '3': null,
          '4': null,
          '5': null,
          '6': null,
          '7': null,
          '8': null,
          '9': null,
          '10': null,
          '11': null,
          '12': null,
          '99': { text: 'Over 12' }
        },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f181}}', '{{function:f182}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 16,
      groupOrder: 0,
      gtmTag: 'concurrent-guests'
    },
    'b916afc0-40ed-11ea-ba90-d11c44e9c53e': {
      questionId: 'b916afc0-40ed-11ea-ba90-d11c44e9c53e',
      name: 'guestBedrooms',
      dataType: 'string',
      label: 'Guest bedrooms',
      mappingField: 'NumberOfGuestBedrooms',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'How many guest bedrooms does the property have?' }
        },
        lookup: {
          '1': null,
          '2': null,
          '3': null,
          '4': null,
          '5': null,
          '6': null,
          '7': null,
          '8': null,
          '9': null,
          '99': { text: '10 or more' }
        },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f183}}', '{{function:f184}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 17,
      groupOrder: 0,
      gtmTag: 'guest-bedrooms'
    },
    '1df23c70-40ee-11ea-ba90-d11c44e9c53e': {
      questionId: '1df23c70-40ee-11ea-ba90-d11c44e9c53e',
      name: 'eveningMeal',
      dataType: 'boolean',
      label: 'Evening meal',
      mappingField: 'IsEveningMealServed',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Is an evening meal served to the guests?' }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f185}}', '{{function:f186}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 18,
      groupOrder: 0,
      gtmTag: 'evening-meal'
    },
    '38c09240-40ee-11ea-ba90-d11c44e9c53e': {
      questionId: '38c09240-40ee-11ea-ba90-d11c44e9c53e',
      name: 'businessEquipment',
      dataType: 'boolean',
      label: 'Business equipment',
      mappingField: 'IsCoverRequiredForBusinessEquipment',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Is cover required for home business equipment?' }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f187}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 19,
      groupOrder: 0,
      gtmTag: 'business-equipment'
    },
    '54ff6800-40ee-11ea-ba90-d11c44e9c53e': {
      questionId: '54ff6800-40ee-11ea-ba90-d11c44e9c53e',
      name: 'businessEquipmentCoverAmount',
      dataType: 'string',
      label: 'Business equipment cover amount',
      mappingField: 'HowMuchCoverIsRequiredForBusinessStock',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'How much cover is required?' } },
        lookup: {
          N: { text: '£0' },
          ky5000: { text: '£5000' },
          ky10000: { text: '£10000' },
          'More than 10000': { text: '£10000+' }
        },
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f188}}', '{{function:f189}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 20,
      groupOrder: 0,
      gtmTag: 'business-equipment-cover-amount'
    },
    'c5011cc0-40ee-11ea-ba90-d11c44e9c53e': {
      questionId: 'c5011cc0-40ee-11ea-ba90-d11c44e9c53e',
      name: 'businessStock',
      dataType: 'boolean',
      label: 'Business stock',
      mappingField: 'IsStockHeldAtProperty',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Is business stock held at the property?' }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      prerequisites: ['{{function:f190}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 21,
      groupOrder: 0,
      gtmTag: 'business-stock'
    },
    'd52de3d0-40ee-11ea-ba90-d11c44e9c53e': {
      questionId: 'd52de3d0-40ee-11ea-ba90-d11c44e9c53e',
      name: 'stockType',
      dataType: 'array',
      label: 'Stock type',
      mappingField: 'BusinessStock',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', layout: 'float', questionText: 'What kind of stock is held?' }
        },
        lookup: {
          AudioVisualOrComputerEquipment: { text: 'Audio, Visual or Computer Equipment' },
          CleaningLiquids: { text: 'Cleaning Liquids' },
          LiquidsFlammable: { text: 'Liquids  (flammable)' },
          LiquidsNonFlammable: { text: 'Liquids (non-flammable)' },
          Metal: null,
          PaperOnly: { text: 'Paper Only' },
          PreciousMetalsStones: { text: 'Precious Metals/Stone' },
          SportsEquipment: { text: 'Sports Equipment' },
          OtherBusinnessStock: { text: 'Other' }
        },
        validation: [{ type: 'required', message: 'Please select at least one option.' }]
      },
      isMultiSelect: true,
      prerequisites: ['{{function:f191}}', '{{function:f192}}'],
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 22,
      groupOrder: 0,
      gtmTag: 'stock-type'
    },
    '36a37a25-c8de-41e8-a94b-876a551f0199': {
      questionId: '36a37a25-c8de-41e8-a94b-876a551f0199',
      name: 'toContents',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Back', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'previous-section' }]
      },
      groupId: 'button-grouping',
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 24,
      groupOrder: 0,
      gtmTag: 'to-resident-details'
    },
    '5e688e00-41c3-11ea-891e-c99fdec013eb': {
      questionId: '5e688e00-41c3-11ea-891e-c99fdec013eb',
      name: 'toHouseholdDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Continue', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'next-section' }]
      },
      groupId: 'button-grouping',
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      order: 25,
      groupOrder: 0,
      gtmTag: 'to-household-details'
    },
    '35bedf70-40f8-11ea-854a-85cd7b624796': {
      questionId: '35bedf70-40f8-11ea-854a-85cd7b624796',
      name: 'dateOfBirth',
      dataType: 'date',
      label: 'Date of birth',
      mappingField: 'PolicyHolderDOB',
      data: {
        textAndStyle: { standard: { controlType: 'DateDropDown', questionText: 'Your Date of Birth' } },
        validation: [
          { type: 'custom', validator: '{{function:f193}}', message: '' },
          { type: 'custom', validator: '{{function:f194}}', message: 'Please enter your date of birth.' },
          { type: 'date', minValueExpr: '{{function:f195}}', maxValueExpr: '{{function:f196}}' }
        ]
      },
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      visible: false,
      order: 1,
      groupOrder: 0,
      gtmTag: 'date-of-birth'
    },
    'aa1ebe30-40f8-11ea-854a-85cd7b624796': {
      questionId: 'aa1ebe30-40f8-11ea-854a-85cd7b624796',
      name: 'occupation',
      dataType: 'string',
      label: 'Occupation',
      mappingField: 'Occupation',
      data: {
        textAndStyle: { standard: { controlType: 'AutoCompleteList', questionText: 'Your Occupation' } },
        lookupExpr: '{{commonLookup:occupations}}',
        validation: [{ type: 'required', message: 'Please tell us your occupation.' }]
      },
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 2,
      groupOrder: 0,
      gtmTag: 'occupation'
    },
    '51278400-40f9-11ea-854a-85cd7b624796': {
      questionId: '51278400-40f9-11ea-854a-85cd7b624796',
      name: 'typeOfBusiness',
      dataType: 'string',
      label: 'Type of business',
      mappingField: 'TypeOfBusiness',
      data: {
        textAndStyle: { standard: { controlType: 'AutoCompleteList', questionText: 'Type of Business' } },
        lookupExpr: '{{commonLookup:typesOfBusiness}}',
        validation: [{ type: 'required', message: 'Please tell us the type of business.' }]
      },
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 3,
      groupOrder: 0,
      gtmTag: 'type-of-business'
    },
    '639adfb0-40f9-11ea-854a-85cd7b624796': {
      questionId: '639adfb0-40f9-11ea-854a-85cd7b624796',
      name: 'jointNames',
      dataType: 'boolean',
      default: false,
      label: 'Joint names',
      mappingField: 'HasAnyAdditionalJointPolicyHolders',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Would you like the cover to be in joint names?' }
        },
        dependentActions: [
          {
            action: 'add-control-group',
            condition: '{{function:f197}}',
            props: { groupId: '95748bb0-4100-11ea-854a-85cd7b624796' }
          }
        ],
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      visible: false,
      order: 4,
      groupOrder: 0,
      gtmTag: 'joint-names'
    },
    '21f82490-40ff-11ea-854a-85cd7b624796': {
      questionId: '21f82490-40ff-11ea-854a-85cd7b624796',
      name: 'jointNamesTitle',
      dataType: 'string',
      label: 'Joint names title',
      mappingField: 'JointPolicyHolderTitle',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', layout: 'float', questionText: 'Title' } },
        lookupExpr: '{{commonLookup:titles}}',
        validation: [{ type: 'required' }]
      },
      groupId: '95748bb0-4100-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f198}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 5,
      groupOrder: 0,
      gtmTag: 'joint-names-title'
    },
    '230e7690-40ff-11ea-854a-85cd7b624796': {
      questionId: '230e7690-40ff-11ea-854a-85cd7b624796',
      name: 'jointNamesFirstName',
      dataType: 'string',
      label: 'Joint names first name',
      mappingField: 'JointPolicyHolderForename',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'First Name(s)' } },
        validation: [{ type: 'required' }]
      },
      groupId: '95748bb0-4100-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f199}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 6,
      groupOrder: 0,
      gtmTag: 'joint-names-first-name'
    },
    '240d9710-40ff-11ea-854a-85cd7b624796': {
      questionId: '240d9710-40ff-11ea-854a-85cd7b624796',
      name: 'jointNamesSurname',
      dataType: 'string',
      default: false,
      label: 'Joint names surname',
      mappingField: 'JointPolicyHolderSurname',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Surname' } },
        validation: [{ type: 'required' }]
      },
      groupId: '95748bb0-4100-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f200}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 7,
      groupOrder: 0,
      gtmTag: 'joint-names-surname'
    },
    '25c2c120-40ff-11ea-854a-85cd7b624796': {
      questionId: '25c2c120-40ff-11ea-854a-85cd7b624796',
      name: 'jointNamesDateOfBirth',
      dataType: 'date',
      label: 'Joint names date of birth',
      mappingField: 'JointPolicyHolderDOB',
      data: {
        textAndStyle: { standard: { controlType: 'DateDropDown', questionText: 'Date of birth' } },
        validation: [
          { type: 'custom', validator: '{{function:f202}}', message: '' },
          { type: 'custom', validator: '{{function:f203}}', message: 'Please enter the date of birth.' },
          { type: 'date', minValueExpr: '{{function:f204}}', maxValueExpr: '{{function:f205}}' }
        ]
      },
      groupId: '95748bb0-4100-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f201}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 8,
      groupOrder: 0,
      gtmTag: 'joint-names-date-of-birth'
    },
    '4cc66510-40ff-11ea-854a-85cd7b624796': {
      questionId: '4cc66510-40ff-11ea-854a-85cd7b624796',
      name: 'jointNamesRelationship',
      dataType: 'string',
      default: false,
      label: 'Joint names relationship',
      mappingField: 'JointPolicyHolderRelationship',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Relationship to you' } },
        lookupExpr: '{{commonLookup:relationships}}',
        validation: [{ type: 'required' }]
      },
      groupId: '95748bb0-4100-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f206}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 9,
      groupOrder: 0,
      gtmTag: 'joint-names-relationship'
    },
    '556a4f10-40ff-11ea-854a-85cd7b624796': {
      questionId: '556a4f10-40ff-11ea-854a-85cd7b624796',
      name: 'jointNamesOccupation',
      dataType: 'string',
      label: 'Joint names occupation',
      mappingField: 'JointPolicyHolderOccupation',
      data: {
        textAndStyle: { standard: { controlType: 'AutoCompleteList', questionText: 'Occupation' } },
        lookupExpr: '{{commonLookup:occupations}}',
        validation: [{ type: 'required' }]
      },
      groupId: '95748bb0-4100-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f207}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 10,
      groupOrder: 0,
      gtmTag: 'joint-names-occupation'
    },
    '60966a90-40ff-11ea-854a-85cd7b624796': {
      questionId: '60966a90-40ff-11ea-854a-85cd7b624796',
      name: 'jointNamesTypeOfBusiness',
      dataType: 'string',
      label: 'Joint names typeOfBusiness',
      mappingField: 'JointPolicyHolderTypeOfBusiness',
      data: {
        textAndStyle: { standard: { controlType: 'AutoCompleteList', questionText: 'Type of Business' } },
        lookupExpr: '{{commonLookup:typesOfBusiness}}',
        validation: [{ type: 'required' }]
      },
      groupId: '95748bb0-4100-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f208}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 11,
      groupOrder: 0,
      gtmTag: 'joint-names-type-of-business'
    },
    '7e1d29a0-40ff-11ea-854a-85cd7b624796': {
      questionId: '7e1d29a0-40ff-11ea-854a-85cd7b624796',
      name: 'jointNamesBusinessTrade',
      dataType: 'boolean',
      label: 'Joint names business trade',
      mappingField: 'JointPolicyHolderDoesBusinessTradeFromProperty',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Does this business trade from any part of the property you are looking to insure?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      groupId: '95748bb0-4100-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f209}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 12,
      groupOrder: 0,
      gtmTag: 'joint-names-business-trade'
    },
    'c57d4903-424c-4d99-9132-b4eebb27463c': {
      questionId: 'c57d4903-424c-4d99-9132-b4eebb27463c',
      name: 'removeJointDetailsButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Remove', buttonStyle: 'danger' } },
        dependentActions: [{ action: 'remove-control-group' }]
      },
      groupId: '95748bb0-4100-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f210}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 13,
      gtmTag: 'remove-joint-details-button'
    },
    '21038b60-40ff-11ea-854a-85cd7b624796': {
      questionId: '21038b60-40ff-11ea-854a-85cd7b624796',
      name: 'jointNamesDetails',
      dataType: 'button',
      default: false,
      label: 'jointNamesDetails',
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Add another', type: 'button' } },
        dependentActions: [{ action: 'add-control-group', props: { groupId: '95748bb0-4100-11ea-854a-85cd7b624796' } }]
      },
      prerequisites: ['{{function:f211}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 14,
      groupOrder: 0,
      gtmTag: 'joint-names-details'
    },
    'd05ba711-5434-4ecc-9ace-c89e95dcb20a': {
      questionId: 'd05ba711-5434-4ecc-9ace-c89e95dcb20a',
      name: 'claims',
      dataType: 'boolean',
      default: false,
      label: 'claims',
      mappingField: 'HasClaimsAndLosses',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            helpText:
              'Losses include whether the policyholder or resident considered making a claim but did not follow this through and even where the policyholder or resident incurred a loss but was not insured at the time.',
            questionText:
              'Has any policyholder or resident claimed on a home insurance policy, or suffered loss or damage which wasn’t claimed for, in the last 5 years?'
          }
        },
        dependentActions: [
          {
            action: 'add-control-group',
            condition: '{{function:f212}}',
            props: { groupId: 'c9b6978f-e492-429a-ba2a-6e5b617b5a4a' }
          }
        ],
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 16,
      groupOrder: 0,
      gtmTag: 'claims'
    },
    'ada086de-8d4b-426e-a9b6-4680e125a5b8': {
      questionId: 'ada086de-8d4b-426e-a9b6-4680e125a5b8',
      name: 'claimType',
      dataType: 'string',
      label: 'Claim type',
      mappingField: 'ClaimsAndLossesTypeOfClaim',
      data: {
        textAndStyle: {
          standard: { controlType: 'AutoCompleteList', questionText: 'What type of claim/loss was it?' }
        },
        lookup: {
          'Accidental damage by spillage': null,
          'Accidental damage by tearing/ripping': null,
          'Accidental damage by water coming in through flat roof': null,
          'Accidental damage to audio/audio visual equipment': null,
          'Accidental damage to computer equipment': null,
          'Accidental damage to pedal cycle': null,
          'Accidental damage to soft furnishings/carpet': null,
          'Accidental damage while loading or unloading': null,
          'Accidental damage - other cause': null,
          'Accidental loss of audio/audio visual equipment': null,
          'Accidental loss - other': null,
          'Burst Pipes': null,
          'Damage to glass/hobs/mirrors/bathroom fittings': null,
          Earthquake: null,
          'Escape of water due to backing up of drains': null,
          'Escape of water due to burst pipes': null,
          'Escape of water due to freezing conditions': null,
          'Escape of water from appliance': null,
          'Escape of water - other cause': null,
          Explosion: null,
          'Falling satellite dish': null,
          'Falling television or radio aerial': null,
          'Falling tree(s)': null,
          'Fatal Accident': null,
          'Fire caused by arson': null,
          'Fire caused by cigarette/smoking': null,
          'Fire caused by contractors/repairers': null,
          'Fire caused by cooking': null,
          'Fire caused by electrical fault': null,
          'Fire caused by heating appliance': null,
          'Fire caused by scorching': null,
          'Fire caused by terrorism': null,
          'Fire caused maliciously': null,
          'Fire resulting in smoke damage': null,
          'Fire spread from adjacent property': null,
          'Fire - other cause': null,
          'Flood - Coastal': null,
          'Flood - Non-coastal': null,
          'Flood - flash flood': null,
          'Flood caused by backing up of drains': null,
          'Flood - other cause': null,
          'Freezer contents lost/damaged due to failure of appliance': null,
          'Freezer contents lost/damaged due to power failure': null,
          Heave: null,
          Impact: null,
          Landslip: null,
          Liability: null,
          Lightning: null,
          'Loss of Keys': null,
          'Loss of or damage to personal possessions': null,
          'Malicious Acts, Riot or Vandalism': null,
          'Malicious damage at property': null,
          'Malicious damage away from property': null,
          'Money/credit cards lost accidentally': null,
          'Money/credit cards misused': null,
          'Money/credit cards stolen': null,
          'Pedal Cycles': null,
          'Reinstatement of Documents': null,
          Riot: null,
          Storm: null,
          'Subsidence due to clay soil': null,
          'Subsidence due to drains': null,
          'Subsidence due to foundation movement': null,
          'Subsidence due to latent defect': null,
          'Subsidence due to made-up ground': null,
          'Subsidence due to mining': null,
          'Subsidence due to sloping ground': null,
          'Subsidence due to soil type (not clay)': null,
          'Subsidence due to tree root damage': null,
          'Subsidence - other cause': null,
          'Theft away from the property': null,
          'Theft by deception': null,
          'Theft by robbery': null,
          'Theft following break-in at the property': null,
          'Theft from a bank or safe deposit box': null,
          'Theft from outbuildings at property': null,
          'Theft from unattended vehicle': null,
          'Theft of pedal cycle which was locked-up': null,
          'Theft of pedal cycle which was not locked-up': null,
          'Theft while you were at the property': null,
          'Theft without breaking-in to the property': null,
          'Theft - other cause': null,
          'Travel - Loss of Baggage': null,
          'Underground services damage caused by cables': null,
          'Underground services damage caused by drains': null,
          'Underground services damage caused by pipes': null,
          'Underground services damage caused by underground tank': null,
          Other: null
        },
        validation: [{ type: 'required' }]
      },
      groupId: 'c9b6978f-e492-429a-ba2a-6e5b617b5a4a',
      prerequisites: ['{{function:f213}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 17,
      groupOrder: 0,
      gtmTag: 'claim-type'
    },
    'a288a07b-5467-4676-9654-194e0e32140d': {
      questionId: 'a288a07b-5467-4676-9654-194e0e32140d',
      name: 'claimEntryGain',
      dataType: 'string',
      label: 'Entry Gain',
      mappingField: 'ClaimsAndLossesEntryGain',
      data: {
        textAndStyle: { standard: { controlType: 'DropDownList', questionText: 'How did the burglars gain entry?' } },
        lookup: {
          GFD02: { text: 'Ground Floor/ accessible door (closed but unlocked)' },
          GFD03: { text: 'Ground Floor/ accessible door (locked)' },
          GFD01: { text: 'Ground Floor/ accessible door (open)' },
          GFD04: { text: 'Ground Floor/ accessible door smashed through' },
          GFW04: { text: 'Ground Floor/ accessible glass smashed ' },
          GFW02: { text: 'Ground Floor/ accessible window (closed but unlocked)' },
          GFW03: { text: 'Ground Floor/ accessible window (locked)' },
          GFW01: { text: 'Ground Floor/ accessible window (open)' },
          GAR02: { text: 'Secure garage door' },
          SKY02: { text: 'Secure skylight' },
          SKY01: { text: 'Unsecure skylight' },
          GAR01: { text: 'Unsecured garage door' },
          ky99: { text: 'Other' }
        },
        validation: [{ type: 'required' }]
      },
      groupId: 'c9b6978f-e492-429a-ba2a-6e5b617b5a4a',
      prerequisites: ['{{function:f214}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 17,
      groupOrder: 0,
      gtmTag: 'claim-entry-gain'
    },
    '56c53af9-204e-4fa1-b0cf-249f7e031acf': {
      questionId: '56c53af9-204e-4fa1-b0cf-249f7e031acf',
      name: 'claimHasSecurityImprovement',
      dataType: 'boolean',
      label: 'Security Improvement',
      mappingField: 'ClaimsAndLossesHasSecurityImprovement',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Has security improved since?' } },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      groupId: 'c9b6978f-e492-429a-ba2a-6e5b617b5a4a',
      prerequisites: ['{{function:f215}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 17,
      groupOrder: 0,
      gtmTag: 'claim-has-security-improvement'
    },
    'f6e0f815-8bb4-4645-9b9c-d49dc4045cb4': {
      questionId: 'f6e0f815-8bb4-4645-9b9c-d49dc4045cb4',
      name: 'claimDate',
      dataType: 'date',
      mappingField: 'ClaimsAndLossesClaimDate',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'DateDropDown',
            helpText: 'If not sure of the exact date, please give an approximation.',
            questionText: 'When did the claim/loss happen?'
          }
        },
        validation: [
          { type: 'custom', validator: '{{function:f217}}', message: '' },
          { type: 'custom', validator: '{{function:f218}}', message: 'Please select day, month and year.' },
          { type: 'date', minValueExpr: '{{function:f219}}', maxValueExpr: '{{function:f220}}' }
        ]
      },
      groupId: 'c9b6978f-e492-429a-ba2a-6e5b617b5a4a',
      prerequisites: ['{{function:f216}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 18,
      groupOrder: 0,
      gtmTag: 'claim-date'
    },
    '9e05db86-aad3-4816-a54a-acc209a73ab3': {
      questionId: '9e05db86-aad3-4816-a54a-acc209a73ab3',
      name: 'claimPaid',
      dataType: 'number',
      default: 20000,
      label: 'Claim paid',
      mappingField: 'ClaimsAndLossesClaimAmount',
      data: {
        textAndStyle: {
          standard: { controlType: 'CurrencyInput', questionText: 'What was the value of the loss or amount claimed?' }
        },
        validation: [
          { type: 'required' },
          {
            type: 'integer',
            minValue: 1,
            maxValue: 10000000,
            messages: { notBetween: 'Must be between £1 and £10,000,000.' }
          }
        ]
      },
      groupId: 'c9b6978f-e492-429a-ba2a-6e5b617b5a4a',
      prerequisites: ['{{function:f221}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 19,
      groupOrder: 0,
      gtmTag: 'claim-paid'
    },
    '731e467b-efe3-4f34-9c80-e44f46fd03c0': {
      questionId: '731e467b-efe3-4f34-9c80-e44f46fd03c0',
      name: 'claimOutstanding',
      dataType: 'boolean',
      label: 'Claim outstanding',
      mappingField: 'ClaimsAndLossesIsClaimPaymentPending',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Is a claim payment still outstanding?' }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      groupId: 'c9b6978f-e492-429a-ba2a-6e5b617b5a4a',
      prerequisites: ['{{function:f222}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 20,
      groupOrder: 0,
      gtmTag: 'claim-outstanding'
    },
    '0d0a6d17-2fc2-4bcd-8802-4c2444fd7aa6': {
      questionId: '0d0a6d17-2fc2-4bcd-8802-4c2444fd7aa6',
      name: 'claimSection',
      dataType: 'string',
      label: 'Claim section',
      mappingField: 'ClaimsAndLossesWhatHasClaimAffected',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'What did the claim/loss affect?', subtext: 'Test' }
        },
        lookup: { ky2: { text: 'Buildings' }, ky1: { text: 'Buildings & Contents' }, ky3: { text: 'Contents' } },
        validation: [{ type: 'required' }]
      },
      groupId: 'c9b6978f-e492-429a-ba2a-6e5b617b5a4a',
      prerequisites: ['{{function:f223}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 21,
      groupOrder: 0,
      gtmTag: 'claim-section'
    },
    '749900e9-2781-4b16-ac41-64efc9b458ff': {
      questionId: '749900e9-2781-4b16-ac41-64efc9b458ff',
      name: 'atProperty',
      dataType: 'boolean',
      label: 'At property',
      mappingField: 'ClaimsAndLossesHasClaimHappenedAtProperty',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Did the claim/loss happen at the property in question?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      groupId: 'c9b6978f-e492-429a-ba2a-6e5b617b5a4a',
      prerequisites: ['{{function:f224}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 22,
      groupOrder: 0,
      gtmTag: 'at-property'
    },
    '67e2ca3b-feee-410c-8f90-c3032d5b1563': {
      questionId: '67e2ca3b-feee-410c-8f90-c3032d5b1563',
      name: 'claimDetails',
      dataType: 'button',
      default: false,
      label: 'Claim details',
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Add another', type: 'button' } },
        dependentActions: [{ action: 'add-control-group', props: { groupId: 'c9b6978f-e492-429a-ba2a-6e5b617b5a4a' } }]
      },
      prerequisites: ['{{function:f225}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 24,
      groupOrder: 0,
      gtmTag: 'claim-details'
    },
    '5b057e30-4105-11ea-854a-85cd7b624796': {
      questionId: '5b057e30-4105-11ea-854a-85cd7b624796',
      name: 'cancelledInsurance',
      dataType: 'boolean',
      default: false,
      label: 'Cancelled insurance',
      mappingField: 'HasHomeInsuranceCancelled',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'Has any policyholder or resident had home insurance declined, cancelled, refused, or had special terms imposed in the last 5 years?'
          }
        },
        dependentActions: [
          {
            action: 'add-control-group',
            condition: '{{function:f226}}',
            props: { groupId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796' }
          }
        ],
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      visible: false,
      order: 24,
      groupOrder: 0,
      gtmTag: 'cancelled-insurance'
    },
    'd29d679d-02d0-46c8-ae65-c9cab317c278': {
      questionId: 'd29d679d-02d0-46c8-ae65-c9cab317c278',
      name: 'removeClaimButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Remove', buttonStyle: 'danger', type: 'button' }
        },
        dependentActions: [{ action: 'remove-control-group' }]
      },
      groupId: 'c9b6978f-e492-429a-ba2a-6e5b617b5a4a',
      prerequisites: ['{{function:f227}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 25,
      gtmTag: 'remove-claim-button'
    },
    '5e1d4580-4105-11ea-854a-85cd7b624796': {
      questionId: '5e1d4580-4105-11ea-854a-85cd7b624796',
      name: 'cancelledInsuranceResident',
      dataType: 'string',
      label: 'Resident with cancelled insurance',
      mappingField: 'InsuranceCancelledResident',
      data: {
        textAndStyle: { standard: { controlType: 'DropDownList', questionText: 'Who do you wish to tell us about?' } },
        lookupExpr: '{{function:createResidentsLookupOptions}}',
        validation: [{ type: 'required' }]
      },
      groupId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f228}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 25,
      groupOrder: 0,
      gtmTag: 'cancelled-insurance-resident'
    },
    'b921dee8-a23d-4be6-9c4c-3eb79a7d84b2': {
      questionId: 'b921dee8-a23d-4be6-9c4c-3eb79a7d84b2',
      name: 'cancelledInsuranceOtherResidentTitle',
      dataType: 'string',
      label: 'Cancelled insurance resident title',
      mappingField: 'InsuranceCancelledTitle',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', layout: 'float', questionText: 'Title' } },
        lookupExpr: '{{commonLookup:titles}}',
        validation: [{ type: 'required' }]
      },
      groupId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f229}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 26,
      groupOrder: 0,
      gtmTag: 'cancelled-insurance-other-resident-title'
    },
    'd4880f99-fc37-4358-a5d3-0ab44d0990ac': {
      questionId: 'd4880f99-fc37-4358-a5d3-0ab44d0990ac',
      name: 'cancelledInsuranceOtherResidentFirstName',
      dataType: 'string',
      label: 'Cancelled insurance resident first name',
      mappingField: 'InsuranceCancelledForename',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'First Name(s)' } },
        validation: [{ type: 'required' }]
      },
      groupId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f230}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 26,
      groupOrder: 0,
      gtmTag: 'cancelled-insurance-other-resident-first-name'
    },
    '5113a81e-3d1c-4751-b652-58c2babc1a4f': {
      questionId: '5113a81e-3d1c-4751-b652-58c2babc1a4f',
      name: 'cancelledInsuranceOtherResidentSurname',
      dataType: 'string',
      default: false,
      label: 'Cancelled insurance resident surname',
      mappingField: 'InsuranceCancelledSurname',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Surname' } },
        lookup: {
          Antiques: null,
          Artworks: null,
          China: null,
          Clocks: null,
          Coins: null,
          'Electric wheelchairs or disability scooter': null,
          Furs: null,
          'Garden machinery': { text: 'Garden machinery (e.g. lawnmowers)' },
          Glassware: null,
          'Gold, silver or plated items': { text: 'Gold, silver or plated items, except jewellery or watches' },
          Guns: null,
          Handbags: null,
          Jewellery: null,
          Medals: null,
          'Medical equipment': { text: 'Medical equipment (inc. hearing aids)' },
          'Musical equipment': null,
          Porcelain: null,
          'Rare books': null,
          'Sports equipment': null,
          'Stamp collections': null,
          Watches: null
        },
        validation: [{ type: 'required' }]
      },
      groupId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f231}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 26,
      groupOrder: 0,
      gtmTag: 'cancelled-insurance-other-resident-surname'
    },
    'e26b5c03-aa16-495f-8899-aae56fc33565': {
      questionId: 'e26b5c03-aa16-495f-8899-aae56fc33565',
      name: 'cancelledInsuranceOtherResidentDateOfBirth',
      dataType: 'date',
      label: 'Cancelled insurance resident date of birth',
      mappingField: 'InsuranceCancelledDOB',
      data: {
        textAndStyle: { standard: { controlType: 'DateDropDown', questionText: 'Date of birth' } },
        validation: [
          { type: 'custom', validator: '{{function:f233}}', message: '' },
          { type: 'custom', validator: '{{function:f234}}', message: 'Please enter the date of birth.' },
          { type: 'date', minValueExpr: '{{function:f235}}', maxValueExpr: '{{function:f236}}' }
        ]
      },
      groupId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f232}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 26,
      groupOrder: 0,
      gtmTag: 'cancelled-insurance-other-resident-date-of-birth'
    },
    'a4700a8f-67bf-4b3a-b286-8f670ae12550': {
      questionId: 'a4700a8f-67bf-4b3a-b286-8f670ae12550',
      name: 'cancelledInsuranceOtherResidentRelationship',
      dataType: 'string',
      default: false,
      label: 'Cancelled insurance resident relationship',
      mappingField: 'InsuranceCancelledRelationship',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Relationship to you' } },
        lookupExpr: '{{commonLookup:relationships}}',
        validation: [{ type: 'required' }]
      },
      groupId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f237}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 26,
      groupOrder: 0,
      gtmTag: 'cancelled-insurance-other-resident-relationship'
    },
    '5f421670-4105-11ea-854a-85cd7b624796': {
      questionId: '5f421670-4105-11ea-854a-85cd7b624796',
      name: 'cancelledInsuranceSituation',
      dataType: 'string',
      label: 'Cancelled insurance resident situation',
      mappingField: 'InsuranceCancelledEligibilitySituation',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'What was the situation?' } },
        lookup: {
          '1': { text: 'Insurance Cancelled' },
          '2': { text: 'Insurance Refused' },
          '3': { text: 'Renewal Refused' },
          '4': { text: 'Special terms imposed' },
          '5': { text: 'Increased Premium' }
        },
        validation: [{ type: 'required' }]
      },
      groupId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f238}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 26,
      groupOrder: 0,
      gtmTag: 'cancelled-insurance-situation'
    },
    '50a7e0d0-4106-11ea-854a-85cd7b624796': {
      questionId: '50a7e0d0-4106-11ea-854a-85cd7b624796',
      name: 'cancelledInsuranceReason',
      dataType: 'string',
      label: 'Cancelled insurance resident reason',
      mappingField: 'InsuranceCancelledEligibilityReason',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'What was the reason?' } },
        lookup: {
          CLA01: { text: 'Claims history' },
          CCJ01: { text: 'County Court Judgment (CCJ)' },
          BAN01: { text: 'Declared bankrupt' },
          IVA01: { text: 'Declared insolvent (IVA)' },
          LIA01: { text: 'Liability claim' },
          MAT01: { text: 'Material fact disclosed mid-term' },
          MOT01: { text: 'Motoring conviction' },
          PAY01: { text: 'Premium arrears' },
          LET01: { text: 'Property rented out' },
          REP01: { text: 'Property repossessed' },
          MOV01: { text: 'Property sold' },
          UNO01: { text: 'Property unoccupied' },
          SCR01: { text: 'Spent conviction' },
          CRI01: { text: 'Unspent conviction' },
          ky99: { text: 'Other' }
        },
        validation: [{ type: 'required' }]
      },
      groupId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f239}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 27,
      groupOrder: 0,
      gtmTag: 'cancelled-insurance-reason'
    },
    'b388fd10-4106-11ea-854a-85cd7b624796': {
      questionId: 'b388fd10-4106-11ea-854a-85cd7b624796',
      name: 'cancelledInsuranceYear',
      dataType: 'number',
      label: 'Cancelled insurance resident year',
      mappingField: 'InsuranceCancelledEligibilityYear',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'In what year did this occur?' } },
        validation: [
          { type: 'required' },
          { type: 'integer', minValueExpr: '{{function:f241}}', maxValueExpr: '{{function:f242}}', messages: {} }
        ]
      },
      groupId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f240}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 28,
      groupOrder: 0,
      gtmTag: 'cancelled-insurance-year'
    },
    '529f79cc-ed21-4eb9-b59b-e2df65354606': {
      questionId: '529f79cc-ed21-4eb9-b59b-e2df65354606',
      name: 'removeInsuranceCancelledButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Remove', buttonStyle: 'danger' } },
        dependentActions: [{ action: 'remove-control-group' }]
      },
      groupId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796',
      prerequisites: ['{{function:f243}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 29,
      gtmTag: 'remove-cancelled-insurance-button'
    },
    '5c3ffa00-4105-11ea-854a-85cd7b624796': {
      questionId: '5c3ffa00-4105-11ea-854a-85cd7b624796',
      name: 'cancelledInsuranceDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Add another', type: 'button' } },
        dependentActions: [{ action: 'add-control-group', props: { groupId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796' } }]
      },
      prerequisites: ['{{function:f244}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 30,
      groupOrder: 0,
      gtmTag: 'cancelled-insurance-details'
    },
    'ea226c50-4113-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'ea226c50-4113-11ea-8d4c-ab6d2f0166c9',
      name: 'bankruptcy',
      dataType: 'boolean',
      default: false,
      label: 'Bankruptcy',
      mappingField: 'HasBeenDeclaredBankruptBCCJIVA',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Has any policyholder or resident been declared bankrupt in the last 5 years?'
          }
        },
        dependentActions: [
          {
            action: 'add-control-group',
            condition: '{{function:f245}}',
            props: { groupId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9' }
          }
        ],
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      visible: false,
      order: 31,
      groupOrder: 0,
      gtmTag: 'bankruptcy'
    },
    'a60395fb-537d-47e9-9f96-8befea32da7c': {
      questionId: 'a60395fb-537d-47e9-9f96-8befea32da7c',
      name: 'bankruptcyResident',
      dataType: 'string',
      label: 'Bankruptcy resident',
      mappingField: 'BankruptcyResident',
      data: {
        textAndStyle: { standard: { controlType: 'DropDownList', questionText: 'Who do you wish to tell us about?' } },
        lookupExpr: '{{function:createResidentsLookupOptions}}',
        validation: [{ type: 'required' }]
      },
      groupId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f246}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 32,
      groupOrder: 0,
      gtmTag: 'bankruptcy-resident'
    },
    '94e1fd60-e581-42ec-b98b-eea07cf8ed77': {
      questionId: '94e1fd60-e581-42ec-b98b-eea07cf8ed77',
      name: 'bankruptcyOtherResidentTitle',
      dataType: 'string',
      label: 'Bankruptcy resident title',
      mappingField: 'BankruptcyTitle',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', layout: 'float', questionText: 'Title' } },
        lookupExpr: '{{commonLookup:titles}}',
        validation: [{ type: 'required' }]
      },
      groupId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f247}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 32,
      groupOrder: 0,
      gtmTag: 'bankruptcy-other-resident-title'
    },
    '7895aff2-9ef2-4c61-874b-1f6f1acff2b6': {
      questionId: '7895aff2-9ef2-4c61-874b-1f6f1acff2b6',
      name: 'bankruptcyOtherResidentFirstName',
      dataType: 'string',
      label: 'Bankruptcy resident first name',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'First Name(s)' } },
        validation: [{ type: 'required' }]
      },
      groupId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f248}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 32,
      groupOrder: 0,
      gtmTag: 'bankruptcy-other-resident-first-name'
    },
    '5218dfa5-61ef-480c-9775-2b617da7244a': {
      questionId: '5218dfa5-61ef-480c-9775-2b617da7244a',
      name: 'bankruptcyOtherResidentSurname',
      dataType: 'string',
      default: false,
      label: 'Bankruptcy resident surname',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Surname' } },
        validation: [{ type: 'required' }]
      },
      groupId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f249}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 32,
      groupOrder: 0,
      gtmTag: 'bankruptcy-other-resident-surname'
    },
    '2f0f1170-cf49-4701-ad60-a874cedc8ff9': {
      questionId: '2f0f1170-cf49-4701-ad60-a874cedc8ff9',
      name: 'bankruptcyOtherResidentDateOfBirth',
      dataType: 'date',
      label: 'Bankruptcy resident date of birth',
      data: {
        textAndStyle: { standard: { controlType: 'DateDropDown', questionText: 'Date of birth' } },
        validation: [
          { type: 'custom', validator: '{{function:f251}}', message: '' },
          { type: 'custom', validator: '{{function:f252}}', message: 'Please enter the date of birth.' },
          { type: 'date', minValueExpr: '{{function:f253}}', maxValueExpr: '{{function:f254}}' }
        ]
      },
      groupId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f250}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 32,
      groupOrder: 0,
      gtmTag: 'bankruptcy-other-resident-date-of-birth'
    },
    'ca3340e4-cf7c-4e22-8098-05aa523a4d1a': {
      questionId: 'ca3340e4-cf7c-4e22-8098-05aa523a4d1a',
      name: 'bankruptcyOtherResidentRelationship',
      dataType: 'string',
      default: false,
      label: 'Bankruptcy resident relationship',
      mappingField: 'BankruptcyRelationship',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Relationship to you' } },
        lookupExpr: '{{commonLookup:relationships}}',
        validation: [{ type: 'required' }]
      },
      groupId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f255}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 32,
      groupOrder: 0,
      gtmTag: 'bankruptcy-other-resident-relationship'
    },
    '74c9b930-4114-11ea-8d4c-ab6d2f0166c9': {
      questionId: '74c9b930-4114-11ea-8d4c-ab6d2f0166c9',
      name: 'bankruptcyReason',
      dataType: 'string',
      label: 'Bankruptcy reason',
      mappingField: 'BankruptcyReason',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'What was the reason?' } },
        lookup: {
          BAN01: { text: 'Bankruptcy' },
          CCJ01: { text: 'County Court Judgment (CCJ)' },
          IVA01: { text: 'Individual Voluntary Arrangement (IVA)' }
        },
        validation: [{ type: 'required' }]
      },
      groupId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f256}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 32,
      groupOrder: 0,
      gtmTag: 'bankruptcy-reason'
    },
    'ae34aae0-4114-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'ae34aae0-4114-11ea-8d4c-ab6d2f0166c9',
      name: 'bankruptcySituation',
      dataType: 'string',
      label: 'Bankruptcy situation',
      mappingField: 'BankruptcySituation',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'What was the situation' } },
        lookup: {
          '7': { text: 'Bankruptcy' },
          '9': { text: 'County Court Judgment (CCJ)' },
          '10': { text: 'Individual Voluntary Arrangement (IVA)' }
        },
        validation: [{ type: 'required' }]
      },
      groupId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f257}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 33,
      groupOrder: 0,
      gtmTag: 'bankruptcy-situation'
    },
    'cf773970-4114-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'cf773970-4114-11ea-8d4c-ab6d2f0166c9',
      name: 'bankruptcyYear',
      dataType: 'number',
      label: 'Bankruptcy year',
      mappingField: 'BankruptcyYearOfIncident',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'In what year did the issue occur?' } },
        validation: [
          { type: 'required' },
          { type: 'integer', minValueExpr: '{{function:f259}}', maxValueExpr: '{{function:f260}}', messages: {} }
        ]
      },
      groupId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f258}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 34,
      groupOrder: 0,
      gtmTag: 'bankruptcy-year'
    },
    'ed766725-9894-456f-9569-ae87774d8ff4': {
      questionId: 'ed766725-9894-456f-9569-ae87774d8ff4',
      name: 'removeBankruptcyButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Remove', buttonStyle: 'danger' } },
        dependentActions: [{ action: 'remove-control-group' }]
      },
      groupId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f261}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 35,
      gtmTag: 'remove-bankruptcy-button'
    },
    'ff84aa90-4113-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'ff84aa90-4113-11ea-8d4c-ab6d2f0166c9',
      name: 'bankruptcyDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Add another', type: 'button' } },
        dependentActions: [{ action: 'add-control-group', props: { groupId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9' } }]
      },
      prerequisites: ['{{function:f262}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 36,
      groupOrder: 0,
      gtmTag: 'bankruptcy-details'
    },
    '2ec85120-4115-11ea-8d4c-ab6d2f0166c9': {
      questionId: '2ec85120-4115-11ea-8d4c-ab6d2f0166c9',
      name: 'liabilityClaim',
      dataType: 'boolean',
      default: false,
      label: 'Liability claim',
      mappingField: 'HasLiabilityClaims',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'Has any policyholder or resident had a liability claim made against them in the last 10 years?'
          }
        },
        dependentActions: [
          {
            action: 'add-control-group',
            condition: '{{function:f263}}',
            props: { groupId: '85b5bc20-4115-11ea-8d4c-ab6d2f0166c9' }
          }
        ],
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      visible: false,
      order: 37,
      groupOrder: 0,
      gtmTag: 'liability-claim'
    },
    '9b69eaf0-4115-11ea-8d4c-ab6d2f0166c9': {
      questionId: '9b69eaf0-4115-11ea-8d4c-ab6d2f0166c9',
      name: 'liabilityClaimResident',
      dataType: 'string',
      label: 'Liability claim resident',
      mappingField: 'LiabilityClaimResident',
      data: {
        textAndStyle: { standard: { controlType: 'DropDownList', questionText: 'Who do you wish to tell us about?' } },
        lookupExpr: '{{function:createResidentsLookupOptions}}',
        validation: [{ type: 'required' }]
      },
      groupId: '85b5bc20-4115-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f264}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 38,
      groupOrder: 0,
      gtmTag: 'liability-claim-resident'
    },
    '6c319863-f325-4923-9aba-801b419d388c': {
      questionId: '6c319863-f325-4923-9aba-801b419d388c',
      name: 'liabilityOtherResidentTitle',
      dataType: 'string',
      label: 'Liability claim resident title',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', layout: 'float', questionText: 'Title' } },
        lookupExpr: '{{commonLookup:titles}}',
        validation: [{ type: 'required' }]
      },
      groupId: '85b5bc20-4115-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f265}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 39,
      groupOrder: 0,
      gtmTag: 'liability-other-resident-title'
    },
    'e18f2e0a-5c9b-4cc7-a2e9-d5137c022336': {
      questionId: 'e18f2e0a-5c9b-4cc7-a2e9-d5137c022336',
      name: 'liabilityOtherResidentFirstName',
      dataType: 'string',
      label: 'Liability claim resident first name',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'First Name(s)' } },
        validation: [{ type: 'required' }]
      },
      groupId: '85b5bc20-4115-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f266}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 39,
      groupOrder: 0,
      gtmTag: 'liability-other-resident-first-name'
    },
    '9dbe38cf-49ac-482b-afff-7c62325e5944': {
      questionId: '9dbe38cf-49ac-482b-afff-7c62325e5944',
      name: 'liabilityOtherResidentSurname',
      dataType: 'string',
      default: false,
      label: 'Liability claim resident surname',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Surname' } },
        validation: [{ type: 'required' }]
      },
      groupId: '85b5bc20-4115-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f267}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 39,
      groupOrder: 0,
      gtmTag: 'liability-other-resident-surname'
    },
    'a6f6430c-dcdc-4932-ac16-54ed83918402': {
      questionId: 'a6f6430c-dcdc-4932-ac16-54ed83918402',
      name: 'liabilityOtherResidentDateOfBirth',
      dataType: 'date',
      label: 'Liability claim resident date of birth',
      data: {
        textAndStyle: { standard: { controlType: 'DateDropDown', questionText: 'Date of birth' } },
        validation: [
          { type: 'custom', validator: '{{function:f269}}', message: '' },
          { type: 'custom', validator: '{{function:f270}}', message: 'Please enter the date of birth.' },
          { type: 'date', minValueExpr: '{{function:f271}}', maxValueExpr: '{{function:f272}}' }
        ]
      },
      groupId: '85b5bc20-4115-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f268}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 39,
      groupOrder: 0,
      gtmTag: 'liability-other-resident-date-of-birth'
    },
    'ff4486c1-44c3-4287-9776-48061379cff5': {
      questionId: 'ff4486c1-44c3-4287-9776-48061379cff5',
      name: 'liabilityOtherResidentRelationship',
      dataType: 'string',
      default: false,
      label: 'Liability claim resident relationship',
      mappingField: 'LiabilityClaimRelationship',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Relationship to you' } },
        lookupExpr: '{{commonLookup:relationships}}',
        validation: [{ type: 'required' }]
      },
      groupId: '85b5bc20-4115-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f273}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 39,
      groupOrder: 0,
      gtmTag: 'liability-other-resident-relationship'
    },
    'b288f460-4115-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'b288f460-4115-11ea-8d4c-ab6d2f0166c9',
      name: 'liabilityClaimYear',
      dataType: 'number',
      label: 'Liability claim year',
      mappingField: 'LiabilityClaimYearOfIncident',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'In what year did this occur?' } },
        validation: [
          { type: 'required' },
          { type: 'integer', minValueExpr: '{{function:f275}}', maxValueExpr: '{{function:f276}}', messages: {} }
        ]
      },
      groupId: '85b5bc20-4115-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f274}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 39,
      groupOrder: 0,
      gtmTag: 'liability-claim-year'
    },
    'fac6b94b-ed45-4bdd-8e24-a0a6f9ba17b4': {
      questionId: 'fac6b94b-ed45-4bdd-8e24-a0a6f9ba17b4',
      name: 'removeLiabilityClaimsButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Remove', buttonStyle: 'danger' } },
        dependentActions: [{ action: 'remove-control-group' }]
      },
      groupId: '85b5bc20-4115-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f277}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 40,
      gtmTag: 'remove-liability-claims-button'
    },
    'c77bf610-4115-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'c77bf610-4115-11ea-8d4c-ab6d2f0166c9',
      name: 'liabilityClaimDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Add another', type: 'button' } },
        dependentActions: [{ action: 'add-control-group', props: { groupId: '85b5bc20-4115-11ea-8d4c-ab6d2f0166c9' } }]
      },
      prerequisites: ['{{function:f278}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 41,
      groupOrder: 0,
      gtmTag: 'liability-claim-details'
    },
    '432e86b0-4116-11ea-8d4c-ab6d2f0166c9': {
      questionId: '432e86b0-4116-11ea-8d4c-ab6d2f0166c9',
      name: 'criminalConviction',
      dataType: 'boolean',
      default: false,
      label: 'Criminal conviction',
      mappingField: 'HasCriminalConvictions',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText:
              'Does any policyholder or resident have any unspent criminal convictions (other than motoring offences)?'
          }
        },
        dependentActions: [
          {
            action: 'add-control-group',
            condition: '{{function:f279}}',
            props: { groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9' }
          }
        ],
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      visible: false,
      order: 42,
      groupOrder: 0,
      gtmTag: 'criminal-conviction'
    },
    '95f9e650-4116-11ea-8d4c-ab6d2f0166c9': {
      questionId: '95f9e650-4116-11ea-8d4c-ab6d2f0166c9',
      name: 'criminalConvictionResident',
      dataType: 'string',
      label: 'Criminal conviction resident',
      mappingField: 'CriminalConvictionResident',
      data: {
        textAndStyle: { standard: { controlType: 'DropDownList', questionText: 'Who do you wish to tell us about?' } },
        lookupExpr: '{{function:createResidentsLookupOptions}}',
        validation: [{ type: 'required' }]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f280}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 43,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-resident'
    },
    'edb9627c-ac08-4366-8e2f-1b0987dc0141': {
      questionId: 'edb9627c-ac08-4366-8e2f-1b0987dc0141',
      name: 'criminalConvictionOtherResidentTitle',
      dataType: 'string',
      label: 'Criminal conviction resident title',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', layout: 'float', questionText: 'Title' } },
        lookupExpr: '{{commonLookup:titles}}',
        validation: [{ type: 'required' }]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f281}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 43,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-other-resident-title'
    },
    '3457f9f9-e02e-4b78-9e50-29687d9d15f7': {
      questionId: '3457f9f9-e02e-4b78-9e50-29687d9d15f7',
      name: 'criminalConvictionOtherResidentFirstName',
      dataType: 'string',
      label: 'Criminal conviction resident first name',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'First Name(s)' } },
        validation: [{ type: 'required' }]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f282}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 43,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-other-resident-first-name'
    },
    '75127e18-ba78-4b45-a2d2-64537de6d2c8': {
      questionId: '75127e18-ba78-4b45-a2d2-64537de6d2c8',
      name: 'criminalConvictionOtherResidentSurname',
      dataType: 'string',
      default: false,
      label: 'Criminal conviction resident surname',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Surname' } },
        validation: [{ type: 'required' }]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f283}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 43,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-other-resident-surname'
    },
    'fcae55a2-cd2a-4cd2-bc8a-df29e7dd26bd': {
      questionId: 'fcae55a2-cd2a-4cd2-bc8a-df29e7dd26bd',
      name: 'criminalConvictionOtherResidentDateOfBirth',
      dataType: 'date',
      label: 'Criminal conviction resident date of birth',
      data: {
        textAndStyle: { standard: { controlType: 'DateDropDown', questionText: 'Date of birth' } },
        validation: [
          { type: 'custom', validator: '{{function:f285}}', message: '' },
          { type: 'custom', validator: '{{function:f286}}', message: 'Please enter the date of birth.' },
          { type: 'date', minValueExpr: '{{function:f287}}', maxValueExpr: '{{function:f288}}' }
        ]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f284}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 43,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-other-resident-date-of-birth'
    },
    'c730fdb9-a3de-4d53-b671-112c396e357a': {
      questionId: 'c730fdb9-a3de-4d53-b671-112c396e357a',
      name: 'criminalConvictionOtherResidentRelationship',
      dataType: 'string',
      default: false,
      label: 'Criminal conviction resident relationship',
      mappingField: 'CriminalConvictionRelationship',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Relationship to you' } },
        lookupExpr: '{{commonLookup:relationships}}',
        validation: [{ type: 'required' }]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f289}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 43,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-other-resident-relationship'
    },
    'd28b4550-4116-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'd28b4550-4116-11ea-8d4c-ab6d2f0166c9',
      name: 'criminalConvictionType',
      dataType: 'string',
      label: 'Criminal conviction type',
      mappingField: 'CriminalConvictionTypeOfConviction',
      data: {
        textAndStyle: { standard: { controlType: 'AutoCompleteList', questionText: 'Convicted of' } },
        lookup: {
          'ABH, Offences Against the Person Act 1861, s.47': null,
          'Abstract/use without authority electricity, Theft Act 1968, s.13': null,
          'Abuse of position of trust with minor': null,
          'Actual bodily harm': null,
          Affray: null,
          'Affray, Public Order Act 1986, s.3': null,
          'Aggravated vehicle-taking (damage caused to property other than the vehicle in accident or damage caused to vehicle), Theft Act 1968, ss.12A(2)(c) and 12A(2)(d)': null,
          'Aggravated vehicle-taking (dangerous driving or accident causing injury), Theft Act 1968, ss.12A(2)(a) and 12A(2)(b)': null,
          'Alcohol sale offences, Licensing Act 2003, ss.141, 146 and 147': null,
          'Alcohol/tobacco, fraudulently evade duty, Customs and Excise Management Act 1979, s.170': null,
          'Animal cruelty, Animal Welfare Act 2006, ss.4, 8 and 9': null,
          'Anti-social behaviour order, breach of, Crime and Disorder Act 1988, s.1 (10)': null,
          'Armed robbery': null,
          Arson: null,
          'Arson (criminal damage by fire), Criminal Damage Act 1971, s.1': null,
          Assault: null,
          'Assault occasioning actual bodily harm, Offences Against the Person Act 1861, s.47': null,
          'Assault on a police constable, Police Act 1996, s.89(1)': null,
          'Assault with intent to resist arrest, Offences Against the Person Act 1861, s.38': null,
          'Attempted buggery': null,
          'Attempted rape': null,
          'Bail, failure to surrender, Bail Act 1976, ss.6(1) and 6(2)': null,
          Bestiality: null,
          Blackmail: null,
          'Bladed article, possession of, Criminal Justice Act 1988, s.139': null,
          'Breach of anti-social behaviour order, Crime and Disorder Act 1988, s.1': null,
          'Breach of community order, Criminal Justice Act 2003, sch.8': null,
          'Breach of non-molestation order, Family Law Act 1996, s.42A': null,
          'Breach of protective order, Protection from Harassment Act 1997, s.5(5) and Family Law Act 1996, s.42A': null,
          'Breach of restraining order, Protection from Harassment Act 1997, s.5(5)': null,
          'Breaking & entering': null,
          'Broken court order': null,
          'Brothel keeping, Sexual Offences Act 2003, s.55': null,
          Buggery: null,
          Burglary: null,
          'Burglary in a building other than a dwelling, Theft Act 1968, s.9': null,
          'Burglary in a dwelling, Theft Act 1968, s.9': null,
          'Child prostitution and pornography, Sexual Offences Act 2003, ss.48, 49 and 50': null,
          'Child sex abuse': null,
          'Common assault, Criminal Justice Act 1988, s.39': null,
          'Communication network offences, Communications Act 2003, ss.127(1) and 127(2)': null,
          'Community order, breach of, Criminal Justice Act 2003, sch.8': null,
          'Criminal damage': null,
          'Criminal damage (other than by fire), Criminal Damage Act 1971, s.1(1)': null,
          'Criminal damage by fire (arson), Criminal Damage Act 1971, s.1': null,
          'Cruelty to a child, Children and Young Persons Act 1933, s.1(1)': null,
          'Cultivation of cannabis, Misuse of Drugs Act 1971, s.6(2)': null,
          Deception: null,
          'Disorderly behaviour (harassment, alarm or distress), Public Order Act 1986, s.5': null,
          'Disorderly behaviour with intent to cause harassment, alarm or distress, Public Order Act 1986, s.4A': null,
          'Drugs intent to supply': null,
          'Drugs possession': null,
          'Drugs – class A – fail to attend/remain for initial assessment, Drugs Act 2005, s.12': null,
          'Drugs – class A – fail/refuse to provide a sample, Police and Criminal Evidence Act 1984, s.63B': null,
          'Drugs – class A – failure to attend/remain for initial assessment, Drugs Act 2005, s.12': null,
          'Drugs – class A – failure/refuse to provide a sample, Police and Criminal Evidence Act 1984, s.63B': null,
          'Drugs – class A – possession, Misuse of Drugs Act 1971, s.5(2)': null,
          'Drugs – class A – produce, supply, possess with intent to supply, Misuse of Drugs Act 1971, ss.4(2),4(3) and 5(3)': null,
          'Drugs – class B and C – possession, Misuse of Drugs Act 1971, s.5(2)': null,
          'Drugs – class B and C – supply, possess with intent to supply, Misuse of Drugs Act 1971, ss.4(3) and 5(3)': null,
          'Drugs – cultivation of cannabis, Misuse of Drugs Act 1971, s.6(2)': null,
          'Drunk & disorderly': null,
          'Drunk and disorderly in a public place, Criminal Justice Act 1967, s.91': null,
          'Electricity, abstract/use without authority, Theft Act 1968, s.13': null,
          Embezzlement: null,
          'Evade TV licence payment, Communications Act 2003, s.363': null,
          'Evade duty – alcohol/tobacco, Customs and Excise Management Act 1979, s.170': null,
          'Exploitation of prostitution, Sexual Offences Act 2003, ss.52 and 53': null,
          'Exposure, Sexual Offences Act 2003, s.66': null,
          'Fail to comply with notification requirements, sex offenders register, Sexual Offences Act 2003, ss.91(1)(a) and 91(1)(b)': null,
          'Fail to comply with police constable directing traffic': null,
          'Failure to comply with notification requirements, sex offenders register, Sexual Offences Act 2003, ss.91(1)(a) and 91(1)(b)': null,
          'Failure to comply with police constable directing traffic': null,
          'Falsify or alter records with intent to deceive': null,
          'Finance offences': null,
          'Firearm, carrying in public place, Firearms Act 1968, s.19': null,
          'Football Offences Act 1991, ss.2, 3 and 4, and Criminal Justice and Public Order Act 1994, s.166': null,
          'Football related offences, Sporting Events (Control of Alcohol etc.) Act 1985, ss.2(1) and 2(2)': null,
          Forgery: null,
          Fraud: null,
          'GBH, Offences Against the Person Act 1861, s.20': null,
          'Going equipped, for theft, Theft Act 1968, s.25': null,
          'Grievous bodily harm': null,
          'Grievous bodily harm/unlawful wounding, Offences Against the Person Act 1861, s.20': null,
          'Gross indecency with minor': null,
          'Handling stolen goods': null,
          'Handling stolen goods, Theft Act 1968, s.22': null,
          'Harassment (without violence), Protection from Harassment Act 1997, s.2': null,
          'Harassment – putting people in fear of violence, Protection from Harassment Act 1997, s.4': null,
          "Identity documents – possess false/another's/improperly obtained, Identity Cards Act 2006, s.25(5)": null,
          'Incest with a minor': null,
          'Incest with an adult': null,
          'Incitement to distribute indecent images': null,
          'Income tax evasion, Finance Act 2000, s.144': null,
          'Indecent assault': null,
          'Indecent assault on a minor': null,
          'Indecent exposure': null,
          'Indecent photographs of children, Protection of Children Act 1978, s.1 and Criminal Justice Act 1988, s.160': null,
          'Lewd & libidinous behaviour': null,
          'Making off without payment, Theft Act 1978, s.3': null,
          'Malicious damage': null,
          Manslaughter: null,
          Murder: null,
          'Non-molestation order, breach of, Family Law Act 1996, s.42A': null,
          'Obstruct/resist a police constable in execution of duty, Police Act 1996, s.89(2)': null,
          'Obtaining services dishonestly, Fraud Act 2006, s.11': null,
          'Offensive weapon, possession of, Prevention of Crime Act 1953, s.1': null,
          'Other internet offence': null,
          'Other sex offence on adult': null,
          'Other sex offence on minor': null,
          'Other violent offences': null,
          'Possession of indecent images from internet': null,
          'Possession/use of imitation weapons': null,
          'Prostitution, exploitation of, Sexual Offences Act 2003, ss.52 and 53': null,
          'Prostitution, keeping a brothel used for, Sexual Offences Act 2003, s.55': null,
          'Protective order, breach of, Protection from Harassment Act 1997, s.5(5) and Family Law Act 1996, s.42A': null,
          'Public Order Act 1986, s.2 (violent disorder)': null,
          'Public Order Act 1986, s.4 (threatening behaviour – fear or provocation of violence)': null,
          'Public Order Act 1986, s.4A (disorderly behaviour with intent to cause harassment, alarm or distress)': null,
          'Public Order Act 1986, s.5 (disorderly behaviour (harassment, alarm or distress))': null,
          'Public Order Act, s.3 (affray)': null,
          'Public indecency': null,
          'Racially or religiously aggravated assault occasioning actual bodily harm, Crime and Disorder Act 1998, s.29': null,
          'Racially or religiously aggravated common assault, Crime and Disorder Act 1998, s.29': null,
          'Racially or religiously aggravated criminal damage, Crime and Disorder Act 1998, s.30': null,
          'Racially or religiously aggravated disorderly behaviour with intent to cause harassment, alarm or distress, Crime and Disorder Act 1998, s.31': null,
          'Racially or religiously aggravated disorderly behaviour, Crime and Disorder Act 1998, s.31': null,
          'Racially or religiously aggravated grievous bodily harm/unlawful wounding, Crime and Disorder Act 1998, s.29': null,
          'Racially or religiously aggravated harassment (non violent), Crime and Disorder Act 1998, s.32': null,
          'Racially or religiously aggravated harassment – putting people in fear of violence, Crime and Disorder Act 1998, s.32': null,
          'Racially or religiously aggravated threatening behaviour, Crime and Disorder Act 1998, s.31': null,
          'Railway fare evasion, Regulation of Railways Act 1889, ss.5(1) and (3)': null,
          Rape: null,
          'Records, falsify/alter with intent to deceive': null,
          'Restraining order, breach of, Protection from Harassment Act 1997, s.5(5)': null,
          Robbery: null,
          'School non-attendance, Education Act 1996, ss.444(1) and 444(1A)': null,
          'Sex offenders register – fail to comply with notification requirements, Sexual Offences Act 2003, ss.91(1)(a) and 91(1)(b)': null,
          'Sex offenders register – failure to comply with notification requirements, Sexual Offences Act 2003, ss.91(1)(a) and 91(1)(b)': null,
          'Sexual activity in a public lavatory, Sexual Offences Act 2003, s.71': null,
          'Sexual assault, Sexual Offences Act 2003, ss.3 and 7': null,
          'Sexual harassment': null,
          'Social Security fraud': null,
          'Social security benefit, false statement/representation to obtain, Social Security Administration Act 1992, ss.111A and 112': null,
          'TDA (vehicle taking without consent), Theft Act 1968, s.12': null,
          'TV licence payment evasion, Communications Act 2003, s.363': null,
          'TWOC (vehicle taking without consent), Theft Act 1968, s.12': null,
          'Taking & driving away': null,
          'Tax credit fraud, Tax Credits Act 2002, s.35': null,
          'Taxi touting/soliciting for hire, Criminal Justice and Public Order Act 1994, s.167': null,
          Theft: null,
          'Theft, breach of trust, Theft Act 1968, s.1 100a': null,
          'Theft, dwelling, Theft Act 1968, s.1 101a': null,
          'Theft, general principles, Theft Act 1968, s.1': null,
          'Theft, person, Theft Act 1968, s.1 102a': null,
          'Theft, shop, Theft Act 1968, s.1 103a': null,
          'Threatening behaviour – fear or provocation of violence, Public Order Act 1986, s.4': null,
          'Threats to kill, Offences Against the Person Act 1861, s.16': null,
          'Trade mark, unauthorised use of etc., Trade Marks Act 1994, s.92': null,
          'Unauthorised use of trade mark, Trade Marks Act 1994, s.92': null,
          'Unknown - Aggregator': null,
          'Unlawful sexual intercourse with a minor': null,
          'VAT evasion, Value Added Tax Act 1994, s.72': null,
          'Vehicle interference, Criminal Attempts Act 1981, s.9': null,
          'Vehicle licence/registration fraud, Vehicle Excise and Registration Act 1994, s.44': null,
          'Vehicle taking without consent, Theft Act 1968, s.12': null,
          'Vehicle taking, aggravated (damage caused to property other than the vehicle in accident or damage caused to vehicle), Theft Act 1968, ss.12A(2)(c) and 12A(2)(d)': null,
          'Vehicle taking, aggravated (dangerous driving or accident causing injury), Theft Act 1968, ss.12A(2)(a) and 12A(2)(b)': null,
          'Violent disorder, Public Order Act 1986, s.2': null,
          Voyeurism: null,
          'Voyeurism, Sexual Offences Act 2003, s.67': null,
          'Witness intimidation, Criminal Justice and Public Order Act 1994, s.51': null,
          Other: null
        },
        validation: [{ type: 'required' }]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f290}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 44,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-type'
    },
    'eba44a00-4116-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'eba44a00-4116-11ea-8d4c-ab6d2f0166c9',
      name: 'criminalConvictionYear',
      dataType: 'number',
      label: 'Criminal conviction year',
      mappingField: 'CriminalConvictionYearOfConviction',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Year of conviction' } },
        validation: [
          { type: 'required' },
          { type: 'integer', minValueExpr: '{{function:f292}}', maxValueExpr: '{{function:f293}}', messages: {} }
        ]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f291}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 45,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-year'
    },
    '015851c0-4117-11ea-8d4c-ab6d2f0166c9': {
      questionId: '015851c0-4117-11ea-8d4c-ab6d2f0166c9',
      name: 'criminalConvictionOffenceYear',
      dataType: 'number',
      label: 'Criminal conviction offence year',
      mappingField: 'CriminalConvictionYearOfOffence',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Year of offence' } },
        validation: [
          { type: 'required' },
          { type: 'integer', minValueExpr: '{{function:f295}}', maxValueExpr: '{{function:f296}}', messages: {} }
        ]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f294}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 46,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-offence-year'
    },
    '2059f100-4117-11ea-8d4c-ab6d2f0166c9': {
      questionId: '2059f100-4117-11ea-8d4c-ab6d2f0166c9',
      name: 'criminalConvictionPrison',
      dataType: 'boolean',
      label: 'Criminal conviction prison',
      mappingField: 'CriminalConvictionHasPrisonSentence',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Prison sentence' } },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required' }]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f297}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 47,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-prison'
    },
    '5fb4a930-4117-11ea-8d4c-ab6d2f0166c9': {
      questionId: '5fb4a930-4117-11ea-8d4c-ab6d2f0166c9',
      name: 'criminalConvictionPrisonMonths',
      dataType: 'number',
      default: false,
      label: 'Criminal conviction prison months',
      mappingField: 'CriminalConvictionPrisonSentenceInMonths',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Sentence in Months' } },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'integer', minValue: 0, maxValue: 1200, messages: {} }]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f298}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 48,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-prison-months'
    },
    '8ac6d080-4117-11ea-8d4c-ab6d2f0166c9': {
      questionId: '8ac6d080-4117-11ea-8d4c-ab6d2f0166c9',
      name: 'criminalConvictionPrisonServed',
      dataType: 'boolean',
      label: 'Criminal conviction prison served',
      mappingField: 'CriminalConvictionIsPrisonSentenceServed',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Served / Paid?' } },
        lookupExpr: '{{commonLookup:yesNo}}'
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f299}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 49,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-prison-served'
    },
    'a0d07250-4117-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'a0d07250-4117-11ea-8d4c-ab6d2f0166c9',
      name: 'criminalConvictionSuspendedPrison',
      dataType: 'boolean',
      label: 'Criminal conviction prison suspended',
      mappingField: 'CriminalConvictionHasSuspendedSentence',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Suspended prison sentence' } },
        lookupExpr: '{{commonLookup:yesNo}}'
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f300}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 50,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-suspended-prison'
    },
    'b0edf720-4117-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'b0edf720-4117-11ea-8d4c-ab6d2f0166c9',
      name: 'criminalConvictionSuspendedPrisonMonths',
      dataType: 'number',
      default: false,
      label: 'Criminal conviction prison suspended months',
      mappingField: 'CriminalConvictionSuspendedSentenceInMonths',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Sentence in Months' } },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'integer', minValue: 0, maxValue: 1200, messages: {} }]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f301}}', '{{function:f302}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 51,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-suspended-prison-months'
    },
    'b1de71a0-4117-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'b1de71a0-4117-11ea-8d4c-ab6d2f0166c9',
      name: 'criminalConvictionSuspendedPrisonServed',
      dataType: 'boolean',
      label: 'Criminal conviction prison suspended served',
      mappingField: 'CriminalConvictionIsSuspendedSentenceServed',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Served / Paid?' } },
        lookupExpr: '{{commonLookup:yesNo}}'
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f303}}', '{{function:f304}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 52,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-suspended-prison-served'
    },
    'c30c3d6e-994b-45f4-93c9-004fd8fa406b': {
      questionId: 'c30c3d6e-994b-45f4-93c9-004fd8fa406b',
      name: 'criminalConvictionFine',
      dataType: 'boolean',
      label: 'Criminal conviction fine',
      mappingField: 'CriminalConvictionHasFine',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Fine' } },
        lookupExpr: '{{commonLookup:yesNo}}'
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f305}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 52,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-fine'
    },
    'a3181de3-6008-4ce2-8cd5-3615336e6007': {
      questionId: 'a3181de3-6008-4ce2-8cd5-3615336e6007',
      name: 'criminalConvictionFineAmount',
      dataType: 'number',
      default: false,
      label: 'Criminal conviction fine amount',
      mappingField: 'CriminalConvictionFineAmount',
      data: {
        textAndStyle: { standard: { controlType: 'CurrencyInput', questionText: 'Fine amount' } },
        validation: [{ type: 'integer', minValue: 0, maxValue: 9999999 }]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f306}}', '{{function:f307}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 52,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-fine-amount'
    },
    '5fbf06d2-b8e0-48ea-b0ca-2d6beedf03b2': {
      questionId: '5fbf06d2-b8e0-48ea-b0ca-2d6beedf03b2',
      name: 'criminalConvictionFinePaid',
      dataType: 'boolean',
      label: 'Criminal conviction fine paid',
      mappingField: 'CriminalConvictionIsFinePaid',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Served / Paid?' } },
        lookupExpr: '{{commonLookup:yesNo}}'
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f308}}', '{{function:f309}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 52,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-fine-paid'
    },
    'd03d1a20-4117-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'd03d1a20-4117-11ea-8d4c-ab6d2f0166c9',
      name: 'communityService',
      dataType: 'boolean',
      label: 'Community service',
      mappingField: 'CriminalConvictionHasCommunityService',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Community service' } },
        lookupExpr: '{{commonLookup:yesNo}}'
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f310}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 53,
      groupOrder: 0,
      gtmTag: 'community-service'
    },
    'e69e9ff0-4117-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'e69e9ff0-4117-11ea-8d4c-ab6d2f0166c9',
      name: 'communityServiceHours',
      dataType: 'number',
      label: 'Community service hours',
      mappingField: 'CriminalConvictionCommunityServiceInHours',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Service in hours' } },
        validation: [
          {
            type: 'integer',
            minValue: 0,
            maxValue: 1200,
            messages: { notBetween: 'The entered value must be between 0 and 1200.' }
          }
        ]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f311}}', '{{function:f312}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 54,
      groupOrder: 0,
      gtmTag: 'community-service-hours'
    },
    'e7bc44f0-4117-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'e7bc44f0-4117-11ea-8d4c-ab6d2f0166c9',
      name: 'communityServiceServed',
      dataType: 'boolean',
      label: 'Community service served',
      mappingField: 'CriminalConvictionIsCommunityServiceServed',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Served / Paid?' } },
        lookupExpr: '{{commonLookup:yesNo}}'
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f313}}', '{{function:f314}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 55,
      groupOrder: 0,
      gtmTag: 'community-service-served'
    },
    '12a93100-4118-11ea-8d4c-ab6d2f0166c9': {
      questionId: '12a93100-4118-11ea-8d4c-ab6d2f0166c9',
      name: 'conditionalCharge',
      dataType: 'boolean',
      mappingField: 'CriminalConvictionHasDischarge',
      data: {
        textAndStyle: {
          standard: { controlType: 'ButtonList', questionText: 'Conditional / unconditional discharge' }
        },
        lookupExpr: '{{commonLookup:yesNo}}'
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f315}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 56,
      groupOrder: 0,
      gtmTag: 'conditional-charge'
    },
    '145114a0-4118-11ea-8d4c-ab6d2f0166c9': {
      questionId: '145114a0-4118-11ea-8d4c-ab6d2f0166c9',
      name: 'conditionalChargeMonths',
      dataType: 'number',
      default: false,
      label: 'Conditional discharge in months',
      mappingField: 'CriminalConvictionDischargeInMonths',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Discharge in months' } },
        validation: [
          {
            type: 'integer',
            minValue: 0,
            maxValue: 1200,
            messages: { notBetween: 'The entered value must be between 0 and 1200.' }
          }
        ]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f316}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 57,
      groupOrder: 0,
      gtmTag: 'conditional-charge-months'
    },
    '1562abb0-4118-11ea-8d4c-ab6d2f0166c9': {
      questionId: '1562abb0-4118-11ea-8d4c-ab6d2f0166c9',
      name: 'conditionalChargeServed',
      dataType: 'boolean',
      mappingField: 'CriminalConvictionIsDischargeServed',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Served / Paid?' } },
        lookupExpr: '{{commonLookup:yesNo}}'
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f317}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 58,
      groupOrder: 0,
      gtmTag: 'conditional-charge-served'
    },
    'f06975e7-6270-4418-8a8a-5a034eb8b3c8': {
      questionId: 'f06975e7-6270-4418-8a8a-5a034eb8b3c8',
      name: 'removeCriminalConvictionButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Remove', buttonStyle: 'danger' } },
        dependentActions: [{ action: 'remove-control-group' }]
      },
      groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      prerequisites: ['{{function:f318}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 60,
      gtmTag: 'remove-criminal-conviction-button'
    },
    '71c5dd20-4116-11ea-8d4c-ab6d2f0166c9': {
      questionId: '71c5dd20-4116-11ea-8d4c-ab6d2f0166c9',
      name: 'criminalConvictionDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Add another', type: 'button' } },
        dependentActions: [{ action: 'add-control-group', props: { groupId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9' } }]
      },
      prerequisites: ['{{function:f319}}'],
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 61,
      groupOrder: 0,
      gtmTag: 'criminal-conviction-details'
    },
    '91143eef-9e96-4bba-899f-8231529e3329': {
      questionId: '91143eef-9e96-4bba-899f-8231529e3329',
      name: 'toResidentDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Back', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'previous-section' }]
      },
      groupId: 'button-grouping',
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 67,
      groupOrder: 0,
      gtmTag: 'to-household-details'
    },
    '9d4ae1e0-41c3-11ea-891e-c99fdec013eb': {
      questionId: '9d4ae1e0-41c3-11ea-891e-c99fdec013eb',
      name: 'toContactDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Continue', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'next-section' }]
      },
      groupId: 'button-grouping',
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      order: 68,
      groupOrder: 0,
      gtmTag: 'to-contact-details'
    },
    'cdf70ba0-4120-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'cdf70ba0-4120-11ea-8d4c-ab6d2f0166c9',
      name: 'title',
      dataType: 'string',
      label: 'Title',
      mappingField: 'Title',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', layout: 'float', questionText: 'Title' } },
        lookupExpr: '{{commonLookup:titles}}',
        validation: [{ type: 'required', message: 'Please enter your title.' }]
      },
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      visible: false,
      order: 1,
      groupOrder: 0,
      gtmTag: 'title'
    },
    '08481790-4121-11ea-8d4c-ab6d2f0166c9': {
      questionId: '08481790-4121-11ea-8d4c-ab6d2f0166c9',
      name: 'name',
      dataType: 'string',
      label: 'First name',
      mappingField: 'Forename',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'First Name(s)' } },
        validation: [{ type: 'required', message: "Please enter the policy holder's forename." }]
      },
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      visible: false,
      order: 2,
      groupOrder: 0,
      gtmTag: 'name'
    },
    'b83a2e6b-b058-462c-ab8e-af4e062ac420': {
      questionId: 'b83a2e6b-b058-462c-ab8e-af4e062ac420',
      name: 'surname',
      dataType: 'string',
      label: 'Surname',
      mappingField: 'Surname',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Surname' } },
        validation: [{ type: 'required', message: "Please enter the policy holder's surname." }]
      },
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      visible: false,
      order: 3,
      groupOrder: 0,
      gtmTag: 'surname'
    },
    '32ab1320-4121-11ea-8d4c-ab6d2f0166c9': {
      questionId: '32ab1320-4121-11ea-8d4c-ab6d2f0166c9',
      name: 'maritalStatus',
      dataType: 'string',
      default: false,
      label: 'Marital status',
      mappingField: 'MaritalStatus',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', layout: 'float', questionText: 'Marital status' } },
        lookup: {
          '1': { text: 'Single' },
          '2': { text: 'Married' },
          '3': { text: 'Living Together' },
          '4': { text: 'Widowed' },
          '5': { text: 'Divorced' },
          '6': { text: 'Civil Partnership' }
        },
        validation: [{ type: 'required', message: 'Please select an option.' }]
      },
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      visible: false,
      order: 4,
      groupOrder: 0,
      gtmTag: 'marital-status'
    },
    'e46a1da0-4120-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'e46a1da0-4120-11ea-8d4c-ab6d2f0166c9',
      name: 'phoneNumber',
      dataType: 'string',
      label: 'Daytime telephone number',
      mappingField: 'DayTimePhoneNumber',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Daytime telephone number' } },
        validation: [
          { type: 'required', message: 'Please enter your daytime phone number' },
          { type: 'pattern', pattern: '^[0-9 ]{10,}', exact: true, message: 'Entered phone format is not valid.' }
        ]
      },
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      visible: false,
      order: 5,
      groupOrder: 0,
      gtmTag: 'phone-number'
    },
    '6e1caa40-4121-11ea-8d4c-ab6d2f0166c9': {
      questionId: '6e1caa40-4121-11ea-8d4c-ab6d2f0166c9',
      name: 'mobilePhoneNumber',
      dataType: 'string',
      mappingField: 'MobilePhoneNumber',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Mobile number' } },
        validation: [
          { type: 'pattern', pattern: '^[0-9 ]{10,}', exact: true, message: 'Entered phone format is not valid.' }
        ]
      },
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      visible: false,
      order: 6,
      groupOrder: 0,
      gtmTag: 'mobile-phone-number'
    },
    '5fa0ed22-390a-4e18-b74c-83052701fff2': {
      questionId: '5fa0ed22-390a-4e18-b74c-83052701fff2',
      name: 'insuranceAddressView',
      dataType: 'array',
      calculatedAnswer: '{{function:getAddressDetail}}',
      data: {
        textAndStyle: { standard: { controlType: 'AddressView', questionText: 'The address to be insured is' } },
        lookup: { addressControlPrefix: { text: '' } }
      },
      isMultiSelect: true,
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 6
    },
    '93622370-4121-11ea-8d4c-ab6d2f0166c9': {
      questionId: '93622370-4121-11ea-8d4c-ab6d2f0166c9',
      name: 'insuredAddressIsCorrespondence',
      dataType: 'boolean',
      default: true,
      mappingField: 'IsInsuredAddressSameForPostalAddress',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'ButtonList',
            questionText: 'Would you like the insured address as your correspondence address?'
          }
        },
        lookupExpr: '{{commonLookup:yesNo}}',
        validation: [{ type: 'required', message: 'Please select yes or no.' }]
      },
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      visible: false,
      order: 7,
      groupOrder: 0,
      gtmTag: 'insured-address-is-correspondence'
    },
    '8b1a4709-249b-4e77-89ce-0d6e188d2962': {
      questionId: '8b1a4709-249b-4e77-89ce-0d6e188d2962',
      name: 'contactPropertyNameNumberSearchTerm',
      dataType: 'string',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'House number or name' } },
        dependentAnswers: { '436727b4-979c-4fa4-b1f9-70df0c1cadf8': [{ answer: '' }] }
      },
      groupId: 'contactAddress',
      prerequisites: ['{{function:f320}}'],
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 8,
      gtmTag: 'contact-property-name-number-search-term'
    },
    '4cf86a9e-7a02-42f1-9bb6-1693de17b87f': {
      questionId: '4cf86a9e-7a02-42f1-9bb6-1693de17b87f',
      name: 'contactPostcodeSearchTerm',
      dataType: 'string',
      data: {
        textAndStyle: { standard: { controlType: 'PostCodeInput', questionText: 'Postcode' } },
        dependentAnswers: { '436727b4-979c-4fa4-b1f9-70df0c1cadf8': [{ answer: '' }] },
        validation: [{ type: 'required', message: 'Please enter the postcode.' }]
      },
      groupId: 'contactAddress',
      prerequisites: ['{{function:f321}}'],
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 9,
      gtmTag: 'contact-postcode-search-term'
    },
    'c8d9bae0-4121-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'c8d9bae0-4121-11ea-8d4c-ab6d2f0166c9',
      name: 'email',
      dataType: 'string',
      label: 'Email',
      mappingField: 'EmailAddress',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Email' } },
        validation: [{ type: 'required', message: 'Please enter your email' }]
      },
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      visible: false,
      order: 9,
      groupOrder: 0,
      gtmTag: 'email'
    },
    'df5160c0-4121-11ea-8d4c-ab6d2f0166c9': {
      questionId: 'df5160c0-4121-11ea-8d4c-ab6d2f0166c9',
      name: 'contactPreferences',
      dataType: 'array',
      mappingField: 'GdprConsent',
      data: {
        textAndStyle: { standard: { controlType: 'ButtonList', questionText: 'Let us keep you up to date' } },
        lookup: {
          CanEmail: { text: 'Email' },
          CanSMS: { text: 'SMS' },
          CanPost: { text: 'Post' },
          CanTelephone: { text: 'Telephone' }
        }
      },
      isMultiSelect: true,
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      visible: false,
      order: 9,
      groupOrder: 0,
      gtmTag: 'contact-preferences'
    },
    'f49700dd-a4f3-45ed-8516-8a8817433d20': {
      questionId: 'f49700dd-a4f3-45ed-8516-8a8817433d20',
      name: 'contactAddressLookupButton',
      dataType: 'button',
      data: {
        textAndStyle: { standard: { controlType: 'Button', buttonText: 'Lookup' } },
        dependentActions: [
          {
            action: 'validate-fields',
            props: {
              fieldsToValidate: ['8b1a4709-249b-4e77-89ce-0d6e188d2962', '4cf86a9e-7a02-42f1-9bb6-1693de17b87f']
            }
          },
          {
            action: 'address-lookup',
            props: {
              searchFields: ['8b1a4709-249b-4e77-89ce-0d6e188d2962', '4cf86a9e-7a02-42f1-9bb6-1693de17b87f'],
              lookupResultsId: 'fba02e81-a0e6-452a-be67-059352e0f5a5',
              lookupButtonId: 'f49700dd-a4f3-45ed-8516-8a8817433d20',
              noResultsFoundMessage:
                'No addresses match the values you entered. Try something less specific or enter the address manually.',
              errorLoadingAddressesMessage:
                "We're having problems loading the addresses. Please try again or enter your address manually."
            }
          }
        ],
        validation: [
          {
            type: 'custom',
            validator: '{{function:f323}}',
            message:
              'Please start typing an address or postcode in the search field and select a result or manually enter an address.'
          }
        ]
      },
      groupId: 'contactAddress',
      prerequisites: ['{{function:f322}}'],
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 10,
      gtmTag: 'contact-address-lookup-button'
    },
    'e10f06bc-367e-45ec-b5e5-7f3592c21fdb': {
      questionId: 'e10f06bc-367e-45ec-b5e5-7f3592c21fdb',
      name: 'contactAddressEnterManuallyButton',
      dataType: 'boolean',
      default: false,
      data: {
        textAndStyle: { standard: { controlType: 'Switch', questionText: '' } },
        lookup: { false: { text: 'Use address lookup' }, true: { text: 'Enter manually' } }
      },
      groupId: 'contactAddress',
      prerequisites: ['{{function:f324}}'],
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 11,
      gtmTag: 'contact-address-enter-manually-button'
    },
    'fba02e81-a0e6-452a-be67-059352e0f5a5': {
      questionId: 'fba02e81-a0e6-452a-be67-059352e0f5a5',
      name: 'contactAddressLookupResults',
      dataType: 'string',
      data: {
        textAndStyle: {
          standard: {
            controlType: 'DropDownList',
            placeholder: 'Select an address',
            questionText: '',
            sortItemsBy: 'numberPrefixedStringSorter'
          }
        },
        dependentActions: [
          {
            action: 'address-select',
            props: {
              lookupResultsId: 'fba02e81-a0e6-452a-be67-059352e0f5a5',
              lookupButtonId: 'f49700dd-a4f3-45ed-8516-8a8817433d20',
              searchFields: ['8b1a4709-249b-4e77-89ce-0d6e188d2962', '4cf86a9e-7a02-42f1-9bb6-1693de17b87f'],
              errorLoadingAddressMessage:
                "We're having problems loading the address you selected. Please try again or enter your address manually."
            }
          }
        ],
        dependentAnswers: {
          '47a53004-a5ee-496d-b01e-448017e5445d': [{ condition: '{{function:f326}}', answerExpr: '{{function:f327}}' }],
          '1a7f393d-5fc7-4c06-a37d-479e02c7b051': [{ condition: '{{function:f328}}', answerExpr: '{{function:f329}}' }],
          'ec1211db-19d5-4a46-9019-ac5ca18578b3': [{ condition: '{{function:f330}}', answerExpr: '{{function:f331}}' }],
          'a845ddf7-d4ba-4cee-b03a-67a3212c9b08': [{ condition: '{{function:f332}}', answerExpr: '{{function:f333}}' }],
          '7b2a69dc-47bf-4772-82f7-cb1c1431944a': [{ condition: '{{function:f334}}', answerExpr: '{{function:f335}}' }],
          '05bc6b17-ca8e-446f-a20b-050fa72be9fc': [{ condition: '{{function:f336}}', answerExpr: '{{function:f337}}' }],
          '436727b4-979c-4fa4-b1f9-70df0c1cadf8': [{ condition: '{{function:f338}}', answerExpr: '{{function:f339}}' }],
          '8b7bd543-0855-4873-a3ad-cb32739480c0': [{ condition: '{{function:f340}}', answerExpr: '{{function:f341}}' }]
        },
        validation: [{ type: 'required', condition: '{{function:f342}}', message: 'You need to select an address' }]
      },
      groupId: 'contactAddress',
      prerequisites: ['{{function:f325}}'],
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 11,
      gtmTag: 'contact-address-lookup-results'
    },
    '47a53004-a5ee-496d-b01e-448017e5445d': {
      questionId: '47a53004-a5ee-496d-b01e-448017e5445d',
      name: 'contactPropertyNameNumber',
      dataType: 'string',
      mappingField: 'CorrespondencePropertyNameNumber',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'House number or name' } },
        dependentAnswers: { '436727b4-979c-4fa4-b1f9-70df0c1cadf8': [{ answer: '' }] },
        validation: [{ type: 'required', message: 'Please enter the property name or number.' }]
      },
      groupId: 'contactAddress',
      prerequisites: ['{{function:f343}}'],
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 12,
      gtmTag: 'contact-property-name-number'
    },
    '05bc6b17-ca8e-446f-a20b-050fa72be9fc': {
      questionId: '05bc6b17-ca8e-446f-a20b-050fa72be9fc',
      name: 'contactPostcode',
      dataType: 'string',
      mappingField: 'CorrespondencePostCode',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Postcode' } },
        dependentAnswers: { '86676452-9631-4ca5-a93d-e0217990a253': [{ condition: '{{function:f345}}', answer: '' }] },
        validation: [{ type: 'required', message: 'Please enter the postcode.' }]
      },
      groupId: 'contactAddress',
      prerequisites: ['{{function:f344}}'],
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 13,
      gtmTag: 'contact-postcode'
    },
    '436727b4-979c-4fa4-b1f9-70df0c1cadf8': {
      questionId: '436727b4-979c-4fa4-b1f9-70df0c1cadf8',
      name: 'contactAddressId',
      dataType: 'number',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Address ID' } },
        dependentAnswers: { '8b7bd543-0855-4873-a3ad-cb32739480c0': [{ condition: '{{function:f347}}', answer: '' }] },
        validation: [{ type: 'integer', messages: {} }]
      },
      groupId: 'contactAddress',
      prerequisites: ['{{function:f346}}'],
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 14,
      gtmTag: 'contact-address-id'
    },
    '1a7f393d-5fc7-4c06-a37d-479e02c7b051': {
      questionId: '1a7f393d-5fc7-4c06-a37d-479e02c7b051',
      name: 'contactAddressLine1',
      dataType: 'string',
      mappingField: 'CorrespondenceAddressLine1',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Address Line 1' } },
        validation: [
          {
            type: 'required',
            condition: '{{function:f349}}',
            message: 'Please enter the first line of the contact address'
          }
        ]
      },
      groupId: 'contactAddress',
      prerequisites: ['{{function:f348}}'],
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 15,
      gtmTag: 'contact-address-line1'
    },
    'ec1211db-19d5-4a46-9019-ac5ca18578b3': {
      questionId: 'ec1211db-19d5-4a46-9019-ac5ca18578b3',
      name: 'contactAddressLine2',
      dataType: 'string',
      mappingField: 'CorrespondenceAddressLine2',
      data: { textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Address Line 2' } } },
      groupId: 'contactAddress',
      prerequisites: ['{{function:f350}}'],
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 16,
      gtmTag: 'contact-address-line2'
    },
    'a845ddf7-d4ba-4cee-b03a-67a3212c9b08': {
      questionId: 'a845ddf7-d4ba-4cee-b03a-67a3212c9b08',
      name: 'contactTownCity',
      dataType: 'string',
      mappingField: 'CorrespondenceTownCity',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'Town or City' } },
        validation: [
          {
            type: 'required',
            condition: '{{function:f352}}',
            message: 'Please enter the contact address town or city.'
          }
        ]
      },
      groupId: 'contactAddress',
      prerequisites: ['{{function:f351}}'],
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 17,
      gtmTag: 'contact-town-city'
    },
    '7b2a69dc-47bf-4772-82f7-cb1c1431944a': {
      questionId: '7b2a69dc-47bf-4772-82f7-cb1c1431944a',
      name: 'contactCounty',
      dataType: 'string',
      mappingField: 'CorrespondenceCounty',
      data: {
        textAndStyle: { standard: { controlType: 'TextInput', questionText: 'County' } },
        validation: [
          { type: 'required', condition: '{{function:f354}}', message: 'Please enter the contact address county.' }
        ]
      },
      groupId: 'contactAddress',
      prerequisites: ['{{function:f353}}'],
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 18,
      gtmTag: 'contact-county'
    },
    '30713574-29dc-4ce8-bfe3-ee94c869be0c': {
      questionId: '30713574-29dc-4ce8-bfe3-ee94c869be0c',
      name: 'toHouseholdDetails',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Back', buttonStyle: 'success', type: 'button' }
        },
        dependentActions: [{ action: 'previous-section' }]
      },
      groupId: 'button-grouping',
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 19,
      groupOrder: 0,
      gtmTag: 'to-contact-details'
    },
    '4c3cd7c0-41c5-11ea-891e-c99fdec013eb': {
      questionId: '4c3cd7c0-41c5-11ea-891e-c99fdec013eb',
      name: 'quoteButton',
      dataType: 'button',
      default: false,
      data: {
        textAndStyle: {
          standard: { controlType: 'Button', buttonText: 'Quote', buttonStyle: 'success', type: 'button' }
        }
      },
      groupId: 'button-grouping',
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      order: 20,
      groupOrder: 0,
      gtmTag: 'quote-button'
    }
  },
  sections: {
    '774caad0-4125-11ea-b9f2-237954363c83': {
      sectionId: '774caad0-4125-11ea-b9f2-237954363c83',
      title: 'Cover Details',
      isTemplate: true,
      position: 1
    },
    '46c8058f-f8c5-4f61-bb69-3b536c694f6c': {
      sectionId: '46c8058f-f8c5-4f61-bb69-3b536c694f6c',
      title: 'Property type',
      isTemplate: true,
      position: 2
    },
    'f024978d-a57f-41c4-b2fe-ebb08531b1be': {
      sectionId: 'f024978d-a57f-41c4-b2fe-ebb08531b1be',
      title: 'Property construction',
      isTemplate: true,
      position: 3
    },
    'dc573900-3dff-11ea-a31c-2de51244f3ed': {
      sectionId: 'dc573900-3dff-11ea-a31c-2de51244f3ed',
      title: 'Property circumstances',
      isTemplate: true,
      position: 4
    },
    'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b': {
      sectionId: 'e0ebc2f0-3ec8-11ea-9974-a9ac1356511b',
      title: 'Your Contents',
      isTemplate: true,
      position: 5
    },
    '6c4c8a80-40e7-11ea-841c-bb3040cb10d0': {
      sectionId: '6c4c8a80-40e7-11ea-841c-bb3040cb10d0',
      title: 'Resident details',
      isTemplate: true,
      position: 6
    },
    '250eb790-40f8-11ea-854a-85cd7b624796': {
      sectionId: '250eb790-40f8-11ea-854a-85cd7b624796',
      title: 'Household details',
      isTemplate: true,
      position: 7
    },
    '959154f0-4120-11ea-8d4c-ab6d2f0166c9': {
      sectionId: '959154f0-4120-11ea-8d4c-ab6d2f0166c9',
      title: 'Contact details',
      isTemplate: true,
      position: 8
    },
    '42e337c0-4114-11ea-8d4c-ab6d2f0166c9': {
      sectionId: '42e337c0-4114-11ea-8d4c-ab6d2f0166c9',
      title: '{{Ordinal}} Bankruptcy / CCJ /IVA',
      isTemplate: true,
      position: 0,
      prerequisites: ['{{function:f355}}']
    },
    '48fd7ef0-3eca-11ea-9974-a9ac1356511b': {
      sectionId: '48fd7ef0-3eca-11ea-9974-a9ac1356511b',
      title: '{{Ordinal}} bike',
      isTemplate: true,
      position: 0,
      prerequisites: ['{{function:f356}}']
    },
    'b0c7d6b0-4105-11ea-854a-85cd7b624796': {
      sectionId: 'b0c7d6b0-4105-11ea-854a-85cd7b624796',
      title: '{{Ordinal}} cancelled insurance',
      isTemplate: true,
      position: 0,
      prerequisites: ['{{function:f357}}']
    },
    'c9b6978f-e492-429a-ba2a-6e5b617b5a4a': {
      sectionId: 'c9b6978f-e492-429a-ba2a-6e5b617b5a4a',
      title: '{{Ordinal}} claim',
      isTemplate: true,
      position: 0,
      prerequisites: ['{{function:f358}}']
    },
    '63bd0780-4116-11ea-8d4c-ab6d2f0166c9': {
      sectionId: '63bd0780-4116-11ea-8d4c-ab6d2f0166c9',
      title: '{{Ordinal}} criminal conviction',
      isTemplate: true,
      position: 0,
      prerequisites: ['{{function:f359}}']
    },
    'ffdfd3d0-3eab-11ea-9eff-f118e7c9b0f4': {
      sectionId: 'ffdfd3d0-3eab-11ea-9eff-f118e7c9b0f4',
      title: '{{Ordinal}} flood',
      isTemplate: true,
      position: 0,
      prerequisites: ['{{function:f360}}']
    },
    '48fd7ef2-3eca-11ea-9974-a9ac1356511b': {
      sectionId: '48fd7ef2-3eca-11ea-9974-a9ac1356511b',
      title: '{{Ordinal}} gadget',
      isTemplate: true,
      position: 0,
      prerequisites: ['{{function:f361}}']
    },
    '48fd7ef3-3eca-11ea-9974-a9ac1356511b': {
      sectionId: '48fd7ef3-3eca-11ea-9974-a9ac1356511b',
      title: '{{Ordinal}} High Risk Item',
      isTemplate: true,
      position: 0,
      prerequisites: ['{{function:f362}}']
    },
    '85b5bc20-4115-11ea-8d4c-ab6d2f0166c9': {
      sectionId: '85b5bc20-4115-11ea-8d4c-ab6d2f0166c9',
      title: '{{Ordinal}} Liability claim',
      isTemplate: true,
      position: 0,
      prerequisites: ['{{function:f363}}']
    },
    '48fd7ef1-3eca-11ea-9974-a9ac1356511b': {
      sectionId: '48fd7ef1-3eca-11ea-9974-a9ac1356511b',
      title: '{{Ordinal}} mobile phone',
      isTemplate: true,
      position: 0,
      prerequisites: ['{{function:f364}}']
    },
    '95748bb0-4100-11ea-854a-85cd7b624796': {
      sectionId: '95748bb0-4100-11ea-854a-85cd7b624796',
      title: '{{Ordinal}} policy holder',
      isTemplate: true,
      position: 0,
      prerequisites: ['{{function:f365}}']
    },
    'a8f887c0-3e05-11ea-a17c-1fc30bae3b9d': {
      sectionId: 'a8f887c0-3e05-11ea-a17c-1fc30bae3b9d',
      title: '{{Ordinal}} tree',
      isTemplate: true,
      position: 0,
      prerequisites: ['{{function:f366}}']
    },
    address: {
      sectionId: 'address',
      title: 'Address Lookup',
      isTemplate: false,
      position: 0,
      controlType: 'AddressLookup'
    },
    contactAddress: {
      sectionId: 'contactAddress',
      title: 'Address Lookup',
      isTemplate: false,
      position: 0,
      controlType: 'AddressLookup'
    },
    'button-grouping': {
      sectionId: 'button-grouping',
      title: 'Button grouping',
      isTemplate: false,
      position: 0,
      controlType: 'ButtonGroup'
    }
  },
  commonLookups: {
    yesNo: { true: { text: 'Yes' }, false: { text: 'No' } },
    titles: {
      ky002: { text: 'Miss' },
      ky003: { text: 'Mr' },
      ky004: { text: 'Mrs' },
      ky005: { text: 'Ms' },
      ky014: { text: 'Dame' },
      ky001: { text: 'Doctor' },
      ky082: { text: 'Estate of' },
      ky019: { text: 'Lady' },
      ky021: { text: 'Lord' },
      ky024: { text: 'Professor' },
      ky006: { text: 'Reverend' },
      ky007: { text: 'Sir' },
      ky031: { text: 'The Right Honourable' }
    },
    relationships: {
      ky3: { text: 'Civil Partner' },
      ky4: { text: 'Dependant' },
      ky10: { text: 'Fellow members of residents commitee' },
      ky6: { text: 'Flatmate/ housemate' },
      ky1: { text: 'Husband' },
      ky8: { text: 'Non-paying guest' },
      ky5: { text: 'Other Family' },
      ky9: { text: 'Partner' },
      ky7: { text: 'Paying Guest' },
      ky11: { text: 'Spouse' },
      ky2: { text: 'Wife' }
    },
    occupations: {
      'Abattoir Worker': null,
      'Accommodation Officer': null,
      'Account Executive': null,
      'Account Manager': null,
      Accountant: null,
      'Accountant - Chartered or Certified': null,
      'Accounts Assistant': null,
      'Accounts Clerk': null,
      'Accounts Manager': null,
      'Accounts Staff': null,
      'Acoustic Engineer': null,
      Actor: null,
      'Actor/Actress': null,
      Actress: null,
      Actuary: null,
      Acupuncturist: null,
      'Administration Assistant': null,
      'Administration Clerk': null,
      'Administration Manager': null,
      'Administration Staff': null,
      Administrator: null,
      'Advertising Agent': null,
      'Advertising Assistant': null,
      'Advertising Clerk': null,
      'Advertising Contractor': null,
      'Advertising Executive': null,
      'Advertising Manager': null,
      'Advertising Staff': null,
      'Aerial Erector': null,
      'Aerobic / Keep Fit Instructor': null,
      'Aerobic Instructor': null,
      'Aeronautical Engineer': null,
      Agister: null,
      'Agricultural Consultant': null,
      'Agricultural Contractor': null,
      'Agricultural Engineer': null,
      'Agricultural Merchant': null,
      'Agricultural Worker': null,
      Agronomist: null,
      'Air Force - NCO/Commissioned Officer': null,
      'Air Force - Other Ranks': null,
      'Air Traffic Controller': null,
      'Aircraft - Flight Deck Crew': null,
      'Aircraft Buyer': null,
      'Aircraft Cabin Crew': null,
      'Aircraft Designer': null,
      'Aircraft Engineer': null,
      'Aircraft Maintenance Engineer': null,
      'Aircraft Surface Finisher': null,
      'Airline Check-in Staff': null,
      'Airline Employee - Airport': null,
      'Airline Employee - Non-Airport': null,
      Airman: null,
      'Airport Controller': null,
      'Airport Manager': null,
      Almoner: null,
      'Ambulance Controller': null,
      'Ambulance Crew': null,
      'Ambulance Driver': null,
      'Amusement Arcade Worker': null,
      Anaesthetist: null,
      'Analytical Chemist': null,
      'Animal Breeder': null,
      Anthropologist: null,
      'Antique Dealer': null,
      'Applications Engineer': null,
      'Applications Programmer': null,
      Aquarist: null,
      Arbitrator: null,
      Arborist: null,
      Archaeologist: null,
      Architect: null,
      "Architect's Technician": null,
      'Architectural Surveyor': null,
      Archivist: null,
      'Area Manager': null,
      Armourer: null,
      'Army - NCO/Commissioned Officer': null,
      'Army - Other Ranks': null,
      Aromatherapist: null,
      'Art Critic': null,
      'Art Dealer': null,
      'Art Historian': null,
      'Art Restorer': null,
      Artexer: null,
      'Articled Clerk': null,
      'Artificial Limb Fitter': null,
      Artist: null,
      'Asbestos Remover': null,
      Asphalter: null,
      'Asphalter/Roadworker': null,
      'Assembly Worker': null,
      Assessor: null,
      'Assistant Accounts Manager': null,
      'Assistant Caretaker': null,
      'Assistant Cook': null,
      'Assistant Manager': null,
      'Assistant Nurse': null,
      'Assistant Teacher': null,
      Astrologer: null,
      Astronomer: null,
      'Au Pair': null,
      'Auction Worker': null,
      Auctioneer: null,
      Audiologist: null,
      'Audit Clerk': null,
      'Audit Manager': null,
      Auditor: null,
      Author: null,
      'Auto Electrician': null,
      'Auxiliary Nurse': null,
      'BBC Employee - Clerical': null,
      'BBC Stage Mover': null,
      'Bacon Curer': null,
      'Baggage Handler': null,
      Bailiff: null,
      Baker: null,
      'Bakery Assistant': null,
      'Bakery Manager': null,
      'Bakery Operator': null,
      Balloonist: null,
      'Bank Clerk': null,
      'Bank Manager': null,
      'Bank Messenger': null,
      'Bank Note Checker': null,
      'Bank Staff': null,
      'Baptist Minister': null,
      'Bar Manager': null,
      'Bar Staff': null,
      'Bar Steward': null,
      Barber: null,
      Barmaid: null,
      Barman: null,
      Barrister: null,
      Beautician: null,
      'Beauty Therapist': null,
      'Betting Shop Clerk': null,
      'Bill Poster': null,
      'Bingo Caller': null,
      'Bingo Hall Staff': null,
      Biochemist: null,
      Biologist: null,
      Blacksmith: null,
      'Blind Assembler': null,
      'Blind Fitter': null,
      'Blinds Installer': null,
      'Boat Builder': null,
      'Body Fitter': null,
      Bodyguard: null,
      'Bodyshop Manager': null,
      'Boiler Maker': null,
      'Boiler Man': null,
      'Book Binder': null,
      'Book Seller': null,
      'Book-Keeper': null,
      'Booking Agent': null,
      'Booking Clerk': null,
      'Booking Office Clerk': null,
      Bookmaker: null,
      Botanist: null,
      'Box Maker': null,
      'Box Office Clerk': null,
      'Branch Manager': null,
      Breeder: null,
      Brewer: null,
      'Brewery Manager': null,
      'Brewery Worker': null,
      Bricklayer: null,
      Broadcaster: null,
      'Broadcaster - TV/Radio': null,
      'Broadcasting Engineer': null,
      Builder: null,
      'Builders Labourer': null,
      'Builders Merchant': null,
      'Building Advisor': null,
      'Building Contractor': null,
      'Building Control Officer': null,
      'Building Engineer': null,
      'Building Estimator': null,
      'Building Foreman': null,
      'Building Inspector': null,
      'Building Manager': null,
      'Building Site Inspector': null,
      'Building Society Agent': null,
      'Building Society Clerk': null,
      'Building Society Staff': null,
      'Building Surveyor': null,
      Bursar: null,
      'Bus Company Employee': null,
      'Bus Conductor': null,
      'Bus Driver': null,
      'Bus Mechanic': null,
      'Bus Valeter': null,
      'Business Consultant': null,
      'Business Proprietor': null,
      'Business Proprietor - Licensed Premises': null,
      Butcher: null,
      'Butchery Manager': null,
      Butler: null,
      Buyer: null,
      'Cabinet Maker': null,
      'Cable Contractor': null,
      'Cable Jointer': null,
      'Cable TV Installer': null,
      'Cafe Owner': null,
      'Cafe Staff': null,
      'Cafe Worker': null,
      'Calibration Manager': null,
      'Call Centre Manager': null,
      'Call Centre Staff': null,
      'Camera Repairer': null,
      Cameraman: null,
      'Cameraman - TV/Films': null,
      'Canal Boat Broker': null,
      'Car Body Repairer': null,
      'Car Builder': null,
      'Car Dealer': null,
      'Car Delivery Driver': null,
      'Car Park Attendant': null,
      'Car Salesman': null,
      'Car Valet': null,
      'Car Wash Attendant': null,
      'Care Assistant': null,
      'Care Manager': null,
      'Careers Advisor': null,
      'Careers Officer': null,
      'Carer - Non Professional': null,
      'Carer - Professional': null,
      Caretaker: null,
      'Cargo Operator': null,
      Carpenter: null,
      "Carpenter's Assistant": null,
      'Carpet Cleaner': null,
      'Carpet Fitter': null,
      'Carpet Retailer': null,
      Carpetfitter: null,
      'Carphone Fitter': null,
      Cartographer: null,
      Cartoonist: null,
      'Cash Point Fitter': null,
      Cashier: null,
      'Casual Worker': null,
      Caterer: null,
      'Catering Consultant': null,
      'Catering Manager': null,
      'Catering Staff': null,
      Caulker: null,
      'Ceiling Contractor': null,
      'Ceiling Fixer': null,
      Cellarman: null,
      'Centre Lathe Operator': null,
      'Certified Accountant': null,
      Chambermaid: null,
      Chandler: null,
      Chaplain: null,
      'Charge Hand': null,
      'Charity Worker': null,
      'Chartered Accountant': null,
      'Chartered Engineer': null,
      'Chartered Surveyor': null,
      'Chartered Valuer': null,
      Charterer: null,
      Chauffeur: null,
      'Check-Out Assistant': null,
      Chef: null,
      'Chemical Engineer': null,
      Chemist: null,
      'Chicken Chaser': null,
      'Chicken Sexer': null,
      'Chief Cashier': null,
      'Chief Chemist': null,
      'Chief Executive': null,
      'Child Minder (Registered)': null,
      'Childminder (Registered)': null,
      'Childrens Entertainer': null,
      'Chimney Sweep': null,
      'China Restorer': null,
      Chiropodist: null,
      Chiropractor: null,
      Choreographer: null,
      'Church Officer': null,
      'Church Warden': null,
      'Cinema Assistant': null,
      'Cinema Manager': null,
      'Circus Proprietor': null,
      'Circus Worker': null,
      'Civil Engineer': null,
      'Civil Servant': null,
      'Claims Adjustor': null,
      'Claims Assessor': null,
      'Claims Manager': null,
      'Claims/Loss Adjustor': null,
      Clairvoyant: null,
      'Classical Musician': null,
      'Classroom Aide': null,
      'Clay Pigeon Instructor': null,
      Cleaner: null,
      'Cleaning Contractor': null,
      'Cleaning Supervisor': null,
      Clergyman: null,
      Cleric: null,
      'Clerical Assistant': null,
      'Clerical Officer': null,
      Clerk: null,
      'Clerk Of Works': null,
      'Clinical Psychologist': null,
      'Clock Maker': null,
      Coach: null,
      'Coach Builder': null,
      'Coach Driver': null,
      'Coach Sprayer': null,
      'Coal Merchant': null,
      Coastguard: null,
      Cobbler: null,
      'Coffee Merchant': null,
      'Coin Dealer': null,
      'College Dean': null,
      'College Lecturer': null,
      'College Principal': null,
      'Commercial Artist': null,
      'Commercial Manager': null,
      'Commercial Traveller': null,
      'Commission Agent': null,
      Commissionaire: null,
      'Commissioned Officer': null,
      'Commissioning Engineer': null,
      'Commodity Broker': null,
      'Commodity Dealer': null,
      'Communications Officer': null,
      'Communications Supervisor': null,
      'Community Craft Instructor': null,
      'Community Nurse': null,
      'Community Worker': null,
      'Company Chairman': null,
      'Company Director': null,
      'Company Search Agent': null,
      'Company Secretary': null,
      'Complementary Therapist': null,
      Composer: null,
      Compositor: null,
      'Computer Analyst': null,
      'Computer Consultant': null,
      'Computer Engineer': null,
      'Computer Manager': null,
      'Computer Operator': null,
      'Computer Programmer': null,
      'Computer Technician': null,
      Computing: null,
      Confectioner: null,
      'Conference Manager': null,
      'Conference Organiser': null,
      Conservationist: null,
      Conservator: null,
      'Construction Engineer': null,
      'Construction Worker': null,
      Consultant: null,
      'Consultant Engineer': null,
      'Consumer Scientist': null,
      'Contract Cleaner': null,
      'Contract Furnisher': null,
      'Contract Manager': null,
      Contractor: null,
      'Contracts Supervisor': null,
      Conveyancer: null,
      Cook: null,
      Cooper: null,
      Coppersmith: null,
      Copywriter: null,
      Coroner: null,
      'Corrosion Consultant': null,
      'Costume Designer': null,
      'Costume Jeweller': null,
      Costumier: null,
      'Council Worker': null,
      Counsellor: null,
      'Countryside Ranger': null,
      'County Councillor': null,
      Courier: null,
      'Courier - Driver': null,
      'Courier - Motorcycle': null,
      'Courier - Parcel Delivery': null,
      'Court Officer': null,
      'Craft Dealer': null,
      Craftsman: null,
      Craftswoman: null,
      'Crane Driver': null,
      'Crane Erector': null,
      'Crane Operator': null,
      'Creche Worker': null,
      'Credit Broker': null,
      'Credit Control': null,
      'Credit Controller': null,
      'Credit Draper': null,
      'Credit Manager': null,
      'Crematorium Attendant': null,
      'Crime Examiner': null,
      Crofter: null,
      Croupier: null,
      'Crown Prosecutor': null,
      Curator: null,
      'Currency Trader': null,
      'Curtain Maker': null,
      'Customer Advisor': null,
      'Customer Liaison Officer': null,
      'Customs & Excise Officer': null,
      'Customs And Excise': null,
      Cutler: null,
      Cutter: null,
      'Cycle Repairer': null,
      'Dairy Engineer': null,
      'Dairy Worker': null,
      'Dance Teacher': null,
      Dancer: null,
      'Dark Room Technician': null,
      'Data Administrator': null,
      'Data Co-Ordinator': null,
      'Data Processor': null,
      'Day Care Officer': null,
      Dealer: null,
      'Dealer - General': null,
      'Dealer - Scrap/Waste': null,
      'Debt Collector': null,
      'Debt Counsellor': null,
      Decorator: null,
      'Delivery Courier': null,
      'Delivery Driver': null,
      'Delivery Roundsman': null,
      'Demolition Worker': null,
      Demonstrator: null,
      Dendrochronologist: null,
      'Dental Assistant': null,
      'Dental Hygienist': null,
      'Dental Nurse': null,
      'Dental Surgeon': null,
      'Dental Technician': null,
      Dentist: null,
      'Dentist/Dentition': null,
      'Deputy Head Teacher': null,
      'Deputy Manager': null,
      'Deputy Principal': null,
      Dermatologist: null,
      'Design Director': null,
      'Design Engineer': null,
      'Design Manager': null,
      Designer: null,
      'Despatch Driver': null,
      'Despatch Rider': null,
      'Despatch Worker': null,
      'Development Manager': null,
      'Diamond Dealer': null,
      Diecaster: null,
      Dietician: null,
      'Dinner Lady': null,
      Diplomat: null,
      'Diplomatic Staff - British': null,
      'Diplomatic Staff - Foreign': null,
      'Diplomatic Staff - Republic Of Ireland': null,
      'Director - Performing Arts': null,
      'Director/Company Director': null,
      'Disc Jockey': null,
      'Disco Staff': null,
      'Distillery Worker': null,
      'Distribution Manager': null,
      'District Nurse': null,
      'District Valuer': null,
      Diver: null,
      Docker: null,
      'Dockyard Worker': null,
      Doctor: null,
      'Doctor - Medical': null,
      'Document Controller': null,
      'Dog Beautician': null,
      'Dog Breeder': null,
      'Dog Groomer': null,
      'Dog Trainer': null,
      'Dog Walker': null,
      'Dog Warden': null,
      'Doll Maker': null,
      'Domestic Staff': null,
      'Door Fitter': null,
      'Door To Door Collector': null,
      Doorman: null,
      'Double Glazing Fitter': null,
      'Double Glazing Salesman': null,
      Draughtsman: null,
      Draughtswoman: null,
      Drayman: null,
      Dressmaker: null,
      'Drilling Technician': null,
      Driver: null,
      'Driver - Hot Food Delivery': null,
      'Driver - Light Goods': null,
      'Driver - PSV': null,
      'Driving Examiner': null,
      'Driving Instructor': null,
      'Driving Instructor (HGV)': null,
      'Drug Addiction Counsellor': null,
      'Dry Cleaner': null,
      Dryliner: null,
      Dustman: null,
      'Dye Polisher': null,
      Dyer: null,
      'Earth Moving Contractor': null,
      Ecologist: null,
      Economist: null,
      Editor: null,
      'Editor - TV/Films': null,
      'Editorial Consultant': null,
      'Editorial Staff': null,
      'Education Advisor': null,
      'Education Officer': null,
      'Electrical Contractor': null,
      'Electrical Engineer': null,
      'Electrical Fitter': null,
      Electrician: null,
      'Electrician - Vehicle': null,
      Electrologist: null,
      'Electronic Engineer': null,
      'Electronics Supervisor': null,
      'Electronics Technician': null,
      Embalmer: null,
      'Embassy Staff': null,
      'Embassy Staff - British': null,
      'Embassy Staff - Foreign': null,
      'Embassy Staff - Republic Of Ireland': null,
      Embroiderer: null,
      'Emergency Service Staff': null,
      'Energy Analyst': null,
      Engineer: null,
      Engraver: null,
      'Enquiry Agent': null,
      Entertainer: null,
      'Environmental Chemist': null,
      'Environmental Consultant': null,
      'Environmental Health Officer': null,
      'Equity Agent': null,
      Ergonomist: null,
      'Estate Agent': null,
      'Estate Manager': null,
      Estimator: null,
      Evangelist: null,
      'Events Organiser': null,
      'Excursion Manager': null,
      Executive: null,
      'Exhaust Fitter': null,
      'Exhibition Designer': null,
      'Exhibition Organiser': null,
      'Exotic Dancer': null,
      'Expedition Leader': null,
      'Export Consultant': null,
      Exporter: null,
      'Extrusion Operator': null,
      Fabricator: null,
      'Factory Canteen Manager': null,
      'Factory Inspector': null,
      'Factory Manager': null,
      'Factory Worker': null,
      'Fairground Worker': null,
      Falconer: null,
      'Farm Manager': null,
      'Farm Worker': null,
      Farmer: null,
      Farrier: null,
      'Fashion Designer': null,
      'Fashion Photographer': null,
      'Fast Food Caterer': null,
      'Fast Food Delivery Driver': null,
      'Fast Food Proprietor': null,
      'Fence Erector': null,
      'Fibre Glass Moulder': null,
      'Field Officer': null,
      'Figure Painter': null,
      'Film Director': null,
      'Film Producer': null,
      'Film Technician': null,
      'Finance Director': null,
      'Finance Manager': null,
      'Finance Officer': null,
      'Financial Advisor': null,
      'Financial Analyst': null,
      'Financial Consultant': null,
      Financier: null,
      'Fire Officer': null,
      'Fire Prevention Officer': null,
      'Fire Protection Consultant': null,
      Firefighter: null,
      'Fireman/Woman': null,
      'Fireplace Fitter': null,
      'Firewood Merchant': null,
      'First Aid Worker': null,
      'Fish Buyer': null,
      'Fish Filleter': null,
      'Fish Fryer': null,
      'Fish Merchant': null,
      'Fish Worker': null,
      'Fisheries Inspector': null,
      Fisherman: null,
      'Fishery Manager': null,
      Fishmonger: null,
      'Fitness Instructor': null,
      Fitter: null,
      'Fitter - Tyre/Exhaust': null,
      Flagger: null,
      'Flight Deck Crew': null,
      'Floor Layer': null,
      'Floor Manager': null,
      Florist: null,
      'Flour Miller': null,
      'Flower Arranger': null,
      'Flying Instructor': null,
      'Foam Convertor': null,
      'Food Processor': null,
      Footballer: null,
      'Forces - Foreign': null,
      'Forces - H.M.': null,
      'Forces - U.S.': null,
      Foreman: null,
      'Forensic Scientist': null,
      'Forest Ranger': null,
      Forester: null,
      'Fork Lift Truck Driver': null,
      'Forwarding Agent': null,
      'Foster Parent': null,
      'Foundry Worker': null,
      'Fraud Investigator': null,
      'French Polisher': null,
      Fruiterer: null,
      'Fuel Merchant': null,
      'Fund Raiser': null,
      'Funeral Director': null,
      'Funeral Furnisher': null,
      'Furnace Man': null,
      'Furniture Dealer': null,
      'Furniture Remover': null,
      'Furniture Restorer': null,
      Furrier: null,
      'Gallery Owner': null,
      Gambler: null,
      Gamekeeper: null,
      'Gaming Board Inspector': null,
      'Gaming Club Manager': null,
      'Gaming Club Proprietor': null,
      'Gaming Club Staff - Licensed Premises': null,
      'Gaming Club Staff - Unlicensed Premises': null,
      'Garage Attendant': null,
      'Garage Foreman': null,
      'Garage Manager': null,
      Garda: null,
      'Garden Designer': null,
      Gardener: null,
      'Gas Fitter': null,
      'Gas Mechanic': null,
      'Gas Technician': null,
      'Gate Keeper': null,
      Genealogist: null,
      'General Manager': null,
      'General Practitioner': null,
      'General Worker': null,
      Geologist: null,
      Geophysicist: null,
      Gilder: null,
      'Glass Worker': null,
      Glazier: null,
      Goldsmith: null,
      'Golf Caddy': null,
      'Golf Club Professional': null,
      Golfer: null,
      'Goods Handler': null,
      Governor: null,
      'Granite Technician': null,
      'Graphic Designer': null,
      Graphologist: null,
      'Grave Digger': null,
      'Gravel Merchant': null,
      'Green Keeper': null,
      Greengrocer: null,
      Grocer: null,
      Groom: null,
      'Ground Worker': null,
      Groundsman: null,
      Guard: null,
      'Guest House Owner - Licensed': null,
      'Guest House Owner - Unlicensed': null,
      'Guest House Proprietor': null,
      Guide: null,
      'Gun Smith': null,
      Gynaecologist: null,
      'HGV Driver': null,
      'HGV Mechanic': null,
      Hairdresser: null,
      'Hairdresser - Mobile': null,
      Handyman: null,
      'Harbour Master': null,
      'Hardware Dealer': null,
      'Haulage Contractor': null,
      Hawker: null,
      'Head Accurist': null,
      'Head Greenkeeper': null,
      'Head Lad': null,
      Headteacher: null,
      'Health Advisor': null,
      'Health And Safety Consultant': null,
      'Health And Safety Officer': null,
      'Health Care Assistant': null,
      'Health Planner': null,
      'Health Service Employee': null,
      'Health Therapist': null,
      'Health Visitor': null,
      'Hearing Therapist': null,
      'Heating & Ventilation Engineer': null,
      'Heating Engineer': null,
      'Heating/Ventilation Engineer': null,
      Herbalist: null,
      'Highway Inspector': null,
      'Hire Car Driver': null,
      Hirer: null,
      Historian: null,
      'Hod Carrier': null,
      'Holiday Camp Staff - Licensed Premises': null,
      'Holiday Camp Staff - Unlicensed Premises': null,
      'Home Economist': null,
      'Home Help': null,
      'Homecare Manager': null,
      Homeopath: null,
      Homeworker: null,
      'Hop Merchant': null,
      'Horse Breeder': null,
      'Horse Dealer': null,
      'Horse Riding Instructor': null,
      'Horse Trader': null,
      'Horse Trainer': null,
      'Horticultural Consultant': null,
      Horticulturalist: null,
      'Hosiery Mechanic': null,
      'Hosiery Worker': null,
      'Hospital Consultant': null,
      'Hospital Doctor': null,
      'Hospital Manager': null,
      'Hospital Orderly': null,
      'Hospital Technician': null,
      'Hospital Warden': null,
      'Hospital Worker': null,
      Hostess: null,
      'Hot Foil Printer': null,
      'Hotel Consultant': null,
      'Hotel Worker': null,
      Hotelier: null,
      'House Parent': null,
      'House Sitter': null,
      Househusband: null,
      Housekeeper: null,
      Housewife: null,
      'Housing Assistant': null,
      'Housing Officer': null,
      'Housing Supervisor': null,
      'Human Resources Manager': null,
      'Human Resources Staff': null,
      'Hunt Master': null,
      Huntsman: null,
      'Hydro Geologist': null,
      Hygienist: null,
      Hypnotherapist: null,
      Hypnotist: null,
      'IT Consultant': null,
      'IT Manager': null,
      'IT Trainer': null,
      'Ice Cream Vendor': null,
      Illustrator: null,
      'Immigration Officer': null,
      'Import Consultant': null,
      Importer: null,
      'Independent Means': null,
      'Induction Moulder': null,
      'Industrial Chemist': null,
      'Industrial Consultant': null,
      'Industrial Designer': null,
      'Injection Moulder': null,
      'Inland Revenue Officer': null,
      Inspector: null,
      'Inspector - Customs and Excise': null,
      'Inspector - Insurance': null,
      'Instrument Engineer': null,
      'Instrument Maker': null,
      'Instrument Supervisor': null,
      'Instrument Technician': null,
      'Insurance Agent': null,
      'Insurance Assessor': null,
      'Insurance Broker': null,
      'Insurance Consultant': null,
      'Insurance Inspector': null,
      'Insurance Representative': null,
      'Insurance Staff': null,
      'Interior Decorator': null,
      'Interior Designer': null,
      Interpreter: null,
      Interviewer: null,
      Inventor: null,
      Investigator: null,
      'Investment Advisor': null,
      'Investment Banker': null,
      'Investment Manager': null,
      Ironmonger: null,
      'Itinerant - Labourer': null,
      'Itinerant - Trader': null,
      Janitor: null,
      'Jazz Composer': null,
      Jeweller: null,
      'Jewellery Consultant': null,
      Jockey: null,
      Joiner: null,
      'Joinery Consultant': null,
      Journalist: null,
      'Journalistic Agent': null,
      Judge: null,
      'Junk Shop Proprietor': null,
      'Justice Of The Peace': null,
      'Keep Fit Instructor': null,
      'Kennel Hand': null,
      'Kennel Maid': null,
      'Kennels / Cattery Employee': null,
      'Kennels / Cattery Owner': null,
      'Kissagram Person': null,
      'Kitchen Worker': null,
      Knitter: null,
      'Labelling Operator': null,
      'Laboratory Analyst': null,
      'Laboratory Assistant': null,
      'Laboratory Attendant': null,
      'Laboratory Manager': null,
      'Laboratory Operative': null,
      'Laboratory Supervisor': null,
      'Laboratory Technician': null,
      Labourer: null,
      Laminator: null,
      'Lampshade Maker': null,
      'Land Agent': null,
      'Land Surveyor': null,
      Landlady: null,
      Landlord: null,
      Landowner: null,
      'Landscape Architect': null,
      'Landscape Gardener': null,
      Landworker: null,
      'Lathe Operator': null,
      'Laundry Staff': null,
      'Laundry Worker': null,
      'Lavatory Attendant': null,
      'Law Clerk': null,
      'Lawn Mower Repairer': null,
      Lawyer: null,
      'Leaflet Distributor': null,
      'Leather Worker': null,
      Lecturer: null,
      'Ledger Clerk': null,
      'Legal Advisor': null,
      'Legal Assistant': null,
      'Legal Executive': null,
      'Legal Secretary': null,
      'Leisure Centre Attendant': null,
      'Leisure Centre Manager': null,
      'Lens Grinder & Polisher': null,
      'Letting Agent': null,
      'Liaison Officer': null,
      Librarian: null,
      'Library Manager': null,
      Licensee: null,
      'Licensing Consultant': null,
      Lifeguard: null,
      'Lift Attendant': null,
      'Lift Engineer': null,
      Lighterman: null,
      'Lighthouse Keeper': null,
      'Lighting Designer': null,
      'Lighting Technician': null,
      'Lime Kiln Attendant': null,
      'Line Manager': null,
      'Line Worker': null,
      Linguist: null,
      'Literary Agent': null,
      'Literary Editor': null,
      Lithographer: null,
      'Litigation Manager': null,
      Loader: null,
      'Loans Manager': null,
      'Local Government Officer': null,
      'Lock Keeper': null,
      Locksmith: null,
      'Locum Pharmacist': null,
      'Log Merchant': null,
      'Lorry Driver': null,
      'Loss Adjustor': null,
      'Loss Assessor': null,
      Lumberjack: null,
      'Machine Fitters Mate': null,
      'Machine Minder': null,
      'Machine Operator': null,
      'Machine Setter': null,
      'Machine Technician': null,
      'Machine Tool Engineer': null,
      'Machine Tool Fitter': null,
      Machinist: null,
      Magician: null,
      Magistrate: null,
      'Magistrates Clerk': null,
      Maid: null,
      'Maintenance Engineer': null,
      'Maintenance Fitter': null,
      'Maintenance Man': null,
      'Maintenance Manager': null,
      'Maintenance Staff': null,
      'Make Up Artist': null,
      'Make Up Supervisor': null,
      'Management Consultant': null,
      'Management Trainee': null,
      Manager: null,
      'Manager - Licensed Premises': null,
      'Manager - Retail Shop': null,
      'Manager - Ring Sports': null,
      'Manager - Sales (Non Travelling)': null,
      'Manager - Sales (Travelling)': null,
      'Manager - Sports': null,
      'Manager - Unlicensed Premises': null,
      'Managing Director': null,
      Manicurist: null,
      'Manufacturing Agent': null,
      'Manufacturing Technician': null,
      'Map Mounter': null,
      'Marble Finisher': null,
      'Marble Mason': null,
      'Marine Broker': null,
      'Marine Consultant': null,
      'Marine Electrician': null,
      'Marine Engineer': null,
      'Marine Geologist': null,
      'Marine Pilot': null,
      'Marine Surveyor': null,
      'Market Gardener': null,
      'Market Research Assistant': null,
      'Market Researcher': null,
      'Market Trader': null,
      'Marketing - Non Travelling': null,
      'Marketing - Travelling': null,
      'Marketing Agent': null,
      'Marketing Assistant': null,
      'Marketing Co-ordinator': null,
      'Marketing Consultant': null,
      'Marketing Director': null,
      'Marketing Executive': null,
      'Marketing Manager': null,
      'Marquee Erector': null,
      'Massage Therapist': null,
      Masseur: null,
      Masseuse: null,
      'Master Mariner': null,
      'Master Of Foxhounds': null,
      'Master of Ceremonies': null,
      'Materials Controller': null,
      'Materials Manager': null,
      Mathematician: null,
      Matron: null,
      'Mattress Maker': null,
      'Mature Student': null,
      'Meat Inspector': null,
      'Meat Wholesaler': null,
      Mechanic: null,
      'Mechanic - Airport': null,
      'Mechanic - Vehicle': null,
      'Mechanical Engineer': null,
      'Mechanical Technician': null,
      'Medal Dealer': null,
      'Medical Advisor': null,
      'Medical Assistant': null,
      'Medical Consultant': null,
      'Medical Officer': null,
      'Medical Physicist': null,
      'Medical Practitioner': null,
      'Medical Researcher': null,
      'Medical Secretary': null,
      'Medical Student': null,
      'Medical Supplier': null,
      'Medical Technician': null,
      'Member Of Parliament': null,
      Merchandiser: null,
      Merchant: null,
      'Merchant Banker': null,
      'Merchant Navy': null,
      'Merchant Seaman': null,
      Messenger: null,
      'Metal Dealer': null,
      'Metal Engineer': null,
      'Metal Polisher': null,
      'Metal Worker': null,
      Metallurgist: null,
      Meteorologist: null,
      'Meter Reader': null,
      Microbiologist: null,
      'Microfilm Operator': null,
      Midwife: null,
      Milklady: null,
      Milkman: null,
      'Mill Operator': null,
      'Mill Worker': null,
      Miller: null,
      Milliner: null,
      Millwright: null,
      Miner: null,
      Mineralologist: null,
      'Minibus Driver': null,
      'Minicab Driver': null,
      'Mining Consultant': null,
      'Mining Engineer': null,
      'Minister Of Religion': null,
      Missionary: null,
      'Mobile Caterer': null,
      'Mobile Disc Jockey': null,
      'Mobile Disco Owner': null,
      'Mobile Hairdresser': null,
      'Mobile Motor Mechanic': null,
      'Mobile Service Engineer': null,
      Model: null,
      'Model Maker': null,
      'Money Broker': null,
      'Money Dealer': null,
      Moneylender: null,
      Monk: null,
      'Monumental Sculptor': null,
      'Mooring Contractor': null,
      'Mortgage Broker': null,
      'Mortgage Consultant': null,
      Mortician: null,
      'Motor Dealer': null,
      'Motor Engineer': null,
      'Motor Fitter': null,
      'Motor Mechanic': null,
      'Motor Racing Organiser': null,
      'Motor Trader': null,
      'Museum Assistant': null,
      'Museum Attendant': null,
      'Museum Consultant': null,
      'Museum Technician': null,
      'Music Teacher': null,
      'Music Therapist': null,
      'Music Wholesaler': null,
      Musician: null,
      'Musician - Classical': null,
      'Musician - Dance Band': null,
      'Musician - Pop Group': null,
      Nanny: null,
      Naturopath: null,
      Navigator: null,
      'Navy - NCO/Commissioned Officer': null,
      'Navy - Other Ranks': null,
      Negotiator: null,
      Neurologist: null,
      Newsagent: null,
      'Night Club Staff': null,
      'Night Porter': null,
      'Night Watchman': null,
      'Non Commissioned Officer': null,
      'Not Employed Due to Disability': null,
      'Not In Employment': null,
      'Notary Public': null,
      'Nuclear Scientist': null,
      Nun: null,
      Nurse: null,
      'Nursery Assistant': null,
      'Nursery Nurse': null,
      'Nursery Worker': null,
      Nurseryman: null,
      'Nursing Assistant': null,
      'Nursing Auxiliary': null,
      'Nursing Manager': null,
      'Nursing Sister': null,
      Nutritionist: null,
      'Occupational Health Consultant': null,
      'Occupational Health Nurse': null,
      'Occupational Therapist': null,
      Oculist: null,
      'Off Shore Surveyor': null,
      'Office Administrator': null,
      'Office Manager': null,
      'Office Worker': null,
      'Oil Broker': null,
      'Oil Rig Crew': null,
      'Opera Singer': null,
      'Operations Director': null,
      'Operations Manager': null,
      'Operations Supervisor': null,
      'Opthalmic Technician': null,
      'Optical Advisor': null,
      'Optical Assistant': null,
      'Optical Technician': null,
      Optician: null,
      Optometrist: null,
      'Orchestral Violinist': null,
      'Order Clerk': null,
      Organist: null,
      'Ornamental Blacksmith': null,
      Ornithologist: null,
      'Orthopaedic Technician': null,
      Orthoptist: null,
      Osteopath: null,
      Ostler: null,
      'Outdoor Pursuits Instructor': null,
      Outfitter: null,
      'Outreach Worker': null,
      'Overhead Line Instructor': null,
      'Overhead Lineman': null,
      Overlocker: null,
      'Overseas Mailer': null,
      Overwriter: null,
      'Packaging Consultant': null,
      Packer: null,
      Paediatrician: null,
      'Pager Operator': null,
      'Paint Consultant': null,
      'Paint Sprayer': null,
      'Paint Sprayer - Motor Trade': null,
      'Paint Sprayer - Non Motor Trade': null,
      Painter: null,
      'Painter And Decorator': null,
      Palaeobotanist: null,
      Palaeontologist: null,
      'Pallet Maker': null,
      'Panel Beater': null,
      'Paper Mill Worker': null,
      'Parachute Packer': null,
      Paramedic: null,
      'Park Attendant': null,
      'Park Keeper': null,
      'Park Ranger': null,
      'Park/Recreational Attendant': null,
      'Partition Erector': null,
      'Parts Man': null,
      'Parts Manager': null,
      'Parts Supervisor': null,
      'Party Planner': null,
      Pasteuriser: null,
      'Pastry Chef': null,
      'Patent Agent': null,
      'Patent Attorney': null,
      Pathologist: null,
      'Patrol Person': null,
      Patrolman: null,
      'Pattern Cutter': null,
      'Pattern Maker': null,
      'Pattern Weaver': null,
      Paviour: null,
      Pawnbroker: null,
      'Payment Officer': null,
      'Payroll Assistant': null,
      'Payroll Clerk': null,
      'Payroll Manager': null,
      'Payroll Supervisor': null,
      'Pearl Stringer': null,
      Pedicurist: null,
      'Pensions Consultant': null,
      'Pensions Manager': null,
      'Personal Assistant': null,
      'Personnel Administrator': null,
      'Personnel Manager': null,
      'Personnel Officer': null,
      'Pest Control': null,
      'Pest Controller': null,
      'Pet Minder': null,
      'Petrol Station Attendant': null,
      'Petroleum Engineer': null,
      'Petty Officer': null,
      'Pharmaceutical Assistant': null,
      Pharmacist: null,
      'Pharmacy Manager': null,
      'Pharmacy Technician': null,
      Philatelist: null,
      Phlebotomist: null,
      'Photo Engraver': null,
      'Photo Laboratory Processor': null,
      'Photo Technician': null,
      'Photocopy Machine Technician': null,
      Photographer: null,
      'Photographer - Fashion': null,
      'Photographer - Location': null,
      'Photographer - Studio': null,
      'Photographic Agent': null,
      Physician: null,
      Physicist: null,
      Physiologist: null,
      Physiotherapist: null,
      'Piano Teacher': null,
      'Piano Tuner': null,
      Picker: null,
      'Picture Editor': null,
      'Picture Framer': null,
      'Picture Researcher': null,
      'Pig Man': null,
      'Pig Manager': null,
      Pilot: null,
      'Pipe Fitter': null,
      'Pipe Inspector': null,
      'Pipe Insulator': null,
      'Pipe Layer': null,
      'Planning Engineer': null,
      'Planning Manager': null,
      'Planning Officer': null,
      'Planning Technician': null,
      'Plant Attendant': null,
      'Plant Driver': null,
      'Plant Engineer': null,
      'Plant Fitter': null,
      'Plant Manager': null,
      'Plant Operator': null,
      Plasterer: null,
      'Plastics Consultant': null,
      'Plastics Engineer': null,
      'Plate Layer': null,
      Plater: null,
      'Playgroup Assistant': null,
      'Playgroup Leader': null,
      Plumber: null,
      'Plumbing & Heating Engineer': null,
      Podiatrist: null,
      'Police Officer': null,
      Polisher: null,
      'Pool Attendant': null,
      'Pools Collector': null,
      Porter: null,
      'Portfolio Manager': null,
      'Post Card Seller': null,
      'Post Office Counter Clerk': null,
      'Post Office Staff': null,
      'Post Sorter': null,
      Postman: null,
      'Postman/Woman': null,
      Postmaster: null,
      Postwoman: null,
      'Potato Merchant': null,
      Potter: null,
      'Practice Manager': null,
      Preacher: null,
      'Precision Engineer': null,
      'Premises Security Installers': null,
      'Press Officer': null,
      'Press Operator': null,
      'Press Setter': null,
      Presser: null,
      Priest: null,
      'Print Finisher': null,
      Printer: null,
      'Prison Chaplain': null,
      'Prison Officer': null,
      'Private Investigator': null,
      'Probation Officer': null,
      'Probation Worker': null,
      'Process Engineer': null,
      'Process Operator': null,
      'Process Worker': null,
      'Procurator Fiscal': null,
      'Produce Supervisor': null,
      Producer: null,
      'Product Installer': null,
      'Product Manager': null,
      'Production Engineer': null,
      'Production Hand': null,
      'Production Manager': null,
      'Production Planner': null,
      'Professional Boxer': null,
      'Professional Racing Driver': null,
      'Professional Racing Motorcyclist': null,
      'Professional Sportsperson': null,
      'Professional Wrestler': null,
      Professor: null,
      'Progress Chaser': null,
      'Progress Clerk': null,
      'Project Co-ordinator': null,
      'Project Engineer': null,
      'Project Leader': null,
      'Project Manager': null,
      'Project Worker': null,
      Projectionist: null,
      Promoter: null,
      'Promoter - Racing': null,
      'Promoter - Ring Sports': null,
      'Proof Reader': null,
      'Property Buyer': null,
      'Property Dealer': null,
      'Property Developer': null,
      'Property Manager': null,
      'Property Valuer': null,
      Proprietor: null,
      Prosthetist: null,
      Psychiatrist: null,
      Psychoanalyst: null,
      Psychologist: null,
      Psychotherapist: null,
      'Psycodynamic Counsellor': null,
      'Public House Manager': null,
      'Public Relations Officer': null,
      Publican: null,
      'Publicity Manager': null,
      Publisher: null,
      'Publishing Manager': null,
      'Purchase Clerk': null,
      'Purchase Ledger Clerk': null,
      'Purchasing Assistant': null,
      'Purchasing Manager': null,
      Purser: null,
      'Quality Controller': null,
      'Quality Engineer': null,
      'Quality Inspector': null,
      'Quality Manager': null,
      'Quality Technician': null,
      'Quantity Surveyor': null,
      'Quarry Worker': null,
      'Queens Council': null,
      Rabbi: null,
      'Racehorse Groom': null,
      'Racing Organiser': null,
      'Radio Controller': null,
      'Radio Director': null,
      'Radio Engineer': null,
      'Radio Operator': null,
      'Radio Presenter': null,
      'Radio Producer': null,
      Radiographer: null,
      Radiologist: null,
      'Railway Staff': null,
      'Rally Driver': null,
      'Ramp Agent': null,
      'Re-Settlement Officer': null,
      Receptionist: null,
      'Records Supervisor': null,
      'Recovery Vehicle Co-ordinator': null,
      'Recruitment Consultant': null,
      Rector: null,
      Referee: null,
      'Refit Merchandiser': null,
      Reflexologist: null,
      'Refractory Engineer': null,
      'Refrigeration Engineer': null,
      'Refuse Collector': null,
      Registrar: null,
      Regulator: null,
      'Relocation Agent': null,
      'Remedial Therapist': null,
      'Rent Collector': null,
      'Rent Officer': null,
      'Repair Man': null,
      Reporter: null,
      'Reprographic Assistant': null,
      'Research Analyst': null,
      'Research Consultant': null,
      'Research Director': null,
      'Research Scientist': null,
      'Research Technician': null,
      Researcher: null,
      'Resin Caster': null,
      'Restaurant Manager': null,
      Restaurateur: null,
      Restorer: null,
      Retired: null,
      'Revenue Clerk': null,
      'Revenue Officer': null,
      'Riding Instructor': null,
      'Rig Worker': null,
      'Rig Worker - Off Shore': null,
      Rigger: null,
      Riveter: null,
      'Road Safety Officer': null,
      'Road Sweeper': null,
      'Road Worker': null,
      'Roof Tiler': null,
      Roofer: null,
      'Rose Grower': null,
      'Royal Marine': null,
      'Rug Maker': null,
      Saddler: null,
      'Safety Officer': null,
      'Sail Maker': null,
      'Sales - Non Travelling': null,
      'Sales - Travelling': null,
      'Sales Administrator': null,
      'Sales Assistant': null,
      'Sales Director': null,
      'Sales Engineer': null,
      'Sales Executive': null,
      'Sales Manager': null,
      'Sales Representative': null,
      'Sales Support': null,
      'Sales Woman': null,
      Salesman: null,
      'Sand Blaster': null,
      'Saw Miller': null,
      Scaffolder: null,
      'School Crossing Warden': null,
      'School Inspector': null,
      'Scientific Officer': null,
      Scientist: null,
      'Scrap Dealer': null,
      'Screen Printer': null,
      'Screen Writer': null,
      'Script Writer': null,
      Sculptor: null,
      Seaman: null,
      Seamstress: null,
      'Second Hand Dealer': null,
      Secretary: null,
      'Secretary And PA': null,
      'Security Consultant': null,
      'Security Controller': null,
      'Security Guard': null,
      'Security Officer': null,
      Seedsman: null,
      'Semi-Professional Sportsperson': null,
      Servant: null,
      'Service Engineer': null,
      'Service Engineer (Non-Mobile)': null,
      'Service Manager': null,
      'Share Dealer': null,
      'Sheet Metal Worker': null,
      'Shelf Filler': null,
      'Shelter Warden': null,
      Shepherd: null,
      Sheriff: null,
      'Sheriff Clerk': null,
      'Sheriff Principal': null,
      'Sheriffs Officer': null,
      'Shift Controller': null,
      'Ship Broker': null,
      'Ship Builder': null,
      'Shipping Clerk': null,
      'Shipping Officer': null,
      Shipwright: null,
      'Shipyard Worker': null,
      'Shoe Maker': null,
      'Shoe Repairer': null,
      'Shooting Instructor': null,
      'Shop Assistant': null,
      'Shop Fitter': null,
      'Shop Keeper': null,
      'Shop Manager': null,
      'Shop Proprietor': null,
      'Shop Proprietor - Mobile': null,
      'Shot Blaster': null,
      'Show Jumper': null,
      Showman: null,
      Shunter: null,
      'Sign Maker': null,
      Signalman: null,
      Signwriter: null,
      'Site Agent': null,
      'Site Engineer': null,
      Skipper: null,
      Slater: null,
      Slaughterman: null,
      Smallholder: null,
      'Social Worker': null,
      'Software Consultant': null,
      'Software Engineer': null,
      Soldier: null,
      Solicitor: null,
      'Song Writer': null,
      Sorter: null,
      'Sound Engineer': null,
      'Sound Technician': null,
      'Special Constable': null,
      'Special Needs Assistant': null,
      'Speech Therapist': null,
      'Sports Administrator - Other Sports': null,
      'Sports Administrator - Ring Sports': null,
      'Sports Centre Attendant': null,
      'Sports Coach': null,
      'Sports Commentator': null,
      Sportsman: null,
      Sportswoman: null,
      'Spring Maker': null,
      'Stable Hand': null,
      'Staff Nurse': null,
      'Stage Director': null,
      'Stage Hand': null,
      'Stage Manager': null,
      'Stage Mover': null,
      'Station Manager': null,
      Stationer: null,
      Statistician: null,
      'Steel Erector': null,
      'Steel Worker': null,
      Steeplejack: null,
      Stenographer: null,
      Stevedore: null,
      Steward: null,
      'Steward/Stewardess': null,
      Stewardess: null,
      'Stock Controller': null,
      'Stock Manager': null,
      Stockbroker: null,
      Stockman: null,
      Stocktaker: null,
      'Stone Cutter': null,
      'Stone Sawyer': null,
      Stonemason: null,
      'Store Detective': null,
      Storeman: null,
      'Storeman/Woman': null,
      Storewoman: null,
      'Street Entertainer': null,
      'Street Trader': null,
      'Stud Hand': null,
      Student: null,
      'Student - Foreign': null,
      'Student Nurse': null,
      'Student Teacher': null,
      'Studio Manager': null,
      'Sub-Postmaster': null,
      'Sub-Postmistress': null,
      Supervisor: null,
      'Supply Teacher': null,
      Surgeon: null,
      Surveyor: null,
      'Surveyor - Chartered': null,
      'Systems Analyst': null,
      'Systems Engineer': null,
      'Systems Manager': null,
      'T-Shirt Printer': null,
      'TV And Video Installer': null,
      'TV And Video Repairer': null,
      'TV Editor': null,
      'Tachograph Analyst': null,
      Tacker: null,
      Tailor: null,
      'Tank Farm Operative': null,
      'Tanker Driver': null,
      Tanner: null,
      Tarmacer: null,
      'Tarot Reader/Palmistry Expert': null,
      Tattooist: null,
      'Tax Advisor': null,
      'Tax Analyst': null,
      'Tax Assistant': null,
      'Tax Consultant': null,
      'Tax Inspector': null,
      'Tax Manager': null,
      'Tax Officer': null,
      'Taxi Controller': null,
      'Taxi Driver': null,
      Taxidermist: null,
      'Tea Blender': null,
      'Tea Taster': null,
      Teacher: null,
      'Teachers Assistant': null,
      'Technical Advisor': null,
      'Technical Analyst': null,
      'Technical Assistant': null,
      'Technical Author': null,
      'Technical Clerk': null,
      'Technical Co-ordinator': null,
      'Technical Director': null,
      'Technical Editor': null,
      'Technical Engineer': null,
      'Technical Illustrator': null,
      'Technical Instructor': null,
      'Technical Liaison Engineer': null,
      'Technical Manager': null,
      'Technician - Performing Arts': null,
      'Telecommunication Consultant': null,
      'Telecommunications Engineer': null,
      'Telecommunications Manager': null,
      Telegraphist: null,
      Telemarketeer: null,
      'Telephone Engineer': null,
      Telephonist: null,
      'Telesales Person': null,
      'Television Director': null,
      'Television Engineer': null,
      'Television Presenter': null,
      'Television Producer': null,
      'Telex Operator': null,
      'Temperature Time Recorder': null,
      'Tennis Coach': null,
      Terrier: null,
      'Textile Consultant': null,
      'Textile Engineer': null,
      'Textile Technician': null,
      'Textile Worker': null,
      Thatcher: null,
      'Theatre Manager': null,
      'Theatre Technician': null,
      'Theatrical Agent': null,
      Therapist: null,
      'Thermal Engineer': null,
      'Thermal Insulator': null,
      'Ticket Agent': null,
      'Ticket Inspector': null,
      Tiler: null,
      'Timber Inspector': null,
      'Timber Worker': null,
      Tobacconist: null,
      'Toll Collector': null,
      'Tool Maker': null,
      'Tool Setter': null,
      'Tour Agent': null,
      'Tour Guide': null,
      'Town Clerk': null,
      'Town Planner': null,
      'Toy Maker': null,
      'Toy Trader': null,
      'Track Worker': null,
      'Tractor Driver': null,
      'Tractor Mechanic': null,
      'Trade Mark Agent': null,
      'Trade Union Official': null,
      'Trading Standards Officer': null,
      'Traffic Clerk': null,
      'Traffic Engineer': null,
      'Traffic Officer': null,
      'Traffic Planner': null,
      'Traffic Supervisor': null,
      'Traffic Warden': null,
      'Train Driver': null,
      'Trainee Manager': null,
      Trainer: null,
      'Trainer - Animal': null,
      'Trainer - Greyhound': null,
      'Trainer - Race Horse': null,
      'Training Advisor': null,
      'Training Assistant': null,
      'Training Co-ordinator': null,
      'Training Consultant': null,
      'Training Instructor': null,
      'Training Manager': null,
      'Training Officer': null,
      Transcriber: null,
      Translator: null,
      'Transport Clerk': null,
      'Transport Consultant': null,
      'Transport Controller': null,
      'Transport Engineer': null,
      'Transport Manager': null,
      'Transport Officer': null,
      'Transport Planner': null,
      'Travel Agent': null,
      'Travel Clerk': null,
      'Travel Consultant': null,
      'Travel Courier': null,
      'Travel Guide': null,
      'Travel Guide Writer': null,
      'Travel Representative': null,
      'Travelling Showman': null,
      Treasurer: null,
      'Tree Feller': null,
      'Tree Surgeon': null,
      Trichologist: null,
      'Trinity House Pilot': null,
      'Trout Farmer': null,
      'Tug Skipper': null,
      Tunneller: null,
      'Turf Accountant': null,
      'Turkey Farmer': null,
      Turner: null,
      Tutor: null,
      Typesetter: null,
      'Typewriter Engineer': null,
      Typist: null,
      'Tyre Builder': null,
      'Tyre Fitter': null,
      'Tyre Inspector': null,
      'Tyre Technician': null,
      Umpire: null,
      Undertaker: null,
      Underwriter: null,
      Unemployed: null,
      Unknown: null,
      Upholsterer: null,
      Usher: null,
      'VDU Operator': null,
      Valuer: null,
      'Valve Technician': null,
      'Van Driver': null,
      'Vehicle Assessor': null,
      'Vehicle Body Worker': null,
      'Vehicle Engineer': null,
      'Vehicle Technician': null,
      'Vending Machine Filler': null,
      'Vending Machine Technician': null,
      Ventriloquist: null,
      Verger: null,
      'Veterinary Assistant': null,
      'Veterinary Surgeon': null,
      Vicar: null,
      'Violin Maker': null,
      'Voluntary Worker': null,
      'Wages Clerk': null,
      Waiter: null,
      'Waiter / Waitress - Licensed': null,
      'Waiter / Waitress - Unlicensed': null,
      Waitress: null,
      'Warehouse Manager': null,
      Warehouseman: null,
      'Warehouseman/Woman': null,
      Warehousewoman: null,
      'Waste Dealer': null,
      Watchmaker: null,
      'Water Diviner': null,
      'Water Industry Worker': null,
      Weaver: null,
      'Web Designer': null,
      'Weighbridge Clerk': null,
      'Weighbridge Operator': null,
      Welder: null,
      'Welfare Assistant': null,
      'Welfare Officer': null,
      'Welfare Rights Officer': null,
      'Wheel Clamper': null,
      'Wholesale Newspaper Delivery Driver': null,
      'Window Cleaner': null,
      'Window Dresser': null,
      'Windscreen Fitter': null,
      'Wine Merchant': null,
      'Wood Carver': null,
      'Wood Cutter': null,
      'Wood Worker': null,
      'Word Processing Operator': null,
      'Works Manager': null,
      Writer: null,
      'Yacht Master': null,
      'Yard Manager': null,
      'Yoga Teacher': null,
      'Youth Hostel Warden': null,
      'Youth Worker': null,
      'Zoo Keeper': null,
      'Zoo Manager': null,
      Zoologist: null,
      'Zoology Consultant': null
    },
    typesOfBusiness: {
      Abattoir: null,
      Accountancy: null,
      'Acoustic Engineer': null,
      'Actuarial Consultancy': null,
      Acupuncture: null,
      'Addressing/Circularising Services': null,
      Adjuster: null,
      Advertising: null,
      'Aerial Erector': null,
      'Aerial Manufacturer': null,
      'Aerial Photography': null,
      'Aerial Supplier': null,
      'Aerial Survey': null,
      'Aerospace Industry': null,
      'Agricultural Engineer': null,
      'Agricultural Produce Distribution': null,
      Agriculture: null,
      'Air Conditioning': null,
      'Air Transport': null,
      'Aircraft Construction': null,
      'Aircraft Maintenance': null,
      'Aircraft Repair': null,
      Airline: null,
      'Airport Services': null,
      Airports: null,
      'Ambulance Authority': null,
      Amusement: null,
      'Amusement Arcade': null,
      'Amusement Machine Supplier': null,
      'Animal Breeding': null,
      'Animal Feeds': null,
      'Animal Rescue Home': null,
      'Animal Training': null,
      Animals: null,
      Anthropology: null,
      'Antique Restoration': null,
      Antiques: null,
      'Arable Farming': null,
      Arbitration: null,
      Architecture: null,
      'Armed Forces - Foreign': null,
      'Armed Forces - Republic Of Ireland': null,
      'Armed Forces - UK': null,
      'Armed Forces - USA': null,
      Art: null,
      'Art Gallery': null,
      'Art Restoration': null,
      'Art Valuation': null,
      Arts: null,
      'Asphalt Contractor': null,
      'Asphalt/Road Contractors': null,
      Assessor: null,
      Astrology: null,
      Astronomy: null,
      'Auction House': null,
      Auctioneer: null,
      Auditors: null,
      'Baby Food Manufacturer': null,
      'Baby Goods Manufacturer': null,
      'Baby Goods Shop': null,
      Baker: null,
      'Bakers Supplies': null,
      Bakery: null,
      Banking: null,
      'Barrel Makers': null,
      'Bathroom Design': null,
      'Bathroom Installation': null,
      Beauticians: null,
      'Beauty Salon': null,
      'Betting Shop': null,
      'Bingo Hall': null,
      Blacksmith: null,
      'Blast Cleaning': null,
      'Blind Installation': null,
      'Blind Manufacturer': null,
      'Boarding Kennel': null,
      'Boat Builder': null,
      'Boat Hirer': null,
      'Bookmaker - Off Course': null,
      'Bookmaker - On Course': null,
      'Bookmaker/Betting Shop - Off Course': null,
      'Bookmaker/Betting shop - On Course': null,
      Booksellers: null,
      'Bottled Gas Supplier': null,
      'Brass Foundry': null,
      'Breakdown Recovery': null,
      Breeding: null,
      Brewery: null,
      'Brewery Transport': null,
      'Brick Manufacturer': null,
      'Brick Supplier': null,
      'British Army': null,
      Broadcasting: null,
      Builder: null,
      'Builders Merchant': null,
      'Building Society': null,
      'Building Trade': null,
      'Bulk Earth/Rubble Removers': null,
      'Business Consultancy': null,
      'Business Systems': null,
      'Business Training': null,
      Butchers: null,
      'Cabinet Maker': null,
      'Cable Manufacturer': null,
      'Cable TV Installation': null,
      Cafe: null,
      'Camp Site': null,
      'Candle Dealer': null,
      'Car Accessory Dealer': null,
      'Car Delivery': null,
      'Car Hire': null,
      'Car Park Operator': null,
      'Car Sales': null,
      'Car Valeting': null,
      'Caravan Hirer': null,
      'Caravan Sales': null,
      'Caravan Service': null,
      'Caravan Site': null,
      'Caravan/Camp Site': null,
      Carpentry: null,
      'Carpet Fitting': null,
      Cartography: null,
      'Cash & Carry': null,
      Casino: null,
      'Cask Maker': null,
      'Catalogue Co-ordination': null,
      'Catalogue Distribution': null,
      'Catering - Licensed': null,
      'Catering - Unlicensed': null,
      Cattery: null,
      'Ceiling Contractor': null,
      'Cement Suppliers': null,
      'Cement/Concrete Suppliers': null,
      'Central Heating Services': null,
      Charity: null,
      Chartering: null,
      'Chemical Industry': null,
      'Chemical Manufacturer': null,
      'Chemist Shop': null,
      'Child Minding': null,
      'Childrens Panel': null,
      'Chimney Sweeping': null,
      Chiropody: null,
      Choreography: null,
      Cinema: null,
      Circus: null,
      'Citizens Advice Bureau': null,
      'Civil Aviation': null,
      'Civil Engineering': null,
      'Civil Service': null,
      'Civil/Consultant Engineering': null,
      'Cleaning Services': null,
      'Clerical Services': null,
      'Clock & Watch Manufacturer': null,
      'Clock & Watch Repair': null,
      'Clothing Manufacturer': null,
      'Clothing Trade': null,
      Club: null,
      'Coach Hirer': null,
      Coachbuilder: null,
      'Coal Industry': null,
      'Coal Merchant': null,
      'Coffee Shop': null,
      'Coin & Medal Dealer': null,
      'Cold Store': null,
      'Commissioners For Oaths': null,
      Commodities: null,
      'Commodity Brokerage': null,
      Communications: null,
      'Community Service': null,
      'Computer Aided Design': null,
      'Computer Distribution': null,
      'Computer Sales': null,
      'Computer Services': null,
      'Computer Supplies': null,
      Computers: null,
      'Computers - Hardware': null,
      'Computers - Software': null,
      'Concrete Supplier': null,
      'Confectionery Manufacturer': null,
      'Construction Industry': null,
      'Consulting Engineering': null,
      'Contact Lens Manufacturer': null,
      'Container Hire': null,
      Conveyancers: null,
      'Corporate Hospitality': null,
      Cosmetics: null,
      Costumiers: null,
      'Cotton Mill': null,
      'Courier Services': null,
      'Couriers/Delivery Service': null,
      'Crane Hire': null,
      'Crane Manufacturer': null,
      'Crop Spraying': null,
      'Customs and Excise': null,
      'Cutlery Craftsmen': null,
      'Cycle Hire': null,
      'Cycle Shop': null,
      'DIY Store': null,
      Dairy: null,
      'Dairy Farming': null,
      'Data Processing': null,
      'Data Protection': null,
      'Dating Agency': null,
      'Debt Collection': null,
      Decorating: null,
      Delicatessen: null,
      'Delivery Service': null,
      Demolition: null,
      Dentistry: null,
      'Department Store': null,
      'Design Consultancy': null,
      'Desktop Publishing Services': null,
      'Despatch Services': null,
      Discotheque: null,
      Distillers: null,
      Distribution: null,
      'Dock Authority': null,
      'Domestic Appliance Maintenance': null,
      'Domestic Service': null,
      'Double Glazing': null,
      Drainage: null,
      Drapery: null,
      'Driving Authority': null,
      'Driving Instruction': null,
      'Driving School': null,
      'Dry Cleaning': null,
      'Dry Lining': null,
      'Earth Removers': null,
      Ecology: null,
      Education: null,
      'Education - Private': null,
      'Education - State': null,
      'Effluent Disposal': null,
      'Egg Merchants': null,
      'Electrical Appliance Manufacturer': null,
      'Electrical Contractors': null,
      'Electrical Goods Consultancy': null,
      'Electricity Industry': null,
      Electronics: null,
      Embossers: null,
      'Emergency Services': null,
      'Employment Agency': null,
      'Energy Conservation': null,
      'Energy Consultancy': null,
      Engineering: null,
      'Engineering Consultants': null,
      Engraving: null,
      Entertainment: null,
      'Environmental Health': null,
      'Estate Agency': null,
      Excavation: null,
      'Exhibition Centre': null,
      'Exhibition Organisers': null,
      Export: null,
      'Export Agency': null,
      Exporter: null,
      'Fabric Manufacturer': null,
      Fabrications: null,
      Fairground: null,
      Falconry: null,
      'Fancy Goods': null,
      'Fancy Goods Importer': null,
      Farming: null,
      'Fascia Board Installer': null,
      Fashion: null,
      'Fashion Design': null,
      'Fashion House': null,
      'Fast Food': null,
      'Fencing Manufacturer': null,
      'Ferry Service': null,
      'Fertilizer Manufacturer': null,
      'Fibre Glass Manufacturer': null,
      'Filling Station': null,
      'Film Manufacturing': null,
      'Film Processing': null,
      'Film Production': null,
      Films: null,
      'Finance Company': null,
      'Financial Advisors': null,
      'Financial Services': null,
      'Fire Protection': null,
      'Fireplace Installer': null,
      'Fireplace Manufacturer': null,
      'Fish & Chip Shop': null,
      'Fish Farm': null,
      'Fish Merchants': null,
      Fisheries: null,
      Fishing: null,
      'Fishing Rights': null,
      Fishmonger: null,
      'Fitted Bedroom Installer': null,
      'Fitted Kitchen Installer': null,
      'Flooring Construction': null,
      'Flooring Installer': null,
      'Flooring Services': null,
      Florists: null,
      'Flying School': null,
      'Food Exporter': null,
      'Food Importer': null,
      'Food Manufacturer': null,
      'Food Production': null,
      'Food Store': null,
      'Football Pools': null,
      Forestry: null,
      'Fostering/Adoption Agency': null,
      Foundry: null,
      'Freezer Centre': null,
      Freight: null,
      'Freight Agents': null,
      'Freight Forwarders': null,
      'French Polishing': null,
      'Friendly Society': null,
      'Frozen Food Distribution': null,
      'Fuel Distribution': null,
      'Fuel Merchant': null,
      'Funeral Director': null,
      'Fur Trade': null,
      Furniture: null,
      'Furniture Installer': null,
      'Furniture Manufacture': null,
      'Furniture Remover': null,
      'Furniture Repair': null,
      'Furniture Sales': null,
      'Furniture Store': null,
      'Furniture Storer': null,
      Furriers: null,
      Gambling: null,
      'Game Breeders': null,
      Garage: null,
      'Garden Centre': null,
      Gardening: null,
      'Gas - Offshore': null,
      'Gas Exploration': null,
      'Gas Industry': null,
      'Gas/Oil Exploration': null,
      Genealogy: null,
      'General Dealer': null,
      'General Store': null,
      'Gift Shop': null,
      'Glass Manufacture': null,
      Glaziers: null,
      'Golf Club': null,
      'Government - Foreign': null,
      'Government - Republic Of Ireland': null,
      'Government - UK': null,
      'Government - UK Central': null,
      'Gown Mantle or Fur Trade': null,
      'Gown Trade': null,
      'Grain Merchants': null,
      'Grain Mill': null,
      'Graphic Design': null,
      Graphology: null,
      Greengrocer: null,
      'Greeting Card Manufacturer': null,
      'Greeting Card Sales': null,
      'Greyhound Racing': null,
      Greyhounds: null,
      'Grit Blasters': null,
      Grocer: null,
      'Ground Maintenance': null,
      'Guest House': null,
      'Guest House - Licensed': null,
      'Guest House - Unlicensed': null,
      'Guttering Installer': null,
      'HM Forces': null,
      Hairdressing: null,
      'Harbour Authority': null,
      'Harbour Board': null,
      'Hardware Manufacturer': null,
      'Hardware Retailer': null,
      'Haulage Contractors': null,
      'Health Authority': null,
      'Health Care - NHS': null,
      'Health Care - Private': null,
      'Health Centre': null,
      'Health Club': null,
      'Health Products Distribution': null,
      'Heating Consultant': null,
      'Heating Services': null,
      'Hire Purchase': null,
      'Hobby Shop': null,
      'Holiday Accommodation': null,
      'Holiday Camp': null,
      'Holiday Centre': null,
      'Home Help Services': null,
      'Honey Producer': null,
      Horses: null,
      Horticulture: null,
      Hospital: null,
      'Hotel - Licensed': null,
      'Hotel - Unlicensed': null,
      'House Builders': null,
      'Housing Association': null,
      'Housing Developers': null,
      Hypermarket: null,
      'Ice Cream': null,
      'Ice Cream Manufacturer': null,
      'Ice Cream Shop': null,
      'Ice Merchant': null,
      'Ice Rink': null,
      Import: null,
      'Import/Export': null,
      Importers: null,
      'Industrial Building Manufacturer': null,
      'Industrial Relations': null,
      'Information Technology': null,
      'Inland Revenue': null,
      Inn: null,
      'Inspection Services': null,
      'Instant Print Services': null,
      'Insulation Engineers': null,
      Insurance: null,
      'Insurance Advisor': null,
      'Insurance Broker': null,
      'Insurance Company': null,
      'Insurance Consultant': null,
      'Interior Design': null,
      Investment: null,
      'Iron Foundry': null,
      'Ironing Services': null,
      Ironmonger: null,
      'Jam & Preserve Manufacturer': null,
      Jewellers: null,
      Jewellery: null,
      'Jewellery Manufacturer': null,
      Joinery: null,
      'Keep Fit': null,
      Kennels: null,
      'Kitchen Equipment Manufacturer': null,
      'Kitchen Manufacturer': null,
      'Kitchen Planners': null,
      'Knitwear Manufacturer': null,
      'LPG Suppliers': null,
      Laboratory: null,
      'Ladder Manufacturer': null,
      'Land Clearance': null,
      'Land Draining': null,
      Landscaping: null,
      'Lathe Manufacturer': null,
      Launderette: null,
      Laundry: null,
      'Law and Order': null,
      'Lawnmowers & Garden Machinery': null,
      Lawyers: null,
      'Leasing Company': null,
      Legal: null,
      'Legal System': null,
      'Leisure Centre': null,
      'Leisure Goods': null,
      'Lens Manufacturer': null,
      Library: null,
      'Licensed Premises': null,
      'Lift Installers': null,
      'Lift Maintenance': null,
      Lighting: null,
      'Lighting Installers': null,
      'Linen Hire': null,
      'Livery Stables': null,
      'Livestock Carriers': null,
      'Livestock Farming': null,
      'Local Government': null,
      'Local Government Authority': null,
      'Local Newspaper': null,
      Locksmiths: null,
      'Loft Insulation': null,
      'Log And Firewood': null,
      'Loss Adjusting': null,
      'Machine Tool Supplier': null,
      'Machinery Dealers': null,
      'Mail Order': null,
      'Mail Order Supplier': null,
      'Maintenance Services': null,
      'Management Consultancy': null,
      'Management Training': null,
      'Mantle Trade': null,
      Manufacturing: null,
      'Manufacturing Chemist': null,
      Marina: null,
      'Market Garden': null,
      'Market Gardeners': null,
      'Market Research': null,
      'Market Trading': null,
      Marketing: null,
      'Marriage Guidance': null,
      'Material Manufacturer': null,
      'Mattress Manufacturer': null,
      'Meat Market': null,
      'Meat Products': null,
      'Mechanical Handling': null,
      'Medical Suppliers': null,
      'Medical research': null,
      'Merchant Navy': null,
      'Metal Founders': null,
      'Metal Treatment': null,
      'Microfilm Services': null,
      'Milk Delivery': null,
      Mining: null,
      'Mobile Food': null,
      'Mobile Shop': null,
      'Model Manufacturer': null,
      Moneylenders: null,
      'Monumental Masons': null,
      'Motor Factor/Parts': null,
      'Motor Manufacture': null,
      'Motor Organisation': null,
      'Motor Trade': null,
      'Motorcar Racing': null,
      'Motorcycle Racing': null,
      'Motorcycle Trade': null,
      'Motoring Organisation': null,
      Museums: null,
      'Music Publisher': null,
      'Music Retailer': null,
      'Music School': null,
      'Musical Instrument Manufacturer': null,
      'National Newspaper': null,
      'National Trust': null,
      'National Trust For Scotland': null,
      Newsagents: null,
      'Newspaper Wholesaler': null,
      'Night Club': null,
      'Noise Control': null,
      'None - Household Duties': null,
      'None - Not Employed due to Disability': null,
      'None - Retired': null,
      'None - Student': null,
      'Not in Employment': null,
      Notaries: null,
      'Nuclear Energy': null,
      Nursery: null,
      'Nursery School': null,
      'Nursing Home': null,
      'Oceanographic Survey': null,
      'Off Licence': null,
      'Off Licence Store': null,
      'Office Equipment Repairer': null,
      'Office Equipment Supplier': null,
      'Office Fitters': null,
      'Office Services': null,
      'Oil - Offshore': null,
      'Oil Company': null,
      'Oil Exploration': null,
      'Oil Terminal Operator': null,
      'Opinion Polls': null,
      'Optical Services': null,
      Optician: null,
      Optometrist: null,
      'Organ Building': null,
      'Outdoor Pursuits': null,
      'Overall Hire & Maintenance': null,
      'Packers And Storers': null,
      'Paint Manufacturer': null,
      'Paint Spraying': null,
      Painting: null,
      'Painting Contractor': null,
      'Painting and Decorating': null,
      'Panel Beating': null,
      'Paper Manufacture': null,
      'Paperbag And Sack Manufacturer': null,
      'Parcel Delivery': null,
      'Partition Erector': null,
      'Passenger Transport': null,
      'Patent Office': null,
      Pawnbroker: null,
      'Performing Arts': null,
      'Personnel Consultancy': null,
      'Pest And Vermin Control': null,
      'Pet Feed': null,
      'Pet Services': null,
      'Pet Shop': null,
      'Petrochemical Industry': null,
      'Petrol Pump Maintenance': null,
      'Petrol Station': null,
      'Pharmaceutical Supplier': null,
      Pharmacy: null,
      'Photo Engraving': null,
      'Photo Processing And Printing': null,
      'Photographic Equipment Repairs': null,
      Photography: null,
      Physiotherapy: null,
      'Piano Sales And Repairs': null,
      'Piano Tuning': null,
      'Picture Framing': null,
      'Pig Farming': null,
      'Pipe Cleaning': null,
      'Pizza Delivery': null,
      'Planning Consultancy': null,
      'Plant Hire': null,
      'Plant Manufacturer': null,
      'Plant Sales': null,
      'Plastic Sheeting Manufacturer': null,
      'Plastics Manufacture': null,
      'Playground Equipment Manufacturer': null,
      'Please enter': null,
      'Plumbers Merchant': null,
      Plumbing: null,
      'Plumbing & Heating': null,
      'Political Consultancy': null,
      'Political Party': null,
      'Pollution Control': null,
      'Pony Trap': null,
      'Pool Table Manufacturer': null,
      'Pool Table Repairer': null,
      'Pool Table Sales': null,
      'Port Authority': null,
      'Portable Building': null,
      'Post Office': null,
      'Post Office Services': null,
      'Potato Merchant': null,
      Pottery: null,
      'Poultry Farm': null,
      'Poultry Farming': null,
      'Pre-Stressed Concrete Manufacturer': null,
      'Presentation Materials Supplier': null,
      'Press Cutting Agency': null,
      'Pressure Cleaning': null,
      'Print Type Services': null,
      Printer: null,
      Printing: null,
      'Printing Engineering Services': null,
      'Prison Service': null,
      'Private / Public Hire': null,
      'Private Hire': null,
      'Private Investigation': null,
      'Private School': null,
      'Process Engraving': null,
      'Produce Importers': null,
      'Project Management': null,
      'Promotional Consultancy': null,
      'Property Consultants': null,
      'Property Developers': null,
      'Property Letting': null,
      'Property Owner': null,
      'Property Services': null,
      'Protective Clothing Manufacturer': null,
      'Protective Clothing Supplier': null,
      Psychiatry: null,
      Psychology: null,
      Psychotherapy: null,
      'Public Address System Supplier': null,
      'Public Hire': null,
      'Public Hirer': null,
      'Public House': null,
      'Public Relation Consultancy': null,
      'Public School': null,
      'Public Transport': null,
      Publishing: null,
      'Publishing - Local Press': null,
      'Publishing - National Press': null,
      'Quality Assurance': null,
      'Quantity Surveyors': null,
      Quarry: null,
      Quarrying: null,
      RSPCA: null,
      'Race Course': null,
      Racehorses: null,
      'Racing Or Rallies': null,
      'Racing Stable': null,
      'Radiator Repairs': null,
      'Radiator Sales': null,
      Radiography: null,
      'Rag Merchants': null,
      Railway: null,
      'Rating And Valuation': null,
      'Record Company': null,
      'Record Shop': null,
      'Recording Services': null,
      'Recovery Services': null,
      'Recruitment Agency': null,
      Recycling: null,
      Refrigeration: null,
      'Refuse Collection': null,
      'Refuse Treatment': null,
      'Reinforced Concrete Manufacturer': null,
      Religion: null,
      'Removal Contractors': null,
      'Remover And Storer': null,
      'Rescue Services': null,
      'Residential Home': null,
      Restaurant: null,
      'Restaurant - Licensed': null,
      'Restaurant - Unlicensed': null,
      'Retailer - Mobile': null,
      Retailing: null,
      'Riding School': null,
      'Ring Sports': null,
      'River Authority': null,
      'Road Haulage': null,
      'Road Repair': null,
      'Road Surfacing': null,
      'Robotics Manufacturer': null,
      'Roller Shutter Manufacturer': null,
      'Roofing Services': null,
      'Rope Merchant': null,
      Roughcasters: null,
      'Royal Air Force': null,
      'Royal Navy': null,
      'Rubbish Disposal': null,
      'Rubble Removers': null,
      'Rustproofing Services': null,
      'Saddlers And Harness Makers': null,
      'Safe Installation And Removal': null,
      'Safe Manufacturer': null,
      'Safety Consultancy': null,
      'Safety Equipment Supplier': null,
      'Sail Makers And Repairers': null,
      'Sailing Equipment Supplier': null,
      Salvage: null,
      'Sample Distribution': null,
      'Sample Distributors': null,
      'Sand And Gravel Merchants': null,
      'Sand Blasters': null,
      'Sand/Gravel': null,
      'Satellite TV And Equipment Suppliers': null,
      'Satellite TV Installers': null,
      'Saw Sales And Repairs': null,
      Sawmill: null,
      'Scaffolding Erection': null,
      'Scaffolding Hire': null,
      School: null,
      'School For Performing Arts': null,
      'Scientific Research': null,
      'Scrap Disposal': null,
      'Scrap Metal Merchants': null,
      'Scrap Waste And Effluent Disposal': null,
      'Screen Printing': null,
      Screenwriting: null,
      Sculptors: null,
      'Secondhand Dealers': null,
      'Secretarial Services': null,
      'Secretarial Training': null,
      'Security Equipment': null,
      'Security Services': null,
      Seedsmen: null,
      'Self Catering Accommodation': null,
      'Self Drive Hire': null,
      Sewage: null,
      'Sharpening Services': null,
      'Sheet Metal Work': null,
      'Sheriff Officers': null,
      'Ship Building And Repair': null,
      'Ship Chandlery': null,
      'Ship Painting': null,
      Shipbroking: null,
      'Shipping And Forwarding Agency': null,
      'Shipping Company': null,
      Shipyard: null,
      'Shoe Manufacturers': null,
      'Shoe Repair': null,
      'Shoe Shop': null,
      'Shooting Rights': null,
      'Shop Fitting': null,
      'Shopping Centre': null,
      'Shot Blasters': null,
      'Shutter Manufacturer': null,
      'Sightseeing Tours Operator': null,
      'Sign Making': null,
      Signwriting: null,
      'Site Clearance': null,
      'Site Investigation': null,
      'Skating Rink': null,
      'Ski Centre': null,
      'Skip Hire': null,
      'Skip Maintenance': null,
      Slaughterhouse: null,
      'Slimming Distribution': null,
      'Snack Bar': null,
      'Snooker Club': null,
      'Social Club': null,
      'Social Services': null,
      'Soft Drinks Manufacturer': null,
      'Soft Drinks Supplier': null,
      'Soil Engineers': null,
      'Solar Panel Manufacturer': null,
      'Solar Panel Supplier': null,
      Solicitors: null,
      'Sound Proofing': null,
      Spinners: null,
      Sports: null,
      'Sports - Professional': null,
      'Sports Centre': null,
      'Sports Club': null,
      'Sports Goods Shop': null,
      'Sports Ground': null,
      'Sports Promotion': null,
      'Sportswear Manufacturer': null,
      'Sportswear Supplier': null,
      Stables: null,
      'Stamp Dealers': null,
      'Stamp Manufacturer': null,
      'Stamp Supplier Stationers': null,
      Stationers: null,
      'Steel Industry': null,
      'Steel Stockholders': null,
      'Sterilizing Services': null,
      Stockbroking: null,
      Stonemasonry: null,
      'Street Trading': null,
      'Street/Market Trading': null,
      'Structural Engineering': null,
      Studio: null,
      Sunbed: null,
      Supermarket: null,
      Surveying: null,
      Surveyors: null,
      'Suspended Ceiling Repairer': null,
      'Swimming Pool': null,
      'TV And Radio': null,
      'TV And Video Rental': null,
      'Tailor And Outfitter': null,
      'Take Away Food Supplier': null,
      'Tank Cleaning Services': null,
      'Tarpaulin Manufacturer': null,
      'Tarpaulin Suppliers': null,
      'Tattoo Parlour/Clinic': null,
      'Tax Consultancy': null,
      'Taxi Service': null,
      Taxidermy: null,
      'Tea Importer': null,
      'Tea Merchant': null,
      'Tea Room': null,
      'Technical College': null,
      'Telecommunication Equipment Suppliers': null,
      Telecommunications: null,
      Telemarketing: null,
      'Telephone Answering Service': null,
      Telesales: null,
      Television: null,
      'Television Hire': null,
      'Television Production': null,
      'Television Repairer': null,
      'Television Sales': null,
      'Tent And Marquee Hirer': null,
      'Territorial Army': null,
      'Textile Manufacturer': null,
      Thatching: null,
      Theatre: null,
      'Theatrical Suppliers': null,
      'Theme Park': null,
      Tilers: null,
      'Timber Importers': null,
      'Timber Merchants': null,
      'Timber Preservation': null,
      'Timeshare Operators': null,
      'Tobacco Importer': null,
      'Tobacco Manufacturer': null,
      Tobacconist: null,
      'Tomato Grower': null,
      'Tool Hire': null,
      'Tour Operator': null,
      'Tourist Board': null,
      'Tourist Information': null,
      'Towel Supplier': null,
      'Toy And Game Manufacturer': null,
      'Toy And Game Supplier': null,
      'Trade Association': null,
      'Trade Demonstration': null,
      'Trade Union': null,
      'Trading Estate': null,
      'Trading Standards Enforcement': null,
      'Trailer Manufacturer': null,
      'Trailer Supplier': null,
      'Training Consultancy': null,
      Translators: null,
      'Transport - PSV': null,
      'Transport - Road': null,
      'Travel And Tourism': null,
      'Trinity House': null,
      'Trust Company': null,
      Tupperware: null,
      'Turf Accountants': null,
      'Typewriter Services': null,
      'Tyre Dealer': null,
      'Tyre Manufacturer': null,
      'Tyre Supplier And Fitting': null,
      Undertaker: null,
      'Underwater Inspection': null,
      'Underwriting Agency': null,
      Unemployed: null,
      'Uniform Manufacturer': null,
      University: null,
      Unknown: null,
      Upholstery: null,
      'Vacuum Cleaner Repairs And Service': null,
      Valuation: null,
      'Van And Lorry Hirer': null,
      'Vehicle Hire - Self Drive': null,
      'Vehicle Repairer': null,
      'Vending Machine Manufacturer': null,
      'Vending Machine Supplier': null,
      'Vending Services': null,
      Veneering: null,
      'Venetian Blind Manufacturer': null,
      'Venetian Blind Supplier': null,
      Ventilation: null,
      'Vermin Control': null,
      Veterinary: null,
      'Veterinary Supplies': null,
      'Veterinary Surgeons': null,
      'Video Hire': null,
      'Video Services': null,
      Vineyard: null,
      'Voluntary Organisation': null,
      'Wallpaper Manufacturer/Supplier': null,
      'Washing Machine Repairs And Servicing': null,
      'Waste Disposal': null,
      Watchmaker: null,
      'Water Industry': null,
      'Water Sports Centre': null,
      'Waterproof Cover Manufacturer': null,
      'Waterproof Cover Supplier': null,
      'Weather Forecasting': null,
      'Weather Services': null,
      'Weights And Measures': null,
      Welding: null,
      'Welfare Organisation': null,
      'Whisky Blenders': null,
      Wholesaler: null,
      'Window Cleaning': null,
      'Wine And Spirit Merchants': null,
      'Wine Bar': null,
      'Wine Makers': null,
      'Wire Rope Manufacturer': null,
      'Wood Carving': null,
      'Wood Preservation': null,
      'Woodshavings Contractor': null,
      Woodworking: null,
      'Woodworm And Dry Rot Control': null,
      'Woollen Goods Manufacturer': null,
      'Woollen Goods Shop': null,
      'Woollen Mill': null,
      'Wrought Iron Manufacturer': null,
      'Yacht Building': null,
      'Yacht Chandlery': null,
      'Yacht Service And Management': null,
      'Yarn Spinning': null,
      'Youth Hostel Organisation': null,
      'Youth Organisation': null,
      'Zoo Operator': null,
      'Other ': null
    }
  },
  answers: {},
  functionReferences:
    '{\n  f001: function defaultAnswerCoverStartF29621e03d1e11eab675ffaf1ec7b93a() {\n    return this.today;\n  },\n  f002: function coverStartF29621e03d1e11eab675ffaf1ec7b93a_1DateValidatorExpression() {\n    return this.todayAsDate();\n  },\n  f003: function coverStartF29621e03d1e11eab675ffaf1ec7b93a_1DateValidatorExpression() {\n    return this.getTodayPlus(45, \'day\', \'Date\');\n  },\n  f004: function isQuestionDependentAnswer0PropertyNameNumberEd919978ffcd42a7b5073f728e1f8929(_ref) {\n    var questionId = _ref.questionId,\n        sourceQuestionId = _ref.sourceQuestionId,\n        groupNumber = _ref.groupNumber,\n        eventType = _ref.eventType;\n    return eventType === \'change\';\n  },\n  f005: function isQuestionDependentAnswer0Postcode2a9c97ad838a429dad36ee92fe8954cd(_ref2) {\n    var questionId = _ref2.questionId,\n        sourceQuestionId = _ref2.sourceQuestionId,\n        groupNumber = _ref2.groupNumber,\n        eventType = _ref2.eventType;\n    return eventType === \'change\';\n  },\n  f006: function addressLookupButton41569e85b7d341ae8ab720f878933158_0CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var showingResults = this.isElementVisible(\'225c6c3d-df13-411e-ad19-5fddaf372aac\');\n    var hasAddressId = !!fields.get(\'86676452-9631-4ca5-a93d-e0217990a253\').value;\n    var usingLookup = fields.get(\'0eaee082-5b1f-4d89-9060-bb34d2649f45\').value !== \'true\';\n    var isOk = !usingLookup || showingResults || usingLookup && hasAddressId;\n    return isOk;\n  },\n  f007: function isQuestionDependentAnswer0AddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref3) {\n    var questionId = _ref3.questionId,\n        sourceQuestionId = _ref3.sourceQuestionId,\n        groupNumber = _ref3.groupNumber,\n        eventType = _ref3.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f008: function dependentAnswerAddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref4) {\n    var questionId = _ref4.questionId,\n        sourceQuestionId = _ref4.sourceQuestionId,\n        groupNumber = _ref4.groupNumber,\n        eventType = _ref4.eventType;\n    return this.getAnswer(sourceQuestionId).partial.propertyNameNumber;\n  },\n  f009: function isQuestionDependentAnswer0AddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref5) {\n    var questionId = _ref5.questionId,\n        sourceQuestionId = _ref5.sourceQuestionId,\n        groupNumber = _ref5.groupNumber,\n        eventType = _ref5.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f010: function dependentAnswerAddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref6) {\n    var questionId = _ref6.questionId,\n        sourceQuestionId = _ref6.sourceQuestionId,\n        groupNumber = _ref6.groupNumber,\n        eventType = _ref6.eventType;\n    return this.getAnswer(sourceQuestionId).partial.addressLine1;\n  },\n  f011: function isQuestionDependentAnswer0AddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref7) {\n    var questionId = _ref7.questionId,\n        sourceQuestionId = _ref7.sourceQuestionId,\n        groupNumber = _ref7.groupNumber,\n        eventType = _ref7.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f012: function dependentAnswerAddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref8) {\n    var questionId = _ref8.questionId,\n        sourceQuestionId = _ref8.sourceQuestionId,\n        groupNumber = _ref8.groupNumber,\n        eventType = _ref8.eventType;\n    return this.getAnswer(sourceQuestionId).partial.addressLine2;\n  },\n  f013: function isQuestionDependentAnswer0AddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref9) {\n    var questionId = _ref9.questionId,\n        sourceQuestionId = _ref9.sourceQuestionId,\n        groupNumber = _ref9.groupNumber,\n        eventType = _ref9.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f014: function dependentAnswerAddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref10) {\n    var questionId = _ref10.questionId,\n        sourceQuestionId = _ref10.sourceQuestionId,\n        groupNumber = _ref10.groupNumber,\n        eventType = _ref10.eventType;\n    return this.getAnswer(sourceQuestionId).partial.townCity;\n  },\n  f015: function isQuestionDependentAnswer0AddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref11) {\n    var questionId = _ref11.questionId,\n        sourceQuestionId = _ref11.sourceQuestionId,\n        groupNumber = _ref11.groupNumber,\n        eventType = _ref11.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f016: function dependentAnswerAddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref12) {\n    var questionId = _ref12.questionId,\n        sourceQuestionId = _ref12.sourceQuestionId,\n        groupNumber = _ref12.groupNumber,\n        eventType = _ref12.eventType;\n    return this.getAnswer(sourceQuestionId).partial.county;\n  },\n  f017: function isQuestionDependentAnswer0AddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref13) {\n    var questionId = _ref13.questionId,\n        sourceQuestionId = _ref13.sourceQuestionId,\n        groupNumber = _ref13.groupNumber,\n        eventType = _ref13.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f018: function dependentAnswerAddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref14) {\n    var questionId = _ref14.questionId,\n        sourceQuestionId = _ref14.sourceQuestionId,\n        groupNumber = _ref14.groupNumber,\n        eventType = _ref14.eventType;\n    return this.getAnswer(sourceQuestionId).partial.postcode;\n  },\n  f019: function isQuestionDependentAnswer0AddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref15) {\n    var questionId = _ref15.questionId,\n        sourceQuestionId = _ref15.sourceQuestionId,\n        groupNumber = _ref15.groupNumber,\n        eventType = _ref15.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f020: function dependentAnswerAddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref16) {\n    var questionId = _ref16.questionId,\n        sourceQuestionId = _ref16.sourceQuestionId,\n        groupNumber = _ref16.groupNumber,\n        eventType = _ref16.eventType;\n    return this.getAnswer(sourceQuestionId).partial.addressId;\n  },\n  f021: function isQuestionDependentAnswer0AddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref17) {\n    var questionId = _ref17.questionId,\n        sourceQuestionId = _ref17.sourceQuestionId,\n        groupNumber = _ref17.groupNumber,\n        eventType = _ref17.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f022: function dependentAnswerAddressLookupResults225c6c3ddf13411ead195fddaf372aac(_ref18) {\n    var questionId = _ref18.questionId,\n        sourceQuestionId = _ref18.sourceQuestionId,\n        groupNumber = _ref18.groupNumber,\n        eventType = _ref18.eventType;\n    return this.getAnswer(sourceQuestionId).partial.addressLookupJson;\n  },\n  f023: function addressLookupResults225c6c3ddf13411ead195fddaf372aac_0RequiredValidatorCondition(fieldName, fieldValue, fields, eventType) {\n    return this.isElementVisible(fieldName);\n  },\n  f024: function isQuestionDependentAnswer0AddressId8667645296314ca5a93de0217990a253(_ref19) {\n    var questionId = _ref19.questionId,\n        sourceQuestionId = _ref19.sourceQuestionId,\n        groupNumber = _ref19.groupNumber,\n        eventType = _ref19.eventType;\n    return this.getAnswerValue("86676452-9631-4ca5-a93d-e0217990a253") === \'\';\n  },\n  f025: function addressLine193680d0a8dcb40fda87485a31a1b7c7b_0RequiredValidatorCondition(fieldName, fieldValue, fields, eventType) {\n    return this.isElementVisible(fieldName);\n  },\n  f026: function townCityBe18020655aa403da0b35854c97665b0_0RequiredValidatorCondition(fieldName, fieldValue, fields, eventType) {\n    return this.isElementVisible(fieldName);\n  },\n  f027: function county6e5b62a7f89a48d3b75846b099d35eb6_0RequiredValidatorCondition(fieldName, fieldValue, fields, eventType) {\n    return this.isElementVisible(fieldName);\n  },\n  f028: function isQuestionPrerequisite0House021d512c8fe24463bfaa0b6d33141d5b(_ref20) {\n    var questionId = _ref20.questionId,\n        sourceQuestionId = _ref20.sourceQuestionId,\n        groupNumber = _ref20.groupNumber,\n        eventType = _ref20.eventType;\n    return this.getAnswerValue("db024fe7-4c2d-41b3-80ea-2ce74ad8d869") === "House";\n  },\n  f029: function isQuestionPrerequisite0Flat32440682463d462da633a63614a52983(_ref21) {\n    var questionId = _ref21.questionId,\n        sourceQuestionId = _ref21.sourceQuestionId,\n        groupNumber = _ref21.groupNumber,\n        eventType = _ref21.eventType;\n    return this.getAnswerValue("db024fe7-4c2d-41b3-80ea-2ce74ad8d869") === "Flat";\n  },\n  f030: function isQuestionPrerequisite0Bungalow2e9b33c71e5f44339981a6e270f6b4e2(_ref22) {\n    var questionId = _ref22.questionId,\n        sourceQuestionId = _ref22.sourceQuestionId,\n        groupNumber = _ref22.groupNumber,\n        eventType = _ref22.eventType;\n    return this.getAnswerValue("db024fe7-4c2d-41b3-80ea-2ce74ad8d869") === "Bungalow";\n  },\n  f031: function isQuestionPrerequisite0Other30ef1e9f752f454fa1540cc440f6ee7c(_ref23) {\n    var questionId = _ref23.questionId,\n        sourceQuestionId = _ref23.sourceQuestionId,\n        groupNumber = _ref23.groupNumber,\n        eventType = _ref23.eventType;\n    return this.getAnswerValue("db024fe7-4c2d-41b3-80ea-2ce74ad8d869") === "Other";\n  },\n  f032: function yearBuilt068552d9e0b546109b6cf6286491b95b_1IntegerValidatorExpression() {\n    return 1000;\n  },\n  f033: function yearBuilt068552d9e0b546109b6cf6286491b95b_1IntegerValidatorExpression() {\n    return this.currentYear;\n  },\n  f034: function isQuestionPrerequisite0ValidateButton0a6c86ed94284de3b52aec94cb99ba4d(_ref24) {\n    var questionId = _ref24.questionId,\n        sourceQuestionId = _ref24.sourceQuestionId,\n        groupNumber = _ref24.groupNumber,\n        eventType = _ref24.eventType;\n    return false;\n  },\n  f035: function isQuestionPrerequisite0WallMaterialOther0a249ee03d3311eaa5a2976afc8b4d0a(_ref25) {\n    var questionId = _ref25.questionId,\n        sourceQuestionId = _ref25.sourceQuestionId,\n        groupNumber = _ref25.groupNumber,\n        eventType = _ref25.eventType;\n    return this.getAnswerValue("bf942e40-3d32-11ea-a5a2-976afc8b4d0a") === \'ky99\';\n  },\n  f036: function isQuestionPrerequisite0FlatRoofPercentage15b30c603d3811ea9270e124e355055b(_ref26) {\n    var questionId = _ref26.questionId,\n        sourceQuestionId = _ref26.sourceQuestionId,\n        groupNumber = _ref26.groupNumber,\n        eventType = _ref26.eventType;\n    return this.getAnswerValue("45a50da0-3d34-11ea-9262-3fcbef26986f") === true;\n  },\n  f037: function isQuestionPrerequisite0PropertyPartListingGrade7c78dce03d3811ea9270e124e355055b(_ref27) {\n    var questionId = _ref27.questionId,\n        sourceQuestionId = _ref27.sourceQuestionId,\n        groupNumber = _ref27.groupNumber,\n        eventType = _ref27.eventType;\n    return this.getAnswerValue("55a91700-3d34-11ea-9262-3fcbef26986f") === true;\n  },\n  f038: function isQuestionPrerequisite0OutbuildingsCoverTotalAmount712c0f703d3711ea9270e124e355055b(_ref28) {\n    var questionId = _ref28.questionId,\n        sourceQuestionId = _ref28.sourceQuestionId,\n        groupNumber = _ref28.groupNumber,\n        eventType = _ref28.eventType;\n    return this.getAnswerValue("99aa5760-3d35-11ea-9270-e124e355055b") === false;\n  },\n  f039: function isQuestionPrerequisite0StateOfRepairReason53c3a828b2fd4cb5a3cba97e4af203fc(_ref29) {\n    var questionId = _ref29.questionId,\n        sourceQuestionId = _ref29.sourceQuestionId,\n        groupNumber = _ref29.groupNumber,\n        eventType = _ref29.eventType;\n    return this.getAnswerValue("db0859a0-3d35-11ea-9270-e124e355055b") === false;\n  },\n  f040: function isQuestionPrerequisite0GroundMovementYear287f2f103d3b11ea9270e124e355055b(_ref30) {\n    var questionId = _ref30.questionId,\n        sourceQuestionId = _ref30.sourceQuestionId,\n        groupNumber = _ref30.groupNumber,\n        eventType = _ref30.eventType;\n    return this.getAnswerValue("groundMovement") && this.getAnswerValue("groundMovement").length;\n  },\n  f041: function groundMovementYear287f2f103d3b11ea9270e124e355055b_1IntegerValidatorExpression() {\n    return 1753;\n  },\n  f042: function groundMovementYear287f2f103d3b11ea9270e124e355055b_1IntegerValidatorExpression() {\n    return this.currentYear;\n  },\n  f043: function isQuestionPrerequisite0ReiteratedSubsidence7be34c403d3b11ea9270e124e355055b(_ref31) {\n    var questionId = _ref31.questionId,\n        sourceQuestionId = _ref31.sourceQuestionId,\n        groupNumber = _ref31.groupNumber,\n        eventType = _ref31.eventType;\n    return this.getAnswerValue("groundMovement") && this.getAnswerValue("groundMovement").length;\n  },\n  f044: function isQuestionPrerequisite0GroundMovementCauseEfb3bc403d3b11ea9270e124e355055b(_ref32) {\n    var questionId = _ref32.questionId,\n        sourceQuestionId = _ref32.sourceQuestionId,\n        groupNumber = _ref32.groupNumber,\n        eventType = _ref32.eventType;\n    return this.getAnswerValue("groundMovement") && this.getAnswerValue("groundMovement").length;\n  },\n  f045: function isQuestionPrerequisite0SubsidenceAffectedStructure2623bd703d3c11ea9270e124e355055b(_ref33) {\n    var questionId = _ref33.questionId,\n        sourceQuestionId = _ref33.sourceQuestionId,\n        groupNumber = _ref33.groupNumber,\n        eventType = _ref33.eventType;\n    return this.getAnswerValue("groundMovement") && this.getAnswerValue("groundMovement").length;\n  },\n  f046: function isQuestionPrerequisite0SubsidenceAffectedNearbyProperties78a73ea03d3c11ea9270e124e355055b(_ref34) {\n    var questionId = _ref34.questionId,\n        sourceQuestionId = _ref34.sourceQuestionId,\n        groupNumber = _ref34.groupNumber,\n        eventType = _ref34.eventType;\n    return this.getAnswerValue("groundMovement") && this.getAnswerValue("groundMovement").length;\n  },\n  f047: function isQuestionPrerequisite0SubsidenceCauseRectifiedD129efa03d3c11ea9270e124e355055b(_ref35) {\n    var questionId = _ref35.questionId,\n        sourceQuestionId = _ref35.sourceQuestionId,\n        groupNumber = _ref35.groupNumber,\n        eventType = _ref35.eventType;\n    return this.getAnswerValue("groundMovement") && this.getAnswerValue("groundMovement").length;\n  },\n  f048: function isQuestionPrerequisite0MiningHistory0675e3303d3d11ea9270e124e355055b(_ref36) {\n    var questionId = _ref36.questionId,\n        sourceQuestionId = _ref36.sourceQuestionId,\n        groupNumber = _ref36.groupNumber,\n        eventType = _ref36.eventType;\n    return this.getAnswerValue("groundMovement") && this.getAnswerValue("groundMovement").length;\n  },\n  f049: function isQuestionPrerequisite0SubsidenceValuation15eceed03d3d11ea9270e124e355055b(_ref37) {\n    var questionId = _ref37.questionId,\n        sourceQuestionId = _ref37.sourceQuestionId,\n        groupNumber = _ref37.groupNumber,\n        eventType = _ref37.eventType;\n    return this.getAnswerValue("groundMovement") && this.getAnswerValue("groundMovement").length;\n  },\n  f050: function isQuestionPrerequisite0SubsidenceValuationReport66bb6a903dcd11eab29ccd65fd300111(_ref38) {\n    var questionId = _ref38.questionId,\n        sourceQuestionId = _ref38.sourceQuestionId,\n        groupNumber = _ref38.groupNumber,\n        eventType = _ref38.eventType;\n    return this.getAnswerValue("15eceed0-3d3d-11ea-9270-e124e355055b") === true;\n  },\n  f051: function isQuestionPrerequisite0NearbyTrees4f244d603d3d11ea9270e124e355055b(_ref39) {\n    var questionId = _ref39.questionId,\n        sourceQuestionId = _ref39.sourceQuestionId,\n        groupNumber = _ref39.groupNumber,\n        eventType = _ref39.eventType;\n    return this.getAnswerValue("groundMovement") && this.getAnswerValue("groundMovement").length;\n  },\n  f052: function isQuestionDependentAction0NearbyTrees4f244d603d3d11ea9270e124e355055b(_ref40) {\n    var questionId = _ref40.questionId,\n        sourceQuestionId = _ref40.sourceQuestionId,\n        groupNumber = _ref40.groupNumber,\n        eventType = _ref40.eventType;\n    return this.getAnswerValue(\'nearbyTrees\') === true && !this.getQuestion({\n      questionId: \'129bf730-3dce-11ea-b29c-cd65fd300111\',\n      groupNumber: 1\n    });\n  },\n  f053: function isQuestionPrerequisite0TreeLocation129bf7303dce11eab29ccd65fd300111(_ref41) {\n    var questionId = _ref41.questionId,\n        sourceQuestionId = _ref41.sourceQuestionId,\n        groupNumber = _ref41.groupNumber,\n        eventType = _ref41.eventType;\n    return this.getAnswerValue("4f244d60-3d3d-11ea-9270-e124e355055b") === true;\n  },\n  f054: function isQuestionPrerequisite0NearbyTreeDistance775e7da03dce11eab29ccd65fd300111(_ref42) {\n    var questionId = _ref42.questionId,\n        sourceQuestionId = _ref42.sourceQuestionId,\n        groupNumber = _ref42.groupNumber,\n        eventType = _ref42.eventType;\n    return this.getAnswerValue("4f244d60-3d3d-11ea-9270-e124e355055b") === true;\n  },\n  f055: function isQuestionPrerequisite0NearbyTreeDetailsB08138303dcd11eab29ccd65fd300111(_ref43) {\n    var questionId = _ref43.questionId,\n        sourceQuestionId = _ref43.sourceQuestionId,\n        groupNumber = _ref43.groupNumber,\n        eventType = _ref43.eventType;\n    return this.getAnswerValue("4f244d60-3d3d-11ea-9270-e124e355055b") === true;\n  },\n  f056: function isQuestionPrerequisite0NearbyTreesCausedDamageBb4a08903dce11eab29ccd65fd300111(_ref44) {\n    var questionId = _ref44.questionId,\n        sourceQuestionId = _ref44.sourceQuestionId,\n        groupNumber = _ref44.groupNumber,\n        eventType = _ref44.eventType;\n    return this.getAnswerValue("4f244d60-3d3d-11ea-9270-e124e355055b") === true;\n  },\n  f057: function isQuestionPrerequisite0UnderpinnedYear201f7ef03dc811eab29ccd65fd300111(_ref45) {\n    var questionId = _ref45.questionId,\n        sourceQuestionId = _ref45.sourceQuestionId,\n        groupNumber = _ref45.groupNumber,\n        eventType = _ref45.eventType;\n    return this.getAnswerValue("6c1ef910-3d3d-11ea-9270-e124e355055b") === true;\n  },\n  f058: function underpinnedYear201f7ef03dc811eab29ccd65fd300111_1IntegerValidatorExpression() {\n    return 1753;\n  },\n  f059: function underpinnedYear201f7ef03dc811eab29ccd65fd300111_1IntegerValidatorExpression() {\n    return this.currentYear;\n  },\n  f060: function isQuestionPrerequisite0UnderpinPercentage5a3d1ed03dc811eab29ccd65fd300111(_ref46) {\n    var questionId = _ref46.questionId,\n        sourceQuestionId = _ref46.sourceQuestionId,\n        groupNumber = _ref46.groupNumber,\n        eventType = _ref46.eventType;\n    return this.getAnswerValue("6c1ef910-3d3d-11ea-9270-e124e355055b") === true;\n  },\n  f061: function isQuestionPrerequisite0RemoveTreeButton541108f5623849bf830e9187e50e64ea(_ref47) {\n    var questionId = _ref47.questionId,\n        sourceQuestionId = _ref47.sourceQuestionId,\n        groupNumber = _ref47.groupNumber,\n        eventType = _ref47.eventType;\n    return groupNumber > 1;\n  },\n  f062: function isQuestionPrerequisite0StructuralWorkGuaranteeF39a2db03dc911eab29ccd65fd300111(_ref48) {\n    var questionId = _ref48.questionId,\n        sourceQuestionId = _ref48.sourceQuestionId,\n        groupNumber = _ref48.groupNumber,\n        eventType = _ref48.eventType;\n    return this.getAnswerValue("6c1ef910-3d3d-11ea-9270-e124e355055b") === true;\n  },\n  f063: function isQuestionPrerequisite0StructuralWorkGuaranteeExpirationDate07c28c603dca11eab29ccd65fd300111(_ref49) {\n    var questionId = _ref49.questionId,\n        sourceQuestionId = _ref49.sourceQuestionId,\n        groupNumber = _ref49.groupNumber,\n        eventType = _ref49.eventType;\n    return this.getAnswerValue("f39a2db0-3dc9-11ea-b29c-cd65fd300111") === true;\n  },\n  f064: function isQuestionPrerequisite1StructuralWorkGuaranteeExpirationDate07c28c603dca11eab29ccd65fd300111(_ref50) {\n    var questionId = _ref50.questionId,\n        sourceQuestionId = _ref50.sourceQuestionId,\n        groupNumber = _ref50.groupNumber,\n        eventType = _ref50.eventType;\n    return this.getAnswerValue("6c1ef910-3d3d-11ea-9270-e124e355055b") === true;\n  },\n  f065: function structuralWorkGuaranteeExpirationDate07c28c603dca11eab29ccd65fd300111_1IntegerValidatorExpression() {\n    return this.currentYear;\n  },\n  f066: function structuralWorkGuaranteeExpirationDate07c28c603dca11eab29ccd65fd300111_1IntegerValidatorExpression() {\n    return this.currentYear + 79;\n  },\n  f067: function isQuestionPrerequisite0BuildingControlDepartmentInvolvement871c53103dca11eab29ccd65fd300111(_ref51) {\n    var questionId = _ref51.questionId,\n        sourceQuestionId = _ref51.sourceQuestionId,\n        groupNumber = _ref51.groupNumber,\n        eventType = _ref51.eventType;\n    return this.getAnswerValue("6c1ef910-3d3d-11ea-9270-e124e355055b") === true;\n  },\n  f068: function isQuestionDependentAction0Flood0262a3903eab11ea9efff118e7c9b0f4(_ref52) {\n    var questionId = _ref52.questionId,\n        sourceQuestionId = _ref52.sourceQuestionId,\n        groupNumber = _ref52.groupNumber,\n        eventType = _ref52.eventType;\n    return this.getAnswerValue(\'flood\') === true && !this.getQuestion({\n      questionId: \'0ded6460-3eac-11ea-9eff-f118e7c9b0f4\',\n      groupNumber: 1\n    });\n  },\n  f069: function isQuestionPrerequisite0FloodDate0ded64603eac11ea9efff118e7c9b0f4(_ref53) {\n    var questionId = _ref53.questionId,\n        sourceQuestionId = _ref53.sourceQuestionId,\n        groupNumber = _ref53.groupNumber,\n        eventType = _ref53.eventType;\n    return this.getAnswerValue("0262a390-3eab-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f070: function floodDate0ded64603eac11ea9efff118e7c9b0f4_0CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var _fields$getData, _fields$getData2, _fields$getData3;\n\n    var isDayTouched = (_fields$getData = fields.getData(fieldName + \'~Kday\')) === null || _fields$getData === void 0 ? void 0 : _fields$getData.isTouched;\n    var isMonthTouched = (_fields$getData2 = fields.getData(fieldName + \'~Kmonth\')) === null || _fields$getData2 === void 0 ? void 0 : _fields$getData2.isTouched;\n    var isYearTouched = (_fields$getData3 = fields.getData(fieldName + \'~Kyear\')) === null || _fields$getData3 === void 0 ? void 0 : _fields$getData3.isTouched;\n    return isDayTouched && isMonthTouched && isYearTouched || \'stop-validating\';\n  },\n  f071: function floodDate0ded64603eac11ea9efff118e7c9b0f4_1CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var value = fields.get(fieldName).value;\n    var date = value === null || value === void 0 ? void 0 : value.split(\'-\').filter(function (part) {\n      return part === null || part === void 0 ? void 0 : part.length;\n    });\n    var completeDate = (date === null || date === void 0 ? void 0 : date.length) === 3;\n    return completeDate;\n  },\n  f072: function floodDate0ded64603eac11ea9efff118e7c9b0f4_2DateValidatorExpression() {\n    return this.getTodayPlus(-25, \'year\');\n  },\n  f073: function floodDate0ded64603eac11ea9efff118e7c9b0f4_2DateValidatorExpression() {\n    return this.today;\n  },\n  f074: function isQuestionPrerequisite0FloodCause30d8e8003eac11ea9efff118e7c9b0f4(_ref54) {\n    var questionId = _ref54.questionId,\n        sourceQuestionId = _ref54.sourceQuestionId,\n        groupNumber = _ref54.groupNumber,\n        eventType = _ref54.eventType;\n    return this.getAnswerValue("0262a390-3eab-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f075: function isQuestionPrerequisite0RemoveFloodButton624ca9b3f6b345ba885e4f9fa9286d40(_ref55) {\n    var questionId = _ref55.questionId,\n        sourceQuestionId = _ref55.sourceQuestionId,\n        groupNumber = _ref55.groupNumber,\n        eventType = _ref55.eventType;\n    return groupNumber > 1;\n  },\n  f076: function isQuestionPrerequisite0FloodDetailsD87a12b03eab11ea9efff118e7c9b0f4(_ref56) {\n    var questionId = _ref56.questionId,\n        sourceQuestionId = _ref56.sourceQuestionId,\n        groupNumber = _ref56.groupNumber,\n        eventType = _ref56.eventType;\n    return this.getAnswerValue("0262a390-3eab-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f077: function isQuestionPrerequisite0CommunityFloodDefence2aecd5903ead11ea9efff118e7c9b0f4(_ref57) {\n    var questionId = _ref57.questionId,\n        sourceQuestionId = _ref57.sourceQuestionId,\n        groupNumber = _ref57.groupNumber,\n        eventType = _ref57.eventType;\n    return this.getAnswerValue("0262a390-3eab-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f078: function isQuestionPrerequisite0FloodDefenceType986017403ead11ea9efff118e7c9b0f4(_ref58) {\n    var questionId = _ref58.questionId,\n        sourceQuestionId = _ref58.sourceQuestionId,\n        groupNumber = _ref58.groupNumber,\n        eventType = _ref58.eventType;\n    return this.getAnswerValue("2aecd590-3ead-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f079: function isQuestionPrerequisite0FloodDefenceYear66a90a403ead11ea9efff118e7c9b0f4(_ref59) {\n    var questionId = _ref59.questionId,\n        sourceQuestionId = _ref59.sourceQuestionId,\n        groupNumber = _ref59.groupNumber,\n        eventType = _ref59.eventType;\n    return this.getAnswerValue("2aecd590-3ead-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f080: function floodDefenceYear66a90a403ead11ea9efff118e7c9b0f4_1IntegerValidatorExpression() {\n    return 1753;\n  },\n  f081: function floodDefenceYear66a90a403ead11ea9efff118e7c9b0f4_1IntegerValidatorExpression() {\n    return this.currentYear;\n  },\n  f082: function isQuestionPrerequisite0FloodedSinceD591d4f03ead11ea9efff118e7c9b0f4(_ref60) {\n    var questionId = _ref60.questionId,\n        sourceQuestionId = _ref60.sourceQuestionId,\n        groupNumber = _ref60.groupNumber,\n        eventType = _ref60.eventType;\n    return this.getAnswerValue("2aecd590-3ead-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f083: function isQuestionPrerequisite0MetresFromWater9f66ae803eb911ea9efff118e7c9b0f4(_ref61) {\n    var questionId = _ref61.questionId,\n        sourceQuestionId = _ref61.sourceQuestionId,\n        groupNumber = _ref61.groupNumber,\n        eventType = _ref61.eventType;\n    return this.getAnswerValue("7715a300-3eb9-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f084: function isQuestionPrerequisite0RenovationStructure2a40f2403eba11ea9efff118e7c9b0f4(_ref62) {\n    var questionId = _ref62.questionId,\n        sourceQuestionId = _ref62.sourceQuestionId,\n        groupNumber = _ref62.groupNumber,\n        eventType = _ref62.eventType;\n    return this.getAnswerValue("ebd295e0-3eb9-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f085: function isQuestionPrerequisite0RenovationType4fbbd3503eba11ea9efff118e7c9b0f4(_ref63) {\n    var questionId = _ref63.questionId,\n        sourceQuestionId = _ref63.sourceQuestionId,\n        groupNumber = _ref63.groupNumber,\n        eventType = _ref63.eventType;\n    return this.getAnswerValue("ebd295e0-3eb9-11ea-9eff-f118e7c9b0f4") === true && this.getAnswerValue("2a40f240-3eba-11ea-9eff-f118e7c9b0f4") === false;\n  },\n  f086: function isQuestionPrerequisite0RenovationStart5396a7103ebb11ea9efff118e7c9b0f4(_ref64) {\n    var questionId = _ref64.questionId,\n        sourceQuestionId = _ref64.sourceQuestionId,\n        groupNumber = _ref64.groupNumber,\n        eventType = _ref64.eventType;\n    return this.getAnswerValue("ebd295e0-3eb9-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f087: function renovationStart5396a7103ebb11ea9efff118e7c9b0f4_0CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var _fields$getData, _fields$getData2, _fields$getData3;\n\n    var isDayTouched = (_fields$getData = fields.getData(fieldName + \'~Kday\')) === null || _fields$getData === void 0 ? void 0 : _fields$getData.isTouched;\n    var isMonthTouched = (_fields$getData2 = fields.getData(fieldName + \'~Kmonth\')) === null || _fields$getData2 === void 0 ? void 0 : _fields$getData2.isTouched;\n    var isYearTouched = (_fields$getData3 = fields.getData(fieldName + \'~Kyear\')) === null || _fields$getData3 === void 0 ? void 0 : _fields$getData3.isTouched;\n    return isDayTouched && isMonthTouched && isYearTouched || \'stop-validating\';\n  },\n  f088: function renovationStart5396a7103ebb11ea9efff118e7c9b0f4_1CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var value = fields.get(fieldName).value;\n    var date = value === null || value === void 0 ? void 0 : value.split(\'-\').filter(function (part) {\n      return part === null || part === void 0 ? void 0 : part.length;\n    });\n    var completeDate = (date === null || date === void 0 ? void 0 : date.length) === 3;\n    return completeDate;\n  },\n  f089: function renovationStart5396a7103ebb11ea9efff118e7c9b0f4_2CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var renovationStartDate = fields.get(\'5396a710-3ebb-11ea-9eff-f118e7c9b0f4\').value;\n    var renovationEndDate = fields.get(fieldName).value;\n    return new Date(renovationStartDate) <= new Date(renovationEndDate);\n  },\n  f090: function renovationStart5396a7103ebb11ea9efff118e7c9b0f4_3DateValidatorExpression() {\n    return this.getTodayPlus(-5, \'year\');\n  },\n  f091: function renovationStart5396a7103ebb11ea9efff118e7c9b0f4_3DateValidatorExpression() {\n    return this.getTodayPlus(5, \'year\');\n  },\n  f092: function isQuestionPrerequisite0RenovationEnd97f231e03ebb11ea9efff118e7c9b0f4(_ref65) {\n    var questionId = _ref65.questionId,\n        sourceQuestionId = _ref65.sourceQuestionId,\n        groupNumber = _ref65.groupNumber,\n        eventType = _ref65.eventType;\n    return this.getAnswerValue("ebd295e0-3eb9-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f093: function renovationEnd97f231e03ebb11ea9efff118e7c9b0f4_0CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var _fields$getData, _fields$getData2, _fields$getData3;\n\n    var isDayTouched = (_fields$getData = fields.getData(fieldName + \'~Kday\')) === null || _fields$getData === void 0 ? void 0 : _fields$getData.isTouched;\n    var isMonthTouched = (_fields$getData2 = fields.getData(fieldName + \'~Kmonth\')) === null || _fields$getData2 === void 0 ? void 0 : _fields$getData2.isTouched;\n    var isYearTouched = (_fields$getData3 = fields.getData(fieldName + \'~Kyear\')) === null || _fields$getData3 === void 0 ? void 0 : _fields$getData3.isTouched;\n    return isDayTouched && isMonthTouched && isYearTouched || \'stop-validating\';\n  },\n  f094: function renovationEnd97f231e03ebb11ea9efff118e7c9b0f4_1CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var value = fields.get(fieldName).value;\n    var date = value === null || value === void 0 ? void 0 : value.split(\'-\').filter(function (part) {\n      return part === null || part === void 0 ? void 0 : part.length;\n    });\n    var completeDate = (date === null || date === void 0 ? void 0 : date.length) === 3;\n    return completeDate;\n  },\n  f095: function renovationEnd97f231e03ebb11ea9efff118e7c9b0f4_2CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var renovationStartDate = fields.get(\'5396a710-3ebb-11ea-9eff-f118e7c9b0f4\').value;\n    var renovationEndDate = fields.get(fieldName).value;\n    return new Date(renovationStartDate) <= new Date(renovationEndDate);\n  },\n  f096: function renovationEnd97f231e03ebb11ea9efff118e7c9b0f4_3DateValidatorExpression() {\n    return this.today;\n  },\n  f097: function renovationEnd97f231e03ebb11ea9efff118e7c9b0f4_3DateValidatorExpression() {\n    return this.getTodayPlus(5, \'year\');\n  },\n  f098: function isQuestionPrerequisite0ContractorsWorkingEbda6bd03ebe11ea9974a9ac1356511b(_ref66) {\n    var questionId = _ref66.questionId,\n        sourceQuestionId = _ref66.sourceQuestionId,\n        groupNumber = _ref66.groupNumber,\n        eventType = _ref66.eventType;\n    return this.getAnswerValue("ebd295e0-3eb9-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f099: function isQuestionPrerequisite0ContractorLiabilityWaiver2c13c4303ebf11ea9974a9ac1356511b(_ref67) {\n    var questionId = _ref67.questionId,\n        sourceQuestionId = _ref67.sourceQuestionId,\n        groupNumber = _ref67.groupNumber,\n        eventType = _ref67.eventType;\n    return this.getAnswerValue("ebda6bd0-3ebe-11ea-9974-a9ac1356511b") === true;\n  },\n  f100: function isQuestionPrerequisite0ContractorInsurance3e0768903ebf11ea9974a9ac1356511b(_ref68) {\n    var questionId = _ref68.questionId,\n        sourceQuestionId = _ref68.sourceQuestionId,\n        groupNumber = _ref68.groupNumber,\n        eventType = _ref68.eventType;\n    return this.getAnswerValue("ebd295e0-3eb9-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f101: function isQuestionPrerequisite0AtHomeDuringRenovation6443c4e03ebf11ea9974a9ac1356511b(_ref69) {\n    var questionId = _ref69.questionId,\n        sourceQuestionId = _ref69.sourceQuestionId,\n        groupNumber = _ref69.groupNumber,\n        eventType = _ref69.eventType;\n    return this.getAnswerValue("ebd295e0-3eb9-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f102: function isQuestionPrerequisite0RenovationCost87c5e3303ebf11ea9974a9ac1356511b(_ref70) {\n    var questionId = _ref70.questionId,\n        sourceQuestionId = _ref70.sourceQuestionId,\n        groupNumber = _ref70.groupNumber,\n        eventType = _ref70.eventType;\n    return this.getAnswerValue("ebd295e0-3eb9-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f103: function isQuestionPrerequisite0RenovationSizeImpactBd73f3f03ebf11ea9974a9ac1356511b(_ref71) {\n    var questionId = _ref71.questionId,\n        sourceQuestionId = _ref71.sourceQuestionId,\n        groupNumber = _ref71.groupNumber,\n        eventType = _ref71.eventType;\n    return this.getAnswerValue("ebd295e0-3eb9-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f104: function isQuestionPrerequisite0ApprovedAlarm32fd42103ec111ea9974a9ac1356511b(_ref72) {\n    var questionId = _ref72.questionId,\n        sourceQuestionId = _ref72.sourceQuestionId,\n        groupNumber = _ref72.groupNumber,\n        eventType = _ref72.eventType;\n    return this.getAnswerValue("27598590-3ec1-11ea-9974-a9ac1356511b") === true;\n  },\n  f105: function isQuestionPrerequisite0MonitoredAlarm59d67aa03ec111ea9974a9ac1356511b(_ref73) {\n    var questionId = _ref73.questionId,\n        sourceQuestionId = _ref73.sourceQuestionId,\n        groupNumber = _ref73.groupNumber,\n        eventType = _ref73.eventType;\n    return this.getAnswerValue("32fd4210-3ec1-11ea-9974-a9ac1356511b") === true;\n  },\n  f106: function isQuestionPrerequisite1MonitoredAlarm59d67aa03ec111ea9974a9ac1356511b(_ref74) {\n    var questionId = _ref74.questionId,\n        sourceQuestionId = _ref74.sourceQuestionId,\n        groupNumber = _ref74.groupNumber,\n        eventType = _ref74.eventType;\n    return this.getAnswerValue("27598590-3ec1-11ea-9974-a9ac1356511b") === true;\n  },\n  f107: function isQuestionPrerequisite0BikesD6ba17903ec911ea9974a9ac1356511b(_ref75) {\n    var questionId = _ref75.questionId,\n        sourceQuestionId = _ref75.sourceQuestionId,\n        groupNumber = _ref75.groupNumber,\n        eventType = _ref75.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f108: function isQuestionDependentAction0BikesD6ba17903ec911ea9974a9ac1356511b(_ref76) {\n    var questionId = _ref76.questionId,\n        sourceQuestionId = _ref76.sourceQuestionId,\n        groupNumber = _ref76.groupNumber,\n        eventType = _ref76.eventType;\n    return this.getAnswerValue(\'bikes\') === true && !this.getQuestion({\n      questionId: \'bfabe190-3eca-11ea-9974-a9ac1356511b\',\n      groupNumber: 1\n    });\n  },\n  f109: function isQuestionPrerequisite0BikeMakeAndModelBfabe1903eca11ea9974a9ac1356511b(_ref77) {\n    var questionId = _ref77.questionId,\n        sourceQuestionId = _ref77.sourceQuestionId,\n        groupNumber = _ref77.groupNumber,\n        eventType = _ref77.eventType;\n    return this.getAnswerValue("d6ba1790-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f110: function isQuestionPrerequisite1BikeMakeAndModelBfabe1903eca11ea9974a9ac1356511b(_ref78) {\n    var questionId = _ref78.questionId,\n        sourceQuestionId = _ref78.sourceQuestionId,\n        groupNumber = _ref78.groupNumber,\n        eventType = _ref78.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f111: function isQuestionPrerequisite0BikeValue0188fee03ecb11ea9974a9ac1356511b(_ref79) {\n    var questionId = _ref79.questionId,\n        sourceQuestionId = _ref79.sourceQuestionId,\n        groupNumber = _ref79.groupNumber,\n        eventType = _ref79.eventType;\n    return this.getAnswerValue("d6ba1790-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f112: function isQuestionPrerequisite1BikeValue0188fee03ecb11ea9974a9ac1356511b(_ref80) {\n    var questionId = _ref80.questionId,\n        sourceQuestionId = _ref80.sourceQuestionId,\n        groupNumber = _ref80.groupNumber,\n        eventType = _ref80.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f113: function isQuestionPrerequisite0BikeCoverAwayHome43b7bea03ecb11ea9974a9ac1356511b(_ref81) {\n    var questionId = _ref81.questionId,\n        sourceQuestionId = _ref81.sourceQuestionId,\n        groupNumber = _ref81.groupNumber,\n        eventType = _ref81.eventType;\n    return this.getAnswerValue("d6ba1790-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f114: function isQuestionPrerequisite1BikeCoverAwayHome43b7bea03ecb11ea9974a9ac1356511b(_ref82) {\n    var questionId = _ref82.questionId,\n        sourceQuestionId = _ref82.sourceQuestionId,\n        groupNumber = _ref82.groupNumber,\n        eventType = _ref82.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f115: function isQuestionPrerequisite0RemoveBikeButton7a6540d57c1a4d45a93c1dda92c70dd2(_ref83) {\n    var questionId = _ref83.questionId,\n        sourceQuestionId = _ref83.sourceQuestionId,\n        groupNumber = _ref83.groupNumber,\n        eventType = _ref83.eventType;\n    return groupNumber > 1;\n  },\n  f116: function isQuestionPrerequisite0BikeDetailsF6bc5df03ec911ea9974a9ac1356511b(_ref84) {\n    var questionId = _ref84.questionId,\n        sourceQuestionId = _ref84.sourceQuestionId,\n        groupNumber = _ref84.groupNumber,\n        eventType = _ref84.eventType;\n    return this.getAnswerValue("d6ba1790-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f117: function isQuestionPrerequisite1BikeDetailsF6bc5df03ec911ea9974a9ac1356511b(_ref85) {\n    var questionId = _ref85.questionId,\n        sourceQuestionId = _ref85.sourceQuestionId,\n        groupNumber = _ref85.groupNumber,\n        eventType = _ref85.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f118: function isQuestionPrerequisite0Phones976ba9803ecb11ea9974a9ac1356511b(_ref86) {\n    var questionId = _ref86.questionId,\n        sourceQuestionId = _ref86.sourceQuestionId,\n        groupNumber = _ref86.groupNumber,\n        eventType = _ref86.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f119: function isQuestionPrerequisite1Phones976ba9803ecb11ea9974a9ac1356511b(_ref87) {\n    var questionId = _ref87.questionId,\n        sourceQuestionId = _ref87.sourceQuestionId,\n        groupNumber = _ref87.groupNumber,\n        eventType = _ref87.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f120: function isQuestionDependentAction0Phones976ba9803ecb11ea9974a9ac1356511b(_ref88) {\n    var questionId = _ref88.questionId,\n        sourceQuestionId = _ref88.sourceQuestionId,\n        groupNumber = _ref88.groupNumber,\n        eventType = _ref88.eventType;\n    return this.getAnswerValue(\'phones\') === true && !this.getQuestion({\n      questionId: \'83d50380-3ecb-11ea-9974-a9ac1356511b\',\n      groupNumber: 1\n    });\n  },\n  f121: function isQuestionPrerequisite0PhoneMakeAndModel832a44903ecb11ea9974a9ac1356511b(_ref89) {\n    var questionId = _ref89.questionId,\n        sourceQuestionId = _ref89.sourceQuestionId,\n        groupNumber = _ref89.groupNumber,\n        eventType = _ref89.eventType;\n    return this.getAnswerValue("976ba980-3ecb-11ea-9974-a9ac1356511b") === true;\n  },\n  f122: function isQuestionPrerequisite1PhoneMakeAndModel832a44903ecb11ea9974a9ac1356511b(_ref90) {\n    var questionId = _ref90.questionId,\n        sourceQuestionId = _ref90.sourceQuestionId,\n        groupNumber = _ref90.groupNumber,\n        eventType = _ref90.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f123: function isQuestionPrerequisite0PhoneValue83d503803ecb11ea9974a9ac1356511b(_ref91) {\n    var questionId = _ref91.questionId,\n        sourceQuestionId = _ref91.sourceQuestionId,\n        groupNumber = _ref91.groupNumber,\n        eventType = _ref91.eventType;\n    return this.getAnswerValue("976ba980-3ecb-11ea-9974-a9ac1356511b") === true;\n  },\n  f124: function isQuestionPrerequisite0PhoneCoverAwayHome849742103ecb11ea9974a9ac1356511b(_ref92) {\n    var questionId = _ref92.questionId,\n        sourceQuestionId = _ref92.sourceQuestionId,\n        groupNumber = _ref92.groupNumber,\n        eventType = _ref92.eventType;\n    return this.getAnswerValue("976ba980-3ecb-11ea-9974-a9ac1356511b") === true;\n  },\n  f125: function isQuestionPrerequisite1PhoneCoverAwayHome849742103ecb11ea9974a9ac1356511b(_ref93) {\n    var questionId = _ref93.questionId,\n        sourceQuestionId = _ref93.sourceQuestionId,\n        groupNumber = _ref93.groupNumber,\n        eventType = _ref93.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f126: function isQuestionPrerequisite0RemovePhoneButton69ecc05dc36d4eb5aefdee958bac6ce6(_ref94) {\n    var questionId = _ref94.questionId,\n        sourceQuestionId = _ref94.sourceQuestionId,\n        groupNumber = _ref94.groupNumber,\n        eventType = _ref94.eventType;\n    return groupNumber > 1;\n  },\n  f127: function isQuestionPrerequisite0PhoneDetails824c40a03ecb11ea9974a9ac1356511b(_ref95) {\n    var questionId = _ref95.questionId,\n        sourceQuestionId = _ref95.sourceQuestionId,\n        groupNumber = _ref95.groupNumber,\n        eventType = _ref95.eventType;\n    return this.getAnswerValue("976ba980-3ecb-11ea-9974-a9ac1356511b") === true;\n  },\n  f128: function isQuestionPrerequisite1PhoneDetails824c40a03ecb11ea9974a9ac1356511b(_ref96) {\n    var questionId = _ref96.questionId,\n        sourceQuestionId = _ref96.sourceQuestionId,\n        groupNumber = _ref96.groupNumber,\n        eventType = _ref96.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f129: function isQuestionPrerequisite0Gadgets432e74f03ecc11ea9974a9ac1356511b(_ref97) {\n    var questionId = _ref97.questionId,\n        sourceQuestionId = _ref97.sourceQuestionId,\n        groupNumber = _ref97.groupNumber,\n        eventType = _ref97.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f130: function isQuestionPrerequisite1Gadgets432e74f03ecc11ea9974a9ac1356511b(_ref98) {\n    var questionId = _ref98.questionId,\n        sourceQuestionId = _ref98.sourceQuestionId,\n        groupNumber = _ref98.groupNumber,\n        eventType = _ref98.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f131: function isQuestionDependentAction0Gadgets432e74f03ecc11ea9974a9ac1356511b(_ref99) {\n    var questionId = _ref99.questionId,\n        sourceQuestionId = _ref99.sourceQuestionId,\n        groupNumber = _ref99.groupNumber,\n        eventType = _ref99.eventType;\n    return this.getAnswerValue(\'gadgets\') === true && !this.getQuestion({\n      questionId: \'4a56bb70-3ecc-11ea-9974-a9ac1356511b\',\n      groupNumber: 1\n    });\n  },\n  f132: function isQuestionPrerequisite0GadgetsMakeAndModel4a56bb703ecc11ea9974a9ac1356511b(_ref100) {\n    var questionId = _ref100.questionId,\n        sourceQuestionId = _ref100.sourceQuestionId,\n        groupNumber = _ref100.groupNumber,\n        eventType = _ref100.eventType;\n    return this.getAnswerValue("432e74f0-3ecc-11ea-9974-a9ac1356511b") === true;\n  },\n  f133: function isQuestionPrerequisite1GadgetsMakeAndModel4a56bb703ecc11ea9974a9ac1356511b(_ref101) {\n    var questionId = _ref101.questionId,\n        sourceQuestionId = _ref101.sourceQuestionId,\n        groupNumber = _ref101.groupNumber,\n        eventType = _ref101.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f134: function isQuestionPrerequisite0GadgetsValue4cc91b003ecc11ea9974a9ac1356511b(_ref102) {\n    var questionId = _ref102.questionId,\n        sourceQuestionId = _ref102.sourceQuestionId,\n        groupNumber = _ref102.groupNumber,\n        eventType = _ref102.eventType;\n    return this.getAnswerValue("432e74f0-3ecc-11ea-9974-a9ac1356511b") === true;\n  },\n  f135: function isQuestionPrerequisite1GadgetsValue4cc91b003ecc11ea9974a9ac1356511b(_ref103) {\n    var questionId = _ref103.questionId,\n        sourceQuestionId = _ref103.sourceQuestionId,\n        groupNumber = _ref103.groupNumber,\n        eventType = _ref103.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f136: function isQuestionPrerequisite0GadgetsCoverAwayHome4e2995603ecc11ea9974a9ac1356511b(_ref104) {\n    var questionId = _ref104.questionId,\n        sourceQuestionId = _ref104.sourceQuestionId,\n        groupNumber = _ref104.groupNumber,\n        eventType = _ref104.eventType;\n    return this.getAnswerValue("432e74f0-3ecc-11ea-9974-a9ac1356511b") === true;\n  },\n  f137: function isQuestionPrerequisite1GadgetsCoverAwayHome4e2995603ecc11ea9974a9ac1356511b(_ref105) {\n    var questionId = _ref105.questionId,\n        sourceQuestionId = _ref105.sourceQuestionId,\n        groupNumber = _ref105.groupNumber,\n        eventType = _ref105.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f138: function isQuestionPrerequisite0RemoveGadgetButton11ef810d572c4b18a9625a2a6e6c7173(_ref106) {\n    var questionId = _ref106.questionId,\n        sourceQuestionId = _ref106.sourceQuestionId,\n        groupNumber = _ref106.groupNumber,\n        eventType = _ref106.eventType;\n    return groupNumber > 1;\n  },\n  f139: function isQuestionPrerequisite0GadgetsDetails493d0e103ecc11ea9974a9ac1356511b(_ref107) {\n    var questionId = _ref107.questionId,\n        sourceQuestionId = _ref107.sourceQuestionId,\n        groupNumber = _ref107.groupNumber,\n        eventType = _ref107.eventType;\n    return this.getAnswerValue("432e74f0-3ecc-11ea-9974-a9ac1356511b") === true;\n  },\n  f140: function isQuestionPrerequisite1GadgetsDetails493d0e103ecc11ea9974a9ac1356511b(_ref108) {\n    var questionId = _ref108.questionId,\n        sourceQuestionId = _ref108.sourceQuestionId,\n        groupNumber = _ref108.groupNumber,\n        eventType = _ref108.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f141: function isQuestionPrerequisite0HighRiskItems5a33e6703ecd11ea9974a9ac1356511b(_ref109) {\n    var questionId = _ref109.questionId,\n        sourceQuestionId = _ref109.sourceQuestionId,\n        groupNumber = _ref109.groupNumber,\n        eventType = _ref109.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f142: function isQuestionDependentAction0HighRiskItems5a33e6703ecd11ea9974a9ac1356511b(_ref110) {\n    var questionId = _ref110.questionId,\n        sourceQuestionId = _ref110.sourceQuestionId,\n        groupNumber = _ref110.groupNumber,\n        eventType = _ref110.eventType;\n    return this.getAnswerValue(\'highRiskItems\') === true && !this.getQuestion({\n      questionId: \'5bded750-3ecd-11ea-9974-a9ac1356511b\',\n      groupNumber: 1\n    });\n  },\n  f143: function isQuestionPrerequisite0HighRiskItemCategory673a8e503ecd11ea9974a9ac1356511b(_ref111) {\n    var questionId = _ref111.questionId,\n        sourceQuestionId = _ref111.sourceQuestionId,\n        groupNumber = _ref111.groupNumber,\n        eventType = _ref111.eventType;\n    return this.getAnswerValue("5a33e670-3ecd-11ea-9974-a9ac1356511b") === true;\n  },\n  f144: function isQuestionPrerequisite1HighRiskItemCategory673a8e503ecd11ea9974a9ac1356511b(_ref112) {\n    var questionId = _ref112.questionId,\n        sourceQuestionId = _ref112.sourceQuestionId,\n        groupNumber = _ref112.groupNumber,\n        eventType = _ref112.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f145: function isQuestionPrerequisite0HighRiskItemDescription5bded7503ecd11ea9974a9ac1356511b(_ref113) {\n    var questionId = _ref113.questionId,\n        sourceQuestionId = _ref113.sourceQuestionId,\n        groupNumber = _ref113.groupNumber,\n        eventType = _ref113.eventType;\n    return this.getAnswerValue("5a33e670-3ecd-11ea-9974-a9ac1356511b") === true;\n  },\n  f146: function isQuestionPrerequisite1HighRiskItemDescription5bded7503ecd11ea9974a9ac1356511b(_ref114) {\n    var questionId = _ref114.questionId,\n        sourceQuestionId = _ref114.sourceQuestionId,\n        groupNumber = _ref114.groupNumber,\n        eventType = _ref114.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f147: function isQuestionPrerequisite0HighRiskItemValue5cbbc9d03ecd11ea9974a9ac1356511b(_ref115) {\n    var questionId = _ref115.questionId,\n        sourceQuestionId = _ref115.sourceQuestionId,\n        groupNumber = _ref115.groupNumber,\n        eventType = _ref115.eventType;\n    return this.getAnswerValue("5a33e670-3ecd-11ea-9974-a9ac1356511b") === true;\n  },\n  f148: function isQuestionPrerequisite1HighRiskItemValue5cbbc9d03ecd11ea9974a9ac1356511b(_ref116) {\n    var questionId = _ref116.questionId,\n        sourceQuestionId = _ref116.sourceQuestionId,\n        groupNumber = _ref116.groupNumber,\n        eventType = _ref116.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f149: function isQuestionPrerequisite0HighRiskItemCoverAwayHomeBacdf8e03ecd11ea9974a9ac1356511b(_ref117) {\n    var questionId = _ref117.questionId,\n        sourceQuestionId = _ref117.sourceQuestionId,\n        groupNumber = _ref117.groupNumber,\n        eventType = _ref117.eventType;\n    return this.getAnswerValue("5a33e670-3ecd-11ea-9974-a9ac1356511b") === true;\n  },\n  f150: function isQuestionPrerequisite1HighRiskItemCoverAwayHomeBacdf8e03ecd11ea9974a9ac1356511b(_ref118) {\n    var questionId = _ref118.questionId,\n        sourceQuestionId = _ref118.sourceQuestionId,\n        groupNumber = _ref118.groupNumber,\n        eventType = _ref118.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f151: function isQuestionPrerequisite0RemoveHighRiskItemButton34f028c0c1fa4b66b14591616848cf1c(_ref119) {\n    var questionId = _ref119.questionId,\n        sourceQuestionId = _ref119.sourceQuestionId,\n        groupNumber = _ref119.groupNumber,\n        eventType = _ref119.eventType;\n    return groupNumber > 1;\n  },\n  f152: function isQuestionPrerequisite0HighRiskItemsDetails5b3b6b603ecd11ea9974a9ac1356511b(_ref120) {\n    var questionId = _ref120.questionId,\n        sourceQuestionId = _ref120.sourceQuestionId,\n        groupNumber = _ref120.groupNumber,\n        eventType = _ref120.eventType;\n    return this.getAnswerValue("5a33e670-3ecd-11ea-9974-a9ac1356511b") === true;\n  },\n  f153: function isQuestionPrerequisite1HighRiskItemsDetails5b3b6b603ecd11ea9974a9ac1356511b(_ref121) {\n    var questionId = _ref121.questionId,\n        sourceQuestionId = _ref121.sourceQuestionId,\n        groupNumber = _ref121.groupNumber,\n        eventType = _ref121.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f154: function isQuestionPrerequisite0SafeRatingE6de12c03ece11ea9974a9ac1356511b(_ref122) {\n    var questionId = _ref122.questionId,\n        sourceQuestionId = _ref122.sourceQuestionId,\n        groupNumber = _ref122.groupNumber,\n        eventType = _ref122.eventType;\n    return this.getAnswerValue("c8317150-3ece-11ea-9974-a9ac1356511b") === true;\n  },\n  f155: function isQuestionDependentAnswer0HowIsThePropertyUsedAb589f001d2f47e4b446d070b50a92d1(_ref123) {\n    var questionId = _ref123.questionId,\n        sourceQuestionId = _ref123.sourceQuestionId,\n        groupNumber = _ref123.groupNumber,\n        eventType = _ref123.eventType;\n    return [\'OWN01\', \'HOL01\', \'WED01\', \'WEE01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f156: function isQuestionDependentAnswer0HowIsThePropertyUsedAb589f001d2f47e4b446d070b50a92d1(_ref124) {\n    var questionId = _ref124.questionId,\n        sourceQuestionId = _ref124.sourceQuestionId,\n        groupNumber = _ref124.groupNumber,\n        eventType = _ref124.eventType;\n    return [\'TEN01\', \'STL01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f157: function isQuestionLookupData0WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref125) {\n    var questionId = _ref125.questionId,\n        sourceQuestionId = _ref125.sourceQuestionId,\n        groupNumber = _ref125.groupNumber,\n        eventType = _ref125.eventType;\n    return [\'OWN01\', \'HOL01\', \'WED01\', \'WEE01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f158: function isQuestionLookupData0WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref126) {\n    var questionId = _ref126.questionId,\n        sourceQuestionId = _ref126.sourceQuestionId,\n        groupNumber = _ref126.groupNumber,\n        eventType = _ref126.eventType;\n    return this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1") !== "UNO01";\n  },\n  f159: function isQuestionLookupData0WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref127) {\n    var questionId = _ref127.questionId,\n        sourceQuestionId = _ref127.sourceQuestionId,\n        groupNumber = _ref127.groupNumber,\n        eventType = _ref127.eventType;\n    return [\'TEN01\', \'STL01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f160: function isQuestionLookupData0WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref128) {\n    var questionId = _ref128.questionId,\n        sourceQuestionId = _ref128.sourceQuestionId,\n        groupNumber = _ref128.groupNumber,\n        eventType = _ref128.eventType;\n    return [\'OWN01\', \'TEN01\', \'STL01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f161: function isQuestionLookupData0WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref129) {\n    var questionId = _ref129.questionId,\n        sourceQuestionId = _ref129.sourceQuestionId,\n        groupNumber = _ref129.groupNumber,\n        eventType = _ref129.eventType;\n    return [\'OWN01\', \'TEN01\', \'STL01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f162: function isQuestionLookupData0WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref130) {\n    var questionId = _ref130.questionId,\n        sourceQuestionId = _ref130.sourceQuestionId,\n        groupNumber = _ref130.groupNumber,\n        eventType = _ref130.eventType;\n    return [\'HOL01\', \'UNO01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) < 0;\n  },\n  f163: function isQuestionLookupData0WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref131) {\n    var questionId = _ref131.questionId,\n        sourceQuestionId = _ref131.sourceQuestionId,\n        groupNumber = _ref131.groupNumber,\n        eventType = _ref131.eventType;\n    return this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1") !== "UNO01";\n  },\n  f164: function isQuestionLookupData0WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref132) {\n    var questionId = _ref132.questionId,\n        sourceQuestionId = _ref132.sourceQuestionId,\n        groupNumber = _ref132.groupNumber,\n        eventType = _ref132.eventType;\n    return [\'OWN01\', \'TEN01\', \'STL01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f165: function isQuestionLookupData0WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref133) {\n    var questionId = _ref133.questionId,\n        sourceQuestionId = _ref133.sourceQuestionId,\n        groupNumber = _ref133.groupNumber,\n        eventType = _ref133.eventType;\n    return [\'HOL01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f166: function isQuestionLookupData0WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref134) {\n    var questionId = _ref134.questionId,\n        sourceQuestionId = _ref134.sourceQuestionId,\n        groupNumber = _ref134.groupNumber,\n        eventType = _ref134.eventType;\n    return [\'OWN01\', \'TEN01\', \'STL01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f167: function isQuestionLookupData0WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref135) {\n    var questionId = _ref135.questionId,\n        sourceQuestionId = _ref135.sourceQuestionId,\n        groupNumber = _ref135.groupNumber,\n        eventType = _ref135.eventType;\n    return [\'OWN01\', \'TEN01\', \'STL01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f168: function isQuestionPrerequisite0WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref136) {\n    var questionId = _ref136.questionId,\n        sourceQuestionId = _ref136.sourceQuestionId,\n        groupNumber = _ref136.groupNumber,\n        eventType = _ref136.eventType;\n    return this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1") !== "UNO01";\n  },\n  f169: function isQuestionPrerequisite1WhoLivesAtProperty9f17efb57ba447a3aac9c100d34ab474(_ref137) {\n    var questionId = _ref137.questionId,\n        sourceQuestionId = _ref137.sourceQuestionId,\n        groupNumber = _ref137.groupNumber,\n        eventType = _ref137.eventType;\n    return this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1") !== null;\n  },\n  f170: function isQuestionPrerequisite0AdultsE13177c040e711ea841cbb3040cb10d0(_ref138) {\n    var questionId = _ref138.questionId,\n        sourceQuestionId = _ref138.sourceQuestionId,\n        groupNumber = _ref138.groupNumber,\n        eventType = _ref138.eventType;\n    return [\'OWN01\', \'TEN01\', \'STL01\', \'WED01\', \'WEE01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f171: function isQuestionPrerequisite0ChildrenBab6966040e811ea841cbb3040cb10d0(_ref139) {\n    var questionId = _ref139.questionId,\n        sourceQuestionId = _ref139.sourceQuestionId,\n        groupNumber = _ref139.groupNumber,\n        eventType = _ref139.eventType;\n    return [\'OWN01\', \'TEN01\', \'STL01\', \'WED01\', \'WEE01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f172: function isQuestionPrerequisite0WhenIsOccupiedCf52c58040e811ea841cbb3040cb10d0(_ref140) {\n    var questionId = _ref140.questionId,\n        sourceQuestionId = _ref140.sourceQuestionId,\n        groupNumber = _ref140.groupNumber,\n        eventType = _ref140.eventType;\n    return [\'OWN01\', \'TEN01\', \'STL01\', \'WED01\', \'WEE01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f173: function isQuestionPrerequisite0ConsecutiveDaysUnoccupied2010c8f040e911ea841cbb3040cb10d0(_ref141) {\n    var questionId = _ref141.questionId,\n        sourceQuestionId = _ref141.sourceQuestionId,\n        groupNumber = _ref141.groupNumber,\n        eventType = _ref141.eventType;\n    return [\'OWN01\', \'TEN01\', \'STL01\', \'WED01\', \'WEE01\', \'HOL01\'].indexOf(this.getAnswerValue("ab589f00-1d2f-47e4-b446-d070b50a92d1")) >= 0;\n  },\n  f174: function isQuestionPrerequisite0HouseholdMainSourceIncomeB9fa2ec040e911ea841cbb3040cb10d0(_ref142) {\n    var questionId = _ref142.questionId,\n        sourceQuestionId = _ref142.sourceQuestionId,\n        groupNumber = _ref142.groupNumber,\n        eventType = _ref142.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f175: function isQuestionPrerequisite0OfficeOwnAccessE55768d040e911ea841cbb3040cb10d0(_ref143) {\n    var questionId = _ref143.questionId,\n        sourceQuestionId = _ref143.sourceQuestionId,\n        groupNumber = _ref143.groupNumber,\n        eventType = _ref143.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f176: function isQuestionPrerequisite0CommercialInsurance04c70c2040ea11ea841cbb3040cb10d0(_ref144) {\n    var questionId = _ref144.questionId,\n        sourceQuestionId = _ref144.sourceQuestionId,\n        groupNumber = _ref144.groupNumber,\n        eventType = _ref144.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f177: function isQuestionPrerequisite0StaffB1dd80b040ea11ea841cbb3040cb10d0(_ref145) {\n    var questionId = _ref145.questionId,\n        sourceQuestionId = _ref145.sourceQuestionId,\n        groupNumber = _ref145.groupNumber,\n        eventType = _ref145.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f178: function isQuestionPrerequisite0PublicLiabilityInsuranceFbb4655040ea11ea841cbb3040cb10d0(_ref146) {\n    var questionId = _ref146.questionId,\n        sourceQuestionId = _ref146.sourceQuestionId,\n        groupNumber = _ref146.groupNumber,\n        eventType = _ref146.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f179: function isQuestionPrerequisite0BusinessVisitorsFrequency1048f35040eb11ea841cbb3040cb10d0(_ref147) {\n    var questionId = _ref147.questionId,\n        sourceQuestionId = _ref147.sourceQuestionId,\n        groupNumber = _ref147.groupNumber,\n        eventType = _ref147.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f180: function isQuestionPrerequisite0BedAndBreakfast62b283e040eb11ea841cbb3040cb10d0(_ref148) {\n    var questionId = _ref148.questionId,\n        sourceQuestionId = _ref148.sourceQuestionId,\n        groupNumber = _ref148.groupNumber,\n        eventType = _ref148.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f181: function isQuestionPrerequisite0ConcurrentGuests74ea0f1040eb11ea841cbb3040cb10d0(_ref149) {\n    var questionId = _ref149.questionId,\n        sourceQuestionId = _ref149.sourceQuestionId,\n        groupNumber = _ref149.groupNumber,\n        eventType = _ref149.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f182: function isQuestionPrerequisite1ConcurrentGuests74ea0f1040eb11ea841cbb3040cb10d0(_ref150) {\n    var questionId = _ref150.questionId,\n        sourceQuestionId = _ref150.sourceQuestionId,\n        groupNumber = _ref150.groupNumber,\n        eventType = _ref150.eventType;\n    return this.getAnswerValue("62b283e0-40eb-11ea-841c-bb3040cb10d0") === true;\n  },\n  f183: function isQuestionPrerequisite0GuestBedroomsB916afc040ed11eaba90d11c44e9c53e(_ref151) {\n    var questionId = _ref151.questionId,\n        sourceQuestionId = _ref151.sourceQuestionId,\n        groupNumber = _ref151.groupNumber,\n        eventType = _ref151.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f184: function isQuestionPrerequisite1GuestBedroomsB916afc040ed11eaba90d11c44e9c53e(_ref152) {\n    var questionId = _ref152.questionId,\n        sourceQuestionId = _ref152.sourceQuestionId,\n        groupNumber = _ref152.groupNumber,\n        eventType = _ref152.eventType;\n    return this.getAnswerValue("62b283e0-40eb-11ea-841c-bb3040cb10d0") === true;\n  },\n  f185: function isQuestionPrerequisite0EveningMeal1df23c7040ee11eaba90d11c44e9c53e(_ref153) {\n    var questionId = _ref153.questionId,\n        sourceQuestionId = _ref153.sourceQuestionId,\n        groupNumber = _ref153.groupNumber,\n        eventType = _ref153.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f186: function isQuestionPrerequisite1EveningMeal1df23c7040ee11eaba90d11c44e9c53e(_ref154) {\n    var questionId = _ref154.questionId,\n        sourceQuestionId = _ref154.sourceQuestionId,\n        groupNumber = _ref154.groupNumber,\n        eventType = _ref154.eventType;\n    return this.getAnswerValue("62b283e0-40eb-11ea-841c-bb3040cb10d0") === true;\n  },\n  f187: function isQuestionPrerequisite0BusinessEquipment38c0924040ee11eaba90d11c44e9c53e(_ref155) {\n    var questionId = _ref155.questionId,\n        sourceQuestionId = _ref155.sourceQuestionId,\n        groupNumber = _ref155.groupNumber,\n        eventType = _ref155.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f188: function isQuestionPrerequisite0BusinessEquipmentCoverAmount54ff680040ee11eaba90d11c44e9c53e(_ref156) {\n    var questionId = _ref156.questionId,\n        sourceQuestionId = _ref156.sourceQuestionId,\n        groupNumber = _ref156.groupNumber,\n        eventType = _ref156.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f189: function isQuestionPrerequisite1BusinessEquipmentCoverAmount54ff680040ee11eaba90d11c44e9c53e(_ref157) {\n    var questionId = _ref157.questionId,\n        sourceQuestionId = _ref157.sourceQuestionId,\n        groupNumber = _ref157.groupNumber,\n        eventType = _ref157.eventType;\n    return this.getAnswerValue("38c09240-40ee-11ea-ba90-d11c44e9c53e") === true;\n  },\n  f190: function isQuestionPrerequisite0BusinessStockC5011cc040ee11eaba90d11c44e9c53e(_ref158) {\n    var questionId = _ref158.questionId,\n        sourceQuestionId = _ref158.sourceQuestionId,\n        groupNumber = _ref158.groupNumber,\n        eventType = _ref158.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f191: function isQuestionPrerequisite0StockTypeD52de3d040ee11eaba90d11c44e9c53e(_ref159) {\n    var questionId = _ref159.questionId,\n        sourceQuestionId = _ref159.sourceQuestionId,\n        groupNumber = _ref159.groupNumber,\n        eventType = _ref159.eventType;\n    return this.getAnswerValue("a8c9da60-40e9-11ea-841c-bb3040cb10d0") === true;\n  },\n  f192: function isQuestionPrerequisite1StockTypeD52de3d040ee11eaba90d11c44e9c53e(_ref160) {\n    var questionId = _ref160.questionId,\n        sourceQuestionId = _ref160.sourceQuestionId,\n        groupNumber = _ref160.groupNumber,\n        eventType = _ref160.eventType;\n    return this.getAnswerValue("c5011cc0-40ee-11ea-ba90-d11c44e9c53e") === true;\n  },\n  f193: function dateOfBirth35bedf7040f811ea854a85cd7b624796_0CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var _fields$getData, _fields$getData2, _fields$getData3;\n\n    var isDayTouched = (_fields$getData = fields.getData(fieldName + \'~Kday\')) === null || _fields$getData === void 0 ? void 0 : _fields$getData.isTouched;\n    var isMonthTouched = (_fields$getData2 = fields.getData(fieldName + \'~Kmonth\')) === null || _fields$getData2 === void 0 ? void 0 : _fields$getData2.isTouched;\n    var isYearTouched = (_fields$getData3 = fields.getData(fieldName + \'~Kyear\')) === null || _fields$getData3 === void 0 ? void 0 : _fields$getData3.isTouched;\n    return isDayTouched && isMonthTouched && isYearTouched || \'stop-validating\';\n  },\n  f194: function dateOfBirth35bedf7040f811ea854a85cd7b624796_1CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var value = fields.get(fieldName).value;\n    var date = value === null || value === void 0 ? void 0 : value.split(\'-\').filter(function (part) {\n      return part === null || part === void 0 ? void 0 : part.length;\n    });\n    var completeDate = (date === null || date === void 0 ? void 0 : date.length) === 3;\n    return completeDate;\n  },\n  f195: function dateOfBirth35bedf7040f811ea854a85cd7b624796_2DateValidatorExpression() {\n    return this.getTodayPlus(-130, \'year\');\n  },\n  f196: function dateOfBirth35bedf7040f811ea854a85cd7b624796_2DateValidatorExpression() {\n    return this.getTodayPlus(-18, \'year\');\n  },\n  f197: function isQuestionDependentAction0JointNames639adfb040f911ea854a85cd7b624796(_ref161) {\n    var questionId = _ref161.questionId,\n        sourceQuestionId = _ref161.sourceQuestionId,\n        groupNumber = _ref161.groupNumber,\n        eventType = _ref161.eventType;\n    return this.getAnswerValue(\'639adfb0-40f9-11ea-854a-85cd7b624796\') === true && !this.getQuestion({\n      questionId: \'21f82490-40ff-11ea-854a-85cd7b624796\',\n      groupNumber: 1\n    });\n  },\n  f198: function isQuestionPrerequisite0JointNamesTitle21f8249040ff11ea854a85cd7b624796(_ref162) {\n    var questionId = _ref162.questionId,\n        sourceQuestionId = _ref162.sourceQuestionId,\n        groupNumber = _ref162.groupNumber,\n        eventType = _ref162.eventType;\n    return this.getAnswerValue("639adfb0-40f9-11ea-854a-85cd7b624796") === true;\n  },\n  f199: function isQuestionPrerequisite0JointNamesFirstName230e769040ff11ea854a85cd7b624796(_ref163) {\n    var questionId = _ref163.questionId,\n        sourceQuestionId = _ref163.sourceQuestionId,\n        groupNumber = _ref163.groupNumber,\n        eventType = _ref163.eventType;\n    return this.getAnswerValue("639adfb0-40f9-11ea-854a-85cd7b624796") === true;\n  },\n  f200: function isQuestionPrerequisite0JointNamesSurname240d971040ff11ea854a85cd7b624796(_ref164) {\n    var questionId = _ref164.questionId,\n        sourceQuestionId = _ref164.sourceQuestionId,\n        groupNumber = _ref164.groupNumber,\n        eventType = _ref164.eventType;\n    return this.getAnswerValue("639adfb0-40f9-11ea-854a-85cd7b624796") === true;\n  },\n  f201: function isQuestionPrerequisite0JointNamesDateOfBirth25c2c12040ff11ea854a85cd7b624796(_ref165) {\n    var questionId = _ref165.questionId,\n        sourceQuestionId = _ref165.sourceQuestionId,\n        groupNumber = _ref165.groupNumber,\n        eventType = _ref165.eventType;\n    return this.getAnswerValue("639adfb0-40f9-11ea-854a-85cd7b624796") === true;\n  },\n  f202: function jointNamesDateOfBirth25c2c12040ff11ea854a85cd7b624796_0CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var _fields$getData, _fields$getData2, _fields$getData3;\n\n    var isDayTouched = (_fields$getData = fields.getData(fieldName + \'~Kday\')) === null || _fields$getData === void 0 ? void 0 : _fields$getData.isTouched;\n    var isMonthTouched = (_fields$getData2 = fields.getData(fieldName + \'~Kmonth\')) === null || _fields$getData2 === void 0 ? void 0 : _fields$getData2.isTouched;\n    var isYearTouched = (_fields$getData3 = fields.getData(fieldName + \'~Kyear\')) === null || _fields$getData3 === void 0 ? void 0 : _fields$getData3.isTouched;\n    return isDayTouched && isMonthTouched && isYearTouched || \'stop-validating\';\n  },\n  f203: function jointNamesDateOfBirth25c2c12040ff11ea854a85cd7b624796_1CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var value = fields.get(fieldName).value;\n    var date = value === null || value === void 0 ? void 0 : value.split(\'-\').filter(function (part) {\n      return part === null || part === void 0 ? void 0 : part.length;\n    });\n    var completeDate = (date === null || date === void 0 ? void 0 : date.length) === 3;\n    return completeDate;\n  },\n  f204: function jointNamesDateOfBirth25c2c12040ff11ea854a85cd7b624796_2DateValidatorExpression() {\n    return this.getTodayPlus(-130, \'year\');\n  },\n  f205: function jointNamesDateOfBirth25c2c12040ff11ea854a85cd7b624796_2DateValidatorExpression() {\n    return this.getTodayPlus(-18, \'year\');\n  },\n  f206: function isQuestionPrerequisite0JointNamesRelationship4cc6651040ff11ea854a85cd7b624796(_ref166) {\n    var questionId = _ref166.questionId,\n        sourceQuestionId = _ref166.sourceQuestionId,\n        groupNumber = _ref166.groupNumber,\n        eventType = _ref166.eventType;\n    return this.getAnswerValue("639adfb0-40f9-11ea-854a-85cd7b624796") === true;\n  },\n  f207: function isQuestionPrerequisite0JointNamesOccupation556a4f1040ff11ea854a85cd7b624796(_ref167) {\n    var questionId = _ref167.questionId,\n        sourceQuestionId = _ref167.sourceQuestionId,\n        groupNumber = _ref167.groupNumber,\n        eventType = _ref167.eventType;\n    return this.getAnswerValue("639adfb0-40f9-11ea-854a-85cd7b624796") === true;\n  },\n  f208: function isQuestionPrerequisite0JointNamesTypeOfBusiness60966a9040ff11ea854a85cd7b624796(_ref168) {\n    var questionId = _ref168.questionId,\n        sourceQuestionId = _ref168.sourceQuestionId,\n        groupNumber = _ref168.groupNumber,\n        eventType = _ref168.eventType;\n    return this.getAnswerValue("639adfb0-40f9-11ea-854a-85cd7b624796") === true;\n  },\n  f209: function isQuestionPrerequisite0JointNamesBusinessTrade7e1d29a040ff11ea854a85cd7b624796(_ref169) {\n    var questionId = _ref169.questionId,\n        sourceQuestionId = _ref169.sourceQuestionId,\n        groupNumber = _ref169.groupNumber,\n        eventType = _ref169.eventType;\n    return this.getAnswerValue("639adfb0-40f9-11ea-854a-85cd7b624796") === true;\n  },\n  f210: function isQuestionPrerequisite0RemoveJointDetailsButtonC57d4903424c4d999132b4eebb27463c(_ref170) {\n    var questionId = _ref170.questionId,\n        sourceQuestionId = _ref170.sourceQuestionId,\n        groupNumber = _ref170.groupNumber,\n        eventType = _ref170.eventType;\n    return groupNumber > 1;\n  },\n  f211: function isQuestionPrerequisite0JointNamesDetails21038b6040ff11ea854a85cd7b624796(_ref171) {\n    var questionId = _ref171.questionId,\n        sourceQuestionId = _ref171.sourceQuestionId,\n        groupNumber = _ref171.groupNumber,\n        eventType = _ref171.eventType;\n    return this.getAnswerValue("639adfb0-40f9-11ea-854a-85cd7b624796") === true;\n  },\n  f212: function isQuestionDependentAction0ClaimsD05ba71154344ecc9acec89e95dcb20a(_ref172) {\n    var questionId = _ref172.questionId,\n        sourceQuestionId = _ref172.sourceQuestionId,\n        groupNumber = _ref172.groupNumber,\n        eventType = _ref172.eventType;\n    return this.getAnswerValue(\'claims\') === true && !this.getQuestion({\n      questionId: \'ada086de-8d4b-426e-a9b6-4680e125a5b8\',\n      groupNumber: 1\n    });\n  },\n  f213: function isQuestionPrerequisite0ClaimTypeAda086de8d4b426ea9b64680e125a5b8(_ref173) {\n    var questionId = _ref173.questionId,\n        sourceQuestionId = _ref173.sourceQuestionId,\n        groupNumber = _ref173.groupNumber,\n        eventType = _ref173.eventType;\n    return this.getAnswerValue("d05ba711-5434-4ecc-9ace-c89e95dcb20a") === true;\n  },\n  f214: function isQuestionPrerequisite0ClaimEntryGainA288a07b546746769654194e0e32140d(_ref174) {\n    var questionId = _ref174.questionId,\n        sourceQuestionId = _ref174.sourceQuestionId,\n        groupNumber = _ref174.groupNumber,\n        eventType = _ref174.eventType;\n    return this.getAnswerValue("ada086de-8d4b-426e-a9b6-4680e125a5b8") === \'Theft following break-in at the property\';\n  },\n  f215: function isQuestionPrerequisite0ClaimHasSecurityImprovement56c53af9204e4fa1b0cf249f7e031acf(_ref175) {\n    var questionId = _ref175.questionId,\n        sourceQuestionId = _ref175.sourceQuestionId,\n        groupNumber = _ref175.groupNumber,\n        eventType = _ref175.eventType;\n    return this.getAnswerValue("ada086de-8d4b-426e-a9b6-4680e125a5b8") === \'Theft following break-in at the property\';\n  },\n  f216: function isQuestionPrerequisite0ClaimDateF6e0f8158bb446459b9cd49dc4045cb4(_ref176) {\n    var questionId = _ref176.questionId,\n        sourceQuestionId = _ref176.sourceQuestionId,\n        groupNumber = _ref176.groupNumber,\n        eventType = _ref176.eventType;\n    return this.getAnswerValue("d05ba711-5434-4ecc-9ace-c89e95dcb20a") === true;\n  },\n  f217: function claimDateF6e0f8158bb446459b9cd49dc4045cb4_0CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var _fields$getData, _fields$getData2, _fields$getData3;\n\n    var isDayTouched = (_fields$getData = fields.getData(fieldName + \'~Kday\')) === null || _fields$getData === void 0 ? void 0 : _fields$getData.isTouched;\n    var isMonthTouched = (_fields$getData2 = fields.getData(fieldName + \'~Kmonth\')) === null || _fields$getData2 === void 0 ? void 0 : _fields$getData2.isTouched;\n    var isYearTouched = (_fields$getData3 = fields.getData(fieldName + \'~Kyear\')) === null || _fields$getData3 === void 0 ? void 0 : _fields$getData3.isTouched;\n    return isDayTouched && isMonthTouched && isYearTouched || \'stop-validating\';\n  },\n  f218: function claimDateF6e0f8158bb446459b9cd49dc4045cb4_1CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var value = fields.get(fieldName).value;\n    var date = value === null || value === void 0 ? void 0 : value.split(\'-\').filter(function (part) {\n      return part === null || part === void 0 ? void 0 : part.length;\n    });\n    var completeDate = (date === null || date === void 0 ? void 0 : date.length) === 3;\n    return completeDate;\n  },\n  f219: function claimDateF6e0f8158bb446459b9cd49dc4045cb4_2DateValidatorExpression() {\n    return this.getTodayPlus(-25, \'year\');\n  },\n  f220: function claimDateF6e0f8158bb446459b9cd49dc4045cb4_2DateValidatorExpression() {\n    return this.today;\n  },\n  f221: function isQuestionPrerequisite0ClaimPaid9e05db86aad34816a54aacc209a73ab3(_ref177) {\n    var questionId = _ref177.questionId,\n        sourceQuestionId = _ref177.sourceQuestionId,\n        groupNumber = _ref177.groupNumber,\n        eventType = _ref177.eventType;\n    return this.getAnswerValue("d05ba711-5434-4ecc-9ace-c89e95dcb20a") === true;\n  },\n  f222: function isQuestionPrerequisite0ClaimOutstanding731e467befe34f349c80e44f46fd03c0(_ref178) {\n    var questionId = _ref178.questionId,\n        sourceQuestionId = _ref178.sourceQuestionId,\n        groupNumber = _ref178.groupNumber,\n        eventType = _ref178.eventType;\n    return this.getAnswerValue("d05ba711-5434-4ecc-9ace-c89e95dcb20a") === true;\n  },\n  f223: function isQuestionPrerequisite0ClaimSection0d0a6d172fc24bcd88024c2444fd7aa6(_ref179) {\n    var questionId = _ref179.questionId,\n        sourceQuestionId = _ref179.sourceQuestionId,\n        groupNumber = _ref179.groupNumber,\n        eventType = _ref179.eventType;\n    return this.getAnswerValue("d05ba711-5434-4ecc-9ace-c89e95dcb20a") === true;\n  },\n  f224: function isQuestionPrerequisite0AtProperty749900e927814b16ac4164efc9b458ff(_ref180) {\n    var questionId = _ref180.questionId,\n        sourceQuestionId = _ref180.sourceQuestionId,\n        groupNumber = _ref180.groupNumber,\n        eventType = _ref180.eventType;\n    return this.getAnswerValue("d05ba711-5434-4ecc-9ace-c89e95dcb20a") === true;\n  },\n  f225: function isQuestionPrerequisite0ClaimDetails67e2ca3bfeee410c8f90c3032d5b1563(_ref181) {\n    var questionId = _ref181.questionId,\n        sourceQuestionId = _ref181.sourceQuestionId,\n        groupNumber = _ref181.groupNumber,\n        eventType = _ref181.eventType;\n    return this.getAnswerValue("d05ba711-5434-4ecc-9ace-c89e95dcb20a") === true;\n  },\n  f226: function isQuestionDependentAction0CancelledInsurance5b057e30410511ea854a85cd7b624796(_ref182) {\n    var questionId = _ref182.questionId,\n        sourceQuestionId = _ref182.sourceQuestionId,\n        groupNumber = _ref182.groupNumber,\n        eventType = _ref182.eventType;\n    return this.getAnswerValue(\'5b057e30-4105-11ea-854a-85cd7b624796\') === true && !this.getQuestion({\n      questionId: \'5f421670-4105-11ea-854a-85cd7b624796\',\n      groupNumber: 1\n    });\n  },\n  f227: function isQuestionPrerequisite0RemoveClaimButtonD29d679d02d046c8ae65c9cab317c278(_ref183) {\n    var questionId = _ref183.questionId,\n        sourceQuestionId = _ref183.sourceQuestionId,\n        groupNumber = _ref183.groupNumber,\n        eventType = _ref183.eventType;\n    return groupNumber > 1;\n  },\n  f228: function isQuestionPrerequisite0CancelledInsuranceResident5e1d4580410511ea854a85cd7b624796(_ref184) {\n    var questionId = _ref184.questionId,\n        sourceQuestionId = _ref184.sourceQuestionId,\n        groupNumber = _ref184.groupNumber,\n        eventType = _ref184.eventType;\n    return this.getAnswerValue("5b057e30-4105-11ea-854a-85cd7b624796") === true;\n  },\n  f229: function isQuestionPrerequisite0CancelledInsuranceOtherResidentTitleB921dee8a23d4be69c4c3eb79a7d84b2(_ref185) {\n    var questionId = _ref185.questionId,\n        sourceQuestionId = _ref185.sourceQuestionId,\n        groupNumber = _ref185.groupNumber,\n        eventType = _ref185.eventType;\n    return this.getAnswerValue("5e1d4580-4105-11ea-854a-85cd7b624796") === \'Other Resident\';\n  },\n  f230: function isQuestionPrerequisite0CancelledInsuranceOtherResidentFirstNameD4880f99fc374358a5d30ab44d0990ac(_ref186) {\n    var questionId = _ref186.questionId,\n        sourceQuestionId = _ref186.sourceQuestionId,\n        groupNumber = _ref186.groupNumber,\n        eventType = _ref186.eventType;\n    return this.getAnswerValue("5e1d4580-4105-11ea-854a-85cd7b624796") === \'Other Resident\';\n  },\n  f231: function isQuestionPrerequisite0CancelledInsuranceOtherResidentSurname5113a81e3d1c4751b65258c2babc1a4f(_ref187) {\n    var questionId = _ref187.questionId,\n        sourceQuestionId = _ref187.sourceQuestionId,\n        groupNumber = _ref187.groupNumber,\n        eventType = _ref187.eventType;\n    return this.getAnswerValue("5e1d4580-4105-11ea-854a-85cd7b624796") === \'Other Resident\';\n  },\n  f232: function isQuestionPrerequisite0CancelledInsuranceOtherResidentDateOfBirthE26b5c03aa16495f8899aae56fc33565(_ref188) {\n    var questionId = _ref188.questionId,\n        sourceQuestionId = _ref188.sourceQuestionId,\n        groupNumber = _ref188.groupNumber,\n        eventType = _ref188.eventType;\n    return this.getAnswerValue("5e1d4580-4105-11ea-854a-85cd7b624796") === \'Other Resident\';\n  },\n  f233: function cancelledInsuranceOtherResidentDateOfBirthE26b5c03aa16495f8899aae56fc33565_0CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var _fields$getData, _fields$getData2, _fields$getData3;\n\n    var isDayTouched = (_fields$getData = fields.getData(fieldName + \'~Kday\')) === null || _fields$getData === void 0 ? void 0 : _fields$getData.isTouched;\n    var isMonthTouched = (_fields$getData2 = fields.getData(fieldName + \'~Kmonth\')) === null || _fields$getData2 === void 0 ? void 0 : _fields$getData2.isTouched;\n    var isYearTouched = (_fields$getData3 = fields.getData(fieldName + \'~Kyear\')) === null || _fields$getData3 === void 0 ? void 0 : _fields$getData3.isTouched;\n    return isDayTouched && isMonthTouched && isYearTouched || \'stop-validating\';\n  },\n  f234: function cancelledInsuranceOtherResidentDateOfBirthE26b5c03aa16495f8899aae56fc33565_1CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var value = fields.get(fieldName).value;\n    var date = value === null || value === void 0 ? void 0 : value.split(\'-\').filter(function (part) {\n      return part === null || part === void 0 ? void 0 : part.length;\n    });\n    var completeDate = (date === null || date === void 0 ? void 0 : date.length) === 3;\n    return completeDate;\n  },\n  f235: function cancelledInsuranceOtherResidentDateOfBirthE26b5c03aa16495f8899aae56fc33565_2DateValidatorExpression() {\n    return this.getTodayPlus(-130, \'year\');\n  },\n  f236: function cancelledInsuranceOtherResidentDateOfBirthE26b5c03aa16495f8899aae56fc33565_2DateValidatorExpression() {\n    return this.getTodayPlus(-18, \'year\');\n  },\n  f237: function isQuestionPrerequisite0CancelledInsuranceOtherResidentRelationshipA4700a8f67bf4b3ab2868f670ae12550(_ref189) {\n    var questionId = _ref189.questionId,\n        sourceQuestionId = _ref189.sourceQuestionId,\n        groupNumber = _ref189.groupNumber,\n        eventType = _ref189.eventType;\n    return this.getAnswerValue("5e1d4580-4105-11ea-854a-85cd7b624796") === \'Other Resident\';\n  },\n  f238: function isQuestionPrerequisite0CancelledInsuranceSituation5f421670410511ea854a85cd7b624796(_ref190) {\n    var questionId = _ref190.questionId,\n        sourceQuestionId = _ref190.sourceQuestionId,\n        groupNumber = _ref190.groupNumber,\n        eventType = _ref190.eventType;\n    return this.getAnswerValue("5b057e30-4105-11ea-854a-85cd7b624796") === true;\n  },\n  f239: function isQuestionPrerequisite0CancelledInsuranceReason50a7e0d0410611ea854a85cd7b624796(_ref191) {\n    var questionId = _ref191.questionId,\n        sourceQuestionId = _ref191.sourceQuestionId,\n        groupNumber = _ref191.groupNumber,\n        eventType = _ref191.eventType;\n    return this.getAnswerValue("5b057e30-4105-11ea-854a-85cd7b624796") === true;\n  },\n  f240: function isQuestionPrerequisite0CancelledInsuranceYearB388fd10410611ea854a85cd7b624796(_ref192) {\n    var questionId = _ref192.questionId,\n        sourceQuestionId = _ref192.sourceQuestionId,\n        groupNumber = _ref192.groupNumber,\n        eventType = _ref192.eventType;\n    return this.getAnswerValue("5b057e30-4105-11ea-854a-85cd7b624796") === true;\n  },\n  f241: function cancelledInsuranceYearB388fd10410611ea854a85cd7b624796_1IntegerValidatorExpression() {\n    return this.currentYear - 25;\n  },\n  f242: function cancelledInsuranceYearB388fd10410611ea854a85cd7b624796_1IntegerValidatorExpression() {\n    return this.currentYear;\n  },\n  f243: function isQuestionPrerequisite0RemoveInsuranceCancelledButton529f79cced214eb9b59be2df65354606(_ref193) {\n    var questionId = _ref193.questionId,\n        sourceQuestionId = _ref193.sourceQuestionId,\n        groupNumber = _ref193.groupNumber,\n        eventType = _ref193.eventType;\n    return groupNumber > 1;\n  },\n  f244: function isQuestionPrerequisite0CancelledInsuranceDetails5c3ffa00410511ea854a85cd7b624796(_ref194) {\n    var questionId = _ref194.questionId,\n        sourceQuestionId = _ref194.sourceQuestionId,\n        groupNumber = _ref194.groupNumber,\n        eventType = _ref194.eventType;\n    return this.getAnswerValue("5b057e30-4105-11ea-854a-85cd7b624796") === true;\n  },\n  f245: function isQuestionDependentAction0BankruptcyEa226c50411311ea8d4cab6d2f0166c9(_ref195) {\n    var questionId = _ref195.questionId,\n        sourceQuestionId = _ref195.sourceQuestionId,\n        groupNumber = _ref195.groupNumber,\n        eventType = _ref195.eventType;\n    return this.getAnswerValue(\'ea226c50-4113-11ea-8d4c-ab6d2f0166c9\') === true && !this.getQuestion({\n      questionId: \'74c9b930-4114-11ea-8d4c-ab6d2f0166c9\',\n      groupNumber: 1\n    });\n  },\n  f246: function isQuestionPrerequisite0BankruptcyResidentA60395fb537d47e99f968befea32da7c(_ref196) {\n    var questionId = _ref196.questionId,\n        sourceQuestionId = _ref196.sourceQuestionId,\n        groupNumber = _ref196.groupNumber,\n        eventType = _ref196.eventType;\n    return this.getAnswerValue("ea226c50-4113-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f247: function isQuestionPrerequisite0BankruptcyOtherResidentTitle94e1fd60e58142ecb98beea07cf8ed77(_ref197) {\n    var questionId = _ref197.questionId,\n        sourceQuestionId = _ref197.sourceQuestionId,\n        groupNumber = _ref197.groupNumber,\n        eventType = _ref197.eventType;\n    return this.getAnswerValue("a60395fb-537d-47e9-9f96-8befea32da7c") === \'Other Resident\';\n  },\n  f248: function isQuestionPrerequisite0BankruptcyOtherResidentFirstName7895aff29ef24c61874b1f6f1acff2b6(_ref198) {\n    var questionId = _ref198.questionId,\n        sourceQuestionId = _ref198.sourceQuestionId,\n        groupNumber = _ref198.groupNumber,\n        eventType = _ref198.eventType;\n    return this.getAnswerValue("a60395fb-537d-47e9-9f96-8befea32da7c") === \'Other Resident\';\n  },\n  f249: function isQuestionPrerequisite0BankruptcyOtherResidentSurname5218dfa561ef480c97752b617da7244a(_ref199) {\n    var questionId = _ref199.questionId,\n        sourceQuestionId = _ref199.sourceQuestionId,\n        groupNumber = _ref199.groupNumber,\n        eventType = _ref199.eventType;\n    return this.getAnswerValue("a60395fb-537d-47e9-9f96-8befea32da7c") === \'Other Resident\';\n  },\n  f250: function isQuestionPrerequisite0BankruptcyOtherResidentDateOfBirth2f0f1170cf494701ad60a874cedc8ff9(_ref200) {\n    var questionId = _ref200.questionId,\n        sourceQuestionId = _ref200.sourceQuestionId,\n        groupNumber = _ref200.groupNumber,\n        eventType = _ref200.eventType;\n    return this.getAnswerValue("a60395fb-537d-47e9-9f96-8befea32da7c") === \'Other Resident\';\n  },\n  f251: function bankruptcyOtherResidentDateOfBirth2f0f1170cf494701ad60a874cedc8ff9_0CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var _fields$getData, _fields$getData2, _fields$getData3;\n\n    var isDayTouched = (_fields$getData = fields.getData(fieldName + \'~Kday\')) === null || _fields$getData === void 0 ? void 0 : _fields$getData.isTouched;\n    var isMonthTouched = (_fields$getData2 = fields.getData(fieldName + \'~Kmonth\')) === null || _fields$getData2 === void 0 ? void 0 : _fields$getData2.isTouched;\n    var isYearTouched = (_fields$getData3 = fields.getData(fieldName + \'~Kyear\')) === null || _fields$getData3 === void 0 ? void 0 : _fields$getData3.isTouched;\n    return isDayTouched && isMonthTouched && isYearTouched || \'stop-validating\';\n  },\n  f252: function bankruptcyOtherResidentDateOfBirth2f0f1170cf494701ad60a874cedc8ff9_1CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var value = fields.get(fieldName).value;\n    var date = value === null || value === void 0 ? void 0 : value.split(\'-\').filter(function (part) {\n      return part === null || part === void 0 ? void 0 : part.length;\n    });\n    var completeDate = (date === null || date === void 0 ? void 0 : date.length) === 3;\n    return completeDate;\n  },\n  f253: function bankruptcyOtherResidentDateOfBirth2f0f1170cf494701ad60a874cedc8ff9_2DateValidatorExpression() {\n    return this.getTodayPlus(-130, \'year\');\n  },\n  f254: function bankruptcyOtherResidentDateOfBirth2f0f1170cf494701ad60a874cedc8ff9_2DateValidatorExpression() {\n    return this.getTodayPlus(-18, \'year\');\n  },\n  f255: function isQuestionPrerequisite0BankruptcyOtherResidentRelationshipCa3340e4cf7c4e22809805aa523a4d1a(_ref201) {\n    var questionId = _ref201.questionId,\n        sourceQuestionId = _ref201.sourceQuestionId,\n        groupNumber = _ref201.groupNumber,\n        eventType = _ref201.eventType;\n    return this.getAnswerValue("a60395fb-537d-47e9-9f96-8befea32da7c") === \'Other Resident\';\n  },\n  f256: function isQuestionPrerequisite0BankruptcyReason74c9b930411411ea8d4cab6d2f0166c9(_ref202) {\n    var questionId = _ref202.questionId,\n        sourceQuestionId = _ref202.sourceQuestionId,\n        groupNumber = _ref202.groupNumber,\n        eventType = _ref202.eventType;\n    return this.getAnswerValue("ea226c50-4113-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f257: function isQuestionPrerequisite0BankruptcySituationAe34aae0411411ea8d4cab6d2f0166c9(_ref203) {\n    var questionId = _ref203.questionId,\n        sourceQuestionId = _ref203.sourceQuestionId,\n        groupNumber = _ref203.groupNumber,\n        eventType = _ref203.eventType;\n    return this.getAnswerValue("ea226c50-4113-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f258: function isQuestionPrerequisite0BankruptcyYearCf773970411411ea8d4cab6d2f0166c9(_ref204) {\n    var questionId = _ref204.questionId,\n        sourceQuestionId = _ref204.sourceQuestionId,\n        groupNumber = _ref204.groupNumber,\n        eventType = _ref204.eventType;\n    return this.getAnswerValue("ea226c50-4113-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f259: function bankruptcyYearCf773970411411ea8d4cab6d2f0166c9_1IntegerValidatorExpression() {\n    return this.currentYear - 25;\n  },\n  f260: function bankruptcyYearCf773970411411ea8d4cab6d2f0166c9_1IntegerValidatorExpression() {\n    return this.currentYear;\n  },\n  f261: function isQuestionPrerequisite0RemoveBankruptcyButtonEd7667259894456f9569ae87774d8ff4(_ref205) {\n    var questionId = _ref205.questionId,\n        sourceQuestionId = _ref205.sourceQuestionId,\n        groupNumber = _ref205.groupNumber,\n        eventType = _ref205.eventType;\n    return groupNumber > 1;\n  },\n  f262: function isQuestionPrerequisite0BankruptcyDetailsFf84aa90411311ea8d4cab6d2f0166c9(_ref206) {\n    var questionId = _ref206.questionId,\n        sourceQuestionId = _ref206.sourceQuestionId,\n        groupNumber = _ref206.groupNumber,\n        eventType = _ref206.eventType;\n    return this.getAnswerValue("ea226c50-4113-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f263: function isQuestionDependentAction0LiabilityClaim2ec85120411511ea8d4cab6d2f0166c9(_ref207) {\n    var questionId = _ref207.questionId,\n        sourceQuestionId = _ref207.sourceQuestionId,\n        groupNumber = _ref207.groupNumber,\n        eventType = _ref207.eventType;\n    return this.getAnswerValue(\'liabilityClaim\') === true && !this.getQuestion({\n      questionId: \'9b69eaf0-4115-11ea-8d4c-ab6d2f0166c9\',\n      groupNumber: 1\n    });\n  },\n  f264: function isQuestionPrerequisite0LiabilityClaimResident9b69eaf0411511ea8d4cab6d2f0166c9(_ref208) {\n    var questionId = _ref208.questionId,\n        sourceQuestionId = _ref208.sourceQuestionId,\n        groupNumber = _ref208.groupNumber,\n        eventType = _ref208.eventType;\n    return this.getAnswerValue("2ec85120-4115-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f265: function isQuestionPrerequisite0LiabilityOtherResidentTitle6c319863f32549239aba801b419d388c(_ref209) {\n    var questionId = _ref209.questionId,\n        sourceQuestionId = _ref209.sourceQuestionId,\n        groupNumber = _ref209.groupNumber,\n        eventType = _ref209.eventType;\n    return this.getAnswerValue("9b69eaf0-4115-11ea-8d4c-ab6d2f0166c9") === \'Other Resident\';\n  },\n  f266: function isQuestionPrerequisite0LiabilityOtherResidentFirstNameE18f2e0a5c9b4cc7a2e9d5137c022336(_ref210) {\n    var questionId = _ref210.questionId,\n        sourceQuestionId = _ref210.sourceQuestionId,\n        groupNumber = _ref210.groupNumber,\n        eventType = _ref210.eventType;\n    return this.getAnswerValue("9b69eaf0-4115-11ea-8d4c-ab6d2f0166c9") === \'Other Resident\';\n  },\n  f267: function isQuestionPrerequisite0LiabilityOtherResidentSurname9dbe38cf49ac482bafff7c62325e5944(_ref211) {\n    var questionId = _ref211.questionId,\n        sourceQuestionId = _ref211.sourceQuestionId,\n        groupNumber = _ref211.groupNumber,\n        eventType = _ref211.eventType;\n    return this.getAnswerValue("9b69eaf0-4115-11ea-8d4c-ab6d2f0166c9") === \'Other Resident\';\n  },\n  f268: function isQuestionPrerequisite0LiabilityOtherResidentDateOfBirthA6f6430cdcdc4932ac1654ed83918402(_ref212) {\n    var questionId = _ref212.questionId,\n        sourceQuestionId = _ref212.sourceQuestionId,\n        groupNumber = _ref212.groupNumber,\n        eventType = _ref212.eventType;\n    return this.getAnswerValue("9b69eaf0-4115-11ea-8d4c-ab6d2f0166c9") === \'Other Resident\';\n  },\n  f269: function liabilityOtherResidentDateOfBirthA6f6430cdcdc4932ac1654ed83918402_0CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var _fields$getData, _fields$getData2, _fields$getData3;\n\n    var isDayTouched = (_fields$getData = fields.getData(fieldName + \'~Kday\')) === null || _fields$getData === void 0 ? void 0 : _fields$getData.isTouched;\n    var isMonthTouched = (_fields$getData2 = fields.getData(fieldName + \'~Kmonth\')) === null || _fields$getData2 === void 0 ? void 0 : _fields$getData2.isTouched;\n    var isYearTouched = (_fields$getData3 = fields.getData(fieldName + \'~Kyear\')) === null || _fields$getData3 === void 0 ? void 0 : _fields$getData3.isTouched;\n    return isDayTouched && isMonthTouched && isYearTouched || \'stop-validating\';\n  },\n  f270: function liabilityOtherResidentDateOfBirthA6f6430cdcdc4932ac1654ed83918402_1CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var value = fields.get(fieldName).value;\n    var date = value === null || value === void 0 ? void 0 : value.split(\'-\').filter(function (part) {\n      return part === null || part === void 0 ? void 0 : part.length;\n    });\n    var completeDate = (date === null || date === void 0 ? void 0 : date.length) === 3;\n    return completeDate;\n  },\n  f271: function liabilityOtherResidentDateOfBirthA6f6430cdcdc4932ac1654ed83918402_2DateValidatorExpression() {\n    return this.getTodayPlus(-130, \'year\');\n  },\n  f272: function liabilityOtherResidentDateOfBirthA6f6430cdcdc4932ac1654ed83918402_2DateValidatorExpression() {\n    return this.getTodayPlus(-18, \'year\');\n  },\n  f273: function isQuestionPrerequisite0LiabilityOtherResidentRelationshipFf4486c144c34287977648061379cff5(_ref213) {\n    var questionId = _ref213.questionId,\n        sourceQuestionId = _ref213.sourceQuestionId,\n        groupNumber = _ref213.groupNumber,\n        eventType = _ref213.eventType;\n    return this.getAnswerValue("9b69eaf0-4115-11ea-8d4c-ab6d2f0166c9") === \'Other Resident\';\n  },\n  f274: function isQuestionPrerequisite0LiabilityClaimYearB288f460411511ea8d4cab6d2f0166c9(_ref214) {\n    var questionId = _ref214.questionId,\n        sourceQuestionId = _ref214.sourceQuestionId,\n        groupNumber = _ref214.groupNumber,\n        eventType = _ref214.eventType;\n    return this.getAnswerValue("2ec85120-4115-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f275: function liabilityClaimYearB288f460411511ea8d4cab6d2f0166c9_1IntegerValidatorExpression() {\n    return this.currentYear - 25;\n  },\n  f276: function liabilityClaimYearB288f460411511ea8d4cab6d2f0166c9_1IntegerValidatorExpression() {\n    return this.currentYear;\n  },\n  f277: function isQuestionPrerequisite0RemoveLiabilityClaimsButtonFac6b94bed454bdd8e24a0a6f9ba17b4(_ref215) {\n    var questionId = _ref215.questionId,\n        sourceQuestionId = _ref215.sourceQuestionId,\n        groupNumber = _ref215.groupNumber,\n        eventType = _ref215.eventType;\n    return groupNumber > 1;\n  },\n  f278: function isQuestionPrerequisite0LiabilityClaimDetailsC77bf610411511ea8d4cab6d2f0166c9(_ref216) {\n    var questionId = _ref216.questionId,\n        sourceQuestionId = _ref216.sourceQuestionId,\n        groupNumber = _ref216.groupNumber,\n        eventType = _ref216.eventType;\n    return this.getAnswerValue("2ec85120-4115-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f279: function isQuestionDependentAction0CriminalConviction432e86b0411611ea8d4cab6d2f0166c9(_ref217) {\n    var questionId = _ref217.questionId,\n        sourceQuestionId = _ref217.sourceQuestionId,\n        groupNumber = _ref217.groupNumber,\n        eventType = _ref217.eventType;\n    return this.getAnswerValue(\'criminalConviction\') === true && !this.getQuestion({\n      questionId: \'95f9e650-4116-11ea-8d4c-ab6d2f0166c9\',\n      groupNumber: 1\n    });\n  },\n  f280: function isQuestionPrerequisite0CriminalConvictionResident95f9e650411611ea8d4cab6d2f0166c9(_ref218) {\n    var questionId = _ref218.questionId,\n        sourceQuestionId = _ref218.sourceQuestionId,\n        groupNumber = _ref218.groupNumber,\n        eventType = _ref218.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f281: function isQuestionPrerequisite0CriminalConvictionOtherResidentTitleEdb9627cac0843668e2f1b0987dc0141(_ref219) {\n    var questionId = _ref219.questionId,\n        sourceQuestionId = _ref219.sourceQuestionId,\n        groupNumber = _ref219.groupNumber,\n        eventType = _ref219.eventType;\n    return this.getAnswerValue("95f9e650-4116-11ea-8d4c-ab6d2f0166c9") === \'Other Resident\';\n  },\n  f282: function isQuestionPrerequisite0CriminalConvictionOtherResidentFirstName3457f9f9e02e4b789e5029687d9d15f7(_ref220) {\n    var questionId = _ref220.questionId,\n        sourceQuestionId = _ref220.sourceQuestionId,\n        groupNumber = _ref220.groupNumber,\n        eventType = _ref220.eventType;\n    return this.getAnswerValue("95f9e650-4116-11ea-8d4c-ab6d2f0166c9") === \'Other Resident\';\n  },\n  f283: function isQuestionPrerequisite0CriminalConvictionOtherResidentSurname75127e18ba784b45a2d264537de6d2c8(_ref221) {\n    var questionId = _ref221.questionId,\n        sourceQuestionId = _ref221.sourceQuestionId,\n        groupNumber = _ref221.groupNumber,\n        eventType = _ref221.eventType;\n    return this.getAnswerValue("95f9e650-4116-11ea-8d4c-ab6d2f0166c9") === \'Other Resident\';\n  },\n  f284: function isQuestionPrerequisite0CriminalConvictionOtherResidentDateOfBirthFcae55a2cd2a4cd2bc8adf29e7dd26bd(_ref222) {\n    var questionId = _ref222.questionId,\n        sourceQuestionId = _ref222.sourceQuestionId,\n        groupNumber = _ref222.groupNumber,\n        eventType = _ref222.eventType;\n    return this.getAnswerValue("95f9e650-4116-11ea-8d4c-ab6d2f0166c9") === \'Other Resident\';\n  },\n  f285: function criminalConvictionOtherResidentDateOfBirthFcae55a2cd2a4cd2bc8adf29e7dd26bd_0CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var _fields$getData, _fields$getData2, _fields$getData3;\n\n    var isDayTouched = (_fields$getData = fields.getData(fieldName + \'~Kday\')) === null || _fields$getData === void 0 ? void 0 : _fields$getData.isTouched;\n    var isMonthTouched = (_fields$getData2 = fields.getData(fieldName + \'~Kmonth\')) === null || _fields$getData2 === void 0 ? void 0 : _fields$getData2.isTouched;\n    var isYearTouched = (_fields$getData3 = fields.getData(fieldName + \'~Kyear\')) === null || _fields$getData3 === void 0 ? void 0 : _fields$getData3.isTouched;\n    return isDayTouched && isMonthTouched && isYearTouched || \'stop-validating\';\n  },\n  f286: function criminalConvictionOtherResidentDateOfBirthFcae55a2cd2a4cd2bc8adf29e7dd26bd_1CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var value = fields.get(fieldName).value;\n    var date = value === null || value === void 0 ? void 0 : value.split(\'-\').filter(function (part) {\n      return part === null || part === void 0 ? void 0 : part.length;\n    });\n    var completeDate = (date === null || date === void 0 ? void 0 : date.length) === 3;\n    return completeDate;\n  },\n  f287: function criminalConvictionOtherResidentDateOfBirthFcae55a2cd2a4cd2bc8adf29e7dd26bd_2DateValidatorExpression() {\n    return this.getTodayPlus(-130, \'year\');\n  },\n  f288: function criminalConvictionOtherResidentDateOfBirthFcae55a2cd2a4cd2bc8adf29e7dd26bd_2DateValidatorExpression() {\n    return this.getTodayPlus(-18, \'year\');\n  },\n  f289: function isQuestionPrerequisite0CriminalConvictionOtherResidentRelationshipC730fdb9a3de4d53b671112c396e357a(_ref223) {\n    var questionId = _ref223.questionId,\n        sourceQuestionId = _ref223.sourceQuestionId,\n        groupNumber = _ref223.groupNumber,\n        eventType = _ref223.eventType;\n    return this.getAnswerValue("95f9e650-4116-11ea-8d4c-ab6d2f0166c9") === \'Other Resident\';\n  },\n  f290: function isQuestionPrerequisite0CriminalConvictionTypeD28b4550411611ea8d4cab6d2f0166c9(_ref224) {\n    var questionId = _ref224.questionId,\n        sourceQuestionId = _ref224.sourceQuestionId,\n        groupNumber = _ref224.groupNumber,\n        eventType = _ref224.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f291: function isQuestionPrerequisite0CriminalConvictionYearEba44a00411611ea8d4cab6d2f0166c9(_ref225) {\n    var questionId = _ref225.questionId,\n        sourceQuestionId = _ref225.sourceQuestionId,\n        groupNumber = _ref225.groupNumber,\n        eventType = _ref225.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f292: function criminalConvictionYearEba44a00411611ea8d4cab6d2f0166c9_1IntegerValidatorExpression() {\n    return this.currentYear - 121;\n  },\n  f293: function criminalConvictionYearEba44a00411611ea8d4cab6d2f0166c9_1IntegerValidatorExpression() {\n    return this.currentYear;\n  },\n  f294: function isQuestionPrerequisite0CriminalConvictionOffenceYear015851c0411711ea8d4cab6d2f0166c9(_ref226) {\n    var questionId = _ref226.questionId,\n        sourceQuestionId = _ref226.sourceQuestionId,\n        groupNumber = _ref226.groupNumber,\n        eventType = _ref226.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f295: function criminalConvictionOffenceYear015851c0411711ea8d4cab6d2f0166c9_1IntegerValidatorExpression() {\n    return this.currentYear - 121;\n  },\n  f296: function criminalConvictionOffenceYear015851c0411711ea8d4cab6d2f0166c9_1IntegerValidatorExpression() {\n    return this.currentYear;\n  },\n  f297: function isQuestionPrerequisite0CriminalConvictionPrison2059f100411711ea8d4cab6d2f0166c9(_ref227) {\n    var questionId = _ref227.questionId,\n        sourceQuestionId = _ref227.sourceQuestionId,\n        groupNumber = _ref227.groupNumber,\n        eventType = _ref227.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f298: function isQuestionPrerequisite0CriminalConvictionPrisonMonths5fb4a930411711ea8d4cab6d2f0166c9(_ref228) {\n    var questionId = _ref228.questionId,\n        sourceQuestionId = _ref228.sourceQuestionId,\n        groupNumber = _ref228.groupNumber,\n        eventType = _ref228.eventType;\n    return this.getAnswerValue("2059f100-4117-11ea-8d4c-ab6d2f0166c9") === true && this.getAnswerValue("2059f100-4117-11ea-8d4c-ab6d2f0166c9") !== null;\n  },\n  f299: function isQuestionPrerequisite0CriminalConvictionPrisonServed8ac6d080411711ea8d4cab6d2f0166c9(_ref229) {\n    var questionId = _ref229.questionId,\n        sourceQuestionId = _ref229.sourceQuestionId,\n        groupNumber = _ref229.groupNumber,\n        eventType = _ref229.eventType;\n    return this.getAnswerValue("2059f100-4117-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f300: function isQuestionPrerequisite0CriminalConvictionSuspendedPrisonA0d07250411711ea8d4cab6d2f0166c9(_ref230) {\n    var questionId = _ref230.questionId,\n        sourceQuestionId = _ref230.sourceQuestionId,\n        groupNumber = _ref230.groupNumber,\n        eventType = _ref230.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f301: function isQuestionPrerequisite0CriminalConvictionSuspendedPrisonMonthsB0edf720411711ea8d4cab6d2f0166c9(_ref231) {\n    var questionId = _ref231.questionId,\n        sourceQuestionId = _ref231.sourceQuestionId,\n        groupNumber = _ref231.groupNumber,\n        eventType = _ref231.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f302: function isQuestionPrerequisite1CriminalConvictionSuspendedPrisonMonthsB0edf720411711ea8d4cab6d2f0166c9(_ref232) {\n    var questionId = _ref232.questionId,\n        sourceQuestionId = _ref232.sourceQuestionId,\n        groupNumber = _ref232.groupNumber,\n        eventType = _ref232.eventType;\n    return this.getAnswerValue("a0d07250-4117-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f303: function isQuestionPrerequisite0CriminalConvictionSuspendedPrisonServedB1de71a0411711ea8d4cab6d2f0166c9(_ref233) {\n    var questionId = _ref233.questionId,\n        sourceQuestionId = _ref233.sourceQuestionId,\n        groupNumber = _ref233.groupNumber,\n        eventType = _ref233.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f304: function isQuestionPrerequisite1CriminalConvictionSuspendedPrisonServedB1de71a0411711ea8d4cab6d2f0166c9(_ref234) {\n    var questionId = _ref234.questionId,\n        sourceQuestionId = _ref234.sourceQuestionId,\n        groupNumber = _ref234.groupNumber,\n        eventType = _ref234.eventType;\n    return this.getAnswerValue("a0d07250-4117-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f305: function isQuestionPrerequisite0CriminalConvictionFineC30c3d6e994b45f493c9004fd8fa406b(_ref235) {\n    var questionId = _ref235.questionId,\n        sourceQuestionId = _ref235.sourceQuestionId,\n        groupNumber = _ref235.groupNumber,\n        eventType = _ref235.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f306: function isQuestionPrerequisite0CriminalConvictionFineAmountA3181de360084ce28cd53615336e6007(_ref236) {\n    var questionId = _ref236.questionId,\n        sourceQuestionId = _ref236.sourceQuestionId,\n        groupNumber = _ref236.groupNumber,\n        eventType = _ref236.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f307: function isQuestionPrerequisite1CriminalConvictionFineAmountA3181de360084ce28cd53615336e6007(_ref237) {\n    var questionId = _ref237.questionId,\n        sourceQuestionId = _ref237.sourceQuestionId,\n        groupNumber = _ref237.groupNumber,\n        eventType = _ref237.eventType;\n    return this.getAnswerValue("c30c3d6e-994b-45f4-93c9-004fd8fa406b") === true;\n  },\n  f308: function isQuestionPrerequisite0CriminalConvictionFinePaid5fbf06d2b8e048eab0ca2d6beedf03b2(_ref238) {\n    var questionId = _ref238.questionId,\n        sourceQuestionId = _ref238.sourceQuestionId,\n        groupNumber = _ref238.groupNumber,\n        eventType = _ref238.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f309: function isQuestionPrerequisite1CriminalConvictionFinePaid5fbf06d2b8e048eab0ca2d6beedf03b2(_ref239) {\n    var questionId = _ref239.questionId,\n        sourceQuestionId = _ref239.sourceQuestionId,\n        groupNumber = _ref239.groupNumber,\n        eventType = _ref239.eventType;\n    return this.getAnswerValue("c30c3d6e-994b-45f4-93c9-004fd8fa406b") === true;\n  },\n  f310: function isQuestionPrerequisite0CommunityServiceD03d1a20411711ea8d4cab6d2f0166c9(_ref240) {\n    var questionId = _ref240.questionId,\n        sourceQuestionId = _ref240.sourceQuestionId,\n        groupNumber = _ref240.groupNumber,\n        eventType = _ref240.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f311: function isQuestionPrerequisite0CommunityServiceHoursE69e9ff0411711ea8d4cab6d2f0166c9(_ref241) {\n    var questionId = _ref241.questionId,\n        sourceQuestionId = _ref241.sourceQuestionId,\n        groupNumber = _ref241.groupNumber,\n        eventType = _ref241.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f312: function isQuestionPrerequisite1CommunityServiceHoursE69e9ff0411711ea8d4cab6d2f0166c9(_ref242) {\n    var questionId = _ref242.questionId,\n        sourceQuestionId = _ref242.sourceQuestionId,\n        groupNumber = _ref242.groupNumber,\n        eventType = _ref242.eventType;\n    return this.getAnswerValue("d03d1a20-4117-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f313: function isQuestionPrerequisite0CommunityServiceServedE7bc44f0411711ea8d4cab6d2f0166c9(_ref243) {\n    var questionId = _ref243.questionId,\n        sourceQuestionId = _ref243.sourceQuestionId,\n        groupNumber = _ref243.groupNumber,\n        eventType = _ref243.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f314: function isQuestionPrerequisite1CommunityServiceServedE7bc44f0411711ea8d4cab6d2f0166c9(_ref244) {\n    var questionId = _ref244.questionId,\n        sourceQuestionId = _ref244.sourceQuestionId,\n        groupNumber = _ref244.groupNumber,\n        eventType = _ref244.eventType;\n    return this.getAnswerValue("d03d1a20-4117-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f315: function isQuestionPrerequisite0ConditionalCharge12a93100411811ea8d4cab6d2f0166c9(_ref245) {\n    var questionId = _ref245.questionId,\n        sourceQuestionId = _ref245.sourceQuestionId,\n        groupNumber = _ref245.groupNumber,\n        eventType = _ref245.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f316: function isQuestionPrerequisite0ConditionalChargeMonths145114a0411811ea8d4cab6d2f0166c9(_ref246) {\n    var questionId = _ref246.questionId,\n        sourceQuestionId = _ref246.sourceQuestionId,\n        groupNumber = _ref246.groupNumber,\n        eventType = _ref246.eventType;\n    return this.getAnswerValue("12a93100-4118-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f317: function isQuestionPrerequisite0ConditionalChargeServed1562abb0411811ea8d4cab6d2f0166c9(_ref247) {\n    var questionId = _ref247.questionId,\n        sourceQuestionId = _ref247.sourceQuestionId,\n        groupNumber = _ref247.groupNumber,\n        eventType = _ref247.eventType;\n    return this.getAnswerValue("12a93100-4118-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f318: function isQuestionPrerequisite0RemoveCriminalConvictionButtonF06975e7627044188a8a5a034eb8b3c8(_ref248) {\n    var questionId = _ref248.questionId,\n        sourceQuestionId = _ref248.sourceQuestionId,\n        groupNumber = _ref248.groupNumber,\n        eventType = _ref248.eventType;\n    return groupNumber > 1;\n  },\n  f319: function isQuestionPrerequisite0CriminalConvictionDetails71c5dd20411611ea8d4cab6d2f0166c9(_ref249) {\n    var questionId = _ref249.questionId,\n        sourceQuestionId = _ref249.sourceQuestionId,\n        groupNumber = _ref249.groupNumber,\n        eventType = _ref249.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f320: function isQuestionPrerequisite0ContactPropertyNameNumberSearchTerm8b1a4709249b4e7789ce0d6e188d2962(_ref250) {\n    var questionId = _ref250.questionId,\n        sourceQuestionId = _ref250.sourceQuestionId,\n        groupNumber = _ref250.groupNumber,\n        eventType = _ref250.eventType;\n    return this.getAnswerValue("93622370-4121-11ea-8d4c-ab6d2f0166c9") === false;\n  },\n  f321: function isQuestionPrerequisite0ContactPostcodeSearchTerm4cf86a9e7a0242f19bb61693de17b87f(_ref251) {\n    var questionId = _ref251.questionId,\n        sourceQuestionId = _ref251.sourceQuestionId,\n        groupNumber = _ref251.groupNumber,\n        eventType = _ref251.eventType;\n    return this.getAnswerValue("93622370-4121-11ea-8d4c-ab6d2f0166c9") === false;\n  },\n  f322: function isQuestionPrerequisite0ContactAddressLookupButtonF49700dda4f345ed85168a8817433d20(_ref252) {\n    var questionId = _ref252.questionId,\n        sourceQuestionId = _ref252.sourceQuestionId,\n        groupNumber = _ref252.groupNumber,\n        eventType = _ref252.eventType;\n    return this.getAnswerValue("93622370-4121-11ea-8d4c-ab6d2f0166c9") === false;\n  },\n  f323: function contactAddressLookupButtonF49700dda4f345ed85168a8817433d20_0CustomValidator(fieldName, fieldValue, fields, eventType) {\n    var showingResults = this.isElementVisible(\'fba02e81-a0e6-452a-be67-059352e0f5a5\');\n    var hasAddressId = !!fields.get(\'436727b4-979c-4fa4-b1f9-70df0c1cadf8\').value;\n    var usingLookup = fields.get(\'e10f06bc-367e-45ec-b5e5-7f3592c21fdb\').value !== \'true\';\n    var isOk = !usingLookup || showingResults || usingLookup && hasAddressId;\n    return isOk;\n  },\n  f324: function isQuestionPrerequisite0ContactAddressEnterManuallyButtonE10f06bc367e45ecb5e57f3592c21fdb(_ref253) {\n    var questionId = _ref253.questionId,\n        sourceQuestionId = _ref253.sourceQuestionId,\n        groupNumber = _ref253.groupNumber,\n        eventType = _ref253.eventType;\n    return this.getAnswerValue("93622370-4121-11ea-8d4c-ab6d2f0166c9") === false;\n  },\n  f325: function isQuestionPrerequisite0ContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref254) {\n    var questionId = _ref254.questionId,\n        sourceQuestionId = _ref254.sourceQuestionId,\n        groupNumber = _ref254.groupNumber,\n        eventType = _ref254.eventType;\n    return this.getAnswerValue("93622370-4121-11ea-8d4c-ab6d2f0166c9") === false;\n  },\n  f326: function isQuestionDependentAnswer0ContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref255) {\n    var questionId = _ref255.questionId,\n        sourceQuestionId = _ref255.sourceQuestionId,\n        groupNumber = _ref255.groupNumber,\n        eventType = _ref255.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f327: function dependentAnswerContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref256) {\n    var questionId = _ref256.questionId,\n        sourceQuestionId = _ref256.sourceQuestionId,\n        groupNumber = _ref256.groupNumber,\n        eventType = _ref256.eventType;\n    return this.getAnswer(sourceQuestionId).partial.propertyNameNumber;\n  },\n  f328: function isQuestionDependentAnswer0ContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref257) {\n    var questionId = _ref257.questionId,\n        sourceQuestionId = _ref257.sourceQuestionId,\n        groupNumber = _ref257.groupNumber,\n        eventType = _ref257.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f329: function dependentAnswerContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref258) {\n    var questionId = _ref258.questionId,\n        sourceQuestionId = _ref258.sourceQuestionId,\n        groupNumber = _ref258.groupNumber,\n        eventType = _ref258.eventType;\n    return this.getAnswer(sourceQuestionId).partial.addressLine1;\n  },\n  f330: function isQuestionDependentAnswer0ContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref259) {\n    var questionId = _ref259.questionId,\n        sourceQuestionId = _ref259.sourceQuestionId,\n        groupNumber = _ref259.groupNumber,\n        eventType = _ref259.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f331: function dependentAnswerContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref260) {\n    var questionId = _ref260.questionId,\n        sourceQuestionId = _ref260.sourceQuestionId,\n        groupNumber = _ref260.groupNumber,\n        eventType = _ref260.eventType;\n    return this.getAnswer(sourceQuestionId).partial.addressLine2;\n  },\n  f332: function isQuestionDependentAnswer0ContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref261) {\n    var questionId = _ref261.questionId,\n        sourceQuestionId = _ref261.sourceQuestionId,\n        groupNumber = _ref261.groupNumber,\n        eventType = _ref261.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f333: function dependentAnswerContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref262) {\n    var questionId = _ref262.questionId,\n        sourceQuestionId = _ref262.sourceQuestionId,\n        groupNumber = _ref262.groupNumber,\n        eventType = _ref262.eventType;\n    return this.getAnswer(sourceQuestionId).partial.townCity;\n  },\n  f334: function isQuestionDependentAnswer0ContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref263) {\n    var questionId = _ref263.questionId,\n        sourceQuestionId = _ref263.sourceQuestionId,\n        groupNumber = _ref263.groupNumber,\n        eventType = _ref263.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f335: function dependentAnswerContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref264) {\n    var questionId = _ref264.questionId,\n        sourceQuestionId = _ref264.sourceQuestionId,\n        groupNumber = _ref264.groupNumber,\n        eventType = _ref264.eventType;\n    return this.getAnswer(sourceQuestionId).partial.county;\n  },\n  f336: function isQuestionDependentAnswer0ContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref265) {\n    var questionId = _ref265.questionId,\n        sourceQuestionId = _ref265.sourceQuestionId,\n        groupNumber = _ref265.groupNumber,\n        eventType = _ref265.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f337: function dependentAnswerContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref266) {\n    var questionId = _ref266.questionId,\n        sourceQuestionId = _ref266.sourceQuestionId,\n        groupNumber = _ref266.groupNumber,\n        eventType = _ref266.eventType;\n    return this.getAnswer(sourceQuestionId).partial.postcode;\n  },\n  f338: function isQuestionDependentAnswer0ContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref267) {\n    var questionId = _ref267.questionId,\n        sourceQuestionId = _ref267.sourceQuestionId,\n        groupNumber = _ref267.groupNumber,\n        eventType = _ref267.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f339: function dependentAnswerContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref268) {\n    var questionId = _ref268.questionId,\n        sourceQuestionId = _ref268.sourceQuestionId,\n        groupNumber = _ref268.groupNumber,\n        eventType = _ref268.eventType;\n    return this.getAnswer(sourceQuestionId).partial.addressId;\n  },\n  f340: function isQuestionDependentAnswer0ContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref269) {\n    var questionId = _ref269.questionId,\n        sourceQuestionId = _ref269.sourceQuestionId,\n        groupNumber = _ref269.groupNumber,\n        eventType = _ref269.eventType;\n    return !!this.getAnswer(sourceQuestionId).partial;\n  },\n  f341: function dependentAnswerContactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5(_ref270) {\n    var questionId = _ref270.questionId,\n        sourceQuestionId = _ref270.sourceQuestionId,\n        groupNumber = _ref270.groupNumber,\n        eventType = _ref270.eventType;\n    return this.getAnswer(sourceQuestionId).partial.addressLookupJson;\n  },\n  f342: function contactAddressLookupResultsFba02e81a0e6452abe67059352e0f5a5_0RequiredValidatorCondition(fieldName, fieldValue, fields, eventType) {\n    return this.isElementVisible(fieldName);\n  },\n  f343: function isQuestionPrerequisite0ContactPropertyNameNumber47a53004a5ee496db01e448017e5445d(_ref271) {\n    var questionId = _ref271.questionId,\n        sourceQuestionId = _ref271.sourceQuestionId,\n        groupNumber = _ref271.groupNumber,\n        eventType = _ref271.eventType;\n    return this.getAnswerValue("93622370-4121-11ea-8d4c-ab6d2f0166c9") === false;\n  },\n  f344: function isQuestionPrerequisite0ContactPostcode05bc6b17ca8e446fa20b050fa72be9fc(_ref272) {\n    var questionId = _ref272.questionId,\n        sourceQuestionId = _ref272.sourceQuestionId,\n        groupNumber = _ref272.groupNumber,\n        eventType = _ref272.eventType;\n    return this.getAnswerValue("93622370-4121-11ea-8d4c-ab6d2f0166c9") === false;\n  },\n  f345: function isQuestionDependentAnswer0ContactPostcode05bc6b17ca8e446fa20b050fa72be9fc(_ref273) {\n    var questionId = _ref273.questionId,\n        sourceQuestionId = _ref273.sourceQuestionId,\n        groupNumber = _ref273.groupNumber,\n        eventType = _ref273.eventType;\n    return eventType === \'change\';\n  },\n  f346: function isQuestionPrerequisite0ContactAddressId436727b4979c4fa4b1f970df0c1cadf8(_ref274) {\n    var questionId = _ref274.questionId,\n        sourceQuestionId = _ref274.sourceQuestionId,\n        groupNumber = _ref274.groupNumber,\n        eventType = _ref274.eventType;\n    return this.getAnswerValue("93622370-4121-11ea-8d4c-ab6d2f0166c9") === false;\n  },\n  f347: function isQuestionDependentAnswer0ContactAddressId436727b4979c4fa4b1f970df0c1cadf8(_ref275) {\n    var questionId = _ref275.questionId,\n        sourceQuestionId = _ref275.sourceQuestionId,\n        groupNumber = _ref275.groupNumber,\n        eventType = _ref275.eventType;\n    return this.getAnswerValue("436727b4-979c-4fa4-b1f9-70df0c1cadf8") === \'\';\n  },\n  f348: function isQuestionPrerequisite0ContactAddressLine11a7f393d5fc74c06a37d479e02c7b051(_ref276) {\n    var questionId = _ref276.questionId,\n        sourceQuestionId = _ref276.sourceQuestionId,\n        groupNumber = _ref276.groupNumber,\n        eventType = _ref276.eventType;\n    return this.getAnswerValue("93622370-4121-11ea-8d4c-ab6d2f0166c9") === false;\n  },\n  f349: function contactAddressLine11a7f393d5fc74c06a37d479e02c7b051_0RequiredValidatorCondition(fieldName, fieldValue, fields, eventType) {\n    return this.isElementVisible(fieldName);\n  },\n  f350: function isQuestionPrerequisite0ContactAddressLine2Ec1211db19d54a469019ac5ca18578b3(_ref277) {\n    var questionId = _ref277.questionId,\n        sourceQuestionId = _ref277.sourceQuestionId,\n        groupNumber = _ref277.groupNumber,\n        eventType = _ref277.eventType;\n    return this.getAnswerValue("93622370-4121-11ea-8d4c-ab6d2f0166c9") === false;\n  },\n  f351: function isQuestionPrerequisite0ContactTownCityA845ddf7d4ba4ceeb03a67a3212c9b08(_ref278) {\n    var questionId = _ref278.questionId,\n        sourceQuestionId = _ref278.sourceQuestionId,\n        groupNumber = _ref278.groupNumber,\n        eventType = _ref278.eventType;\n    return this.getAnswerValue("93622370-4121-11ea-8d4c-ab6d2f0166c9") === false;\n  },\n  f352: function contactTownCityA845ddf7d4ba4ceeb03a67a3212c9b08_0RequiredValidatorCondition(fieldName, fieldValue, fields, eventType) {\n    return this.isElementVisible(fieldName);\n  },\n  f353: function isQuestionPrerequisite0ContactCounty7b2a69dc47bf477282f7cb1c1431944a(_ref279) {\n    var questionId = _ref279.questionId,\n        sourceQuestionId = _ref279.sourceQuestionId,\n        groupNumber = _ref279.groupNumber,\n        eventType = _ref279.eventType;\n    return this.getAnswerValue("93622370-4121-11ea-8d4c-ab6d2f0166c9") === false;\n  },\n  f354: function contactCounty7b2a69dc47bf477282f7cb1c1431944a_0RequiredValidatorCondition(fieldName, fieldValue, fields, eventType) {\n    return this.isElementVisible(fieldName);\n  },\n  f355: function isQuestionPrerequisite0OrdinalBankruptcyCCJIVA42e337c0411411ea8d4cab6d2f0166c9(_ref280) {\n    var questionId = _ref280.questionId,\n        sourceQuestionId = _ref280.sourceQuestionId,\n        groupNumber = _ref280.groupNumber,\n        eventType = _ref280.eventType;\n    return this.getAnswerValue("ea226c50-4113-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f356: function isQuestionPrerequisite0Ordinalbike48fd7ef03eca11ea9974a9ac1356511b(_ref281) {\n    var questionId = _ref281.questionId,\n        sourceQuestionId = _ref281.sourceQuestionId,\n        groupNumber = _ref281.groupNumber,\n        eventType = _ref281.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true && this.getAnswerValue("d6ba1790-3ec9-11ea-9974-a9ac1356511b") === true;\n  },\n  f357: function isQuestionPrerequisite0OrdinalcancelledinsuranceB0c7d6b0410511ea854a85cd7b624796(_ref282) {\n    var questionId = _ref282.questionId,\n        sourceQuestionId = _ref282.sourceQuestionId,\n        groupNumber = _ref282.groupNumber,\n        eventType = _ref282.eventType;\n    return this.getAnswerValue("5b057e30-4105-11ea-854a-85cd7b624796") === true;\n  },\n  f358: function isQuestionPrerequisite0OrdinalclaimC9b6978fe492429aba2a6e5b617b5a4a(_ref283) {\n    var questionId = _ref283.questionId,\n        sourceQuestionId = _ref283.sourceQuestionId,\n        groupNumber = _ref283.groupNumber,\n        eventType = _ref283.eventType;\n    return this.getAnswerValue("d05ba711-5434-4ecc-9ace-c89e95dcb20a") === true;\n  },\n  f359: function isQuestionPrerequisite0Ordinalcriminalconviction63bd0780411611ea8d4cab6d2f0166c9(_ref284) {\n    var questionId = _ref284.questionId,\n        sourceQuestionId = _ref284.sourceQuestionId,\n        groupNumber = _ref284.groupNumber,\n        eventType = _ref284.eventType;\n    return this.getAnswerValue("432e86b0-4116-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f360: function isQuestionPrerequisite0OrdinalfloodFfdfd3d03eab11ea9efff118e7c9b0f4(_ref285) {\n    var questionId = _ref285.questionId,\n        sourceQuestionId = _ref285.sourceQuestionId,\n        groupNumber = _ref285.groupNumber,\n        eventType = _ref285.eventType;\n    return this.getAnswerValue("0262a390-3eab-11ea-9eff-f118e7c9b0f4") === true;\n  },\n  f361: function isQuestionPrerequisite0Ordinalgadget48fd7ef23eca11ea9974a9ac1356511b(_ref286) {\n    var questionId = _ref286.questionId,\n        sourceQuestionId = _ref286.sourceQuestionId,\n        groupNumber = _ref286.groupNumber,\n        eventType = _ref286.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true && this.getAnswerValue("432e74f0-3ecc-11ea-9974-a9ac1356511b") === true;\n  },\n  f362: function isQuestionPrerequisite0OrdinalHighRiskItem48fd7ef33eca11ea9974a9ac1356511b(_ref287) {\n    var questionId = _ref287.questionId,\n        sourceQuestionId = _ref287.sourceQuestionId,\n        groupNumber = _ref287.groupNumber,\n        eventType = _ref287.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true && this.getAnswerValue("5a33e670-3ecd-11ea-9974-a9ac1356511b") === true;\n  },\n  f363: function isQuestionPrerequisite0OrdinalLiabilityclaim85b5bc20411511ea8d4cab6d2f0166c9(_ref288) {\n    var questionId = _ref288.questionId,\n        sourceQuestionId = _ref288.sourceQuestionId,\n        groupNumber = _ref288.groupNumber,\n        eventType = _ref288.eventType;\n    return this.getAnswerValue("2ec85120-4115-11ea-8d4c-ab6d2f0166c9") === true;\n  },\n  f364: function isQuestionPrerequisite0Ordinalmobilephone48fd7ef13eca11ea9974a9ac1356511b(_ref289) {\n    var questionId = _ref289.questionId,\n        sourceQuestionId = _ref289.sourceQuestionId,\n        groupNumber = _ref289.groupNumber,\n        eventType = _ref289.eventType;\n    return this.getAnswerValue("b7ff1e40-3ec9-11ea-9974-a9ac1356511b") === true && this.getAnswerValue("976ba980-3ecb-11ea-9974-a9ac1356511b") === true;\n  },\n  f365: function isQuestionPrerequisite0Ordinalpolicyholder95748bb0410011ea854a85cd7b624796(_ref290) {\n    var questionId = _ref290.questionId,\n        sourceQuestionId = _ref290.sourceQuestionId,\n        groupNumber = _ref290.groupNumber,\n        eventType = _ref290.eventType;\n    return this.getAnswerValue("639adfb0-40f9-11ea-854a-85cd7b624796") === true;\n  },\n  f366: function isQuestionPrerequisite0OrdinaltreeA8f887c03e0511eaa17c1fc30bae3b9d(_ref291) {\n    var questionId = _ref291.questionId,\n        sourceQuestionId = _ref291.sourceQuestionId,\n        groupNumber = _ref291.groupNumber,\n        eventType = _ref291.eventType;\n    return this.getAnswerValue("4f244d60-3d3d-11ea-9270-e124e355055b") === true;\n  }\n}'
};
