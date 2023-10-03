import { convexHull } from '../ConvexHullGraham'

test('The ConvexHull of the following points is [{x: 0, y: 3}, {x: 4, y: 4}, {x: 3, y: 1}, {x: 0, y: 0}]', () => {
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
  const res = convexHull(points)
  expect(res).toEqual([
    { x: 0, y: 3 },
    { x: 4, y: 4 },
    { x: 3, y: 1 },
    { x: 0, y: 0 }
  ])
})

test('The ConvexHull of the following points is [{x: 1, y: 4}, {x: 9, y: 6}, {x: 7, y: 0}, {x: 0, y: 0}]', () => {
  const points = [
    { x: 4, y: 3 },
    { x: 1, y: 4 },
    { x: 2, y: 4 },
    { x: 0, y: 0 },
    { x: 9, y: 6 },
    { x: 1, y: 3 },
    { x: 4, y: 1 },
    { x: 7, y: 0 }
  ]
  const res = convexHull(points)
  expect(res).toEqual([
    { x: 1, y: 4 },
    { x: 9, y: 6 },
    { x: 7, y: 0 },
    { x: 0, y: 0 }
  ])
})
