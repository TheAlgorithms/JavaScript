/**
 * @function
 * The selection sort algorithm sorts an array by repeatedly finding the minimum element
 * (considering ascending order) from unsorted part and putting it at the beginning. The
 * algorithm maintains two subarrays in a given array.
 * 1) The subarray which is already sorted.
 * 2) Remaining subarray which is unsorted.
 * @see [SelectionSort](https://en.wikipedia.org/wiki/Selection_sort)
 */

function selectionSort (items) {
  const length = items.length
  for (let i = 0; i < length - 1; i++) {
    // Number of passes
    let min = i // min holds the current minimum number position for each pass; i holds the Initial min number
    for (let j = i + 1; j < length; j++) { // Note that j = i + 1 as we only need to go through unsorted array
      if (items[j] < items[min]) { // Compare the numbers
        min = j // Change the current min number position if a smaller num is found
      }
    }
    if (min !== i) {
      const temp = items[i]
      items[i] = items[min]
      items[min] = temp
    }
  }
}

(
  /**
   * @example Test function
   */
  function demo () {
    const arr = [5, 6, 7, 8, 1, 2, 12, 14]
    console.log(arr)
    selectionSort(arr)
    console.log(arr)
  }
)()
