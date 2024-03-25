import { GetEuclidGCD, GetEuclidGCDRecursive } from '../GetEuclidGCD'

describe.each([GetEuclidGCD, GetEuclidGCDRecursive])('%o', (gcdFunction) => {
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
    expect(gcdFunction(inputA, inputB)).toBe(expected)
    expect(gcdFunction(inputB, inputA)).toBe(expected)
  })

  it('should throw when any of the inputs is not a number', () => {
    expect(() => gcdFunction('1', 2)).toThrowError()
    expect(() => gcdFunction(1, '2')).toThrowError()
  })
})
