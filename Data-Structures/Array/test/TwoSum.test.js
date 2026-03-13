import { twoSum } from '../TwoSum'

describe('twoSum tests', () => {
  it('should return indices for a normal case', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    expect(twoSum(nums, target)).toEqual([0, 1])
  })

  it('should return indices when pair is in middle', () => {
    const nums = [1, 4, 6, 8, 5]
    const target = 11
    expect(twoSum(nums, target)).toEqual([2, 4])
  })

  it('should handle negative numbers', () => {
    const nums = [-3, 4, 3, 90]
    const target = 0
    expect(twoSum(nums, target)).toEqual([0, 2])
  })

  it('should return null if no pair found', () => {
    const nums = [1, 2, 3, 4]
    const target = 100
    expect(twoSum(nums, target)).toBeNull()
  })

  it('should work with duplicate numbers', () => {
    const nums = [3, 3]
    const target = 6
    expect(twoSum(nums, target)).toEqual([0, 1])
  })
})
