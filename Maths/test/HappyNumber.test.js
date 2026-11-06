import { isHappyNumber } from '../HappyNumber.js'

describe('isHappyNumber', () => {
  test('1 is a happy number', () => {
    expect(isHappyNumber(1)).toBe(true)
  })

  test('7 is a happy number', () => {
    expect(isHappyNumber(7)).toBe(true)
  })

  test('19 is a happy number', () => {
    expect(isHappyNumber(19)).toBe(true)
  })

  test('23 is a happy number', () => {
    expect(isHappyNumber(23)).toBe(true)
  })

  test('100 is a happy number', () => {
    expect(isHappyNumber(100)).toBe(true)
  })

  test('4 is NOT a happy number', () => {
    expect(isHappyNumber(4)).toBe(false)
  })

  test('11 is NOT a happy number', () => {
    expect(isHappyNumber(11)).toBe(false)
  })

  test('20 is NOT a happy number', () => {
    expect(isHappyNumber(20)).toBe(false)
  })

  test('36 is NOT a happy number', () => {
    expect(isHappyNumber(36)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isHappyNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isHappyNumber(-19)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isHappyNumber(19.5)).toThrow(TypeError)
  })
})
