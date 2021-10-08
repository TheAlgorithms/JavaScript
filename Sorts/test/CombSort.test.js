import { combSort } from '../CombSort'

describe('combSort function', () => {
  it('should correctly sort an input list that is sorted backwards', () => {
    const array = [5, 4, 3, 2, 1]
    expect(combSort(array)).toEqual([1, 2, 3, 4, 5])
  })

  it('should correctly sort an input list that is unsorted', () => {
    const array = [15, 24, 3, 2224, 1]
    expect(combSort(array)).toEqual([1, 3, 15, 24, 2224])
  })

  describe('Variations of input array lengths', () => {
    it('should return an empty list with the input list is an empty list', () => {
      expect(combSort([])).toEqual([])
    })

    it('should correctly sort an input list of length 1', () => {
      expect(combSort([100])).toEqual([100])
    })

    it('should correctly sort an input list of an odd length', () => {
      expect(combSort([101, -10, 321])).toEqual([-10, 101, 321])
    })

    it('should correctly sort an input list of an even length', () => {
      expect(combSort([40, 42, 56, 45, 12, 3])).toEqual([3, 12, 40, 42, 45, 56])
    })
  })

  describe('Variations of input array elements', () => {
    it('should correctly sort an input list that contains only positive numbers', () => {
      expect(combSort([50, 33, 11, 2])).toEqual([2, 11, 33, 50])
    })

    it('should correctly sort an input list that contains only negative numbers', () => {
      expect(combSort([-1, -21, -2, -35])).toEqual([-35, -21, -2, -1])
    })

    it('should correctly sort an input list that contains only a mix of positive and negative numbers', () => {
      expect(combSort([-40, 42, 56, -45, 12, -3])).toEqual([-45, -40, -3, 12, 42, 56])
    })

    it('should correctly sort an input list that contains only whole numbers', () => {
      expect(combSort([11, 3, 12, 4, -15])).toEqual([-15, 3, 4, 11, 12])
    })

    it('should correctly sort an input list that contains only decimal numbers', () => {
      expect(combSort([1.0, 1.42, 2.56, 33.45, 13.12, 2.3])).toEqual([1.0, 1.42, 2.3, 2.56, 13.12, 33.45])
    })

    it('should correctly sort an input list that contains only a mix of whole and decimal', () => {
      expect(combSort([32.40, 12.42, 56, 45, 12, 3])).toEqual([3, 12, 12.42, 32.40, 45, 56])
    })

    it('should correctly sort an input list that contains only fractional numbers', () => {
      expect(combSort([0.98, 0.4259, 0.56, -0.456, -0.12, 0.322])).toEqual([-0.456, -0.12, 0.322, 0.4259, 0.56, 0.98])
    })

    it('should correctly sort an input list that contains only a mix of whole, decimal, and fractional', () => {
      expect(combSort([-40, -0.222, 5.6, -4.5, 12, 0.333])).toEqual([-40, -4.5, -0.222, 0.333, 5.6, 12])
    })

    it('should correctly sort an input list that contains duplicates', () => {
      expect(combSort([4, 3, 4, 2, 1, 2])).toEqual([1, 2, 2, 3, 4, 4])
    })
  })
})
