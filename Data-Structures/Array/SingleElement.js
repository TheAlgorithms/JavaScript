/** https://leetcode.com/problems/single-number/description/
 * This function will accept an array and
 * Find an element which has only one frequency among other duplicate elements
 * The solution is based on using two loops, if the array is large, sorting or hashing is necessary, we can use XOR operator or sum method too
 * @param {Array} arr array with elements of integer type
 * @returns {Number} with single element
 */

function SingleElement(arr) {
  let n = arr.length
  for (let i = 0; i < n; i++) {
    let count = 0
    // previous elements are already checked
    for (let j = 0; j < n; j++) {
      if (arr[j] === arr[i]) {
        count++
      }
    }
    if (count === 1) {
      return arr[i]
    }
  }
}

export { SingleElement }
