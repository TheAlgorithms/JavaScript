/**
 * Computes the prefix sum (cumulative sum) of an array of numbers.
 * For example, given [1, 2, 3], returns [1, 3, 6].
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number[]} - The prefix sum array.
 * @throws {TypeError} - If input is not an array of numbers.
 */
function basicPrefixSum(arr) {
  // Validate input: must be an array of numbers
  if (!Array.isArray(arr) || !arr.every((x) => typeof x === 'number')) {
    throw new TypeError('Input must be an array of numbers')
  }

  const prefix = []
  // Use reduce to calculate cumulative sum and store in prefix array
  arr.reduce((acc, val, index) => {
    prefix[index] = acc + val // Store current sum at index
    return prefix[index] // Pass current sum to next iteration
  }, 0)
  return prefix
}

// Export the function for use in other modules
module.exports = basicPrefixSum
