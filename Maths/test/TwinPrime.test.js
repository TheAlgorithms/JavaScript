import { twinPrime } from '../TwinPrime.js'

describe('Twin Primes', () => {
  it('Should be valid twin primes', () => {
    expect(twinPrime(3)).toBe(5)
    expect(twinPrime(5)).toBe(7)
    expect(twinPrime(4)).toBe(-1)
    expect(twinPrime(17)).toBe(19)
  })
})
