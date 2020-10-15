/* Bubble Sort is an algorithm to sort an array. It
*  compares adjacent element and swaps thier position
*  The big O on bubble sort in worst and best case is O(N^2).
*  Not efficient.
*
*  In bubble sort, we keep iterating while something was swapped in
*  the previous inner-loop iteration. By swapped I mean, in the
*  inner loop iteration, we check each number if the number proceeding
*  it is greater than itself, if so we swap them.
*
*  Wikipedia: https://en.wikipedia.org/wiki/Bubble_sort
*/

/*
*  Doctests
*
*  > bubbleSort([5, 4, 1, 2, 3])
*  [1, 2, 3, 4, 5]
*  > bubbleSort([])
*  []
*  > bubbleSort([1, 2, 3])
*  [1, 2, 3]
*
*  > alternativeBubbleSort([5, 4, 1, 2, 3])
*  [1, 2, 3, 4, 5]
*  > alternativeBubbleSort([])
*  []
*  > alternativeBubbleSort([1, 2, 3])
*  [1, 2, 3]
*/

/*
*  Using 2 for loops
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

  return items
}

/*
*  Implementation of 2 for loops method
*/
var array1 = [5, 6, 7, 8, 1, 2, 12, 14]
// Before Sort
console.log('\n- Before Sort | Implementation using 2 for loops -')
console.log(array1)
// After Sort
console.log('- After Sort | Implementation using 2 for loops -')
console.log(bubbleSort(array1))
console.log('\n')

/*
*  Using a while loop and a for loop
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

  return arr
}

/*
*  Implementation of a while loop and a for loop method
*/
var array2 = [5, 6, 7, 8, 1, 2, 12, 14]
// Before Sort
console.log('\n- Before Sort | Implementation using a while loop and a for loop -')
console.log(array2)
// After Sort
console.log('- After Sort | Implementation using a while loop and a for loop -')
console.log(alternativeBubbleSort(array2))
console.log('\n')
