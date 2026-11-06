/**
 * @function capitalize
 * @description Capitalizes the first letter of a string and
 *   lowercases the rest.
 * @param {string} str - The input string
 * @returns {string} - The capitalized string
 * @see https://en.wikipedia.org/wiki/Capitalization
 * @example capitalize("hello") => "Hello"
 * @example capitalize("hELLO WORLD") => "Hello world"
 * @example capitalize("") => ""
 */
const capitalize = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string')
  }
  if (str.length === 0) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export { capitalize }
