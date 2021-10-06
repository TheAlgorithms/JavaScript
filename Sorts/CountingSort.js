/**
 * Counting sort is an algorithm for sorting a collection
 * of objects according to keys that are small integers.
 *
 * It is an integer sorting algorithm.
 *
 * Wikipedia: https://en.wikipedia.org/wiki/Counting_sort
 * Animated Visual: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html
 */

const countingSort = (arr, min, max) => {
  // Create an auxiliary resultant array
  const res = []
  // Create and initialize the frequency[count] array
  const count = new Array(max - min + 1).fill(0)
  // Populate the freq array
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++
  }
  // Create a prefix sum array out of the frequency[count] array
  count[0] -= 1
  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1]
  }
  // Populate the result array using the prefix sum array
  for (let i = arr.length - 1; i >= 0; i--) {
    res[count[arr[i] - min]] = arr[i]
    count[arr[i] - min]--
  }
  return res
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
console.log(countingSort(array, 0, 5))
console.log('\n')
