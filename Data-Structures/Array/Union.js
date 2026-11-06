/**
 * @function union
 * @description Returns a new array containing all unique elements
 *   from both input arrays, preserving order of first occurrence.
 * @param {Array} arr1 - The first input array
 * @param {Array} arr2 - The second input array
 * @returns {Array} - Array of all unique elements from both arrays
 * @see https://en.wikipedia.org/wiki/Union_(set_theory)
 * @example union([1, 2, 3], [2, 3, 4]) => [1, 2, 3, 4]
 * @example union([1, 2], [3, 4]) => [1, 2, 3, 4]
 * @example union([1, 1, 2], [2, 3]) => [1, 2, 3]
 */
const union = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Both inputs must be arrays')
  }
  return [...new Set([...arr1, ...arr2])]
}

export { union }
