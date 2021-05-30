/**
 * Counting sort is an algorithm for sorting a collection
 * of objects according to keys that are small integers.
 *
 * It is an integer sorting algorithm.
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Counting_sort
 * Animated Visual: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html
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

/**
* Implementation of Counting Sort
*/
const array = [3, 0, 2, 5, 4, 1]
// Before Sort
console.log('\n- Before Sort | Implementation of Counting Sort -')
console.log(array)
// After Sort
console.log('- After Sort | Implementation of Counting Sort -')
console.log(countingSort(array,0,5))
console.log('\n')
