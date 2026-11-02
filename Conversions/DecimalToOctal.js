/**
 * @function decimalToOctal
 * @description Converts a decimal number (base-10) to its octal
 *   (base-8) string representation without using JavaScript's
 *   built-in toString(8).
 * @param {number} decimal - A non-negative integer
 * @returns {string} - The octal string representation of the decimal number
 * @see https://en.wikipedia.org/wiki/Octal
 * @example decimalToOctal(8) => "10"
 * @example decimalToOctal(255) => "377"
 * @example decimalToOctal(0) => "0"
 */
const decimalToOctal = (decimal) => {
  if (!Number.isInteger(decimal) || decimal < 0) {
    throw new TypeError('Input must be a non-negative integer')
  }
  if (decimal === 0) return '0'
  let octal = ''
  let num = decimal
  while (num > 0) {
    octal = (num % 8).toString() + octal
    num = Math.floor(num / 8)
  }
  return octal
}

export { decimalToOctal }
