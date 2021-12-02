/**
 *  @name The-Sliding-Window Algorithm is primarily used for the problems dealing with linear data structures like Arrays, Lists, Strings etc.
 *  These problems can easily be solved using Brute Force techniques which result in quadratic or exponential time complexity.
 *  Sliding window technique reduces the required time to linear O(n).
 *  @see [The-Sliding-Window](https://www.geeksforgeeks.org/window-sliding-technique/)
 */
/**
 * @function PermutationinString
 * @description Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
 * @param {String} s1 - The input string
 * @param {String} s2 - The input string
 * @return {boolean} - Returns true if s2 contains a permutation of s1, or false otherwise.
 */

export function PermutationinString (s1, s2) {
  if (s1.length > s2.length) return false
  let start = 0
  let end = s1.length - 1
  const s1Set = SetHash()
  const s2Set = SetHash()
  for (let i = 0; i < s1.length; i++) {
    s1Set[s1[i]]++
    s2Set[s2[i]]++
  }
  if (equals(s1Set, s2Set)) return true
  while (end < s2.length - 1) {
    if (equals(s1Set, s2Set)) return true
    end++
    const c1 = s2[start]
    const c2 = s2[end]
    if (s2Set[c1] > 0) s2Set[c1]--
    s2Set[c2]++
    start++
    if (equals(s1Set, s2Set)) return true
  }
  return false
}
function equals (a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}

function SetHash () {
  const set = new Set()
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < alphabets.length; i++) {
    set[alphabets[i]] = 0
  }
  return set
}

// Example 1:
// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:
// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
