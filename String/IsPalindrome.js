/**
 * @function isPalindromeIterative
 * @description isPalindromeIterative function checks whether the provided input is palindrome or not
 * @param {String | Number} x - The input to check
 * @return {boolean} - Input is palindrome or not
 * @see [Palindrome](https://en.wikipedia.org/wiki/Palindrome)
 */

/*
  * Big-O Analysis
      * Time Complexity
        - O(N) on average and worst case scenario as input is traversed in linear fashion
        - O(1) on best case scenario if the input already is a string (otherwise toString() method takes O(N))
               and the first & last characters don't match, triggering an early return
      * Space Complexity
        - O(1)
*/

export function isPalindromeIterative (x) {
  if (typeof x !== 'string' && typeof x !== 'number') {
    throw new TypeError('Input must be a string or a number')
  }

  // Convert x to string whether it's number or string
  const string = x.toString()
  const length = string.length

  if (length === 1) return true

  // Apply two pointers technique to compare first and last elements on each iteration
  for (let start = 0, end = length - 1; start < end; start++, end--) {
    // Early return if compared items are different, input is not a palindrome
    if (string[start] !== string[end]) return false
  }
  // If early return in condition inside for loop is not reached, then input is palindrome
  return true
}
