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
      console.log('UNDERFLOW')
      return
    }
    const y = this.queue[this.front]
    this.queue[this.front] = '*'
    if (this.checkSingleelement()) {

    } else {
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
      console.log('CIRCULAR QUEUE OVERFLOW')
      return true
    }
  }

  // Prints the entire array
  display () {
    for (let index = 1; index < this.queue.length; index++) {
      console.log(this.queue[index])
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

function main () {
  // Star represents blank space
  const queue = new CircularQueue(6) // Enter Max Length
  queue.enqueue(1)
  queue.enqueue(15)
  queue.enqueue(176)
  queue.enqueue(59)
  queue.enqueue(3)
  queue.enqueue(55)

  queue.display()

  queue.dequeue()
  queue.dequeue()
  queue.dequeue()
  queue.display()

  console.log(queue.peek())
}

main()
