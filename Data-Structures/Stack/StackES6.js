/* Stack data-structure. It's work is based on the LIFO method (last-IN-first-OUT).
 * It means that elements added to the stack are placed on the top and only the
 * last element (from the top) can be reached. After we get access to the last
 * element, he pops from the stack.
 * This is a class-based implementation of a Stack. It provides functions
 * 'push' - to add an element, 'pop' - to remove an element from the top.
 * Also it implements 'length', 'last' and 'isEmpty' properties and
 * static isStack method to check is an object the instance of Stack class.
 */

// Class declaration
class Stack {
  constructor() {
    this.stack = []
    this.top = 0
  }

  // Adds a value to the end of the Stack
  push(newValue) {
    this.stack.push(newValue)
    this.top += 1
  }

  // Returns and removes the last element of the Stack
  pop() {
    if (this.top !== 0) {
      this.top -= 1
      return this.stack.pop()
    }
    throw new Error('Stack Underflow')
  }

  // Returns the number of elements in the Stack
  get length() {
    return this.top
  }

  // Returns true if stack is empty, false otherwise
  get isEmpty() {
    return this.top === 0
  }

  // Returns the last element without removing it
  get last() {
    if (this.top !== 0) {
      return this.stack[this.stack.length - 1]
    }
    return null
  }

  // Checks if an object is the instance os the Stack class
  static isStack(el) {
    return el instanceof Stack
  }
}

export { Stack }
