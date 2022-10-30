import { circleArea } from '../CircleArea'

describe('CircleArea', () => {
  it('should return the circle area given the radius', () => {
    const res = circleArea(3)
    expect(res).toEqual(28.27)
  })
})
