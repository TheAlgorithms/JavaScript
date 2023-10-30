/**
 * @see https://www.geeksforgeeks.org/tug-of-war/
 * Divides the given array into two subsets such that the difference between their sums is minimized.
 * @param {number[]} arr - The array of integers.
 * @returns {Array.<number[]>} Two subsets with minimized sum difference.
 */

function tugOfWar(arr) {
    const totalSum = arr.reduce((a, b) => a + b, 0);
    let minimumDiff = totalSum;
    let result = [arr, []];

    function backtrack(subset = [], index = 0) {
        if (index === arr.length) {
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
        backtrack([...subset, arr[index]], index + 1);
        
        // Exclude the current element.
        backtrack([...subset], index + 1);
    }

    backtrack();
    return result;
}

export { tugOfWar };