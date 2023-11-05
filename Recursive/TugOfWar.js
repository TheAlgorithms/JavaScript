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

  function recurse(subset, index, size1, size2) {
    if (index === arr.length) {
      if (Math.abs(size1 - size2) < minimumDiff) {
        minimumDiff = Math.abs(size1 - size2);
        result = [subset.slice(), arr.filter((x) => !subset.includes(x))];
      }
      return;
    }

    // Include the current element in the first subset if it doesn't exceed the other subset's size.
    if (size1 + 1 <= size2 + (arr.length - index)) {
      subset.push(arr[index]);
      recurse(subset, index + 1, size1 + 1, size2);
      subset.pop();
    }

    // Include the current element in the second subset if it doesn't exceed the other subset's size.
    if (size2 + 1 <= size1 + (arr.length - index)) {
      recurse(subset, index + 1, size1, size2 + 1);
    }
  }

  recurse([], 0, 0, 0);
  return result;
}

export { tugOfWar };
