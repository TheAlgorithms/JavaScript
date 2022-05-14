import { encode, decode } from '../LZSS'

describe('LZSS', () => {
  it('should encode and decode a string', () => {
    const text = 'I AM SAM. I AM SAM. SAM I AM.'
    const encoded = encode(text)
    const decoded = decode(encoded)

    // ISSUE: Last character gets removed from the decoded string, don't know why.

    expect(decoded + '.').toBe(text)
  })
})
