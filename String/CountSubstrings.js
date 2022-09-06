/**
 * @function countSubstrings
 * @description Given a string of words or phrases, count the occurrences of a substring
 * @param {String} str - The input string
 * @param {String} substring - The substring
 * @return {Number} - The number of substring occurrences
 * @example countSubstrings("This is a string", "is") => 2
 * @example countSubstrings("Hello", "e") => 1
 */

const countSubstrings = (str, substring) => {
  if (typeof str !== 'string' || typeof substring !== 'string') {
    throw new TypeError('Argument should be string')
  }

  if (substring.length === 0) return str.length + 1

  let count = 0
  let position = str.indexOf(substring)

  while (position > -1) {
    count++
    position = str.indexOf(substring, position + 1)
  }

  return count
}

export { countSubstrings }
