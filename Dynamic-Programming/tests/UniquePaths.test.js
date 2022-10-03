import { uniquePaths } from '../UniquePaths'

describe('UniquePaths', () => {
  it('uniquePaths for rows=3 and cols=7', () => {
    expect(uniquePaths(3, 7)).toBe(28)
  })

  it('uniquePaths for rows=3 and cols=2', () => {
    expect(climbStairs(3, 2)).toBe(3)
  })

  it('uniquePaths for rows=8 and cols=14', () => {
    expect(climbStairs(8, 14)).toBe(77520)
  })
})
