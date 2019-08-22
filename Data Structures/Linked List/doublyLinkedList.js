/*
 *  A linked list is similar to an array, it holds values. Links in a linked list do not have indexes.
 *  This is an example of a double ended, doubly linked list.
 *  Each link references the next link and the previous one.
 *  A Doubly Linked List (DLL) contains an extra pointer, typically called previous pointer, together with next pointer and data which are there in singly linked list.
 *  Advantages over Singly Link List - It can be traversed in both forward and backward direction. Delete operation is more efficent.
*/

/* 
 *  Classes DoublyLinkedList and Node.
 *  Methods - push, unshift, pop, shift, get, set, insert, remove and travese.
*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        // Length of DLL is zero , head and tail is null at start
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Create and Insert node at end of DLL, returns the current DLL
    push(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Create and Insert node at start of DLL, returns the current DLL
    unshift(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Removes node at end of DLL, returns the removed node
    pop() {
        if (this.length === 0) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    // Removes node at start of DLL, returns the removed node
    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    // Returns the node at provided index in argument, returns null if wrong index provided. 
    get(index) {
        if (index < 0 || index >= this.length) return null;
        let count, current;
        if (index <= this.length / 2) {
            count = 0;
            current = this.head;
            while (count !== index) {
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while (count !== index) {
                current = current.prev;
                count--;
            }

        }
        return current;
    }

    // Returns true after updating node value at provided index in argument, returns false if wrong index provided.
    set(index, value) {
        let foundNode = this.get(index);
        if (foundNode !== null) {
            foundNode.value = value;
            return true;
        }
        return false;
    }

    // Returns true after creating and inserting new node at provided index in argument, returns false if wrong index provided.
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        let newNode = new Node(value);
        let prevNode = this.get(index - 1);
        let nextNode = prevNode.next;

        newNode.prev = prevNode, prevNode.next = newNode;
        newNode.next = nextNode, nextNode.prev = newNode;
        this.length++;
        return true;
    }

    // Returns node after removing node at provided index in argument, returns null if wrong index provided.
    remove(index) {
        if (index < 0 || index >= this.length) return null;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        let prevNode = removedNode.prev;
        let nextNode = removedNode.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

    // Traverse through current existing DLL
    travese() {
        if (this.length === 0) console.log('LIST IS EMPTY!!!!');
        else {
            let currentList = '';
            let count = 0;
            while (count < this.length) {
                currentList += ` -> ${this.get(count).value}`;
                count++;
            }
            console.log(currentList);
        }
    }
}

//Implementation of DLL
let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.travese(); // -> 1 -> 2
list.unshift(0);
list.travese(); // -> 0 -> 1 -> 2
console.log(list.get(1).value); // 1
list.insert(3, 3);
list.travese(); // -> 0 -> 1 -> 2 -> 3
list.set(1, 5);
list.travese(); // -> 0 -> 5 -> 2 -> 3
list.remove(1);
list.travese(); // -> 0 -> 2 -> 3
list.pop();
list.travese(); // -> 0 -> 2
list.shift();
list.travese(); // -> 2