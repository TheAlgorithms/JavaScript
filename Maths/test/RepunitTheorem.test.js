import {
  isRepunitDivisibleByPrime,
  multiplicativeOrder10,
  repunitMod
} from '../RepunitTheorem'

describe('RepunitTheorem', () => {
  it('computes multiplicative order examples', () => {
    expect(multiplicativeOrder10(11n)).toBe(2n)
    expect(multiplicativeOrder10(37n)).toBe(3n)
    expect(multiplicativeOrder10(7n)).toBe(6n)
  })

  it('checks repunit divisibility using the theorem', () => {
    // 111111 is divisible by 3, 7, 11, 13, 37
    expect(isRepunitDivisibleByPrime(6, 3n)).toBe(true)
    expect(isRepunitDivisibleByPrime(6, 7n)).toBe(true)
    expect(isRepunitDivisibleByPrime(6, 11n)).toBe(true)
    expect(isRepunitDivisibleByPrime(6, 13n)).toBe(true)
    expect(isRepunitDivisibleByPrime(6, 37n)).toBe(true)
  })

  it('returns false when divisibility condition does not hold', () => {
    expect(isRepunitDivisibleByPrime(6, 19n)).toBe(false)
    expect(isRepunitDivisibleByPrime(9, 2n)).toBe(false)
    expect(isRepunitDivisibleByPrime(9, 5n)).toBe(false)
  })

  it('computes repunit modulo without building huge integers', () => {
    expect(repunitMod(6, 37n)).toBe(0n)
    expect(repunitMod(6, 11n)).toBe(0n)
    expect(repunitMod(7, 13n)).toBe(1n)
  })
})
