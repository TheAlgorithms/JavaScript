/**
  * Check and count occurrence of each word in a string
  * Inputs a String eg. Madonna and Boolean
  **/

const checkWordOccurrence = (str, isCaseSensitive = false) => {
  if (typeof str !== 'string') {
    throw new TypeError('The first param should be a string')
  }
  if (typeof isCaseSensitive !== 'boolean') {
    throw new TypeError('The second param should be a boolean')
  }

  const result = {}
  if (str.length > 0) {
    for (let i = 0; i < str.length; i++) {
      const word = isCaseSensitive ? str[i] : str[i].toUpperCase()
      if (/\s/.test(word)) continue
      result[word] = (!result[word]) ? 1 : result[word] + 1
    }
  }

  return result
}
export { checkWordOccurrence }
