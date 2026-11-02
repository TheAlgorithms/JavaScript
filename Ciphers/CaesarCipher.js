/**
 * @function caesarCipher
 * @description Caesar cipher is one of the simplest encryption techniques.
 *   It works by shifting each letter in the plaintext by a fixed number
 *   of positions in the alphabet.
 * @param {string} str - The input string to encrypt/decrypt
 * @param {number} shift - The number of positions to shift (can be negative)
 * @returns {string} - The encrypted/decrypted string
 * @see https://en.wikipedia.org/wiki/Caesar_cipher
 * @example caesarCipher("ABC", 1) => "BCD"
 * @example caesarCipher("XYZ", 3) => "ABC"
 * @example caesarCipher("Hello World", 13) => "Uryyb Jbeyq"
 */
const caesarCipher = (str, shift) => {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string')
  }
  if (!Number.isInteger(shift)) {
    throw new TypeError('Shift must be an integer')
  }
  const normalizedShift = ((shift % 26) + 26) % 26
  return str
    .split('')
    .map((char) => {
      if (char.match(/[a-z]/)) {
        return String.fromCharCode(
          ((char.charCodeAt(0) - 97 + normalizedShift) % 26) + 97
        )
      }
      if (char.match(/[A-Z]/)) {
        return String.fromCharCode(
          ((char.charCodeAt(0) - 65 + normalizedShift) % 26) + 65
        )
      }
      return char
    })
    .join('')
}

export { caesarCipher }
