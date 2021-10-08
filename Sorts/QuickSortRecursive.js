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
 * Partition in place QuickSort.
 * @param {number[]} inputList list of values.
 * @param {number} low lower index for partition.
 * @param {number} high higher index for partition.
 */
const quickSort = (inputList, low, high) => {
  if (!Array.isArray(inputList)) {
    throw new TypeError('Please input a valid list or array.')
  }
  if (low < high) {
    // get the partition index.
    const pIndex = partition(inputList, low, high)
    // recursively call the quickSort method again.
    quickSort(inputList, low, pIndex - 1)
    quickSort(inputList, pIndex + 1, high)
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
  const pivot = partitionList[high]
  let pIndex = low
  for (let index = low; index <= high - 1; index++) {
    if (partitionList[index] < pivot) {
      // swap variables using array destructuring
      [partitionList[index], partitionList[pIndex]] = [partitionList[pIndex], partitionList[index]]
      pIndex += 1
    }
  }
  [partitionList[pIndex], partitionList[high]] = [partitionList[high], partitionList[pIndex]]
  return pIndex
}

export { quickSort }
