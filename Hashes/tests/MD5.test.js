import { MD5 } from '../MD5'

/**
 * Returns the MD5 hash of the given message as a hexadecimal string
 *
 * @param {Uint8Array} message - message to hash
 * @return {string} - hash as a hexadecimal string
 */
function hexMD5(message) {
  return Array.from(MD5(message), (byte) =>
    byte.toString(16).padStart(2, '0')
  ).join('')
}

describe('Testing MD5 function', () => {
  it('should return the correct hash for "The quick brown fox jumps over the lazy dog"', () => {
    const input = new TextEncoder().encode(
      'The quick brown fox jumps over the lazy dog'
    )
    const hash = hexMD5(input)

    expect(hash).toBe('9e107d9d372bb6826bd81d3542a419d6')
  })

  it('should return the correct hash for "The quick brown fox jumps over the lazy dog."', () => {
    const input = new TextEncoder().encode(
      'The quick brown fox jumps over the lazy dog.'
    )
    const hash = hexMD5(input)

    expect(hash).toBe('e4d909c290d0fb1ca068ffaddf22cbd0')
  })

  it('should correctly hash an empty string', () => {
    const input = new TextEncoder().encode('')
    const hash = hexMD5(input)

    expect(hash).toBe('d41d8cd98f00b204e9800998ecf8427e')
  })
})
