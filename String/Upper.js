/**
 * @function upper
 * @description Will convert the entire string to uppercase letters.
 * @param {String} url - The input URL string
 * @return {String} Uppercase string
 * @example upper("hello") => HELLO
 * @example upper("He_llo") => HE_LLO
 */

const upper = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Invalid Input Type')
  }

  let upperString = ''

  for (const char of str) {
    let asciiCode = char.charCodeAt(0)
    if (asciiCode >= 97 && asciiCode <= 122) {
      asciiCode -= 32
    }
    upperString += String.fromCharCode(asciiCode)
  }

  return upperString
}

export { upper }
