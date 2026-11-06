import { isPronicNumber } from '../PronicNumber.js'

describe('isPronicNumber', () => {
  test('0 is a pronic number (0 x 1)', () => {
    expect(isPronicNumber(0)).toBe(true)
  })

  test('2 is a pronic number (1 x 2)', () => {
    expect(isPronicNumber(2)).toBe(true)
  })

  test('6 is a pronic number (2 x 3)', () => {
    expect(isPronicNumber(6)).toBe(true)
  })

  test('12 is a pronic number (3 x 4)', () => {
    expect(isPronicNumber(12)).toBe(true)
  })

  test('20 is a pronic number (4 x 5)', () => {
    expect(isPronicNumber(20)).toBe(true)
  })

  test('30 is a pronic number (5 x 6)', () => {
    expect(isPronicNumber(30)).toBe(true)
  })

  test('42 is a pronic number (6 x 7)', () => {
    expect(isPronicNumber(42)).toBe(true)
  })

  test('1 is NOT a pronic number', () => {
    expect(isPronicNumber(1)).toBe(false)
  })

  test('10 is NOT a pronic number', () => {
    expect(isPronicNumber(10)).toBe(false)
  })

  test('15 is NOT a pronic number', () => {
    expect(isPronicNumber(15)).toBe(false)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isPronicNumber(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isPronicNumber(6.5)).toThrow(TypeError)
  })
})
