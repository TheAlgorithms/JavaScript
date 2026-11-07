/**
 * @function meanAbsoluteDeviation
 * @description Calculates the mean absolute deviation (MAD) of an array
 *   of numbers. MAD is the average of the absolute differences between
 *   each value and the mean of the dataset.
 * @param {number[]} arr - An array of numbers
 * @returns {number} - The mean absolute deviation
 * @see https://en.wikipedia.org/wiki/Average_absolute_deviation
 * @example meanAbsoluteDeviation([2, 2, 3, 4, 14]) => 3.6
 * @example meanAbsoluteDeviation([1, 1, 1]) => 0
 */
const meanAbsoluteDeviation = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('Input must be a non-empty array')
  }
  if (!arr.every((n) => typeof n === 'number' && !isNaN(n))) {
    throw new TypeError('All elements must be numbers')
  }
  const mean = arr.reduce((sum, n) => sum + n, 0) / arr.length
  return arr.reduce((sum, n) => sum + Math.abs(n - mean), 0) / arr.length
}

export { meanAbsoluteDeviation }
