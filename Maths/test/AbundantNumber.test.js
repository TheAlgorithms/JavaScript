import { isAbundantNumber } from '../AbundantNumber.js'

describe('isAbundantNumber', () => {
  test('12 is an abundant number (1+2+3+4+6=16>12)', () => {
    expect(isAbundantNumber(12)).toBe(true)
  })

  test('18 is an abundant number', () => {
    expect(isAbundantNumber(18)).toBe(true)
  })

  test('20 is an abundant number', () => {
    expect(isAbundantNumber(20)).toBe(true)
  })

  test('24 is an abundant number', () => {
    expect(isAbundantNumber(24)).toBe(true)
  })

  test('1 is NOT an abundant number', () => {
    expect(isAbundantNumber(1)).toBe(false)
  })

  test('9 is NOT an abundant number', () => {
    expect(isAbundantNumber(9)).toBe(false)
  })

  test('6 is NOT an abundant number (perfect number)', () => {
    expect(isAbundantNumber(6)).toBe(false)
  })

  test('11 is NOT an abundant number (prime)', () => {
    expect(isAbundantNumber(11)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isAbundantNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isAbundantNumber(-12)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isAbundantNumber(12.5)).toThrow(TypeError)
  })
})
