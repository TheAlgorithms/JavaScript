/* Binary Search: https://en.wikipedia.org/wiki/Binary_search_algorithm
 *
 * Search a sorted array by repeatedly dividing the search interval
 * in half. Begin with an interval covering the whole array. If the value of the
 * search key is less than the item in the middle of the interval, narrow the interval
 * to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the
 * value is found or the interval is empty.
 */

function binarySearchRecursive(arr, x, low = 0, high = arr.length - 1) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return -1
  }

  const mid = Math.floor(low + (high - low) / 2)

  if (high >= low) {
    if (arr[mid] === x) {
      return mid
    }

    if (x < arr[mid]) {
      return binarySearchRecursive(arr, x, low, mid - 1)
    } else {
      return binarySearchRecursive(arr, x, mid + 1, high)
    }
  }

  return -1
}

function binarySearchIterative(arr, x, low = 0, high = arr.length - 1) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return -1
  }

  while (high >= low) {
    const mid = Math.floor(low + (high - low) / 2)

    if (arr[mid] === x) {
      return mid
    }

    if (x < arr[mid]) {
      high = mid - 1
    } else {
      low = mid + 1
    }
  }

  return -1
}

export { binarySearchIterative, binarySearchRecursive }
