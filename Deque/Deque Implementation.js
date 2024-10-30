class Node {
    constructor(value) {
        this.data = value;
        this.prev = null;
        this.next = null;
    }
}

class Dequeue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    // Add to the front of the dequeue
    pushFront(value) {
        const newNode = new Node(value);
        if (!this.front) {
            this.front = this.rear = newNode;
        } else {
            newNode.next = this.front;
            this.front.prev = newNode;
            this.front = newNode;
        }
    }

    // Add to the back of the dequeue
    pushBack(value) {
        const newNode = new Node(value);
        if (!this.rear) {
            this.front = this.rear = newNode;
        } else {
            newNode.prev = this.rear;
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    // Remove from the front of the dequeue
    popFront() {
        if (!this.front) {
            console.log("Dequeue is empty");
            return null;
        }
        const value = this.front.data;
        this.front = this.front.next;
        if (this.front) {
            this.front.prev = null;
        } else {
            this.rear = null;
        }
        return value;
    }

    // Remove from the back of the dequeue
    popBack() {
        if (!this.rear) {
            console.log("Dequeue is empty");
            return null;
        }
        const value = this.rear.data;
        this.rear = this.rear.prev;
        if (this.rear) {
            this.rear.next = null;
        } else {
            this.front = null;
        }
        return value;
    }

    // Check if the dequeue is empty
    isEmpty() {
        return this.front === null;
    }

    // Get the front element
    getFront() {
        return this.front ? this.front.data : null;
    }

    // Get the rear element
    getRear() {
        return this.rear ? this.rear.data : null;
    }
}

// Example usage:
const dequeue = new Dequeue();
dequeue.pushFront(10);
dequeue.pushBack(20);
dequeue.pushFront(5);
console.log("Front element:", dequeue.getFront()); // 5
console.log("Rear element:", dequeue.getRear());   // 20
console.log("Popped from front:", dequeue.popFront()); // 5
console.log("Popped from back:", dequeue.popBack());   // 20
console.log("Is dequeue empty?", dequeue.isEmpty());   // false
