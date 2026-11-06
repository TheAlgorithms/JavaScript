/**
 * @function unique
 * @description Returns a new array with all duplicate values removed,
 *   preserving the order of first occurrence.
 * @param {Array} arr - The input array
 * @returns {Array} - A new array with only unique values
 * @see https://en.wikipedia.org/wiki/Set_(abstract_data_type)
 * @example unique([1, 2, 2, 3]) => [1, 2, 3]
 * @example unique([1, 1, 1]) => [1]
 * @example unique([1, "1", 1]) => [1, "1"]
 */
const unique = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array')
  }
  return [...new Set(arr)]
}

export { unique }
