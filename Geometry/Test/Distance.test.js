import { getDistance } from '../Distance'

test('The distance between two points', () => {
  // Test case 1:
  const x1 = 0
  const y1 = 0
  const x2 = 10
  const y2 = 10
  const expectedDistance = 14.142135623730951

  const actualDistance = getDistance(x1, y1, x2, y2)

  expect(actualDistance).toBeCloseTo(expectedDistance)

  // Test case 2:
  const x3 = 10
  const y3 = 10
  const x4 = 20
  const y4 = 20
  const expectedDistance2 = 14.142135623730951

  const actualDistance2 = getDistance(x3, y3, x4, y4)

  expect(actualDistance2).toBeCloseTo(expectedDistance2)
})
