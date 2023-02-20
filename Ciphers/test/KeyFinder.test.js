import { keyFinder } from '../KeyFinder.js'

describe('Testing keyFinder function', () => {
  it('Test - 1, Testing for invalid types', () => {
    expect(() => keyFinder(-1)).toThrow()
  })

  it('Test - 2, Testing for encrypted input', () => {
    // expect(keyFinder("Rfkkjwi, oekh xcdktgizoutz, tge zqyv.")).toBe(20)
    expect(keyFinder('L fdph, L vdz, L frqtxhuhg.')).toBe(23)
    expect(keyFinder('Lzwespj pfl zljyla pz uvwlxlyepl.')).toBe(19)
    expect(keyFinder('Oy zmk zmciaxu kgixz.')).toBe(20)
  })

  it('Test - 3, Testing for random input', () => {
    // expect(keyFinder("Rfkkjwi, oekh xcdktgizoutz, tge zqyv.")).toBe(20)
    expect(keyFinder('aaaa')).toBe(0)
    expect(keyFinder('bcde')).toBe(0)
  })
})
