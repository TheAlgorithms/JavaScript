/**
 * Find and retrieve the Caesar cipher encryption key automatically.
 * @param {string} str - The input encrypted string.
 * @returns {number|null} - The encryption key found, or null if not found.
 */
function keyFinder(str) {
  const wordBank = [
    'I ',
    'You ',
    'We ',
    'They ',
    'He ',
    'She ',
    'It ',
    ' the ',
    'The ',
    ' of ',
    ' is ',
    'Is ',
    ' am ',
    'Am ',
    ' are ',
    'Are ',
    ' have ',
    'Have ',
    ' has ',
    'Has ',
    ' may ',
    'May ',
    ' be ',
    'Be '
  ];

  const inStr = String(str);

  for (let k = 0; k < 26; k++) {
    const outStr = caesarCipherEncodeAndDecodeEngine(inStr, k);

    for (let s = 0; s < outStr.length; s++) {
      for (let i = 0; i < wordBank.length; i++) {
        const word = wordBank[i];
        const segment = outStr.slice(s, s + word.length);

        if (segment === word) {
          return k; // Found the key
        }
      }
    }
  }

  return null; // Key not found
}

/**
 * Caesar cipher encode/decode engine.
 * @param {string} inStr - The input string.
 * @param {number} shiftNum - Number of characters to shift (0-25).
 * @returns {string} - The shifted string.
 */
function caesarCipherEncodeAndDecodeEngine(inStr, shiftNum) {
  return inStr
    .split('')
    .map((char) => {
      const code = char.charCodeAt(0);

      // Uppercase A-Z
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + shiftNum) % 26) + 65);
      }

      // Lowercase a-z
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + shiftNum) % 26) + 97);
      }

      // Digits 0-9
      if (code >= 48 && code <= 57) {
        return String.fromCharCode(((code - 48 + shiftNum) % 10) + 48);
      }

      // Non-alphabetic characters remain unchanged
      return char;
    })
    .join('');
}

export { keyFinder };

// Example usage:
// console.log(keyFinder("Uifsf jt b tfdsfu nfttbhf")); // Should return 1
