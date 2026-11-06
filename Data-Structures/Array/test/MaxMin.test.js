import { findMax, findMin } from '../MaxMin.js'

describe('findMax', () => {
  test('findMax([1,5,3,9,2]) returns 9', () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9)
  })

  test('findMax single element returns that element', () => {
    expect(findMax([5])).toBe(5)
  })

  test('findMax with negative numbers', () => {
    expect(findMax([-3, -1, -5])).toBe(-1)
  })

  test('findMax with all same values', () => {
    expect(findMax([3, 3, 3])).toBe(3)
  })

  test('throws TypeError for empty array', () => {
    expect(() => findMax([])).toThrow(TypeError)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => findMax('123')).toThrow(TypeError)
  })
})

describe('findMin', () => {
  test('findMin([1,5,3,9,2]) returns 1', () => {
    expect(findMin([1, 5, 3, 9, 2])).toBe(1)
  })

  test('findMin single element returns that element', () => {
    expect(findMin([5])).toBe(5)
  })

  test('findMin with negative numbers', () => {
    expect(findMin([-3, -1, -5])).toBe(-5)
  })

  test('findMin with all same values', () => {
    expect(findMin([3, 3, 3])).toBe(3)
  })

  test('throws TypeError for empty array', () => {
    expect(() => findMin([])).toThrow(TypeError)
  })

  test('throws TypeError for non-array input', () => {
    expect(() => findMin('123')).toThrow(TypeError)
  })
})
