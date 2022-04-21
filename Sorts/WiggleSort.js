/*
 * Wiggle sort sorts the array into a wave like array.
 * An array ‘arr[0..n-1]’ is sorted in wave form if arr[0] <= arr[1] >= arr[2] <= arr[3] >= arr[4] <= …..
 * KEEP IN MIND: there are also more strict definitions of wiggle sort which use
 * the rule arr[0] < arr[1] > arr[2] < arr[3] > arr[4] < … but this function
 * allows for equality of values next to each other.
 */
import { quickSelectSearch } from '../Search/QuickSelectSearch.js'

export const wiggleSort = function (arr) {
  // find Median using QuickSelect
  let median = quickSelectSearch(arr, Math.floor(arr.length / 2.0))
  median = median[Math.floor(arr.length / 2.0)]

  console.log(median)
  const sorted = new Array(arr.length)

  let smallerThanMedianIndx = 0
  let greaterThanMedianIndx = arr.length - 1 - (arr.length % 2)

  for (let i = 0; i < arr.length; i++) {
    console.log(sorted)
    if (arr[i] > median) {
      sorted[greaterThanMedianIndx] = arr[i]
      greaterThanMedianIndx -= 2
    } else {
      if (smallerThanMedianIndx < arr.length) {
        sorted[smallerThanMedianIndx] = arr[i]
        smallerThanMedianIndx += 2
      } else {
        sorted[greaterThanMedianIndx] = arr[i]
        greaterThanMedianIndx -= 2
      }
    }
  }

  return sorted
}

// Implementation of wiggle sort

// console.log(wiggleSort([3, 5, 2, 1, 6, 4]))
// [ 3, 5, 2, 6, 1, 4 ]
// console.log(wiggleSort([3, 5, 2, 2, 0, 2]))
//  [ 0, 5, 2, 3, 2, 2 ]
// console.log(wiggleSort([1, 1, 1, 2, 2]))
// [ 1, 2, 1, 2, 1 ]
// console.log(wiggleSort([1, 1, 2, 2, 2]))
// [ 1, 2, 1, 2, 2 ]
// console.log(wiggleSort([3, 5, 6, 1]))
// [ 3, 6, 1, 5 ]
