import { pellNumber } from '../PellNumber.js'

describe('pellNumber', () => {
  test('pellNumber(0) returns 0', () => {
    expect(pellNumber(0)).toBe(0)
  })

  test('pellNumber(1) returns 1', () => {
    expect(pellNumber(1)).toBe(1)
  })

  test('pellNumber(2) returns 2', () => {
    expect(pellNumber(2)).toBe(2)
  })

  test('pellNumber(3) returns 5', () => {
    expect(pellNumber(3)).toBe(5)
  })

  test('pellNumber(4) returns 12', () => {
    expect(pellNumber(4)).toBe(12)
  })

  test('pellNumber(5) returns 29', () => {
    expect(pellNumber(5)).toBe(29)
  })

  test('pellNumber(6) returns 70', () => {
    expect(pellNumber(6)).toBe(70)
  })

  test('pellNumber(7) returns 169', () => {
    expect(pellNumber(7)).toBe(169)
  })

  test('throws TypeError for negative input', () => {
    expect(() => pellNumber(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => pellNumber(1.5)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => pellNumber('4')).toThrow(TypeError)
  })
})
