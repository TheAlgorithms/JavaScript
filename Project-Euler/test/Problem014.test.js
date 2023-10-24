import { findLongestCollatzSequence } from '../Problem014.js'

describe('Longest Collatz Sequence', () => {
  test('sequence under 1', () => {
    expect(findLongestCollatzSequence(1)).toBe(1)
  })
  test('sequence under 10', () => {
    expect(findLongestCollatzSequence(10)).toBe(9)
  })
  test('sequence under 100', () => {
    expect(findLongestCollatzSequence(100)).toBe(97)
  })
  test('sequence under 1000', () => {
    expect(findLongestCollatzSequence(1000)).toBe(871)
  })
  test('sequence under 10000', () => {
    expect(findLongestCollatzSequence(10000)).toBe(6171)
  })
  test('sequence under 100000', () => {
    expect(findLongestCollatzSequence(100000)).toBe(77031)
  })
  // Project Euler Condition Check
  test('sequence under 1000000', () => {
    expect(findLongestCollatzSequence()).toBe(837799)
  })
})
