/**
 * A palindrome is any string that can be reversed and still be the same.
 * An example of one is 'radar', since it is spelled the same even after
 * being reversed. One method to check if a
 *
 * Here's how this works recursively:
 *
 * Palindrome('radar')
 * true && Palindrome('ada')
 * true && true && Palindrome('d')
 * true && true && true && true
 *
 * @flow
 * @complexity: O(n)
 */

const PalindromeRecursive = (string) => {
  // Base case
  if (string.length < 2) return true

  // Check outermost keys
  if (string[0] !== string[string.length - 1]) {
    return false
  }

  return PalindromeRecursive(string.slice(1, string.length - 1))
}

const PalindromeIterative = (string) => {
  const _string = string
    .toLowerCase()
    .replace(/ /g, '')
    .replace(/,/g, '')
    .replace(/'.'/g, '')
    .replace(/:/g, '')
    .split('')

  // A word of only 1 character is already a palindrome, so we skip to check it
  while (_string.length > 1) {
    if (_string.shift() !== _string.pop()) {
      return false
    }
  }

  return true
}

export { PalindromeIterative, PalindromeRecursive }
