/**
 * @function hexadecimalToDecimal
 * @description Converts a hexadecimal number (base-16) string to its decimal
 *   (base-10) equivalent without using JavaScript's built-in parseInt.
 * @param {string} hex - A string representing a hexadecimal number
 * @returns {number} - The decimal equivalent of the hexadecimal number
 * @see https://en.wikipedia.org/wiki/Hexadecimal
 * @example hexadecimalToDecimal("FF") => 255
 * @example hexadecimalToDecimal("10") => 16
 * @example hexadecimalToDecimal("0") => 0
 */
const hexadecimalToDecimal = (hex) => {
  if (typeof hex !== 'string' || !/^[0-9a-fA-F]+$/.test(hex)) {
    throw new TypeError(
      'Input must be a valid hexadecimal string containing only 0-9 and A-F'
    )
  }
  return hex
    .toUpperCase()
    .split('')
    .reverse()
    .reduce((acc, char, index) => {
      const value =
        char >= 'A' ? char.charCodeAt(0) - 55 : char.charCodeAt(0) - 48
      return acc + value * Math.pow(16, index)
    }, 0)
}

export { hexadecimalToDecimal }
