
/**
 * @function BinarySearch
 * @description Search the integer inside the sorted integers array using Binary Search Algorithm.
 * @param {Integer[]} arr - sorted array of integers
 * @param {Integer} low - The input integer
 * @param {Integer} high - The input integer
 * @param {Integer} searchValue - The input integer
 * @return {Integer} - return index of searchValue if found else return -1.
 * @see [BinarySearch](https://en.wikipedia.org/wiki/Binary_search_algorithm)
 */

const binarySearch = (arr, low = 0, high = arr.length - 1, searchValue) => {
  if (high >= low) {
    const mid = low + Math.floor((high - low) / 2)

    // If the element is present at the middle
    if (arr[mid] === searchValue) {
      return mid
    }

    // If element is smaller than mid, then
    // it can only be present in left subarray
    if (arr[mid] > searchValue) {
      return binarySearch(arr, low, mid - 1, searchValue)
    }

    // Else the element can only be present in right subarray
    return binarySearch(arr, mid + 1, high, searchValue)
  }

  // We reach here when element is not present in array
  return -1
}

export { binarySearch }
