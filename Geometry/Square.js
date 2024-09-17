/**
 * This class represent a square and can calculate its perimeter and its area
 * https://fr.wikipedia.org/wiki/Square
 * @constructor
 * @param {number} side - the length of a side of the square
 */
export default class Square {
  constructor(side) {
    this.side = side
  }

  perimeter = () => {
    return 4 * this.side
  }

  area = () => {
    return Math.pow(this.side, 2)
  }
}
