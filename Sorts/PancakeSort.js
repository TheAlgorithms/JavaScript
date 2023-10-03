/*
 * Unlike a traditional sorting algorithm, which attempts to sort with the fewest
 * comparisons possible, the goal of pancake sort is to sort the sequence in as few reversals as
 * possible. The idea is to do something similar to Selection Sort. We one by one place
 * maximum element at the end and reduce the size of current array by one.
 *
 * Source: https://www.geeksforgeeks.org/pancake-sorting/
 *
 * This sorting algorithm is inspired by the pancake problem (hence the name),
 * where a spatula can be placed anywhere between two pancakes and flip all pancakes
 * above.
 *
 * The interesting about this algorithm (besides its name) is that instead of comparisons,
 * the algorithm relies on flipping an array.
 *
 * Source: https://en.wikipedia.org/wiki/Pancake_sorting#The_original_pancake_problem
 *
 */

/**
 * Unlike Array.prototype.reverse, flipArray reverses only a subarray of the given
 * array, determined by the parameters startIndex and endIndex
 *
 * @param {number[]} array The array to flip
 * @param {number} startIndex The start of the subarray
 * @param {number} endIndex The end of the subarray
 * @returns The flipped array
 */
export function flipArray(array, startIndex, endIndex) {
  while (startIndex < endIndex) {
    // swap front and back of the subarray
    const temp = array[startIndex]
    array[startIndex] = array[endIndex]
    array[endIndex] = temp

    // essentially reducing the problem to a smaller subarray
    startIndex++
    endIndex--
  }

  return array
}

/**
 * Returns the index of the maximum number of a subarray in a given array
 *
 * @param {number[]} array The array to found the maximum number's index
 * @param {*} startIndex The start of the subarray
 * @param {*} endIndex The end of the subarray
 * @returns The index of the maximum number
 */
export function findMax(array, startIndex, endIndex) {
  let maxIndex = 0
  for (let i = startIndex; i <= endIndex; i++) {
    if (array[i] > array[maxIndex]) maxIndex = i
  }

  return maxIndex
}

/**
 * The Pancake Sort algorithm.
 *
 * Note that even though it's a completely different concept of sorting an
 * array, it's rather simple!
 *
 * @param {number[]} array The array to sort
 * @returns The sorted array
 */
export function pancakeSort(array) {
  for (let subarraySize = array.length; subarraySize > 1; subarraySize--) {
    const maximumIndex = findMax(array, 0, subarraySize - 1)

    if (maximumIndex !== subarraySize - 1) {
      flipArray(array, 0, maximumIndex)
      flipArray(array, 0, subarraySize - 1)
    }
  }

  return array
}
