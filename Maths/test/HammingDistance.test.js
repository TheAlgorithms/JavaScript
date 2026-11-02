import { hammingDistance } from '../HammingDistance.js'

describe('hammingDistance', () => {
  test('hammingDistance(1, 4) returns 2', () => {
    expect(hammingDistance(1, 4)).toBe(2)
  })

  test('hammingDistance(3, 1) returns 1', () => {
    expect(hammingDistance(3, 1)).toBe(1)
  })

  test('hammingDistance(0, 0) returns 0', () => {
    expect(hammingDistance(0, 0)).toBe(0)
  })

  test('hammingDistance(7, 0) returns 3', () => {
    expect(hammingDistance(7, 0)).toBe(3)
  })

  // TO:
  test('hammingDistance(10, 14) returns 1', () => {
    expect(hammingDistance(10, 14)).toBe(1)
  })

  test('hammingDistance(same numbers) returns 0', () => {
    expect(hammingDistance(5, 5)).toBe(0)
  })

  test('throws TypeError for negative input', () => {
    expect(() => hammingDistance(-1, 4)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => hammingDistance(1.5, 4)).toThrow(TypeError)
  })
})
