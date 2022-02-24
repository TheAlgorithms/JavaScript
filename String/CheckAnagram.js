// An [Anagram](https://en.wikipedia.org/wiki/Anagram) is a string that is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. Anagram check is not case-sensitive;
/**
 * @function checkAnagramViaRegex
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 * @description - check anagram with the help of Regex
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

/**
 * @function checkAnagramViaMap
 * @description - check anagram via using HashMap
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
* @example - checkAnagramViaMap('node', 'deno') => true
 * @example - checkAnagramViaMap('Eleven plus two', 'Twelve plus one') => true
 */
const checkAnagramViaMap = (str1, str2) => {
  // check that inputs are strings.
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new TypeError('Arguments should be string both')
  }

  // If both strings have not same lengths then they can not be anagram.
  if (str1.length !== str2.length) {
    return false
  }

  const str1List = Array.from(str1.toUpperCase()) // str1 to array

  // get the occurrences of str1 characters by using HashMap
  const str1Occurs = str1List.reduce(
    (map, char) => map.set(char, map.get(char) + 1 || 1),
    new Map()
  )

  for (const char of str2.toUpperCase()) {
    // if char has not exist to the map it's return false
    if (!str1Occurs.has(char)) {
      return false
    }

    let getCharCount = str1Occurs.get(char)
    str1Occurs.set(char, --getCharCount)

    getCharCount === 0 && str1Occurs.delete(char)
  }

  return true
}

export { checkAnagramViaRegex, checkAnagramViaMap }
