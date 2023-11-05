/**
 * @see https://www.geeksforgeeks.org/partition-problem-dp-18/
 * Divides the given array into two subsets such that the difference between their sums is minimized.
 * @param {number[]} arr - The array of integers.
 * @returns {Array.<number[]>} Two subsets with minimized sum difference.
 */

function partition(arr) {
  const totalSum = arr.reduce((a, b) => a + b, 0);
  const targetSum = totalSum / 2; // The target sum for each subset
  let minimumDiff = totalSum;
  let result = [[], []];

  function recurse(subset = [], index = 0, currentSum = 0) {
    if (index === arr.length) {
      const otherSubsetSum = totalSum - currentSum;
      const currentDiff = Math.abs(currentSum - otherSubsetSum);

      if (currentDiff < minimumDiff) {
        minimumDiff = currentDiff;
        result = [subset, arr.filter((x) => !subset.includes(x))];
      }

      return;
    }

    // Include the current element if it doesn't exceed the target sum
    if (currentSum + arr[index] <= targetSum) {
      recurse([...subset, arr[index]], index + 1, currentSum + arr[index]);
    }

    // Exclude the current element
    recurse([...subset], index + 1, currentSum);
  }

  recurse();
  return result;
}

export default partition;