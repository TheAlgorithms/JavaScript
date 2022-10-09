/**
 * @function quadraticFormula
 * @description This script will find the the roots of a quadratic equation.
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {array}
 * @see https://en.wikipedia.org/wiki/Quadratic_formula
 * @example quadraticFormula(1, -3, -4) = [4, -1]
 * @example quadraticFormula(1, 5, 6) = [-2, -3]
 * @example quadraticFormula(1, -3, 8) = []
 */

const solveQuadraticEquation = (a, b, c) => {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return new TypeError('Some argument is not a number.')
  }
  const discriminant = (b ** 2) - (4 * a * c)
  const denominator = 2 * a
  let answer = []
  if (discriminant >= 0) {
    const x1 = (-b + Math.sqrt(discriminant)) / denominator
    const x2 = (-b - Math.sqrt(discriminant)) / denominator
    answer = [x1, x2]
  }
  return answer
}

export { solveQuadraticEquation }
