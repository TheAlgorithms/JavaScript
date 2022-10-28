/**
 * Author: Adrito Mukherjee
 * Implementation of ZFunction in JavaScript
 * ZFunction at an index i gives the length of the longest substring starting at i, that is also a prefix of the whole string
 * ZFunction for all indices in a string can be calculated in O(N)
 * Explanation: https://cp-algorithms.com/string/z-function.html
 */

function ZFunction (text) {
  const length = text.length
  const ZArray = Array(length).fill(0)
  let left = 0
  let right = 0
  for (let index = 0; index < length; index++) {
    if (index <= right) {
      ZArray[index] = Math.min(right - index + 1, ZArray[index - left])
    }
    while (
      index + ZArray[index] < length &&
      text[ZArray[index]] === text[index + ZArray[index]]
    ) {
      ZArray[index]++
    }
    if (index + ZArray[index] - 1 > right) {
      left = index
      right = index + ZArray[index] - 1
    }
  }
  return ZArray
}

export default ZFunction
