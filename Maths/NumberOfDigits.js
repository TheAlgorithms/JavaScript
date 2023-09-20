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
 *
 * Author : dev-madhurendra
 * Returns the number of digits of a given integer
 * Resource : https://math.stackexchange.com/questions/2145480/how-does-the-logarithm-returns-the-number-of-digits-of-a-number
 *
 */

const numberOfDigitsUsingLog = (n) => n === 0 ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1

export { numberOfDigit, numberOfDigitsUsingLog }
