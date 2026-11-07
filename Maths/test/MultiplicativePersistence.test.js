import { multiplicativePersistence } from '../MultiplicativePersistence.js'

describe('multiplicativePersistence', () => {
  test('single digit returns 0', () => {
    expect(multiplicativePersistence(4)).toBe(0)
  })

  test('multiplicativePersistence(10) returns 1', () => {
    expect(multiplicativePersistence(10)).toBe(1)
  })

  test('multiplicativePersistence(25) returns 2', () => {
    expect(multiplicativePersistence(25)).toBe(2)
  })

  test('multiplicativePersistence(39) returns 3', () => {
    expect(multiplicativePersistence(39)).toBe(3)
  })

  test('multiplicativePersistence(77) returns 4', () => {
    expect(multiplicativePersistence(77)).toBe(4)
  })

  test('multiplicativePersistence(999) returns 4', () => {
    expect(multiplicativePersistence(999)).toBe(4)
  })

  test('multiplicativePersistence(0) returns 0', () => {
    expect(multiplicativePersistence(0)).toBe(0)
  })

  test('multiplicativePersistence(1) returns 0', () => {
    expect(multiplicativePersistence(1)).toBe(0)
  })

  test('multiplicativePersistence(100) returns 1', () => {
    expect(multiplicativePersistence(100)).toBe(1)
  })

  test('throws TypeError for negative input', () => {
    expect(() => multiplicativePersistence(-39)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => multiplicativePersistence(3.9)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => multiplicativePersistence('39')).toThrow(TypeError)
  })
})
