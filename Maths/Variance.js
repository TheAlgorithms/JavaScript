/**
 * @function variance
 * @description Calculates the variance of an array of numbers.
 *   Variance measures how far each number in the set is from the mean.
 *   This calculates population variance.
 * @param {number[]} arr - An array of numbers
 * @returns {number} - The variance
 * @see https://en.wikipedia.org/wiki/Variance
 * @example variance([2, 4, 4, 4, 5, 5, 7, 9]) => 4
 * @example variance([1, 2, 3]) => 0.667
 */
const variance = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('Input must be a non-empty array')
  }
  if (!arr.every((n) => typeof n === 'number' && !isNaN(n))) {
    throw new TypeError('All elements must be numbers')
  }
  const mean = arr.reduce((sum, n) => sum + n, 0) / arr.length
  return arr.reduce((sum, n) => sum + Math.pow(n - mean, 2), 0) / arr.length
}

export { variance }
