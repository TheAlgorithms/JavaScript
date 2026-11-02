/**
 * @function decimalToBinary
 * @description Converts a decimal number (base-10) to its binary
 *   (base-2) string representation without using JavaScript's
 *   built-in toString(2).
 * @param {number} decimal - A non-negative integer
 * @returns {string} - The binary string representation of the decimal number
 * @see https://en.wikipedia.org/wiki/Binary_number
 * @example decimalToBinary(10) => "1010"
 * @example decimalToBinary(255) => "11111111"
 * @example decimalToBinary(0) => "0"
 */
const decimalToBinary = (decimal) => {
  if (!Number.isInteger(decimal) || decimal < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (decimal === 0) return '0'
  let binary = ''
  let num = decimal
  while (num > 0) {
    binary = (num % 2).toString() + binary
    num = Math.floor(num / 2)
  }
  return binary
}

export { decimalToBinary }
