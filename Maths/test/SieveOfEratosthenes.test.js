import { sieveOfEratosthenes } from '../SieveOfEratosthenes'

describe('sieveOfEratosthenes', () => {
  test('returns an empty array for max < 2', () => {
    expect(sieveOfEratosthenes(1)).toEqual([])
  })

  test('returns [2] for max = 2', () => {
    expect(sieveOfEratosthenes(2)).toEqual([2])
  })

  test('returns [2, 3] for max = 3', () => {
    expect(sieveOfEratosthenes(3)).toEqual([2, 3])
  })

  test('returns [2, 3, 5, 7] for max = 10', () => {
    expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7])
  })

  test('returns [2, 3, 5, 7, 11, 13, 17, 19] for max = 20', () => {
    expect(sieveOfEratosthenes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19])
  })

  test('returns [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for max = 30', () => {
    expect(sieveOfEratosthenes(30)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29
    ])
  })
})
