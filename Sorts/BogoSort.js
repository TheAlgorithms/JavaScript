/**
 * Checks whether the given array is sorted in ascending order.
 */
export function isSorted(array) {
  const length = array.length

  for (let i = 0; i < length - 1; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  }

  return true
}

/**
 * Shuffles the given array randomly in place
 * using the unbiased Fisher–Yates algorithm.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Select random index from the inclusive range [0, i]
    const j = Math.floor(Math.random() * (i + 1))

    // Swap elements
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

/**
 * Implementation of the bogosort algorithm.
 *
 * This sorting algorithm randomly rearranges the array
 * until it is sorted.
 *
 * For more information see:
 * https://en.wikipedia.org/wiki/Bogosort
 */
export function bogoSort(items) {
  while (!isSorted(items)) {
    shuffle(items)
  }

  return items
}