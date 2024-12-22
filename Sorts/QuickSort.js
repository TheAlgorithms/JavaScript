/**
 * @function QuickSort
 * @description Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
 * It sorts the array in place by using a partitioning technique instead of creating separate arrays.
 * @param {Integer[]} items - Array of integers
 * @param {Integer} left - Starting index
 * @param {Integer} right - Ending index
 * @return {Integer[]} - Sorted array.
 * @see [QuickSort](https://en.wikipedia.org/wiki/Quicksort)
 */
function quickSort(items, left = 0, right = items.length - 1) {
  if (left >= right) {
    return items
  }

  const pivotIndex = partition(items, left, right)
  quickSort(items, left, pivotIndex - 1)
  quickSort(items, pivotIndex + 1, right)

  return items
}

/**
 * @function partition
 * @description Partitions the array in place and returns the index of the pivot.
 * @param {Integer[]} items - Array of integers
 * @param {Integer} left - Starting index
 * @param {Integer} right - Ending index
 * @return {Integer} - Pivot index.
 */
function partition(items, left, right) {
  const PIVOT = items[right] // Choose the rightmost element as pivot
  let partitionIndex = left

  for (let i = left; i < right; i++) {
    if (items[i] < PIVOT) {
      swap(items, i, partitionIndex)
      partitionIndex++
    }
  }

  // Move the pivot to its correct position
  swap(items, partitionIndex, right)

  return partitionIndex
}

/**
 * @function swap
 * @description Helper function to swap two elements in the array.
 * @param {Integer[]} items - Array of integers
 * @param {Integer} i - Index of the first element
 * @param {Integer} j - Index of the second element
 */
function swap(items, i, j) {
  const temp = items[i]
  items[i] = items[j]
  items[j] = temp
}

export { quickSort }
