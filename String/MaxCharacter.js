/**
 * @function maxCharacter
 * @example - Given a string of characters, return the character that appears the most often. Example: input = "Hello World!" return "l"
 * @param {string} str
 * @returns {string} - char
 */
const maxCharacter = (str, filterPattern = /[^a-z]/gi) => { // initially it's count only alphabets
  if (typeof str !== 'string') {
    throw new TypeError('Argument should be a string')
  }

  const filteredStr = filterPattern ? str.replace(filterPattern, '') : str

  const occurrenceMap = new Map()

  // store all char in occurrence map
  for (const char of filteredStr) {
    occurrenceMap.set(char, occurrenceMap.get(char) + 1 || 1)
  }

  let max = { char: '', occur: -Infinity }

  // find the max char from the occurrence map
  for (const [char, occur] of occurrenceMap) { // map is iterable so we can fire the for of loop
    if (occur > max.occur) {
      max = { char, occur } // re-initialize the new max object
    }
  }

  return max.char
}

export default maxCharacter
