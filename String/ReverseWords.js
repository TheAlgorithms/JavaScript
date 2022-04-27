/**
 * @function reverseWords
 * @param {string} str
 * @returns {string} - reverse string
 */
const reverseWords = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('The given value is not a string')
  }

  return str
    .split(/\s+/) // create an array with each word in string
    .reduceRight((reverseStr, word) => `${reverseStr} ${word}`, '') // traverse the array from last & create an string
    .trim() // remove the first useless space
}

export default reverseWords
