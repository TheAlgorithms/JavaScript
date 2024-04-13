/* Stack!!
 * A stack is exactly what it sounds like. An element gets added to the top of
 * the stack and only the element on the top may be removed. This is an example
 * of an array implementation of a Stack. So an element can only be added/removed
 * from the end of the array.
 */

// Functions: push, pop, peek, view, length

// Creates a stack constructor
class Stack {
  constructor() {
    // The top of the Stack
    this.top = 0
    // The array representation of the stack
    this.stack = []
  }

  // Adds a value onto the end of the stack
  push(value) {
    this.stack[this.top] = value
    this.top++
  }

  // Removes and returns the value at the end of the stack
  pop() {
    if (this.top === 0) {
      return 'Stack is Empty'
    }

    this.top--
    const result = this.stack[this.top]
    this.stack = this.stack.splice(0, this.top)
    return result
  }

  // Returns the size of the stack
  size() {
    return this.top
  }

  // Returns the value at the end of the stack
  peek() {
    return this.stack[this.top - 1]
  }

  // To see all the elements in the stack
  view(output = (value) => console.log(value)) {
    for (let i = 0; i < this.top; i++) {
      output(this.stack[i])
    }
  }
}

export { Stack }
