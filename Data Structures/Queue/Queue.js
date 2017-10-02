/* Queue
* A Queue is a data structure that allows you to add an element to the end of
* a list and remove the item at the front. A queue follows a "First In First Out"
* system, where the first item to enter the queue is the first to be removed. This
* implementation uses an array to store the queue.
*/

//Functions: enqueue, dequeue, peek, view, length

var Queue = function() {

  //This is the array representation of the queue
  this.queue = [];

  //Add a value to the end of the queue
  this.enqueue = function(item) {
    this.queue[this.queue.length] = item;
  }

  //Removes the value at the front of the queue
  this.dequeue = function() {
    if (this.queue.length === 0) {
      return "Queue is Empty";
    }

    var result = this.queue[0];
    this.queue.splice(0, 1); //remove the item at position 0 from the array

    return result;
  }

  //Return the length of the queue
  this.length = function() {
    return this.queue.length;
  }

  //Return the item at the front of the queue
  this.peek = function() {
    return this.queue[0];
  }

  //List all the items in the queue
  this.view = function() {
    console.log(this.queue);
  }
}

//Implementation
var myQueue = new Queue();

myQueue.enqueue(1);
myQueue.enqueue(5);
myQueue.enqueue(76);
myQueue.enqueue(69);
myQueue.enqueue(32);
myQueue.enqueue(54);

myQueue.view();

console.log("Length: " + myQueue.length());
console.log("Front item: " + myQueue.peek());
console.log("Removed " + myQueue.dequeue() + " from front.");
console.log("New front item: " + myQueue.peek());
console.log("Removed " + myQueue.dequeue() + " from front.");
console.log("New front item: " + myQueue.peek());
myQueue.enqueue(55);
console.log("Inserted 55");
console.log("New front item: " + myQueue.peek());

for (var i = 0; i < 5; i++) {
  myQueue.dequeue();
  myQueue.view();
}

console.log(myQueue.dequeue());