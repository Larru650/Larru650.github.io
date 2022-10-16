export enum Month {
  January = 0,
  February = 1,
  March = 2,
  April = 3,
  May = 4,
  June = 5,
  July = 6,
  August = 7,
  September = 8,
  October = 9,
  November = 10,
  December = 11
}

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// Returns the amount of days in a month and year taking into account leap years.
export function getMonthDays(date: Date): number {
  switch (date.getMonth()) {
    case Month.January:
    case Month.March:
    case Month.May:
    case Month.July:
    case Month.August:
    case Month.October:
    case Month.December:
      return 31;
    case Month.April:
    case Month.June:
    case Month.September:
    case Month.November:
      return 30;
    default:
      return isLeapYear(date.getFullYear()) ? 29 : 28;
  }
}

export const monthArray: { name: string; key: Month }[] = [
  { name: 'January', key: Month.January },
  { name: 'February', key: Month.February },
  { name: 'March', key: Month.March },
  { name: 'April', key: Month.April },
  { name: 'May', key: Month.May },
  { name: 'June', key: Month.June },
  { name: 'July', key: Month.July },
  { name: 'August', key: Month.August },
  { name: 'September', key: Month.September },
  { name: 'October', key: Month.October },
  { name: 'November', key: Month.November },
  { name: 'December', key: Month.December }
];
