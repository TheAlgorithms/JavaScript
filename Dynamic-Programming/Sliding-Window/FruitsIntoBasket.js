/**
 * @function totalFruit
 * @param {number[]} arr
 * @return {number} res
 * @see https://leetcode.com/problems/fruit-into-baskets/
 * @see [sliding-window-technique] (https://www.geeksforgeeks.org/window-sliding-technique/)
 */

export const totalFruit = function (arr) {
  // to maximize number of elements that our basket can have
  let max = 0
  // keeps track of the occurrence of each element
  const hash = {}
  // left side of the window
  let j = 0
  // to count number of elements
  let objLength = 0

  for (let i = 0; i < arr.length; i++) {
    // A hashmap keeps track of each character and it's occurrence
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1
      // when we have a new element we increment objLength
      objLength++
    } else {
      hash[arr[i]]++
    }
    if (objLength <= 2) {
      // maximizing and opening the window
      max = Math.max(max, i - j + 1)
    } else {
      // once we have more than two distinct elements in our hashmap, we should shrink our window
      while (objLength > 2) {
        hash[arr[j]]--
        // when the occurrence of an element becomes 0 we should delete it from the hashmap
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
