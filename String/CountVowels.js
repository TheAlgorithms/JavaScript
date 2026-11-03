/**
 * @function countVowels
 * @description Counts the number of vowels (a, e, i, o, u) in a string,
 *   ignoring case.
 * @param {string} str - The input string
 * @returns {number} - The number of vowels in the string
 * @see https://en.wikipedia.org/wiki/Vowel
 * @example countVowels("hello") => 2
 * @example countVowels("rhythm") => 0
 * @example countVowels("AEIOU") => 5
 */
const countVowels = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string')
  }
  return (str.match(/[aeiou]/gi) || []).length
}

export { countVowels }
