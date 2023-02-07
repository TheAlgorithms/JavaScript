/* Kadane's algorithm is one of the most efficient ways to
 * calculate the maximum contiguous subarray sum for a given array.
 * Below is the implementation of Kadane's algorithm along with
 * some sample test cases.
 * There might be a special case in this problem if al the elements
 * of the given array are negative. In such a case, the maximum negative
 * value present in the array is the answer.
 *
 * Reference article :- https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/
 */

export function kadaneAlgo (array) {
  let cumulativeSum = 0
  let maxSum = Number.NEGATIVE_INFINITY // maxSum has the least possible value
  for (let i = 0; i < array.length; i++) {
    cumulativeSum = cumulativeSum + array[i]
    if (maxSum < cumulativeSum) {
      maxSum = cumulativeSum
    } else if (cumulativeSum < 0) {
      cumulativeSum = 0
    }
  }
  return maxSum
  // This function returns largest sum contiguous sum in a array
}
