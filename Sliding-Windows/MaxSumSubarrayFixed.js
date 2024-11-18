/**
 * Function to find the maximum sum of a subarray of fixed size k.
 *
 * @param {number[]} arr - The input array of numbers.
 * @param {number} k - The fixed size of the subarray.
 * @returns {number} - The maximum sum of any subarray of size k.
 * @throws {RangeError} - If k is larger than the array length or less than 1.
 */
export function maxSumSubarrayFixed(arr, k) {
  if (k > arr.length || k < 1) {
    throw new RangeError(
      'Subarray size k must be between 1 and the length of the array'
    )
  }
  let maxSum = 0
  let windowSum = 0
  for (let i = 0; i < k; i++) {
    windowSum += arr[i]
  }
  maxSum = windowSum
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]
    maxSum = Math.max(maxSum, windowSum)
  }
  return maxSum
}
