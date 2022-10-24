import { TwoSum } from '../TwoSum'

describe('TwoSum tests', () => {
  it('check that a variety of inputs return the correct answer', () => {
    expect(TwoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(TwoSum([2, 7, 11, 15, 6], 8)).toEqual([0, 4])
    expect(TwoSum([1, 0, 5, 7, 3, 4], 6)).toEqual([0, 2])
    expect(TwoSum([0, 8, 3, 1, 2, 7, 3], 6)).toEqual([2, 6])
    expect(TwoSum([0, 5, 4, 2, 6, 7, 9, 1], 3)).toEqual([3, 7])
  })
})
