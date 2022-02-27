/**
 * @function checkPangram
 * @description - Pangram is a sentence that contains all the letters in the alphabet https://en.wikipedia.org/wiki/Pangram
 * @param {string} string
 * @returns {boolean}
 * @example - checkPangram("'The quick brown fox jumps over the lazy dog' is a pangram") => true
 * @example - checkPangram('"Waltz, bad nymph, for quick jigs vex." is a pangram') => true
 */
const checkPangram = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string')
  }

  /**
   * Match all 26 alphabets using regex, with the help of:
   * Capturing group - () -> Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
   * Character set - [a-z] -> Matches a char in the range a to z in case-insensitive for the 'i' flag
   * Negative lookahead - (?!) -> Specifies a group that can not match after the main expression (if it matches, the result is discarded).
   * Dot - . -> Matches any character except linebreaks. Equivalent to 
   * Star - * -> Matches 0 or more of the preceding token.
   * Numeric reference - \{$n} -> Matches the results of a capture group. E.g. - \1  matches the results of the first capture group & \3 matches the third.
 */
  return string.match(/([a-z])(?!.*\1)/gi).length === 26
}

export { checkPangram }
