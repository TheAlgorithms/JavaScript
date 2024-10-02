/**
 * This class implements the Closest Pair of Points algorithm using a divide-and-conquer approach.
 * @see {@link https://en.wikipedia.org/wiki/Closest_pair_of_points_problem}
 * @class
 */
export default class ClosestPair {
  /** @private */
  #points

  /**
   * Creates a Closest Pair instance.
   * @constructor
   * @param {Array<{x: number, y: number}>} points - An array of points represented as objects with x and y coordinates.
   * @throws {Error} Will throw an error if the points array is empty or invalid.
   */
  constructor(points) {
    this.#validatePoints(points)
    this.#points = points
  }

  /**
   * Validates that the input is a non-empty array of points.
   * @private
   * @param {Array} points - The array of points to validate.
   * @throws {Error} Will throw an error if the input is not a valid array of points.
   */
  #validatePoints(points) {
    if (
      !Array.isArray(points) ||
      points.length === 0 ||
      points.some((p) => isNaN(p.x) || isNaN(p.y)) ||
      !points.every((p) => typeof p.x === 'number' && typeof p.y === 'number')
    ) {
      throw new Error(
        'points must be a non-empty array of objects with x and y properties.'
      )
    }
  }

  /**
   * Calculates the distance between two points.
   * @private
   * @param {{x: number, y: number}} p1 - The first point.
   * @param {{x: number, y: number}} p2 - The second point.
   * @returns {number} The distance between the two points.
   */
  #distance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
  }

  /**
   * Finds the closest pair of points in a small set (3 or fewer).
   * @private
   * @param {Array<{x: number, y: number}>} points - An array of points with size <= 3.
   * @returns {{pair: Array<{x: number, y: number}>, distance: number}} The closest pair and their distance.
   */
  #bruteForceClosestPair(points) {
    let minDist = Infinity
    let pair = []

    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const dist = this.#distance(points[i], points[j])
        if (dist < minDist) {
          minDist = dist
          pair = [points[i], points[j]]
        }
      }
    }
    return { pair, distance: minDist }
  }

  /**
   * Finds the closest pair of points using divide-and-conquer.
   * @private
   * @param {Array<{x: number, y: number}>} points - An array of points sorted by x-coordinate.
   * @returns {{pair: Array<{x: number, y: number}>, distance: number}} The closest pair and their distance.
   */
  #closestPair(points) {
    const n = points.length

    if (n <= 3) {
      return this.#bruteForceClosestPair(points)
    }

    const mid = Math.floor(n / 2)
    const midPoint = points[mid]

    // Recursive calls for left and right halves
    const leftResult = this.#closestPair(points.slice(0, mid))
    const rightResult = this.#closestPair(points.slice(mid))

    // Find the overall closest pair
    let minResult =
      leftResult.distance < rightResult.distance ? leftResult : rightResult

    // Create an array for strip points within min distance from midPoint
    const strip = this.#getStripPoints(points, midPoint, minResult.distance)

    // Check strip for closer pairs
    const stripResult = this.#stripClosestPair(strip, minResult.distance)

    return stripResult.distance < minResult.distance ? stripResult : minResult
  }

  /**
   * Gets the strip of points within a certain distance from a midpoint.
   * @private
   * @param {Array<{x: number, y: number}>} points - An array of sorted points.
   * @param {{x: number, y: number}} midPoint - The midpoint used for filtering.
   * @param {number} minDistance - The minimum distance to filter by.
   * @returns {Array<{x: number, y: number}>} The filtered strip of points.
   */
  #getStripPoints(points, midPoint, minDistance) {
    return points.filter(
      (point) => Math.abs(point.x - midPoint.x) < minDistance
    )
  }

  /**
   * Finds the closest pair in a strip of points sorted by y-coordinate.
   * @private
   * @param {Array<{x: number, y: number}>} strip - An array of strip points sorted by y-coordinate.
   * @param {number} minDistance - The minimum distance to check against.
   * @returns {{pair: Array<{x: number, y: number}>, distance: number}} The closest pair and their distance from the strip.
   */
  #stripClosestPair(strip, minDistance) {
    let minDist = minDistance
    let pair = []

    // Sort by y-coordinate
    strip.sort((a, b) => a.y - b.y)

    for (let i = 0; i < strip.length; i++) {
      for (
        let j = i + 1;
        j < strip.length && strip[j].y - strip[i].y < minDist;
        j++
      ) {
        const dist = this.#distance(strip[i], strip[j])
        if (dist < minDist) {
          minDist = dist
          pair = [strip[i], strip[j]]
        }
      }
    }

    return { pair, distance: minDist }
  }

  /**
   * Finds the closest pair of points in the provided set.
   * @public
   * @returns {{pair: Array<{x: number, y: number}>, distance: number}} The closest pair and their distance.
   */
  findClosestPair() {
    const sortedPoints = this.#points.slice().sort((a, b) => a.x - b.x)
    return this.#closestPair(sortedPoints)
  }
}
