import { countLetters } from '../CountLetters'

describe('CountLetters', () => {
  it('expect throws on use wrong param', () => {
    expect(() => countLetters(0)).toThrow()
  })

  it('expect throws when using a number in the string', () => {
    expect(() => countLetters('h3llo')).toThrow()
  })

  it('expect throws when using a special characters in the string', () => {
    expect(() => countLetters('hello!')).toThrow()
  })

  it('count the letters in a string. Allows lower case', () => {
    const value = 'hello'
    const count = countLetters(value)
    expect(count).toEqual({ h: 1, e: 1, l: 2, o: 1 })
  })

  it('count the letters in a string. Allows upper case', () => {
    const value = 'HELLO'
    const count = countLetters(value)
    expect(count).toEqual({ h: 1, e: 1, l: 2, o: 1 })
  })

  it('count the letters in a string. Allows upper and lower case', () => {
    const value = 'HelLo'
    const count = countLetters(value)
    expect(count).toEqual({ h: 1, e: 1, l: 2, o: 1 })
  })
})
