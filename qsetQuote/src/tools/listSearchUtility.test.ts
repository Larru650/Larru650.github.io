import { SMap } from '@avantia/client-and-server-utilities';
import { createControlId } from '@avantia/questionset-model';
import { HpClientQuestionLookupItemMap } from '../interfaces';
import {
  findLookupKeyFromText,
  getSuggestionsFromMapUsingSearchTerm,
  sortByLength,
  SuggestionItem
} from './listSearchUtility';

describe('listSearchUtility', () => {
  describe('getSuggestionsFromMapUsingSearchTerm', () => {
    it('returns an empty array when there are no matches', () => {
      const id = 'id';
      const items: SMap<{ text: string }> = {};
      const searchTerm = 'dog';
      const { suggestions } = getSuggestionsFromMapUsingSearchTerm({
        id,
        items,
        searchTerm,
        minTermLength: 2,
        getText: x => x.text
      });
      expect(suggestions.length).toBe(0);
    });

    it('returns an empty array when there are matches but the searchTerm is too short', () => {
      const id = 'id';
      const items: SMap<{ text: string }> = { '1': { text: 'dog' } };
      const searchTerm = 'o';
      const { suggestions } = getSuggestionsFromMapUsingSearchTerm({
        id,
        items,
        searchTerm,
        minTermLength: 2,
        getText: x => x.text
      });
      expect(suggestions.length).toBe(0);
    });

    it('returns an array of suggestions when text contains the searchTerm', () => {
      const id = 'id';
      const items: SMap<{ text: string }> = { '1': { text: 'dog' } };
      const searchTerm = 'og';
      const { suggestions } = getSuggestionsFromMapUsingSearchTerm({
        id,
        items,
        searchTerm,
        minTermLength: 2,
        getText: x => x.text
      });
      expect(suggestions.length).toBe(1);
      const expected: SuggestionItem[] = [{ key: createControlId({ questionId: 'id', key: '1' }), value: 'dog' }];
      expect(suggestions).toEqual(expected);
    });

    it('returns an array of matches when searchTerm matches the text', () => {
      const id = 'id';
      const items: SMap<{ text: string }> = { '1': { text: 'dog' } };
      const searchTerm = 'og';
      const { suggestions } = getSuggestionsFromMapUsingSearchTerm({
        id,
        items,
        searchTerm,
        minTermLength: 2,
        getText: x => x.text
      });
      expect(suggestions.length).toBe(1);
      const expected: SuggestionItem[] = [{ key: createControlId({ questionId: 'id', key: '1' }), value: 'dog' }];
      expect(suggestions).toEqual(expected);
    });

    it('returns an array of matches when searchTerms match the text', () => {
      const id = 'id';
      const items: SMap<{ text: string }> = { '1': { text: 'dog' } };
      const searchTerm = ['do', 'og'];
      const { suggestions } = getSuggestionsFromMapUsingSearchTerm({
        id,
        items,
        searchTerm,
        minTermLength: 2,
        getText: x => x.text
      });
      expect(suggestions.length).toBe(1);
      const expected: SuggestionItem[] = [{ key: createControlId({ questionId: 'id', key: '1' }), value: 'dog' }];
      expect(suggestions).toEqual(expected);
    });

    it('returns an array of matches when searchTerms match the text but with different case', () => {
      const id = 'id';
      const items: SMap<{ text: string }> = { '1': { text: 'dog' } };
      const searchTerm = ['dO', 'oG'];
      const { suggestions } = getSuggestionsFromMapUsingSearchTerm({
        id,
        items,
        searchTerm,
        minTermLength: 2,
        getText: x => x.text
      });
      expect(suggestions.length).toBe(1);
      const expected: SuggestionItem[] = [{ key: createControlId({ questionId: 'id', key: '1' }), value: 'dog' }];
      expect(suggestions).toEqual(expected);
    });
  });

  describe('findLookupKeyFromText', () => {
    const lookup: HpClientQuestionLookupItemMap = {
      noItem: null,
      keyNotEqualToText: {
        text: 'Key not equal to text'
      },
      altText: {
        text: 'standard text',
        fluentText: 'fluent text'
      }
    };

    it('returns undefined when the key does not exist', () => {
      expect(findLookupKeyFromText(lookup, 'does-not-exist')).toBeUndefined();
    });

    it('finds key when matching key is provided', () => {
      expect(findLookupKeyFromText(lookup, 'noItem')).toBe('noItem');
    });

    it('finds key when matching text is provided', () => {
      expect(findLookupKeyFromText(lookup, 'Key not equal to text')).toBe('keyNotEqualToText');
    });

    it('finds key when matching text in different case is provided along with ignoreCase option', () => {
      expect(findLookupKeyFromText(lookup, 'key Not Equal to text', { ignoreCase: true })).toBe('keyNotEqualToText');
    });

    it('finds key when matching fluentText in different case is provided along with ignoreCase option', () => {
      expect(findLookupKeyFromText(lookup, 'fluent TEXT', { ignoreCase: true, preferredProperty: 'fluentText' })).toBe(
        'altText'
      );
    });
  });

  describe('sortByLength', () => {
    it('Sorts terms by length, descending', () => {
      expect(['ab', 'a', 'abc'].sort(sortByLength)).toEqual(['abc', 'ab', 'a']);
    });

    it('Sorts terms by length, descending, then by alphabetic', () => {
      expect(['def', 'a', 'abc', 'c'].sort(sortByLength)).toEqual(['abc', 'def', 'a', 'c']);
    });
  });
});
