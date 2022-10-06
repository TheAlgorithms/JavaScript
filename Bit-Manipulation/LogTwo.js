/**
 * https://handwiki.org/wiki/Binary_logarithm
 * Approximate log2 using only bitwise operators
 * @param {number} n
 * @returns {number} Log2 approximation equal to floor(log2(n))
 */
export const logTwo = (n) => {
  let result = 0
  while (n >> 1) {
    n >>= 1
    result++
  }
  return result
}
