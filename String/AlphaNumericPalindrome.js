/**
 * alphaNumericPlaindrome should return true if the string has alphanumeric characters that are palindrome irrespective of special characters and the letter case
 * @param {string} str the string to check
 * @returns `Boolean`
 */

/*****************************************************************************
 * What is a palindrome? https://en.wikipedia.org/wiki/Palindrome
 *
 * The function alphaNumericPlaindrome() recieves a sting with varying formats
 * like "racecar", "RaceCar", and "race CAR"
 * The string can also have special characters
 * like "2A3*3a2", "2A3 3a2", and "2_A3*3#A2"
 *
 * But the catch is, we have to check only if the alphanumeric characters
 * are palindrome i.e remove spaces, symbols, punctuations etc
 * and the case of the characters doesn't matter
 *
 * This is one of the questions/projects that we have to solve for the
 * JavaScript Algorithms and Data Structures course on https://www.freecodecamp.org
 *
 * Author -- Syed Fasiuddin
 * https://github.com/SyedFasiuddin
 *
 ****************************************************************************/

const alphaNumericPlaindrome = (str) => {
  // removing all the special characters and turning everything to lowercase
  const newStr = str.replace(/[^a-zA-Z0-9]*/g, '').toLowerCase()
  // the newStr variable is a string and only has alphanumeric characters all in lowercase

  // making an array of individual characters as it's elements
  const arr = newStr.split('')

  // setting a variable to see if change occurs to it
  let palin = 0

  // making a copy of arr with spread operator
  const arrRev = [...arr]
  // you can use arrRev.reverse() to reverse the array
  // or else you can use the below method

  // iterate through the arr and check the condition of palindrome
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arrRev[arr.length - 1 - i]) {
      // if the string is not palindrome then we change palin varaible to 1
      palin = 1
    }
  }

  // if the string is palindrome then palin variable is never changed
  if (palin === 0) return true
  else return false
}

export { alphaNumericPlaindrome }
