import { celsiusToFahrenheit } from '../CelsiusToFahrenheit.js'

describe('celsiusToFahrenheit', () => {
  test('celsiusToFahrenheit(0) returns 32', () => {
    expect(celsiusToFahrenheit(0)).toBe(32)
  })

  test('celsiusToFahrenheit(100) returns 212', () => {
    expect(celsiusToFahrenheit(100)).toBe(212)
  })

  test('celsiusToFahrenheit(-40) returns -40', () => {
    expect(celsiusToFahrenheit(-40)).toBe(-40)
  })

  test('celsiusToFahrenheit(37) returns 98.6', () => {
    expect(celsiusToFahrenheit(37)).toBeCloseTo(98.6)
  })

  test('celsiusToFahrenheit(-273.15) returns -459.67', () => {
    expect(celsiusToFahrenheit(-273.15)).toBeCloseTo(-459.67)
  })

  test('celsiusToFahrenheit(20) returns 68', () => {
    expect(celsiusToFahrenheit(20)).toBe(68)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => celsiusToFahrenheit('100')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => celsiusToFahrenheit(NaN)).toThrow(TypeError)
  })
})
