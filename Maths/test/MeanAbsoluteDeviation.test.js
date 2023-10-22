import { meanAbsoluteDeviation } from '../MeanAbsoluteDeviation.js'

describe('tests for mean absolute deviation', () => {
  it('should be a function', () => {
    expect(typeof meanAbsoluteDeviation).toEqual('function')
  })

  it('should throw an invalid input error', () => {
    expect(() => meanAbsoluteDeviation('fgh')).toThrow()
  })

  it('should return the mean absolute deviation of an array of numbers', () => {
    const meanAbDev = meanAbsoluteDeviation([2, 34, 5, 0, -2])
    expect(meanAbDev).toBe(10.479999999999999)
  })
})
