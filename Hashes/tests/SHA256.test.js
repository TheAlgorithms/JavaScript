import { describe, test } from 'vitest'
import { SHA256 } from '../SHA256'

describe('Testing SHA256 function', () => {
  it.each([
    ['', 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'],
    [
      'The quick brown fox jumps over the lazy dog',
      'd7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592'
    ],
    [
      'The quick brown fox jumps over the lazy cog',
      'e4c4d8f3bf76b692de791a173e05321150f7a345b46484fe427f6acc7ecc81be'
    ],
    [
      'This was added by vil02 on 01.02.2024. Have a nice day!',
      '476025d91db754ab6ac0c124367afd7c108d041b2f497006a214d5035769ed5d'
    ],
    [
      '012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789',
      '14582b3f153941891dca966b036a5b1de65fa3b7a2540095a31614da1de0feaf'
    ],
    ['a', 'ca978112ca1bbdcafac231b39a23dc4da786eff8147c4e72b9807785afee48bb']
  ])('check with %j', (input, expected) => {
    expect(SHA256(input)).toBe(expected)
  })
})
