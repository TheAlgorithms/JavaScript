/**
 * This class represents a Triangle and can calculate its area and perimeter with either all three sides or the base and height.
 * https://en.wikipedia.org/wiki/Triangle
 * @class
 */
export default class Triangle {
  /**
   * Create a triangle.
   * @constructor
   * @param {...number} args - The triangle dimensions.
   * @throws {Error} Will throw an error if the number of arguments is invalid or if the triangle is invalid.
   */
  constructor(...args) {
    if (args.length === 2) {
      this.initializeFromBaseAndHeight(...args)
    } else if (args.length === 3) {
      this.initializeFromSides(...args)
    } else {
      throw new Error(
        'Invalid number of arguments. Use either (base, height) or (sideA, sideB, sideC).'
      )
    }
  }

  /**
   * Initialize the triangle from base and height.
   * @param {number} base - The base of the triangle.
   * @param {number} height - The height of the triangle.
   * @private
   */
  initializeFromBaseAndHeight = (base, height) => {
    this.base = base
    this.height = height
    this.sides = [base, null, null]
  }

  /**
   * Initialize the triangle from three sides.
   * @param {number} sideA - The length of side A.
   * @param {number} sideB - The length of side B.
   * @param {number} sideC - The length of side C.
   * @throws {Error} Will throw an error if the triangle is invalid.
   * @private
   */
  initializeFromSides = (sideA, sideB, sideC) => {
    if (!this.isValidTriangle(sideA, sideB, sideC)) {
      throw new Error(
        'Invalid triangle: The sum of any two sides must be greater than the third side.'
      )
    }
    this.sides = [sideA, sideB, sideC]
    this.base = sideA
    this.height = null
  }

  /**
   * Check if three sides can form a valid triangle.
   * @param {number} a - The length of side A.
   * @param {number} b - The length of side B.
   * @param {number} c - The length of side C.
   * @returns {boolean} True if the triangle is valid, false otherwise.
   * @private
   */
  isValidTriangle = (a, b, c) => {
    return a + b > c && b + c > a && c + a > b
  }

  /**
   * Calculate the area of the triangle.
   * @returns {number} The area of the triangle.
   * @public
   */
  area = () => {
    if (this.height !== null) {
      return 0.5 * this.base * this.height
    }
    // Using Heron's formula
    const [a, b, c] = this.sides
    const s = (a + b + c) / 2
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
  }

  /**
   * Calculate the perimeter of the triangle.
   * @returns {number} The perimeter of the triangle.
   * @throws {Error} Will throw an error if not all sides are known.
   * @public
   */
  perimeter = () => {
    if (this.sides.some((side) => side === null)) {
      throw new Error('Cannot calculate perimeter: not all sides are known.')
    }
    return this.sides.reduce((sum, side) => sum + side, 0)
  }
}
