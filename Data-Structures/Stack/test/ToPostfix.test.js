import { ToPostfix } from "../ToPostfix"

describe('ToPostfix', () => {
  it('Convert the given infix expression to postfix', () => {
    const infix = 'a*b+(c-d/e)'
    const postfix = ToPostfix(infix)
    const expected = 'ab*cde/-+'
    expect(postfix).toEqual(expected)
  })
})
