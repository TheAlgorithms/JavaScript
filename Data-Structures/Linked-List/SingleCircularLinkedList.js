// Defining Node class
class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

class SinglyCircularLinkedList {
  constructor () {
    this.head = null
    this.size = 0
  }
  // Constructor, starts list with an empty head node and size 0
  insert (data) {
    const node = new Node(data)

    if (!this.head) {
      node.next = node
      this.head = node
      this.size++
      // If list is empty, head is set to new node with data, and size is incremented
    } else {
      node.next = this.head

      let current = this.head

      while (current.next.data !== this.head.data) {
        current = current.next
      }

      current.next = node
      this.size++
      // If list is not empty, make the new node point at the head, 
      // and loop until you reach the last node, and make it point at the new node
    }
  }

  insertAt (index, data) {
    const node = new Node(data)

    if (index < 0 || index > this.size) return
    // If index is invalid, return
    if (index === 0) {
      this.head = node
      this.size = 1
      return
    }
    // If index is 0, set the new node as the head of the list

    let previous
    let count = 0
    let current = this.head

    while (count < index) {
      previous = current
      current = current.next
      count++
    }
    // Loop over the nodes until required index is reached
    node.next = current
    previous.next = node
    this.size++
    // Insert the node
  }

  remove () {
    if (!this.head) return
    // If list is empty, return
    let prev
    let current = this.head

    while (current.next !== this.head) {
      prev = current
      current = current.next
    }
    // Loop until the last node is reached
    prev.next = this.head
    this.size--
    // Unlink the last node and decrement size
  }

  printData (output = value => console.log(value)) {
    let count = 0
    let current = this.head

    while (current !== null && count < this.size) {
      output(current.data)
      current = current.next
      count++
    }
  }
}

export { SinglyCircularLinkedList }
