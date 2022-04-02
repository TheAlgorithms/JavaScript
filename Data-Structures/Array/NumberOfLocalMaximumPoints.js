/**
 * [NumberOfLocalMaximumPoints](https://www.geeksforgeeks.org/find-indices-of-all-local-maxima-and-local-minima-in-an-array/) is an algorithm to find relative bigger numbers compared to their neighbors
 *
 * Notes:
 * - like the other similar local maxima search function find relative maxima points in array but doesn't stop at one but returns total point count
 * - runs on array A of size n and returns the local maxima count using divide and conquer methodology
 *
 * @complexity: O(n) (on average )
 * @complexity: O(n) (worst case)
 * @flow
 */

// check if returned index is a local maxima
const IsMaximumPoint = (array, index) => {
  // handle array bounds
  // array start
  if (index === 0) {
    return array[index] > array[index + 1]
    // array end
  } else if (index === array.length - 1) {
    return array[index] > array[index - 1]
    // handle index inside array bounds
  } else {
    return array[index] > array[index + 1] && array[index] > array[index - 1]
  }
}

const CountLocalMaximumPoints = (array, startIndex, endIndex) => {
  // stop check in divide and conquer recursion
  if (startIndex === endIndex) {
    return IsMaximumPoint(array, startIndex) ? 1 : 0
  }

  // handle the two halves
  const middleIndex = parseInt((startIndex + endIndex) / 2)
  return CountLocalMaximumPoints(array, startIndex, middleIndex) +
    CountLocalMaximumPoints(array, middleIndex + 1, endIndex)
}

const NumberOfLocalMaximumPoints = (A) => CountLocalMaximumPoints(A, 0, A.length - 1)

export { NumberOfLocalMaximumPoints }
