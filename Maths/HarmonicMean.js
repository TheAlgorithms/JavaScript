/**
 * @function harmonicMean
 * @description Calculates the harmonic mean of an array of positive numbers.
 *   The harmonic mean is the reciprocal of the arithmetic mean of reciprocals.
 *   Formula: n / (1/x1 + 1/x2 + ... + 1/xn)
 * @param {number[]} arr - An array of positive numbers
 * @returns {number} - The harmonic mean
 * @see https://en.wikipedia.org/wiki/Harmonic_mean
 * @example harmonicMean([1, 2, 4]) => 1.714
 * @example harmonicMean([2, 2, 2]) => 2
 * @example harmonicMean([1, 4]) => 1.6
 */
const harmonicMean = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('Input must be a non-empty array')
  }
  if (!arr.every((n) => typeof n === 'number' && !isNaN(n) && n > 0)) {
    throw new TypeError('All elements must be positive numbers')
  }
  const sumOfReciprocals = arr.reduce((sum, n) => sum + 1 / n, 0)
  return arr.length / sumOfReciprocals
}

export { harmonicMean }
