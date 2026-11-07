import { digitalRoot } from '../DigitalRoot.js'

describe('digitalRoot', () => {
  test('digitalRoot(0) returns 0', () => {
    expect(digitalRoot(0)).toBe(0)
  })

  test('digitalRoot(1) returns 1', () => {
    expect(digitalRoot(1)).toBe(1)
  })

  test('digitalRoot(9) returns 9', () => {
    expect(digitalRoot(9)).toBe(9)
  })

  test('digitalRoot(493) returns 7', () => {
    expect(digitalRoot(493)).toBe(7)
  })

  test('digitalRoot(999) returns 9', () => {
    expect(digitalRoot(999)).toBe(9)
  })

  test('digitalRoot(18) returns 9', () => {
    expect(digitalRoot(18)).toBe(9)
  })

  test('digitalRoot(99) returns 9', () => {
    expect(digitalRoot(99)).toBe(9)
  })

  test('digitalRoot(100) returns 1', () => {
    expect(digitalRoot(100)).toBe(1)
  })

  test('digitalRoot(12345) returns 6', () => {
    expect(digitalRoot(12345)).toBe(6)
  })

  test('throws TypeError for negative input', () => {
    expect(() => digitalRoot(-493)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => digitalRoot(4.93)).toThrow(TypeError)
  })

  test('throws TypeError for string input', () => {
    expect(() => digitalRoot('493')).toThrow(TypeError)
  })
})
