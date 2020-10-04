import { checkIfPatternExists } from './PatternMatching'
describe('checkIfPatternExists', () => {
  it('expects to find a pattern with correct input', () => {
    const text = 'AABAACAADAABAAAABAA'
    const pattern = 'AABA'
    const SUT = checkIfPatternExists(text.toLowerCase(), pattern.toLowerCase())
    expect(SUT).toBe('Given pattern is found at index 0')
  })
  it('expects to return a message when there is no pattern', () => {
    const text = 'ABCDEFG'
    const pattern = 'AEG'
    const SUT = checkIfPatternExists(text.toLowerCase(), pattern.toLowerCase())
    expect(SUT).toBe(undefined)
  })
  it('expects to find a pattern independent of casing', () => {
    const text = 'AbCAAAAAAB'
    const pattern = 'abc'
    const SUT = checkIfPatternExists(text, pattern)
    expect(SUT).toBe(undefined)
  })
  it('expects to throw an error message when given inpuut is not a string', () => {
    const text = 123444456
    const pattern = 123
    expect(() => checkIfPatternExists(text, pattern)).toThrow('Given input is not a string')
  })
})
