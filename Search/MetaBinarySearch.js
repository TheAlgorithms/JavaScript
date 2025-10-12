/**
 * Meta Binary Search (also known as One-Pass Binary Search)
 *
 * This algorithm uses bit manipulation to perform a binary search
 * in a single pass without using recursion or a traditional loop-based binary search.
 *
 * It works on sorted arrays by progressively checking bits of the index
 * and narrowing down the possible position of the target element.
 *
 * Time Complexity: O(log N)
 * Space Complexity: O(1)
 *
 * @param {number[]} arr - A sorted array to search within.
 * @param {number} target - The element to search for.
 * @returns {number} - Index of the target if found, otherwise -1.
 */

function metaBinarySearch(arr, target) {
  let n = arr.length;
  if (n === 0) return -1;

  // Get the highest power of 2 less than or equal to n
  let pos = 0;
  let bit = 1 << Math.floor(Math.log2(n));

  while (bit > 0) {
    let newPos = pos | bit; // test the bit
    if (newPos < n && arr[newPos] <= target) {
      pos = newPos; // move to that position
    }
    bit >>= 1; // move to the next bit
  }

  return arr[pos] === target ? pos : -1;
}

export { metaBinarySearch };

// Example usage:
// console.log(metaBinarySearch([1, 3, 5, 7, 9, 11], 7)); // Output: 3
