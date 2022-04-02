import { findMin } from '../FindMin'

describe('FindMin', () => {
  test('Should return the minimum number in the array', () => {
    const min = findMin(2, 5, 1, 12, 43, 1, 9)
    expect(min).toBe(1)
  })

  test('Should return the minimum number in the array', () => {
    const min = findMin(21, 513, 6)
    expect(min).toBe(6)
  })

  test('Should throw error', () => {
    const min = () => findMin()
    expect(min).toThrow('Array is empty')
  })
})
