/**
 * @function lower
 * @description Will convert the entire string to lowercase letters.
 * @param {String} url - The input URL string
 * @return {String} Lowercase string
 * @example lower("HELLO") => hello
 * @example lower("He_llo") => he_llo
 */

const lower = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Invalid Input Type')
  }

  let lowerString = ''

  for (const char of str) {
    let asciiCode = char.charCodeAt(0)
    if (asciiCode >= 65 && asciiCode <= 90) {
      asciiCode += 32
    }
    lowerString += String.fromCharCode(asciiCode)
  }

  return lowerString
}

export { lower }
