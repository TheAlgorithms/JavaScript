/**
   * Jest tests for the sleepSort function.
   */
import sleepSort from '../SleepSort'; // Update the import path as needed

describe('sleepSort', () => {
  it('should return an empty array when given an empty array', async () => {
    const result = await sleepSort([]);
    expect(result).toEqual([]);
  });

  it('should sort the input array using sleep sort', async () => {
    const input = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const result = await sleepSort(input);
    const sortedInput = input.slice().sort((a, b) => a - b);
    expect(result).toEqual(sortedInput);
  });

  it('should handle duplicate values correctly', async () => {
    const input = [3, 2, 1, 9, 8, 4, 2];
    const result = await sleepSort(input);
    const sortedInput = input.slice().sort((a, b) => a - b);
    expect(result).toEqual(sortedInput);
  });
});

