/**
 * @function decimalToHexadecimal
 * @description Converts a decimal number (base-10) to its hexadecimal
 *   (base-16) string representation without using JavaScript's
 *   built-in toString(16).
 * @param {number} decimal - A non-negative integer
 * @returns {string} - The hexadecimal string representation in uppercase
 * @see https://en.wikipedia.org/wiki/Hexadecimal
 * @example decimalToHexadecimal(255) => "FF"
 * @example decimalToHexadecimal(16) => "10"
 * @example decimalToHexadecimal(0) => "0"
 */
const decimalToHexadecimal = (decimal) => {
  if (!Number.isInteger(decimal) || decimal < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (decimal === 0) return '0'
  const hexChars = '0123456789ABCDEF'
  let hex = ''
  let num = decimal
  while (num > 0) {
    hex = hexChars[num % 16] + hex
    num = Math.floor(num / 16)
  }
  return hex
}

export { decimalToHexadecimal }
