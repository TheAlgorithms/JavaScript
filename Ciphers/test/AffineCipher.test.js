import { encrypt, decrypt } from '../AffineCipher'

describe('Test Affine Cipher', () => {
  it('Test - 1, Pass invalid input to encrypt function', () => {
    expect(() => encrypt(null, null, null)).toThrow()
    expect(() => encrypt('null', null, null)).toThrow()
    expect(() => encrypt('null', 1, null)).toThrow()
    expect(() => encrypt('null', null, 1)).toThrow()
    expect(() => encrypt('null', 2, 1)).toThrow()
    expect(() => encrypt('null', 4, 1)).toThrow()
  })

  it('Test - 2, Pass invalid input to decrypt function', () => {
    expect(() => decrypt(null, null, null)).toThrow()
    expect(() => decrypt('null', null, null)).toThrow()
    expect(() => decrypt('null', 1, null)).toThrow()
    expect(() => decrypt('null', null, 1)).toThrow()
    expect(() => encrypt('null', 2, 1)).toThrow()
    expect(() => encrypt('null', 4, 1)).toThrow()
  })

  it('Test - 3 Pass string value to encrypt and decrypt function', () => {
    expect(decrypt(encrypt('HELLO WORLD', 5, 8), 5, 8)).toBe('HELLO WORLD')
    expect(decrypt(encrypt('ABC DEF', 3, 5), 3, 5)).toBe('ABC DEF')
    expect(decrypt(encrypt('Brown fox jump over the fence', 7, 3), 7, 3)).toBe(
      'BROWN FOX JUMP OVER THE FENCE'
    )
  })
})
