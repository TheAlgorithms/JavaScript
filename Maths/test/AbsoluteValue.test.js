import { absoluteValue } from '../AbsoluteValue.js'

describe('absoluteValue', () => {
  test('absoluteValue(-5) returns 5', () => {
    expect(absoluteValue(-5)).toBe(5)
  })

  test('absoluteValue(3) returns 3', () => {
    expect(absoluteValue(3)).toBe(3)
  })

  test('absoluteValue(0) returns 0', () => {
    expect(absoluteValue(0)).toBe(0)
  })

  test('absoluteValue(-99.99) returns 99.99', () => {
    expect(absoluteValue(-99.99)).toBe(99.99)
  })

  test('absoluteValue(100) returns 100', () => {
    expect(absoluteValue(100)).toBe(100)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => absoluteValue('abc')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => absoluteValue(NaN)).toThrow(TypeError)
  })
})
