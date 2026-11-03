/**
 * @function findMean
 * @description Finds the mean (average) value of an array of numbers.
 *   The mean is calculated by summing all elements and dividing
 *   by the total count.
 * @param {number[]} arr - An array of numbers
 * @returns {number} - The mean value
 * @see https://en.wikipedia.org/wiki/Mean
 * @example findMean([1, 2, 3]) => 2
 * @example findMean([1, 2, 3, 4]) => 2.5
 * @example findMean([10, 20, 30]) => 20
 */
const findMean = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('Input must be a non-empty array')
  }
  if (!arr.every((n) => typeof n === 'number' && !isNaN(n))) {
    throw new TypeError('All elements must be numbers')
  }
  return arr.reduce((sum, n) => sum + n, 0) / arr.length
}

export { findMean }
