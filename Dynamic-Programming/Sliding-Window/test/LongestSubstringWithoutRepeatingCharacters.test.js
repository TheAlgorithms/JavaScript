import { LongestSubstringWithoutRepeatingCharacters } from '../LongestSubstringWithoutRepeatingCharacters.js'

describe('LongestSubstringWithoutRepeatingCharacters', () => {
  it('should return longest substring without repeating characters', () => {
    expect(LongestSubstringWithoutRepeatingCharacters('abcabcbb')).toEqual(3)
    expect(LongestSubstringWithoutRepeatingCharacters('bbbbb')).toEqual(1)
    expect(LongestSubstringWithoutRepeatingCharacters('pwwkew')).toEqual(3)
    expect(LongestSubstringWithoutRepeatingCharacters('a')).toEqual(1)
    expect(LongestSubstringWithoutRepeatingCharacters('')).toEqual(0)
  })
})
