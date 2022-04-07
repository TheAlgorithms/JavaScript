/**
 * isLeapYear :: Number -> Boolean
 *
 * Check if a year is a leap year or not. A leap year is a year which has 366 days.
 * For the extra +1 day the February month contains 29 days instead of 28 days.
 *
 * The logic behind the leap year is-
 * 1. If the year is divisible by 400 then it is a leap year.
 * 2. If it is not divisible by 400 but divisible by 100 then it is not a leap year.
 * 3. If the year is not divisible by both 400 and 100 but divisible by 4 then a leap year.
 * 4. Other cases except the describing ones are not a leap year.
 *
 * @param {number} year
 * @returns {boolean} true if this is a leap year, false otherwise.
 */
export const isLeapYear = (year) => {
  if (year % 400 === 0) return true
  if (year % 100 === 0) return false
  if (year % 4 === 0) return true

  return false
}
