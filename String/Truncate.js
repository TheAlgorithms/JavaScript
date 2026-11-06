/**
 * @function truncate
 * @description Truncates a string to a specified length and appends
 *   an ellipsis (...) if the string exceeds that length.
 * @param {string} str - The input string
 * @param {number} maxLength - The maximum length of the output string
 * @returns {string} - The truncated string
 * @see https://en.wikipedia.org/wiki/Ellipsis
 * @example truncate("Hello World", 5) => "Hello..."
 * @example truncate("Hi", 5) => "Hi"
 * @example truncate("Hello World", 11) => "Hello World"
 */
const truncate = (str, maxLength) => {
  if (typeof str !== 'string') {
    throw new TypeError('First argument must be a string')
  }
  if (!Number.isInteger(maxLength) || maxLength < 1) {
    throw new TypeError('Second argument must be a positive integer')
  }
  return str.length > maxLength ? str.slice(0, maxLength) + '...' : str
}

export { truncate }
