/**
 * This class represents a rectangle and can calculate it's perimeter,area,diagonal's length
 * and check whether it is square or not.
 * https://en.wikipedia.org/wiki/Rectangle
 * @constructor
 * @param {number} length - The length of the rectangle.
 * @param {number} width  - The width  of the rectangle.
 */

export default class Rectangle {
  constructor (length, width) {
    this.length = length
    this.width = width
  }

  perimeter = () => {
    return 2 * (this.length + this.width)
  }

  area = () => {
    return this.length * this.width
  }

  diagonalLength = () => {
    return Math.sqrt(Math.pow(this.length, 2) + Math.pow(this.width, 2))
  }

  isSquare = () => {
    return this.length === this.width
  }
}
