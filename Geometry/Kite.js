/**
 * This class represents a Kite and provides methods to calculate its area and perimeter.
 * @see {@link https://en.wikipedia.org/wiki/Kite_(geometry)}
 * @class
 */
export default class Kite {
  /** @private */
  #sideA

  /** @private */
  #sideB

  /** @private */
  #diagonal1

  /** @private */
  #diagonal2

  /**
   * Creates a kite instance.
   * @constructor
   * @param {number} sideA - The length of one pair of equal sides.
   * @param {number} sideB - The length of the other pair of equal sides.
   * @param {number} diagonal1 - The length of the first diagonal.
   * @param {number} diagonal2 - The length of the second diagonal.
   * @throws {Error} Will throw an error if any dimension is invalid.
   */
  constructor(sideA, sideB, diagonal1, diagonal2) {
    this.#validateDimension(sideA, 'sideA')
    this.#validateDimension(sideB, 'sideB')
    this.#validateDimension(diagonal1, 'diagonal1')
    this.#validateDimension(diagonal2, 'diagonal2')

    this.#sideA = sideA
    this.#sideB = sideB
    this.#diagonal1 = diagonal1
    this.#diagonal2 = diagonal2
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
   * Calculates the area of the kite.
   * @public
   * @returns {number} The area of the kite.
   */
  area() {
    return (this.#diagonal1 * this.#diagonal2) / 2
  }

  /**
   * Calculates the perimeter of the kite.
   * @public
   * @returns {number} The perimeter of the kite.
   */
  perimeter() {
    return 2 * (this.#sideA + this.#sideB)
  }

  /**
   * Returns a string representation of the kite.
   * @public
   * @returns {string} A string describing the kite's dimensions and area/perimeter.
   */
  toString() {
    return (
      `Kite: sideA = ${this.#sideA}, sideB = ${this.#sideB}, ` +
      `diagonal1 = ${this.#diagonal1}, diagonal2 = ${this.#diagonal2}, ` +
      `area = ${this.area()}, perimeter = ${this.perimeter()}`
    )
  }

  /**
   * Gets the length of side A of the kite.
   * @public
   * @returns {number} The length of side A.
   */
  get sideA() {
    return this.#sideA
  }

  /**
   * Gets the length of side B of the kite.
   * @public
   * @returns {number} The length of side B.
   */
  get sideB() {
    return this.#sideB
  }

  /**
   * Gets the length of diagonal 1 of the kite.
   * @public
   * @returns {number} The length of diagonal 1.
   */
  get diagonal1() {
    return this.#diagonal1
  }

  /**
   * Gets the length of diagonal 2 of the kite.
   * @public
   * @returns {number} The length of diagonal 2.
   */
  get diagonal2() {
    return this.#diagonal2
  }
}
