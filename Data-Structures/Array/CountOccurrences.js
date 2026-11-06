/**
 * @function countOccurrences
 * @description Counts the number of times a value appears in an array.
 * @param {Array} arr - The input array
 * @param {*} value - The value to count
 * @returns {number} - The number of times value appears in arr
 * @see https://en.wikipedia.org/wiki/Frequency_(statistics)
 * @example countOccurrences([1, 2, 2, 3, 2], 2) => 3
 * @example countOccurrences(['a', 'b', 'a'], 'a') => 2
 * @example countOccurrences([1, 2, 3], 4) => 0
 */
const countOccurrences = (arr, value) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('First argument must be an array')
  }
  return arr.reduce((count, item) => (item === value ? count + 1 : count), 0)
}

export { countOccurrences }
