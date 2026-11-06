/**
 * @function difference
 * @description Returns a new array with elements that are in the first
 *   array but not in the second array.
 * @param {Array} arr1 - The first input array
 * @param {Array} arr2 - The second input array
 * @returns {Array} - Array of elements in arr1 but not in arr2
 * @see https://en.wikipedia.org/wiki/Complement_(set_theory)
 * @example difference([1, 2, 3], [2, 3, 4]) => [1]
 * @example difference([1, 2, 3], [1, 2, 3]) => []
 * @example difference([1, 2, 3], []) => [1, 2, 3]
 */
const difference = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    throw new TypeError('Both inputs must be arrays')
  }
  const set2 = new Set(arr2)
  return arr1.filter((item) => !set2.has(item))
}

export { difference }
