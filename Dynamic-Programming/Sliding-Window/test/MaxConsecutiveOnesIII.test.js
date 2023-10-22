import { maxConsecutiveOnesIII } from '../MaxConsecutiveOnesIII'

describe('maxConsecutiveOnesIIIIII', () => {
  it('expects to return 0 when argument is empty array', () => {
    expect(maxConsecutiveOnesIII([], 3)).toBe(0)
  })

  it('expects to return 6', () => {
    expect(maxConsecutiveOnesIII([1, 1, 0, 1, 1, 1], 1)).toBe(6)
  })

  it('expects to return 8', () => {
    expect(maxConsecutiveOnesIII([1, 0, 1, 1, 1, 1, 0, 1], 2)).toBe(8)
  })
})
