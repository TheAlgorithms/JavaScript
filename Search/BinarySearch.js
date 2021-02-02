/* Binary Search: https://en.wikipedia.org/wiki/Binary_search_algorithm
 *
 * Search a sorted array by repeatedly dividing the search interval
 * in half. Begin with an interval covering the whole array. If the value of the
 * search key is less than the item in the middle of the interval, narrow the interval
 * to the lower half. Otherwise narrow it to the upper half. Repeatedly check until the
 * value is found or the interval is empty.
 */

function binarySearch (arr, x, low = 0, high = arr.length - 1) {
  const mid = Math.floor(low + (high - low) / 2)

  if (high >= low) {
    if (arr[mid] === x) {
      // item found => return its index
      return mid
    }

    if (x < arr[mid]) {
      // arr[mid] is an upper bound for x, so if x is in arr => low <= x < mid
      return binarySearch(arr, x, low, mid - 1)
    } else {
      // arr[mid] is a lower bound for x, so if x is in arr => mid < x <= high
      return binarySearch(arr, x, mid + 1, high)
    }
  } else {
    // if low > high => we have searched the whole array without finding the item
    return -1
  }
}

/* ---------------------------------- Test ---------------------------------- */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const stringArr = [
  'Alpha',
  'Bravo',
  'Charlie',
  'Delta',
  'Echo',
  'Foxtrot',
  'Golf',
  'Hotel',
  'India',
  'Juliet',
  'Kilo',
  'Lima',
  'Mike',
  'November',
  'Oscar',
  'Papa',
  'Quebec',
  'Romeo',
  'Sierra',
  'Tango',
  'Uniform',
  'Victor',
  'Whiskey',
  'X-Ray',
  'Yankee',
  'Zulu'
]

console.log(binarySearch(arr, 3))
console.log(binarySearch(arr, 7))
console.log(binarySearch(arr, 13))

console.log(binarySearch(stringArr, 'Charlie'))
console.log(binarySearch(stringArr, 'Zulu'))
console.log(binarySearch(stringArr, 'Sierra'))
