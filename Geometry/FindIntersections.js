/**
 * @typedef {Object} Point
 * @property {number} x - The x-coordinate of the point.
 * @property {number} y - The y-coordinate of the point.
 */

/**
 * @typedef {Object} Segment
 * @property {Point} start - The start point of the segment.
 * @property {Point} end - The end point of the segment.
 */

/**
 * @typedef {Object} Event
 * @property {Point} point - The point where the event occurs.
 * @property {Array<string>} types - Types of the event ('left', 'right', or 'intersection').
 * @property {Array<Segment>} segments - Segments associated with this event.
 */

/**
 * @typedef {Object} Intersection
 * @property {Segment} segment1 - First segment of the intersection.
 * @property {Segment} segment2 - Second segment of the intersection.
 * @property {Point} point - The point of intersection.
 */

/**
 * Creates a new point.
 * @param {number} x - The x-coordinate.
 * @param {number} y - The y-coordinate.
 * @returns {Point} The created point.
 */
export const createPoint = (x, y) => ({ x, y })

/**
 * Creates a new event.
 * @param {Point} point - The point where the event occurs.
 * @param {Array<string>} types - Types of the event.
 * @param {Array<Segment>} segments - Segments associated with this event.
 * @returns {Event} The created event.
 */
export const createEvent = (point, types, segments) => ({
  point,
  types,
  segments
})

/**
 * Compares two points lexicographically.
 * @param {Point} a - The first point.
 * @param {Point} b - The second point.
 * @returns {number} Negative if a < b, positive if a > b, zero if equal.
 */
export const comparePoints = (a, b) => {
  if (a.x !== b.x) return a.x - b.x
  return a.y - b.y
}

/**
 * Compares two segments based on their y-coordinate at the current x-coordinate of the sweep line.
 * @param {Segment} a - The first segment.
 * @param {Segment} b - The second segment.
 * @returns {number} Negative if a < b, positive if a > b, zero if equal.
 */
export const compareSegmentsY = (a, b) => a.start.y - b.start.y

/**
 * Calculates the intersection point of two line segments.
 * @param {Segment} seg1 - First segment.
 * @param {Segment} seg2 - Second segment.
 * @returns {Point|null} The intersection point, or null if segments are parallel.
 */
export const calculateIntersectionPoint = (seg1, seg2) => {
  const x1 = seg1.start.x,
    y1 = seg1.start.y
  const x2 = seg1.end.x,
    y2 = seg1.end.y
  const x3 = seg2.start.x,
    y3 = seg2.start.y
  const x4 = seg2.end.x,
    y4 = seg2.end.y

  const denom = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4)
  if (Math.abs(denom) < Number.EPSILON) return null // parallel lines

  const x =
    ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denom
  const y =
    ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denom

  return createPoint(x, y)
}

/**
 * Handles potential intersection between two segments.
 * @param {Segment} seg1 - First segment.
 * @param {Segment} seg2 - Second segment.
 * @param {Array<Event>} events - Array of events to update.
 * @param {Array<Intersection>} intersections - Array of intersections to update.
 */
export const handlePotentialIntersection = (
  seg1,
  seg2,
  events,
  intersections
) => {
  const intersectionPoint = calculateIntersectionPoint(seg1, seg2)
  if (intersectionPoint) {
    events.push(createEvent(intersectionPoint, ['intersection'], [seg1, seg2]))
    intersections.push({
      segment1: seg1,
      segment2: seg2,
      point: intersectionPoint
    })
  }
}

/**
 * Finds all intersections among a set of line segments using the Bentley-Ottmann algorithm.
 * @param {Array<Segment>} segments - Array of line segments to check for intersections.
 * @returns {Array<Intersection>} Array of all intersections found.
 */
const findIntersections = (segments) => {
  const events = []
  const intersections = []
  let sweepLineStatus = []

  // Create initial events
  segments.forEach((segment) => {
    events.push(createEvent(segment.start, ['left'], [segment]))
    events.push(createEvent(segment.end, ['right'], [segment]))
  })

  // Sort events
  events.sort((a, b) => {
    const pointCompare = comparePoints(a.point, b.point)
    if (pointCompare !== 0) return pointCompare

    // If points are the same, prioritize: intersection > left > right
    const typePriority = { intersection: 0, left: 1, right: 2 }
    return (
      Math.min(...a.types.map((t) => typePriority[t])) -
      Math.min(...b.types.map((t) => typePriority[t]))
    )
  })

  // Process events
  events.forEach((event) => {
    if (event.types.includes('left')) {
      event.segments.forEach((segment) => {
        sweepLineStatus.push(segment)
        sweepLineStatus.sort(compareSegmentsY)
        const index = sweepLineStatus.indexOf(segment)
        const lower = index > 0 ? sweepLineStatus[index - 1] : null
        const upper =
          index < sweepLineStatus.length - 1 ? sweepLineStatus[index + 1] : null
        if (lower)
          handlePotentialIntersection(segment, lower, events, intersections)
        if (upper)
          handlePotentialIntersection(segment, upper, events, intersections)
      })
    }

    if (event.types.includes('right')) {
      event.segments.forEach((segment) => {
        const index = sweepLineStatus.indexOf(segment)
        const lower = index > 0 ? sweepLineStatus[index - 1] : null
        const upper =
          index < sweepLineStatus.length - 1 ? sweepLineStatus[index + 1] : null
        sweepLineStatus = sweepLineStatus.filter((s) => s !== segment)
        if (lower && upper)
          handlePotentialIntersection(lower, upper, events, intersections)
      })
    }

    if (event.types.includes('intersection')) {
      // Re-check all pairs of segments at this x-coordinate for intersections
      const segmentsAtX = sweepLineStatus.filter(
        (s) =>
          Math.min(s.start.x, s.end.x) <= event.point.x &&
          Math.max(s.start.x, s.end.x) >= event.point.x
      )
      for (let i = 0; i < segmentsAtX.length; i++) {
        for (let j = i + 1; j < segmentsAtX.length; j++) {
          handlePotentialIntersection(
            segmentsAtX[i],
            segmentsAtX[j],
            events,
            intersections
          )
        }
      }
    }
  })

  return intersections
}

export default findIntersections
