/**
 * @function chunk
 * @description Splits an array into smaller arrays of a specified size.
 *   The last chunk may be smaller if the array doesn't divide evenly.
 * @param {Array} arr - The input array to chunk
 * @param {number} size - The size of each chunk
 * @returns {Array} - An array of chunks
 * @see https://en.wikipedia.org/wiki/Chunking_(computing)
 * @example chunk([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
 * @example chunk([1, 2, 3], 3) => [[1, 2, 3]]
 */
const chunk = (arr, size) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('First argument must be an array')
  }
  if (!Number.isInteger(size) || size < 1) {
    throw new TypeError('Size must be a positive integer')
  }
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

export { chunk }
