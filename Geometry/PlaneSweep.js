/**
 * This class implements a Line Segment Intersection algorithm using the Plane Sweep technique.
 * It detects intersections between a set of line segments in a 2D plane.
 * @see {@link https://en.wikipedia.org/wiki/Sweep_line_algorithm}
 * @class
 */
export default class PlaneSweep {
  /** @private */
  #segments

  /** @private */
  #events

  /** @private */
  #activeSet

  /**
   * Creates a Line Segment Intersection instance.
   * @constructor
   * @param {Array<{start: {x: number, y: number}, end: {x: number, y: number}}> } segments - An array of line segments defined by start and end points.
   * @throws {Error} Will throw an error if the segments array is empty or invalid.
   */
  constructor(segments) {
    this.#validateSegments(segments)

    this.#segments = segments
    this.#events = []
    this.#activeSet = new Set()
    this.#initializeEvents()
  }

  /**
   * Validates that the input is a non-empty array of segments.
   * @private
   * @param {Array} segments - The array of line segments to validate.
   * @throws {Error} Will throw an error if the input is not a valid array of segments.
   */
  #validateSegments(segments) {
    if (
      !Array.isArray(segments) ||
      segments.length === 0 ||
      !segments.every((seg) => seg.start && seg.end)
    ) {
      throw new Error(
        'segments must be a non-empty array of objects with both start and end properties.'
      )
    }
  }

  /**
   * Initializes the event points for the sweep line algorithm.
   * @private
   */
  #initializeEvents() {
    for (const segment of this.#segments) {
      const startEvent = { point: segment.start, type: 'start', segment }
      const endEvent = { point: segment.end, type: 'end', segment }

      // Ensure start is always before end in terms of x-coordinates
      if (
        startEvent.point.x > endEvent.point.x ||
        (startEvent.point.x === endEvent.point.x &&
          startEvent.point.y > endEvent.point.y)
      ) {
        this.#events.push(endEvent)
        this.#events.push(startEvent)
      } else {
        this.#events.push(startEvent)
        this.#events.push(endEvent)
      }
    }

    // Sort events by x-coordinate, then by type (start before end)
    this.#events.sort((a, b) => {
      if (a.point.x === b.point.x) {
        return a.type === 'start' ? -1 : 1
      }
      return a.point.x - b.point.x
    })
  }

  /**
   * Checks if two line segments intersect.
   * @private
   * @param {{start: {x: number, y: number}, end: {x: number, y: number}}} seg1 - The first segment.
   * @param {{start: {x: number, y: number}, end: {x: number, y: number}}} seg2 - The second segment.
   * @returns {boolean} True if the segments intersect, otherwise false.
   */
  #doSegmentsIntersect(seg1, seg2) {
    const ccw = (A, B, C) =>
      (C.y - A.y) * (B.x - A.x) > (B.y - A.y) * (C.x - A.x)
    return (
      ccw(seg1.start, seg2.start, seg2.end) !==
        ccw(seg1.end, seg2.start, seg2.end) &&
      ccw(seg1.start, seg1.end, seg2.start) !==
        ccw(seg1.start, seg1.end, seg2.end)
    )
  }

  /**
   * Executes the Plane Sweep algorithm to find all intersections.
   * @public
   * @returns {Array<{segment1: *, segment2: *}>} An array of intersecting segment pairs.
   */
  findIntersections() {
    const intersections = []

    for (const event of this.#events) {
      const { type, segment } = event

      if (type === 'start') {
        this.#activeSet.add(segment)

        // Check for intersections with neighboring active segments
        const neighbors = Array.from(this.#activeSet).filter(
          (seg) => seg !== segment
        )
        for (const neighbor of neighbors) {
          if (this.#doSegmentsIntersect(neighbor, segment)) {
            intersections.push({ segment1: neighbor, segment2: segment })
          }
        }
      } else if (type === 'end') {
        // Remove the segment from the active set
        this.#activeSet.delete(segment)
      }
    }

    return intersections
  }
}
