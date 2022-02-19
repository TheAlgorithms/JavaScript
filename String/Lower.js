/**
 * @function lower
 * @description Will convert the entire string to lowercase letters.
 * @param {String} str - The input string
 * @returns {String} Lowercase string
 * @example lower("HELLO") => hello
 * @example lower("He_llo") => he_llo
 */

const lower = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Invalid Input Type')
  }

  return str
    .replace(/[A-Z]/g, (_, indexOfUpperChar) => {
      const asciiCode = str.charCodeAt(indexOfUpperChar)

      return String.fromCharCode(asciiCode + 32)
    })
}

export { lower }
