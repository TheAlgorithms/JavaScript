import { bogoSort, isSorted } from '../BogoSort'

describe('isSorted', () => {
  it('should return true for empty arrays', () => {
    expect(isSorted([])).toBe(true)
  })

  it('should return true for single-element arrays', () => {
    expect(isSorted([1])).toBe(true)
  })

  it('should return true for arrays that are properly sorted', () => {
    expect(isSorted([1, 2, 3])).toBe(true)
  })

  it('should return false for arrays that are not properly sorted', () => {
    expect(isSorted([3, 2, 1])).toBe(false)
  })
})

describe('bogoSort', () => {
  it('should (eventually) sort the array', () => {
    expect(bogoSort([5, 6, 7, 8, 1, 2, 12, 14])).toEqual([1, 2, 5, 6, 7, 8, 12, 14])
  })
})
