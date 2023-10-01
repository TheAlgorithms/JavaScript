import { lengthOfLongestSubstring } from '../LengthofLongestSubstringWithoutRepetition';

describe('Testing the lengthOfLongestSubstring function', () => {
  it('Test 1: Check by invalid type', () => {
    expect(() => lengthOfLongestSubstring(345)).toThrowError(TypeError);
    expect(() => lengthOfLongestSubstring(true)).toThrowError(TypeError);
    expect(() => lengthOfLongestSubstring(null)).toThrowError(TypeError);
  });

  it('Test 2: Check with strings containing unique characters', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('Test 3: Check with empty string', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('Test 4: Check with string containing a single space', () => {
    expect(lengthOfLongestSubstring(' ')).toBe(1);
  });

  it('Test 5: Check with mixed case string', () => {
    expect(lengthOfLongestSubstring('AaBbCc')).toBe(3);
    expect(lengthOfLongestSubstring('AbCdEf')).toBe(6);
  });

  it('Test 6: Check with long string with repeating characters', () => {
    expect(lengthOfLongestSubstring('abcdefghijklmnaaaaa')).toBe(13);
  });
});
