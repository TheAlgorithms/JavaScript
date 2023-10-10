import sortStringByCharacterFrequency from "../SortStringByCharacterFrequency";

describe('sortStringByCharacterFrequency', () => {
  it('should sort a string by character frequency', () => {
    expect(sortStringByCharacterFrequency('banana')).toBe('aaabnn');
    expect(sortStringByCharacterFrequency('apple')).toBe('ppleae');
    expect(sortStringByCharacterFrequency('programming')).toBe('ggmmrrainop');
  });

  it('should handle an empty string', () => {
    expect(sortStringByCharacterFrequency('')).toBe('');
  });

  it('should handle a string with a single character', () => {
    expect(sortStringByCharacterFrequency('a')).toBe('a');
    expect(sortStringByCharacterFrequency('bbb')).toBe('bbb');
  });

  it('should handle special characters and spaces', () => {
    expect(sortStringByCharacterFrequency('a!b c')).toBe('   abc!');
  });
});