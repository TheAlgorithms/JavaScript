import { exponentialFunction } from '../ExponentialFunction'

describe('Tests for exponential function', () => {
  it('should be a function', () => {
    expect(typeof exponentialFunction).toEqual('function')
  })

  it('should throw error for invalid input', () => {
    expect(() => exponentialFunction(2, -34)).toThrow()
  })

  it('should return the exponential function of power of 5 and order of 21', () => {
    const ex = exponentialFunction(5, 20)
    expect(ex).toBe(148.4131078683383)
  })
})
