/**
 * Transcipher a ROT13 cipher
 * @param  {String} text - string to be encrypted
 * @return {String} - decrypted string
 */
const ROT13 = (text) => {
  const originalCharacterList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const toBeMappedCharaterList = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
  const index = x => originalCharacterList.indexOf(x)
  const replace = x => index(x) > -1 ? toBeMappedCharaterList[index(x)] : x
  return text.split('').map(replace).join('')
}

export { ROT13 }

// > ROT13('The quick brown fox jumps over the lazy dog')
// 'Gur dhvpx oebja sbk whzcf bire gur ynml qbt'
