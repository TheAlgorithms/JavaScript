// Explanation:- https://www.geeksforgeeks.org/recursive-c-program-linearly-search-element-given-array/

/**
 * Recursive Linear Search
 *
 * This function searches for a key within an array using a recursive approach.
 *
 * @param {Array} arr - The array to search within.
 * @param {*} key - The element to search for.
 * @param {number} index - (Optional) The current index being checked in the array (default is 0).
 * @returns {number} - The index of the element if found, or -1 if not found.
 */
function recursiveLinearSearch (arr, key, index = 0) {
  // Base case: If we have searched the entire array and haven't found the key, return -1.
  if (index === arr.length) {
    return -1;
  }

  // Base case: If the current element matches the key, return its index.
  if (arr[index] === key) {
    return index;
  }

  // Recursive case: Continue searching in the rest of the array.
  return recursiveLinearSearch(arr, key, index + 1);
}

export { recursiveLinearSearch };
