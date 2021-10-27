/*
 * Wiggle sort sorts the array into a wave like array.
 * An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >= …..
 *
 */

export const wiggleSort = function (arr) {
  for (let i = 0; i < arr.length; ++i) {
    const shouldNotBeLessThan = i % 2
    const isLessThan = arr[i] < arr[i + 1]
    if (shouldNotBeLessThan && isLessThan) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
  }
  return arr
}

// Implementation of wiggle sort

// > wiggleSort([3, 5, 2, 1, 6, 4])
// [ 3, 5, 2, 6, 1, 4 ]
