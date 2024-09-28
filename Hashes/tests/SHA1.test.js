import { describe, test } from 'vitest'
import { SHA1 } from '../SHA1'

describe('Testing SHA1 function', () => {
  it.each([
    ['', 'da39a3ee5e6b4b0d3255bfef95601890afd80709'],
    [
      'The quick brown fox jumps over the lazy dog',
      '2fd4e1c67a2d28fced849ee1bb76e7391b93eb12'
    ],
    [
      'The quick brown fox jumps over the lazy cog',
      'de9f2c7fd25e1b3afad3e85a0bd17d9b100db4b3'
    ],
    ['a', '86f7e437faa5a7fce15d1ddcb9eaeaea377667b8'],
    ['Today is 29.01.2024!', 'ae829b60d11fb5ab527d5db2501e06da3402718d'],
    ['Have a nice day.', 'ed51dd3909281c25db5e1d8b1ce6fc701fda20ab'],
    [
      '12345678901234567890123456789012345678901234567890123456789012345678901234567890',
      '50abf5706a150990a08b2c5ea40fa0e585554732'
    ]
  ])('check with %j', (input, expected) => {
    expect(SHA1(input)).toBe(expected)
  })
})
