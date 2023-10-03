import { meanSquaredError } from '../MeanSquareError'

describe('meanSquareError', () => {
  it('should throw an error on non-array arguments', () => {
    expect(() => meanSquaredError(1, 4)).toThrow('Argument must be an Array')
  })

  it('should throw an error on non equal length ', () => {
    const firstArr = [1, 2, 3, 4, 5]
    const secondArr = [1, 2, 3]
    expect(() => meanSquaredError(firstArr, secondArr)).toThrow(
      'The two lists must be of equal length'
    )
  })

  it('should return the mean square error of two equal length arrays', () => {
    const firstArr = [1, 2, 3, 4, 5]
    const secondArr = [1, 3, 5, 6, 7]
    expect(meanSquaredError(firstArr, secondArr)).toBe(2.6)
  })
})
