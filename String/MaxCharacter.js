/**
 * @function maxCharacter
 * @example - Given a string of characters, return the character that appears the most often. Example: input = "Hello World!" return "l"
 * @param {string} str
 * @param {RegExp} ignorePattern - ignore the char in str that is not required
 * @returns {string} - char
 */
const maxCharacter = (str, ignorePattern) => { // initially it's count only alphabets
  if (typeof str !== 'string') {
    throw new TypeError('Argument should be a string')
  } else if (!str) {
    throw new Error('The param should be a valid string')
  }

  // store all char in occurrence map
  const occurrenceMap = [...str].reduce(
    (map, char) => (
      !ignorePattern?.test(char)
        ? map.set(char, map.get(char) + 1 || 1)
        : map
    ),
    new Map()
  )

  // find the max char from the occurrence map
  return [...occurrenceMap.entries()].reduce(
    (acc, [char, occur]) => {
      if (occur > acc.occur) {
        return { char, occur }
      }

      return acc
    },
    { char: '', occur: -Infinity }
  )
    .char // return the maximum char
}

export default maxCharacter
