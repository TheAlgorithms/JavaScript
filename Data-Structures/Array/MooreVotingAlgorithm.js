/**
 * Moore Voting Algorithm to find the majority element in an array
 * Majority element is the one that appears more than n/2 times
 * geeksforgeeks: https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/
 * @param {Array} arr array of integers
 * @returns {Number} majority element or null if no majority exists
 */
const MooreVotingAlgorithm = (arr) => {
  let candidate = null
  let count = 0

  // Phase 1: Find the candidate for majority element
  for (let num of arr) {
    if (count === 0) {
      candidate = num
    }
    count += num === candidate ? 1 : -1
  }

  // Phase 2: Verify if the candidate is actually the majority element
  count = 0
  for (let num of arr) {
    if (num === candidate) {
      count++
    }
  }
  return count > arr.length / 2 ? candidate : null
}
export { MooreVotingAlgorithm }
