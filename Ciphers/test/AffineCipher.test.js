import { encrypt, decrypt } from '../AffineCipher'

describe('Test Affine Cipher', () => {
  it('Test - 1, Pass invalid input to encrypt function', () => {
    expect(() => encrypt(null, null, null)).toThrow()
    expect(() => encrypt('null', null, null)).toThrow()
    expect(() => encrypt('null', 1, null)).toThrow()
    expect(() => encrypt('null', null, 1)).toThrow()
  })

  it('Test - 2, Pass invalid input to decrypt function', () => {
    expect(() => decrypt(null, null, null)).toThrow()
    expect(() => decrypt('null', null, null)).toThrow()
    expect(() => decrypt('null', 1, null)).toThrow()
    expect(() => decrypt('null', null, 1)).toThrow()
  })

  it('Test - 3 Pass string value to encrypt and ecrypt function', () => {
    const a = 5
    const b = 8
    expect(decrypt(encrypt('HELLO WORLD', a, b), a, b)).toBe('HELLO WORLD')
    expect(decrypt(encrypt('ABC DEF', a, b), a, b)).toBe('ABC DEF')
    expect(decrypt(encrypt('Brown fox jump over the fence', a, b), a, b)).toBe(
      'BROWN FOX JUMP OVER THE FENCE'
    )
  })
})
