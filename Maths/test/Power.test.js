import { power } from '../Power.js'

describe('power', () => {
  test('power(2, 0) returns 1', () => {
    expect(power(2, 0)).toBe(1)
  })

  test('power(2, 1) returns 2', () => {
    expect(power(2, 1)).toBe(2)
  })

  test('power(2, 10) returns 1024', () => {
    expect(power(2, 10)).toBe(1024)
  })

  test('power(3, 4) returns 81', () => {
    expect(power(3, 4)).toBe(81)
  })

  test('power(5, 0) returns 1', () => {
    expect(power(5, 0)).toBe(1)
  })

  test('power(10, 3) returns 1000', () => {
    expect(power(10, 3)).toBe(1000)
  })

  test('power(0, 5) returns 0', () => {
    expect(power(0, 5)).toBe(0)
  })

  test('power(1, 100) returns 1', () => {
    expect(power(1, 100)).toBe(1)
  })

  test('power with negative base', () => {
    expect(power(-2, 3)).toBe(-8)
  })

  test('throws TypeError for non-number base', () => {
    expect(() => power('2', 3)).toThrow(TypeError)
  })

  test('throws TypeError for negative exponent', () => {
    expect(() => power(2, -1)).toThrow(TypeError)
  })

  test('throws TypeError for float exponent', () => {
    expect(() => power(2, 1.5)).toThrow(TypeError)
  })
})
