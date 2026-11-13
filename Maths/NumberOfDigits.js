/**
 *
 * Author: dephraiim
 * License: GPL-3.0 or later
 *
 * Returns the number of digits of a given integer
 *
 */

const numberOfDigit = (n) => {
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    throw new TypeError('Input must be a finite number')
  }
  return Math.abs(Math.trunc(n)).toString().length
}

/**
 * Returns the number of digits of a given integer.
 *
 * @param {number} n - The integer for which to count digits.
 * @returns {number} The number of digits in the integer.
 * @see https://math.stackexchange.com/questions/2145480/how-does-the-logarithm-returns-the-number-of-digits-of-a-number
 * @author dev-madhurendra
 */
const numberOfDigitsUsingLog = (n) => {
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    throw new TypeError('Input must be a finite number')
  }
  const intVal = Math.trunc(n)
  if (intVal === 0) return 1
  const abs = Math.abs(intVal)
  let digits = Math.floor(Math.log10(abs)) + 1
  if (Math.pow(10, digits - 1) > abs) {
    digits--
  } else if (Math.pow(10, digits) <= abs) {
    digits++
  }
  return digits
}

export { numberOfDigit, numberOfDigitsUsingLog }
