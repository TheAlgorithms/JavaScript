import { KMPSearch } from '../KMP'

describe('Rabin-Karp Search', function () {
  test('KMP algorithm test 1', () => {
    let text = 'AAAAA'
    let pattern = 'AAA'
    expect(KMPSearch(text, pattern)).toBe(0)
  })

  test('KMP algorithm test 2', () => {
    let text = 'ABABDABACDABABCABAB'
    let pattern = 'DABA'
    expect(KMPSearch(text, pattern)).toBe(4)
  })

  test('KMP algorithm test 3', () => {
    let text = 'ABABDABACDABABCABAB'
    let pattern = 'ABABCABAB'
    expect(KMPSearch(text, pattern)).toBe(10)
  })

  test('KMP algorithm test 4', () => {
    let text = 'ABABDABACDABABCABAB'
    let pattern = 'XYZ'
    expect(KMPSearch(text, pattern)).toBe(-1)
  })
})
