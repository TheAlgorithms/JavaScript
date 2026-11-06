/**
 * @function countWords
 * @description Counts the number of words in a given string.
 *   Words are separated by whitespace.
 * @param {string} str - The input string
 * @returns {number} - The number of words in the string
 * @see https://en.wikipedia.org/wiki/Word_count
 * @example countWords("Hello World") => 2
 * @example countWords("  Hello   World  ") => 2
 * @example countWords("") => 0
 */
const countWords = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string')
  }
  return str.trim() === '' ? 0 : str.trim().split(/\s+/).length
}

export { countWords }
