import { mean } from '../AverageMean'

describe('Tests for average mean', () => {
  it('should be a function', () => {
    expect(typeof mean).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => mean(123)).toThrow()
  })

  it('should return the mean of an array of numbers', () => {
    const meanFunction = mean([1, 2, 4, 5])
    expect(meanFunction).toBe(3)
  })

  it('should return the mean of an array of numbers', () => {
    const meanFunction = mean([10, 40, 100, 20])
    expect(meanFunction).toBe(42.5)
  })

  it('should return the number itself for a single-element array', () => {
    const result = mean([5])
    expect(result).toBe(5)
  })

  it('should throw error for empty array', () => {
    expect(() => mean([])).toThrow()
  })

  it('should throw error for an array containing null', () => {
    expect(() => mean([1, 2, null])).toThrow()
  })

  it('should throw error for an array containing booleans', () => {
    expect(() => mean([1, 2, true])).toThrow()
  })

  it('should throw error for an array containing strings', () => {
    expect(() => mean([1, 2, 'asd'])).toThrow()
  })

  it('should return the mean of an array with negative numbers', () => {
    const result = mean([-1, -2, -3, -4])
    expect(result).toBe(-2.5)
  })

  it('should return the mean of an array with floating-point numbers', () => {
    const result = mean([1.5, 2.5, 3.5])
    expect(result).toBe(2.5)
  })

  it('should return 0 for an array with zeros', () => {
    const result = mean([0, 0, 0])
    expect(result).toBe(0)
  })

  it('should handle very large numbers correctly', () => {
    const result = mean([1000000000, 2000000000, 3000000000])
    expect(result).toBe(2000000000)
  })

  it('should return correct mean for an array with integers and floating-point numbers', () => {
    const result = mean([1, 2.5, 3])
    expect(result).toBeCloseTo(2.1667, 4)
  })
})
