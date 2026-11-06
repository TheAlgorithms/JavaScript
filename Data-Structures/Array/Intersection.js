/**
 * @function intersection
 * @description Returns a new array containing elements that exist
 *   in both input arrays. Each element in the result is unique.
 * @param {Array} arr1 - The first input array
 * @param {Array} arr2 - The second input array
 * @returns {Array} - Array of elements present in both arrays
 * @see https://en.wikipedia.org/wiki/Intersection_(set_theory)
 * @example intersection([1, 2, 3], [2, 3, 4]) => [2, 3]
 * @example intersection([1, 2], [3, 4]) => []
 * @example intersection([1, 1, 2], [1, 2, 2]) => [1, 2]
 */
const intersection = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Both inputs must be arrays')
  }
  const set2 = new Set(arr2)
  return [...new Set(arr1.filter((item) => set2.has(item)))]
}

export { intersection }
