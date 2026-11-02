/**
 * @function binaryToDecimal
 * @description Converts a binary number (base-2) string to its decimal
 *   (base-10) equivalent without using JavaScript's built-in parseInt.
 * @param {string} binary - A string representing a binary number
 * @returns {number} - The decimal equivalent of the binary number
 * @see https://en.wikipedia.org/wiki/Binary_number
 * @example binaryToDecimal("1010") => 10
 * @example binaryToDecimal("1111") => 15
 * @example binaryToDecimal("0") => 0
 */
const binaryToDecimal = (binary) => {
  if (typeof binary !== 'string' || !/^[01]+$/.test(binary)) {
    throw new TypeError(
      'Input must be a binary string containing only 0s and 1s'
    )
  }
  return binary
    .split('')
    .reverse()
    .reduce((acc, bit, index) => acc + Number(bit) * Math.pow(2, index), 0)
}

export { binaryToDecimal }
