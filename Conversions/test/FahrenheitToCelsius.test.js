import { fahrenheitToCelsius } from '../FahrenheitToCelsius.js'

describe('fahrenheitToCelsius', () => {
  test('fahrenheitToCelsius(32) returns 0', () => {
    expect(fahrenheitToCelsius(32)).toBe(0)
  })

  test('fahrenheitToCelsius(212) returns 100', () => {
    expect(fahrenheitToCelsius(212)).toBe(100)
  })

  test('fahrenheitToCelsius(-40) returns -40', () => {
    expect(fahrenheitToCelsius(-40)).toBe(-40)
  })

  test('fahrenheitToCelsius(98.6) returns 37', () => {
    expect(fahrenheitToCelsius(98.6)).toBeCloseTo(37)
  })

  test('fahrenheitToCelsius(68) returns 20', () => {
    expect(fahrenheitToCelsius(68)).toBeCloseTo(20)
  })

  test('fahrenheitToCelsius(-459.67) returns -273.15', () => {
    expect(fahrenheitToCelsius(-459.67)).toBeCloseTo(-273.15)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => fahrenheitToCelsius('32')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => fahrenheitToCelsius(NaN)).toThrow(TypeError)
  })
})
