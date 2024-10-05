/* Binary Search: https://en.wikipedia.org/wiki/Binary_search_algorithm
 *
 * Search a sorted array by repeatedly dividing the search interval
 * in half. Begin with an interval covering the whole array. If the value of the
 * search key is less than the item in the middle of the interval, narrow the interval
 * to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the
 * value is found or the interval is empty.
 */

function binarySearchRecursive(arr, x, low = 0, high = arr.length - 1) {
  const mid = Math.floor(low + (high - low) / 2)

  if (high >= low) {
    if (arr[mid] === x) {
      // item found => return its index
      return mid
    }

    if (x < arr[mid]) {
      // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
      return binarySearchRecursive(arr, x, low, mid - 1)
    } else {
      // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
      return binarySearchRecursive(arr, x, mid + 1, high)
    }
  } else {
    // if low > high => we have searched the whole array without finding the item
    return -1
  }
}
function binarySearchIterative(arr, x, low = 0, high = arr.length - 1) {
  while (high >= low) {
    const mid = Math.floor(low + (high - low) / 2)

    if (arr[mid] === x) {
      // item found => return its index
      return mid
    }

    if (x < arr[mid]) {
      // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
      high = mid - 1
    } else {
      // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
      low = mid + 1
    }
  }
  // if low > high => we have searched the whole array without finding the item
  return -1
}

/* binary search for unsorted arrays, returns original index. */
function binarySearchOrigin(arr, target) {
  // check if all elements in the array are of the same type
  const firstType = typeof arr[0]
  const allSameType = arr.every((item) => typeof item === firstType)

  if (!allSameType) {
    return 'Cannot perform search: Array contains elements of different types.'
  }

  const originalArrayWithIndices = arr.map((value, index) => ({
    value,
    index
  }))

  // sorting function based on type (number or string)
  const sortedArrayWithIndices = originalArrayWithIndices.sort((a, b) => {
    if (typeof a.value === 'number' && typeof b.value === 'number') {
      return a.value - b.value // sort numbers
    } else if (typeof a.value === 'string' && typeof b.value === 'string') {
      return a.value.localeCompare(b.value) // sort strings
    }
  })

  let start = 0
  let end = sortedArrayWithIndices.length - 1

  // binary search loop
  while (start <= end) {
    const midIndex = Math.floor((start + end) / 2)
    const mid = sortedArrayWithIndices[midIndex].value

    if (mid === target) {
      // return the original index if the target is found
      return sortedArrayWithIndices[midIndex].index
    }

    if (mid < target) {
      start = midIndex + 1
    } else {
      end = midIndex - 1
    }
  }

  // return -1 if target is not found
  return -1
}

export { binarySearchIterative, binarySearchRecursive, binarySearchOrigin }
