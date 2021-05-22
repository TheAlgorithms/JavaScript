import { createPermutations } from '../CreatePermutations'

describe('createPermutations', () => {
  it('expects to generate 6 different combinations', () => {
    const text = 'abc'
    const SUT = createPermutations(text)
    expect(SUT).toStrictEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
  })
  it('expects to generate 2 different combinations', () => {
    const text = '12'
    const SUT = createPermutations(text)
    expect(SUT).toStrictEqual(['12', '21'])
  })
})
