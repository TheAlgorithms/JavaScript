/**
 * @function eulerNumber
 * @description Approximates Euler's number (e) using the formula:
 *   e = sum(1/n!) for n from 0 to infinity.
 *   This function computes e to a specified number of terms.
 * @param {number} terms - Number of terms to use in approximation
 * @returns {number} - Approximation of Euler's number e
 * @see https://en.wikipedia.org/wiki/E_(mathematical_constant)
 * @example eulerNumber(10) => 2.7182818011...
 * @example eulerNumber(20) => 2.718281828459045
 */
const eulerNumber = (terms) => {
  if (!Number.isInteger(terms) || terms < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  let result = 0
  let factorial = 1
  for (let i = 0; i < terms; i++) {
    if (i > 0) factorial *= i
    result += 1 / factorial
  }
  return result
}

export { eulerNumber }
