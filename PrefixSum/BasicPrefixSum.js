/**
 * BasicPrefixSum.js
 * Implementation of Prefix Sum array.
 *
 * @param {number[]} arr - Input array of numbers.
 * @returns {number[]} Prefix sum array.
 * @throws {TypeError} If input is not an array of numbers.
 *
 * Explanation:
 * Given [1,2,3,4], returns [1,3,6,10]
 */

export function basicPrefixSum(arr) {
  // Validate input
  if (!Array.isArray(arr) || arr.some((x) => typeof x !== 'number')) {
    throw new TypeError('Input must be an array of numbers')
  }

  // Handle empty array
  if (arr.length === 0) return []

  const prefix = new Array(arr.length)
  prefix[0] = arr[0]

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i]
  }

  return prefix
}
