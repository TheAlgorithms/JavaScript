import lower from '../Lower'

describe('Testing the Lower function', () => {
  it('Test 1: Check by invalid type', () => {
    expect(() => lower(345)).toThrowError()
    expect(() => lower(true)).toThrowError()
    expect(() => lower(null)).toThrowError()
  })

  it('Test 2: Check by uppercase string', () => {
    expect(lower('WORLD')).toBe('world')
    expect(lower('Hello_WORLD')).toBe('hello_world')
  })

  it('Test 3: Check by lowercase string', () => {
    expect(lower('hello')).toBe('hello')
    expect(lower('hello_world')).toBe('hello_world')
  })
})
