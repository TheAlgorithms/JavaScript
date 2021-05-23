/*
* Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
* For more information see here: https://en.wikipedia.org/wiki/Quicksort
*/

/*
*  Doctests
*
*  > quickSort([5, 4, 3, 10, 2, 1])
*  [1, 2, 3, 4, 5, 10]
*  > quickSort([])
*  []
* > quickSort([5, 4])
*  [4, 5]
*  > quickSort([1, 2, 3])
*  [1, 2, 3]
*/

function quickSort (items) {
  const length = items.length

  if (length <= 1) {
    return items
  }
  const PIVOT = items[0]
  const GREATER = []
  const LESSER = []

  for (let i = 1; i < length; i++) {
    if (items[i] > PIVOT) {
      GREATER.push(items[i])
    } else {
      LESSER.push(items[i])
    }
  }

  let sorted = quickSort(LESSER)
  sorted.push(PIVOT)
  sorted = sorted.concat(quickSort(GREATER))

  return sorted
}

// Implementation of quick sort

let ar = [0, 5, 3, 2, 2]
// Array before Sort
console.log(ar)
ar = quickSort(ar)
// Array after sort
console.log(ar)
