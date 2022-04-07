/**
 * @function checkExceeding
 * @description - Exceeding words are words where the gap between two adjacent characters is increasing. The gap is the distance in ascii
 * @param {string} str
 * @returns {boolean}
 * @example - checkExceeding('delete') => true, ascii difference - [1, 7, 7, 15, 15] which is incremental
 * @example - checkExceeding('update') => false, ascii difference - [5, 12, 3, 19, 15] which is not incremental
 */
const checkExceeding = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Argument is not a string')
  }

  const upperChars = str
    .toUpperCase()
    .replace(/[^A-Z]/g, '') // remove all from str except A to Z alphabets

  const adjacentDiffList = []

  for (let i = 0; i < upperChars.length - 1; i++) {
    // destructuring current char & adjacent char by index, cause in javascript String is an object.
    const { [i]: char, [i + 1]: adjacentChar } = upperChars

    if (char !== adjacentChar) {
      adjacentDiffList.push(
        Math.abs(char.charCodeAt() - adjacentChar.charCodeAt())
      )
    }
  }

  for (let i = 0; i < adjacentDiffList.length - 1; i++) {
    const { [i]: charDiff, [i + 1]: secondCharDiff } = adjacentDiffList

    if (charDiff > secondCharDiff) {
      return false
    }
  }

  return true
}

export { checkExceeding }
