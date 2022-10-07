import { boyerMoore } from '../BoyerMoore'

describe('Testing the boyer moore algorithm', () => {
  it('Testing with alphabetical strings', () => {
    expect(boyerMoore('THIS IS A TEST TEXT', 'TEST')).toBe(10)
    expect(boyerMoore('AAIOOOAADDZXYCAADAABAABA', 'AADA')).toBe(14)
    expect(boyerMoore('Hello World! This is a test case.', 'Boyer')).toBe(-1)
  })

  it('Testing with alphabets and symbols', () => {
    expect(boyerMoore('AA&&@_OPOODDA##!', '@_')).toBe(4)
    expect(boyerMoore('LK_||{{}}[[$($', '||')).toBe(3)
    expect(boyerMoore('__||{{__+}}[[$($', '-}}')).toBe(-1)
  })
})
