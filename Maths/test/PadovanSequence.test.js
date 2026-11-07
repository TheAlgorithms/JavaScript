import { padovanSequence } from '../PadovanSequence.js'

describe('padovanSequence', () => {
  test('padovanSequence(0) returns 1', () => {
    expect(padovanSequence(0)).toBe(1)
  })

  test('padovanSequence(1) returns 1', () => {
    expect(padovanSequence(1)).toBe(1)
  })

  test('padovanSequence(2) returns 1', () => {
    expect(padovanSequence(2)).toBe(1)
  })

  test('padovanSequence(3) returns 2', () => {
    expect(padovanSequence(3)).toBe(2)
  })

  test('padovanSequence(4) returns 2', () => {
    expect(padovanSequence(4)).toBe(2)
  })

  test('padovanSequence(5) returns 3', () => {
    expect(padovanSequence(5)).toBe(3)
  })

  test('padovanSequence(6) returns 4', () => {
    expect(padovanSequence(6)).toBe(4)
  })

  test('padovanSequence(7) returns 5', () => {
    expect(padovanSequence(7)).toBe(5)
  })

  test('padovanSequence(8) returns 7', () => {
    expect(padovanSequence(8)).toBe(7)
  })

  test('padovanSequence(9) returns 9', () => {
    expect(padovanSequence(9)).toBe(9)
  })

  test('throws TypeError for negative input', () => {
    expect(() => padovanSequence(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => padovanSequence(1.5)).toThrow(TypeError)
  })
})
