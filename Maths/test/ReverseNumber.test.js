import { ReverseNumber } from '../ReverseNumber'

describe('ReverseNumber', () => {
  it.each([
    [0, 0],
    [10, 1],
    [123, 321],
    [100001, 100001]
  ])('check with %j', (input, expected) => {
    expect(expected).toEqual(ReverseNumber(input))
  })

  it('should throw when input is not a number', () => {
    expect(() => ReverseNumber('100')).toThrowError()
  })
})
