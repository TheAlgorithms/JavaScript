/*
    Explanation :- a user gives a String (it can be incomplete uppercase or
        partial uppercase) and then the program would convert it into a
        complete(all characters in lower case) lower case string. The
        logic we have used in the following program is: All the upper case
        characters (A-Z) has ASCII value ranging from 65 to 90 and their
        corresponding lower case characters (a-z) have ASCII values 32
        greater than them. For example ‘A‘ has an ASCII value of 65
        and ‘a‘ has an ASCII value of 97 (65+32). The same applies to other
        characters.
*/

/**
 * LowerCaseConversion takes any case-style string and converts it to the lower case-style string.
 * @param {String} inputString any case style string
 * @returns {String} lower case string
 */
const LowerCaseConversion = (inputString) => {
  // Take a string and split it into characters.
  const newString = inputString.split('').map(char => {
    // Get a character code by the use charCodeAt method.
    const presentCharCode = char.charCodeAt()
    // If the character code lies between 65 to 90 it means they are in the upper case so convert it.
    if (presentCharCode >= 65 && presentCharCode <= 90) {
      // Convert the case by use of the above explanation.
      return String.fromCharCode(presentCharCode + 32)
    }
    // Else return the characters without any modification.
    return char
  })
  // After modification, with the help of the join method, join all the characters and return them.
  return newString.join('')
}

export { LowerCaseConversion }
