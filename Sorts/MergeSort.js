/*
 * MergeSort implementation.
 *
 * Merge Sort is an algorithm where the main list is divided down into two half sized lists, which then have merge sort
 * called on these two smaller lists recursively until there is only a sorted list of one.
 *
 * On the way up the recursive calls, the lists will be merged together inserting
 * the smaller value first, creating a larger sorted list.
 */

/**
 * Sort and merge two given arrays.
 *
 * @param {Array} list1 Sublist to break down.
 * @param {Array} list2 Sublist to break down.
 * @return {Array} The merged list.
 */
export function merge (list1, list2) {
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
 * Break down the lists into smaller pieces to be merged.
 *
 * @param {Array} list List to be sorted.
 * @return {Array} The sorted list.
 */
export function mergeSort (list) {
  if (list.length < 2) return list

  const listHalf = Math.floor(list.length / 2)
  const subList1 = list.slice(0, listHalf)
  const subList2 = list.slice(listHalf, list.length)

  return merge(mergeSort(subList1), mergeSort(subList2))
}
