/**
 * @function power
 * @description Calculates base raised to the power of exponent
 *   without using JavaScript's built-in Math.pow() or ** operator.
 *   Uses fast exponentiation (exponentiation by squaring).
 * @param {number} base - The base number
 * @param {number} exponent - A non-negative integer exponent
 * @returns {number} - base raised to the power of exponent
 * @see https://en.wikipedia.org/wiki/Exponentiation_by_squaring
 * @example power(2, 10) => 1024
 * @example power(3, 4) => 81
 * @example power(5, 0) => 1
 */
const power = (base, exponent) => {
  if (typeof base !== 'number' || isNaN(base)) {
    throw new TypeError('Base must be a number')
  }
  if (!Number.isInteger(exponent) || exponent < 0) {
    throw new TypeError('Exponent must be a non-negative integer')
  }
  if (exponent === 0) return 1
  if (exponent % 2 === 0) {
    const half = power(base, exponent / 2)
    return half * half
  }
  return base * power(base, exponent - 1)
}

export { power }
