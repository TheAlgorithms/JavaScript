/**
 * What is an Isogram?
 * An isogram is a word or phrase without any repeating letters.
 */

/**
 * @function checkIsogramRegex
 * @description - This function checks if a string is an isogram using regex pattern
 * @param {string} string
 * @returns {boolean}
 * @example - checkIsogramRegex("isogram") => true
 * @example - checkIsogramRegex("hello") => false
 */
const checkIsogramRegex = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string');
  }

  /**
   * Match any letter that appears more than once in the string using regex, with the help of:
   * Capturing group - () -> Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
   * Character set - [a-zA-Z] -> Matches a character in the range a to z (case-insensitive).
   * Dot - . -> Matches any character except linebreaks.
   * Star - * -> Matches 0 or more of the preceding token.
   * Backreference - \1 -> Matches the results of the first capture group.
   */
  return !/([a-zA-Z]).*?\1/.test(string);
}

/**
 * @function checkIsogramSet
 * @description - This function detects if a string is an isogram using a Set
 * @param {string} string
 * @returns {boolean}
 */
const checkIsogramSet = (string) => {
  if (typeof string !== 'string') {
    throw new TypeError('The given value is not a string');
  }

  const lettersSet = new Set();

  for (const letter of string.toUpperCase()) {
    if (/[A-Z]/.test(letter)) {
      // If the letter is a valid uppercase alphabet, add it to the Set.
      lettersSet.add(letter);
    }
  }

  return lettersSet.size === string.length;
}

export { checkIsogramRegex, checkIsogramSet };
