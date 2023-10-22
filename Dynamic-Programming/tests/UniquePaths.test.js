import { uniquePaths } from '../UniquePaths'

describe('Unique Paths', () => {
  it('should return 28 when m is 3 and n is 7', () => {
    expect(uniquePaths(3, 7)).toBe(28)
  })

  it('should return 48620 when m is 10 and n is 10', () => {
    expect(uniquePaths(10, 10)).toBe(48620)
  })
})
