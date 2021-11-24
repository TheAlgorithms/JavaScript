/* Queue
* A Queue is a data structure that allows you to add an element to the end of
* a list and remove the item at the front. A queue follows a "First In First Out"
* system, where the first item to enter the queue is the first to be removed. This
* implementation uses an array to store the queue.
*/

// Functions: enqueue, dequeue, peek, view, length, empty
class Queue {
  // constructor
  constructor () {
    // This is the array representation of the queue
    this.queue = []
  }

  // methods
  // Add a value to the end of the queue
  enqueue (item) {
    this.queue.push(item)
  }

  // Removes the value at the front of the queue
  dequeue () {
    if (this.empty()) {
      throw new Error('Queue is Empty')
    }

    return this.queue.shift() // remove the item at position 0 from the array and return it
  }

  // Return the length of the queue
  length () {
    return this.queue.length
  }

  // Return the item at the front of the queue
  peek () {
    if (this.empty()) {
      throw new Error('Queue is Empty')
    }

    return this.queue[0]
  }

  // List all the items in the queue
  view (output = value => console.log(value)) {
    output(this.queue)
  }

  // Return Is queue empty ?
  empty () {
    return this.queue.length === 0
  }
}

export { Queue }
