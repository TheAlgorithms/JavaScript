/**
 * This class represents a circle and can calculate it's perimeter and area
 * @constructor
 * @param {number} radius - The radius of the circule.
 */
export default class Circle {
  constructor (radius) {
    this.radius = radius
  }

  perimeter = () => {
    return this.radius * 2 * Math.PI
  }

  area = () => {
    return Math.pow(this.radius, 2) * Math.PI
  }
}
