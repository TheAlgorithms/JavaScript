import { mean } from '../AverageMean'

describe('Tests for average mean', () => {
  it('should be a function', () => {
    expect(typeof mean).toEqual('function')
  })
  it('should return the mean of an array of numbers', () => {
    const meanFunction = mean([1, 2, 4, 5])
    expect(meanFunction).toBe(3)
  })
})
