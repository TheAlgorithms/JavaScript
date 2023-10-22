import { squareRootLogarithmic } from '../SquareRootLogarithmic'

describe('SquareRootLogarithmic', () => {
  test('Finding the square root of a positive integer', () => {
    expect(squareRootLogarithmic(4)).toEqual(2)
    expect(squareRootLogarithmic(16)).toEqual(4)
    expect(squareRootLogarithmic(8)).toEqual(2)
  })
  test('Throwing an exception', () => {
    expect(() => squareRootLogarithmic('not a number')).toThrow()
    expect(() => squareRootLogarithmic(true)).toThrow()
  })
})
