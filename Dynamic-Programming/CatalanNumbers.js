/*
 * Author: IcarusTheFly (https://github.com/IcarusTheFly)
 * Catalan Numbers explanation can be found in the following links:
 * Wikipedia: https://en.wikipedia.org/wiki/Catalan_number
 * Brilliant: https://brilliant.org/wiki/catalan-numbers
 */

/**
 * @function catalanNumbers
 * @description Returns all catalan numbers from index 0 to n
 * @param {number} n
 * @returns {number[]} Array with the catalan numbers from 0 to n
 */

export const catalanNumbers = (n) => {
  if (n === 0) {
    return [1]
  }
  const catList = [1, 1]

  for (let i = 2; i <= n; i++) {
    let newNumber = 0
    for (let j = 0; j < i; j++) {
      newNumber += catList[j] * catList[i - j - 1]
    }
    catList.push(newNumber)
  }

  return catList
}
