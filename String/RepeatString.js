/**
 * @function repeatString
 * @description Repeats a string a specified number of times
 *   without using JavaScript's built-in String.repeat().
 * @param {string} str - The input string to repeat
 * @param {number} n - Number of times to repeat
 * @returns {string} - The repeated string
 * @see https://en.wikipedia.org/wiki/String_(computer_science)
 * @example repeatString("abc", 3) => "abcabcabc"
 * @example repeatString("ha", 2) => "haha"
 * @example repeatString("abc", 0) => ""
 */
const repeatString = (str, n) => {
  if (typeof str !== 'string') {
    throw new TypeError('First argument must be a string')
  }
  if (!Number.isInteger(n) || n < 0) {
    throw new TypeError('Second argument must be a non-negative integer')
  }
  let result = ''
  for (let i = 0; i < n; i++) {
    result += str
  }
  return result
}

export { repeatString }
