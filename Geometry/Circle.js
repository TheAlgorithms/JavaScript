/**
 * This class represents a circle and can calculate it's perimeter and area
 * https://en.wikipedia.org/wiki/Circle
 * @constructor
 * @param {number} radius - The radius of the circle.
 */
export default class Circle {
  constructor(radius) {
    if (radius <= 0) {
      throw new RangeError('Radius should be a positive number')
    }
    this.radius = radius
  }
  // Formular to Calculate the perimeter of a circle
  perimeter = () => {
    return this.radius * 2 * Math.PI
  }

  // Formular to Calculate the area of a circle
  area = () => {
    return Math.pow(this.radius, 2) * Math.PI
  }

  // Formular to Calculate the diameter of a circle
  diameter = () => {
    return 2 * this.radius
  }
  // Function That Changes the value of the default radius
  changeRadius = (newRadius) => {
    if (newRadius <= 0) {
      throw new RangeError('New radius should be a positive number')
    }
    this.radius = newRadius
  }
  // Function That Calculates the length of an arc
  lengthOfArc = (angle) => {
    if (angle <= 0) {
      throw new RangeError('Angle should be a positive number')
    }
    return this.radius * angle
  }
}
