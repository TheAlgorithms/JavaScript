/**
 * @function ROT13
 * @description - ROT13 ("rotate by 13 places", sometimes hyphenated ROT-13) is a simple letter substitution cipher that replaces a letter with the 13th letter after it in the alphabet. ROT13 is a special case of the Caesar cipher which was developed in ancient Rome. Because there are 26 letters (2×13) in the basic Latin alphabet, ROT13 is its own inverse; that is, to undo ROT13, the same algorithm is applied, so the same action can be used for encoding and decoding. The algorithm provides virtually no cryptographic security, and is often cited as a canonical example of weak encryption.
 * @see - [wiki](https://en.wikipedia.org/wiki/ROT13)
 * @param {String} str - string to be decrypted
 * @return {String} decrypted string
 */
function ROT13 (str) {
  if (typeof str !== 'string') {
    throw new TypeError('Argument should be string')
  }

  return str.replace(/[a-z]/gi, (char) => {
    const charCode = char.charCodeAt()

    if (/[n-z]/i.test(char)) {
      return String.fromCharCode(charCode - 13)
    }

    return String.fromCharCode(charCode + 13)
  })
}

export default ROT13
