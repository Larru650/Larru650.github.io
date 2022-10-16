import { hasOwnProperty, SMap } from '@avantia/client-and-server-utilities';
import {
  createControlId,
  destructureControlId,
  HpAnswerValueTypes,
  HpQuestionSet,
  HpStandardInputTextAndStyle
} from '@avantia/questionset-model';
import lodash from 'lodash';
import { registerCustomFunctions } from '../../src/customFunctionRegistry';
import * as customFunctions from '../../src/customFunctions';
import { HpClientQuestionSetState, HpQuestionIdNode } from '../../src/interfaces';
import { createEmptyHpClientQuestionSetState } from '../../src/reducers/initialState';
import { questionSetPayloadMapper } from '../../src/reducers/questionSetPayloadMapper'; // TODO Reduce clientside dependencies.
import {
  isValidControlTypeVoid,
  processPrereqsAndCalcs,
  validateAndMaybeMoveSection
} from '../../src/reducers/questionSetReducerLibrary'; // TODO Reduce clientside dependencies.
import { ensureDefined, getAnswerValue } from '../../src/tools/utilities';
import {
  GetAnswerFunction,
  GetAnswerProps,
  HpValueToIndex,
  MappingFieldInputMap,
  MappingFieldToQuestionIdMap
} from './interfaces';
import { createMappingFieldToEnumMap, enumPropertyMap } from './mappingFieldToEnumMap';
import { QabEnumItem, qabEnumTypes } from './qabEnumTypes';

export function getListOfVisibleQuestionIds(questionSet: HpQuestionSet): string[] {
  registerCustomFunctions('*', customFunctions);
  const state = questionSetPayloadMapper({
    currState: createEmptyHpClientQuestionSetState(),
    payload: questionSet,
    errorIfNoPayload: true,
    isValidControlType: isValidControlTypeVoid
  }) as HpClientQuestionSetState;

  const sections = state.displayState.sections;
  const sectionIds = lodash.keys(sections);
  const visibleQuestions: HpQuestionIdNode[] = [];
  for (const sectionId of sectionIds) {
    const section = sections[sectionId];
    if (section.isGroup) {
      continue;
    }

    let sectionState = state;
    sectionState = validateAndMaybeMoveSection({
      state: sectionState,
      buttonAction: 'move-to-section',
      desiredSectionId: sectionId,
      options: { raiseEvents: false }
    });

    sectionState = processPrereqsAndCalcs('none', sectionState);
    if (sectionState.validationResult.count > 0) {
      throw new Error(
        `Errors found for section ${sectionId}: ${JSON.stringify(sectionState.validationResult.errors, null, 2)}`
      );
    }

    const currentId = sectionState.displayState.activeSectionId;

    // This should always be the case, except when errors prevent it.
    if (currentId === sectionId) {
      const ids = sectionState.displayState.visibleQuestionIds;

      // Find questions that are not visible and calculated - we need to process these too.
      lodash.forOwn(sectionState.questions, (q) => {
        if (q.sectionId === currentId && q.visible === false && q.calculatedAnswer) {
          ids.push(q.questionId);
        }
      });
      visibleQuestions.push(...ids);
    } else {
      throw new Error(`Expected to be on Section ID '${sectionId}' but instead on '${currentId}'`);
    }
  }

  const allVisibleIds: string[] = [];
  const dupes = new Map<string, true>();
  function addId(id: string): void {
    if (!dupes.has(id)) {
      allVisibleIds.push(id);
      dupes.set(id, true);
    } else {
      throw new Error(`Visible question ID '${id}' has already been added.`);
    }
  }

  for (let i = 0; i < visibleQuestions.length; i++) {
    const vq = visibleQuestions[i];
    if (typeof vq === 'string') {
      addId(vq);
    } else {
      vq.questions.forEach(addId);
    }
  }

  return allVisibleIds;
}

export function createMappingFieldMap(
  visibleQuestionIds: string[],
  questions: MappingFieldInputMap
): MappingFieldToQuestionIdMap {
  const mappingFields = new Map<string, string>();
  const errors: string[] = [];
  visibleQuestionIds.forEach((questionIdRaw) => {
    const { questionId } = destructureControlId(questionIdRaw, { requirePrefix: false });
    const question = questions[questionId];
    if (!question) {
      throw new Error(`There is no question with ID '${questionId}'.`);
    }

    const { mappingField } = question;
    if (mappingField) {
      if (mappingFields.has(mappingField)) {
        const otherId = mappingFields.get(mappingField) as string;
        // otherId will equal questionId when one is '~G01' and the other '~G02'.
        if (otherId !== questionId) {
          errors.push(
            `Duplicate 'mappingField' property value '${mappingField}' for questionId '${questionId}' (other questionId '${otherId}').`
          );
        }
      }

      mappingFields.set(mappingField, questionId);
    }
  });

  if (errors.length) {
    throw new Error(errors.join('\n'));
  }

  const keys = [...mappingFields.keys()];
  const res: MappingFieldToQuestionIdMap = {};
  for (const key of keys) {
    const value = mappingFields.get(key) as string;
    if (key.indexOf('~') > 0) {
      const parts = key.split('~');
      const keyPart = parts[0];
      const subKey = parts[1];
      const val = res[keyPart];
      if (val === undefined) {
        res[keyPart] = { [subKey]: value };
      } else if (typeof val === 'object') {
        res[keyPart][subKey] = value;
      } else {
        throw new Error(
          `The composite map '${key}' cannot be appended because the map already contains a value that is not a map.`
        );
      }
    } else {
      res[key] = value;
    }
  }

  return res;
}

const customMappings: SMap<SMap<string>> = {
  TypeOfCover: { BC: '2', B: '0', C: '1' }
};

const valueToIndexMap: SMap<HpValueToIndex> = createQabValueToIndexMap(qabEnumTypes, customMappings);
const sectionFieldToEnumMap = createMappingFieldToEnumMap();

// export type NhiAnswerType = number | string | boolean | string[];

export function getAnswer<SectionT>({
  mappingField,
  mappingFields,
  questions,
  answers,
  enumLookupMap,
  groupNumber,
  expectedType,
  diagnosticMode
}: GetAnswerProps<SectionT>): HpAnswerValueTypes {
  if (!enumLookupMap) {
    enumLookupMap = valueToIndexMap;
  }

  const mappingKey = sectionFieldToEnumMap[mappingField as string] || (mappingField as string);
  let qvalue = mappingFields[mappingField as string];
  if (!qvalue) {
    if (diagnosticMode) {
      throw new Error(
        `There is no mapping field for '${mappingField}'${mappingKey !== mappingField ? ` or '${mappingKey}'` : ''}.`
      );
    } else {
      switch (expectedType) {
        case 'number':
          return qabEnumTypes[mappingKey] ? 0 : null;
        default:
          return null;
      }
    }
  } else if (typeof qvalue === 'object') {
    const map = qvalue as SMap<string>;
    const mapKeys = lodash.keys(map);
    if (groupNumber !== undefined) {
      qvalue = mapKeys.filter((k) => {
        const { groupNumber: gno } = destructureControlId(k);
        return gno === groupNumber;
      })[0] as string;
      if (qvalue === undefined) {
        return (undefined as unknown) as string;
      }
    } else if (mapKeys.length === 1) {
      qvalue = map[mapKeys[0]] as string;
    } else {
      throw new Error(`Unable to handle composite keys at present (${JSON.stringify(qvalue)}).`);
    }
  }

  const qid = qvalue as string;
  const question = questions[qid];

  if (question) {
    const { dataType, data } = question;
    const { controlType } = ((data ? data.textAndStyle.standard : null) || {}) as HpStandardInputTextAndStyle;
    const answerId = createControlId({ questionId: qid, groupNumber, options: { noPrefix: true } });

    if (!hasOwnProperty(answers, answerId)) {
      return (undefined as unknown) as string;
    }

    let { answerValue } = getAnswerValue(answers[answerId], question, 'request');
    if (expectedType === 'raw') {
      return answerValue as any;
    }

    let isEnumType = false;
    // If it ends with 'Resident' it's a drop-down made up of 'Firstname Lastname'.
    if (
      dataType !== 'boolean' &&
      !!controlType &&
      controlType.endsWith('List') &&
      !(mappingField as string).endsWith('Resident')
    ) {
      isEnumType = true;
      answerValue = getMappingIndex(mappingKey, answerValue, enumLookupMap, diagnosticMode);
    }

    if (dataType === 'date') {
      answerValue += 'T00:00:00.000Z';
    }

    const actualType = typeof answerValue;
    if (actualType === expectedType) {
      return answerValue;
    }

    if (isEnumType && actualType === 'number' && expectedType === 'string') {
      const alternateProp = enumPropertyMap[mappingField as string];
      if (alternateProp) {
        const enumType = qabEnumTypes[mappingKey];
        const enumItem = lodash.find(enumType, (e) => e.index === answerValue);
        return ensureDefined(enumItem, `remapped ${mappingKey} Enum`)[alternateProp] as HpAnswerValueTypes;
      }
    }

    throw new Error(
      `The ${mappingField} was expected to be '${expectedType}' but was '${actualType}': [${answerValue}]`
    );
  }

  throw new Error(`There is no question with ID '${qid}'.`);
}

export function getMappingIndex<SectionT>(
  key: keyof SectionT,
  code: HpAnswerValueTypes,
  valueToIndexMap: SMap<HpValueToIndex>,
  diagnosticMode: boolean
): number {
  code = `${code}`;
  if (code.startsWith('ky')) {
    // 'ky' prefix means numeric keys don't get shunted to the front by V8 (and maybe others).
    code = code.substring(2);
  } else if (code.indexOf('>')) {
    // 'CODE>1', 'CODE>2' allows a code to be re-used against more than one display text (see HighRiskItemCategory).
    code = code.split('>')[0];
  }

  const map = valueToIndexMap[key as string];
  if (map) {
    const indexList = [
      map.code[code],
      map.overrideText[code],
      map.text[code],
      map.shortText[code],
      map.enumType[code],
      map.custom[code]
    ];
    for (let i = 0; i < indexList.length; i++) {
      const index = indexList[i];
      if (index !== undefined) {
        return index;
      }
    }
  } else {
    throw new Error(`There is no Enum called '${key}'.`);
  }

  if (diagnosticMode) {
    throw new Error(`There is no mapping for code '${code}' using Enum '${key}'.`);
  }

  return 0;
}

export function createQabValueToIndexMap(
  enumTypeMap: SMap<QabEnumItem[]>,
  customMappings?: SMap<SMap<string>>
): SMap<HpValueToIndex> {
  const enumTypes = lodash.keys(enumTypeMap);
  const indexMap: SMap<HpValueToIndex> = {};
  for (const enumType of enumTypes) {
    const items: QabEnumItem[] = enumTypeMap[enumType];
    const enumMap: HpValueToIndex = {
      code: {},
      text: {},
      enumType: {},
      shortText: {},
      overrideText: {},
      custom: {}
    };

    for (const { code, index, text, enumType, overrideText, shortText } of items) {
      enumMap.code[code] = index;
      enumMap.text[text] = index;
      enumMap.enumType[enumType] = index;
      if (shortText) {
        enumMap.shortText[shortText] = index;
      }

      if (overrideText) {
        for (const text of overrideText) {
          enumMap.overrideText[text] = index;
        }
      }
    }

    indexMap[enumType] = enumMap;
  }

  if (customMappings) {
    addCustomMappingsToIndexMap(indexMap, customMappings);
  }

  return indexMap;
}

function addCustomMappingsToIndexMap(indexMap: SMap<HpValueToIndex>, customMappings: SMap<SMap<string>>): void {
  for (const enumType in customMappings) {
    const map = indexMap[enumType];
    if (!map) {
      throw new Error(`There is no enumType "${enumType}" in the indexMap.`);
    }

    const customMapping = customMappings[enumType];
    for (const customCode in customMapping) {
      const mappedValue = customMapping[customCode];
      const index = map.code[mappedValue];
      if (index === undefined) {
        throw new Error(`There is no enumType "${enumType}" in the indexMap.`);
      }

      map.custom[customCode] = index;
    }
  }
}

export function createDetailWithBooleanAnswers<SectionT, DetailT>(
  detailName: keyof SectionT,
  propertyNames: (keyof DetailT)[],
  getAnswer: GetAnswerFunction<SectionT>
): DetailT {
  let answers: string[] = getAnswer(detailName, 'raw') as any;
  if (answers === undefined || answers === null) {
    // answers will be null if the answer is N/A.
    answers = [];
  }

  if (!lodash.isArray(answers)) {
    throw new Error(`The '${detailName}' object must be an array. Instead found: ${JSON.stringify(answers)}`);
  }

  const detail: DetailT = {} as any;
  for (const propertyName of propertyNames) {
    detail[propertyName as string] = answers.indexOf(propertyName as string) >= 0;
  }

  return detail;
}

export function convertCSharpInterfaceToTypeScript(code: string): string {
  let res = code;
  res = res.replace('public interface I', 'export interface ');
  res = res.replace('ViewModel', 'NhiSection extends HpNhiSection');
  res = res.replace('IEnumerable<ValidationResult> Validate(ValidationContext validationContext);', '');
  res = res.replace(/ { get; set; }/g, ';');
  res = res.replace(/ { get; }/g, ';');
  res = res.replace('Guid QuoteGuid;', '');

  let lines = res
    .replace(/\f/g, '')
    .split('\n')
    .map((f) => f.trim())
    .filter((f) => !!f);

  lines = lines.map((line) => {
    const [lineType, lineRest] = line.split(' ');
    let found = false;

    for (const { in: inType, out: outType } of [
      { in: 'bool?', out: 'boolean | null' },
      { in: 'int?', out: 'number | null' },
      { in: 'decimal?', out: 'number | null' },
      { in: 'DateTime?', out: 'string | null' },
      { in: 'bool', out: 'boolean' },
      { in: 'int', out: 'number' },
      { in: 'decimal', out: 'number' },
      { in: 'DateTime', out: 'string' },
      { in: 'string', out: 'string' }
    ]) {
      if (lineType === inType) {
        line = line.replace(lineType + ' ', '').replace(';', `: ${outType};`);
        found = true;
        break;
      }
    }

    let viewModelText = 'ViewModel';
    if (!found && lineType.indexOf('List<') == 0) {
      let match = /List<([A-Za-z0-9]+)ViewModel>\s+/.exec(line);
      if (!match) {
        viewModelText = '';
        match = /List<([A-Za-z0-9]+)>\s+/.exec(line);
      }

      if (match) {
        line = line.replace(match[0], '').replace(';', `: ${match[1]}Detail[];`);
        found = true;
      }
    }

    if (!found && viewModelText && lineType.endsWith(viewModelText)) {
      const viewType = lineType.substring(0, lineType.length - viewModelText.length);
      line = `${lodash.trimEnd(lineRest, ';')}: ${viewType}Detail | null;`;
      found = true;
    }

    if (!found && line.indexOf(':') < 0 && line.indexOf(' ') > 0 && !line.startsWith('export ')) {
      line =
        lodash.trim(
          line
            .split(' ')
            .slice(1)
            .join(' '),
          '; '
        ) + ': number;';
    }

    return line;
  });

  return lines.join('\n');
}
