import { GetEuclidGCD } from '../GetEuclidGCD'

describe('GetEuclidGCD', () => {
  it.each([
    [5, 20, 5],
    [109, 902, 1],
    [290, 780, 10],
    [104, 156, 52],
    [0, 100, 100],
    [-5, 50, 5],
    [0, 0, 0],
    [1, 1234567, 1]
  ])('returns correct result for %i and %j', (inputA, inputB, expected) => {
    expect(GetEuclidGCD(inputA, inputB)).toBe(expected)
    expect(GetEuclidGCD(inputB, inputA)).toBe(expected)
  })

  it('should throw when any of the inputs is not a number', () => {
    expect(() => GetEuclidGCD('1', 2)).toThrowError()
    expect(() => GetEuclidGCD(1, '2')).toThrowError()
  })
})
