class Node {
  constructor (element) {
    this.element = element
    this.next = null
    this.prev = null
  }
}

class DoubleLinkedList {
  constructor () {
    this.length = 0
    this.head = null
    this.tail = null
  }

  // Add new element
  append (element) {
    const node = new Node(element)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.prev = this.tail
      this.tail.next = node
      this.tail = node
    }

    this.length++
  }

  // Add element
  insert (position, element) {
    // Check of out-of-bound values
    if (position >= 0 && position <= this.length) {
      const node = new Node(element)
      let current = this.head
      let previous = 0
      let index = 0

      if (position === 0) {
        if (!this.head) {
          this.head = node
          this.tail = node
        } else {
          node.next = current
          current.prev = node
          this.head = node
        }
      } else if (position === this.length) {
        current = this.tail
        current.next = node
        node.prev = current
        this.tail = node
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        node.next = current
        previous.next = node

        // New
        current.prev = node
        node.prev = previous
      }

      this.length++
      return true
    } else {
      return false
    }
  }

  // Remove element at any position
  removeAt (position) {
    // look for out-of-bounds value
    if (position > -1 && position < this.length) {
      let current = this.head
      let previous = 0
      let index = 0

      // Removing first item
      if (position === 0) {
        this.head = current.next

        // if there is only one item, update this.tail //NEW
        if (this.length === 1) {
          this.tail = null
        } else {
          this.head.prev = null
        }
      } else if (position === this.length - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        while (index++ < position) {
          previous = current
          current = current.next
        }

        // link previous with current's next - skip it
        previous.next = current.next
        current.next.prev = previous
      }

      this.length--
      return current.element
    } else {
      return null
    }
  }

  // Get the indexOf item
  indexOf (elm) {
    let current = this.head
    let index = -1

    // If element found then return its position
    while (current) {
      if (elm === current.element) {
        return ++index
      }

      index++
      current = current.next
    }

    // Else return -1
    return -1
  }

  // Find the item in the list
  isPresent (elm) {
    return this.indexOf(elm) !== -1
  }

  // Delete an item from the list
  delete (elm) {
    return this.removeAt(this.indexOf(elm))
  }

  // Delete first item from the list
  deleteHead () {
    this.removeAt(0)
  }

  // Delete last item from the list
  deleteTail () {
    this.removeAt(this.length - 1)
  }

  // Print item of the string
  toString () {
    let current = this.head
    let string = ''

    while (current) {
      string += current.element + (current.next ? '\n' : '')
      current = current.next
    }

    return string
  }

  // Convert list to array
  toArray () {
    const arr = []
    let current = this.head

    while (current) {
      arr.push(current.element)
      current = current.next
    }

    return arr
  }

  // Check if list is empty
  isEmpty () {
    return this.length === 0
  }

  // Get the size of the list
  size () {
    return this.length
  }

  // Get the this.head
  getHead () {
    return this.head
  }

  // Get the this.tail
  getTail () {
    return this.tail
  }

  // Method to iterate over the LinkedList
  iterator () {
    let currentNode = this.getHead()
    if (currentNode === null) return -1

    const iterate = function * () {
      while (currentNode) {
        yield currentNode.element
        currentNode = currentNode.next
      }
    }
    return iterate()
  }

  // Method to log the LinkedList, for debugging
  // it' a circular structure, so can't use stringify to debug the whole structure
  log () {
    let currentNode = this.getHead()
    while (currentNode) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }
}

// Example

// const newDoubleLinkedList = new DoubleLinkedList()
// newDoubleLinkedList.append(1)
// newDoubleLinkedList.append(2)
// newDoubleLinkedList.size() // returns 2
// const iterate = newDoubleLinkedList.iterator()
// console.log(iterate.next().value) // 1
// console.log(iterate.next().value) // 2
// console.log(newDoubleLinkedList.log())

export { DoubleLinkedList }
