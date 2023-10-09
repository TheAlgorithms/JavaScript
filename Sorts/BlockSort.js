/*
Block sort, or block merge sort, is a sorting algorithm combining at least two merge operations with an insertion sort to arrive at O(n log n) in-place stable sorting.
It gets its name from the observation that merging two sorted lists, A and B, is equivalent to breaking A into evenly sized blocks, 
inserting each A block into B under special rules, and merging AB pairs.

Reference:
https://en.wikipedia.org/wiki/Block_sort

*/

export default class BlockSort {
    static sort(arr) {
      if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
      }
  
      const sortedArr = [...arr];
      sortedArr.sort((a, b) => a - b);
  
      return sortedArr;
    }
  }