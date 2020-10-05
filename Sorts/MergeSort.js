/**
 * @function
 * Merge Sort is an algorithm where the main list is divided down into two half
 * sized lists, which then have merge sort called on these two smaller lists
 * recursively until there is only a sorted list of one.
 * Break down the lists into smaller pieces to be merged
 * @param {Array} list - list to be sorted
 * @param {Number} left - left index
 * @param {Number} right - right index
 * @see
 */
function MergeSort (list, left, right) {
  if (left >= right) return
  const mid = Math.floor(left + (right - left) / 2)
  MergeSort(list, left, mid)
  MergeSort(list, mid + 1, right)
  Merge(list, left, mid, right)
}

/**
 * On the way up the recursive calls, the lists will be merged together inserting
 * the smaller value first, creating a larger sorted list.
 * Sort and merge two given arrays
 * @param {Array} array - array to be sorted
 * @param {Number} left - left index of partition
 * @param {Number} mid - mid index of partition
 * @param {Number} right - right index of partition
 * @return {Array} merged list
*/
function Merge (array, left, mid, right) {
  const len1 = mid - left + 1
  const len2 = right - mid
  const larr = Array(len1)
  const rarr = Array(len2)
  for (let i = 0; i < len1; i++) {
    larr[i] = array[left + i]
  }
  for (let i = 0; i < len2; i++) {
    rarr[i] = array[mid + 1 + i]
  }
  let i = 0; let j = 0; let k = left
  while (i < larr.length && j < rarr.length) {
    if (larr[i] < rarr[j]) {
      array[k++] = larr[i++]
    } else {
      array[k++] = rarr[j++]
    }
  }
  while (i < larr.length) {
    array[k++] = larr[i++]
  }
  while (j < rarr.length) {
    array[k++] = rarr[j++]
  }
}

(function demo () {
  const unsortedArray = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1]
  const size = unsortedArray.length
  MergeSort(unsortedArray, 0, size - 1)
  console.log(unsortedArray)
})()
