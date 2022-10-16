import { getMonthDays, isLeapYear } from './dateTools';

const leapYear = 2000;
const nonLeapYear = 1700;
const leapYearDate = new Date(2024, 1, 20);
const nonLeapYearDate = new Date(1995, 1, 12);

describe('dateTools', () => {
  describe('isLeapYear', () => {
    it('returns true when a leap year is passed in', () => {
      expect(isLeapYear(leapYear)).toBe(true);
    });
    it('returns false when a non-leap year is passed in', () => {
      expect(isLeapYear(nonLeapYear)).toBe(false);
    });
  });
  describe('getMonthDays', () => {
    it('returns the correct amount of days when February on a non-leap year is passed in', () => {
      expect(getMonthDays(leapYearDate)).toBe(29);
    });
    it('returns the correct amount of days when February on a non-leap year is passed in', () => {
      expect(getMonthDays(nonLeapYearDate)).toBe(28);
    });
  });
});
