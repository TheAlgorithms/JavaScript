/**
 * This class represents a Triangle and provides methods to calculate its area and perimeter
 * based on either all three sides or the base and height.
 * @see {@link https://en.wikipedia.org/wiki/Triangle}
 * @class
 */
export default class Triangle {
  /** @private */
  #base

  /** @private */
  #height

  /** @private */
  #sides

  /**
   * Creates a triangle instance.
   * @constructor
   * @param {...number} args - The dimensions of the triangle.
   * @throws {Error} Will throw an error if the number of arguments is invalid or if the triangle is invalid.
   */
  constructor(...args) {
    if (args.length === 2) {
      this.#initializeFromBaseAndHeight(...args)
    } else if (args.length === 3) {
      this.#initializeFromSides(...args)
    } else {
      throw new Error(
        'Invalid number of arguments. Use either (base, height) or (sideA, sideB, sideC).'
      )
    }
  }

  /**
   * Initializes the triangle from base and height.
   * @private
   * @param {number} base - The base of the triangle.
   * @param {number} height - The height of the triangle.
   */
  #initializeFromBaseAndHeight(base, height) {
    this.#base = base
    this.#height = height
    this.#sides = [base, null, null]
  }

  /**
   * Initializes the triangle from three sides.
   * @private
   * @param {number} sideA - The length of side A.
   * @param {number} sideB - The length of side B.
   * @param {number} sideC - The length of side C.
   * @throws {Error} Will throw an error if the triangle is invalid.
   */
  #initializeFromSides(sideA, sideB, sideC) {
    if (!this.#isValidTriangle(sideA, sideB, sideC)) {
      throw new Error(
        'Invalid triangle: The sum of any two sides must be greater than the third side.'
      )
    }
    this.#sides = [sideA, sideB, sideC]
    this.#base = sideA // Assuming base is one of the sides for consistency
    this.#height = null
  }

  /**
   * Checks if three sides can form a valid triangle.
   * @private
   * @param {number} a - The length of side A.
   * @param {number} b - The length of side B.
   * @param {number} c - The length of side C.
   * @returns {boolean} True if the triangle is valid; false otherwise.
   */
  #isValidTriangle(a, b, c) {
    return a + b > c && b + c > a && c + a > b
  }

  /**
   * Calculates the area of the triangle.
   * @public
   * @returns {number} The area of the triangle.
   */
  area() {
    if (this.#height !== null) {
      return 0.5 * this.#base * this.#height
    }
    // Using Heron's formula
    const [a, b, c] = this.#sides
    const s = (a + b + c) / 2
    return Math.sqrt(s * (s - a) * (s - b) * (s - c))
  }

  /**
   * Calculates the perimeter of the triangle.
   * @public
   * @returns {number} The perimeter of the triangle.
   * @throws {Error} Will throw an error if not all sides are known.
   */
  perimeter() {
    if (this.#sides.some((side) => side === null)) {
      throw new Error('Cannot calculate perimeter: not all sides are known.')
    }
    return this.#sides.reduce((sum, side) => sum + side, 0)
  }

  /**
   * Returns a string representation of the triangle.
   * @public
   * @returns {string} A string describing the triangle's dimensions and area/perimeter.
   */
  toString() {
    const areaValue = this.area()
    let perimeterValue

    // Check if all sides are known for perimeter calculation
    if (this.#sides.some((side) => side === null)) {
      perimeterValue = 'unknown'
    } else {
      perimeterValue = this.perimeter()
    }

    return (
      `Triangle: base = ${this.#base}, height = ${
        this.#height ?? 'unknown'
      }, ` +
      `sides = ${this.#sides.map((side) => side ?? 'unknown').join(', ')}, ` +
      `area = ${areaValue}, perimeter = ${perimeterValue}`
    )
  }

  /**
   * Gets the base of the triangle.
   * @public
   * @returns {number} The base of the triangle.
   */
  get base() {
    return this.#base
  }

  /**
   * Gets the height of the triangle.
   * @public
   * @returns {number|null} The height of the triangle or null if not defined.
   */
  get height() {
    return this.#height
  }

  /**
   * Gets the lengths of all sides of the triangle.
   * @public
   * @returns {Array<number|null>} An array containing lengths of all three sides or null for unknown sides.
   */
  get sides() {
    return this.#sides
  }
}
