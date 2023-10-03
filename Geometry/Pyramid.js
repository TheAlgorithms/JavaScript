/**
 * This class represents a regular pyramid and can calculate its volume and surface area
 * https://en.wikipedia.org/wiki/Pyramid_(geometry)
 * @constructor
 * @param {number} bsl - The side length of the base of the pyramid.
 * @param {number} height - The height of the pyramid
 */
export default class Pyramid {
  constructor(bsl, height) {
    this.bsl = bsl
    this.height = height
  }

  baseArea = () => {
    return Math.pow(this.bsl, 2)
  }

  volume = () => {
    return (this.baseArea() * this.height) / 3
  }

  surfaceArea = () => {
    return (
      this.baseArea() +
      ((this.bsl * 4) / 2) *
        Math.sqrt(Math.pow(this.bsl / 2, 2) + Math.pow(this.height, 2))
    )
  }
}
