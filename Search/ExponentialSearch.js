/**
 * Exponential Search
 *
 * The algorithm consists of two stages. The first stage determines a
 * range in which the search key would reside if it were in the list.
 * In the second stage, a binary search is performed on this range.
 *
 *
 *
 */
/**
 * Binary Search
 *
 * @param {number[]} arr - The array to search within.
 * @param {number} value - The value to search for in the array.
 * @param {number} floor - The lower bound index of the search range.
 * @param {number} ceiling - The upper bound index of the search range.
 * @returns {number} - The index of the found element if present, otherwise -1.
 */
function binarySearch(arr, value, floor, ceiling) {
  // Middle index
  const mid = Math.floor((floor + ceiling) / 2)

  // If value is at the mid position return this position
  if (arr[mid] === value) {
    return mid
  }

  if (floor > ceiling) return -1

  // If the middle element is great than the value
  // search the left part of the array
  if (arr[mid] > value) {
    return binarySearch(arr, value, floor, mid - 1)
    // If the middle element is lower than the value
    // search the right part of the array
  } else {
    return binarySearch(arr, value, mid + 1, ceiling)
  }
}
/**
 * Exponential Search
 * @param {number[]} arr - The array to search within.
 * @param {number} length - The length of the array.
 * @param {number} value - The value to search for in the array.
 * @returns {number} - The index of the found element if present, otherwise -1.
 */
function exponentialSearch(arr, length, value) {
  // If value is the first element of the array return this position
  if (arr[0] === value) {
    return 0
  }

  // Find range for binary search
  let i = 1
  while (i < length && arr[i] <= value) {
    i = i * 2
  }

  // Call binary search for the range found above
  return binarySearch(arr, value, i / 2, Math.min(i, length))
}

export { binarySearch, exponentialSearch }

// const arr = [2, 3, 4, 10, 40, 65, 78, 100]
// const value = 78
// const result = exponentialSearch(arr, arr.length, value)
