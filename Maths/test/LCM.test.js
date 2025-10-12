import { describe, it, expect } from 'vitest'
import { lcm } from '../LCM'

describe('lcm()', () => {
  it('returns 0 when either argument is 0', () => {
    expect(lcm(0, 5)).toBe(0)
    expect(lcm(7, 0)).toBe(0)
  })

  it('computes LCM for positive integers', () => {
    expect(lcm(4, 6)).toBe(12)
    expect(lcm(7, 3)).toBe(21)
    expect(lcm(21, 6)).toBe(42)
  })

  it('computes LCM when inputs are negative', () => {
    expect(lcm(-4, 6)).toBe(12)
    expect(lcm(4, -6)).toBe(12)
    expect(lcm(-4, -6)).toBe(12)
  })

  it('throws for non-numeric inputs', () => {
    // @ts-ignore
    expect(() => lcm('a', 5)).toThrow()
    // @ts-ignore
    expect(() => lcm(4, {})).toThrow()
  })
})
