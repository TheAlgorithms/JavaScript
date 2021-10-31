import { LinearSieve } from '../LinearSieve'
import { PrimeCheck } from '../PrimeCheck'

describe('LinearSieve', () => {
  it('should return primes below 100', () => {
    expect(LinearSieve(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])
  })

  it('should return primes only', () => {
    const n = 100000
    const primes = LinearSieve(n)
    for (const p of primes) {
      expect(PrimeCheck(p)).toBeTruthy()
    }
  })
})
