import { isKrishnamurthyNumber } from '../KrishnamurthyNumber.js'

describe('isKrishnamurthyNumber', () => {
  test('1 is a Krishnamurthy number (1!=1)', () => {
    expect(isKrishnamurthyNumber(1)).toBe(true)
  })

  test('2 is a Krishnamurthy number (2!=2)', () => {
    expect(isKrishnamurthyNumber(2)).toBe(true)
  })

  test('145 is a Krishnamurthy number (1!+4!+5!=145)', () => {
    expect(isKrishnamurthyNumber(145)).toBe(true)
  })

  test('40585 is a Krishnamurthy number', () => {
    expect(isKrishnamurthyNumber(40585)).toBe(true)
  })

  test('100 is NOT a Krishnamurthy number', () => {
    expect(isKrishnamurthyNumber(100)).toBe(false)
  })

  test('123 is NOT a Krishnamurthy number', () => {
    expect(isKrishnamurthyNumber(123)).toBe(false)
  })

  test('10 is NOT a Krishnamurthy number', () => {
    expect(isKrishnamurthyNumber(10)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isKrishnamurthyNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isKrishnamurthyNumber(-145)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isKrishnamurthyNumber(14.5)).toThrow(TypeError)
  })
})
