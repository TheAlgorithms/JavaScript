import BlockSort from "../BlockSort";

describe('BlockSort', () => {
  it('should sort an empty array', () => {
    const input = [];
    const expected = [];
    const result = BlockSort.sort(input);
    expect(result).toEqual(expected);
  });

  it('should sort an array with one element', () => {
    const input = [1];
    const expected = [1];
    const result = BlockSort.sort(input);
    expect(result).toEqual(expected);
  });

  it('should sort an array with multiple elements', () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const expected = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    const result = BlockSort.sort(input);
    expect(result).toEqual(expected);
  });

  it('should throw an error for non-array input', () => {
    const input = 'invalid';
    expect(() => BlockSort.sort(input)).toThrow('Input must be an array');
  });
})