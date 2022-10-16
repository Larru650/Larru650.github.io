import { basicSorter, SMap } from '@avantia/client-and-server-utilities';
import { HpIntegerValidatorDataProps, HpValidatorTypes, HpValidatorUnionProps } from '@avantia/form-validation';
import {
  copyQuestionSet,
  createCommonLookupRef,
  getCommonLookupRef,
  HpAnswerValueTypes,
  HpButtonData,
  HpQuestion,
  HpQuestionData,
  HpQuestionLookupItem,
  HpQuestionLookupItemMap,
  HpQuestionMap,
  HpQuestionSet,
  HpSectionMap,
  isCommonLookupRef
} from '@avantia/questionset-model';
import { applyJsonFixes } from '@avantia/questionset-script-parser';
import fs from 'fs';
import lodash from 'lodash';
import { resolve as resolvePath } from 'path';
import { v4 as uuid } from 'uuid';
import { createMappingFieldToEnumMap } from '../server/nhiIntegration/mappingFieldToEnumMap';
import { qabEnumTypes } from '../server/nhiIntegration/qabEnumTypes';
import { getOptimisedQuestionSet } from '../server/questionSetFeature';
import { HpClientQuestionMap } from '../src/interfaces';
import { createQuestionIdSorter } from '../src/reducers/questionSetTools';

declare const __dirname: string;

type NameFilter = (name: string) => boolean;

interface MinimiseOptions {
  forceQuestionIdUuids: boolean;
  sortQuestions: boolean;
  syncTestNameWithQuestionSet: boolean;
  updateAutomationScripts: boolean;
}

const prefixCode = 'ky';
const numericValidators: HpValidatorTypes[] = ['currency', 'integer', 'numeric', 'numeric-pattern'];
const basePath = __dirname + '/../server/cannedResponses/questionSets';
const fileOptions = { encoding: 'utf-8' };
const files = fs.readdirSync(basePath);
const sectionFieldToEnumMap = createMappingFieldToEnumMap();
const commonLookupYesNoExpr = createCommonLookupRef('yesNo');

// will not be cross-checked against qabEnumTypes
const ignoredMappingFields = [
  'TypeOfCover',
  'NumberOfBedrooms',
  'YearsHeldBuildingInsurance',
  'RoofConstructionMaterial',
  'RoofFlatPortionConstructionMaterial',
  'WallConstructionMaterialTypeSelected',
  'TypeOfLocks',
  'SafeRating',
  'WhyIsNotInGoodStateOfRepair'
];

const doNotSortTheseMappingFields = [
  'FrequencyOfBusinessVisitors',
  'NumberOfAdults',
  'NumberOfChildren',
  'StaffAtProperty',
  'MaximumNumberOfGuests',
  'Title',
  'PersonTitle',
  'BankruptcyTitle',
  'InsuranceCancelledTitle',
  'JointPolicyHolderTitle',
  'ClaimsAndLossesTypeOfClaim',
  'WhoLivesAtPropertyOptions'
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const questionSetFilter = (name: string): boolean => {
  return true; // name === 'Quote Journey.json';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const seleniumScriptFilter = (name: string): boolean => {
  return true; //name === 'QAB - SpeedTest - New Journey.json';
};

/*****************
Entrypoint to script
****************/
processQuestionSets(questionSetFilter, seleniumScriptFilter, {
  forceQuestionIdUuids: false,
  sortQuestions: true,
  syncTestNameWithQuestionSet: true,
  updateAutomationScripts: true
});

function processQuestionSets(
  questionSetFilter: NameFilter,
  seleniumScriptFilter: NameFilter,
  options: MinimiseOptions
): void {
  let count = 0;
  files.forEach((file) => {
    const fullFile = basePath + '/' + file;
    const stat = fs.statSync(fullFile);
    if (stat.isFile() && (!questionSetFilter || questionSetFilter(file))) {
      const content = String(fs.readFileSync(fullFile, fileOptions));
      let fixed = applyJsonFixes(content);
      let qset = copyQuestionSet(JSON.parse(fixed) as HpQuestionSet, false);
      qset = replaceNonUuidQuestionIds(qset, seleniumScriptFilter, options);
      minimiseQuestionSet(qset, options);

      // TODO Remove this (it's here to aid mapping/testing but is definitely only temporary)
      if (qset.questionSetId === '733bb11b-d17e-4fc5-9f6d-9ad3dbcf811b') {
        const qsetCopy = JSON.parse(JSON.stringify(qset)) as HpQuestionSet;
        getOptimisedQuestionSet(qsetCopy, '')
          .then((qs) => {
            const qsJson = JSON.stringify(qs);
            fs.writeFileSync(
              `${basePath}/../../nhiIntegration/data/compiledQuestionSet.ts`,
              `export const compiledQuestionSet = ${qsJson};`
            );
          })
          .catch((err) => {
            console.error(err);
          });
      }
      fixed = JSON.stringify(qset, null, 2);
      if (content !== fixed) {
        fs.writeFileSync(fullFile, fixed, fileOptions);
        console.log(`Wrote a fixed version of ${file}.`);
        count++;
      }
    }
  });

  console.log(`Made ${count === 0 ? 'no' : count} change${count !== 1 ? 's' : ''} to questionSets.`);
}

function minimiseQuestionSet(qset: HpQuestionSet, options: MinimiseOptions): void {
  const { questions, sections, commonLookups } = qset;
  const yesNoLookup: SMap<HpQuestionLookupItem> = {
    true: {
      text: 'Yes'
    },
    false: {
      text: 'No'
    }
  };

  let yesNoLookupExprCount = 0;

  for (const questionId in questions) {
    const question = questions[questionId];
    const questionData = question.data as HpQuestionData;
    const buttonData = question.data as HpButtonData;
    const { dataType, mappingField, prerequisites } = question;
    const { textAndStyle } = buttonData;
    const { controlType } = textAndStyle.standard;
    // eslint-disable-next-line prefer-const
    let { lookup, lookupExpr, validation } = questionData;
    const usingCommonLookup = lookupExpr && isCommonLookupRef(lookupExpr);

    // Lookups
    if (mappingField) {
      if (usingCommonLookup) {
        lookup = commonLookups[getCommonLookupRef(lookupExpr as string) as string] as HpQuestionLookupItemMap;
      }

      const result = applyNhiCodeToLookup(
        lookup,
        mappingField,
        controlType === 'AutoCompleteList' ? 'text' : undefined
      );
      if (!!lookup && result === 'untouched' && doNotSortTheseMappingFields.indexOf(mappingField) < 0) {
        const lookupKeys = lodash.keys(lookup);
        sortLookup({ lookupKeys, lookup, mappingField, prefixCode, newKeys: [...lookupKeys], newMap: { ...lookup } });
      }
    }

    const lookupExprMinimised = minimiseLookup(lookup, yesNoLookup);
    if (lookupExprMinimised) {
      delete questionData.lookup;
      questionData.lookupExpr = lookupExprMinimised;
    }

    yesNoLookupExprCount += questionData.lookupExpr === commonLookupYesNoExpr ? 1 : 0;

    // Buttons
    if (dataType === 'button' || controlType === 'Button') {
      question.dataType = 'button';
      textAndStyle.standard.controlType = 'Button';
      delete question.mappingField;
    }

    if (
      prerequisites &&
      prerequisites.length > 0 &&
      !(controlType && (controlType.endsWith('View') || controlType.indexOf('ReadOnly'))) &&
      question.visible === false
    ) {
      delete question.visible;
    }

    if (controlType === 'AutoCompleteList') {
      question.isMultiSelect = false;
      question.dataType = 'string';
    }

    if (dataType === 'array' || dataType === 'stringArray' || question.isMultiSelect === true) {
      question.isMultiSelect = true;
      question.dataType = 'array';
    } else {
      delete question.isMultiSelect;
    }

    // Add numeric validators where missing
    if (validation) {
      if (dataType === 'number') {
        const hasNumericValidator =
          validation.filter((v) => {
            const type = (v as HpValidatorUnionProps).type;
            return numericValidators.indexOf(type) >= 0;
          }).length > 0;

        if (!hasNumericValidator) {
          const intVal: HpIntegerValidatorDataProps = {
            type: 'integer',
            messages: {}
          };
          validation.push(intVal);
        }
      }
    }

    removeOptionalValues(question);
  }

  // Minimise commonLookups
  let hasYesNoLookup = false;
  lodash.forOwn(commonLookups, (lookup) => {
    const ref = minimiseLookup(lookup, yesNoLookup);
    if (ref === commonLookupYesNoExpr) {
      hasYesNoLookup = true;
    }
  });

  if (yesNoLookupExprCount > 0 && !hasYesNoLookup) {
    const yesNoKey = getCommonLookupRef(commonLookupYesNoExpr) as string;
    commonLookups[yesNoKey] = yesNoLookup;
  }

  // Order sections based upon their 'order' property.
  qset.sections = orderSections(sections);

  if (options.sortQuestions) {
    qset.questions = orderQuestions(questions, qset.sections);
  }
}

function removeOptionalValues(question: HpQuestion): void {
  const optionalKeys: (keyof HpQuestion)[] = [
    'label',
    'groupId',
    'groupOrder',
    'default',
    'defaultExpr',
    'gtmTag',
    'prerequisites',
    'calculatedAnswer'
  ];
  for (const optionalKey of optionalKeys) {
    if (!isPopulated(question[optionalKey] as HpAnswerValueTypes)) {
      delete question[optionalKey];
    }
  }

  const implicitBools: {
    prop: keyof HpQuestion;
    removeValue: boolean;
  }[] = [
    { prop: 'isMultiSelect', removeValue: false },
    { prop: 'isDefaultImplicit', removeValue: false },
    { prop: 'disabled', removeValue: false },
    { prop: 'visible', removeValue: true }
  ];

  for (const { prop, removeValue } of implicitBools) {
    if (question[prop] === undefined || question[prop] === removeValue) {
      delete question[prop];
    }
  }

  const data = question.data as HpQuestionData;
  let optionalDataKeys: string[];
  if (question.dataType !== 'button') {
    const keys: (keyof HpQuestionData)[] = [
      'dependentActions',
      'dependentAnswers',
      'lookup',
      'lookupExpr',
      'helpInfo',
      'validation'
    ];
    optionalDataKeys = keys;
  } else {
    const keys: (keyof HpButtonData)[] = ['dependentActions', 'validation'];
    optionalDataKeys = keys;
  }

  for (const optionalKey of optionalDataKeys) {
    if (!isPopulated(data[optionalKey] as HpAnswerValueTypes)) {
      delete data[optionalKey];
    }
  }
}

function isPopulated(value: HpAnswerValueTypes | undefined): boolean {
  if (value === null || value === undefined) {
    return false;
  }

  if (lodash.isArray(value) && value.length === 0) {
    return false;
  }

  if (typeof value === 'string' && value.length == 0) {
    return false;
  }

  if (typeof value === 'object' && lodash.keys(value).length === 0) {
    return false;
  }

  return true;
}

export function orderQuestions(questions: HpQuestionMap, sections: HpSectionMap): HpQuestionMap {
  const fakeClientQuestions = (questions as unknown) as HpClientQuestionMap;
  let ix = 0;
  lodash.forOwn(fakeClientQuestions, (q) => {
    q.position = ix++;
  });
  const questionIdSorter = createQuestionIdSorter(fakeClientQuestions);

  // Order questions initially on their section order (ignoring groups).
  const sectionPos: SMap<number> = {};
  let pos = 0;
  lodash.forOwn(sections, (_, key) => {
    sectionPos[key] = pos++;
  });

  let questionIds = lodash.keys(questions);
  questionIds = questionIds.sort((id1: string, id2: string) => {
    const { sectionId: sid1 } = questions[id1];
    const { sectionId: sid2 } = questions[id2];
    const spos1 = sectionPos[sid1];
    const spos2 = sectionPos[sid2];
    let res = basicSorter(spos1, spos2);
    if (res === 0) {
      res = questionIdSorter(id1, id2);
    }

    return res;
  });

  const qs: HpQuestionMap = {};
  for (const qid of questionIds) {
    const q = questions[qid];
    delete (q as any).position;
    qs[qid] = q;
  }

  return qs;
}

function orderSections(sections: HpSectionMap): HpSectionMap {
  const sectionIds = lodash.keys(sections);
  sectionIds.sort((id1: string, id2: string) => {
    // eslint-disable-next-line prefer-const
    let { position: pos1, isTemplate: isTemp1, title: title1, controlType: ctrlType1 } = sections[id1];
    // eslint-disable-next-line prefer-const
    let { position: pos2, isTemplate: isTemp2, title: title2, controlType: ctrlType2 } = sections[id2];
    if (!!ctrlType1 && !isTemp1) {
      isTemp1 = true;
    }

    if (!!ctrlType2 && !isTemp2) {
      isTemp2 = true;
    }

    let res = 0;

    if (res === 0) {
      res = !!ctrlType1 && !ctrlType2 ? 1 : !ctrlType1 && !!ctrlType2 ? -1 : 0;
    }

    if (res === 0) {
      res = isTemp1 && !isTemp2 ? 1 : !isTemp1 && isTemp2 ? -1 : 0;
    }

    if (res === 0) {
      if (pos1 <= 0) {
        pos1 = 999999;
      }

      if (pos2 <= 0) {
        pos2 = 999999;
      }

      res = pos1 < pos2 ? -1 : pos1 > pos2 ? 1 : 0;
      if (res === 0) {
        title1 = title1.toLowerCase();
        title2 = title2.toLowerCase();
        res = title1 < title2 ? -1 : title1 > title2 ? 1 : 0;
      }
    }

    if (res === 0) {
      res = id1 < id2 ? -1 : id1 > id2 ? 1 : 0;
    }

    return res;
  });

  const ss: HpSectionMap = {};
  for (const sid of sectionIds) {
    ss[sid] = sections[sid];
  }

  return ss;
}

function applyNhiCodeToLookup(
  lookup: SMap<HpQuestionLookupItem | null> | undefined,
  mappingField: string,
  propertyToUse: 'text' | undefined
): 'untouched' | 'ignore' | 'processed' {
  const enumType = qabEnumTypes[sectionFieldToEnumMap[mappingField] || mappingField];
  if (!lookup || !enumType) {
    return 'untouched';
  }

  if (ignoredMappingFields.indexOf(mappingField) >= 0) {
    // We don't want to change these ones; they're already correct and running
    // them again will change for the worse (mostly by changing sort order)
    return 'ignore';
  }

  const keys = lodash.keys(lookup);

  if (keys.length === 0) {
    // This should only happen when we've intentionally emptied the lookup to repopulate with the enum list verbatim.
    keys.push(...enumType.map((e) => e.text));
  }

  const newKeys: string[] = [];
  const newMap: HpQuestionLookupItemMap = {};
  for (const key of keys) {
    const luItem = lookup[key];
    const keyText = luItem ? luItem.text : undefined;
    let item = enumType.filter(
      (e) =>
        areSame(e.text, key) ||
        areSame(e.shortText, key) ||
        e.enumType === key ||
        (e.overrideText && e.overrideText.filter((t) => areSame(t, key)).length > 0)
    )[0];
    if (!item && keyText && keyText !== key) {
      item = enumType.filter(
        (e) =>
          e.text === keyText ||
          e.shortText === keyText ||
          e.enumType === keyText ||
          (e.overrideText && e.overrideText.filter((t) => areSame(t, keyText)).length > 0)
      )[0];
    }

    let newKey = item ? item.code : key;
    if (
      parseFloat(newKey) + '' === lodash.trimStart(newKey, '0') ||
      newKey === '00000000000000'.substring(0, newKey.length)
    ) {
      newKey = prefixCode + newKey;
    }

    const lookupItem = lookup[key];
    const texts: string[] = [];
    if (item) {
      if (item.overrideText) {
        texts.push(...item.overrideText);
      } else if (item.text) {
        texts.push(item.text);
      }
    }

    if (texts.length === 0) {
      texts.push((lookupItem ? lookupItem.text : '') || key);
    }

    if (item && propertyToUse === 'text') {
      const text = (item.overrideText ? item.overrideText[0] : null) || item.text;
      newKeys.push(text);
      newMap[text] = { text };
    } else {
      const moreThan1 = texts.length > 1;
      for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        const tmpKey = moreThan1 ? `${newKey}>${i + 1}` : newKey;
        newKeys.push(tmpKey);
        newMap[tmpKey] = { ...lookup[key], text };
      }
    }
  }

  sortLookup({ lookupKeys: keys, lookup, newKeys, newMap, prefixCode, mappingField });
  return 'processed';
}

interface SortLookupProps {
  lookupKeys: string[];
  lookup: HpQuestionLookupItemMap;
  newKeys: string[];
  newMap: HpQuestionLookupItemMap;
  prefixCode: string;
  mappingField: string;
}

function sortLookup({ lookupKeys, lookup, newKeys, newMap, prefixCode, mappingField }: SortLookupProps): void {
  lookupKeys.forEach((key) => delete lookup[key]);
  const removePrefix = areAllKeysNumericAndAscending(newKeys, prefixCode);
  let sortedKeys = newKeys;
  if (!removePrefix && sortedKeys.length > 7 && doNotSortTheseMappingFields.indexOf(mappingField) < 0) {
    const otherText = 'Other';
    const otherAltText = 'Other '; // No idea. See BusinessType.cs line 556.
    sortedKeys = newKeys.sort((a, b) => {
      const itemA = newMap[a];
      const itemB = newMap[b];
      const valA = (itemA ? itemA.text : '') || a;
      const valB = (itemB ? itemB.text : '') || b;
      if (valA !== valB) {
        if (valA === otherText || valA === otherAltText) {
          return 1;
        } else if (valB === otherText || valB === otherAltText) {
          return -1;
        }
      }

      return basicSorter(valA, valB);
    });
  }

  sortedKeys.forEach((key) => (lookup[removePrefix ? key.substring(prefixCode.length) : key] = newMap[key]));
}

function areAllKeysNumericAndAscending(newKeys: string[], prefixCode: string): boolean {
  let isNumeric = 0;
  let isAscending = true;
  let prev = -9999;
  newKeys.forEach((key) => {
    if (key.startsWith(prefixCode)) {
      isNumeric++;
      const code = key.substring(prefixCode.length);
      const num = parseFloat(code);

      // This won't work if the numeric value has a '0' prefix (in which case
      // it will be treated by V8 as alphanumeric and appear after all numeric keys).
      if (prev < num && num + '' === code) {
        prev = num;
      } else {
        isAscending = false;
      }
    } else {
      isAscending = false;
    }
  });

  return isNumeric === newKeys.length && isAscending;
}

function minimiseLookup(
  lookup: SMap<HpQuestionLookupItem | null> | undefined,
  yesNoLookup?: SMap<HpQuestionLookupItem>
): undefined | string {
  if (lookup) {
    const keys = lodash.keys(lookup);

    if (yesNoLookup && keys.length === 2 && keys[0] === 'true' && keys[1] === 'false') {
      if (JSON.stringify(lookup) === JSON.stringify(yesNoLookup)) {
        return commonLookupYesNoExpr;
      }
    }

    for (const key of keys) {
      const item = lookup[key];
      if (item) {
        if (key === item.text) {
          const keys = lodash.keys(item);
          if (keys.length === 1 && keys[0] === 'text') {
            lookup[key] = null;
          } else {
            delete item.text;
          }
        }
      }
    }
  }

  return undefined;
}

function replaceNonUuidQuestionIds(
  qset: HpQuestionSet,
  seleniumScriptFilter: NameFilter,
  options: MinimiseOptions
): HpQuestionSet {
  const { questions } = qset;
  const questionIds = lodash.keys(questions);
  const map = new Map<string, string>();
  const names = new Map<string, string>();
  const gtmTags = new Map<string, string>();
  if (options.forceQuestionIdUuids) {
    questionIds.forEach((qid) => {
      if (!isUuid(qid)) {
        const newId = uuid();
        if (!map.has(qid)) {
          const question = questions[qid];
          map.set(qid, newId);
          names.set(newId, question.name);
          if (question.gtmTag === qid) {
            gtmTags.set(newId, question.gtmTag);
          }
        } else {
          console.warn(`Already have a key: [${qid}]`);
        }
      }
    });
  }

  let json = JSON.stringify(qset);
  json = replaceContentQuestionSet(json, map);

  if (options.updateAutomationScripts) {
    updateAutomationScripts(qset, (content) => replaceContentSelenium(content, map), seleniumScriptFilter, options);
  }

  const nameKeys = [...names.keys()];
  const gtmKeys = [...gtmTags.keys()];

  const qsetNew = JSON.parse(json) as HpQuestionSet;

  // Change 'name' back if it matched the ID.
  for (const key of nameKeys) {
    (qsetNew.questions[key] as HpQuestion).name = names.get(key) as string;
  }

  // Change 'gtmTag' back if it matched the ID.
  for (const key of gtmKeys) {
    (qsetNew.questions[key] as HpQuestion).gtmTag = gtmTags.get(key) as string;
  }

  return qsetNew;
}

interface ReplaceItem {
  p: string; // prefix
  s: string; // suffix
}

function replaceContentQuestionSet(text: string, replace: Map<string, string>): string {
  const replacements: ReplaceItem[] = [
    { p: "'", s: "'" },
    { p: '"', s: '"' },
    { p: "\\'", s: "\\'" },
    { p: '\\"', s: '\\"' }
  ];
  return replaceIn(text, replace, (res, key, value) => {
    for (const { p: prefix, s: suffix } of replacements) {
      res = res.replace(prefix + key + suffix, prefix + value + suffix);
    }

    return res;
  });
}

function replaceContentSelenium(text: string, replace: Map<string, string>): string {
  const prefixes = ['Q', 'QP', 'L', '"', "'"];
  const suffixes = ['~', '"', "'", ' ', '.'];
  let replacements: ReplaceItem[] = [];

  for (const s of suffixes) {
    for (const p of prefixes) {
      replacements.push({ p, s });
    }
  }

  replacements.push({ p: 'ERR', s: '' });
  replacements.push({ p: '"target": "', s: '.' });
  replacements = replacements.sort();

  return replaceIn(text, replace, (res, key, value) => {
    for (const { p: prefix, s: suffix } of replacements) {
      res = res.replace(prefix + key + suffix, prefix + value + suffix);
    }

    return res;
  });
}

function replaceIn(
  text: string,
  replace: Map<string, string>,
  replaceFunc: (text: string, key: string, value: string) => string
): string {
  let res = text;
  let keys = [...replace.keys()];
  keys = keys.sort().reverse(); // so e.g. postcode comes after postcodeTerm, and so replacements are not corrupted

  for (const key of keys) {
    const value = replace.get(key) as string;
    let prev: string;
    do {
      prev = res;
      res = replaceFunc(res, key, value);
    } while (prev !== res);
  }

  return res;
}

function updateAutomationScripts(
  questionSet: HpQuestionSet,
  action: (data: string) => string,
  seleniumScriptFilter: NameFilter,
  options: MinimiseOptions
): void {
  const basePath = resolvePath(
    `${__dirname}/../../../TestAutomation/SeleniumTestConsole/Avantia.SeleniumTestConsole/scripts`
  );
  if (!fs.existsSync(basePath)) {
    console.error(`The Selenium script path does not exist. Checked "${basePath}".`);
    return;
  }

  for (const file of fs.readdirSync(basePath, fileOptions)) {
    if (seleniumScriptFilter && !seleniumScriptFilter(String(file))) {
      continue;
    }

    const fullPath = basePath + '/' + file;
    const content = String(fs.readFileSync(fullPath));
    let script: TestData;
    try {
      script = JSON.parse(content);
    } catch (err) {
      console.warn(`Unable to parse '${fullPath}': ${err}`);
      continue;
    }

    let matchingTests = script.tests;
    if (!script.tests) {
      // It's a Shard
      continue;
    }

    const { questionSetId, friendlyName } = questionSet;
    let changed = 0;
    matchingTests = matchingTests.filter((t) => areSame(t.questionSetId, questionSetId));

    if (options.syncTestNameWithQuestionSet) {
      if (matchingTests.length === 1) {
        const test = matchingTests[0];
        if (test.name !== friendlyName && test.questionSetId === questionSetId) {
          test.name = friendlyName;
          changed++;
        }

        const questions = questionSet.questions;
        const uuidLen = uuid().length;
        for (const cmd of test.commands) {
          const { command, target } = cmd;
          const isClick = areSame(command, 'click');
          const isType = areSame(command, 'type');
          if (isClick || isType) {
            const idPrefix = 'id=Q';
            const keyPrefix = '~K';
            if (target.startsWith(idPrefix)) {
              const endAt = idPrefix.length + uuidLen;
              const maybeId = target.substring(idPrefix.length, endAt);
              const rest = target.substring(endAt);
              const selectKey = rest.startsWith(keyPrefix) ? rest.substring(keyPrefix.length) : undefined;
              const question = questions[maybeId];
              if (question) {
                const { dataType, name, data } = question;
                const buttonOrField = dataType === 'button' ? 'button' : 'field';
                let comment: string | undefined;
                if (selectKey) {
                  const lookup = (data as HpQuestionData).lookup;
                  if (lookup && lookup[selectKey]) {
                    comment = `Select '${selectKey}' from the '${name}' ${buttonOrField}`;
                  }
                }

                if (!comment) {
                  comment = `${isType ? 'Enter' : command} ${
                    isType ? `'${cmd.value}' in` : 'on'
                  } the '${name}' ${buttonOrField}`;
                  if (comment !== cmd.comment) {
                    cmd.comment = comment;
                    changed++;
                  }
                }
              }
            }
          }
        }
      }
    }

    const map: SMap<TestItem> = {};
    matchingTests.forEach((mt) => {
      const json = JSON.stringify(mt);
      const result = action(json);
      if (json !== result) {
        changed++;
        map[mt.id] = JSON.parse(result);
      }
    });

    if (changed > 0) {
      lodash.forOwn(map, (test, id) => {
        const ix = script.tests.findIndex((t) => t.id === id);
        script.tests[ix] = test;
      });
      const result = JSON.stringify(script, null, 2);
      fs.writeFileSync(fullPath, result, fileOptions);
      console.log(`Wrote ${file}`);
    }
  }
}

function areSame(a: string | undefined, b: string | undefined): boolean {
  if ((a === undefined || a === null) && (b === undefined || b === null)) {
    return true;
  }

  return `${a}`.toLowerCase() === `${b}`.toLowerCase();
}

function isUuid(value: string): boolean {
  return /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value);
}

interface TestData {
  id: string;
  name: string;
  tests: TestItem[];
}

interface TestItem {
  id: string;
  name: string;
  questionSetId?: string | undefined;
  commands: TestCommand[];
}

interface TestCommand {
  id: string;
  comment: string;
  command: string;
  target: string;
  value: string;
}
