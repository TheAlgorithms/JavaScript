import { isDisariumNumber } from '../DisariumNumber.js'

describe('isDisariumNumber', () => {
  test('1 is a Disarium number (1¹=1)', () => {
    expect(isDisariumNumber(1)).toBe(true)
  })

  test('2 is a Disarium number (2¹=2)', () => {
    expect(isDisariumNumber(2)).toBe(true)
  })

  test('89 is a Disarium number (8¹+9²=8+81=89)', () => {
    expect(isDisariumNumber(89)).toBe(true)
  })

  test('135 is a Disarium number (1¹+3²+5³=1+9+125=135)', () => {
    expect(isDisariumNumber(135)).toBe(true)
  })

  test('175 is a Disarium number', () => {
    expect(isDisariumNumber(175)).toBe(true)
  })

  test('518 is a Disarium number', () => {
    expect(isDisariumNumber(518)).toBe(true)
  })

  test('10 is NOT a Disarium number', () => {
    expect(isDisariumNumber(10)).toBe(false)
  })

  test('12 is NOT a Disarium number', () => {
    expect(isDisariumNumber(12)).toBe(false)
  })

  test('100 is NOT a Disarium number', () => {
    expect(isDisariumNumber(100)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isDisariumNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isDisariumNumber(-135)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isDisariumNumber(13.5)).toThrow(TypeError)
  })
})
