import { findLongestCollatzSequence } from '../Problem014.js'

describe('Longest Collatz Sequence', () => {
  test('if limit is 2', () => {
    expect(findLongestCollatzSequence(2)).toBe(1)
  })
  test('if limit is 13', () => {
    expect(findLongestCollatzSequence(13)).toBe(9)
  })
  // Project Euler Condition Check
  test('if limit is 1000000', () => {
    expect(findLongestCollatzSequence(1000000)).toBe(837799)
  })
})
