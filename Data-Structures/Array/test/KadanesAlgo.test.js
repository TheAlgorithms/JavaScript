import { kadane } from '../KandanesAlgo.js'; // Adjust the path as necessary

describe('Kadane\'s Algorithm', () => {
  it('should return the maximum sum of a contiguous subarray', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    const expected = 6; // 4 + -1 + 2 + 1
    const result = kadane(nums);
    expect(result).toBe(expected);
  });

  // Add more test cases as needed
});
