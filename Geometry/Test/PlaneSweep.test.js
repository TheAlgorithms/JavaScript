import PlaneSweep from '../PlaneSweep'

describe('PlaneSweep', () => {
  describe('Constructor', () => {
    test('creates an instance with valid segments', () => {
      const segments = [
        { start: { x: 1, y: 1 }, end: { x: 4, y: 4 } },
        { start: { x: 1, y: 4 }, end: { x: 4, y: 1 } }
      ]
      const intersection = new PlaneSweep(segments)
      expect(intersection).toBeInstanceOf(PlaneSweep)
    })

    test('throws an error if segments array is invalid', () => {
      expect(() => new PlaneSweep([])).toThrow(
        'segments must be a non-empty array of objects with both start and end properties.'
      )
      expect(() => new PlaneSweep([{ start: { x: 0, y: 0 } }])).toThrow(
        'segments must be a non-empty array of objects with both start and end properties.'
      )
    })
  })

  describe('Intersection Detection', () => {
    test('detects intersections correctly', () => {
      const segments = [
        { start: { x: 1, y: 1 }, end: { x: 4, y: 4 } },
        { start: { x: 1, y: 4 }, end: { x: 4, y: 1 } },
        { start: { x: 5, y: 5 }, end: { x: 6, y: 6 } }
      ]
      const intersection = new PlaneSweep(segments)
      const result = intersection.findIntersections()

      // Check if there is one intersection found
      expect(result).toHaveLength(1) // Ensure there's one intersection

      const intersectingPair = result[0]

      // Check that both segments in the intersection are part of the original segments
      const segment1 = intersectingPair.segment1
      const segment2 = intersectingPair.segment2

      const isSegment1Valid =
        (segment1.start.x === segments[0].start.x &&
          segment1.start.y === segments[0].start.y &&
          segment1.end.x === segments[0].end.x &&
          segment1.end.y === segments[0].end.y) ||
        (segment1.start.x === segments[1].start.x &&
          segment1.start.y === segments[1].start.y &&
          segment1.end.x === segments[1].end.x &&
          segment1.end.y === segments[1].end.y)

      const isSegment2Valid =
        (segment2.start.x === segments[0].start.x &&
          segment2.start.y === segments[0].start.y &&
          segment2.end.x === segments[0].end.x &&
          segment2.end.y === segments[0].end.y) ||
        (segment2.start.x === segments[1].start.x &&
          segment2.start.y === segments[1].start.y &&
          segment2.end.x === segments[1].end.x &&
          segment2.end.y === segments[1].end.y)

      expect(isSegment1Valid).toBe(true)
      expect(isSegment2Valid).toBe(true)
    })

    test('returns an empty array if there are no intersections', () => {
      const segments = [
        { start: { x: 1, y: 1 }, end: { x: 2, y: 2 } },
        { start: { x: 3, y: 3 }, end: { x: 4, y: 4 } }
      ]
      const intersection = new PlaneSweep(segments)
      const result = intersection.findIntersections()
      expect(result).toEqual([])
    })

    test('handles vertical and horizontal lines', () => {
      const segments = [
        { start: { x: 2, y: 0 }, end: { x: 2, y: 3 } }, // Vertical line
        { start: { x: 0, y: 2 }, end: { x: 3, y: 2 } } // Horizontal line
      ]
      const intersection = new PlaneSweep(segments)
      const result = intersection.findIntersections()

      // Check if intersection contains the correct segments regardless of order
      expect(result).toHaveLength(1) // Ensure there's one intersection

      const intersectingPair = result[0]

      // Check that both segments in the intersection are part of the original segments
      const isSegment1Valid =
        (intersectingPair.segment1.start.x === segments[0].start.x &&
          intersectingPair.segment1.start.y === segments[0].start.y &&
          intersectingPair.segment1.end.x === segments[0].end.x &&
          intersectingPair.segment1.end.y === segments[0].end.y) ||
        (intersectingPair.segment1.start.x === segments[1].start.x &&
          intersectingPair.segment1.start.y === segments[1].start.y &&
          intersectingPair.segment1.end.x === segments[1].end.x &&
          intersectingPair.segment1.end.y === segments[1].end.y)

      const isSegment2Valid =
        (intersectingPair.segment2.start.x === segments[0].start.x &&
          intersectingPair.segment2.start.y === segments[0].start.y &&
          intersectingPair.segment2.end.x === segments[0].end.x &&
          intersectingPair.segment2.end.y === segments[0].end.y) ||
        (intersectingPair.segment2.start.x === segments[1].start.x &&
          intersectingPair.segment2.start.y === segments[1].start.y &&
          intersectingPair.segment2.end.x === segments[1].end.x &&
          intersectingPair.segment2.end.y === segments[1].end.y)

      expect(isSegment1Valid).toBe(true)
      expect(isSegment2Valid).toBe(true)
    })
  })
})
