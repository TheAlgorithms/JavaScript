import { MD5 } from '../MD5'

describe('Testing MD5 function', () => {
  it('should return the correct hash for "The quick brown fox jumps over the lazy dog"', () => {
    const input = new TextEncoder().encode(
      'The quick brown fox jumps over the lazy dog'
    )

    const hash = Array.from(MD5(input), (byte) =>
      byte.toString(16).padStart(2, '0')
    ).join('')

    expect(hash).toBe('9e107d9d372bb6826bd81d3542a419d6')
  })

  it('should return the correct hash for "The quick brown fox jumps over the lazy dog."', () => {
    const input = new TextEncoder().encode(
      'The quick brown fox jumps over the lazy dog.'
    )

    const hash = Array.from(MD5(input), (byte) =>
      byte.toString(16).padStart(2, '0')
    ).join('')

    expect(hash).toBe('e4d909c290d0fb1ca068ffaddf22cbd0')
  })

  it('should correctly hash an empty string', () => {
    const input = new TextEncoder().encode('')

    const hash = Array.from(MD5(input), (byte) =>
      byte.toString(16).padStart(2, '0')
    ).join('')

    expect(hash).toBe('d41d8cd98f00b204e9800998ecf8427e')
  })
})
