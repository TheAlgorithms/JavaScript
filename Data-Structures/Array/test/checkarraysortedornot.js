/**
 * [Check if Array is Sorted](https://www.geeksforgeeks.org/check-if-an-array-is-sorted-in-ascending-order/)
 *
 * This function checks whether a given array is sorted in non-decreasing (ascending) order.
 *
 * Algorithm:
 * - Traverse the array from the second element onward.
 * - Compare each element with its previous one.
 * - If any element is smaller than its predecessor, the array is not sorted.
 * - Otherwise, if no such pair exists, the array is sorted.
 *
 * Example:
 *   Input:  [10, 20, 30, 40, 50]
 *   Output: true
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {boolean} true if the array is sorted in ascending order, false otherwise.
 * @complexity O(n) — each element is checked once.
 * @flow
 */

function isSorted(arr) {
    let n = arr.length;

    // Iterate over the array and check if
    // every element is greater than or equal to previous element.
    for (let i = 1; i < n; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }

    return true;
}

// Driver Code
let arr = [10, 20, 30, 40, 50];
let n = arr.length;

if (isSorted(arr)) {
    console.log("true");
} else {
    console.log("false");
}
