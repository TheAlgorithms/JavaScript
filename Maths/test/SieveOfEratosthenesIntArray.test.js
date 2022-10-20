import { sieveOfEratosthenes } from '../SieveOfEratosthenesIntArray'
import { PrimeCheck } from '../PrimeCheck'

describe('should return an array of prime numbers', () => {
  it('should have each element in the array as a prime numbers', () => {
    const n = 100
    const primes = sieveOfEratosthenes(n)
    primes.forEach(prime => {
      expect(PrimeCheck(prime)).toBeTruthy()
    })
  })
})
