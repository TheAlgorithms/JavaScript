import { collatz } from '../CollatzSequence'

describe('The Collatz Conjecture', () => {
  it('Should be 1', () => {
    expect(collatz(1)).toBe({ result: 1, steps: [] })
    expect(collatz(5)).toBe({ result: 1, steps: [16, 8, 4, 2, 1] })
  })
})
