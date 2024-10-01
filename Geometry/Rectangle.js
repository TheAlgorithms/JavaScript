/**
 * This class represents a rectangle and can calculate its perimeter and area
 * https://en.wikipedia.org/wiki/Rectangle
 * @constructor
 * @param {number} length - The length of the rectangle.
 * @param {number} breadth - The breadth of the rectangle.
 */
export default class Rectangle {
  constructor(length, breadth) {
    this.length = length
    this.breadth = breadth
  }

  perimeter = () => {
    return 2 * (this.length + this.breadth)
  }

  area = () => {
    return this.length * this.breadth
  }
}
