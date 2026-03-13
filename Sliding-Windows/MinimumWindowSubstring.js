/*
 * Author: Mayank
 * Minimum Window Substring implementation in JavaScript
 * Finds the smallest substring of s that contains all characters of t.
 */

function minWindowSubstring(s, t) {
  if (t.length > s.length) return ''

  const need = {}
  for (let char of t) {
    need[char] = (need[char] || 0) + 1
  }

  let left = 0
  let count = t.length
  let minLen = Infinity
  let minStart = 0

  for (let right = 0; right < s.length; right++) {
    if (need[s[right]] !== undefined) {
      if (need[s[right]] > 0) count--
      need[s[right]]--
    }

    while (count === 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1
        minStart = left
      }
      if (need[s[left]] !== undefined) {
        need[s[left]]++
        if (need[s[left]] > 0) count++
      }
      left++
    }
  }

  return minLen === Infinity ? '' : s.substring(minStart, minStart + minLen)
}

export { minWindowSubstring }
