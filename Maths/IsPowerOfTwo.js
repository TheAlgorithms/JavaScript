/**
 * @function isPowerOfTwo
 * @description Checks whether a given positive integer is a power of two.
 *   A number is a power of two if it can be expressed as 2^n where n
 *   is a non-negative integer. Uses bitwise AND for efficient checking.
 * @param {number} n - A positive integer
 * @returns {boolean} - True if n is a power of two, false otherwise
 * @see https://en.wikipedia.org/wiki/Power_of_two
 * @example isPowerOfTwo(1) => true
 * @example isPowerOfTwo(16) => true
 * @example isPowerOfTwo(18) => false
 */
const isPowerOfTwo = (n) => {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  return (n & (n - 1)) === 0
}

export { isPowerOfTwo }
