import { binarySearch } from '../BinarySearch'

describe('BinarySearch', () => {
  const arr = [2, 3, 4, 10, 25, 40, 45, 60, 100, 501, 700, 755, 800, 999]
  const low = 0
  const high = arr.length - 1

  it('should return index 3 for searchValue 10', () => {
    const searchValue = 10
    expect(binarySearch(arr, searchValue, low, high)).toBe(3)
  })

  it('should return index 0 for searchValue 2', () => {
    const searchValue = 2
    expect(binarySearch(arr, searchValue, low, high)).toBe(0)
  })

  it('should return index 13 for searchValue 999', () => {
    const searchValue = 999
    expect(binarySearch(arr, searchValue, low, high)).toBe(13)
  })

  it('should return -1 for searchValue 1', () => {
    const searchValue = 1
    expect(binarySearch(arr, searchValue, low, high)).toBe(-1)
  })

  it('should return -1 for searchValue 1000', () => {
    const searchValue = 1000
    expect(binarySearch(arr, searchValue, low, high)).toBe(-1)
  })
})
