/**
 * Substitution Cipher
 *
 * A monoalphabetic substitution cipher replaces each letter of the plaintext
 * with another letter based on a fixed permutation (key) of the alphabet.
 * https://en.wikipedia.org/wiki/Substitution_cipher
 */

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const defaultKey = 'QWERTYUIOPASDFGHJKLZXCVBNM'

/**
 * Encrypts a string using a monoalphabetic substitution cipher
 * @param {string} text - The text to encrypt
 * @param {string} key - The substitution key (must be 26 uppercase letters)
 * @returns {string}
 */
export function substitutionCipherEncryption(text, key = defaultKey) {
  if (key.length !== 26 || !/^[A-Z]+$/.test(key)) {
    throw new RangeError('Key must be 26 uppercase English letters.')
  }

  let result = ''
  const textUpper = text.toUpperCase()
  for (let i = 0; i < textUpper.length; i++) {
    const char = textUpper[i]
    const index = alphabet.indexOf(char)
    if (index !== -1) {
      result += key[index]
    } else {
      result += char
    }
  }
  return result
}
/**
 * Decrypts a string encrypted with the substitution cipher
 * @param {string} text - The encrypted text
 * @param {string} key - The substitution key used during encryption
 * @returns {string}
 */
export function substitutionCipherDecryption(text, key = defaultKey) {
  if (key.length !== 26 || !/^[A-Z]+$/.test(key)) {
    throw new RangeError('Key must be 26 uppercase English letters.')
  }

  let result = ''
  const textUpper = text.toUpperCase()
  for (let i = 0; i < textUpper.length; i++) {
    const char = textUpper[i]
    const index = key.indexOf(char)
    if (index !== -1) {
      result += alphabet[index]
    } else {
      result += char
    }
  }
  return result
}
