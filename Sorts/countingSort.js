/*
 * Counting sort is an algorithm for sorting a collection of objects according to keys that are small integers;
 * that is, it is an integer sorting algorithm.
 * more information: https://en.wikipedia.org/wiki/Counting_sort
 * counting sort visualization: https://www.cs.usfca.edu/~galles/visualization/CountingSort.html
 */

function countingSort(arr, min, max) {
  let i;
  let z = 0;
  const count = [];
  
  for (i = min; i <= max; i++) {
    count[i] = 0;
  }
  
  for (i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  
  for (i = min; i <= max; i++) {
    while (count[i]-- > 0) {
      arr[z++] = i;
    }
  }
  
  return arr;
}

const arr = [3, 0, 2, 5, 4, 1];

// Array before Sort
console.log("-----before sorting-----");
console.log(arr);
// Array after sort
console.log("-----after sorting-----");
console.log(countingSort(arr, 0, 5));
