/**
 *
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * Returns the number of digits of a given integer
 *
 */

const numberOfDigit = (n) => Math.abs(n).toString().length

/**
 * Returns the number of digits of a given integer.
 *
 * @param {number} n - The integer for which to count digits.
 * @returns {number} The number of digits in the integer.
 * @see https://math.stackexchange.com/questions/2145480/how-does-the-logarithm-returns-the-number-of-digits-of-a-number
 * @author dev-madhurendra
 */
const numberOfDigitsUsingLog = (n) =>
  n === 0 ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1

export { numberOfDigit, numberOfDigitsUsingLog }
