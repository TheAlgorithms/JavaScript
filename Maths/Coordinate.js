/*
 Calculate the mathematical properties involving coordinates
 Calculate the Distance Between 2 Points on a 2 Dimensional Plane
 Example: coorDistance(2,2,14,11) will return 15
 Wikipedia reference: https://en.wikipedia.org/wiki/Geographical_distance#Flat-surface_formulae
*/
/**
 * @param {number} longitude1 - The longitude of the first point.
 * @param {number} latitude1 - The latitude of the first point.
 * @param {number} longitude2 - The longitude of the second point.
 * @param {number} latitude2 - The latitude of the second point.
 * @returns {number} - The Euclidean distance between the two points.
 */
const euclideanDistance = (longitude1, latitude1, longitude2, latitude2) => {
  const width = longitude2 - longitude1
  const height = latitude2 - latitude1
  return Math.sqrt(width * width + height * height)
}
/*
 * @param {number} longitude1 - The longitude of the first point.
 * @param {number} latitude1 - The latitude of the first point.
 * @param {number} longitude2 - The longitude of the second point.
 * @param {number} latitude2 - The latitude of the second point.
 * @returns {number} - The Manhattan distance between the two points.
 */
const manhattanDistance = (longitude1, latitude1, longitude2, latitude2) => {
  const width = Math.abs(longitude2 - longitude1)
  const height = Math.abs(latitude2 - latitude1)
  return width + height
}

export { euclideanDistance, manhattanDistance }
