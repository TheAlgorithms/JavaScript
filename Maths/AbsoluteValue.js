/**
 * @function absoluteValue
 * @description Returns the absolute value of a number without using
 *   JavaScript's built-in Math.abs() function.
 * @param {number} n - Any real number
 * @returns {number} - The absolute value of n
 * @see https://en.wikipedia.org/wiki/Absolute_value
 * @example absoluteValue(-5) => 5
 * @example absoluteValue(3) => 3
 * @example absoluteValue(0) => 0
 */
const absoluteValue = (n) => {
  if (typeof n !== 'number' || isNaN(n)) {
    throw new TypeError('Input must be a number')
  }
  return n < 0 ? -n : n === 0 ? 0 : n
}

export { absoluteValue }
