// Circular Queues offer a quick to store FIFO data with a maximum size.
// Conserves memory as we only store up to our capacity
// It is opposed to a queue which could continue to grow if input outpaces output
// Doesn’t use dynamic memory so No memory leaks

class CircularQueue {
  constructor (maxLength) {
    this.queue = []
    this.front = 0
    this.rear = 0
    this.maxLength = maxLength
  }

  // ADD ELEMENTS TO QUEUE
  enqueue (value) {
    if (this.checkOverflow()) return
    if (this.checkEmpty()) {
      this.front += 1
      this.rear += 1
    } else {
      if (this.rear === this.maxLength) {
        this.rear = 1
      } else this.rear += 1
    }
    this.queue[this.rear] = value
  }

  // REMOVES ELEMENTS
  dequeue () {
    if (this.checkEmpty()) {
      // UNDERFLOW
      return
    }
    const y = this.queue[this.front]
    this.queue[this.front] = '*'
    if (!this.checkSingleelement()) {
      if (this.front === this.maxLength) this.front = 1
      else {
        this.front += 1
      }
    }

    return y // Returns the removed element and replaces it with a star
  }

  // checks if the queue is empty or not
  checkEmpty () {
    if (this.front === 0 && this.rear === 0) {
      return true
    }
  }

  checkSingleelement () {
    if (this.front === this.rear && this.rear !== 0) {
      this.front = this.rear = 0
      return true
    }
  }

  // Checks if max capacity of queue has been reached or not
  checkOverflow () {
    if ((this.front === 1 && this.rear === this.maxLength) || (this.front === this.rear + 1)) {
      // CIRCULAR QUEUE OVERFLOW
      return true
    }
  }

  // Prints the entire array ('*' represents blank space)
  display (output = value => console.log(value)) {
    for (let index = 1; index < this.queue.length; index++) {
      output(this.queue[index])
    }
  }

  // Displays the length of queue
  length () {
    return this.queue.length - 1
  }

  // Display the top most value of queue
  peek () {
    return this.queue[this.front]
  }
}

export { CircularQueue }
