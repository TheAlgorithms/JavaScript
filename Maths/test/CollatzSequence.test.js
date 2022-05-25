import { collatz } from '../CollatzSequence'

describe('The Collatz Sequence', () => {
  it('Should be 1', () => {
    expect(collatz(1)).toStrictEqual({ result: 1, steps: [] })
    expect(collatz(5)).toStrictEqual({ result: 1, steps: [16, 8, 4, 2, 1] })
  })
})
