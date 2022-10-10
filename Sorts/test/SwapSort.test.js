import { minSwapsToSort } from '../SwapSort'

describe('SwapSort', () => {
  it('should work for empty arrays', () => {
    expect(minSwapsToSort([])).toEqual(0)
  })

  it('should work for sorted arrays', () => {
    expect(minSwapsToSort([1, 2, 3, 4, 5, 6])).toEqual(0)
  })

  it('should return correct results', () => {
    expect(minSwapsToSort([7, 6, 2, 5, 11, 0])).toEqual(2)
    expect(minSwapsToSort([3, 3, 2, 1, 0])).toEqual(2)
    expect(minSwapsToSort([3, 0, 2, 1, 9, 8, 7, 6])).toEqual(4)
    expect(minSwapsToSort([1, 0, 14, 0, 8, 6, 8])).toEqual(3)
  })
})
