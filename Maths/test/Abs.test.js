import { absVal } from '../Abs'

describe('absVal', () => {
  it('should return an absolute value of a negative number', () => {
    const absOfNegativeNumber = absVal(-34)
    expect(absOfNegativeNumber).toBe(34)
  })

  it('should return an absolute value of a positive number', () => {
    const absOfPositiveNumber = absVal(50)
    expect(absOfPositiveNumber).toBe(50)
  })
})
