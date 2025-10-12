/**
 * Meta Binary Search (also known as One-Pass Binary Search)
 *
 * Reference: https://www.geeksforgeeks.org/meta-binary-search-one-pass-binary-search/
 *
 * Works on sorted arrays by using bit manipulation to perform binary search in a single pass.
 * Time Complexity: O(log N)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr - A sorted array.
 * @param {number} target - The element to search for.
 * @returns {number} - Index of the target if found, otherwise -1.
 */
function MetaBinarySearch(arr, target) {
  const n = arr.length;
  if (n === 0) return -1;

  let pos = -1;
  for (let bit = Math.floor(Math.log2(n)); bit >= 0; bit--) {
    const newPos = pos + (1 << bit);
    if (newPos < n && arr[newPos] <= target) {
      pos = newPos;
    }
  }

  return arr[pos] === target ? pos : -1;
}

export {MetaBinarySearch };


// Example usage:
// console.log(metaBinarySearch([1, 3, 5, 7, 9, 11], 7)); // Output: 3
