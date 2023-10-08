import { checkWordOccurrence } from '../CheckWordOccurrence'

describe('Testing checkWordOccurrence', () => {
  it('expects throw on insert wrong string', () => {
    const value = 123

    expect(() => checkWordOccurrence(value)).toThrow()
  })

  it('expect throw on insert wrong param for case sensitive', () => {
    const value = 'hello'

    expect(() => checkWordOccurrence(value, value)).toThrow()
  })

  it('check occurrence with case sensitive', () => {
    const stringToTest = 'The quick brown fox jumps over the lazy dog'
    const expectResult = {
      The: 1,
      quick: 1,
      brown: 1,
      fox: 1,
      jumps: 1,
      over: 1,
      the: 1,
      lazy: 1,
      dog: 1
    }

    expect(checkWordOccurrence(stringToTest)).toEqual(expectResult)
  })

  it('check occurrence with case insensitive', () => {
    const stringToTest = 'The quick brown fox jumps over the lazy dog'
    const expectResult = {
      the: 2,
      quick: 1,
      brown: 1,
      fox: 1,
      jumps: 1,
      over: 1,
      lazy: 1,
      dog: 1
    }

    expect(checkWordOccurrence(stringToTest, true)).toEqual(expectResult)
  })
})
