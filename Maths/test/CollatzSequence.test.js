import { collatzSequence } from '../CollatzSequence.js'

describe('collatzSequence', () => {
  test('collatzSequence(1) returns [1]', () => {
    expect(collatzSequence(1)).toEqual([1])
  })

  test('collatzSequence(2) returns [2, 1]', () => {
    expect(collatzSequence(2)).toEqual([2, 1])
  })

  test('collatzSequence(6) returns correct sequence', () => {
    expect(collatzSequence(6)).toEqual([6, 3, 10, 5, 16, 8, 4, 2, 1])
  })

  test('collatzSequence always ends with 1', () => {
    const seq = collatzSequence(27)
    expect(seq[seq.length - 1]).toBe(1)
  })

  test('collatzSequence(1) has length 1', () => {
    expect(collatzSequence(1)).toHaveLength(1)
  })

  test('collatzSequence starts with input number', () => {
    expect(collatzSequence(10)[0]).toBe(10)
  })

  test('collatzSequence(4) returns [4, 2, 1]', () => {
    expect(collatzSequence(4)).toEqual([4, 2, 1])
  })

  test('collatzSequence(5) returns [5, 16, 8, 4, 2, 1]', () => {
    expect(collatzSequence(5)).toEqual([5, 16, 8, 4, 2, 1])
  })

  test('throws TypeError for zero', () => {
    expect(() => collatzSequence(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => collatzSequence(-6)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => collatzSequence(6.5)).toThrow(TypeError)
  })
})
