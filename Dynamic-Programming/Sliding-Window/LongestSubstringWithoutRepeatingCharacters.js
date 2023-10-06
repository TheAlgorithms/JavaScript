/**
 *  @name The-Sliding-Window Algorithm is primarily used for the problems dealing with linear data structures like Arrays, Lists, Strings etc.
 *  These problems can easily be solved using Brute Force techniques which result in quadratic or exponential time complexity.
 *  Sliding window technique reduces the required time to linear O(n).
 *  @see [The-Sliding-Window](https://www.geeksforgeeks.org/window-sliding-technique/)
 */

/**
 * @function LongestSubstringWithoutRepeatingCharacters
 * @description Get the length of the longest substring without repeating characters
 * @param {String} s - The input string
 */
export function LongestSubstringWithoutRepeatingCharacters(s) {
  let maxLength = 0
  let start = 0
  let end = 0
  const map = {}
  while (end < s.length) {
    if (map[s[end]] === undefined) {
      map[s[end]] = 1
      maxLength = Math.max(maxLength, end - start + 1)
      end++
    } else {
      while (s[start] !== s[end]) {
        delete map[s[start]]
        start++
      }
      delete map[s[start]]
      start++
    }
  }
  return maxLength
}

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
