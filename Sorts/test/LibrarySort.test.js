import { librarySort } from '../LibrarySort'

describe('Library Sort', () => {
  it('should sort an empty array', () => {
    const arr = [];
    librarySort(arr);
    expect(arr).toEqual([]);
  });

  it('should sort an array with one element', () => {
    const arr = [42];
    librarySort(arr);
    expect(arr).toEqual([42]);
  });

  it('should sort an already sorted array', () => {
    const arr = [1, 2, 3, 4, 5];
    librarySort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort an array with duplicates', () => {
    const arr = [5, 2, 2, 3, 1, 1, 4];
    librarySort(arr);
    expect(arr).toEqual([1, 1, 2, 2, 3, 4, 5]);
  });

  it('should sort a reverse-sorted array', () => {
    const arr = [5, 4, 3, 2, 1];
    librarySort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  it('should sort a large random array', () => {
    const arr = [9, 4, 7, 1, 2, 8, 3, 6, 5];
    librarySort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should throw an error for non-array input', () => {
    const nonArray = 'not an array';
    expect(() => librarySort(nonArray)).toThrow('Input is not an array.');
  });
});
