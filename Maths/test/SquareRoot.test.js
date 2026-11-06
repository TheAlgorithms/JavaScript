import { squareRoot } from '../SquareRoot.js'

describe('squareRoot', () => {
  test('squareRoot(0) returns 0', () => {
    expect(squareRoot(0)).toBe(0)
  })

  test('squareRoot(1) returns 1', () => {
    expect(squareRoot(1)).toBe(1)
  })

  test('squareRoot(4) returns 2', () => {
    expect(squareRoot(4)).toBe(2)
  })

  test('squareRoot(9) returns 3', () => {
    expect(squareRoot(9)).toBe(3)
  })

  test('squareRoot(16) returns 4', () => {
    expect(squareRoot(16)).toBe(4)
  })

  test('squareRoot(100) returns 10', () => {
    expect(squareRoot(100)).toBe(10)
  })

  test('squareRoot(2) returns approximately 1.4142135624', () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142135624, 5)
  })

  test('squareRoot(0.25) returns 0.5', () => {
    expect(squareRoot(0.25)).toBeCloseTo(0.5, 5)
  })

  test('throws TypeError for negative input', () => {
    expect(() => squareRoot(-1)).toThrow(TypeError)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => squareRoot('4')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => squareRoot(NaN)).toThrow(TypeError)
  })
})
