import { decimalIsolate } from '../DecimalIsolate'

const invalidInputs = [
  { input: NaN, description: 'NaN' },
  { input: null, description: 'null' },
  { input: undefined, description: 'undefined' },
  { input: 'a string', description: 'a string' },
  { input: { a: 54.34 }, description: 'an object' },
  {
    input: ['OneDotTwoThree', 4.56, 7.89],
    description: 'an array with invalid first element'
  }
]

describe('DecimalIsolate', () => {
  it('should isolate the decimal part of a positive number', () => {
    expect(decimalIsolate(12.34)).toBe(0.34)
  })

  it('should isolate the decimal part of a negative number', () => {
    expect(decimalIsolate(-456.789)).toBe(0.789)
  })

  it('should return 0 when the number is a whole number', () => {
    expect(decimalIsolate(100)).toBe(0)
  })

  it('should isolate the decimal part of a number string', () => {
    expect(decimalIsolate('12.34')).toBe(0.34)
  })

  it('should isolate the decimal part of the first element of an array if it is convertible to a number', () => {
    expect(decimalIsolate([98.76, { a: 76.45 }])).toBe(0.76)
  })

  describe('Invalid Inputs', () => {
    it.each(invalidInputs)(
      'should return 0 for invalid input when input is $description',
      ({ input }) => {
        expect(decimalIsolate(input)).toBe(0)
      }
    )
  })
})
