import { isScramble } from '../ScrambleStrings'

describe('ScrambleStrings', () => {
  it('expects to return true for same string', () => {
    expect(isScramble('a', 'a')).toBe(true)
  })

  it('expects to return false for non-scrambled strings', () => {
    expect(isScramble('abcde', 'caebd')).toBe(false)
  })

  it('expects to return true for scrambled strings', () => {
    expect(isScramble('great', 'rgeat')).toBe(true)
  })
})
