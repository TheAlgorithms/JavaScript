/**
 * This class represents an Ellipse and provides methods to calculate its area and circumference.
 * @see {@link https://en.wikipedia.org/wiki/Ellipse}
 * @class
 */
export default class Ellipse {
  /** @private */
  #radiusX

  /** @private */
  #radiusY

  /**
   * Creates an ellipse instance.
   * @constructor
   * @param {number} radiusX - The radius along the x-axis.
   * @param {number} radiusY - The radius along the y-axis.
   * @throws {Error} Will throw an error if any dimension is invalid.
   */
  constructor(radiusX, radiusY) {
    this.#validateDimension(radiusX, 'radiusX')
    this.#validateDimension(radiusY, 'radiusY')

    this.#radiusX = radiusX
    this.#radiusY = radiusY
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
   * Calculates the area of the ellipse.
   * @public
   * @returns {number} The area of the ellipse.
   */
  area() {
    return Math.PI * this.#radiusX * this.#radiusY
  }

  /**
   * Calculates the circumference of the ellipse using Ramanujan's approximation.
   * @public
   * @returns {number} The circumference of the ellipse.
   */
  circumference() {
    return (
      Math.PI *
      (3 * (this.#radiusX + this.#radiusY) -
        Math.sqrt(
          (3 * this.#radiusX + this.#radiusY) *
            (this.#radiusX + 3 * this.#radiusY)
        ))
    )
  }

  /**
   * Returns a string representation of the ellipse.
   * @public
   * @returns {string} A string describing the ellipse's dimensions and area/circumference.
   */
  toString() {
    return (
      `Ellipse: radiusX = ${this.#radiusX}, radiusY = ${this.#radiusY}, ` +
      `area = ${this.area()}, circumference = ${this.circumference()}`
    )
  }

  /**
   * Gets the radius along the x-axis.
   * @public
   * @returns {number} The radius along the x-axis.
   */
  get radiusX() {
    return this.#radiusX
  }

  /**
   * Gets the radius along the y-axis.
   * @public
   * @returns {number} The radius along the y-axis.
   */
  get radiusY() {
    return this.#radiusY
  }
}
