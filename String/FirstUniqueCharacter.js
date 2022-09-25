/**
 * @function firstUniqChar
 * @description Given a string str, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 * @param {String} str - The input string
 * @return {Number} - The index of first unique character.
 * @example firstUniqChar("javascript") => 0
 * @example firstUniqChar("sesquipedalian") => 3
 * @example firstUniqChar("aabb") => -1
 */

const firstUniqChar = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Argument should be string')
  }
  const count = new Map()

  for (const char of str) {
    if (!count[char]) {
      count[char] = 1
    } else {
      count[char]++
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (count[str[i]] === 1) return i
  }
  return -1
}

export { firstUniqChar }
