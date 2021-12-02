import { lower } from '../Lower'

describe('Lower', () => {
  it('return uppercase strings', () => {
    expect(lower('hello')).toBe('hello')
    expect(lower('WORLD')).toBe('world')
    expect(lower('hello_WORLD')).toBe('hello_world')
  })
})
