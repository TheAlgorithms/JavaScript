import { MooreVotingAlgorithm } from '../MooreVotingAlgorithm'
describe('Moore Voting Algorithm', () => {
  it.each([
    [[1, 1, 2, 1, 3, 1, 1], 1], // Majority element 1
    [[2, 2, 2, 2, 5, 5, 5, 2], 2], // Majority element 2
    [[3], 3], // Single element, it's the majority
    [[1, 2, 3, 4, 5, 6, 7], null] // No majority element in the array
  ])('returns %j when given %j', (array, expected) => {
    expect(MooreVotingAlgorithm(array)).toEqual(expected)
  })
})
