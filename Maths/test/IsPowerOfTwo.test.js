import { isPowerOfTwo } from '../IsPowerOfTwo.js'

describe('isPowerOfTwo', () => {
  test('1 is a power of two (2^0)', () => {
    expect(isPowerOfTwo(1)).toBe(true)
  })

  test('2 is a power of two (2^1)', () => {
    expect(isPowerOfTwo(2)).toBe(true)
  })

  test('4 is a power of two (2^2)', () => {
    expect(isPowerOfTwo(4)).toBe(true)
  })

  test('16 is a power of two (2^4)', () => {
    expect(isPowerOfTwo(16)).toBe(true)
  })

  test('1024 is a power of two (2^10)', () => {
    expect(isPowerOfTwo(1024)).toBe(true)
  })

  test('3 is NOT a power of two', () => {
    expect(isPowerOfTwo(3)).toBe(false)
  })

  test('18 is NOT a power of two', () => {
    expect(isPowerOfTwo(18)).toBe(false)
  })

  test('100 is NOT a power of two', () => {
    expect(isPowerOfTwo(100)).toBe(false)
  })

  test('throws TypeError for zero', () => {
    expect(() => isPowerOfTwo(0)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isPowerOfTwo(-4)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isPowerOfTwo(4.5)).toThrow(TypeError)
  })
})
