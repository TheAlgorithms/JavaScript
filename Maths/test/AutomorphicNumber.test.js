import { isAutomorphicNumber } from '../AutomorphicNumber.js'

describe('isAutomorphicNumber', () => {
  test('1 is automorphic (1² = 1)', () => {
    expect(isAutomorphicNumber(1)).toBe(true)
  })

  test('5 is automorphic (5² = 25)', () => {
    expect(isAutomorphicNumber(5)).toBe(true)
  })

  test('6 is automorphic (6² = 36)', () => {
    expect(isAutomorphicNumber(6)).toBe(true)
  })

  test('25 is automorphic (25² = 625)', () => {
    expect(isAutomorphicNumber(25)).toBe(true)
  })

  test('76 is automorphic (76² = 5776)', () => {
    expect(isAutomorphicNumber(76)).toBe(true)
  })

  test('376 is automorphic (376² = 141376)', () => {
    expect(isAutomorphicNumber(376)).toBe(true)
  })

  test('2 is NOT automorphic (2² = 4)', () => {
    expect(isAutomorphicNumber(2)).toBe(false)
  })

  test('7 is NOT automorphic (7² = 49)', () => {
    expect(isAutomorphicNumber(7)).toBe(false)
  })

  test('10 is NOT automorphic', () => {
    expect(isAutomorphicNumber(10)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isAutomorphicNumber(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isAutomorphicNumber(-5)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isAutomorphicNumber(5.5)).toThrow(TypeError)
  })
})
