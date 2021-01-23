/**
 * Comb sort improves on bubble sort.
 * 
 * The basic idea is to eliminate turtles, or small values
 * near the end of the list, since in a bubble sort these slow the sorting
 * down tremendously. Rabbits, large values around the beginning of the list,
 * do not pose a problem in bubble sort.
 * 
 * In bubble sort, when any two elements are compared, they always have a
 * gap (distance from each other) of 1. The basic idea of comb sort is
 * that the gap can be much more than 1. The inner loop of bubble sort,
 * which does the actual swap, is modified such that gap between swapped
 * elements goes down (for each iteration of outer loop) in steps of
 * a "shrink factor" k: [ n/k, n/k2, n/k3, ..., 1 ].
 * 
 * Wikipedia: https://en.wikipedia.org/wiki/Comb_sort
 */

function combSort (list) {
  if (list.length === 0) {
    return list
  }
  const shrink = 1.3
  let gap = list.length
  let isSwapped = true
  let i = 0

  while (gap > 1 || isSwapped) {
    // Update the gap value for a next comb
    gap = parseInt(parseFloat(gap) / shrink, 10)

    isSwapped = false
    i = 0

    while (gap + i < list.length) {
      if (list[i] > list[i + gap]) {
        [list[i], list[i + gap]] = [list[i + gap], list[i]]
        isSwapped = true
      }
      i += 1
    }
  }
  return list
}
const arrOrignal = [5, 6, 7, 8, 1, 2, 12, 14]
// Array before Sort
console.log(arrOrignal)
const arrSorted = combSort(arrOrignal)
// Array after sort
console.log(arrSorted)
