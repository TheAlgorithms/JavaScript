/**
 * This class represents a Trapezoid and provides methods to calculate its area and perimeter.
 * @see {@link https://en.wikipedia.org/wiki/Trapezoid}
 * @class
 */
export default class Trapezoid {
  /** @private */
  #base1

  /** @private */
  #base2

  /** @private */
  #height

  /** @private */
  #sideA

  /** @private */
  #sideB

  /**
   * Creates a trapezoid instance.
   * @constructor
   * @param {number} base1 - The length of the first base.
   * @param {number} base2 - The length of the second base.
   * @param {number} height - The height of the trapezoid.
   * @param {number} [sideA] - The length of side A (optional).
   * @param {number} [sideB] - The length of side B (optional).
   * @throws {Error} Will throw an error if any dimension is invalid.
   */
  constructor(base1, base2, height, sideA = null, sideB = null) {
    this.#validateDimension(base1, 'base1')
    this.#validateDimension(base2, 'base2')
    this.#validateDimension(height, 'height')

    this.#base1 = base1
    this.#base2 = base2
    this.#height = height
    this.#sideA = sideA
    this.#sideB = sideB
  }

  /**
   * Validates that a dimension is a positive number.
   * @private
   * @param {number} value - The value to validate.
   * @param {string} name - The name of the dimension (for error reporting).
   * @throws {Error} Will throw an error if the value is not a positive number.
   */
  #validateDimension(value, name) {
    if (typeof value !== 'number' || isNaN(value) || value <= 0) {
      throw new Error(`${name} must be a positive number.`)
    }
  }

  /**
   * Calculates the area of the trapezoid.
   * @public
   * @returns {number} The area of the trapezoid.
   */
  area() {
    return ((this.#base1 + this.#base2) / 2) * this.#height
  }

  /**
   * Calculates the perimeter of the trapezoid.
   * @public
   * @returns {number} The perimeter of the trapezoid.
   * @throws {Error} Will throw an error if not all sides are known.
   */
  perimeter() {
    if (this.#sideA === null || this.#sideB === null) {
      throw new Error('Cannot calculate perimeter: not all sides are known.')
    }
    return this.#base1 + this.#base2 + this.#sideA + this.#sideB
  }

  /**
   * Returns a string representation of the trapezoid.
   * @public
   * @returns {string} A string describing the trapezoid's dimensions and area/perimeter.
   */
  toString() {
    const areaValue = this.area()
    let perimeterValue

    // Check if all sides are known for perimeter calculation
    if (this.#sideA === null || this.#sideB === null) {
      perimeterValue = 'unknown'
    } else {
      perimeterValue = this.perimeter()
    }

    return (
      `Trapezoid: base1 = ${this.#base1}, base2 = ${this.#base2}, height = ${
        this.#height
      }, ` +
      `sideA = ${this.#sideA ?? 'unknown'}, sideB = ${
        this.#sideB ?? 'unknown'
      }, ` +
      `area = ${areaValue}, perimeter = ${perimeterValue}`
    )
  }

  /**
   * Gets the first base of the trapezoid.
   * @public
   * @returns {number} The first base of the trapezoid.
   */
  get base1() {
    return this.#base1
  }

  /**
   * Gets the second base of the trapezoid.
   * @public
   * @returns {number} The second base of the trapezoid.
   */
  get base2() {
    return this.#base2
  }

  /**
   * Gets the height of the trapezoid.
   * @public
   * @returns {number} The height of the trapezoid.
   */
  get height() {
    return this.#height
  }

  /**
   * Gets the lengths of sides A and B of the trapezoid.
   * @public
   * @returns {Array<number|null>} An array containing lengths of side A and side B or null for unknown sides.
   */
  get sides() {
    return [this.#sideA, this.#sideB]
  }
}
