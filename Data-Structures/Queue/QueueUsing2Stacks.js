// implementation of Queue using 2 stacks
// contribution made by hamza chabchoub for a university project

class Queue {
  constructor() {
    this.inputStack = []
    this.outputStack = []
  }

  // Push item into the inputstack
  enqueue(item) {
    this.inputStack.push(item)
  }

  dequeue() {
    // push all items to outputstack
    this.outputStack = []
    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop())
    }
    // return the top element of the outputstack if any
    if (this.outputStack.length > 0) {
      const top = this.outputStack.pop()
      // repush all the items to the inputstack
      this.inputStack = []
      while (this.outputStack.length > 0) {
        this.inputStack.push(this.outputStack.pop())
      }
      return top
    }
  }
}

export { Queue }
