import { PrimeFactors } from '../PrimeFactors'

describe('EulersTotient', () => {
  it('should return the prime factors for 100', () => {
    expect(PrimeFactors(100)).toEqual([2, 2, 5, 5])
  })

  it('should return the prime factors for 2560', () => {
    expect(PrimeFactors(2560)).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 5])
  })
})
