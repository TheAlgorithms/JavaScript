import { dutchNationalFlagSort } from '../DutchNationalFlagSort'

describe('DutchNationalFlagSort', () => {
  it('should sort arrays correctly', () => {
    expect(dutchNationalFlagSort([2, 0, 2, 1, 1, 0])).toEqual([0, 0, 1, 1, 2, 2])
    expect(dutchNationalFlagSort([2, 1, 0])).toEqual([0, 1, 2])
    expect(dutchNationalFlagSort([1, 0, 0, 0, 1])).toEqual([0, 0, 0, 1, 1])
  })
})
