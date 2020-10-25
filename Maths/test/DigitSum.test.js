import { digitSum } from '../DigitSum'

describe('digitSum', () => {
  it('is a function', () => {
    expect(typeof digitSum).toEqual('function')
  })
  it('should return the sum of digits of a given number', () => {
    const sumOfNumber = digitSum(12345)
    expect(sumOfNumber).toBe(15)
  })
})
