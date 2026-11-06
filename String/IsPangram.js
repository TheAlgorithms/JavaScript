/**
 * @function isPangram
 * @description A pangram is a sentence that contains every letter of
 *   the alphabet at least once. This function checks whether a given
 *   string is a pangram, ignoring case.
 * @param {string} str - The input string
 * @returns {boolean} - True if the string is a pangram, false otherwise
 * @see https://en.wikipedia.org/wiki/Pangram
 * @example isPangram("The quick brown fox jumps over the lazy dog") => true
 * @example isPangram("Hello World") => false
 */
const isPangram = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string')
  }
  const letters = new Set(
    str
      .toLowerCase()
      .replace(/[^a-z]/g, '')
      .split('')
  )
  return letters.size === 26
}

export { isPangram }
