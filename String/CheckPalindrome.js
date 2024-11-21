/**
 * Checks if a string is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Palindrome check is case sensitive; i.e., "Aba" is not considered a palindrome.
 * @param {string} str The input string to be checked for palindrome.
 * @returns {string} Returns 'Palindrome' if the input string is a palindrome,
 * 'Not a Palindrome' if it is not, or an error message if the input is not a valid string.
 */
const checkPalindrome = (str) => {
  // check that input is a string
  if (typeof str !== 'string') {
    return 'Not a string'
  }
  if (str.length === 0) {
    return 'Empty string'
  }
  // Reverse only works with array, thus convert the string to array, reverse it and convert back to string
  // return as palindrome if the reversed string is equal to the input string
  const reversed = [...str].reverse().join('')
  return str === reversed ? 'Palindrome' : 'Not a Palindrome'
}

export { checkPalindrome }
