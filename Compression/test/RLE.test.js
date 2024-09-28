import { Compress, Decompress } from '../RLE'

describe('Test RLE Compressor/Decompressor', () => {
  it('Test - 1, Pass long repetitive strings', () => {
    expect(Compress('AAAAAAAAAAAAAA')).toBe('14A')
    expect(Compress('AAABBQQQQQFG')).toBe('3A2B5Q1F1G')
  })

  it('Test - 2, Pass compressed strings', () => {
    expect(Decompress('14A')).toBe('AAAAAAAAAAAAAA')
    expect(Decompress('3A2B5Q1F1G')).toBe('AAABBQQQQQFG')
  })
})
