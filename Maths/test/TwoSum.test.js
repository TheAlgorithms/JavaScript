import { TwoSum } from '../TwoSum.js'

describe('Two Sum', () => {
  it('Should find the indices of two numbers that add up to the target', () => {
    expect(TwoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(TwoSum([15, 2, 11, 7], 13)).toEqual([1, 2])
    expect(TwoSum([2, 7, 11, 15], 17)).toEqual([0, 3])
    expect(TwoSum([7, 15, 11, 2], 18)).toEqual([0, 2])
    expect(TwoSum([2, 7, 11, 15], 26)).toEqual([2, 3])
    expect(TwoSum([2, 7, 11, 15], 8)).toEqual([])
    expect(
      TwoSum(
        [...Array(10).keys()].map((i) => 3 * i),
        19
      )
    ).toEqual([])
  })
})
