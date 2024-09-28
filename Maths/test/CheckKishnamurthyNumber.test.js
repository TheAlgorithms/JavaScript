import { CheckKishnamurthyNumber } from '../CheckKishnamurthyNumber'

describe('CheckKishnamurthyNumber', () => {
  it.each([1, 2, 145, 40585])('returns true for %i', (num) => {
    expect(CheckKishnamurthyNumber(num)).toBe(true)
  })

  it.each([0, 3, 4, 5, 100, 146, 1019823, -1])(
    'returns false for %i',
    (num) => {
      expect(CheckKishnamurthyNumber(num)).toBe(false)
    }
  )

  it('should throw when input is not a number', () => {
    expect(() => CheckKishnamurthyNumber('2')).toThrowError()
  })
})
