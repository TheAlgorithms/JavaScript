/**
 * Function to find the longest subarray with a sum <= target.
 *
 * @param {number[]} arr - The input array of numbers.
 * @param {number} target - The target sum for the dynamic window.
 * @returns {number} - The length of the longest subarray with a sum <= target.
 */
export function longestSubarrayWithSumAtMost(arr, target) {
  let maxLength = 0
  let windowSum = 0
  let left = 0
  for (let right = 0; right < arr.length; right++) {
    windowSum += arr[right]
    while (windowSum > target) {
      windowSum -= arr[left]
      left++
    }
    maxLength = Math.max(maxLength, right - left + 1)
  }
  return maxLength
}
