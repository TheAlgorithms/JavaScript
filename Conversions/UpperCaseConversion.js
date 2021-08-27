/*
    Explanation :- a user gives a String (it can be incomplete lower or
        partial lower) and then the program would convert it into a
        complete(all characters in upper case) upper case string. The
        logic we have used in the following program is: All the lower case
        characters (a-z) has ASCII value ranging from 97 to 122 and their
        corresponding upper case characters (A-Z) have ASCII values 32
        lesser than them. For example ‘a‘ has an ASCII value of 97
        and ‘A‘ has an ASCII value of 65 (97 - 32). The same applies to other
        characters.
*/

/**
 * UpperCaseConversion takes any case-style string and converts it to the upper case-style string.
 * @param {String} inputString any case style string
 * @returns {String} upper case string
 */
const UpperCaseConversion = (inputString) => {
  // Take a string and split it into characters.
  const newString = inputString.split('').map(char => {
    // Get a character code by the use charCodeAt method.
    const presentCharCode = char.charCodeAt()
    // If the character code lies between 97 to 122 it means they are in the lower case so convert it.
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

module.exports = UpperCaseConversion
