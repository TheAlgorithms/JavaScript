import findIntersections, {
  createPoint,
  createEvent,
  comparePoints,
  compareSegmentsY,
  calculateIntersectionPoint,
  handlePotentialIntersection
} from '../FindIntersections'

describe('Geometry Functions', () => {
  describe('createPoint', () => {
    it('should create a point with given coordinates', () => {
      const point = createPoint(1, 2)
      expect(point).toEqual({ x: 1, y: 2 })
    })
  })

  describe('createEvent', () => {
    it('should create an event with the given parameters', () => {
      const point = createPoint(1, 2)
      const event = createEvent(point, ['left'], [])
      expect(event).toEqual({
        point,
        types: ['left'],
        segments: []
      })
    })
  })

  describe('comparePoints', () => {
    it('should return negative if first point is less than second', () => {
      const a = createPoint(1, 2)
      const b = createPoint(2, 3)
      expect(comparePoints(a, b)).toBeLessThan(0)
    })

    it('should return positive if first point is greater than second', () => {
      const a = createPoint(2, 3)
      const b = createPoint(1, 2)
      expect(comparePoints(a, b)).toBeGreaterThan(0)
    })

    it('should return zero if points are equal', () => {
      const a = createPoint(1, 2)
      const b = createPoint(1, 2)
      expect(comparePoints(a, b)).toBe(0)
    })
  })

  describe('compareSegmentsY', () => {
    it('should compare segments based on their start y-coordinates', () => {
      const seg1 = { start: { x: 0, y: 1 }, end: { x: 1, y: 1 } }
      const seg2 = { start: { x: 0, y: 2 }, end: { x: 1, y: 2 } }
      expect(compareSegmentsY(seg1, seg2)).toBe(-1)
    })

    it('should return zero if segments have the same start y-coordinate', () => {
      const seg1 = { start: { x: 0, y: 1 }, end: { x: 1, y: 1 } }
      const seg2 = { start: { x: -1, y: 1 }, end: { x: -2, y: 1 } }
      expect(compareSegmentsY(seg1, seg2)).toBe(0)
    })

    it('should return positive if first segment is greater than second', () => {
      const seg1 = { start: { x: 0, y: 3 }, end: { x: 1, y: 3 } }
      const seg2 = { start: { x: -1, y: 2 }, end: { x: -2, y: 2 } }
      expect(compareSegmentsY(seg1, seg2)).toBe(1)
    })
  })

  describe('calculateIntersectionPoint', () => {
    it('should return null for parallel segments', () => {
      const seg1 = { start: createPoint(0, 0), end: createPoint(5, 5) }
      const seg2 = { start: createPoint(0, 1), end: createPoint(5, 6) }
      expect(calculateIntersectionPoint(seg1, seg2)).toBeNull()
    })

    it('should return intersection point for intersecting segments', () => {
      const seg1 = { start: createPoint(0, 0), end: createPoint(5, 5) }
      const seg2 = { start: createPoint(0, 5), end: createPoint(5, 0) }
      const intersection = calculateIntersectionPoint(seg1, seg2)
      expect(intersection).toEqual(createPoint(2.5, 2.5))
    })

    it('should handle vertical and horizontal lines correctly', () => {
      const seg1 = { start: createPoint(0, -1), end: createPoint(0, 1) } // vertical line
      const seg2 = { start: createPoint(-1, 0), end: createPoint(1, 0) } // horizontal line
      const intersection = calculateIntersectionPoint(seg1, seg2)

      expect(intersection.x).toBeCloseTo(0) // Check for close proximity to zero
      expect(intersection.y).toBeCloseTo(0) // Check for close proximity to zero
    })

    it('should handle coincident segments correctly', () => {
      const seg1 = { start: createPoint(0, -1), end: createPoint(0, -3) }
      const seg2 = { start: createPoint(0, -3), end: createPoint(0, -4) }
      expect(calculateIntersectionPoint(seg1, seg2)).toBeNull() // should not intersect as they are collinear but not overlapping
    })

    it('should handle edge cases for intersection calculations', () => {
      const seg1 = { start: createPoint(-10, -10), end: createPoint(-10, -10) }
      const seg2 = { start: createPoint(-10, -10), end: createPoint(-10, -10) }

      const intersection = calculateIntersectionPoint(seg1, seg2)

      expect(intersection).toBeNull() // Expect null since they are coincident lines.
    })
  })

  describe('handlePotentialIntersection', () => {
    it('should push intersection event and intersection data when segments intersect', () => {
      const events = []
      const intersections = []
      const seg1 = { start: createPoint(0, 0), end: createPoint(5, 5) }
      const seg2 = { start: createPoint(0, 5), end: createPoint(5, -5) }

      handlePotentialIntersection(seg1, seg2, events, intersections)

      expect(events.length).toBeGreaterThan(0)
      expect(intersections.length).toBeGreaterThan(0)
    })

    it('should not push anything when segments do not intersect', () => {
      const events = []
      const intersections = []
      const seg1 = { start: createPoint(0, -10), end: createPoint(-10, -20) }
      const seg2 = { start: createPoint(-20, -30), end: createPoint(-30, -40) }

      handlePotentialIntersection(seg1, seg2, events, intersections)

      expect(events.length).toBe(0)
      expect(intersections.length).toBe(0)
    })
  })

  describe('findIntersections', () => {
    it('should find intersections among segments correctly', () => {
      const segments = [
        { start: createPoint(0, 0), end: createPoint(5, 5) },
        { start: createPoint(0, 5), end: createPoint(5, 0) },
        { start: createPoint(6, 6), end: createPoint(7, 7) }
      ]

      const result = findIntersections(segments)

      expect(result.length).toBeGreaterThanOrEqual(1) // There should be at least one intersection
    })

    it('should return an empty array when no intersections exist', () => {
      const segments = [
        { start: createPoint(10, 10), end: createPoint(20, 20) },
        { start: createPoint(30, 30), end: createPoint(40, 40) }
      ]

      const result = findIntersections(segments)

      expect(result).toEqual([]) // No intersections should be found
    })
  })
})
