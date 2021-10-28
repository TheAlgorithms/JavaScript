import * as coordinate from '../Coordinate'

describe('Testing euclideanDistance calculations', () => {
  it('Should give a numeric output (distance between 2 points) with 4 numeric arguments', () => {
    const euclideanDistance = coordinate.euclideanDistance(2, 2, -10, -7)
    expect(euclideanDistance).toBe(15)
  })
  it('Should not give any output given non-numeric argument', () => {
    const euclideanDistance = coordinate.euclideanDistance('ABC', '123', '', '###')
    expect(euclideanDistance).toBeNaN()
  })
  it('Should not give any output given any number of numeric arguments less than 4', () => {
    const euclideanDistance3arg = coordinate.euclideanDistance(2, 2, -10)
    const euclideanDistance2arg = coordinate.euclideanDistance(2, 2)
    const euclideanDistance1arg = coordinate.euclideanDistance(2)
    const euclideanDistance0arg = coordinate.euclideanDistance()
    expect(euclideanDistance3arg).toBeNaN()
    expect(euclideanDistance2arg).toBeNaN()
    expect(euclideanDistance1arg).toBeNaN()
    expect(euclideanDistance0arg).toBeNaN()
  })
})

describe('Testing manhattanDistance calculations', () => {
  it('Should give a numeric output (distance between 2 points) with 4 numeric arguments', () => {
    const manhattanDistance = coordinate.manhattanDistance(2, 2, -10, -7)
    expect(manhattanDistance).toBe(21)
  })
  it('Should not give any output given non-numeric argument', () => {
    const manhattanDistance = coordinate.manhattanDistance('ABC', '123', '', '###')
    expect(manhattanDistance).toBeNaN()
  })
  it('Should not give any output given any number of numeric arguments less than 4', () => {
    const manhattanDistance3arg = coordinate.manhattanDistance(2, 2, -10)
    const manhattanDistance2arg = coordinate.manhattanDistance(2, 2)
    const manhattanDistance1arg = coordinate.manhattanDistance(2)
    const manhattanDistance0arg = coordinate.manhattanDistance()
    expect(manhattanDistance3arg).toBeNaN()
    expect(manhattanDistance2arg).toBeNaN()
    expect(manhattanDistance1arg).toBeNaN()
    expect(manhattanDistance0arg).toBeNaN()
  })
})
