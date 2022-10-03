/* Bubble Sort is an algorithm to sort an array. It
*  compares adjacent element and swaps their position
*  The big O on bubble sort in worst and best case is O(N^2).
*  Not efficient.
*  Somehow if the array is sorted or nearly sorted then we can optimize bubble sort by adding a flag.
*
*  In bubble sort, we keep iterating while something was swapped in
*  the previous inner-loop iteration. By swapped I mean, in the
*  inner loop iteration, we check each number if the number proceeding
*  it is greater than itself, if so we swap them.
*
*  documented: https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/
*  Wikipedia: https://en.wikipedia.org/wiki/Bubble_sort
*  Animated Visual: https://www.toptal.com/developers/sorting-algorithms/bubble-sort
*/

/**
 * Using 2 for loops.
 */
export function bubbleSort (items) {
  const length = items.length
  let noSwaps

  for (let i = length; i > 0; i--) {
    // flag for optimization
    noSwaps = true
    // Number of passes
    for (let j = 0; j < (i - 1); j++) {
      // Compare the adjacent positions
      if (items[j] > items[j + 1]) {
        // Swap the numbers
        [items[j], items[j + 1]] = [items[j + 1], items[j]]
        noSwaps = false
      }
    }
    if (noSwaps) {
      break
    }
  }

  return items
}

/**
 * Using a while loop and a for loop.
 */
export function alternativeBubbleSort (arr) {
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

/* bubble sort using two for loops and no boolean terms
 */
// Creating the bblSort function

 function bblSort(arr){
    
 for(var i = 0; i < arr.length; i++){
    
   // Last i elements are already in place 
   for(var j = 0; j < ( arr.length - i -1 ); j++){
      
     // Checking if the item at present iteration
     // is greater than the next iteration
     if(arr[j] > arr[j+1]){
        
       // If the condition is true then swap them
       var temp = arr[j]
       arr[j] = arr[j + 1]
       arr[j+1] = temp
     }
   }
 }
 // Print the sorted array
 console.log(arr);
}
