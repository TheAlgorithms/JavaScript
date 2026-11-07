import { isBounceNumber } from '../BounceNumber.js'

describe('isBounceNumber', () => {
  test('155349 is a bounce number', () => {
    expect(isBounceNumber(155349)).toBe(true)
  })

  test('121 is a bounce number', () => {
    expect(isBounceNumber(121)).toBe(true)
  })

  test('1234 is NOT a bounce number (increasing)', () => {
    expect(isBounceNumber(1234)).toBe(false)
  })

  test('9876 is NOT a bounce number (decreasing)', () => {
    expect(isBounceNumber(9876)).toBe(false)
  })

  test('1111 is NOT a bounce number (all same)', () => {
    expect(isBounceNumber(1111)).toBe(false)
  })

  test('single digit is NOT a bounce number', () => {
    expect(isBounceNumber(5)).toBe(false)
  })

  test('132 is a bounce number', () => {
    expect(isBounceNumber(132)).toBe(true)
  })

  test('321 is NOT a bounce number (decreasing)', () => {
    expect(isBounceNumber(321)).toBe(false)
  })

  test('123454321 is a bounce number', () => {
    expect(isBounceNumber(123454321)).toBe(true)
  })

  test('throws TypeError for zero', () => {
    expect(() => isBounceNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isBounceNumber(-121)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isBounceNumber(1.5)).toThrow(TypeError)
  })
})
