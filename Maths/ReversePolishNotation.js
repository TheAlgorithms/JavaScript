// Wikipedia: https://en.wikipedia.org/wiki/Reverse_Polish_notation

const calcRPN = (expression) => {
  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b / a
  }

  const tokens = expression.split(' ')

  const stack = []

  tokens.forEach((token) => {
    const operator = operators[token]

    if (typeof operator === 'function') {
      const a = stack.pop()
      const b = stack.pop()

      const result = operator(a, b)

      stack.push(result)
    } else {
      stack.push(parseFloat(token))
    }
  })

  return stack.pop()
}

export { calcRPN }
