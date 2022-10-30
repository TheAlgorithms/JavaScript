import { circlePerimeter } from '../CirclePerimeter'

describe('CirclePerimeter', () => {
  it('should return circle perimeter given the radius', () => {
    const res = circlePerimeter(3)
    expect(res).toEqual(18.85)
  })
})
