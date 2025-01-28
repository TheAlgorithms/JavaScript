/**
 * @function quickSort
 * @description Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
 * This version optimizes space complexity by sorting the array in place.
 * @param {Integer[]} items - Array of integers to be sorted.
 * @param {number} left - The starting index (defaults to 0).
 * @param {number} right - The ending index (defaults to array length - 1).
 * @return {Integer[]} - Sorted array.
 * @see [QuickSort](https://en.wikipedia.org/wiki/Quicksort)
 */
function quickSort(items, left = 0, right = items.length - 1) {
  if (left < right) {
    let pivotIndex = partition(items, left, right)

    quickSort(items, left, pivotIndex - 1)
    quickSort(items, pivotIndex + 1, right)
  }
  return items
}

/**
 * @function partition
 * @description This function partitions the array using the last element as the pivot.
 * It ensures that all elements smaller than the pivot are on the left side,
 * and all greater elements are on the right side.
 * @param {Integer[]} items - Array of integers to partition.
 * @param {number} left - The starting index for partitioning.
 * @param {number} right - The ending index for partitioning.
 * @return {number} - The index of the pivot element after partitioning.
 */
function partition(items, left, right) {
  const pivot = items[right]
  let i = left - 1

  for (let j = left; j < right; j++) {
    if (items[j] <= pivot) {
      i++
      ;[items[i], items[j]] = [items[j], items[i]]
    }
  }

  ;[items[i + 1], items[right]] = [items[right], items[i + 1]]
  return i + 1
}

export { quickSort }
