import { expect } from 'vitest'
import { findLongestCollatzSequence } from '../Problem014.js'

describe('Longest Collatz Sequence', () => {
  test.each([
    [2, 1],
    [13, 9],
    [1000000, 837799]
  ])(
    'if limit is %i, then the Longest Collatz Sequence will be %i',
    (a, expected) => {
      expect(findLongestCollatzSequence(a)).toBe(expected)
    }
  )
})
