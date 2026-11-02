import { kilogramsToPounds, poundsToKilograms } from '../WeightConversion.js'

describe('kilogramsToPounds', () => {
  test('kilogramsToPounds(0) returns 0', () => {
    expect(kilogramsToPounds(0)).toBe(0)
  })

  test('kilogramsToPounds(1) returns 2.20462', () => {
    expect(kilogramsToPounds(1)).toBeCloseTo(2.20462)
  })

  test('kilogramsToPounds(10) returns 22.0462', () => {
    expect(kilogramsToPounds(10)).toBeCloseTo(22.0462)
  })

  test('kilogramsToPounds(70) returns 154.324', () => {
    expect(kilogramsToPounds(70)).toBeCloseTo(154.324)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => kilogramsToPounds('10')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => kilogramsToPounds(NaN)).toThrow(TypeError)
  })
})

describe('poundsToKilograms', () => {
  test('poundsToKilograms(0) returns 0', () => {
    expect(poundsToKilograms(0)).toBe(0)
  })

  test('poundsToKilograms(1) returns 0.453592', () => {
    expect(poundsToKilograms(1)).toBeCloseTo(0.453592)
  })

  test('poundsToKilograms(10) returns 4.53592', () => {
    expect(poundsToKilograms(10)).toBeCloseTo(4.53592)
  })

  test('poundsToKilograms(150) returns 68.0388', () => {
    expect(poundsToKilograms(150)).toBeCloseTo(68.0388)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => poundsToKilograms('10')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => poundsToKilograms(NaN)).toThrow(TypeError)
  })
})
