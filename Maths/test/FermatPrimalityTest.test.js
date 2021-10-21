import { fermatPrimeCheck, modularExponentiation } from '../FermatPrimalityTest'

describe('modularExponentiation', () => {
  it('should give the correct output for all exponentiations', () => {
    expect(modularExponentiation(38, 220, 221)).toBe(1)
    expect(modularExponentiation(24, 220, 221)).toBe(81)
  })
})

describe('fermatPrimeCheck', () => {
  it('should give the correct output for prime and composite numbers', () => {
    expect(fermatPrimeCheck(2, 35)).toBe(true)
    expect(fermatPrimeCheck(10, 30)).toBe(false)
    expect(fermatPrimeCheck(94286167)).toBe(true)
    expect(fermatPrimeCheck(83165867)).toBe(true)
    expect(fermatPrimeCheck(13268774)).toBe(false)
    expect(fermatPrimeCheck(13233852)).toBe(false)
  })
})
