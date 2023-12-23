/**
 * Library Sort is an in-place, unstable sorting algorithm.
 *
 * @param {Array} arr - The input array to be sorted.
 */
function librarySort(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input is not an array.');
    }
  
    const n = arr.length;
  
    if (n <= 1) {
      return;
    }
  
    let gap = 1;
    while (gap < n) {
      gap *= 2;
    }
  
    gap = Math.floor(gap / 2);
  
    while (gap > 0) {
      for (let i = gap; i < n; i++) {
        const temp = arr[i];
        let j = i;
  
        while (j >= gap && arr[j - gap] > temp) {
          arr[j] = arr[j - gap];
          j -= gap;
        }
  
        arr[j] = temp;
      }
  
      gap = Math.floor(gap / 2);
    }
  }
  
  // Export the librarySort function
  module.exports = librarySort;
  