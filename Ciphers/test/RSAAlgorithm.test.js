// RSAAlgorithm.test.js
import { describe, it, expect } from 'vitest'
import { generateKeys, encrypt, decrypt } from '../RSAAlgorithm.js'

describe('RSA Algorithm', () => {
  it('should encrypt and decrypt correctly', () => {
    const { publicKey, privateKey } = generateKeys(61, 53) // two primes
    const message = 65
    const cipher = encrypt(message, publicKey)
    const decrypted = decrypt(cipher, privateKey)

    expect(decrypted).toBe(message)
  })
})
