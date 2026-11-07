import { motzkinNumber } from '../MotzkinNumber.js'

describe('motzkinNumber', () => {
  test('motzkinNumber(0) returns 1', () => {
    expect(motzkinNumber(0)).toBe(1)
  })

  test('motzkinNumber(1) returns 1', () => {
    expect(motzkinNumber(1)).toBe(1)
  })

  test('motzkinNumber(2) returns 2', () => {
    expect(motzkinNumber(2)).toBe(2)
  })

  test('motzkinNumber(3) returns 4', () => {
    expect(motzkinNumber(3)).toBe(4)
  })

  test('motzkinNumber(4) returns 9', () => {
    expect(motzkinNumber(4)).toBe(9)
  })

  test('motzkinNumber(5) returns 21', () => {
    expect(motzkinNumber(5)).toBe(21)
  })

  test('motzkinNumber(6) returns 51', () => {
    expect(motzkinNumber(6)).toBe(51)
  })

  test('motzkinNumber(7) returns 127', () => {
    expect(motzkinNumber(7)).toBe(127)
  })

  test('motzkinNumber(8) returns 323', () => {
    expect(motzkinNumber(8)).toBe(323)
  })

  test('throws TypeError for negative input', () => {
    expect(() => motzkinNumber(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => motzkinNumber(1.5)).toThrow(TypeError)
  })
})
