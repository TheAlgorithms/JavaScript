/**
 * Author: Arnab Ray
 * ConvexHull using Graham Scan
 * Wikipedia: https://en.wikipedia.org/wiki/Graham_scan
 * Given a set of points in the plane. The Convex hull of the set is the smallest convex polygon that contains all the points of it.
 */

function compare (a, b) {
  // Compare Function to Sort the points, a and b are points to compare
  if (a.x < b.x) return -1
  if (a.x === b.x && a.y < b.y) return -1
  return 1
}
function orientation (a, b, c) {
  // Check orientation of Line(a,b) and Line(b,c)
  const alpha = (b.y - a.y) / (b.x - a.x)
  const beta = (c.y - b.y) / (c.x - b.x)

  // Clockwise
  if (alpha > beta) return 1
  // Anticlockwise 
  else if (beta > alpha) return -1
  // Colinear
  return 0
}

function convexHull (points) {
  const pointsLen = points.length
  if (pointsLen <= 2) {
    console.log('Minimum of 3 points is required to form closed polygon!')
  }

  points.sort(compare)
  const p1 = points[0]; const p2 = points[pointsLen - 1]

  // Divide Hull in two halfs
  const upperPoints = []; const lowerPoints = []

  upperPoints.push(p1)
  lowerPoints.push(p1)

  for (let i = 1; i < pointsLen; i++) {
    if (i === pointsLen - 1 || orientation(p1, points[i], p2) !== -1) {
      let upLen = upperPoints.length

      while (upLen >= 2 && orientation(upperPoints[upLen - 2], upperPoints[upLen - 1], points[i]) === -1) {
        upperPoints.pop()
        upLen = upperPoints.length
      }
      upperPoints.push(points[i])
    }
    if (i === pointsLen - 1 || orientation(p1, points[i], p2) !== 1) {
      let lowLen = lowerPoints.length
      while (lowLen >= 2 && orientation(lowerPoints[lowLen - 2], lowerPoints[lowLen - 1], points[i]) === 1) {
        lowerPoints.pop()
        lowLen = lowerPoints.length
      }
      lowerPoints.push(points[i])
    }
  }
  const hull = []
  for (let i = 1; i < upperPoints.length - 1; i++) {
    hull.push(upperPoints[i])
  }
  for (let i = lowerPoints.length - 1; i >= 0; i--) {
    hull.push(lowerPoints[i])
  }
  console.log('The Convex Hull found is: \n')
  console.log(hull)
}

const points = [
  { x: 0, y: 3 },
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 4, y: 4 },
  { x: 0, y: 0 },
  { x: 1, y: 2 },
  { x: 3, y: 1 },
  { x: 3, y: 3 }]

convexHull(points);
