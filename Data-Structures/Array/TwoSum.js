/**
 * @function TwoSum
 * @see https://leetcode.com/problems/two-sum/
 * @description Given an array of integers, returns indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice. This is a basic brute force approach.
 * @param {Array} nums - array of integers.
 * @param {number} target - target integer.
 * @returns {Array} Array of the indices of the two numbers whose sum equals the target
 * @example Given nums = [2, 7, 11, 15], target = 9; return [0, 1] because nums[0] + nums[1] = 2 + 7 = 9
 * @complexity: O(n^2)
 */
const TwoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
export { TwoSum }
