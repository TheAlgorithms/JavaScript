/**
 * @function maxConsecutiveOnesIII
 * @description Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @see [Leetcode link](https://leetcode.com/problems/max-consecutive-ones-iii/)
 */
export const maxConsecutiveOnesIII = (nums, k) => {
  if (!nums.length) return 0

  let result = 0

  for (
    let slowPointer = 0, fastPointer = 0;
    fastPointer < nums.length;
    fastPointer++
  ) {
    if (nums[fastPointer] === 0) {
      k--
    }

    while (k < 0) {
      if (slowPointer === 0) {
        k++
      }
      slowPointer++
    }
    result = Math.max(result, fastPointer - slowPointer + 1)
  }
  return result
}
