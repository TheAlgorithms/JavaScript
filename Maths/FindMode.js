/**
 * @function findMode
 * @description Finds the mode of an array of numbers. The mode is the
 *   value that appears most frequently. If multiple values appear the
 *   same number of times, all of them are returned.
 * @param {number[]} arr - An array of numbers
 * @returns {number[]} - An array containing the mode value(s)
 * @see https://en.wikipedia.org/wiki/Mode_(statistics)
 * @example findMode([1, 2, 2, 3]) => [2]
 * @example findMode([1, 1, 2, 2]) => [1, 2]
 * @example findMode([1, 2, 3]) => [1, 2, 3]
 */
const findMode = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('Input must be a non-empty array')
  }
  if (!arr.every((n) => typeof n === 'number' && !isNaN(n))) {
    throw new TypeError('All elements must be numbers')
  }
  const frequency = {}
  for (const num of arr) {
    frequency[num] = (frequency[num] || 0) + 1
  }
  const maxFreq = Math.max(...Object.values(frequency))
  return Object.keys(frequency)
    .filter((key) => frequency[key] === maxFreq)
    .map(Number)
}

export { findMode }
