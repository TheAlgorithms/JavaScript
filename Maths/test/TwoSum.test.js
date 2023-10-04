import { TwoSum } from '../TwoSum.js'
describe('Two Sum', () => {
  const testCasesWithoutSolution = [
    [[8], 8],
    [[3, 3, 3, 3], 19]
  ]
  const testCasesWithSolution = [
    [[2, 7, 11, 15], 9, [0, 1]],
    [[15, 2, 11, 7], 13, [1, 2]],
    [[2, 7, 11, 15], 17, [0, 3]],
    [[7, 15, 11, 2], 18, [0, 2]],
    [[2, 7, 11, 15], 26, [2, 3]]
  ]

  test.each(testCasesWithoutSolution)(
    'Should return an empty array if there is no solution',
    (nums, target) => {
      expect(TwoSum(nums, target)).toEqual([])
    }
  )

  test.each(testCasesWithSolution)(
    'Should return the indices of two numbers that add up to the target',
    (nums, target, expected) => {
      expect(TwoSum(nums, target)).toEqual(expected)
    }
  )
})
