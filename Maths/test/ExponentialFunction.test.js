import { exponentialFunction } from '../ExponentialFunction'

describe('exponentialFunction', () => {
  it('with a power of 5 and order of 21', () => {
    const ex = exponentialFunction(5, 20)
    expect(ex).toBe(148.4131470673818)
  })
})
