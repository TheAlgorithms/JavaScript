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
function merge(list1, list2) {
  var results = [];

  while(list1.length && list2.length) {
    if (list1[0] <= list2[0]) {
      results.push(list1.shift());
    } else {
      results.push(list2.shift());
    }
  }
  return results.concat(list1, list2);
}

/**
 * Break down the lists into smaller pieces to be merged
 * @param {Array} list - list to be sorted
 * @return {Array} sorted list
 */
function mergeSort(list) {
  if (list.length < 2) return list;

  var listHalf = Math.floor(list.length/2);
  var subList1 = list.slice(0, listHalf);
  var subList2 = list.slice(listHalf, list.length);

  return merge(mergeSort(subList1), mergeSort(subList2));
}

// Merge Sort Example
var unsortedArray = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
var sortedArray = mergeSort(unsortedArray);

console.log('Before:', unsortedArray, 'After:', sortedArray);

