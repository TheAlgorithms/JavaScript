import { eulerNumber } from '../EulerNumber.js'

describe('eulerNumber', () => {
  test('eulerNumber(1) returns 1', () => {
    expect(eulerNumber(1)).toBe(1)
  })

  test('eulerNumber(2) returns 2', () => {
    expect(eulerNumber(2)).toBe(2)
  })

  test('eulerNumber(5) approximates e', () => {
    expect(eulerNumber(5)).toBeCloseTo(2.708, 2)
  })

  test('eulerNumber(10) approximates e closely', () => {
    expect(eulerNumber(10)).toBeCloseTo(2.71828, 4)
  })

  test('eulerNumber(20) approximates e very closely', () => {
    expect(eulerNumber(20)).toBeCloseTo(2.718281828459045, 10)
  })

  test('more terms give better approximation', () => {
    const e = Math.E
    expect(Math.abs(eulerNumber(20) - e)).toBeLessThan(
      Math.abs(eulerNumber(5) - e)
    )
  })

  test('throws TypeError for zero', () => {
    expect(() => eulerNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => eulerNumber(-10)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => eulerNumber(10.5)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => eulerNumber('10')).toThrow(TypeError)
  })
})
