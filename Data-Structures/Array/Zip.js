/**
 * @function zip
 * @description Creates an array of grouped elements where the first element
 *   contains the first elements of the given arrays, the second element
 *   contains the second elements, and so on.
 * @param {...Array} arrays - Two or more arrays to zip together
 * @returns {Array} - Array of grouped elements
 * @see https://en.wikipedia.org/wiki/Convolution_(computer_science)
 * @example zip([1, 2], ['a', 'b']) => [[1, 'a'], [2, 'b']]
 * @example zip([1, 2, 3], ['a', 'b', 'c'], [true, false, true]) => [[1, 'a', true], [2, 'b', false], [3, 'c', true]]
 */
const zip = (...arrays) => {
  if (arrays.length === 0) {
    throw new TypeError('At least one array must be provided')
  }
  if (!arrays.every((arr) => Array.isArray(arr))) {
    throw new TypeError('All arguments must be arrays')
  }
  const minLength = Math.min(...arrays.map((arr) => arr.length))
  return Array.from({ length: minLength }, (_, i) =>
    arrays.map((arr) => arr[i])
  )
}

export { zip }
