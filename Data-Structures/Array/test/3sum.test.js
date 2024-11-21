import { threeSum } from '../3sum.js'; // Adjust the path as necessary

describe('Three Sum', () => {
  it('should return all unique triplets that add up to zero', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const expected = [[-1, -1, 2], [-1, 0, 1]];
    const result = threeSum(nums);
    expect(result).toEqual(expected);
  });

  // Add more test cases as needed
});
