/**
 * @function
 * Bubble Sort is a algorithm to sort an array. It
 * compares adjacent element and swaps thier position
 * The big O on bubble sort in worst and best case is O(N^2).
 * Not efficient.
 * @param {Array} items array to be sorted
 * @see [BubbleSort](https://en.wikipedia.org/wiki/Bubble_sort)
 * @returns {Array} sorted array
*/
function bubbleSort (items) {
  const length = items.length
  for (let i = (length - 1); i > 0; i--) {
    // Number of passes
    for (let j = (length - i); j > 0; j--) {
      // Compare the adjacent positions
      if (items[j] < items[j - 1]) {
        // Swap the numbers
        [items[j], items[j - 1]] = [items[j - 1], items[j]]
      }
    }
  }
}

(
  /**
   * @function Function to test Unoptimized BubbleSort
   * Prints unsorted array and sorted array.
   */
  function demo () {
    const arr = [5, 6, 7, 8, 1, 2, 12, 14]
    // Array before sort
    console.log(arr)
    bubbleSort(arr)
    // Array after sort
    console.log(arr)
  }
)()

/**
 * @function
 * In bubble sort, we keep iterating while something was swapped in
 * the previous inner-loop iteration. By swapped I mean, in the
 * inner loop iteration, we check each number if the number proceeding
 * it is greater than itself, if so we swap them.
 * @param {Array} arr array to be sorted
 * @returns {Array} sorted array
*/

function alternativeBubbleSort (arr) {
  let swapped = true
  while (swapped) {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        swapped = true
      }
    }
  }
}

(
  /**
   * @function Simple function to test optimized Bubble Sort.
   */
  function demo () {
    const array = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
    // > alternativeBubbleSort(array)
    // [1, 2, 3, 4, 5, 7, 8, 9, 10]
    // Array before sort
    console.log(array)
    alternativeBubbleSort(array)
    // Array after sort
    console.log(array)
  }
)()
