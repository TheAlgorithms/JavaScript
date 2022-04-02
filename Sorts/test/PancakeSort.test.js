import { flipArray, findMax, pancakeSort } from '../PancakeSort'

describe('flipArray', () => {
  it('should flip any subarray of any array', () => {
    expect(flipArray([1, 2, 3, 4], 0, 3)).toEqual([4, 3, 2, 1])
    expect(flipArray([1, 2, 3, 4, 5], 2, 4)).toEqual([1, 2, 5, 4, 3])
    expect(flipArray([], 0, 0)).toEqual([])
  })
})

describe('findMax', () => {
  it('should find the index of the maximum value in any subarray of any array', () => {
    expect(findMax([1, 3, 2, 5], 0, 3)).toEqual(3)
    expect(findMax([1, 3, 2, 5], 0, 2)).toEqual(1)
  })
})

describe('pancakeSort', () => {
  it('should sort any array', () => {
    expect(pancakeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
    expect(pancakeSort([3, 1, 4, 2])).toEqual([1, 2, 3, 4])
    expect(pancakeSort([100, 1000, 10, 1])).toEqual([1, 10, 100, 1000])
  })
})
