/**
 * Computes prefix sums for a numeric array.
 * Example: [2, 3, 5] → [2, 5, 10]
 * @param {number[]} arr
 * @returns {number[]} Prefix sum array
 * @throws {TypeError} if input is not a numeric array
 */
export const basicPrefixSum = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Input must be an array')
  }

  if (!arr.every((item) => typeof item === 'number')) {
    throw new TypeError('All elements must be numbers')
  }

  const prefix = []
  let sum = 0
  for (const num of arr) {
    sum += num
    prefix.push(sum)
  }
  return prefix
}
