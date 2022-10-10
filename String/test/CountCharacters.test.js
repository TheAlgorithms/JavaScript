import { countCharacters } from '../CountCharacters'

describe('CountVowels', () => {
  it('expect throws on use wrong param', () => {
    expect(() => countCharacters(0)).toThrow()
  })

  it('expect throws when using a number in the string', () => {
    expect(() => countCharacters('h3llo')).toThrow()
  })

  it('expect throws when using a special characters in the string', () => {
    expect(() => countCharacters('hello!')).toThrow()
  })

  it('count the characters in a string. Allows lower case', () => {
    const value = 'hello'
    const count = countCharacters(value)
    expect(count).toEqual({ h: 1, e: 1, l: 2, o: 1 })
  })

  it('count the characters in a string. Allows upper case', () => {
    const value = 'HELLO'
    const count = countCharacters(value)
    expect(count).toEqual({ h: 1, e: 1, l: 2, o: 1 })
  })

  it('count the characters in a string. Allows upper and lower case', () => {
    const value = 'HelLo'
    const count = countCharacters(value)
    expect(count).toEqual({ h: 1, e: 1, l: 2, o: 1 })
  })
})
