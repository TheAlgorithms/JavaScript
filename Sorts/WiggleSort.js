/**
 * Wiggle Sort is a sorting algorithm that arranges elements of an array in a "wiggle" pattern.
 * Even-indexed elements are smaller or equal to their adjacent elements, and odd-indexed elements
 * are larger or equal to their adjacent elements.
 *
 * @param {number[]} arr - The array to be sorted in a wiggle pattern.
 * @returns {number[]} - The array sorted in a wiggle pattern.
 *
 * @example
 * const input = [3, 5, 2, 1, 6, 4];
 * const result = wiggleSort(input);
 * console.log(result); // Output: [1, 6, 2, 5, 3, 4]

  * Time Complexity: O(n log n)
 * - Sorting the array takes O(n log n) time using JavaScript's built-in sort method.
 * - Filling the result array takes O(n) time.
 *
 * Overall, the time complexity is dominated by the sorting step.
 *
 * Space Complexity: O(n)
 * - Additional space is required for the cloned array and the result array.
 * - The space complexity is O(n).
 */
export function wiggleSort(arr) {
  // Clone the input array to avoid modifying the original array
  const clonedArr = [...arr];

  // Sort the cloned array in ascending order
  clonedArr.sort((a, b) => a - b);

  // Create a new array to store the result
  const result = new Array(clonedArr.length);

  // Initialize pointers
  let left = 0;
  let right = clonedArr.length - 1;

  // Fill the result array with the wiggle-sorted values
  for (let i = 0; i < result.length; i++) {
    if (i % 2 === 0) {
      // Place smaller or equal values at even indices
      result[i] = clonedArr[left];
      left++;
    } else {
      // Place larger or equal values at odd indices
      result[i] = clonedArr[right];
      right--;
    }
  }

  return result;
}

/**
 * Jest tests for the wiggleSort function.
 */
describe("wiggleSort", () => {
  it("should return an empty array when given an empty array", () => {
    expect(wiggleSort([])).toEqual([]);
  });

  it("should sort the input array in a wiggle pattern", () => {
    expect(wiggleSort([3, 5, 2, 1, 6, 4])).toEqual([1, 6, 2, 5, 3, 4]);
    expect(wiggleSort([5, 3, 1, 2, 6, 4])).toEqual([1, 6, 2, 5, 3, 4]);
  });

  it("should handle duplicate values correctly", () => {
    expect(wiggleSort([3, 3, 3, 3, 3])).toEqual([3, 3, 3, 3, 3]);
    expect(wiggleSort([3, 3, 3, 2, 2, 1])).toEqual([2, 3, 2, 3, 1, 3]);
  });
});
