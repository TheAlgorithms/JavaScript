import capitalize from '../Capitalize'

describe('Testing the Capitalize function', () => {
  it('returns capitalized strings', () => {
    expect(capitalize('hello')).toBe('Hello')
    expect(capitalize('HELLO world')).toBe('HELLO world')
    expect(capitalize('_ello')).toBe('_ello')
  })
})
