
// kadanesAlgorithm.js

/**
 * 
 * 
 * Time Complexity: O(n) — The algorithm processes each element of the array once.
Space Complexity: O(1) — Only a constant amount of additional space is used.


 * Finds the maximum sum of a contiguous subarray using Kadane's Algorithm.
 * @param {number[]} nums - An array of numbers.
 * @returns {number} - The maximum sum of the contiguous subarray.
 */
function kadane(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar; // Return the maximum sum
}

export { kadane }