import { lengthOfLongestSubstring } from '../LengthofLongestSubstringWithoutRepetition'

describe('LengthOfLongestSubstring', () => {
  it('should throw error if parameter is not string', () => {
    expect(() => lengthOfLongestSubstring(345)).toThrowError(TypeError)
    expect(() => lengthOfLongestSubstring(true)).toThrowError(TypeError)
    expect(() => lengthOfLongestSubstring(null)).toThrowError(TypeError)
  })

  it('should check substrings containing unique characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
    expect(lengthOfLongestSubstring(' ')).toBe(1)
    expect(lengthOfLongestSubstring('abcdefghijklmnaaaaa')).toBe(14)
  })

  it('should give zero for empty strings', () => {
    expect(lengthOfLongestSubstring('')).toBe(0)
  })

  it('should be case-sensitive', () => {
    expect(lengthOfLongestSubstring('AaBbCc')).toBe(6)
    expect(lengthOfLongestSubstring('AbCdEf')).toBe(6)
  })
})
