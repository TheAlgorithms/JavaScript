/**
 * Meta Binary Search
 * https://www.geeksforgeeks.org/meta-binary-search-one-sided-binary-search/
 *
 * Builds the index bit by bit from the most-significant bit to the least-significant bit.
 * Works on sorted arrays and returns the index of target, or -1 if not found.
 */

function metaBinarySearch(sortedArray, target) {
  if (!Array.isArray(sortedArray) || sortedArray.length === 0) {
    return -1
  }

  const n = sortedArray.length
  const maxBit = Math.floor(Math.log2(Math.max(1, n - 1)))

  let position = 0
  for (let bit = maxBit; bit >= 0; bit--) {
    const candidate = position + 2 ** bit
    if (candidate < n && sortedArray[candidate] <= target) {
      position = candidate
    }
  }

  return sortedArray[position] === target ? position : -1
}

export { metaBinarySearch }
