import { sieveOfEratosthenes } from '../SieveOfEratosthenes'

describe('SieveOfEratosthenes', () => {
  it('Primes till 0', () => {
    expect(sieveOfEratosthenes(0)).toEqual([])
  })

  it('Primes till 1', () => {
    expect(sieveOfEratosthenes(1)).toEqual([])
  })

  it('Primes till 10', () => {
    expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7])
  })

  it('Primes till 23', () => {
    expect(sieveOfEratosthenes(23)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23])
  })

  it('Primes till 70', () => {
    expect(sieveOfEratosthenes(70)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67
    ])
  })
})
