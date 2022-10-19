import { uniquePaths } from '../UniquePaths'

describe('Unique Paths', () => {
  it('should return 28 when m is 3 and n is 7', () => {
    const data = uniquePaths(3, 7)
    expect(data).toBe(28)
  })

  it('should return 48620 when m is 10 and n is 10', () => {
    const data = uniquePaths(10, 10)
    expect(data).toBe(48620)
  })
})
