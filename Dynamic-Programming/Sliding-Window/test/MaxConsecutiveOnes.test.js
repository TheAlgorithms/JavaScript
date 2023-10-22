import { maxConsecutiveOnes } from '../MaxConsecutiveOnes.js'

describe('maxConsecutiveOnes', () => {
  it('expects to return 0 when argument is empty array', () => {
    expect(maxConsecutiveOnes([])).toBe(0)
  })

  it('expects to return 3', () => {
    expect(maxConsecutiveOnes([1, 1, 0, 1, 1, 1])).toBe(3)
  })

  it('expects to return 2', () => {
    expect(maxConsecutiveOnes([1, 0, 1, 1, 0, 1])).toBe(2)
  })

  it('expects to return 5', () => {
    expect(maxConsecutiveOnes([0, 1, 1, 1, 1, 1, 0, 0, 1, 0])).toBe(5)
  })
})
