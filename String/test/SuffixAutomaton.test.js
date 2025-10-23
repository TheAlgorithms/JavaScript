import { countDistinctSubstrings, longestCommonSubstring } from '../SuffixAutomaton'

describe('Suffix Automaton - distinct substrings', () => {
  it('handles empty string', () => {
    expect(countDistinctSubstrings('')).toBe(0)
  })

  it('counts distinct substrings correctly', () => {
    expect(countDistinctSubstrings('aaa')).toBe(3)
    expect(countDistinctSubstrings('abc')).toBe(6)
    expect(countDistinctSubstrings('ababa')).toBe(9)
  })
})

describe('Suffix Automaton - longest common substring', () => {
  it('finds LCS of two strings', () => {
    expect(longestCommonSubstring('xabcdxyz', 'xyzabcd')).toBe('abcd')
    expect(longestCommonSubstring('hello', 'yellow')).toBe('ello')
  })

  it('returns empty when no common substring', () => {
    expect(longestCommonSubstring('abc', 'def')).toBe('')
  })
})