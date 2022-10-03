/**
 * @function degreesToRadians
 * @description convert from degrees to radians
 * @param {Integer} angle in degrees
 * @return {Integer} degrees * pi / 180
 * @see https://en.wikipedia.org/wiki/Degree_(angle)
 * @example degreesToRadians(45) = 0.7853981633974483
 */
function degreesToRadians (degrees) {
  return degrees * Math.PI / 180
}

/**
   * @function circularArcLength
   * @description calculate the length of a circular arc
   * @param {Integer} radius
   * @param {Integer} degrees
   * @returns {Integer} radius * angle_in _adians
   * @see https://en.wikipedia.org/wiki/Circular_arc
   * @example circularArcLength(3, 45) = 2.356194490192345
   */
function circularArcLength (radius, degrees) {
  return radius * degreesToRadians(degrees)
}
/**
   * @function circularArcArea
   * @description calculate the area of the sector formed by an arc
   * @param {Integer} radius
   * @param {Integer} degrees
   * @returns {Integer} 0.5 * r * r * angle_in_radians
   * @see https://en.wikipedia.org/wiki/Circular_arc
   * @example circularArcArea(3,45) = 3.5342917352885173
   */
function circularArcArea (radius, degrees) {
  return Math.pow(radius, 2) * degreesToRadians(degrees) / 2
}

export {
  circularArcLength,
  circularArcArea
}
