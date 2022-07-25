/**
 * @description - A simple encryption tenichque by replace each letter with its position in the alphabet (A = 1, B = 2, … Z = 26)
 * @see - (https://www.dcode.fr/letter-number-cipher)
 */

// Default key for A1Z26 cipher
const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

/**
 * Check if the input is type of string
 * @param {String} str - input to check
 * @return {Boolean} return true if input is type of string else throw error
 */
function isString (str) {
  if (typeof str !== 'string') throw new TypeError('Argument Should be String')
  return true
}

/**
 * Encrypt a A1Z26 Cipher
 * @param {String} str - string to be encrypted
 * @return {String} result - encrypted string
 */
function encrypt (str) {
  let result = ''
  if (isString(str)) {
    for (let x = 0; x < str.length; x++) {
      result += key.indexOf(str[x].toUpperCase()) + 1 + ' '
    }
  }

  return result.trim()
}

/**
 * Decrypt a A1Z26 Cipher
 * @param {String} str - string to be encrypted
 * @return {String} result - decrypted string
 */
function decrypt (str) {
  let result = ''
  if (isString(str)) {
    str = str.split(' ')
    for (let x = 0; x < str.length; x++) {
      if (str[x] === '0') result += ' '
      else result += key[str[x] - 1]
    }
  }
  return result
}

export { encrypt, decrypt }
