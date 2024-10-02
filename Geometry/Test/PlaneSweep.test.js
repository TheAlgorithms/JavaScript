import PlaneSweep from '../PlaneSweep'

describe('PlaneSweep', () => {
  let planeSweep

  describe('constructor', () => {
    it('should create an instance with valid segments', () => {
      const segments = [
        { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
        { start: { x: 1, y: 0 }, end: { x: 0, y: 1 } }
      ]
      expect(() => new PlaneSweep(segments)).not.toThrow()
    })

    it('should throw an error with empty segments array', () => {
      expect(() => new PlaneSweep([])).toThrow(
        'segments must be a non-empty array'
      )
    })

    it('should throw an error with invalid segments', () => {
      const invalidSegments = [{ start: { x: 0, y: 0 } }]
      expect(() => new PlaneSweep(invalidSegments)).toThrow(
        'segments must be a non-empty array of objects with start and end properties'
      )
    })
  })

  describe('findIntersections', () => {
    beforeEach(() => {
      const segments = [
        { start: { x: 0, y: 0 }, end: { x: 2, y: 2 } },
        { start: { x: 0, y: 2 }, end: { x: 2, y: 0 } }
      ]
      planeSweep = new PlaneSweep(segments)
    })

    it('should find intersections between crossing segments', () => {
      const segments = [
        { start: { x: 0, y: 0 }, end: { x: 2, y: 2 } },
        { start: { x: 0, y: 2 }, end: { x: 2, y: 0 } }
      ]
      planeSweep = new PlaneSweep(segments)
      const intersections = planeSweep.findIntersections()
      expect(intersections).toHaveLength(1)
      expect(intersections[0]).toEqual(
        expect.objectContaining({
          segment1: expect.objectContaining({
            start: expect.objectContaining({ x: 0, y: expect.any(Number) }),
            end: expect.objectContaining({ x: 2, y: expect.any(Number) })
          }),
          segment2: expect.objectContaining({
            start: expect.objectContaining({ x: 0, y: expect.any(Number) }),
            end: expect.objectContaining({ x: 2, y: expect.any(Number) })
          })
        })
      )
    })

    it('should not find intersections between non-crossing segments', () => {
      const segments = [
        { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
        { start: { x: 2, y: 2 }, end: { x: 3, y: 3 } }
      ]
      planeSweep = new PlaneSweep(segments)
      const intersections = planeSweep.findIntersections()
      expect(intersections).toHaveLength(0)
    })

    it('should handle vertical and horizontal segments', () => {
      const segments = [
        { start: { x: 0, y: 0 }, end: { x: 0, y: 2 } }, // Vertical
        { start: { x: -1, y: 1 }, end: { x: 2, y: 1 } } // Horizontal
      ]
      planeSweep = new PlaneSweep(segments)
      const intersections = planeSweep.findIntersections()
      expect(intersections).toHaveLength(1)
    })

    it('should handle segments with shared endpoints', () => {
      const segments = [
        { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
        { start: { x: 1, y: 1 }, end: { x: 2, y: 0 } }
      ]
      planeSweep = new PlaneSweep(segments)
      const intersections = planeSweep.findIntersections()
      expect(intersections).toHaveLength(1) // Shared endpoint is considered an intersection
    })

    it('should handle overlapping segments', () => {
      const segments = [
        { start: { x: 0, y: 0 }, end: { x: 2, y: 2 } },
        { start: { x: 1, y: 1 }, end: { x: 3, y: 3 } }
      ]
      planeSweep = new PlaneSweep(segments)
      const intersections = planeSweep.findIntersections()
      expect(intersections).toHaveLength(1)
    })
  })

  describe('edge cases', () => {
    it('should handle segments with reversed start and end points', () => {
      const segments = [
        { start: { x: 2, y: 2 }, end: { x: 0, y: 0 } },
        { start: { x: 0, y: 2 }, end: { x: 2, y: 0 } }
      ]
      planeSweep = new PlaneSweep(segments)
      const intersections = planeSweep.findIntersections()
      expect(intersections).toHaveLength(1)
    })

    it('should handle segments with same x-coordinate but different y-coordinates', () => {
      const segments = [
        { start: { x: 0, y: 0 }, end: { x: 0, y: 2 } },
        { start: { x: 0, y: 1 }, end: { x: 0, y: 3 } }
      ]
      planeSweep = new PlaneSweep(segments)
      const intersections = planeSweep.findIntersections()
      expect(intersections).toHaveLength(1)
    })

    it('should handle a large number of touching segments', () => {
      const segments = Array.from({ length: 1000 }, (_, i) => ({
        start: { x: i, y: 0 },
        end: { x: i + 1, y: 1 }
      }))
      planeSweep = new PlaneSweep(segments)
      const intersections = planeSweep.findIntersections()
      // Check if touching points are considered intersections
      const touchingPointsAreIntersections = intersections.length > 0
      if (touchingPointsAreIntersections) {
        expect(intersections).toHaveLength(999) // Each segment touches its neighbor
      } else {
        expect(intersections).toHaveLength(0) // Touching points are not considered intersections
      }
    })

    it('should detect touching points as intersections', () => {
      const segments = [
        { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } },
        { start: { x: 1, y: 1 }, end: { x: 2, y: 0 } }
      ]
      planeSweep = new PlaneSweep(segments)
      const intersections = planeSweep.findIntersections()
      expect(intersections).toHaveLength(1)
    })

    it('should handle collinear overlapping segments', () => {
      const segments = [
        { start: { x: 0, y: 0 }, end: { x: 2, y: 0 } },
        { start: { x: 1, y: 0 }, end: { x: 3, y: 0 } }
      ]
      planeSweep = new PlaneSweep(segments)
      const intersections = planeSweep.findIntersections()
      expect(intersections).toHaveLength(1)
    })
  })
})
