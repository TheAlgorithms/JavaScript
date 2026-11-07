import { perrinNumber } from '../PerrinNumber.js'

describe('perrinNumber', () => {
  test('perrinNumber(0) returns 3', () => {
    expect(perrinNumber(0)).toBe(3)
  })

  test('perrinNumber(1) returns 0', () => {
    expect(perrinNumber(1)).toBe(0)
  })

  test('perrinNumber(2) returns 2', () => {
    expect(perrinNumber(2)).toBe(2)
  })

  test('perrinNumber(3) returns 3', () => {
    expect(perrinNumber(3)).toBe(3)
  })

  test('perrinNumber(4) returns 2', () => {
    expect(perrinNumber(4)).toBe(2)
  })

  test('perrinNumber(5) returns 5', () => {
    expect(perrinNumber(5)).toBe(5)
  })

  test('perrinNumber(6) returns 5', () => {
    expect(perrinNumber(6)).toBe(5)
  })

  test('perrinNumber(7) returns 7', () => {
    expect(perrinNumber(7)).toBe(7)
  })

  test('perrinNumber(8) returns 10', () => {
    expect(perrinNumber(8)).toBe(10)
  })

  test('perrinNumber(9) returns 12', () => {
    expect(perrinNumber(9)).toBe(12)
  })

  test('throws TypeError for negative input', () => {
    expect(() => perrinNumber(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => perrinNumber(1.5)).toThrow(TypeError)
  })
})
