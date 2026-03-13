/* Bubble Sort is an algorithm to sort an array. It
 * compares adjacent elements and swaps their position.
 * The big O on bubble sort in worst and best case is O(N^2).
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Bubble_sort
 */

/**
 * Using 2 for loops.
 */
export function bubbleSort(list) {
  if (!Array.isArray(list)) {
    throw new TypeError('Given input is not an array')
  }

  if (list.length === 0) {
    return []
  }

  const items = [...list]
  const length = items.length
  let noSwaps

  for (let i = length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (items[j] > items[j + 1]) {
        ;[items[j], items[j + 1]] = [items[j + 1], items[j]]
        noSwaps = false
      }
    }
    if (noSwaps) {
      break
    }
  }

  return items
}

/**
 * Using a while loop and a for loop.
 */
export function alternativeBubbleSort(list) {
  if (!Array.isArray(list)) {
    throw new TypeError('Given input is not an array')
  }

  if (list.length === 0) {
    return []
  }

  const arr = [...list]
  let swapped = true

  while (swapped) {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  }

  return arr
}
