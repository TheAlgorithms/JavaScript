/**
 * @function titleCase
 * @description Converts a string to title case where the first letter
 *   of each word is capitalized and the rest are lowercase.
 * @param {string} str - The input string
 * @returns {string} - The title cased string
 * @see https://en.wikipedia.org/wiki/Title_case
 * @example titleCase("hello world") => "Hello World"
 * @example titleCase("the quick brown fox") => "The Quick Brown Fox"
 * @example titleCase("HELLO WORLD") => "Hello World"
 */
const titleCase = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string')
  }
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export { titleCase }
