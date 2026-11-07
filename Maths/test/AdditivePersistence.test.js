import { additivePersistence } from '../AdditivePersistence.js'

describe('additivePersistence', () => {
  test('single digit returns 0', () => {
    expect(additivePersistence(5)).toBe(0)
  })

  test('additivePersistence(0) returns 0', () => {
    expect(additivePersistence(0)).toBe(0)
  })

  test('additivePersistence(10) returns 1', () => {
    expect(additivePersistence(10)).toBe(1)
  })

  test('additivePersistence(99) returns 2', () => {
    expect(additivePersistence(99)).toBe(2)
  })

  test('additivePersistence(1679) returns 2', () => {
    expect(additivePersistence(1679)).toBe(2)
  })

  test('additivePersistence(199) returns 3', () => {
    expect(additivePersistence(199)).toBe(3)
  })

  test('additivePersistence(1999999) returns 3', () => {
    expect(additivePersistence(1999999)).toBe(3)
  })

  test('additivePersistence(100) returns 1', () => {
    expect(additivePersistence(100)).toBe(1)
  })

  test('additivePersistence(23) returns 1', () => {
    expect(additivePersistence(23)).toBe(1)
  })

  test('throws TypeError for negative input', () => {
    expect(() => additivePersistence(-199)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => additivePersistence(1.5)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => additivePersistence('199')).toThrow(TypeError)
  })
})
