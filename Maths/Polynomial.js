/**
 * Polynomials are algebraic expressions consisting of two or more algebraic terms.
 * Terms of a polynomial are:
 * 1. Coefficients e.g. 5, 4 in 5x^0, 4x^3 respectively
 * 2. Variables e.g. y in 3y^2
 * 3. Exponents e.g. 5 in y^5
 *
 * Class Polynomial constructs the polynomial using Array as an argument.
 * The members of array are coefficients and their indexes as exponents.
 */
class Polynomial {
  constructor(array) {
    this.coefficientArray = array // array of coefficients
    this.polynomial = '' // in terms of x e.g. (2x) + (1)
    this.construct()
  }

  /**
   * Function to construct the polynomial in terms of x using the coefficientArray
   */
  construct() {
    this.polynomial = this.coefficientArray
      .map((coefficient, exponent) => {
        if (coefficient === 0) {
          return '0'
        }
        if (exponent === 0) {
          return `(${coefficient})`
        } else if (exponent === 1) {
          return `(${coefficient}x)`
        } else {
          return `(${coefficient}x^${exponent})`
        }
      })
      .filter((x) => x !== '0')
      .reverse()
      .join(' + ')
  }

  /**
   * Function to display polynomial in terms of x
   * @returns {String} of polynomial representation in terms of x
   */
  display() {
    return this.polynomial
  }

  /**
   * Function to calculate the value of the polynomial by substituting variable x
   * @param {Number} value
   */
  evaluate(value) {
    return this.coefficientArray.reduce((result, coefficient, exponent) => {
      return result + coefficient * Math.pow(value, exponent)
    }, 0)
  }
}

export { Polynomial }
