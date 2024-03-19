import { ToPostfix } from '../ToPostfix'

describe('ToPostfix', () => {
  it('Converting the given infix expression to postfix', () => {
    const infix = 'a*b+(c-d/e)'
    const postfix = ToPostfix(infix)
    const expected = 'ab*cde/-+'
    expect(postfix).toEqual(expected)
  })

  it('Testing empty input', () => {
    const infix = ''
    const postfix = ToPostfix(infix)
    const expected = ''
    expect(postfix).toEqual(expected)
  })
})
