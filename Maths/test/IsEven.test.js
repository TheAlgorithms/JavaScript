import { isEven, isEvenBitwise } from '../IsEven'

describe('Testing isEven function', () => {
  const randomNumber = Math.floor(Math.random() * 1999999) - 999999

  it('will test a value which should be even: 4', () => {
    const isEvenNumber = isEven(4)
    expect(isEvenNumber).toBe(true)
  })

  it("will test a value which shouldn't be even: 7", () => {
    const isEvenNumber = isEven(7)
    expect(isEvenNumber).toBe(false)
  })

  it(`will test a random value: ${randomNumber}`, () => {
    const isEvenNumber = isEven(randomNumber)
    expect(isEvenNumber).toBe(Boolean(randomNumber % 2) === false)
  })

  it('will test a TypeError for non-number inputs', () => {
    expect(() => isEven('10')).toThrow(TypeError)
    expect(() => isEven(null)).toThrow(TypeError)
    expect(() => isEven(undefined)).toThrow(TypeError)
    expect(() => isEven(NaN)).toThrow(TypeError)
  })
})

describe('Testing isEvenBitwise function', () => {
  const randomNumber = Math.floor(Math.random() * 1999999) - 999999

  it('will test a value which should be even: 6', () => {
    const isEvenNumber = isEvenBitwise(6)
    expect(isEvenNumber).toBe(true)
  })

  it("will test a value which shouldn't be even: 3", () => {
    const isEvenNumber = isEvenBitwise(3)
    expect(isEvenNumber).toBe(false)
  })

  it(`will test a random value: ${randomNumber}`, () => {
    const isEvenNumber = isEvenBitwise(randomNumber)
    expect(isEvenNumber).toBe(Boolean(randomNumber & 1) === false)
  })

  it('will test a TypeError for non-number inputs', () => {
    expect(() => isEvenBitwise('10')).toThrow(TypeError)
    expect(() => isEvenBitwise({})).toThrow(TypeError)
  })
})
