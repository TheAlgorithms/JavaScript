import { circularArcLength, circularArcArea } from '../CircularArc'

describe('circularArcLength', () => {
  it('with natural number', () => {
    const arcLengthOfOneThirty = circularArcLength(1, 30)
    const arcLengthOfThreeSixty = circularArcLength(3, 60)
    expect(arcLengthOfOneThirty).toBe(0.5235987755982988)
    expect(arcLengthOfThreeSixty).toBe(3.141592653589793)
  })
})

describe('circularArcArea', () => {
  it('with natural number', () => {
    const arcAreaOfOneThirty = circularArcArea(1, 30)
    const arcAreaOfThreeSixty = circularArcArea(3, 60)
    expect(arcAreaOfOneThirty).toBe(0.2617993877991494)
    expect(arcAreaOfThreeSixty).toBe(4.71238898038469)
  })
})
