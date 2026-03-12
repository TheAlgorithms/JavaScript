import { isOdd, isOddBitwise } from '../IsOdd'

describe('Testing isOdd function', () => {
  const randomNumber = Math.floor(Math.random() * 1999999) - 999999

  it("will test a value which shouldn't be odd: 4", () => {
    const isOddNumber = isOdd(4)
    expect(isOddNumber).toBe(false)
  })

  it('will test a value which should be odd: 7', () => {
    const isOddNumber = isOdd(7)
    expect(isOddNumber).toBe(true)
  })

  it(`will test a random value: ${randomNumber}`, () => {
    const isOddNumber = isOdd(randomNumber)
    expect(isOddNumber).toBe(Boolean(randomNumber % 2) !== false)
  })

  it('will test a TypeError for non-number inputs', () => {
    expect(() => isOdd('10')).toThrow(TypeError)
    expect(() => isOdd(null)).toThrow(TypeError)
    expect(() => isOdd(undefined)).toThrow(TypeError)
    expect(() => isOdd(NaN)).toThrow(TypeError)
  })
})

describe('Testing isOddBitwise function', () => {
  const randomNumber = Math.floor(Math.random() * 1999999) - 999999

  it("will test a value which shouldn't be odd: 6", () => {
    const isOddNumber = isOddBitwise(6)
    expect(isOddNumber).toBe(false)
  })

  it('will test a value which should be odd: 3', () => {
    const isOddNumber = isOddBitwise(3)
    expect(isOddNumber).toBe(true)
  })

  it(`will test a random value: ${randomNumber}`, () => {
    const isOddNumber = isOddBitwise(randomNumber)
    expect(isOddNumber).toBe(Boolean(randomNumber & 1) !== false)
  })

  it('will test a TypeError for non-number inputs', () => {
    expect(() => isOddBitwise('10')).toThrow(TypeError)
    expect(() => isOddBitwise({})).toThrow(TypeError)
  })
})
