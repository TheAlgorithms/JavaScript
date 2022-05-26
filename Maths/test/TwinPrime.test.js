import { twinPrime } from '../TwinPrime.js'

describe('Twin Primes', () => {
  it('Should be valid twin primes', () => {
    expect(twinPrime(5)).toStrictEqual([5, 7])
  })
})
