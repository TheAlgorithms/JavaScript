/*
 * @description : Given a string, the function finds the length of the longest substring without any repeating characters
 * @param {String} str - The input string
 * @returns {Number} The Length of the longest substring in a given string without repeating characters
 * @example lengthOfLongestSubstring("abcabcbb") => 3
 * @example lengthOfLongestSubstring("bbbbb") => 1
 * @see https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

const lengthOfLongestSubstring = (s) => {
  if (typeof s !== 'string') {
    throw new TypeError('Invalid Input Type')
  }
  let maxLength = 0
  let start = 0
  const charMap = new Map()
  for (let end = 0; end < s.length; end++) {
    if (charMap.has(s[end])) {
      start = Math.max(start, charMap.get(s[end]) + 1)
    }
    charMap.set(s[end], end)
    maxLength = Math.max(maxLength, end - start + 1)
  }
  return maxLength
}

export { lengthOfLongestSubstring }
