/**
 * @function
 * A simple helper function that checks, if the array is
 * sorted in ascending order.
 * @returns {Boolean} true if the array is sorted, otherwise false
 * */

Array.prototype.isSorted = function () {
  const length = this.length
  for (let i = 0; i < length - 1; i++) {
    if (this[i] > this[i + 1]) {
      return false
    }
  }
  return true
}

/**
 * @function
 * A simple helper function to shuffle the array randomly in place.
 */
Array.prototype.shuffle = function () {
  for (let i = this.length - 1; i; i--) {
    const m = Math.floor(Math.random() * i)
    const n = this[i - 1]
    this[i - 1] = this[m]
    this[m] = n
  }
}

/**
 * @function Implementation of the bogosort algorithm. This sorting algorithm randomly
 * rearranges the array until it is sorted.
 * @param {Array} items array to be sorted
 * @see [Bogosort](https://en.wikipedia.org/wiki/Bogosort)
 * @returns {Array} sorted array
 */
function bogoSort (items) {
  while (!items.isSorted()) {
    items.shuffle()
  }
  return items
}
(
/**
 * @function demo function to test bogosort.
 */
  function demo () {
    const size = 5
    const arr = Array(size)
    for (let i = 0; i < size; i++) {
      arr[i] = Math.floor(Math.random() * 10)
    }
    // Array before BogoSort
    console.log(arr)
    bogoSort(arr)
    // Array after BogoSort
    console.log(arr)
  })()
