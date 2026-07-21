import { factorsOfANumber } from '../Factors'

describe('Factors', () => {
  it.each([
    [1, [1]],
    [16, [1, 2, 4, 8, 16]],
    [50, [1, 2, 5, 10, 25, 50]],
    [97, [1, 97]]
  ])('returns every factor of %i in ascending order', (number, expected) => {
    expect(factorsOfANumber(number)).toEqual(expected)
  })

  it.each([0, -1, 1.5])(
    'returns an empty array for invalid input %s',
    (number) => {
      expect(factorsOfANumber(number)).toEqual([])
    }
  )
})
