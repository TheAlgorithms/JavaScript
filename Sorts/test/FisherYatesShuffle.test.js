import { shuffle } from '../FisherYatesShuffle'

describe('shuffle', () => {
  it('expects to have a new array with same size', () => {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    const mixedArray = shuffle(fibonacci)

    expect(mixedArray).toHaveLength(fibonacci.length)
  })

  it('expects to have a new array with same values', () => {
    const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
    const mixedArray = shuffle(fibonacci)

    expect(mixedArray).toContain(0)
    expect(mixedArray).toContain(1)
    expect(mixedArray).toContain(2)
    expect(mixedArray).toContain(3)
    expect(mixedArray).toContain(5)
    expect(mixedArray).toContain(8)
    expect(mixedArray).toContain(13)
    expect(mixedArray).toContain(21)
    expect(mixedArray).toContain(34)
    expect(mixedArray).toContain(55)
    expect(mixedArray).toContain(89)
  })
})
