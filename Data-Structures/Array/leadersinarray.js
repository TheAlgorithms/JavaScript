/**
 * [Leaders in an Array](https://www.geeksforgeeks.org/leaders-in-an-array/)
 *
 * A leader in an array is an element that is greater than or equal to
 * all the elements to its right.
 *
 * Example:
 *   Input:  [16, 17, 4, 3, 5, 2]
 *   Output: [17, 5, 2]
 *
 * Algorithm:
 * - Start from the rightmost element (which is always a leader).
 * - Traverse the array from right to left, keeping track of the maximum so far.
 * - If the current element is greater than or equal to that maximum, it is a leader.
 * - Reverse the list of leaders at the end to preserve original order.
 *
 * @complexity O(n) — each element is visited once.
 * @flow
 */

function leaders(arr) {
    const result = [];
    const n = arr.length;

    // Start with the rightmost element
    let maxRight = arr[n - 1];

    // Rightmost element is always a leader
    result.push(maxRight);

    // Traverse the array from right to left
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            maxRight = arr[i];
            result.push(maxRight);
        }
    }

    // Reverse the result array to maintain original order
    result.reverse();

    return result;
}

// Driver code
const arr = [16, 17, 4, 3, 5, 2];
const result = leaders(arr);
console.log(result.join(' '));
