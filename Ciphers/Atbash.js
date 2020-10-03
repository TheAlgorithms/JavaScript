/*
The Atbash cipher is a particular type of monoalphabetic cipher 
formed by taking the alphabet and mapping it to its reverse, 
so that the first letter becomes the last letter, 
the second letter becomes the second to last letter, and so on. 
*/


/**
 * Decrypt a Atbash cipher
 * @param {String} str - string to be decrypted/encrypt
 * @return {String} decrypted/encrypted string
 */

const Atbash = (message) => {
    let decodedString = ''

    for (let i = 0; i < message.length; i++) {
        if (/[^a-zA-Z]/.test(message[i])) {
            decodedString += message[i]
        } else if (message[i] === message[i].toUpperCase()) {
            decodedString += String.fromCharCode(90 + 65 - message.charCodeAt(i))
        } else {
            decodedString += String.fromCharCode(122 + 97 - message.charCodeAt(i))
        }
    }
    return decodedString
}

// Atbash Example
const encryptedString = 'HELLO WORLD'
const decryptedString = Atbash(encryptedString)

console.log(decryptedString) // SVOOL DLIOW
