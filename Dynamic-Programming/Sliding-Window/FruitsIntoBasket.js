/**
 * @function totalFruit
 * @param {number[]} arr
 * @return {number} res
 * @name sliding-window this technique is used to when you have a subsets/subsequence problem, it's efficient in terms of time complexity,
 * since it reduces time complexity to O(n).
 * @see hints for sliding window problems:
 * when you see keywords like: subarrays, maximum/minimum subarray, longest substring/subsequence, etc
 * @see https://leetcode.com/problems/fruit-into-baskets/
 * @see [sliding-window-technique] (https://www.geeksforgeeks.org/window-sliding-technique/)
 */

export const totalFruit = function (arr) {
  let max = 0
  const hash = {}
  let j = 0
  let objLength = 0

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1
      objLength++
    } else {
      hash[arr[i]]++
    }

    if (objLength <= 2) {
      max = Math.max(max, i - j + 1)
    } else {
      while (objLength > 2) {
        hash[arr[j]]--
        if (hash[arr[j]] === 0) {
          delete hash[arr[j]]
          objLength--
        }
        j++
      }
    }
  }

  return max
}
