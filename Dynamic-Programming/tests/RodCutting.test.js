import { rodCut } from '../RodCutting'

describe('rodCut contract & oracle cross-checks (Precondition established near line 6 of Dynamic-Programming/RodCutting.js)', () => {
  // Required Fixtures: Smallest valid input [1], n=1 and ordinary input [1, 5, 8, 9, 10, 17, 17, 20], n=8
  test('Smallest valid input (prices = [1], n = 1)', () => {
    const prices = [1]
    expect(rodCut(prices, 1)).toBe(1)
  })

  test('Ordinary input (prices = [1, 5, 8, 9, 10, 17, 17, 20], n = 8)', () => {
    const prices = [1, 5, 8, 9, 10, 17, 17, 20]
    expect(rodCut(prices, 8)).toBe(22)
  })

  test('Preserves input array immutability', () => {
    const prices = [1, 5, 8, 9, 10, 17, 17, 20]
    const pricesCopy = [...prices]
    rodCut(prices, 8)
    expect(prices).toEqual(pricesCopy)
  })

  // 20-Domain Explicit Reference Cross-Check Table
  const domainTable = [
    { prices: [1], n: 1, expected: 1 },
    { prices: [2], n: 1, expected: 2 },
    { prices: [1, 5], n: 2, expected: 5 },
    { prices: [3, 5], n: 2, expected: 6 },
    { prices: [1, 5, 8], n: 3, expected: 8 },
    { prices: [3, 2, 1], n: 3, expected: 9 },
    { prices: [1, 2, 1], n: 3, expected: 3 },
    { prices: [1, 5, 8, 9], n: 4, expected: 10 },
    { prices: [2, 5, 7, 8], n: 4, expected: 10 },
    { prices: [5, 4, 3, 2, 1], n: 5, expected: 25 },
    { prices: [1, 5, 8, 9, 10], n: 5, expected: 13 },
    { prices: [1, 5, 8, 9, 10, 17], n: 6, expected: 17 },
    { prices: [2, 3, 7, 8, 10, 12], n: 6, expected: 14 },
    { prices: [1, 5, 8, 9, 10, 17, 17], n: 7, expected: 18 },
    { prices: [3, 5, 8, 9, 10, 17, 18], n: 7, expected: 21 },
    { prices: [1, 5, 4, 2, 1, 11, 19, 12], n: 8, expected: 20 },
    { prices: [1, 5, 8, 9, 10, 17, 17, 20], n: 8, expected: 22 },
    { prices: [3, 5, 8, 8, 10, 16, 14, 19], n: 8, expected: 24 },
    { prices: [1, 5, 8, 9, 10, 17, 17, 20, 24], n: 9, expected: 25 },
    { prices: [2, 5, 8, 9, 10, 17, 17, 20, 24, 30], n: 10, expected: 30 }
  ]

  test.each(domainTable)(
    'rodCut($prices, $n) matches expected $expected',
    ({ prices, n, expected }) => {
      expect(rodCut(prices, n)).toBe(expected)
    }
  )
})
