import { climbStairs } from '../ClimbingStairs'

describe('ClimbingStairs', () => {
  it('climbStairs of 0', () => {
    expect(climbStairs(0)).toBe(1)
  })

  it('climbStairs of 1', () => {
    expect(climbStairs(1)).toBe(1)
  })

  it('climbStairs of 10', () => {
    expect(climbStairs(10)).toBe(89)
  })

  it('climbStairs of 15', () => {
    expect(climbStairs(15)).toBe(987)
  })
})
