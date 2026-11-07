import { leibnizPi } from '../PiApproximation.js'

describe('leibnizPi', () => {
  test('leibnizPi(1) returns 4', () => {
    expect(leibnizPi(1)).toBe(4)
  })

  test('leibnizPi(2) returns 2.666...', () => {
    expect(leibnizPi(2)).toBeCloseTo(2.667, 2)
  })

  test('leibnizPi(100) approximates pi', () => {
    expect(leibnizPi(100)).toBeCloseTo(3.13, 1)
  })

  test('leibnizPi(1000) approximates pi more closely', () => {
    expect(leibnizPi(1000)).toBeCloseTo(3.14, 2)
  })

  test('leibnizPi(10000) approximates pi even more closely', () => {
    expect(leibnizPi(10000)).toBeCloseTo(3.1415, 3)
  })

  test('more terms give better approximation', () => {
    const pi = Math.PI
    expect(Math.abs(leibnizPi(10000) - pi)).toBeLessThan(
      Math.abs(leibnizPi(100) - pi)
    )
  })

  test('throws TypeError for zero', () => {
    expect(() => leibnizPi(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => leibnizPi(-100)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => leibnizPi(100.5)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => leibnizPi('100')).toThrow(TypeError)
  })
})
