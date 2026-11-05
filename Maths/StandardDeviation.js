/**
 * @function standardDeviation
 * @description Calculates the standard deviation of an array of numbers.
 *   Standard deviation measures the amount of variation or dispersion
 *   in a set of values.
 * @param {number[]} arr - An array of numbers
 * @returns {number} - The standard deviation
 * @see https://en.wikipedia.org/wiki/Standard_deviation
 * @example standardDeviation([2, 4, 4, 4, 5, 5, 7, 9]) => 2
 * @example standardDeviation([1, 2, 3]) => 0.816
 */
const standardDeviation = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('Input must be a non-empty array')
  }
  if (!arr.every((n) => typeof n === 'number' && !isNaN(n))) {
    throw new TypeError('All elements must be numbers')
  }
  const mean = arr.reduce((sum, n) => sum + n, 0) / arr.length
  const squaredDiffs = arr.map((n) => Math.pow(n - mean, 2))
  const avgSquaredDiff =
    squaredDiffs.reduce((sum, n) => sum + n, 0) / arr.length
  return Math.sqrt(avgSquaredDiff)
}

export { standardDeviation }
