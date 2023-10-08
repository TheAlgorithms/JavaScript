/**
 * @function checkWordOccurrence
 * @description - this function count all the words in a sentence and return an word occurrence object
 * @param {string} str
 * @param {boolean} isCaseSensitive
 * @returns {Object}
 */
const checkWordOccurrence = (str, isCaseSensitive = false) => {
  if (typeof str !== 'string') {
    throw new TypeError('The first param should be a string')
  }

  if (typeof isCaseSensitive !== 'boolean') {
    throw new TypeError('The second param should be a boolean')
  }

  const modifiedStr = isCaseSensitive ? str.toLowerCase() : str

  return modifiedStr
    .split(/\s+/) // remove all spaces and distribute all word in List
    .reduce((occurrence, word) => {
      occurrence[word] = occurrence[word] + 1 || 1
      return occurrence
    }, {})
}

export { checkWordOccurrence }
