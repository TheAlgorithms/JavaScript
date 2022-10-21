import { checkHeterogram } from '../CheckHeterogram'

describe('Testing checkHeterogram', () => {
  it('expects to throw type error if given a non string argument', () => {
    expect(() => checkHeterogram(0)).toThrow()
  })
  it('expects to throw type error if given a non string argument', () => {
    expect(() => checkHeterogram(true)).toThrow()
  })
  it('expects to return true if the argument is a heterogram', () => {
    const SUT = checkHeterogram('hero')
    expect(SUT).toBe(true)
  })
  it('expects to return true if the given argument only contains non-alphabetic characters', () => {
    const SUT = checkHeterogram('!!..&&  ??22')
    expect(SUT).toBe(true)
  })
  it('expects to return true if the given string is a heterogram which contains duplicate non-alphabetic characters', () => {
    const SUT = checkHeterogram('C, o, m, p, u, t, e, r!!')
    expect(SUT).toBe(true)
  })
  it('expects to return true if the given string is empty', () => {
    const SUT = checkHeterogram('')
    expect(SUT).toBe(true)
  })
  it('expects to return true if the given string contains multiple spaces and is a heterogram', () => {
    const SUT = checkHeterogram('Cwm fjord bank glyphs vext quiz')
    expect(SUT).toBe(true)
  })
  it('expects to return false if the given string contains duplicate letters with differing case (case insensitive)', () => {
    const SUT = checkHeterogram('Ada')
    expect(SUT).toBe(false)
  })
  it('expects to return false if the given string contains duplicate letters in different words', () => {
    const SUT = checkHeterogram('List duplicates')
    expect(SUT).toBe(false)
  })
})
