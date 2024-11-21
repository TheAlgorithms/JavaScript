// threeSum.js

/**
 * Time Complexity: O(n^2) — The outer loop runs in O(n), and the inner two-pointer approach runs in O(n).
Space Complexity: O(1) — The output list is the only extra space used (not counting input).
 * 
 * 
 * Finds all unique triplets in the array that sum up to zero.
 * @param {number[]} nums - An array of numbers.
 * @returns {number[][]} - A list of unique triplets.
 */
function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate values
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++; // Skip duplicates
                while (left < right && nums[right] === nums[right - 1]) right--; // Skip duplicates
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result; // Return the list of triplets
}

export { threeSum }