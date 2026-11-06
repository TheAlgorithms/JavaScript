import { isHarshadNumber } from '../HarshadNumber.js'

describe('isHarshadNumber', () => {
  test('1 is a Harshad number', () => {
    expect(isHarshadNumber(1)).toBe(true)
  })

  test('18 is a Harshad number (1+8=9, 18/9=2)', () => {
    expect(isHarshadNumber(18)).toBe(true)
  })

  test('21 is a Harshad number (2+1=3, 21/3=7)', () => {
    expect(isHarshadNumber(21)).toBe(true)
  })

  test('12 is a Harshad number (1+2=3, 12/3=4)', () => {
    expect(isHarshadNumber(12)).toBe(true)
  })

  test('100 is a Harshad number (1+0+0=1, 100/1=100)', () => {
    expect(isHarshadNumber(100)).toBe(true)
  })

  test('111 is a Harshad number (1+1+1=3, 111/3=37)', () => {
    expect(isHarshadNumber(111)).toBe(true)
  })

  test('19 is NOT a Harshad number (1+9=10, 19/10 is not integer)', () => {
    expect(isHarshadNumber(19)).toBe(false)
  })

  test('11 is NOT a Harshad number', () => {
    expect(isHarshadNumber(11)).toBe(false)
  })

  test('23 is NOT a Harshad number', () => {
    expect(isHarshadNumber(23)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isHarshadNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isHarshadNumber(-18)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isHarshadNumber(18.5)).toThrow(TypeError)
  })
})
