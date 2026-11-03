/**
 * @function findMedian
 * @description Finds the median value of an array of numbers.
 *   The median is the middle value when the array is sorted.
 *   If the array has an even number of elements, the median is
 *   the average of the two middle values.
 * @param {number[]} arr - An array of numbers
 * @returns {number} - The median value
 * @see https://en.wikipedia.org/wiki/Median
 * @example findMedian([1, 2, 3]) => 2
 * @example findMedian([1, 2, 3, 4]) => 2.5
 * @example findMedian([5, 3, 1, 4, 2]) => 3
 */
const findMedian = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new TypeError('Input must be a non-empty array')
  }
  if (!arr.every((n) => typeof n === 'number' && !isNaN(n))) {
    throw new TypeError('All elements must be numbers')
  }
  const sorted = [...arr].sort((a, b) => a - b)
  const mid = Math.floor(sorted.length / 2)
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2
}

export { findMedian }
