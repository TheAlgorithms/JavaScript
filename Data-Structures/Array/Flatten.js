/**
 * @function flatten
 * @description Flattens a nested array into a single-level array.
 *   Supports both shallow (depth=1) and deep flattening.
 * @param {Array} arr - The nested array to flatten
 * @param {number} depth - The depth to flatten (default: Infinity)
 * @returns {Array} - The flattened array
 * @see https://en.wikipedia.org/wiki/Flat_array
 * @example flatten([1, [2, [3, [4]]]]) => [1, 2, 3, 4]
 * @example flatten([1, [2, [3]]], 1) => [1, 2, [3]]
 */
const flatten = (arr, depth = Infinity) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array')
  }
  if (!Number.isInteger(depth) && depth !== Infinity) {
    throw new TypeError('Depth must be an integer or Infinity')
  }
  if (depth === 0) return [...arr]
  return arr.reduce((flat, item) => {
    if (Array.isArray(item) && depth > 0) {
      return flat.concat(flatten(item, depth - 1))
    }
    return flat.concat(item)
  }, [])
}

export { flatten }
