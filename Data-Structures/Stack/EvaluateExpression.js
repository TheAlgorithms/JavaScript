/**
 * Evaluate a numeric operations string using a stack.
 * Supports basic arithmetic operations: +, -, *, /
 *
 * @param {string} expression - Numeric operations expression to evaluate.
 * @returns {number|null} - Result of the expression evaluation, or null if the expression is invalid.
 */
function evaluateExpression(expression) {
    const stack = [];
  
    // Helper function to perform an operation and push the result to the stack
    function performOperation(operator) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        if (operand1 === undefined || operand2 === undefined) {
          return null; // Invalid expression
        }
        switch (operator) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            if (operand2 === 0) {
              return null; // Division by zero
            }
            stack.push(operand1 / operand2);
            break;
        }
      } else {
        return null; // Invalid operator
      }
    }
  
    const tokens = expression.split(' ');
  
    for (const token of tokens) {
      if (!isNaN(parseFloat(token))) {
        // If the token is a number, push it to the stack
        stack.push(parseFloat(token));
      } else {
        // If the token is an operator, perform the operation
        const result = performOperation(token);
        if (result === null) {
          return null; // Invalid expression
        }
      }
    }
  
    if (stack.length === 1) {
      // The final result should be on the stack
      return stack[0];
    } else {
      return null; // Invalid expression
    }
  }
  
  export { evaluateExpression };
  