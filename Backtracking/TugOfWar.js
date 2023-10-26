// https://www.geeksforgeeks.org/tug-of-war/

// Given an array of n integers, we need to divide them into two subsets such that 
// the difference between their sums is minimized.

/**
 * @param {number[]} arr - The array of integers.
 * @returns {Array.<number[]>} Two subsets with minimized sum difference.
 */


function tugOfWar(arr) {
    const n = arr.length;
    let totalSum = arr.reduce((a, b) => a + b, 0);
    let minimumDiff = Number.MAX_VALUE;
    let result = [];

    function isSafe(index, subset) {
        return index < n;
    }

    function backtrack(subset = [], index = 0) {
        if (index === n) {
            const currentSubsetSum = subset.reduce((a, b) => a + b, 0);
            const otherSubsetSum = totalSum - currentSubsetSum;
            const currentDiff = Math.abs(currentSubsetSum - otherSubsetSum);

            if (currentDiff < minimumDiff) {
                minimumDiff = currentDiff;
                result = [subset, arr.filter(x => !subset.includes(x))];
            }
            return;
        }

        // Include the current element.
        if (isSafe(index, subset)) {
            backtrack([...subset, arr[index]], index + 1);
        }

        // Exclude the current element.
        if (isSafe(index, subset)) {
            backtrack([...subset], index + 1);
        }
    }

    backtrack();
    return result;
}

export { tugOfWar };
