/*
 * Problem Statement: Given an array of numbers and a target sum, find the number of distinct subsets that sums up to the target.
 *
 * What is a subset?
 * A subset is a selection of elements from an array where the order of elements remains unchanged. A subset can include any combination of elements, including no elements at all (i.e., the empty set).
 * Example: Given an array = [1, 2]
 * 1. [] is a subset (empty set)
 * 2. [1] is a subset
 * 3. [2] is a subset
 * 4. [1, 2] is a subset
 *
 * How does the number of subsets relate to the array size?
 * An array of size k has 2^k possible subsets.
 * Example: For an array = [10, 5], the possible subsets are [], [10], [5], [10, 5].
 *
 * Problem Example:
 * 1. I/P: arr = [10, 5, 2, 3, 6], sum = 8
 *    O/P: 2 (The subsets [2, 6] and [5, 3] both sum to 8)
 *
 * 2. I/P: arr = [-1, -1, -1], sum = -3
 *    O/P: 1 (The subset [-1, -1, -1] sums to -3)
 *
 * 3. I/P: arr = [40, 9, 77], sum = 3
 *    O/P: 0 (No subset sums to 3)
 *
 * Algorithm:
 * Recursively explore all subsets, either including or excluding each element of the array, here inclusion means subtracting the sum by the element included, finally check if sum equals zero, this would indicate that the sum of all the elements included is equal to the target sum.
 *
 * @see [Subset Sum Problem](https://en.wikipedia.org/wiki/Subset_sum_problem)
 */

/**
 * @function subsetSum
 * @description This function recursively calculates the count of subsets whose sum equals the given target sum.
 * @param {number[]} arr - The input array of numbers.
 * @param {number} sum - The target sum we want to find in the subsets.
 * @param {number} ind - The current index.
 * @return {number} The count of subsets whose sum equals the target sum.
 *
 * @throws {TypeError} If the input `arr` is not an array of numbers or if the `sum` is not a number.
 */

export function subsetSum(arr, sum, ind = 0) {
  //input validation only in the initial call
  if (
    ind === 0 &&
    (!Array.isArray(arr) || !arr.every((elem) => typeof elem === 'number'))
  ) {
    throw new TypeError('arr should be an array of numbers')
  }

  if (ind === 0 && typeof sum !== 'number') {
    throw new TypeError('sum should be a number')
  }

  if (ind === arr.length) {
    return sum === 0 ? 1 : 0
  }

  return subsetSum(arr, sum, ind + 1) + subsetSum(arr, sum - arr[ind], ind + 1)
}
