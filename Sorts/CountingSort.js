/**
 * @function
 * Counting sort is an algorithm for sorting a collection of objects according to keys that are small integers;
 * that is, it is an integer sorting algorithm.
 * @see [Counting Sort](https://en.wikipedia.org/wiki/Counting_sort)
 * @see [Counting Sort Visualization](https://www.cs.usfca.edu/~galles/visualization/CountingSort.html)
 * @param {Array} array array to be sorted
 * @param {Number} min min element
 * @param {Number} max max element
 */

function countingSort (arr, min, max) {
  let i
  let z = 0
  const count = []

  for (i = min; i <= max; i++) {
    count[i] = 0
  }

  for (i = 0; i < arr.length; i++) {
    count[arr[i]]++
  }

  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[z++] = i
    }
  }

  return arr
}

(
  /**
   * @function Simple test function
   */
  function demo () {
    const arr = [3, 0, 2, 5, 4, 1]

    // Array before Sort
    console.log(arr)
    // Array after sort
    console.log(countingSort(arr, 0, 5))
  })()
