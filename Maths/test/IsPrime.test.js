import { isPrime } from '../IsPrime.js'

describe('isPrime', () => {
  test('2 is prime', () => {
    expect(isPrime(2)).toBe(true)
  })

  test('3 is prime', () => {
    expect(isPrime(3)).toBe(true)
  })

  test('4 is NOT prime', () => {
    expect(isPrime(4)).toBe(false)
  })

  test('11 is prime', () => {
    expect(isPrime(11)).toBe(true)
  })

  test('13 is prime', () => {
    expect(isPrime(13)).toBe(true)
  })

  test('25 is NOT prime', () => {
    expect(isPrime(25)).toBe(false)
  })

  test('97 is prime', () => {
    expect(isPrime(97)).toBe(true)
  })

  test('100 is NOT prime', () => {
    expect(isPrime(100)).toBe(false)
  })

  test('throws TypeError for 1', () => {
    expect(() => isPrime(1)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => isPrime(-7)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => isPrime(2.5)).toThrow(TypeError)
  })
})
