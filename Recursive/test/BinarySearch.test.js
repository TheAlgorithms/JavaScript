import { binarySearch } from '../BinarySearch'

describe('BinarySearch', () => {
  const arr = [2, 3, 4, 10, 40]
  const low = 0
  const high = arr.length - 1

  it('should return index 3 for searchValue 10', () => {
    const searchValue = 10
    expect(binarySearch(arr, low, high, searchValue)).toBe(3)
  })

  it('should return index 0 for searchValue 2', () => {
    const searchValue = 2
    expect(binarySearch(arr, low, high, searchValue)).toBe(0)
  })

  it('should return index 4 for searchValue 40', () => {
    const searchValue = 40
    expect(binarySearch(arr, low, high, searchValue)).toBe(4)
  })

  it('should return -1 for searchValue 1', () => {
    const searchValue = 1
    expect(binarySearch(arr, low, high, searchValue)).toBe(-1)
  })

  it('should return -1 for searchValue 50', () => {
    const searchValue = 50
    expect(binarySearch(arr, low, high, searchValue)).toBe(-1)
  })
})
