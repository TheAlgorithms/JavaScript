import { upper } from '../Upper'

describe('Upper', () => {
  it('return uppercase strings', () => {
    expect(upper('hello')).toBe('HELLO')
    expect(upper('WORLD')).toBe('WORLD')
    expect(upper('hello_WORLD')).toBe('HELLO_WORLD')
  })
})
