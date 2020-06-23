/**
 * The XOR cipher is a type of additive cipher.
 * Each character is bitwise XORed with the key.
 * We loop through the input string, XORing each
 * character with the key.
 */

/**
 * Encrypt using an XOR cipher
 * @param {String} str - String to be encrypted
 * @param {Number} key - key for encryption
 * @return {String} encrypted string
 */
function XOR(str, key) {
    let result = "";
    for (const elem of str) {
        result += String.fromCharCode(elem.charCodeAt(0) ^ key);
    }
    return result;
}

const encryptedString =  XOR("test string", 32);
console.log("Encrypted: ", encryptedString);
const decryptedString = XOR(encryptedString, 32);
console.log("Decrypted: ", decryptedString);
