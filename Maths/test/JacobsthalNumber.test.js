import { jacobsthalNumber } from '../JacobsthalNumber.js'

describe('jacobsthalNumber', () => {
  test('jacobsthalNumber(0) returns 0', () => {
    expect(jacobsthalNumber(0)).toBe(0)
  })

  test('jacobsthalNumber(1) returns 1', () => {
    expect(jacobsthalNumber(1)).toBe(1)
  })

  test('jacobsthalNumber(2) returns 1', () => {
    expect(jacobsthalNumber(2)).toBe(1)
  })

  test('jacobsthalNumber(3) returns 3', () => {
    expect(jacobsthalNumber(3)).toBe(3)
  })

  test('jacobsthalNumber(4) returns 5', () => {
    expect(jacobsthalNumber(4)).toBe(5)
  })

  test('jacobsthalNumber(5) returns 11', () => {
    expect(jacobsthalNumber(5)).toBe(11)
  })

  test('jacobsthalNumber(6) returns 21', () => {
    expect(jacobsthalNumber(6)).toBe(21)
  })

  test('jacobsthalNumber(7) returns 43', () => {
    expect(jacobsthalNumber(7)).toBe(43)
  })

  test('jacobsthalNumber(8) returns 85', () => {
    expect(jacobsthalNumber(8)).toBe(85)
  })

  test('throws TypeError for negative input', () => {
    expect(() => jacobsthalNumber(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => jacobsthalNumber(1.5)).toThrow(TypeError)
  })
})
