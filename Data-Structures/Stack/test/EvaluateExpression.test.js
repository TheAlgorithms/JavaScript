import { evaluateExpression } from '../evaluateExpression.js';

describe('evaluateExpression', () => {
  it('should evaluate a valid expression', () => {
    const expression = '3 4 * 2 / 5 +'; // (3 * 4) / 2 + 5 = 7
    const result = evaluateExpression(expression);
    expect(result).toBe(7);
  });

  it('should handle division by zero', () => {
    const expression = '3 0 /'; // Division by zero
    const result = evaluateExpression(expression);
    expect(result).toBe(null);
  });

  it('should handle an invalid expression', () => {
    const expression = '3 * 4 2 / +'; // Invalid expression
    const result = evaluateExpression(expression);
    expect(result).toBe(null);
  });

});
