import { kmphToMph, mphToKmph } from '../SpeedConversion.js'

describe('kmphToMph', () => {
  test('kmphToMph(0) returns 0', () => {
    expect(kmphToMph(0)).toBe(0)
  })

  test('kmphToMph(1) returns 0.621371', () => {
    expect(kmphToMph(1)).toBeCloseTo(0.621371)
  })

  test('kmphToMph(100) returns 62.1371', () => {
    expect(kmphToMph(100)).toBeCloseTo(62.1371)
  })

  test('kmphToMph(-60) works for negative values', () => {
    expect(kmphToMph(-60)).toBeCloseTo(-37.28226)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => kmphToMph('100')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => kmphToMph(NaN)).toThrow(TypeError)
  })
})

describe('mphToKmph', () => {
  test('mphToKmph(0) returns 0', () => {
    expect(mphToKmph(0)).toBe(0)
  })

  test('mphToKmph(1) returns 1.60934', () => {
    expect(mphToKmph(1)).toBeCloseTo(1.60934)
  })

  test('mphToKmph(60) returns 96.5604', () => {
    expect(mphToKmph(60)).toBeCloseTo(96.5604)
  })

  test('mphToKmph(-30) works for negative values', () => {
    expect(mphToKmph(-30)).toBeCloseTo(-48.2802)
  })

  test('throws TypeError for non-number input', () => {
    expect(() => mphToKmph('60')).toThrow(TypeError)
  })

  test('throws TypeError for NaN', () => {
    expect(() => mphToKmph(NaN)).toThrow(TypeError)
  })
})
