/**
 * @function firstUniqChar
 * @description Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * @param {String} str - The input string
 * @return {Number} - The index of first unique character.
 * @example firstUniqChar("javascript") => 0
 * @example firstUniqChar(""sesquipedalian"") => 3
 * @example firstUniqChar("aabb") => -1
 */

const firstUniqChar = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Argument should be string')
  }
  for (let i = 0; i < str.length; ++i) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) return i
  }
  return -1
}

export { firstUniqChar }
