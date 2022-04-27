/**
 * @function XORCipher
 * @description - Encrypt using an XOR cipher
 * The XOR cipher is a type of additive cipher.
 * Each character is bitwise XORed with the key.
 * We loop through the input string, XORing each
 * character with the key.
 * @param {string} str - string to be encrypted
 * @param {number} key - key for encryption
 * @return {string} encrypted string
 */
const XORCipher = (str, key) => {
  if (typeof str !== 'string' || !Number.isInteger(key)) {
    throw new TypeError('Arguments type are invalid')
  }

  return str.replace(
    /./g, (char) => String.fromCharCode(char.charCodeAt() ^ key)
  )
}

export default XORCipher
