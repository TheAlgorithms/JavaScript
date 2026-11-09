/**
 * @function egyptianFraction
 * @description Represents a fraction as a sum of distinct unit fractions
 *   (fractions with numerator 1) using the greedy algorithm.
 *   For example, 2/3 = 1/2 + 1/6.
 * @param {number} numerator - The numerator of the fraction
 * @param {number} denominator - The denominator of the fraction
 * @returns {number[]} - Array of denominators of unit fractions
 * @see https://en.wikipedia.org/wiki/Egyptian_fraction
 * @example egyptianFraction(2, 3) => [2, 6]
 * @example egyptianFraction(3, 4) => [2, 4]
 */
const egyptianFraction = (numerator, denominator) => {
  if (
    !Number.isInteger(numerator) ||
    !Number.isInteger(denominator) ||
    numerator < 1 ||
    denominator < 1
  ) {
    throw new TypeError('Both inputs must be positive integers')
  }
  if (numerator >= denominator) {
    throw new RangeError('Numerator must be less than denominator')
  }
  const result = []
  let num = numerator
  let den = denominator
  while (num > 0) {
    const unitDen = Math.ceil(den / num)
    result.push(unitDen)
    num = num * unitDen - den
    den = den * unitDen
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
    const g = gcd(num, den)
    num = num / g
    den = den / g
  }
  return result
}

export { egyptianFraction }
