import { checkHeterogram } from '../CheckHeterogram'

describe('Testing checkHeterogram', () => {
  it('expects to throw type error if given a non string argument', () => {
    expect(() => checkHeterogram(0)).toThrow()
  })
  it('expects to throw type error if given a non string argument', () => {
    expect(() => checkHeterogram(true)).toThrow()
  })
  it('expects to return true if the argument is a heterogram', () => {
    expect(checkHeterogram('hero')).toBe(true)
  })
  it('expects to return true if the given argument only contains non-alphabetic characters', () => {
    expect(checkHeterogram('!!..&&  ??22')).toBe(true)
  })
  it('expects to return true if the given string is a heterogram which contains duplicate non-alphabetic characters', () => {
    expect(checkHeterogram('C, o, m, p, u, t, e, r!!')).toBe(true)
  })
  it('expects to return true if the given string is empty', () => {
    expect(checkHeterogram('')).toBe(true)
  })
  it('expects to return true if the given string contains multiple spaces and is a heterogram', () => {
    expect(checkHeterogram('Cwm fjord bank glyphs vext quiz')).toBe(true)
  })
  it('expects to return false if the given string contains duplicate letters with differing case (case insensitive)', () => {
    expect(checkHeterogram('Ada')).toBe(false)
  })
  it('expects to return false if the given string contains duplicate letters in different words', () => {
    expect(checkHeterogram('List duplicates')).toBe(false)
  })
})
