import longestCommonPrefix from "../LongestCommonPrefix";

describe('longestCommonPrefix', () => {
  it('should return the longest common prefix for an array of strings', () => {
    const strings = ['flower', 'flour', 'flourish'];
    expect(longestCommonPrefix(strings)).toBe('flo');

    const strings2 = ['car', 'race', 'cat'];
    expect(longestCommonPrefix(strings2)).toBe('');

    const strings3 = ['apple', 'app', 'appetite'];
    expect(longestCommonPrefix(strings3)).toBe('app');
  });

  it('should handle edge cases', () => {
    // Test with an empty array
    expect(longestCommonPrefix([])).toBe('');

    // Test with a single string in the array
    expect(longestCommonPrefix(['hello'])).toBe('hello');

    // Test with null input
    expect(longestCommonPrefix(null)).toBe('');
  });
});
