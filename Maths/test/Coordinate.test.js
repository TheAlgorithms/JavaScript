import * as coordinate from '../Coordinate'

describe('Testing distance2points calculations', () => {
  it('Should give a numeric output (distance between 2 points) with 4 numeric arguments', () => {
    const distance2points = coordinate.distance2points(2, 2, -10, -7)
    expect(distance2points).toBe(15)
  })
  it('Should not give any output given non-numeric argument', () => {
    const distance2points = coordinate.distance2points('ABC', '123', '', '###')
    expect(distance2points).toBeNaN()
  })
  it('Should not give any output given any number of numeric arguments less than 4', () => {
    const distance2points3arg = coordinate.distance2points(2, 2, -10)
    const distance2points2arg = coordinate.distance2points(2, 2)
    const distance2points1arg = coordinate.distance2points(2)
    const distance2points0arg = coordinate.distance2points()
    expect(distance2points3arg).toBeNaN()
    expect(distance2points2arg).toBeNaN()
    expect(distance2points1arg).toBeNaN()
    expect(distance2points0arg).toBeNaN()
  })
})
