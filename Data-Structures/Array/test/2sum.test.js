import { twoSum } from '../2Sum.js'; // Adjust the path as necessary

describe('Two Sum', () => {
  it('should return indices of the two numbers such that they add up to a specific target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const expected = [0, 1];
    const result = twoSum(nums, target);
    expect(result).toEqual(expected);
  });

  // Add more test cases as needed
});
