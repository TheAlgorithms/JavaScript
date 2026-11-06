import { primeFactorization } from '../PrimeFactorization.js'

describe('primeFactorization', () => {
  test('primeFactorization(2) returns [2]', () => {
    expect(primeFactorization(2)).toEqual([2])
  })

  test('primeFactorization(12) returns [2, 2, 3]', () => {
    expect(primeFactorization(12)).toEqual([2, 2, 3])
  })

  test('primeFactorization(28) returns [2, 2, 7]', () => {
    expect(primeFactorization(28)).toEqual([2, 2, 7])
  })

  test('primeFactorization(13) returns [13]', () => {
    expect(primeFactorization(13)).toEqual([13])
  })

  test('primeFactorization(100) returns [2, 2, 5, 5]', () => {
    expect(primeFactorization(100)).toEqual([2, 2, 5, 5])
  })

  test('primeFactorization(360) returns [2, 2, 2, 3, 3, 5]', () => {
    expect(primeFactorization(360)).toEqual([2, 2, 2, 3, 3, 5])
  })

  test('primeFactorization of a prime returns that prime', () => {
    expect(primeFactorization(97)).toEqual([97])
  })

  test('throws TypeError for 1', () => {
    expect(() => primeFactorization(1)).toThrow(TypeError)
  })

  test('throws TypeError for negative input', () => {
    expect(() => primeFactorization(-12)).toThrow(TypeError)
  })

  test('throws TypeError for float input', () => {
    expect(() => primeFactorization(12.5)).toThrow(TypeError)
  })
})
