/**
 * @function Atbash - Decrypt a Atbash cipher
 * @description - The Atbash cipher is a particular type of monoalphabetic cipher formed by taking the alphabet and mapping it to its reverse, so that the first letter becomes the last letter, the second letter becomes the second to last letter, and so on.
 * @param {string} str - string to be decrypted/encrypt
 * @return {string} decrypted/encrypted string
 * @see - [wiki](https://en.wikipedia.org/wiki/Atbash)
 */
const Atbash = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Argument should be string')
  }

  return str.replace(/[a-z]/gi, (char) => {
    const charCode = char.charCodeAt()

    if (/[A-Z]/.test(char)) {
      return String.fromCharCode(90 + 65 - charCode)
    }

    return String.fromCharCode(122 + 97 - charCode)
  })
}

export default Atbash
