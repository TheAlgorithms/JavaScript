/**
 * @function leibnizPi
 * @description Approximates Pi using the Leibniz formula:
 *   π/4 = 1 - 1/3 + 1/5 - 1/7 + 1/9 - ...
 * @param {number} terms - Number of terms to use in approximation
 * @returns {number} - Approximation of Pi
 * @see https://en.wikipedia.org/wiki/Leibniz_formula_for_%CF%80
 * @example leibnizPi(1000) => ~3.1405926...
 * @example leibnizPi(10000) => ~3.1414926...
 */
const leibnizPi = (terms) => {
  if (!Number.isInteger(terms) || terms < 1) {
    throw new TypeError('Input must be a positive integer')
  }
  let sum = 0
  for (let i = 0; i < terms; i++) {
    sum += (-1) ** i / (2 * i + 1)
  }
  return 4 * sum
}

export { leibnizPi }
