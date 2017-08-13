/*The selection sort algorithm sorts an array by repeatedly finding the minimum element
 *(considering ascending order) from unsorted part and putting it at the beginning. The
 *algorithm maintains two subarrays in a given array.
 *1) The subarray which is already sorted.
 *2) Remaining subarray which is unsorted.
 *
 *In every iteration of selection sort, the minimum element (considering ascending order)
 *from the unsorted subarray is picked and moved to the sorted subarray.
 */
function selectionSort(items) {
  var length = items.length;
  for (var i = 0; i < length - 1; i++) {
    //Number of passes
    var min = i; //min holds the current minimum number position for each pass; i holds the Initial min number
    for (var j = i + 1; j < length; j++) { //Note that j = i + 1 as we only need to go through unsorted array
      if (items[j] < items[min]) { //Compare the numbers
        min = j; //Change the current min number position if a smaller num is found
      }
    }
    if (min != i) {
      //After each pass, if the current min num != initial min num, exchange the position.
      //Swap the numbers
      var tmp = items[i];
      items[i] = items[min];
      items[min] = tmp;
    }
  }
}

//Implementation of bubbleSort

var ar = [5, 6, 7, 8, 1, 2, 12, 14];
//Array before Sort
console.log(ar);
selectionSort(ar);
//Array after sort
console.log(ar);
