import { factorial } from '../Factorial'

describe('Factorial', () => {
  it('should return factorial 1 for value "0"', () => {
    expect(factorial(0)).toBe(1)
  })

  it('should return factorial 120 for value "5"', () => {
    expect(factorial(5)).toBe(120)
  })

  it('Throw Error for Invalid Input', () => {
    expect(() => factorial('-')).toThrow('Not a Whole Number')
    expect(() => factorial(null)).toThrow('Not a Whole Number')
    expect(() => factorial(undefined)).toThrow('Not a Whole Number')
    expect(() => factorial(3.142)).toThrow('Not a Whole Number')
    expect(() => factorial(-1)).toThrow('Not a Positive Number')
  })
})
