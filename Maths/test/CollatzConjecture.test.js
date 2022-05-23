import { collatz } from '../CollatzConjecture';

describe('The Collatz Conjecture', () => {
  it('Should be 1', () => {
    expect(collatz(1)).toBe(1)
    expect(collatz(5)).toBe(1)
    expect(collatz(51351)).toBe(1)
  })
})
