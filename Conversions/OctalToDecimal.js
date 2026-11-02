/**
 * @function octalToDecimal
 * @description Converts an octal number (base-8) string to its decimal
 *   (base-10) equivalent without using JavaScript's built-in parseInt.
 * @param {string} octal - A string representing an octal number
 * @returns {number} - The decimal equivalent of the octal number
 * @see https://en.wikipedia.org/wiki/Octal
 * @example octalToDecimal("10") => 8
 * @example octalToDecimal("377") => 255
 * @example octalToDecimal("0") => 0
 */
const octalToDecimal = (octal) => {
  if (typeof octal !== 'string' || !/^[0-7]+$/.test(octal)) {
    throw new TypeError(
      'Input must be an octal string containing only digits 0-7'
    )
  }
  return octal
    .split('')
    .reverse()
    .reduce((acc, digit, index) => acc + Number(digit) * Math.pow(8, index), 0)
}

export { octalToDecimal }
