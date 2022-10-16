import { getNameOfFunction } from './commonFunctions';

describe('commonFunctions', () => {
  describe('getNameOfFunction', () => {
    it('returns "fn" when a variable function is provided', () => {
      const fn = (a: number): string => `${a}`;
      expect(getNameOfFunction(fn)).toBe('fn');
    });

    it('returns the name of a provided function', () => {
      function getName(a: number): string {
        return `${a}`;
      }
      expect(getNameOfFunction(getName)).toBe('getName');
    });

    it('throws an exception if a string is provided as argument', () => {
      expect(() => getNameOfFunction('' as any)).toThrow(
        'The getNameOfFunction must have a function provided as parameter.'
      );
    });

    it('throws an exception if undefined is provided as argument', () => {
      expect(() => getNameOfFunction(undefined as any)).toThrow(
        'The getNameOfFunction must have a function provided as parameter.'
      );
    });
  });
});
