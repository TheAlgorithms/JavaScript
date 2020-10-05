/**
 * @function
 * Wiggle sort sorts the array into a wave like array.
 * An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..
 * @see [WiggleSort](https://leetcode.com/problems/wiggle-sort-ii/discuss/77684/summary-of-the-various-solutions-to-wiggle-sort-for-your-reference/81858)
 */

/* eslint no-extend-native: ["off", { "exceptions": ["Object"] }] */
function wiggleSort (list) {
  for (let i = 0; i < list.length; ++i) {
    const shouldNotBeLessThan = i % 2
    const isLessThan = list[i] < list[i + 1]
    if (shouldNotBeLessThan && isLessThan) {
      [list[i], list[i + 1]] = [list[i + 1], list[i]]
    }
  }
}

(
  /**
   * @example Test function
   */
  function demo () {
    const arr = [3, 5, 2, 1, 6, 4]
    console.log(arr)
    wiggleSort(arr)
    console.log(arr)
  }
)()
