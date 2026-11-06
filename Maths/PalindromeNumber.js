/**
 * @function isPalindromeNumber
 * @description Checks whether a given integer is a palindrome.
 *   A palindrome number reads the same forwards and backwards.
 *   Negative numbers are not palindromes.
 * @param {number} n - An integer
 * @returns {boolean} - True if n is a palindrome number, false otherwise
 * @see https://en.wikipedia.org/wiki/Palindromic_number
 * @example isPalindromeNumber(121) => true
 * @example isPalindromeNumber(1221) => true
 * @example isPalindromeNumber(-121) => false
 * @example isPalindromeNumber(123) => false
 */
const isPalindromeNumber = (n) => {
  if (!Number.isInteger(n)) {
    throw new TypeError('Input must be an integer')
  }
  if (n < 0) return false
  const str = String(n)
  return str === str.split('').reverse().join('')
}

export { isPalindromeNumber }
