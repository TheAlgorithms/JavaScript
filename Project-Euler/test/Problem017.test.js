import { countNumberWordLength } from '../Problem017.js'

describe('Number letter count', () => {
  test.each([
    [5, 19],
    [100, 864],
    [1000, 21124]
  ])('Number letter count from 1 to %i', (n, expected) => {
    expect(countNumberWordLength(n)).toBe(expected)
  })

  test.each([
    ['test', 'Invalid input, please provide valid number'],
    [0, 'Please provide number greater that 1']
  ])('Should throw an error for input %i', (n, expected) => {
    expect(() => countNumberWordLength(n)).toThrowError(expected)
  })
})
