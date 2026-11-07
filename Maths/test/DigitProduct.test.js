import { digitProduct } from '../DigitProduct.js'

describe('digitProduct', () => {
  test('digitProduct(0) returns 0', () => {
    expect(digitProduct(0)).toBe(0)
  })

  test('digitProduct(1) returns 1', () => {
    expect(digitProduct(1)).toBe(1)
  })

  test('digitProduct(123) returns 6', () => {
    expect(digitProduct(123)).toBe(6)
  })

  test('digitProduct(999) returns 729', () => {
    expect(digitProduct(999)).toBe(729)
  })

  test('digitProduct(111) returns 1', () => {
    expect(digitProduct(111)).toBe(1)
  })

  test('digitProduct(100) returns 0', () => {
    expect(digitProduct(100)).toBe(0)
  })

  test('digitProduct(99) returns 81', () => {
    expect(digitProduct(99)).toBe(81)
  })

  test('digitProduct(555) returns 125', () => {
    expect(digitProduct(555)).toBe(125)
  })

  test('throws TypeError for negative input', () => {
    expect(() => digitProduct(-123)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => digitProduct(1.5)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => digitProduct('123')).toThrow(TypeError)
  })
})
