/*
 * Author: Harinath-B (https://github.com/Harinath-B)
 * Infix and POstfix notation explanation can be found in the following links:
 * Wikipedia: https://en.wikipedia.org/wiki/Infix_notation / https://en.wikipedia.org/wiki/Reverse_Polish_notation
 */

class Stack {
  constructor () {
    this.stack = []
    this.top = -1
  }

  // Adds a value to the end of the Stack
  push (newValue) {
    this.stack.push(newValue)
    this.top++
  }

  // Returns and removes the last element of the Stack
  pop () {
    if (this.top !== -1) {
      this.top--
      return this.stack.pop()
    }
    throw new Error('Stack Underflow')
  }

  // Returns the number of elements in the Stack
  length () {
    return this.top
  }

  // Returns true if stack is empty, false otherwise
  isEmpty () {
    return this.top === -1
  }

  // Returns the last element without removing it
  last () {
    if (this.top !== -1) {
      return this.stack[this.length()]
    }
    return null
  }
}

const isAlNum = (c) => {
  return c.match(/^[a-z0-9]+$/i) !== null
}

const priority = (op) => {
  if (op === '+' || op === '-') {
    return 1
  } else if (op === '*' || op === '/') {
    return 2
  }
  return 0
}

function ToPostfix (infix) {
  let postfix = ''
  const opStack = new Stack()
  for (const c of infix) {
    if (isAlNum(c)) {
      postfix += c
    } else if (c === '(') {
      opStack.push(c)
    } else if (c === ')') {
      let x = ''
      while ((x = opStack.pop()) !== '(') {
        postfix += x
      }
    } else {
      while (priority(opStack.last()) > priority(c)) {
        postfix += opStack.pop()
      } opStack.push(c)
    }
  }
  while (opStack.top !== -1) {
    postfix += opStack.pop()
  }
  return postfix
}

export { ToPostfix }
