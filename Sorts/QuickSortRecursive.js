/*
    Quicksort is the most popular sorting algorithm and there have
    lots of different implementations but the "recursive" or "Partition in place"
    is one of the most efficient implementations below we have discussed how to
    implement it.

    Partition in place => "in place" Partition in place indicates that we
    do not need any other space to store the auxiliary array and the term
    "partition" denotes that we split the list into two parts one is less
    than the pivot and the other is greater than the pivot and repeats this
    process recursively and breaks the problem into sub-problems and makes
    it singular so that the behavior or "divide and conquer" get involved
    too.

    Problem & Source of Explanation => https://www.cs.auckland.ac.nz/software/AlgAnim/qsort1a.html
*/

/**
 * Sorts the input list using the quicksort algorithm.
 *
 * @param {Array} inputList - the list to be sorted
 * @return {Array} the sorted list
 */
// encapsulate the main function to to be the interface of our module
const quickSort = (inputList) => {
  if (!Array.isArray(inputList)) {
    throw new TypeError('Please input a valid list or array.')
  }
  if (inputList.length <= 1) {
    return inputList
  }
  return quickSortHelper(inputList, 0, inputList.length - 1)
}

/**
 * Recursively sorts the input list using the quicksort algorithm.
 *
 * @param {number[]} inputList - the list to be sorted
 * @param {number} low - the lower index of the current partition
 * @param {number} high - the higher index of the current partition
 * @return {number[]} the sorted list
 */

const quickSortHelper = (inputList, low, high) => {
  if (low < high) {
    const pIndex = partition(inputList, low, high) // Partition the array
    quickSortHelper(inputList, low, pIndex - 1) // Sort left subarray
    quickSortHelper(inputList, pIndex + 1, high) // Sort right subarray
  }
  return inputList
}

/**
 * Partition In Place method.
 * @param {number[]} partitionList list for partitioning.
 * @param {number} low lower index for partition.
 * @param {number} high higher index for partition.
 * @returns {number} `pIndex` pivot index value.
 */
const partition = (partitionList, low, high) => {
  const mid = Math.floor((low + high) / 2)
  // get the median of three is good technique for partitioning to be sure that the 2 sub-arrays will be almost equal or nearly equal in size
  const pivot = medianOfThree(partitionList, low, mid, high) // Find the pivot element

  // Move pivot to the end
  let pivotIndex = partitionList.indexOf(pivot)
  ;[partitionList[pivotIndex], partitionList[high]] = [
    partitionList[high],
    partitionList[pivotIndex]
  ]

  let pIndex = low

  // Perform the partitioning
  for (let i = low; i < high; i++) {
    if (partitionList[i] < pivot) {
      ;[partitionList[i], partitionList[pIndex]] = [
        partitionList[pIndex],
        partitionList[i]
      ]
      pIndex++
    }
  }
  // Swap the pivot element back to its correct position
  ;[partitionList[pIndex], partitionList[high]] = [
    partitionList[high],
    partitionList[pIndex]
  ]

  return pIndex // Return the partition index
}
/**
 * Returns the median value of three elements in an array.
 *
 * @param {number[]} arr - the input array
 * @param {number} low - the index of the first element
 * @param {number} mid - the index of the second element
 * @param {number} high - the index of the third element
 * @return {number} the median value of the three elements
 */

const medianOfThree = (partitionList, low, mid, high) => {
  const a = partitionList[low]
  const b = partitionList[mid]
  const c = partitionList[high]

  if (a > b !== a > c) return a
  else if (b > a !== b > c) return b
  else return c
}

export { quickSort }
