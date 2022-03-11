import { isEven, isEvenBitwise } from '../IsEven'

describe('Testing isEven function', () => {
  it('should return if the number is even or not', () => {
    const isEvenNumber = isEven(4)
    expect(isEvenNumber).toBe(true)
  })

  it('should return if the number is even or not', () => {
    const isEvenNumber = isEven(7)
    expect(isEvenNumber).toBe(false)
  })
})

describe('Testing isEvenBitwise function', () => {
  it('should return if the number is even or not', () => {
    const isEvenNumber = isEvenBitwise(6)
    expect(isEvenNumber).toBe(true)
  })

  it('should return if the number is even or not', () => {
    const isEvenNumber = isEvenBitwise(3)
    expect(isEvenNumber).toBe(false)
  })
})
