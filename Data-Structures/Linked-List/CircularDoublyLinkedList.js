class Node {
  constructor (element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class CircularDoublyLinkedList {
  constructor () {
    this.length = 0
    this.head = null
    this.tail = null
  }

  // Add new element
  append (element) {
    const node = new Node (element)

    if (!this.head) {
      this.head = node
      this.tail = node
      node.next = node // Circular reference
      node.prev = node // Circular reference
    } else {
      node.prev = this.tail
      node.next = this.head
      this.tail.next = node
      this.head.prev = node
      this.tail = node
    }

    this.length++
  }

  // Insert element at a specific position
  insert (position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element)
      let current = this.head
      let previous = null
      let index = 0

      if (position === 0) {
        node.next = current
        node.prev = this.tail
        this.head = node
        current.prev = node
        this.tail.next = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        node.next = current
        node.prev = previous
        previous.next = node
        current.prev = node

        if (position === this.length) {
          this.tail = node
        }
      }

      this.length++
      return true
    } else {
      return false
    }
  }

  // Remove element at a specific position
  removeAt (position) {
    if (position >= 0 && position < this.length) {
      let current = this.head
      let previous = null
      let index = 0

      if (position === 0) {
        this.head = current.next
        this.head.prev = this.tail
        this.tail.next = this.head
        if (this.length === 1) {
          this.tail = null
        }
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }
        previous.next = current.next
        current.next.prev = previous

        if (position === this.length - 1) {
          this.tail = previous
        }
      }

      this.length--
      return current.element
    } else {
      return null
    }
  }

  // Print the list
  print() {
    const elements = []
    let currentNode = this.head
    if (!currentNode) return
    do {
      elements.push(currentNode.element)
      currentNode = currentNode.next
    } while (currentNode !== this.head)
    console.log(elements.join(' <-> '))
  }
}

export { CircularDoublyLinkedList }
