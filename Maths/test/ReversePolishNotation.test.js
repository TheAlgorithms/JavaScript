import { calcRPN } from '../ReversePolishNotation'

describe('ReversePolishNotation', () => {
  it('should evaluate correctly for two values', () => {
    expect(calcRPN('2 3 +')).toEqual(5)
  })
  it("should evaluate' for multiple values", () => {
    expect(calcRPN('2 2 2 * +')).toEqual(6)
    expect(calcRPN('6 9 7 + 2 / + 3 *')).toEqual(42)
  })
})
