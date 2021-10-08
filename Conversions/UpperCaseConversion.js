/*
    Explanation :- A user gives a string (it can be incomplete lowercase or
        partially in lowercase) and then the program converts it into a
        completely (all characters in uppercase) uppercase string. The
        logic we have used in the following program is: All the lowercase
        characters (a-z) has [ASCII](https://en.wikipedia.org/wiki/ASCII) value ranging from 97 to 122 and their
        corresponding uppercase characters (A-Z) have ASCII values 32
        lesser than them. For example ‘a‘ has an ASCII value of 97
        and ‘A‘ has an ASCII value of 65 (97 - 32). The same applies to other
        characters.
*/

/**
 * upperCaseConversion takes any case-style string and converts it to the uppercase-style string.
 * @param {string} inputString Any case style string
 * @returns {string} Uppercase string
 */
const upperCaseConversion = (inputString) => {
  // Take a string and split it into characters.
  const newString = inputString.split('').map(char => {
    // Get a character code by the use charCodeAt method.
    const presentCharCode = char.charCodeAt()
    // If the character code lies between 97 to 122, it means they are in the lowercase so convert it.
    if (presentCharCode >= 97 && presentCharCode <= 122) {
      // Convert the case by use of the above explanation.
      return String.fromCharCode(presentCharCode - 32)
    }
    // Else return the characters without any modification.
    return char
  })
  // After modification, with the help of the join method, join all the characters and return them.
  return newString.join('')
}

export { upperCaseConversion }
