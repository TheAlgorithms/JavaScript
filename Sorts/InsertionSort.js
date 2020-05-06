/* In insertion sort, we divide the initial unsorted array into two parts;
* sorted part and unsorted part. Initially the sorted part just has one
* element (Array of only 1 element is a sorted array). We then pick up
* element one by one from unsorted part; insert into the sorted part at
* the correct position and expand sorted part one element at a time.
*/
function insertionSort (unsortedList) {
  var len = unsortedList.length
  for (var i = 1; i < len; i++) {
    var tmp = unsortedList[i] // Copy of the current element.
    /* Check through the sorted part and compare with the number in tmp. If large, shift the number */
    for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
      // Shift the number
      unsortedList[j + 1] = unsortedList[j]
    }
    // Insert the copied number at the correct position
    // in sorted part.
    unsortedList[j + 1] = tmp
  }
}

var arr = [5, 3, 1, 2, 4, 8, 3, 8]
insertionSort(arr)
console.log(arr)
