import { getTokensInTemplate, templateResolver } from './templateResolver';

describe('templateResolver', () => {
  describe('templateResolver', () => {
    it('replaces a token with its value', () => {
      expect(templateResolver('My name is {{name}} and I am {{age}}.', { name: 'Bob', age: 13 })).toBe(
        'My name is Bob and I am 13.'
      );
    });

    it('replaces a token with its function value', () => {
      expect(templateResolver('My name is {{name}} and I am {{age}}.', { name: () => 'Bob', age: () => 13 })).toBe(
        'My name is Bob and I am 13.'
      );
    });

    it('replaces an unmatched token with the token name surrounded by square brackets', () => {
      expect(templateResolver('My name is {{name}} and I am {{age}}.', { age: () => 13 })).toBe(
        'My name is [name] and I am 13.'
      );
    });
  });

  describe('getTokensInTemplate', () => {
    it('returns [] when there are no tokens', () => {
      expect(getTokensInTemplate('')).toEqual([]);
    });

    it('returns a token when one exists in the template', () => {
      expect(getTokensInTemplate('{{name}}')).toEqual(['name']);
    });

    it('returns a token when one exists in the template', () => {
      expect(getTokensInTemplate('name}} {{house}} {{age')).toEqual(['house']);
    });
  });
});
