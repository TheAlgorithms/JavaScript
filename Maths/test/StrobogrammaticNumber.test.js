import { isStrobogrammaticNumber } from '../StrobogrammaticNumber.js'

describe('isStrobogrammaticNumber', () => {
  test('0 is strobogrammatic', () => {
    expect(isStrobogrammaticNumber(0)).toBe(true)
  })

  test('1 is strobogrammatic', () => {
    expect(isStrobogrammaticNumber(1)).toBe(true)
  })

  test('8 is strobogrammatic', () => {
    expect(isStrobogrammaticNumber(8)).toBe(true)
  })

  test('69 is strobogrammatic', () => {
    expect(isStrobogrammaticNumber(69)).toBe(true)
  })

  test('96 is strobogrammatic', () => {
    expect(isStrobogrammaticNumber(96)).toBe(true)
  })

  test('818 is strobogrammatic', () => {
    expect(isStrobogrammaticNumber(818)).toBe(true)
  })

  test('1001 is strobogrammatic', () => {
    expect(isStrobogrammaticNumber(1001)).toBe(true)
  })

  test('123 is NOT strobogrammatic', () => {
    expect(isStrobogrammaticNumber(123)).toBe(false)
  })

  test('2 is NOT strobogrammatic', () => {
    expect(isStrobogrammaticNumber(2)).toBe(false)
  })

  test('100 is NOT strobogrammatic', () => {
    expect(isStrobogrammaticNumber(100)).toBe(false)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isStrobogrammaticNumber(-69)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isStrobogrammaticNumber(6.9)).toThrow(TypeError)
  })
})
