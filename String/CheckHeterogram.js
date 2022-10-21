// A [Heterogram](https://en.wikipedia.org/wiki/Heterogram_(literature)) is a word, phrase or sentence in which no letter of the alphabet occurs more than once.

/**
 * @function checkHeterogram
 * @param {string} str
 * @returns {boolean}
 * @description - check if a string is a heterogram with the help of Regex
 * @example - checkHeterogram('hero') => true
 * @example - checkHeterogram('CoMpUtEr') => true
 * @example - checkHeterogram('Great work!!') => true
 * @example - checkHeterogram('Aba') => false
 */

const checkHeterogram = (str) => {
  // Check that input is a string
  if (typeof str !== 'string') {
    throw new TypeError('Argument not a string.')
  }

  // finally check that there are no repeated letters (case insensitive) and return the answer.
  return !str.match(/([a-z]).*\1/i)
}

export { checkHeterogram }
