/**
 * @function caesarsCipher
 * @description - In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.
 * @see - [wiki](https://en.wikipedia.org/wiki/Caesar_cipher)
 * @param  {string} str - string to be encrypted
 * @param {number} rotation - the number of rotation, expect real number ( > 0)
 * @return {string} - decrypted string
 */
const caesarCipher = (str, rotation) => {
  if (typeof str !== 'string' || !Number.isInteger(rotation) || rotation < 0) {
    throw new TypeError('Arguments are invalid')
  }

  const alphabets = new Array(26)
    .fill()
    .map((_, index) => String.fromCharCode(97 + index)) // generate all lower alphabets array a-z

  const cipherMap = alphabets.reduce(
    (map, char, index) => map.set(char, alphabets[(rotation + index) % 26]),
    new Map()
  )

  return str.replace(/[a-z]/gi, (char) => {
    if (/[A-Z]/.test(char)) {
      return cipherMap.get(char.toLowerCase()).toUpperCase()
    }

    return cipherMap.get(char)
  })
}

export default caesarCipher
