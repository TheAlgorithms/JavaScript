import { KMPSearch } from '../KMPPatternSearching'

describe('KMP Matcher', () => {
  it('TC1: expects to return matching indices for pattern in text', () => {
    const text = 'ABC ABCDAB ABCDABCDABDE'
    const pattern = 'ABCDABD'
    expect(KMPSearch(text, pattern)).toStrictEqual([15])
  })

  it('TC2: expects to return matching indices for pattern in text', () => {
    const text = 'ABC ABCDABD ABCDABCDABDE'
    const pattern = 'ABCDABD'
    expect(KMPSearch(text, pattern)).toStrictEqual([4, 16])
  })
})
