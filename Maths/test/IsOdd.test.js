import { isOdd, isOddBitwise } from '../IsOdd'

describe('Testing the isOdd function', () => {
  it('should return true, if the number is odd', () => {
    const isOddNumber = isOdd(4)
    expect(isOddNumber).toBe(false)
  })

  it('should return true, if the number is odd', () => {
    const isOddNumber = isOdd(7)
    expect(isOddNumber).toBe(true)
  })
})

describe('Testing the isOddBitwise function', () => {
  it('should return true, if the number is odd', () => {
    const isOddNumber = isOddBitwise(6)
    expect(isOddNumber).toBe(false)
  })

  it('should return true, if the number is odd', () => {
    const isOddNumber = isOddBitwise(3)
    expect(isOddNumber).toBe(true)
  })
})
