/*
 *
 *  Letter Combinations of a Phone Number
 *
 *  Given a string containing digits from 2-9 inclusive,
 *  return all possible letter combinations that the number could represent.
 *  Return the answer in any order.

 *  A mapping of digits to letters (just like on the telephone buttons) is given below.
 *  Note that 1 does not map to any letters.
 *  More info: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */

/*
 * @param {string} digits
 * @returns {string[]} all the possible combinations
 */

const letterCombinations = (digits) => {
  const length = digits?.length
  const result = []
  if (!length) {
    return result
  }
  const digitMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const combinations = (index, combination) => {
    let letter
    let letterIndex
    if (index >= length) {
      result.push(combination)
      return
    }
    const digit = digitMap[digits[index]]
    letterIndex = 0
    while ((letter = digit[letterIndex++])) {
      combinations(index + 1, combination + letter)
    }
  }
  combinations(0, '')
  return result
}

export { letterCombinations }
