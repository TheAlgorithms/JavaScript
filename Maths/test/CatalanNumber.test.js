import { catalanNumber } from '../CatalanNumber.js'

describe('catalanNumber', () => {
  test('catalanNumber(0) returns 1', () => {
    expect(catalanNumber(0)).toBe(1)
  })

  test('catalanNumber(1) returns 1', () => {
    expect(catalanNumber(1)).toBe(1)
  })

  test('catalanNumber(2) returns 2', () => {
    expect(catalanNumber(2)).toBe(2)
  })

  test('catalanNumber(3) returns 5', () => {
    expect(catalanNumber(3)).toBe(5)
  })

  test('catalanNumber(4) returns 14', () => {
    expect(catalanNumber(4)).toBe(14)
  })

  test('catalanNumber(5) returns 42', () => {
    expect(catalanNumber(5)).toBe(42)
  })

  test('catalanNumber(6) returns 132', () => {
    expect(catalanNumber(6)).toBe(132)
  })

  test('throws TypeError for negative input', () => {
    expect(() => catalanNumber(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => catalanNumber(1.5)).toThrow(TypeError)
  })
})
