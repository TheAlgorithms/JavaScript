import { encrypt, decrypt } from '../A1Z26'

describe('Test AIZ26 Cipher', () => {
  it('Test - 1, Pass non-string value to encrypt and decrypt function', () => {
    expect(() => encrypt(123)).toThrow()
    expect(() => encrypt(null)).toThrow()
    expect(() => decrypt(123)).toThrow()
    expect(() => decrypt(null)).toThrow()
  })

  it('Test - 2 Pass string value to encrypt and ecrypt', () => {
    expect(decrypt(encrypt('Hello World'))).toBe('HELLO WORLD')
    expect(decrypt(encrypt('ABC DEF'))).toBe('ABC DEF')
    expect(decrypt(encrypt('Brown fox jump over the fence'))).toBe(
      'BROWN FOX JUMP OVER THE FENCE'
    )
  })
})
