/**
 * @function findMax
 * @description Finds the maximum value in an array of numbers
 *   without using JavaScript's built-in Math.max().
 * @param {number[]} arr - An array of numbers
 * @returns {number} - The maximum value
 * @see https://en.wikipedia.org/wiki/Maximum_and_minimum
 * @example findMax([1, 5, 3, 9, 2]) => 9
 */
const findMax = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('Input must be a non-empty array')
  }
  if (!arr.every((n) => typeof n === 'number' && !isNaN(n))) {
    throw new TypeError('All elements must be numbers')
  }
  return arr.reduce((max, n) => (n > max ? n : max), arr[0])
}

/**
 * @function findMin
 * @description Finds the minimum value in an array of numbers
 *   without using JavaScript's built-in Math.min().
 * @param {number[]} arr - An array of numbers
 * @returns {number} - The minimum value
 * @see https://en.wikipedia.org/wiki/Maximum_and_minimum
 * @example findMin([1, 5, 3, 9, 2]) => 1
 */
const findMin = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('Input must be a non-empty array')
  }
  if (!arr.every((n) => typeof n === 'number' && !isNaN(n))) {
    throw new TypeError('All elements must be numbers')
  }
  return arr.reduce((min, n) => (n < min ? n : min), arr[0])
}

export { findMax, findMin }
