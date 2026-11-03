import { litresToGallons, gallonsToLitres } from '../VolumeConversion.js'

describe('litresToGallons', () => {
  test('litresToGallons(0) returns 0', () => {
    expect(litresToGallons(0)).toBe(0)
  })

  test('litresToGallons(1) returns 0.264172', () => {
    expect(litresToGallons(1)).toBeCloseTo(0.264172)
  })

  test('litresToGallons(10) returns 2.64172', () => {
    expect(litresToGallons(10)).toBeCloseTo(2.64172)
  })

  test('litresToGallons(100) returns 26.4172', () => {
    expect(litresToGallons(100)).toBeCloseTo(26.4172)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => litresToGallons('10')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => litresToGallons(NaN)).toThrow(TypeError)
  })
})

describe('gallonsToLitres', () => {
  test('gallonsToLitres(0) returns 0', () => {
    expect(gallonsToLitres(0)).toBe(0)
  })

  test('gallonsToLitres(1) returns 3.78541', () => {
    expect(gallonsToLitres(1)).toBeCloseTo(3.78541)
  })

  test('gallonsToLitres(10) returns 37.8541', () => {
    expect(gallonsToLitres(10)).toBeCloseTo(37.8541)
  })

  test('gallonsToLitres(5) returns 18.92705', () => {
    expect(gallonsToLitres(5)).toBeCloseTo(18.92705)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => gallonsToLitres('10')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => gallonsToLitres(NaN)).toThrow(TypeError)
  })
})
