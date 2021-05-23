/**
 * Merge Sort is an algorithm where the main list is divided down into two half
 * sized lists, which then have merge sort called on these two smaller lists
 * recursively until there is only a sorted list of one.
 *
 * On the way up the recursive calls, the lists will be merged together inserting
 * the smaller value first, creating a larger sorted list.
 */

/**
 * Sort and merge two given arrays
 * @param {Array} list1 - sublist to break down
 * @param {Array} list2 - sublist to break down
 * @return {Array} merged list
 */
/*
*  Doctests
* > merge([5, 4],[ 1, 2, 3])
*  [1, 2, 3, 5, 4]
* > merge([],[1, 2])
*  [1, 2]
* > merge([1, 2, 3], [1])
*  [1, 1, 2, 3]
* > merge([], [])
*  []
*
* > mergeSort([5, 4])
*  [4, 5]
* > mergeSort([8, 4, 10, 15, 9])
*  [4, 8, 9, 10, 15]
* > mergeSort([1, 2, 3])
*  [1, 2, 3]
* > mergeSort([ ])
*  [ ]
*/

function merge (list1, list2) {
  const results = []
  let i = 0
  let j = 0

  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      results.push(list1[i++])
    } else {
      results.push(list2[j++])
    }
  }

  return results.concat(list1.slice(i), list2.slice(j))
}

/**
 * Break down the lists into smaller pieces to be merged
 * @param {Array} list - list to be sorted
 * @return {Array} sorted list
 */
function mergeSort (list) {
  if (list.length < 2) return list

  const listHalf = Math.floor(list.length / 2)
  const subList1 = list.slice(0, listHalf)
  const subList2 = list.slice(listHalf, list.length)

  return merge(mergeSort(subList1), mergeSort(subList2))
}

// Merge Sort Example
const unsortedArray = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
const sortedArray = mergeSort(unsortedArray)

console.log('Before:', unsortedArray, 'After:', sortedArray)
