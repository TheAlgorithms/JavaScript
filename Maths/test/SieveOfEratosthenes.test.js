import { sieveOfEratosthenes } from '../SieveOfEratosthenes'
import { PrimeCheck } from '../PrimeCheck'

describe('should return an array of prime booleans', () => {
  it('should have each element in the array as a prime boolean', () => {
    const n = 30
    const primes = sieveOfEratosthenes(n)
    primes.forEach((primeBool, index) => {
      if (primeBool) {
        expect(PrimeCheck(index)).toBeTruthy()
      }
    })
  })
})
