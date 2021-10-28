import { QuickSelect } from '../QuickSelect'

describe('QuickSelect tests', () => {
  it('should return the only element of a list of length 1', () => {
    // Test a mix of number types (i.e., positive/negative, numbers with decimals, fractions)
    expect(QuickSelect([100], 1)).toEqual(100)
    expect(QuickSelect([-23], 1)).toEqual(-23)
    expect(QuickSelect([2007.102], 1)).toEqual(2007.102)
    expect(QuickSelect([0.9], 1)).toEqual(0.9)
    expect(QuickSelect([-0.075], 1)).toEqual(-0.075)
    expect(QuickSelect([0], 1)).toEqual(0)
    expect(QuickSelect([1], 1)).toEqual(1)
  })

  it('should throw an Error when k is greater than the length of the list', () => {
    expect(() => QuickSelect([100, 2], 5)).toThrow('Index Out of Bound')
  })

  it('should throw an Error when k is less than 1', () => {
    expect(() => QuickSelect([100, 2], 0)).toThrow('Index Out of Bound')
    expect(() => QuickSelect([100, 2], -1)).toThrow('Index Out of Bound')
  })

  describe('varieties of list composition', () => {
    it('should return the kth smallest element of a list that is in increasing order', () => {
      expect(QuickSelect([10, 22, 33, 44, 55], 1)).toEqual(10)
      expect(QuickSelect([10, 22, 33, 44, 55], 2)).toEqual(22)
      expect(QuickSelect([10, 22, 33, 44, 55], 3)).toEqual(33)
      expect(QuickSelect([10, 22, 33, 44, 55], 4)).toEqual(44)
      expect(QuickSelect([10, 22, 33, 44, 55], 5)).toEqual(55)
    })

    it('should return the kth smallest element of an input list that is in decreasing order', () => {
      expect(QuickSelect([82, 33.12, 4.0, 1], 1)).toEqual(1)
      expect(QuickSelect([82, 33.12, 4.0, 1], 2)).toEqual(4.0)
      expect(QuickSelect([82, 33.12, 4.0, 1], 2)).toEqual(4)
      expect(QuickSelect([82, 33.12, 4.0, 1], 3)).toEqual(33.12)
      expect(QuickSelect([82, 33.12, 4.0, 1], 4)).toEqual(82)
    })

    it('should return the kth smallest element of an input list that is no particular order', () => {
      expect(QuickSelect([123, 14231, -10, 0, 15], 3)).toEqual(15)
      expect(QuickSelect([0, 15, 123, 14231, -10], 3)).toEqual(15)
      expect(QuickSelect([-10, 15, 123, 14231, 0], 3)).toEqual(15)
      expect(QuickSelect([14231, 0, 15, 123, -10], 3)).toEqual(15)
      expect(QuickSelect([14231, 0, 15, -10, 123], 3)).toEqual(15)
    })
  })
})
