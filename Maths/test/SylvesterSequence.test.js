import { sylvesterSequence } from '../SylvesterSequence.js'

describe('sylvesterSequence', () => {
  test('sylvesterSequence(1) returns [2]', () => {
    expect(sylvesterSequence(1)).toEqual([2])
  })

  test('sylvesterSequence(2) returns [2, 3]', () => {
    expect(sylvesterSequence(2)).toEqual([2, 3])
  })

  test('sylvesterSequence(3) returns [2, 3, 7]', () => {
    expect(sylvesterSequence(3)).toEqual([2, 3, 7])
  })

  test('sylvesterSequence(4) returns [2, 3, 7, 43]', () => {
    expect(sylvesterSequence(4)).toEqual([2, 3, 7, 43])
  })

  test('sylvesterSequence(5) returns [2, 3, 7, 43, 1807]', () => {
    expect(sylvesterSequence(5)).toEqual([2, 3, 7, 43, 1807])
  })

  test('sylvesterSequence returns correct length', () => {
    expect(sylvesterSequence(4)).toHaveLength(4)
  })

  test('sylvesterSequence starts with 2', () => {
    expect(sylvesterSequence(3)[0]).toBe(2)
  })

  test('throws TypeError for zero', () => {
    expect(() => sylvesterSequence(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => sylvesterSequence(-1)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => sylvesterSequence(1.5)).toThrow(TypeError)
  })
})
