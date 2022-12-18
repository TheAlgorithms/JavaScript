/**
 * This class represents a circular cone and can calculate its volume and surface area
 * https://en.wikipedia.org/wiki/Cone
 * @constructor
 * @param {number} baseRadius - The radius of the base of the cone.
 * @param {number} height - The height of the cone
 */
export default class Cone {
  constructor (baseRadius, height) {
    this.baseRadius = baseRadius
    this.height = height
  }

  baseArea = () => {
    return Math.pow(this.baseRadius, 2) * Math.PI
  }

  volume = () => {
    return this.baseArea() * this.height * 1 / 3
  }

  surfaceArea = () => {
    return this.baseArea() + Math.PI * this.baseRadius * Math.sqrt(Math.pow(this.baseRadius, 2) + Math.pow(this.height, 2))
  }
}
