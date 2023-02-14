/**
 * @param {number[]} arr
 * @return {number} res
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
