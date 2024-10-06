// twoSum.js

/**
 * 
 * Time Complexity: O(n) — We traverse the list once while storing elements in a hash map.
Space Complexity: O(n) — In the worst case, we store all elements in the hash map.


 * Finds indices of the two numbers such that they add up to a specific target.
 * @param {number[]} nums - An array of numbers.
 * @param {number} target - The target sum.
 * @returns {number[]|null} - Indices of the two numbers or null if not found.
 */
export function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    
    return null; // No two sum solution
}
