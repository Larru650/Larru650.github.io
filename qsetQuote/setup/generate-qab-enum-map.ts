import fs from 'fs';
import lodash from 'lodash';
import { resolve as relativePath } from 'path';
import { walk } from 'walk';
import { createMappingFieldToEnumMap } from '../server/nhiIntegration/mappingFieldToEnumMap';
import { ensureDefined } from '../src/tools/utilities';

interface ValueRegex {
  pattern: RegExp;
  indexes: number[];
}

interface QabEnumItem {
  code: string;
  index: number;
  text: string;
  enumType: string;
  shortText?: string;
  overrideText?: string[];
}

declare const process: any;
declare const __dirname: string;

const quoteAndBuyBasePath = `${process.env.REPO_BASE_PATH}/HomeProtectQuoteAndBuy/HomeProtect_Web/`;
if (!quoteAndBuyBasePath || !quoteAndBuyBasePath.length) {
  throw new Error(`No repo base path found. Make sure the REPO_BASE_PATH environment variable is set.`);
}

const classRe = /public enum ([A-Za-z]+)\s+\{([^}]+)\}/;
const transactorCode = `TransactorCode\\("([^"]*)"\\)`;
const displayName = `Display\\(\\s*Name\\s*=\\s*"([^"]*)"\\s*\\)`;
const displayShortAndName = `Display\\(ShortName\\s*=\\s*"([^"]*)",\\s*Name\\s*=\\s*"([^"]*)"\\s*\\)`;
const valueRe1 = `\\[${transactorCode}\\]\\s*\\[${displayName}\\s*\\]`;
const valueRe1a = `\\[${transactorCode}\\]\\s*\\[${displayShortAndName}\\s*\\]`;
const valueRe2 = `\\[${transactorCode},\\s*UsedImplicitly,\\s*${displayName}\\s*\\]`;
const valueRe3 = `\\[${transactorCode}\\]\\s*\\[UsedImplicitly,\\s*${displayName}\\s*\\]`;
const valueRe4 = `\\[${displayName}\\s*\\]`;
const rawValuePattern = '([A-Z-a-z0-9]+)( = 0)?,?$';
const valueRe5 = `^${rawValuePattern}`;
const rawValueRe = new RegExp(rawValuePattern);
const valueRes: ValueRegex[] = [
  { pattern: new RegExp(valueRe1), indexes: [1, 2] },
  { pattern: new RegExp(valueRe1a), indexes: [1, 3, 2] },
  { pattern: new RegExp(valueRe2), indexes: [1, 2] },
  { pattern: new RegExp(valueRe3), indexes: [1, 2] },
  { pattern: new RegExp(valueRe4), indexes: [1, 1] },
  { pattern: new RegExp(valueRe5), indexes: [1, 1] }
];
const enumDir = `${quoteAndBuyBasePath}Enums`;
const walker = walk(enumDir);

const enumMap = new Map<string, QabEnumItem[]>();

walker.on('file', (root, fileStats, next) => {
  fs.readFile(root + '\\' + fileStats.name, (err, data) => {
    if (err) {
      console.error(err);
      next();
    }

    const content = String(data);
    let startFrom = 0;
    let match: RegExpExecArray | null;
    do {
      match = classRe.exec(content.substring(startFrom));
      if (match) {
        processMatch(match);
        startFrom += match.index + match.length;
      }
    } while (match);

    next();
  });
});

function processMatch(match: RegExpExecArray): void {
  const className = match[1];
  let noMatches = 0;
  let values = match[2]
    .trim()
    .split('\n')
    .map((v) => v.trim())
    .filter((v) => !!v);

  const commented = values.filter((l) => l.startsWith('//'));
  if (commented.length > 0) {
    // console.log(`Removing commented lines from '${name}':\n  ${commented.join('\n  ')}`);
    values = values.filter((l) => !l.startsWith('//'));
  }

  const normalisedValues: string[] = [];
  let partValues = '';
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    if (value.endsWith(',') && !value.endsWith('UsedImplicitly,')) {
      normalisedValues.push(partValues + value);
      partValues = '';
    } else {
      partValues += value + ' ';
    }
  }

  if (partValues) {
    normalisedValues.push(partValues.trim());
  }

  const itemsWithUndefined: (QabEnumItem | undefined)[] = normalisedValues.map((value, index) => {
    for (const { pattern, indexes } of valueRes) {
      const vmatch = pattern.exec(value);
      if (vmatch) {
        const [code, text, shortText] = indexes.map((ix) => vmatch[ix]);
        if (!!code && !!text) {
          const rawValueMatch = rawValueRe.exec(value) || [];
          const enumType = rawValueMatch[1];
          if (!enumType) {
            console.log(`Did not find enumType from: "${value}".`);
          }

          const item: QabEnumItem = { code, index, text, enumType };
          if (shortText) {
            item.shortText = shortText;
          }

          return item;
        }
      }
    }

    if (value.indexOf('HideFromView') < 0 && !value.startsWith('//') && value !== 'NoValue,') {
      if (noMatches === 0) {
        console.log(`${className}`);
      }

      console.warn(`  No match: "${value}"`);
      noMatches++;
    }

    return undefined;
  });

  const items = itemsWithUndefined.filter((v) => !!v) as QabEnumItem[];

  if (noMatches > 0) {
    console.log(`  Matched ${items.length} items`);
  } else {
    const classKey = className;
    enumMap[classKey] = items;
  }
}

walker.on('end', () => {
  const filePath = relativePath(__dirname + '/../server/nhiIntegration/qabEnumTypes.ts');
  addOverridesToMap(enumMap);
  addDictionaryToMap('OccupationType', 'Enums/Person/OcuppationTypeList.cs', enumMap);
  addDictionaryToMap('BusinessType', 'Enums/Person/BusinessTypeList.cs', enumMap);
  addDictionaryToMap('CriminalConvictionType', 'Enums/Person/CriminalConvictionTypeList.cs', enumMap);
  fs.writeFileSync(
    filePath,
    `
/**********************************
 * DO NOT EDIT BY HAND
 * This file was created by a tool on ${new Date().toISOString()}
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

export const qabEnumTypes: SMap<QabEnumItem[]> = ${JSON.stringify(enumMap, null, 2)};`.trim()
  );

  console.log(`Wrote '${filePath}'.`);
});

function addOverridesToMap(itemMap: Map<string, QabEnumItem[]>): void {
  const fileName = `${quoteAndBuyBasePath}Content/home/custom.js`;
  const propRe1 = /\$\('#([A-Za-z]+) option\[value="(\d{1,3})"\]'\)\.text\('([^']*)'\);/;
  const propRe2 = /\$\("#([A-Za-z]+) option\[value='(\d{1,3})'\]"\)\.text\('([^']*)'\);/;
  const propRe3 = /\$\('#([A-Za-z]+)'\)\.append\('<option value="(\d{1,3})">([^<]*)<\/option>'\);/;
  const fieldMap = createMappingFieldToEnumMap();

  String(fs.readFileSync(fileName))
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => !s.startsWith('//'))
    .forEach((line) => {
      const match = propRe1.exec(line) || propRe2.exec(line) || propRe3.exec(line);
      if (match) {
        // eslint-disable-next-line prefer-const
        let [all, enumKey, index, overrideText] = match;
        if (!!all && !!enumKey && !!index && !!overrideText) {
          const numIndex = +index;
          if (enumKey === 'Category') {
            enumKey = 'ListedItemCategory';
          }

          const key = fieldMap[enumKey] || enumKey;
          const item: QabEnumItem[] | undefined = itemMap[key];
          if (item) {
            const value: QabEnumItem = item.filter((val: QabEnumItem) => val.index === numIndex)[0];
            if (value) {
              if (overrideText !== value.text) {
                if (!value.overrideText) {
                  value.overrideText = [];
                }

                value.overrideText.push(overrideText);
              }
            } else {
              console.log(`No match for ${key}[${numIndex}]: ${line}`);
            }
          } else {
            console.log(`No enum ${key}: ${line}`);
          }
        } else {
          console.log(`No match: ${line}`);
        }
      }
    });
}

function addDictionaryToMap(enumType: string, fileRelative: string, enumMap: Map<string, QabEnumItem[]>): void {
  const fullPath = `${quoteAndBuyBasePath}${fileRelative}`;
  const lineRe = /^{"([^"]*)",\s*"([^"]*)"},?$/;
  const codes = ensureDefined<QabEnumItem[]>(enumMap[enumType], `enumMap['${enumType}']`);
  let lines = String(fs.readFileSync(fullPath))
    .replace(/\f/g, '')
    .replace(/{\s*"/g, '{"')
    .replace(/"\s*}/g, '"}')
    .replace(/",\s*"/g, '", "')
    .split('\n')
    .map((f) => lodash.trimEnd(f.trim(), ','));

  lines = lines.filter((f) => f.startsWith('{') && f.endsWith('}'));

  if (lines.length === 0) {
    throw new Error(
      `No line candidates match - either the file is not of the expected type or this code is incorrect.`
    );
  }

  console.log(`Processing ${fileRelative} (${lines.length} candidates)`);

  lines.forEach((line) => {
    const match = lineRe.exec(line);
    if (match) {
      const [all, code, text] = match;
      if (all) {
        const item: QabEnumItem = {
          code,
          index: 0,
          text,
          enumType: code
        };
        const matched = codes.filter((c) => c.code === code)[0];
        if (matched) {
          item.index = matched.index;
          item.enumType = matched.enumType;
          const itemJson = JSON.stringify(item);
          const matchedJson = JSON.stringify(matched);
          if (itemJson !== matchedJson) {
            console.warn(
              `   The code for '${code}' does not match in Enum ('${enumType}')
      Existing: ${matchedJson}
      New:      ${itemJson}`
            );
          }
        } else {
          codes.push(item);
          console.warn(`   The code '${code}' is new for Enum ('${enumType}'): ${JSON.stringify(item)}`);
        }
      } else {
        console.log(`   No re match for "${line}"`);
      }
    } else {
      console.log(`No match for "${line}"`);
    }
  });
}
