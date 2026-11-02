import { eulerTotient } from '../EulerTotient.js'

describe('eulerTotient', () => {
  test('eulerTotient(1) returns 1', () => {
    expect(eulerTotient(1)).toBe(1)
  })

  test('eulerTotient(2) returns 1', () => {
    expect(eulerTotient(2)).toBe(1)
  })

  test('eulerTotient(9) returns 6', () => {
    expect(eulerTotient(9)).toBe(6)
  })

  test('eulerTotient(10) returns 4', () => {
    expect(eulerTotient(10)).toBe(4)
  })

  test('eulerTotient(36) returns 12', () => {
    expect(eulerTotient(36)).toBe(12)
  })

  test('eulerTotient of a prime returns prime minus 1', () => {
    expect(eulerTotient(7)).toBe(6)
    expect(eulerTotient(13)).toBe(12)
  })

  test('throws TypeError for zero', () => {
    expect(() => eulerTotient(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => eulerTotient(-5)).toThrow(TypeError)
  })

  test('throws TypeError for float', () => {
    expect(() => eulerTotient(1.5)).toThrow(TypeError)
  })
})
