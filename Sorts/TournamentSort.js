/*
 * Tournament Sort
 *
 * Tournament Sort improves upon naive Selection Sort by using a min-heap
 * (priority queue) to find the minimum element in O(log n) instead of O(n),
 * giving an overall time complexity of O(n log n).
 *
 * The name comes from its resemblance to a single-elimination sports tournament
 * where the winner (minimum element) is found each round.
 *
 * Reference: https://en.wikipedia.org/wiki/Tournament_sort
 */

/**
 * Restores the min-heap property by sifting down from index i.
 * @param {number[]} heap - The heap array
 * @param {number} n - Size of the heap
 * @param {number} i - Index to sift down from
 */
const heapify = (heap, n, i) => {
  let smallest = i
  const left = 2 * i + 1
  const right = 2 * i + 2

  if (left < n && heap[left] < heap[smallest]) smallest = left
  if (right < n && heap[right] < heap[smallest]) smallest = right

  if (smallest !== i) {
    ;[heap[i], heap[smallest]] = [heap[smallest], heap[i]]
    heapify(heap, n, smallest)
  }
}

/**
 * Sorts an array using Tournament Sort.
 * @param {number[]} arr - The array to sort
 * @returns {number[]} The sorted array
 */
const tournamentSort = (arr) => {
  if (arr.length <= 1) return arr

  const heap = [...arr]
  const result = []

  // Build min-heap
  for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
    heapify(heap, heap.length, i)
  }

  // Extract minimum elements one by one
  let size = heap.length
  while (size > 0) {
    result.push(heap[0])
    heap[0] = heap[size - 1]
    size--
    heapify(heap, size, 0)
  }

  return result
}

export { tournamentSort }
