import { factorial } from '../Factorial'

describe('Factorial', () => {
  it('should return factorial 1 for value "0"', () => {
    expect(factorial(0)).toBe(1)
  })

  it('should return factorial 120 for value "5"', () => {
    expect(factorial(5)).toBe(120)
  })

  it('Throw Error for Invalid Input', () => {
    expect(() => factorial('-')).toThrow('Not a Number')
    expect(() => factorial(null)).toThrow('Not a Number')
    expect(() => factorial(undefined)).toThrow('Not a Number')
    expect(() => factorial(3.142)).toThrow('Not a Whole Number')
  })

  it('Should return undefined for value less than 0', () => {
    expect(factorial(-1)).toBe(undefined)
    expect(factorial(-100)).toBe(undefined)
  })
})
