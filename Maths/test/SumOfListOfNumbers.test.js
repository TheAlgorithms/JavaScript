import { sumUsingLoop, sumUsingReduce } from '../SumOfListOfNumbers.js'

describe('Tests for sumUsingLoop', () => {
  it('should be a function', () => {
    expect(typeof sumUsingLoop).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => sumUsingLoop('4')).toThrow()
  })

  it('should return the sum of an array of numbers', () => {
    const sum = sumUsingLoop([3.45, 7.1, -3.003, 6, -12.567, -567])
    expect(sum).toBe(-566.02)
  })
})

describe('Tests for sumUsingReduce', () => {
  it('should be a function', () => {
    expect(typeof sumUsingReduce).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => sumUsingReduce('4')).toThrow()
  })

  it('should return the sum of an array of numbers', () => {
    const sum = sumUsingReduce([3.45, 7.1, -3.003, 6, -12.567, -567])
    expect(sum).toBe(-566.02)
  })
})
