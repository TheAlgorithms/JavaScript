import { NumberOfSubsetSum } from '../NumberOfSubsetEqualToGivenSum'

describe('Testing NumberOfSubsetSum', () => {
  it.each([
    [[], 0, 1],
    [[], 1, 0],
    [[1], 2, 0],
    [[1, 2, 3, 4, 5], 0, 1],
    [[1, 1, 1, 1, 1], 5, 1],
    [[1, 1, 1, 1, 1], 4, 5],
    [[1, 2, 3, 3], 6, 3],
    [[10, 20, 30, 1], 31, 2],
    [[1, 1, 2, 2, 3, 1, 1], 4, 18]
  ])('check with %j and %i', (arr, sum, expected) => {
    expect(NumberOfSubsetSum(arr, sum)).toBe(expected)
  })

  it.each([
    [[1, 2], -1],
    [[0, 2], 2],
    [[1, -1], 0]
  ])('throws for %j and %i', (arr, sum) => {
    expect(() => NumberOfSubsetSum(arr, sum)).toThrowError()
  })
})
