/*

    * JS program for bitonic sort
    * Bitonic Sort is a parallel sorting algorithm that works by dividing the
    array into two parts, recursively sorting them, and then merging them in a
    specific way.
    * more information: https://en.wikipedia.org/wiki/Bitonic_sorter

    */
function compAndSwap (a, i, j, order) {
  if ((a[i] > a[j] && order === 1) || (a[i] < a[j] && order === 0)) {
    // Swapping elements
    const temp = a[i]
    a[i] = a[j]
    a[j] = temp
  }
}

// It recursively sorts a bitonic sequence in ascending
// order, if order = 1
function bitonicMergeArr (a, low, cnt, dir) {
  if (cnt > 1) {
    const k = parseInt(cnt / 2)
    for (let i = low; i < low + k; i++) { compAndSwap(a, i, i + k, dir) }
    bitonicMergeArr(a, low, k, dir)
    bitonicMergeArr(a, low + k, k, dir)
  }
}

function bitonicSort (a, low, cnt, order) { // (arr 0 arrLen AS-Ds-order)
  if (cnt > 1) {
    const k = parseInt(cnt / 2)

    // sort in ascending order since order here is 1
    bitonicSort(a, low, k, 1)

    // sort in descending order since order here is 0
    bitonicSort(a, low + k, k, 0)

    // Will merge whole sequence in ascending order
    // since dir=1.
    bitonicMergeArr(a, low, cnt, order)
  }
}

// Calling of bitonicSort func for sorting the entire array
// of length N in ASCENDING order
// here up=1 for ASCENDING & up=0 for DESCENDING
function sort (a, N, up) {
  bitonicSort(a, 0, N, up)
}

// displaying array
function logArray (arr) {
  for (let i = 0; i < arr.length; ++i) { console.log(arr[i] + ' ') }
}

export { sort }

// Test Case method
const a = [4, 16, 8, 0, 100]
const up = 1 // change to 0 for Descending
sort(a, a.length, up)
console.log('Sorted array: ')
logArray(a)

/** Output:
     * Sorted array:
        0
        4
        8
        16
        100
     */
