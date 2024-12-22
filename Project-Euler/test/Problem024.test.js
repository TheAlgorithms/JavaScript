import { describe, it, expect } from 'vitest'
import { findNthLexicographicPermutation } from '../Problem024'

describe('findNthLexicographicPermutation', () => {
  it('should return the correct permutation for small cases', () => {
    expect(findNthLexicographicPermutation([0, 1, 2], 1)).toBe('012')
    expect(findNthLexicographicPermutation([0, 1, 2], 2)).toBe('021')
    expect(findNthLexicographicPermutation([0, 1, 2], 6)).toBe('210')
  })

  it('should return the correct 1st permutation for digits 0-9', () => {
    expect(
      findNthLexicographicPermutation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1)
    ).toBe('0123456789')
  })

  it('should return the correct millionth permutation for digits 0-9', () => {
    expect(
      findNthLexicographicPermutation([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 1000000)
    ).toBe('2783915460')
  })

  it('should return the correct permutation for a smaller set of digits', () => {
    expect(findNthLexicographicPermutation([1, 2, 3, 4], 12)).toBe('2431')
    expect(findNthLexicographicPermutation([1, 2, 3, 4], 24)).toBe('4321')
  })

  it('should handle large values of n', () => {
    expect(findNthLexicographicPermutation([0, 1, 2, 3, 4], 120)).toBe('43210')
  })
})
