import { findLongestCommonSuffix } from "../LongestCommonSuffix";

describe('findLongestCommonSuffix', () => {
  it('should return an empty string for an empty array', () => {
    expect(findLongestCommonSuffix([])).toBe('');
  });

  it('should return an empty string if there is no common suffix', () => {
    expect(findLongestCommonSuffix(['apple', 'banana', 'cherry'])).toBe('');
  });

  it('should return the correct common suffix', () => {
    expect(findLongestCommonSuffix(['apple', 'pineapple', 'banana'])).toBe('e');
    expect(findLongestCommonSuffix(['running', 'swimming', 'jogging'])).toBe('g');
    expect(findLongestCommonSuffix(['car', 'bar', 'far'])).toBe('ar');
  });
  

  it('should handle different lengths of strings', () => {
    expect(findLongestCommonSuffix(['apple', 'app', 'ap'])).toBe('ap');
    expect(findLongestCommonSuffix(['hello', 'world', ''])).toBe('');
  });
});
