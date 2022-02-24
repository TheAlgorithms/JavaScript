/**
 * @function checkAnagram
 * @param {string} str1 
 * @param {string} str2 
 * @returns {boolean}
 * @description An [Anagram](https://en.wikipedia.org/wiki/Anagram) is a string that is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. Anagram check is case sensitive;
 * @example - checkAnagram('node', 'deno') => true
 * @example - checkAnagram('Eleven plus two', 'Twelve plus one') => true
 */
const checkAnagram = (str1, str2) => {
  // check that inputs are strings.
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Arguments should be string both')
  }

  // If both strings have not same lengths then they can not be anagram.
  if (str1.length !== str2.length) {
    return false
  }

  // str1 converted to array and traverse the each letter of str1 by reduce method
  return ![...str1].reduce(
    (str2Acc, cur) => str2Acc.replace(new RegExp(cur, 'i'), ''), // remove the similar letter from str2Acc in case-insensitive
    str2
  )
}

export { checkAnagram }
