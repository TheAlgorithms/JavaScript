/**
 * @function upper
 * @description Will convert the entire string to uppercase letters.
 * @param {String} str - The input string
 * @return {String} Uppercase string
 * @example upper("hello") => HELLO
 * @example upper("He_llo") => HE_LLO
 */
const upper = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Argument should be string')
  }

  return str.replace(
    /[a-z]/g,
    (_, indexOfLowerChar) => {
      const asciiCode = str.charCodeAt(indexOfLowerChar)

      return String.fromCharCode(asciiCode - 32)
    }
  )
}

export { upper }
