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

  dequeue (item) {
    // push all items to outputstack
    this.outputStack = []
    if (this.inputStack.length > 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop())
      }
    }
    // display the top element of the outputstack
    if (this.outputStack.length > 0) {
      console.log(this.outputStack.pop())
      // repush all the items to the inputstack
      this.inputStack = []
      while (this.outputStack.length > 0) {
        this.inputStack.push(this.outputStack.pop())
      }
    }
  }

  // display elements of the inputstack
  listIn () {
    let i = 0
    while (i < this.inputStack.length) {
      console.log(this.inputStack[i])
      i++
    }
  }

  // display element of the outputstack
  listOut () {
    let i = 0
    while (i < this.outputStack.length) {
      console.log(this.outputStack[i])
      i++
    }
  }
}

// testing

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(8)
queue.enqueue(9)

console.log(queue.dequeue())
// ans = 1
console.log(queue.dequeue())
// ans = 2
