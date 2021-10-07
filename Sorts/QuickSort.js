/**
* Quick sort is a comparison sorting algorithm that uses a divide and conquer strategy.
*
* For more information see here: https://en.wikipedia.org/wiki/Quicksort
*/
export function quickSort (items) {
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
