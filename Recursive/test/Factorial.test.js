import { factorial } from '../Factorial'

describe('Factorial', () => {
  it('should return factorial 1 for value "0"', () => {
    expect(factorial(0)).toBe(1)
  })

  it('should return factorial 120 for value "5"', () => {
    expect(factorial(5)).toBe(120)
  })
})
