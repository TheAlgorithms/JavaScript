/**
 * Represents a Rectangle with specified length and width.
 */
export default class Rectangle {
  /**
   * Create a new Rectangle instance.
   *
   * @param {number} length - The length of the rectangle.
   * @param {number} width - The width of the rectangle.
   * @throws {Error} If length or width is less than or equal to 0.
   */
  constructor(length, width) {
    this.length = length
    this.width = width
  }

  /**
   * Calculate the perimeter of the rectangle.
   *
   * @returns {number} The perimeter of the rectangle.
   * @throws {Error} If length or width is less than or equal to 0.
   */
  calculatePerimeter() {
    if (this.length <= 0 || this.width <= 0) {
      throw new Error("Invalid input. Length and width must be greater than 0.")
    }
    return 2 * (this.length + this.width)
  }

  /**
   * Calculate the area of the rectangle.
   *
   * @returns {number} The area of the rectangle.
   * @throws {Error} If length or width is less than or equal to 0.
   */
  calculateArea() {
    if (this.length <= 0 || this.width <= 0) {
      throw new Error("Invalid input. Length and width must be greater than 0.")
    }
    return this.length * this.width
  }
}
