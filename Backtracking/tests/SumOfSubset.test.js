import { sumOfSubset } from '../SumOfSubset'

describe('SumOfSubset', () => {
  it('should return the subsets that add up to the given number', () => {
    // W = [2, 5, 7, 8, 12, 16, 23, 40]
    // K = 25

    const subsets = sumOfSubset([2, 5, 7, 8, 12, 16, 23, 40], [], 0, 0, 25)

    expect(subsets).toEqual([
      [2, 7, 16],
      [2, 23],
      [5, 8, 12]
    ])
  })
})
