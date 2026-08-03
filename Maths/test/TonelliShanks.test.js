import { tonelliShanks } from '../TonelliShanks'

describe('tonelliShanks', () => {
  it.each([
    [2, 7, 3], // 3^2 = 9 ≡ 2 (mod 7)
    [10, 13, 6], // 6^2 = 36 ≡ 10 (mod 13)
    [0, 11, 0],
    [5, 11, 4] // 4^2 = 16 ≡ 5 (mod 11); p ≡ 3 (mod 4)
  ])('returns smaller root for %i mod %i', (n, p, expected) => {
    expect(tonelliShanks(n, p)).toBe(expected)
  })

  it('throws for non-residues', () => {
    expect(() => tonelliShanks(3, 7)).toThrow(RangeError)
  })

  it('throws for invalid modulus', () => {
    expect(() => tonelliShanks(2, 2)).toThrow(RangeError)
    expect(() => tonelliShanks(2, 4)).toThrow(RangeError)
  })

  it('throws for non-integer inputs', () => {
    expect(() => tonelliShanks('2', 7)).toThrow(TypeError)
  })
})
