/**
 * @function checkAnagram
 * @description An anagram is a word or phrase formed by rearranging the
 *   letters of another word or phrase. This function checks if two strings
 *   are anagrams of each other, ignoring case and spaces.
 * @param {string} str1 - The first input string
 * @param {string} str2 - The second input string
 * @returns {boolean} - True if the strings are anagrams, false otherwise
 * @see https://en.wikipedia.org/wiki/Anagram
 * @example checkAnagram("listen", "silent") => true
 * @example checkAnagram("hello", "world") => false
 * @example checkAnagram("Astronomer", "Moon starer") => true
 */
const checkAnagram = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Both inputs must be strings')
  }
  const normalize = (str) =>
    str.toLowerCase().replace(/\s/g, '').split('').sort().join('')
  return normalize(str1) === normalize(str2)
}

export { checkAnagram }
