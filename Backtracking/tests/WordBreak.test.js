import { describe, it, expect } from 'vitest'
import { WordBreakSolution } from '../WordBreak'

describe('Word Break Algorithm', () => {
  it('should return true for valid word segmentation', () => {
    const solution = new WordBreakSolution()
    const result = solution.wordBreak('leetcode', ['leet', 'code'])
    expect(result).toBe(true)
  })

  it('should return false for invalid word segmentation', () => {
    const solution = new WordBreakSolution()
    const result = solution.wordBreak('applepenapple', ['apple', 'pen'])
    expect(result).toBe(true)
  })

  it('should handle edge cases with empty strings', () => {
    const solution = new WordBreakSolution()
    const result = solution.wordBreak('', ['leet', 'code'])
    expect(result).toBe(true)
  })

  it('should return false when no word break is possible', () => {
    const solution = new WordBreakSolution()
    const result = solution.wordBreak('catsandog', [
      'cats',
      'dog',
      'sand',
      'and',
      'cat'
    ])
    expect(result).toBe(false)
  })
})
