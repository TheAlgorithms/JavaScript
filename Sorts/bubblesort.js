/*Bubble Sort is a algorithm to sort an array. It
* compares adjacent element and swaps thier position
* The big O on bubble sort in worst and best case is O(N^2). 
 * Not efficient.
*/
function bubbleSort(items) {
    var length = items.length;
    for (var i = (length - 1); i >= 0; i--) {
        //Number of passes
        for (var j = (length - i); j > 0; j--) {
            //Compare the adjacent positions
            if (items[j] < items[j - 1]) {
                //Swap the numbers
                var tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
}

//Implementation of bubbleSort

var ar=[5,6,7,8,1,2,12,14];
//Array before Sort
console.log(ar);
bubbleSort(ar);
//Array after sort
console.log(ar);

/*alternative implementation of bubble sort algorithm.
 Using a while loop instead. For educational purposses only
 */
/*
*In bubble sort, we keep iterating while something was swapped in
*the previous inner-loop iteration. By swapped I mean, in the 
*inner loop iteration, we check each number if the number proceeding 
*it is greater than itself, if so we swap them.
*/

function bubbleSort(arr){
    var swapped = true;
    while(swapped){
        var swapped = false;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] > arr[i + 1]){
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return arr;
}

//test
console.log("-----before sorting-----")
var array = [10,5,3,8,2,6,4,7,9,1];
console.log(array);
console.log("-----after sorting-----")
console.log(bubbleSort(array));


