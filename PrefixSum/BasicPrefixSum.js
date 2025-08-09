/**
 * Computes the prefix sum of an array
 * @param {number[]} arrayOfNumbers - Array of numbers
 * @returns {number[]} - Prefix sum array
 * @throws {TypeError} - If input is not a numeric array
 */
function basicPrefixSum(arrayOfNumbers) {
  // Validate input
  if (!Array.isArray(arrayOfNumbers)) {
    throw new TypeError('Input must be an array')
  }

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (
      typeof arrayOfNumbers[i] !== 'number' ||
      !Number.isFinite(arrayOfNumbers[i])
    ) {
      throw new TypeError('All elements must be finite numbers')
    }
  }

  // Handle empty array
  if (arrayOfNumbers.length === 0) {
    return []
  }

  const prefixSum = new Array(arrayOfNumbers.length)
  prefixSum[0] = arrayOfNumbers[0]

  for (let i = 1; i < arrayOfNumbers.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + arrayOfNumbers[i]
  }

  return prefixSum
}

export default basicPrefixSum
