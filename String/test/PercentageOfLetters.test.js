import { percentageOfLetter } from '../PercentageOfLetters'

describe('Percentage of Letters in a String', () => {
  test('Calculate percent for lower case', () => {
    expect(percentageOfLetter('foobar', 'o')).toEqual(33)
    expect(percentageOfLetter('aaabcd', 'a')).toEqual(50)
  })
  test('Calculate percent for upper case', () => {
    expect(percentageOfLetter('foobar', 'o')).toEqual(33)
    expect(percentageOfLetter('aAabcd', 'a')).toEqual(50)
  })
  test('Throwing an exception', () => {
    expect(() => percentageOfLetter(100, 'string')).toThrow()
    expect(() => percentageOfLetter('string', true)).toThrow()
  })
})
