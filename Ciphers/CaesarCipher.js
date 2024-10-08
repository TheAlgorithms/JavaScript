/**
 * @function caesarsCipher
 * @description - In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.
 * @see - [wiki](https://en.wikipedia.org/wiki/Caesar_cipher)
 * @param  {string} str - string to be encrypted
 * @param {number} rotation - the number of rotation, expect real number ( > 0)
 * @param {string} [alphabet='abcdefghijklmnopqrstuvwxyz'] - Optional parameter to specify a custom alphabet
 * @return {string} - decrypted string
 */
const caesarCipher = (str, rotation, alphabet = 'abcdefghijklmnopqrstuvwxyz') => {
  if (typeof str !== 'string' || !Number.isInteger(rotation) || rotation < 0) {
    throw new TypeError('Arguments are invalid');
  }

  const alphabets = Array.from(alphabet); // Allow custom alphabet
  const alphabetLength = alphabets.length;

  // Optimize rotation to handle rotations greater than alphabet length
  const effectiveRotation = rotation % alphabetLength;

  // Create cipher map to avoid recalculating for each character
  const cipherMap = alphabets.reduce((map, char, index) => {
    map.set(char, alphabets[(effectiveRotation + index) % alphabetLength]);
    return map;
  }, new Map());

  return str.replace(/[a-z]/gi, (char) => {
    const isUpperCase = /[A-Z]/.test(char);
    const lowerChar = char.toLowerCase();

    // Check if the character is in the map (i.e., an alphabetic character)
    if (cipherMap.has(lowerChar)) {
      const cipheredChar = cipherMap.get(lowerChar);
      return isUpperCase ? cipheredChar.toUpperCase() : cipheredChar;
  }
  
  return cipherMap.get(char);
});

};

// Example usage:
console.log(caesarCipher('Hello World!', 3)); // Khoor Zruog!

export default caesarCipher;
