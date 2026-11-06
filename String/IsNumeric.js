/**
 * @function isNumeric
 * @description Checks whether a string represents a valid numeric value.
 *   Supports integers, floats, and negative numbers.
 * @param {string} str - The input string to check
 * @returns {boolean} - True if the string is numeric, false otherwise
 * @see https://en.wikipedia.org/wiki/Numeric_string
 * @example isNumeric("123") => true
 * @example isNumeric("-45.6") => true
 * @example isNumeric("abc") => false
 * @example isNumeric("12.3.4") => false
 */
const isNumeric = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string')
  }
  if (str.trim() === '') return false
  return !isNaN(str) && !isNaN(parseFloat(str))
}

export { isNumeric }
