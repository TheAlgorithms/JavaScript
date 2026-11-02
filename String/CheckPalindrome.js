/**
 * @function checkPalindrome
 * @description A palindrome is a word, phrase, or sequence that reads the
 *   same backwards as forwards. This function checks if a given string
 *   is a palindrome, ignoring case and non-alphanumeric characters.
 * @param {string} str - The input string to check
 * @returns {boolean} - True if the string is a palindrome, false otherwise
 * @see https://en.wikipedia.org/wiki/Palindrome
 * @example checkPalindrome("racecar") => true
 * @example checkPalindrome("hello") => false
 * @example checkPalindrome("A man a plan a canal Panama") => true
 */
const checkPalindrome = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string')
  }
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '')
  return cleaned === cleaned.split('').reverse().join('')
}

export { checkPalindrome }
