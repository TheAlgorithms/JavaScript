/**
 * Author: Arnab Ray
 * ConvexHull using Graham Scan
 * Wikipedia: https://en.wikipedia.org/wiki/Graham_scan
 * Given a set of points in the plane. The Convex hull of the set is the smallest convex polygon that contains all the points of it.
 */

function compare(firstPoint, secondPoint) {
  // Compare Function to Sort the points, a and b are points to compare
  if (firstPoint.x < secondPoint.x) return -1
  if (firstPoint.x === secondPoint.x && firstPoint.y < secondPoint.y) return -1
  return 1
}
function orientation(
  firstCoordinatePoint,
  secondCoordinatePoint,
  thirdCoordinatePoint
) {
  // Check orientation of Line(a,b) and Line(b,c)
  const alpha =
    (secondCoordinatePoint.y - firstCoordinatePoint.y) /
    (secondCoordinatePoint.x - firstCoordinatePoint.x)
  const beta =
    (thirdCoordinatePoint.y - secondCoordinatePoint.y) /
    (thirdCoordinatePoint.x - secondCoordinatePoint.x)
  // Clockwise
  if (alpha > beta) return 1
  // Anticlockwise
  else if (beta > alpha) return -1
  // Colinear
  return 0
}

function checkMinimumPoints(pointsLenght) {
  if (pointsLenght <= 2) {
    console.log('Minimum of 3 points is required to form closed polygon!')
  }
}

function convexHull(points) {
  const pointsLenght = points.length

  checkMinimumPoints(pointsLenght)

  points.sort(compare)

  const coordinateP1 = points[0]
  const coordinateP2 = points[pointsLenght - 1]

  // Divide Hull in two halfs
  const upperPoints = []
  const lowerPoints = []

  upperPoints.push(coordinateP1)
  lowerPoints.push(coordinateP1)

  for (let i = 1; i < pointsLenght; i++) {
    if (
      i === pointsLenght - 1 ||
      orientation(coordinateP1, points[i], coordinateP2) !== -1
    ) {
      let upperLenght = upperPoints.length

      while (
        upperLenght >= 2 &&
        orientation(
          upperPoints[upperLenght - 2],
          upperPoints[upperLenght - 1],
          points[i]
        ) === -1
      ) {
        upperPoints.pop()
        upperLenght = upperPoints.length
      }
      upperPoints.push(points[i])
    }
    if (
      i === pointsLenght - 1 ||
      orientation(coordinateP1, points[i], coordinateP2) !== 1
    ) {
      let lowerLenght = lowerPoints.length
      while (
        lowerLenght >= 2 &&
        orientation(
          lowerPoints[lowerLenght - 2],
          lowerPoints[lowerLenght - 1],
          points[i]
        ) === 1
      ) {
        lowerPoints.pop()
        lowerLenght = lowerPoints.length
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
  { x: 3, y: 3 }
]

convexHull(points)
