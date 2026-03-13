function createCipher(key) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const cipher = {};

  for (let i = 0; i < alphabet.length; i++) {
    cipher[alphabet[i]] = key[i] || alphabet[i];
  }

  return cipher;
}

function encrypt(plainText, cipher) {
  return plainText
    .toUpperCase() // Convert to uppercase for consistency
    .split('')
    .map(char => cipher[char] || char)
    .join('');
}

function decrypt(encryptedText, cipher) {
  const reverseCipher = {};
  for (const key in cipher) {
    if (cipher.hasOwnProperty(key)) {
      reverseCipher[cipher[key]] = key;
    }
  }

  return encryptedText
    .toUpperCase()
    .split('')
    .map(char => reverseCipher[char] || char)
    .join('');
}

// Example usage:
const key = 'XZVTPONMLKJIHGFEDCBA';
const text = 'Hello, World!';

const cipher = createCipher(key);
const encryptedText = encrypt(text, cipher);
const decryptedText = decrypt(encryptedText, cipher);

console.log('Original text:', text);
console.log('Encrypted text:', encryptedText);
console.log('Decrypted text:', decryptedText);
