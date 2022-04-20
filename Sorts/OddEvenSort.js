/*
  odd–even sort or odd–even transposition sort
  is a relatively simple sorting algorithm, developed originally for use on parallel processors with local interconnections.
  It is a comparison sort related to bubble sort, with which it shares many characteristics.

   for more information : https://en.wikipedia.org/wiki/Odd%E2%80%93even_sort
*/

// Helper function to swap array items
function swap (arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

export function oddEvenSort (arr) {
  let sorted = false
  while (!sorted) {
    sorted = true
    for (let i = 1; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
        sorted = false
      }
    }
    for (let i = 0; i < arr.length - 1; i += 2) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1)
        sorted = false
      }
    }
  }
  return arr
}
