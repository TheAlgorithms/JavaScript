import { expect } from 'vitest'
import { findSmallestMultiple } from '../Problem005.js'

describe.concurrent('Find smallest multiple', () => {
  test.each([
    [10, 2520],
    [15, 360360],
    [20, 232792560]
  ])('max divisor -> %i, smallest multiple -> %i', (a, expected) => {
    expect(findSmallestMultiple(a)).toBe(expected)
  })
})
