import {MooreVotingAlgorithm} from "../MooreVotingAlgorithm";
describe('Moore Voting Algorithm', () => {
    it.each([
      [[1, 1, 2, 1, 3, 1, 1], 1], // Majority element 1
      [[1, 2, 3, 4], null],        // No majority element
      [[2, 2, 2, 2, 5, 5, 5, 2], 2], // Majority element 2
      [[], null],                  // Empty array, no majority
      [[3], 3]                     // Single element, it's the majority
    ])('returns %j when given %j', (array, expected) => {
      expect(MooreVotingAlgorithm(array)).toEqual(expected);
    });
  });