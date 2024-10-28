import { findMinimalRotation } from '../BoothsAlgorithm'

describe('BoothsAlgorithm', () => {
  it('should throw an error if input is not a string', () => {
    expect(() => findMinimalRotation(null)).toThrow('Input must be a string')
    expect(() => findMinimalRotation(undefined)).toThrow(
      'Input must be a string'
    )
    expect(() => findMinimalRotation(123)).toThrow('Input must be a string')
    expect(() => findMinimalRotation([])).toThrow('Input must be a string')
  })

  it('should throw an error if input string is empty', () => {
    expect(() => findMinimalRotation('')).toThrow(
      'Input string cannot be empty'
    )
  })

  it('should find minimal rotation for simple strings', () => {
    expect(findMinimalRotation('abc')).toBe('abc')
    expect(findMinimalRotation('bca')).toBe('abc')
    expect(findMinimalRotation('cab')).toBe('abc')
  })

  it('should handle strings with repeated characters', () => {
    expect(findMinimalRotation('aaaa')).toBe('aaaa')
    expect(findMinimalRotation('aaab')).toBe('aaab')
    expect(findMinimalRotation('baaa')).toBe('aaab')
  })

  it('should handle strings with special characters', () => {
    expect(findMinimalRotation('12#$')).toBe('#$12')
    expect(findMinimalRotation('@abc')).toBe('@abc')
    expect(findMinimalRotation('xyz!')).toBe('!xyz')
  })

  it('should handle longer strings', () => {
    expect(findMinimalRotation('algorithm')).toBe('algorithm')
    expect(findMinimalRotation('rithmalgo')).toBe('algorithm')
    expect(findMinimalRotation('gorithmal')).toBe('algorithm')
  })

  it('should be case sensitive', () => {
    expect(findMinimalRotation('AbC')).toBe('AbC')
    expect(findMinimalRotation('BcA')).toBe('ABc')
    expect(findMinimalRotation('CAb')).toBe('AbC')
  })

  it('should handle palindromes', () => {
    expect(findMinimalRotation('radar')).toBe('adarr')
    expect(findMinimalRotation('level')).toBe('ellev')
  })
})
