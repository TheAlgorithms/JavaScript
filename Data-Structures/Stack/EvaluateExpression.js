/**
 * Evaluate a numeric operations string in postfix notation using a stack.
 * Supports basic arithmetic operations: +, -, *, /
 * @see https://www.geeksforgeeks.org/evaluation-of-postfix-expression/
 * @param {string} expression - Numeric operations expression to evaluate. Must be a valid postfix expression.
 * @returns {number|null} - Result of the expression evaluation, or null if the expression is invalid.
 */
function evaluatePostfixExpression(expression) {
  const stack = []

  // Helper function to perform an operation and push the result to the stack. Returns success.
  function performOperation(operator) {
    const rightOp = stack.pop() // Right operand is the top of the stack
    const leftOp = stack.pop() // Left operand is the next item on the stack

    if (leftOp === undefined || rightOp === undefined) {
      return false // Invalid expression
    }
    switch (operator) {
      case '+':
        stack.push(leftOp + rightOp)
        break
      case '-':
        stack.push(leftOp - rightOp)
        break
      case '*':
        stack.push(leftOp * rightOp)
        break
      case '/':
        if (rightOp === 0) {
          return false
        }
        stack.push(leftOp / rightOp)
        break
      default:
        return false // Unknown operator
    }
    return true
  }

  const tokens = expression.split(/\s+/)

  for (const token of tokens) {
    if (!isNaN(parseFloat(token))) {
      // If the token is a number, push it to the stack
      stack.push(parseFloat(token))
    } else {
      // If the token is an operator, perform the operation
      if (!performOperation(token)) {
        return null // Invalid expression
      }
    }
  }

  return stack.length === 1 ? stack[0] : null
}

export { evaluatePostfixExpression }
