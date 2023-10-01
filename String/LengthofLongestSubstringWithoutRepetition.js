/**
 * @function lengthOfLongestSubstring
 * @description Finds the length of the longest substring in a given string without repeating characters
 * @param {String} str - The input string
 * @returns {Number} The Length of the longest substring in a given string without repeating characters
 * @example lower("abcabcbb") => 3
 * @example lower("bbbbb") => 1
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

export {lengthOfLongestSubstring}