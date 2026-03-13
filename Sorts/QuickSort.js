/**
 * @function quickSort
 * @description Quick Sort is a divide-and-conquer comparison-based sorting algorithm.
 * @param {number[]} items - Array of integers
 * @returns {number[]} - Sorted array
 * @timecomplexity Average: O(n log n), Worst: O(n²)
 * @spacecomplexity O(n)
 * @see https://en.wikipedia.org/wiki/Quicksort
 */
function quickSort(items) {
  if (items.length <= 1) return items

  const pivotIndex = Math.floor(items.length / 2)
  const pivot = items[pivotIndex]

  const lesser = []
  const greater = []

  for (let i = 0; i < items.length; i++) {
    if (i === pivotIndex) continue
    if (items[i] < pivot) lesser.push(items[i])
    else greater.push(items[i])
  }

  return [...quickSort(lesser), pivot, ...quickSort(greater)]
}

export { quickSort }
