/**
 * Author: Arnab Ray
 * ConvexHull using Graham Scan
 * Wikipedia: https://en.wikipedia.org/wiki/Graham_scan
 * Given a set of points in the plane. The Convex hull of the set is the smallest
 * convex polygon that contains all the points of it.
 */

/**
 * @function convexHull
 * @description Computes the convex hull of a set of points using the Monotone Chain algorithm (Andrew's variant of Graham Scan)
 * @param {Array<{x: number, y: number}>} points - Array of points with x and y coordinates
 * @return {Array<{x: number, y: number}>} Array of points forming the convex hull in counter-clockwise order
 * @throws {RangeError} If fewer than 3 points are provided
 * @see [Wikipedia](https://en.wikipedia.org/wiki/Graham_scan)
 * @see [Convex Hull](https://en.wikipedia.org/wiki/Convex_hull)
 * @example convexHull([{x: 0, y: 0}, {x: 1, y: 1}, {x: 2, y: 0}]) => [{x: 0, y: 0}, {x: 2, y: 0}, {x: 1, y: 1}]
 */

/**
 * @function compare
 * @description Comparator function to sort points lexicographically (first by x, then by y)
 * @param {{x: number, y: number}} a - First point
 * @param {{x: number, y: number}} b - Second point
 * @return {number} -1 if a < b, 1 if a > b, 0 if equal
 * @private
 */

function compare(a, b) {
  // Compare Function to Sort the points, a and b are points to compare
  if (a.x < b.x) return -1
  if (a.x > b.x) return 1
  if (a.y < b.y) return -1
  if (a.y > b.y) return 1
  return 0
}

/**
 * @function orientation
 * @description Determines the orientation of three points using cross product
 * @param {{x: number, y: number}} a - First point
 * @param {{x: number, y: number}} b - Second point
 * @param {{x: number, y: number}} c - Third point
 * @return {number} 0 if collinear, 1 if clockwise, -1 if counter-clockwise
 * @private
 */
function orientation(a, b, c) {
  // Check orientation of Line(a, b) and Line(b, c)
  const crossProduct = (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)

  if (crossProduct === 0) return 0
  return crossProduct > 0 ? 1 : -1
}

/**
 * @function convexHull
 * @description Main function implementing the Monotone Chain algorithm
 * @param {Array<{x: number, y: number}>} points - Input points
 * @return {Array<{x: number, y: number}>} Points forming the convex hull
 * @throws {RangeError} If fewer than 3 points provided
 */
function convexHull(points) {
  const pointsLen = points.length
  if (pointsLen < 3) {
    throw new RangeError(
      'Minimum of 3 points is required to form closed polygon!'
    )
  }

  const sortedPoints = [...points].sort(compare)

  // Build lower hull
  const lower = []
  for (const point of sortedPoints) {
    while (
      lower.length >= 2 &&
      orientation(lower[lower.length - 2], lower[lower.length - 1], point) !==
        -1
    ) {
      lower.pop()
    }
    lower.push(point)
  }

  // Build upper hull
  const upper = []
  for (let i = sortedPoints.length - 1; i >= 0; i--) {
    const point = sortedPoints[i]
    while (
      upper.length >= 2 &&
      orientation(upper[upper.length - 2], upper[upper.length - 1], point) !==
        -1
    ) {
      upper.pop()
    }
    upper.push(point)
  }

  // Remove duplicate last points and concatenate
  lower.pop()
  upper.pop()

  return lower.concat(upper)
}

export { convexHull }

// Example

// const points = [
//   { x: 0, y: 3 },
//   { x: 1, y: 1 },
//   { x: 2, y: 2 },
//   { x: 4, y: 4 },
//   { x: 0, y: 0 },
//   { x: 1, y: 2 },
//   { x: 3, y: 1 },
//   { x: 3, y: 3 }]

// convexHull(points)
