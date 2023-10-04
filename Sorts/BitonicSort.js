// Bitonic Sort is a parallel sorting algorithm that can be used to sort a sequence
// of numbers in ascending or descending order. It is based on the concept of
// bitonic sequences, which are sequences that first increase and then decrease
// or vice versa.

// Function to perform Bitonic Sort on an array
function bitonicSort(arr, ascending = true) {
  const n = arr.length;
  bitonicSortRecursive(arr, 0, n, ascending);
}

// Function to recursively perform Bitonic Sort
function bitonicSortRecursive(arr, low, count, ascending) {
  if (count > 1) {
    const k = count / 2;

    // Sort the first half in ascending order
    bitonicSortRecursive(arr, low, k, true);

    // Sort the second half in descending order
    bitonicSortRecursive(arr, low + k, k, false);

    // Merge the two sorted subarrays
    bitonicMerge(arr, low, count, ascending);
  }
}

// Function to merge two sorted subarrays in Bitonic Sort
function bitonicMerge(arr, low, count, ascending) {
  if (count > 1) {
    const k = greatestPowerOfTwoLessThan(count);
    for (let i = low; i < low + count - k; i++) {
      compareAndSwap(arr, i, i + k, ascending);
    }
    bitonicMerge(arr, low, k, ascending);
    bitonicMerge(arr, low + k, count - k, ascending);
  }
}

// Function to find the greatest power of two less than a number
function greatestPowerOfTwoLessThan(n) {
  let k = 1;
  while (k > 0 && k < n) {
    k = k * 2;
  }
  return k / 2;
}

// Function to compare and swap two elements in the array based on the sorting order
function compareAndSwap(arr, i, j, ascending) {
  if ((arr[i] > arr[j] && ascending) || (arr[i] < arr[j] && !ascending)) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

// Example usage
const arr = [3, 7, 4, 8, 6, 2, 1, 5];
console.log("Original Array:", arr);

// Perform Bitonic Sort on the array in ascending order
bitonicSort(arr);

console.log("Bitonic-Sorted Array in Ascending Order:", arr);

// Perform Bitonic Sort on the same array in descending order
bitonicSort(arr, false);

console.log("Bitonic-Sorted Array in Descending Order:", arr);
