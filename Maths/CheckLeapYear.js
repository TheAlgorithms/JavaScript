/**
 * @function checkLeapYear
 * @description A leap year is a year that is divisible by 4, except for
 *   century years which must be divisible by 400. This function checks
 *   whether a given year is a leap year.
 * @param {number} year - A positive integer representing a year
 * @returns {boolean} - True if the year is a leap year, false otherwise
 * @see https://en.wikipedia.org/wiki/Leap_year
 * @example checkLeapYear(2000) => true
 * @example checkLeapYear(1900) => false
 * @example checkLeapYear(2024) => true
 */
const checkLeapYear = (year) => {
  if (!Number.isInteger(year) || year < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

export { checkLeapYear }
