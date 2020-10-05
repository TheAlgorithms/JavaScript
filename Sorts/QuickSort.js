/**
 * @function
 * Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
 * @see [QuickSort](https://en.wikipedia.org/wiki/Quicksort)
 */

function quickSort (items, left, right) {
  if (left >= right) return
  const pivot = items[right]
  let i = left
  for (let j = left; j < right; j++) {
    if (items[j] < pivot) {
      const temp = items[i]
      items[i] = items[j]
      items[j] = temp
      i++
    }
  }
  const temp = items[i]
  items[i] = items[right]
  items[right] = temp
  quickSort(items, left, i - 1)
  quickSort(items, i + 1, right)
}

(
/**
    * @example Test function
    */
  function demo () {
    const arr = [0, 5, 3, 2, 2, 8, 1, 9, 10, 6, 7, 15]
    console.log(arr)
    quickSort(arr, 0, arr.length - 1)
    console.log(arr)
  }
)()
