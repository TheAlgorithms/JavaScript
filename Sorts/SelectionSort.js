/* The selection sort algorithm sorts an array by repeatedly finding the minimum element
 *(considering ascending order) from unsorted part and putting it at the beginning. The
 *algorithm maintains two subarrays in a given array.
 *1) The subarray which is already sorted.
 *2) Remaining subarray which is unsorted.
 *
 *In every iteration of selection sort, the minimum element (considering ascending order)
 *from the unsorted subarray is picked and moved to the sorted subarray.
 */

const selectionSort = (list) => {
  if (!Array.isArray(list)) {
    throw new TypeError('Given input is not an array')
  }
  const items = [...list] // We don't want to modify the original array
  const length = items.length
  for (let i = 0; i < length - 1; i++) {
    if (typeof items[i] !== 'number') {
      throw new TypeError('One of the items in your array is not a number')
    }
    // Number of passes
    let min = i // min holds the current minimum number position for each pass; i holds the Initial min number
    for (let j = i + 1; j < length; j++) { // Note that j = i + 1 as we only need to go through unsorted array
      if (items[j] < items[min]) { // Compare the numbers
        min = j // Change the current min number position if a smaller num is found
      }
    }
    if (min !== i) {
      // After each pass, if the current min num != initial min num, exchange the position.
      // Swap the numbers
      [items[i], items[min]] = [items[min], items[i]]
    }
  }
  return items
}

/* Implementation of Selection Sort

(() => {
  let array = [5, 6, 7, 8, 1, 2, 12, 14]
  // Array before Sort
  console.log(array)
  array = selectionSort(array)
  // Array after sort
  console.log(array)
})()

*/

export { selectionSort }
