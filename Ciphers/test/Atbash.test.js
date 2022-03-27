import Atbash from '../Atbash'

describe('Testing Atbash function', () => {
  it('Test - 1, passing the non-string as an argument', () => {
    expect(() => Atbash(0x345)).toThrow()
    expect(() => Atbash(123)).toThrow()
    expect(() => Atbash(123n)).toThrow()
    expect(() => Atbash(false)).toThrow()
    expect(() => Atbash({})).toThrow()
    expect(() => Atbash([])).toThrow()
  })

  it('Test - 2, passing all alphabets', () => {
    expect(Atbash('HELLO WORLD')).toBe('SVOOL DLIOW')
    expect(Atbash('The quick brown fox jumps over the lazy dog')).toBe('Gsv jfrxp yildm ulc qfnkh levi gsv ozab wlt')
  })
})
