/**
 * @author: Adrito Mukherjee
 * Implementation of ZFunction in JavaScript
 * ZFunction at an index i gives the length of the longest substring starting at i, that is also a prefix of the whole string
 * ZFunction for all indices in a string can be calculated in O(N)
 * @see https://cp-algorithms.com/string/z-function.html
 * @param {String} text The string whose Z Function is to be calculated
 * @return {Array} Returns an array whose i-th index is the value of Z Function for text at index i
 */

function zFunction (text) {
  const length = text.length
  const zArray = Array(length).fill(0)
  // Initializing left and right variable to zero
  let left = 0
  let right = 0
  for (let index = 0; index < length; index++) {
    // If index is less than or equal to right, we reuse the values of zFunction at index right-index+1
    // It is made sure that value of zFunction at index is not greater than maximum possible value at index
    if (index <= right) {
      zArray[index] = Math.min(right - index + 1, zArray[index - left])
    }

    // After zArray[index] is initialized, we see if we can increase its value by trivially comparing character by character
    while (
      index + zArray[index] < length &&
      text[zArray[index]] === text[index + zArray[index]]
    ) {
      zArray[index]++
    }

    // If index + zArray[index] - 1 is greater than right, we update values of variables left and right
    if (index + zArray[index] - 1 > right) {
      left = index
      right = index + zArray[index] - 1
    }
  }
  return zArray
}

export default zFunction
