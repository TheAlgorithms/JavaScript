/* Class representing Doubly LinkedList */

class DoublyLinkedList {
    constructor(value) {
        this.head = { value, next: null, prev: null }
        this.tail = this.head
    }

    /**
    * Inserts new node at the end of the list
    * @param {*} value - value of the node
    */
    insert(value) {
        let newNode = { value, next: null, prev: this.tail }
        this.tail.next = newNode
        this.tail = newNode
    }

    /*
    * Removes the tail of LinkedList
    */
    removeTail() {
        if (this.head === this.tail) {
            this.head = null
            this.tail = this.head
            return
        }
        this.tail = this.tail.prev
        this.tail.next = null
    }

    /*
    * Removes the head or first node of LinkedList
    */
    removeHead() {
        if (this.head === this.tail) {
            this.head = null
            this.tail = this.head
            return
        }
        this.head = this.head.next
        this.head.prev = null
    }

    /**
    * Checks the given value is head or not
    * @param {value} - value to check
    * @return {boolean} - true if the value is equals to head value, otherwise false
    */
    isHead(value) {
        return this.head.value == value
    }
}

const myList = new DoublyLinkedList(1)
myList.insert(2)
myList.insert(3)
myList.insert(4)
myList.removeTail()
myList.removeHead()
console.log(myList)