/**
 * This class represents a rectangle and provides methods to calculate its perimeter and area.
 * @see {@link https://en.wikipedia.org/wiki/Rectangle}
 */
export default class Rectangle {
  /** @private */
  #length

  /** @private */
  #breadth

  /**
   * Creates a new Rectangle instance.
   * @constructor
   * @param {number} length - The length of the rectangle.
   * @param {number} breadth - The breadth of the rectangle.
   * @throws {Error} Will throw an error if length or breadth is not a positive number.
   */
  constructor(length, breadth) {
    this.#validateDimension(length, 'length')
    this.#validateDimension(breadth, 'breadth')
    this.#length = length
    this.#breadth = breadth
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
   * Calculates the perimeter of the rectangle.
   * @public
   * @returns {number} The perimeter of the rectangle.
   */
  perimeter() {
    return 2 * (this.#length + this.#breadth)
  }

  /**
   * Calculates the area of the rectangle.
   * @public
   * @returns {number} The area of the rectangle.
   */
  area() {
    return this.#length * this.#breadth
  }

  /**
   * Gets the length of the rectangle.
   * @public
   * @returns {number} The length of the rectangle.
   */
  get length() {
    return this.#length
  }

  /**
   * Gets the breadth of the rectangle.
   * @public
   * @returns {number} The breadth of the rectangle.
   */
  get breadth() {
    return this.#breadth
  }

  /**
   * Returns a string representation of the rectangle.
   * @public
   * @returns {string} A string describing the rectangle.
   */
  toString() {
    return `Rectangle: length = ${this.#length}, breadth = ${
      this.#breadth
    }, area = ${this.area()}, perimeter = ${this.perimeter()}`
  }
}
