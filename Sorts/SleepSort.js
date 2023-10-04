/**
 * Sleep Sort is a sorting algorithm that sorts an array of non-negative integers.
 * It works by "sleeping" for a duration proportional to each element's value.
 * Elements with smaller values will "wake up" earlier and appear earlier in the sorted result.
 *
 * @param {number[]} arr - The array of non-negative integers to be sorted.
 * @returns {Promise<number[]>} - A Promise that resolves to the sorted array.
 *
 * @example
 * const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
 * sleepSort(input).then((result) => {
 *   console.log(result); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
 * });
 *
 * Time Complexity: O(k * n)
 * - k is the maximum value in the input array.
 * - Sleeping for each element takes O(k) time, and there are n elements in the array.
 * - Therefore, the time complexity is O(k * n).
 *
 * Space Complexity: O(n)
 * - Additional space is required for the result array, which has n elements.
 * - The space complexity is O(n).
 */

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function sleepSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array.');
  }

  const sortedArray = [];
  const promises = [];

  for (const num of arr) {
    promises.push(new Promise(resolve => {
      setTimeout(async () => {
        sortedArray.push(num);
        resolve();
      }, num);
    }));
  }

  await Promise.all(promises);
  return sortedArray.sort((a, b) => a - b);
}

export default sleepSort;


