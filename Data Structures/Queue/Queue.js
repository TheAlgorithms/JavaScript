/* Queue
* A Queue is a data structure that allows you to add an element to the end of
* a list and remove the item at the front. A queue follows a "First In First Out"
* system, where the first item to enter the queue is the first to be removed. This
* implementation uses an array to store the queue.
*/

//Functions: enqueue, dequeue, peek, view, length

var Queue = function() {

  //This keeps track of where the end of the queue is
  this.back = 0;
  //This is the array representation of the queue
  this.queue = {};

  //Add a value to the end of the queue
  this.enqueue = function(item) {
    this.queue[this.back] = item;
    this.back++;
  }

  //Removes the value at the front of the queue
  this.dequeue = function() {
    if (this.back === 0) {
      return "Queue is Empty";
    }

    var result = this.queue[this.front];
    delete this.queue[this.front];

    //Shift all the other items forward
    for (var i = 1; i < this.back; i++) {
      this.queue[i - 1] = this.queue[i];
    }

    //clean up the leftover duplicated value at the back of the queue
    delete this.queue[this.back];
    this.back--;

    return result;
  }

  //Return the length of the queue
  this.length = function() {
    return this.back;
  }

  //Return the item at the front of the queue
  this.peek = function() {
    return this.queue[0];
  }

  //List all the items in the queue
  this.view = function() {
    var str = "{"
    //construct a single string to represent the items in the queue
    for (var i = 0; i < this.back; i++) {
      str += this.queue[i];
      if (i !== this.back - 1) {
        str += ", ";
      }
    }
    str += "}";

    console.log(str);
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