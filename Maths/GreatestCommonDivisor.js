/**
 * @function greatestCommonDivisor
 * @description Finds the greatest common divisor (GCD) of two integers
 *   using the Euclidean algorithm.
 * @param {number} a - First positive integer
 * @param {number} b - Second positive integer
 * @returns {number} - The GCD of a and b
 * @see https://en.wikipedia.org/wiki/Greatest_common_divisor
 * @example greatestCommonDivisor(12, 8) => 4
 * @example greatestCommonDivisor(100, 75) => 25
 * @example greatestCommonDivisor(7, 5) => 1
 */
const greatestCommonDivisor = (a, b) => {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 1 || b < 1) {
    throw new TypeError('Both inputs must be positive integers')
  }
  while (b !== 0) {
    ;[a, b] = [b, a % b]
  }
  return a
}

export { greatestCommonDivisor }
