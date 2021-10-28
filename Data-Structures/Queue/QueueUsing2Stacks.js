// implementation of Queue using 2 stacks
// contribution made by hamza chabchoub for a university project

class Queue {
  constructor () {
    this.inputStack = []
    this.outputStack = []
  }

  // Push item into the inputstack
  enqueue (item) {
    this.inputStack.push(item)
  }

  dequeue () {
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

  // display elements of the inputstack
  listIn (output = value => console.log(value)) {
    let i = 0
    while (i < this.inputStack.length) {
      output(this.inputStack[i])
      i++
    }
  }

  // display element of the outputstack
  listOut (output = value => console.log(value)) {
    let i = 0
    while (i < this.outputStack.length) {
      output(this.outputStack[i])
      i++
    }
  }
}

export { Queue }
