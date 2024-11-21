// A [Heterogram](https://en.wikipedia.org/wiki/Heterogram_(literature)) is a word, phrase or sentence in which no letter of the alphabet occurs more than once.

/**
 * @function checkHeterogram
 * @param {string} str
 * @returns {boolean}
 * @description - check if a string is a heterogram
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

  // initialize a hashmap where the letters of the string will be checked for duplicates
  const letters = new Map()

  // Check all the characters in the string by looping through it
  for (let i = 0; i < str.length; i++) {
    // If the character is a letter check whether it is a duplicate
    if (str.charAt(i).match(/[a-z]/gi)) {
      // If the letter exists in the hashmap already return false else store it in the hashmap
      if (letters.has(str.charAt(i).toLowerCase())) {
        return false
      } else {
        letters.set(str.charAt(i).toLowerCase())
      }
    }
  }

  // Once all characters of the string have been checked return true
  return true
}

export { checkHeterogram }
