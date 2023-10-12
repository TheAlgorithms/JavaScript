import { evaluatePostfixExpression } from '../EvaluateExpression.js'

describe('evaluatePostfixExpression', () => {
  it('should evaluate a valid expression', () => {
    const expression = '3 4 * 2 / 5 +' // (3 * 4) / 2 + 5 = 11
    const result = evaluatePostfixExpression(expression)
    expect(result).toBe(11)
  })

  it('should handle division by zero', () => {
    const expression = '3 0 /' // Division by zero
    const result = evaluatePostfixExpression(expression)
    expect(result).toBe(null)
  })

  it('should handle an invalid expression', () => {
    const expression = '3 * 4 2 / +' // Invalid expression
    const result = evaluatePostfixExpression(expression)
    expect(result).toBe(null)
  })
})
