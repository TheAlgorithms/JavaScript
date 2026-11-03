import { metresToFeet, feetToMetres } from '../LengthConversion.js'

describe('metresToFeet', () => {
  test('metresToFeet(0) returns 0', () => {
    expect(metresToFeet(0)).toBe(0)
  })

  test('metresToFeet(1) returns 3.28084', () => {
    expect(metresToFeet(1)).toBeCloseTo(3.28084)
  })

  test('metresToFeet(10) returns 32.8084', () => {
    expect(metresToFeet(10)).toBeCloseTo(32.8084)
  })

  test('metresToFeet(100) returns 328.084', () => {
    expect(metresToFeet(100)).toBeCloseTo(328.084)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => metresToFeet('10')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => metresToFeet(NaN)).toThrow(TypeError)
  })
})

describe('feetToMetres', () => {
  test('feetToMetres(0) returns 0', () => {
    expect(feetToMetres(0)).toBe(0)
  })

  test('feetToMetres(1) returns 0.3048', () => {
    expect(feetToMetres(1)).toBeCloseTo(0.3048)
  })

  test('feetToMetres(10) returns 3.048', () => {
    expect(feetToMetres(10)).toBeCloseTo(3.048)
  })

  test('feetToMetres(100) returns 30.48', () => {
    expect(feetToMetres(100)).toBeCloseTo(30.48)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => feetToMetres('10')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => feetToMetres(NaN)).toThrow(TypeError)
  })
})
