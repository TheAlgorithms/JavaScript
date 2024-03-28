/**
 * The Jump Search algorithm allows combining a linear search with a speed optimization.
 * Instead of searching one element at a time, it increases the step size by √n each time,
 * making the step size progressively larger. The asymptotic analysis of Jump Search is O(√n).
 * Similar to binary search, the array needs to be sorted for Jump Search to work correctly.
 * The advantage of Jump Search over binary search is that it traverses back only once.
 *
 * @param {number[]} arr - The sorted array to search in.
 * @param {number} value - The value to search for in the array.
 * @returns {number} - The index of the value in the array if found, otherwise -1.
 *
 * @example
 * const arr = [1, 3, 5, 7, 9, 11, 13, 15]
 * const index = jumpSearch(arr, 7) // index will be 3
 */
const jumpSearch = (arr, value) => {
  const length = arr.length
  let step = Math.floor(Math.sqrt(length))
  let lowerBound = 0

  while (arr[Math.min(step, length) - 1] < value) {
    lowerBound = step
    step += step
    if (lowerBound >= length) {
      return -1
    }
  }

  const upperBound = Math.min(step, length)
  while (arr[lowerBound] < value) {
    lowerBound++
    if (lowerBound === upperBound) {
      return -1
    }
  }

  if (arr[lowerBound] === value) {
    return lowerBound
  }
  return -1
}

export { jumpSearch }
