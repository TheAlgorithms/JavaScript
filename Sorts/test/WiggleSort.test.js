/**
 * Jest tests for the wiggleSort function.
 */

import { wiggleSort } from '../WiggleSort';

describe('wiggleSort', () => {
  it('should return an empty array when given an empty array', () => {
    expect(wiggleSort([])).toEqual([]);
  });

  it('should sort the input array in a wiggle pattern', () => {
    expect(wiggleSort([3, 5, 2, 1, 6, 4])).toEqual([1, 6, 2, 5, 3, 4]);
    expect(wiggleSort([5, 3, 1, 2, 6, 4])).toEqual([1, 6, 2, 5, 3, 4]);
  });

  it('should handle duplicate values correctly', () => {
    expect(wiggleSort([3, 3, 3, 3, 3])).toEqual([3, 3, 3, 3, 3]);
    expect(wiggleSort([3, 3, 3, 2, 2, 1])).toEqual([2, 3, 2, 3, 1, 3]);
  });
});
