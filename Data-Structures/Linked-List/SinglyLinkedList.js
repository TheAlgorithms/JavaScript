/* SinglyLinkedList!!
 * A linked list is similar to an array, it holds a list of values.
 * However, links in a linked list do not have indexes. With
 * a linked list you do not need to predetermine its size as
 * it grows and shrinks as it is edited. This is an example of
 * a singly linked list.
 */

// Methods - size, head, addLast, addFirst, addAt, removeFirst, removeLast, remove, removeAt, indexOf, isEmpty,  elementAt, findMiddle, get, clean, rotateListRight

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(listOfValues) {
    this.headNode = null
    this.tailNode = null
    this.length = 0

    if (listOfValues instanceof Array) {
      for (const value of listOfValues) {
        this.addLast(value)
      }
    }
  }

  // initiates the currentNode and currentIndex and return as an object
  initiateNodeAndIndex() {
    return { currentNode: this.headNode, currentIndex: 0 }
  }

  // Returns length
  size() {
    return this.length
  }

  // Returns the head
  head() {
    return this.headNode?.data ?? null
  }

  // Returns the tail
  tail() {
    return this.tailNode?.data ?? null
  }

  // Return if the list is empty
  isEmpty() {
    return this.length === 0
  }

  // add a node at last it to linklist
  addLast(element) {
    // Check if its the first element
    if (this.headNode === null) {
      return this.addFirst(element)
    }
    const node = new Node(element)
    // Adding node at the end of the list and increase the length
    this.tailNode.next = node
    this.tailNode = node
    this.length++
    return this.size()
  }

  // add a node at first it to linklist
  addFirst(element) {
    const node = new Node(element)
    // Check if its the first element
    if (this.headNode === null) {
      this.tailNode = node
    }
    // Adding node at the start of the list and increase the length
    node.next = this.headNode
    this.headNode = node
    this.length++
    return this.size()
  }

  // remove the first from the linklist
  removeFirst() {
    // Check if head is null
    if (this.headNode === null) {
      return null
    }
    // Removing node at the start of the list and decrease the length
    const removedNode = this.headNode
    this.headNode = this.headNode.next
    this.length--
    // Check if the list is empty
    if (this.isEmpty()) {
      this.tailNode = null
    }
    return removedNode?.data
  }

  // remove the last from the linklist
  removeLast() {
    if (this.isEmpty()) return null
    // Check if there is only one element
    if (this.length === 1) {
      return this.removeFirst()
    }
    // Removing node at the end of the list and decrease the length
    const removedNode = this.tailNode
    let { currentNode } = this.initiateNodeAndIndex()
    while (currentNode.next.next) {
      currentNode = currentNode.next
    }
    currentNode.next = null
    this.tailNode = currentNode
    this.length--
    return removedNode.data
  }

  // Removes the node with the value as param
  remove(element) {
    if (this.isEmpty()) return null
    let { currentNode } = this.initiateNodeAndIndex()
    let removedNode = null
    // Check if the head node is the element to remove
    if (currentNode.data === element) {
      return this.removeFirst()
    }
    // Check if the tail node is the element to remove
    if (this.tailNode.data === element) {
      return this.removeLast()
    }
    // Check which node is the node to remove
    while (currentNode.next) {
      if (currentNode.next.data === element) {
        removedNode = currentNode.next
        currentNode.next = currentNode.next.next
        this.length--
        return removedNode.data
      }
      currentNode = currentNode.next
    }
    return removedNode?.data || null
  }

  // Returns the index of the element passed as param otherwise -1
  indexOf(element) {
    if (this.isEmpty()) return -1
    let { currentNode, currentIndex } = this.initiateNodeAndIndex()
    while (currentNode) {
      if (currentNode.data === element) {
        return currentIndex
      }
      currentNode = currentNode.next
      currentIndex++
    }
    return -1
  }

  // Returns the element at an index
  elementAt(index) {
    if (index >= this.length || index < 0) {
      throw new RangeError('Out of Range index')
    }
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    while (currentIndex < index) {
      currentIndex++
      currentNode = currentNode.next
    }
    return currentNode.data
  }

  // Adds the element at specified index
  addAt(index, element) {
    // Check if index is out of bounds of list
    if (index > this.length || index < 0) {
      throw new RangeError('Out of Range index')
    }
    if (index === 0) return this.addFirst(element)
    if (index === this.length) return this.addLast(element)
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    const node = new Node(element)

    while (currentIndex !== index - 1) {
      currentIndex++
      currentNode = currentNode.next
    }

    // Adding the node at specified index
    const tempNode = currentNode.next
    currentNode.next = node
    node.next = tempNode
    // Incrementing the length
    this.length++
    return this.size()
  }

  // Removes the node at specified index
  removeAt(index) {
    // Check if index is present in list
    if (index < 0 || index >= this.length) {
      throw new RangeError('Out of Range index')
    }
    if (index === 0) return this.removeFirst()
    if (index === this.length - 1) return this.removeLast()

    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    while (currentIndex !== index - 1) {
      currentIndex++
      currentNode = currentNode.next
    }
    const removedNode = currentNode.next
    currentNode.next = currentNode.next.next
    this.length--
    return removedNode.data
  }

  // Returns a reference to middle node of linked list
  findMiddle() {
    // If there are two middle nodes, return the second middle node.
    let fast = this.headNode
    let slow = this.headNode

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next
    }
    return slow
  }

  // make the linkedList Empty
  clean() {
    this.headNode = null
    this.tailNode = null
    this.length = 0
  }

  // Method to get the LinkedList
  get() {
    const list = []
    let { currentNode } = this.initiateNodeAndIndex()
    while (currentNode) {
      list.push(currentNode.data)
      currentNode = currentNode.next
    }
    return list
  }

  // Method for Rotating a List to the right by k places
  rotateListRight(k) {
    if (!this.headNode) return
    let current = this.headNode
    let tail = this.tailNode
    let count = 1
    while (current.next) {
      count++
      current = current.next
    }
    current.next = this.headNode
    tail = current
    k %= count
    while (count - k > 0) {
      tail = tail.next
      count--
    }
    this.headNode = tail.next
    tail.next = null
  }

  // Method to iterate over the LinkedList
  iterator() {
    let { currentNode } = this.initiateNodeAndIndex()
    if (currentNode === null) return -1

    const iterate = function* () {
      while (currentNode) {
        yield currentNode.data
        currentNode = currentNode.next
      }
    }
    return iterate()
  }

  // Method to log the LinkedList
  log() {
    console.log(JSON.stringify(this.headNode, null, 2))
  }

  // Method to reverse the LinkedList
  reverse() {
    let head = this.headNode
    let prev = null
    let next = null
    while (head) {
      next = head.next
      head.next = prev
      prev = head
      head = next
    }
    this.tailNode = this.headNode
    this.headNode = prev
  }
}

export { Node, LinkedList }
