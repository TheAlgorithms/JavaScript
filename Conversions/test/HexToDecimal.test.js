import { hexToDecimal } from '../HexToDecimal'

describe('Testing HexToDecimal', () => {
  it.each([
    ['0', 0],
    ['1', 1],
    ['A', 10],
    ['B', 11],
    ['C', 12],
    ['D', 13],
    ['E', 14],
    ['F', 15],
    ['10', 16],
    ['859', 2137],
    ['4D2', 1234],
    ['81323ABD92', 554893491602]
  ])('check with %s', (hexStr, expected) => {
    expect(hexToDecimal(hexStr)).toBe(expected)
  })

  it.each(['a', '-1', 'G', ''])('throws for %s', (hexStr) => {
    expect(() => hexToDecimal(hexStr)).toThrowError()
  })
})
