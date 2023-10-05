/**
 * Calculates the distance between two points in 2D space.
 * https://en.wikipedia.org/wiki/Distance
 *
 * @param {number} x1 The x-coordinate of the first point.
 * @param {number} y1 The y-coordinate of the first point.
 * @param {number} x2 The x-coordinate of the second point.
 * @param {number} y2 The y-coordinate of the second point.
 * @returns {number} The distance between the two points, in pixels.
 *
 * @example
 * // Returns 14.142135623730951
 * distance(0, 0, 10, 10);
 *
 * // Returns 14.142135623730951
 * distance(10, 10, 20, 20);
 */

function getDistance(x1, y1, x2, y2) {
  // Calculate the difference in x and y coordinates.
  const a = x2 - x1
  const b = y2 - y1

  // Calculate the square root of the sum of the squares.
  const c = Math.sqrt(a * a + b * b)

  // Return the distance.
  return c
}

export { getDistance }
