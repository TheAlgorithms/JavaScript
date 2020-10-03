/**
 * Checks if a word is a palindrome
 * @param {original word input} str
 */

const isPalindrome = (str) => {
  if (str.length < 2) return true
  return str.charAt(0) !== str.charAt(str.length - 1)
    ? false
    : isPalindrome(str.substring(1, str.length - 1))
}

console.log(`isPalindrome on racecar: ${isPalindrome('racecar')}`)
console.log(
  `isPalindrome on notapalindrome: ${isPalindrome('notapalindrome')}`
)
