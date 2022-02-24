/**
 * @function checkAnagramViaRegex
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 * @description An [Anagram](https://en.wikipedia.org/wiki/Anagram) is a string that is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. Anagram check is not case-sensitive;
 * @example - checkAnagramViaRegex('node', 'deno') => true
 * @example - checkAnagramViaRegex('Eleven plus two', 'Twelve plus one') => true
 */
const checkAnagramViaRegex = (str1, str2) => {
  // check that inputs are strings.
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Arguments should be string both')
  }

  // If both strings have not same lengths then they can not be anagram.
  if (str1.length !== str2.length) {
    return false
  }

  /**
   * str1 converted to an array and traverse each letter of str1 by reduce method
   * reduce method return string which is empty or not.
   * if it returns empty string '' -> falsy, with Logical !(NOT) Operator, it's will be converted to boolean and return true else false
   */
  return ![...str1].reduce(
    (str2Acc, cur) => str2Acc.replace(new RegExp(cur, 'i'), ''), // remove the similar letter from str2Acc in case-insensitive
    str2
  )
}

export { checkAnagramViaRegex }
