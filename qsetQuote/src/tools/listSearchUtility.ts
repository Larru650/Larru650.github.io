import { hasOwnProperty, SMap } from '@avantia/client-and-server-utilities';
import { createControlId, HpQuestionLookupItem } from '@avantia/questionset-model';
import lodash from 'lodash';
import { HpClientQuestionLookupItem, HpClientQuestionLookupItemMap } from '../interfaces';
import { firstDefined } from './utilities';

export interface SuggestionItem {
  key: string;
  value: string;
}

export interface GetSuggestionsFromMapUsingSearchTermProps<ItemT> {
  id: string;
  items: SMap<ItemT> | undefined;
  getText?: (item: ItemT, key: string) => string | undefined;
  searchTerm: string | string[];
  minTermLength: number | undefined;
}

export interface SearchTermSuggestionResult {
  suggestions: SuggestionItem[];
  minTermLength: number;
}

export function getSuggestionsFromMapUsingSearchTerm<ItemT>({
  id,
  items,
  getText = getDisplayTextFromLookupItem,
  searchTerm,
  minTermLength = 0
}: GetSuggestionsFromMapUsingSearchTermProps<ItemT>): SearchTermSuggestionResult {
  const keys = lodash.keys(items || {});
  if (!minTermLength) {
    if (keys.length > 75) {
      minTermLength = 3;
    } else {
      minTermLength = 2;
    }
  }

  let searchTerms: string[] = [];
  if (typeof searchTerm === 'string') {
    searchTerms = searchTerm
      .split(' ')
      .map(l => l.trim())
      .filter(t => t.length >= 1);
  } else {
    searchTerms = searchTerm as string[];
  }

  let validCount = 0;
  searchTerms = searchTerms
    .map(x => {
      if (x && x.length > 0) {
        if (x.length >= minTermLength) {
          validCount++;
        }

        return x.toLowerCase();
      }

      return '';
    })
    .filter(x => x !== '');

  if (!items || keys.length === 0 || validCount === 0) {
    return { suggestions: [], minTermLength };
  }

  searchTerms = searchTerms.sort(sortByLength);

  const suggestions: SuggestionItem[] = [];
  keys.forEach(key => {
    const textOrig = getText(items[key] as ItemT, key) || key;
    const text = textOrig.toLowerCase();
    let valid = true;
    for (let i = 0; i < searchTerms.length; i++) {
      const term = searchTerms[i];
      if (text.indexOf(term) < 0) {
        valid = false;
        break;
      }
    }

    if (valid) {
      suggestions.push({ key: createControlId({ questionId: id, key }), value: textOrig });
    }
  });

  return { suggestions, minTermLength };
}

export function getDisplayTextFromLookupItemMap(
  lookup: HpClientQuestionLookupItemMap,
  key: string,
  preferredProperty?: keyof HpQuestionLookupItem
): string {
  const item = lookup[key];
  if (!item) {
    if (hasOwnProperty(lookup, key)) {
      return key;
    }

    throw new Error(`The lookup map does not contain key "${key}".`);
  }

  return getDisplayTextFromLookupItem(item, key, preferredProperty);
}

export function getDisplayTextFromLookupItem(
  item: HpClientQuestionLookupItem | null,
  key: string,
  preferredProperty?: keyof HpQuestionLookupItem
): string {
  if (!item) {
    return key;
  }

  let preferred: string | undefined;
  if (preferredProperty) {
    preferred = item[preferredProperty] as string;
  }

  return firstDefined(preferred, item.text || key, key);
}

export function findLookupKeyFromText(
  lookup: HpClientQuestionLookupItemMap,
  text: string,
  options?: { preferredProperty?: keyof HpQuestionLookupItem | undefined; ignoreCase?: boolean }
): string | undefined {
  if (!text) {
    return undefined;
  }

  if (hasOwnProperty(lookup, text) && !lookup[text]) {
    return text;
  }

  const { ignoreCase, preferredProperty } = options || {};
  const findValue = ignoreCase ? text.toLowerCase() : text;
  let result: string | undefined;
  lodash.forOwn(lookup, (item, key) => {
    const displayText = getDisplayTextFromLookupItem(item, key, preferredProperty);
    if (displayText === findValue || (ignoreCase && displayText.toLowerCase() === findValue)) {
      result = key;
      return false;
    }
  });

  return result;
}

export function sortByLength(a: string, b: string): number {
  const alen = a.length;
  const blen = b.length;
  let res = alen > blen ? -1 : alen < blen ? 1 : 0;
  if (res === 0) {
    res = a < b ? -1 : a > b ? 1 : 0;
  }

  return res;
}
