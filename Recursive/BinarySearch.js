/**
 * @function binarySearch
 * @description Recursively searches for a `searchValue` within a sorted `arr` of integers.
 * This implementation uses default parameters for `low` and `high` to allow
 * for a simple initial call (e.g., `binarySearch(arr, value)`).
 *
 * @example
 * const arr = [1, 2, 3, 4, 5, 6, 7];
 * const value = 5;
 * const index = binarySearch(arr, value);
 * // index will be 4
 *
 * @example
 * const arr = [1, 2, 3, 4, 5, 6, 7];
 * const value = 8;
 * const index = binarySearch(arr, value);
 * // index will be -1
 *
 * @param {Integer[]} arr - The sorted array of integers to search.
 * @param {Integer} searchValue - The integer value to search for in the array.
 * @param {Integer} [low=0] - The starting index of the subarray. (Primarily for internal recursive use).
 * @param {Integer} [high=arr.length-1] - The ending index of the subarray. (Primarily for internal recursive use).
 * @return {Integer} - The index of `searchValue` if found, otherwise -1.
 * @see [BinarySearch](https://en.wikipedia.org/wiki/Binary_search_algorithm)
 */

const binarySearch = (arr, searchValue, low = 0, high = arr.length - 1) => {
  // base case
  if (high < low || arr.length === 0) return -1

  const mid = low + Math.floor((high - low) / 2)

  // If the element is present at the middle
  if (arr[mid] === searchValue) {
    return mid
  }

  // If element is smaller than mid, then
  // it can only be present in left subarray
  if (arr[mid] > searchValue) {
    return binarySearch(arr, searchValue, low, mid - 1)
  }

  // Else the element can only be present in right subarray
  return binarySearch(arr, searchValue, mid + 1, high)
}

export { binarySearch }
