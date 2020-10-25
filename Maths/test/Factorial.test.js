import { calcFactorial } from '../Factorial'

describe('calcFactorial', () => {
  it('is a function', () => {
    expect(typeof calcFactorial).toEqual('function')
  })

  it('should return a statement for value "0"', () => {
    expect(calcFactorial(0)).toBe('The factorial of 0 is 1.')
  })

  it('should return a statement for "null" and "undefined"', () => {
    const nullFactorial = calcFactorial(null)
    const undefinedFactorial = calcFactorial(undefined)

    expect(nullFactorial).toBe(
      'Sorry, factorial does not exist for null or undefined numbers.'
    )
    expect(undefinedFactorial).toBe(
      'Sorry, factorial does not exist for null or undefined numbers.'
    )
  })

  it('should not support negative numbers', () => {
    const negativeFactorial = calcFactorial(-5)
    expect(negativeFactorial).toBe(
      'Sorry, factorial does not exist for negative numbers.'
    )
  })

  it('should return the factorial of a positive number', () => {
    const positiveFactorial = calcFactorial(3)
    expect(positiveFactorial).toBe('The factorial of 3 is 6')
  })
})
