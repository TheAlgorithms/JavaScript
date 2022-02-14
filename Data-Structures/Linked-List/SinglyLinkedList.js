/* SinglyLinkedList!!
* A linked list is similar to an array, it holds a list of values.
* However, links in a linked list do not have indexes. With
* a linked list you do not need to predetermine its size as
* it grows and shrinks as it is edited. This is an example of
* a singly linked list.
*/

// Methods - size, head, addLast, addFirst, addAt, removeFirst, removeLast, remove, removeAt, indexOf, isEmpty,  elementAt, get

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.headNode = null
    this.length = 0
  }

  // Returns length
  size () {
    return this.length
  }

  // Returns the head
  head () {
    return this.headNode ? this.headNode.data : null
  }

  // add a node at last it to linklist
  addLast (element) {
    const node = new Node(element)

    // Check if its the first element
    if (this.headNode === null) {
      this.headNode = node
    } else {
      let currentNode = this.headNode

      // Loop till there is a node present in the list
      while (currentNode.next) {
        currentNode = currentNode.next
      }

      // Adding node at the end of the list
      currentNode.next = node
    }

    this.length++ // Increment the length
  }

  // add a node at first it to linklist
  addFirst (element) {
    const node = new Node(element)
    node.next = this.headNode
    this.headNode = node
    this.length++ // Increment the length
  }

  // remove the first from the linklist
  removeFirst () {
    if (this.length > 0) {
      this.headNode = this.headNode.next
      this.length--
    }
  }

  // remove the last from the linklist
  removeLast () {
    if (this.length === 1) {
      this.headNode = null
      this.length--
    } else if (this.length > 1) {
      let index = 0
      let currentNode = this.headNode
      while (index !== this.length - 2) {
        index++
        currentNode = currentNode.next
      }

      currentNode.next = null
      this.length--
    }
  }

  // Removes the node with the value as param
  remove (element) {
    let currentNode = this.headNode

    // Check if the head node is the element to remove
    if (currentNode.data === element) {
      this.headNode = currentNode.next
    } else {
      // Check which node is the node to remove
      while (currentNode && currentNode.next) {
        if (currentNode.next.data === element) {
          currentNode.next = currentNode.next.next
          break
        }
        currentNode = currentNode.next
      }
    }

    this.length-- // Decrementing the length
  }

  // Return if the list is empty
  isEmpty () {
    return this.length === 0
  }

  // Returns the index of the element passed as param otherwise -1
  indexOf (element) {
    let currentNode = this.headNode
    let index = 0

    while (currentNode) {
      // Checking if the node is the element we are searching for
      if (currentNode.data === element) {
        return index
      }
      currentNode = currentNode.next
      index++
    }

    return -1
  }

  // Returns the element at an index
  elementAt (index) {
    if (index >= this.length || index < 0) {
      throw new RangeError('Out of Range index')
    }
    let currentNode = this.headNode
    let count = 0
    while (count < index) {
      count++
      currentNode = currentNode.next
    }
    return currentNode.data
  }

  // Adds the element at specified index
  addAt (index, element) {
    const node = new Node(element)

    // Check if index is out of bounds of list
    if (index > this.length || index < 0) {
      throw new RangeError('Out of Range index')
    }

    let currentNode = this.headNode
    let currentIndex = 0
    // Check if index is the start of list
    if (index === 0) {
      node.next = currentNode
      this.headNode = node
    } else {
      while (currentIndex !== index - 1) {
        currentIndex++
        currentNode = currentNode.next
      }

      // Adding the node at specified index
      const temp = currentNode.next
      currentNode.next = node
      node.next = temp
    }

    // Incrementing the length
    this.length++
  }

  // Removes the node at specified index
  removeAt (index) {
    let currentNode = this.headNode
    let currentIndex = 0

    // Check if index is present in list
    if (index < 0 || index >= this.length) {
      throw new RangeError('Out of Range index')
    }

    // Check if element is the first element
    if (index === 0) {
      this.headNode = currentNode.next
    } else {
      while (currentIndex !== index - 1) {
        currentIndex++
        currentNode = currentNode.next
      }
      currentNode.next = currentNode.next.next
    }

    // Decrementing the length
    this.length--
  }

  // Method to get the LinkedList
  get () {
    const list = []
    let currentNode = this.headNode
    while (currentNode) {
      list.push(currentNode.data)
      currentNode = currentNode.next
    }

    return list
  }
}

export { LinkedList }
