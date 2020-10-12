/**
 * Transcipher a ROT13 cipher
 * @param  {String} text - string to be encrypted
 * @return {String} - decrypted string
 */
const transcipher = (text) => {
  const originalCharacterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const toBeMappedCharaterList = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
  const index = x => originalCharacterList.indexOf(x)
  const replace = x => index(x) > -1 ? toBeMappedCharaterList[index(x)] : x
  return text.split('').map(replace).join('')
}

(() => {
  const messageToBeEncrypted = 'The quick brown fox jumps over the lazy dog'
  console.log(`Original Text = "${messageToBeEncrypted}"`)
  const rot13CipheredText = transcipher(messageToBeEncrypted)
  console.log(`Ciphered Text = "${rot13CipheredText}"`)
  const rot13DecipheredText = transcipher(rot13CipheredText)
  console.log(`Deciphered Text = "${rot13DecipheredText}"`)
})()
