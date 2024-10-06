import ClosestPair from '../ClosestPairOfPoints'

describe('ClosestPair', () => {
  describe('Constructor', () => {
    test('creates an instance with valid points', () => {
      const points = [
        { x: 1, y: 1 },
        { x: 2, y: 2 }
      ]
      const closestPair = new ClosestPair(points)
      expect(closestPair).toBeInstanceOf(ClosestPair)
    })

    test('throws an error if points array is invalid', () => {
      expect(() => new ClosestPair([])).toThrow(
        'points must be a non-empty array of objects with x and y properties.'
      )
      expect(() => new ClosestPair([{ x: 0 }])).toThrow(
        'points must be a non-empty array of objects with x and y properties.'
      )
      expect(() => new ClosestPair([{ x: NaN, y: NaN }])).toThrow(
        'points must be a non-empty array of objects with x and y properties.'
      )
    })
  })

  describe('Finding Closest Pair', () => {
    test('finds closest pair correctly', () => {
      const points = [
        { x: 0, y: 0 },
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: -1, y: -1 },
        { x: -3, y: -4 }
      ]
      const closestPair = new ClosestPair(points)
      const result = closestPair.findClosestPair()

      // Check that both points are part of the expected closest pair
      const expectedPoints = [
        { x: 0, y: 0 },
        { x: 1, y: 1 }
      ]

      expect(result.distance).toBeCloseTo(Math.sqrt(2)) // Distance between (0,0) and (1,1)
      expect(expectedPoints).toContainEqual(result.pair[0])
      expect(expectedPoints).toContainEqual(result.pair[1])
    })

    test('handles two points correctly', () => {
      const points = [
        { x: 3, y: 4 },
        { x: 5, y: 6 }
      ]
      const closestPair = new ClosestPair(points)
      const result = closestPair.findClosestPair()

      // Check that both points are part of the expected closest pair
      const expectedPoints = [
        { x: 3, y: 4 },
        { x: 5, y: 6 }
      ]

      expect(result.distance).toBeCloseTo(Math.sqrt(8)) // Distance between (3,4) and (5,6)
      expect(expectedPoints).toContainEqual(result.pair[0])
      expect(expectedPoints).toContainEqual(result.pair[1])
    })

    test('returns correct result with negative coordinates', () => {
      const points = [
        { x: -1, y: -1 },
        { x: -2, y: -2 },
        { x: -3, y: -3 },
        { x: -4, y: -4 }
      ]
      const closestPair = new ClosestPair(points)
      const result = closestPair.findClosestPair()

      // Check that both points are part of the expected closest pair
      const expectedPoints = [
        { x: -1, y: -1 },
        { x: -2, y: -2 }
      ]

      expect(result.distance).toBeCloseTo(Math.sqrt(2)) // Distance between (-1,-1) and (-2,-2)
      expect(expectedPoints).toContainEqual(result.pair[0])
      expect(expectedPoints).toContainEqual(result.pair[1])
    })

    test('returns correct result with identical coordinates', () => {
      const points = [
        { x: 0, y: 0 },
        { x: 0, y: 0 },
        { x: 0.5, y: 0.5 }
      ]
      const closestPair = new ClosestPair(points)
      const result = closestPair.findClosestPair()

      // Check that both points are identical
      expect(result.pair[0]).toEqual({ x: 0, y: 0 })
      expect(result.pair[1]).toEqual({ x: 0, y: 0 })
      expect(result.distance).toBe(0) // Distance between identical points is zero
    })

    test('handles large number of points correctly', () => {
      const points = []

      // Generate random points
      for (let i = 0; i < 100; i++) {
        points.push({ x: Math.random() * 100, y: Math.random() * 100 })
      }

      const closestPair = new ClosestPair(points)
      const result = closestPair.findClosestPair()

      // Check that the distance is a positive number
      expect(result.distance).toBeGreaterThan(0)
    })
  })
})
