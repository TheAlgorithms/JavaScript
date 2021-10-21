/* Queue
* A Queue is a data structure that allows you to add an element to the end of
* a list and remove the item at the front. A queue follows a "First In First Out"
* system, where the first item to enter the queue is the first to be removed. This
* implementation uses an array to store the queue.
*/

// Functions: enqueue, dequeue, peek, view, length

const Queue = (function () {
  // constructor
  function Queue () {
    // This is the array representation of the queue
    this.queue = []
  }

  // methods
  // Add a value to the end of the queue
  Queue.prototype.enqueue = function (item) {
    this.queue.push(item)
  }

  // Removes the value at the front of the queue
  Queue.prototype.dequeue = function () {
    if (this.queue.length === 0) {
      throw new Error('Queue is Empty')
    }

    const result = this.queue[0]
    this.queue.splice(0, 1) // remove the item at position 0 from the array

    return result
  }

  // Return the length of the queue
  Queue.prototype.length = function () {
    return this.queue.length
  }

  // Return the item at the front of the queue
  Queue.prototype.peek = function () {
    return this.queue[0]
  }

  // List all the items in the queue
  Queue.prototype.view = function (output = value => console.log(value)) {
    output(this.queue)
  }

  return Queue
}())

export { Queue }
