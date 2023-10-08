// Methods - size, head, isEmpty, getElementAt, addAtFirst, add, clean, insertAt, remove, removeData, printData, get, clear
import { Node } from './SinglyLinkedList.js'

class SinglyCircularLinkedList {
  constructor() {
    this.headNode = null
    this.length = 0
  }

  // Get size of the linkedList
  size = () => this.length
  // Get the headNode data
  head = () => this.headNode?.data || null
  // Check if the linkedList is empty
  isEmpty = () => this.length === 0

  // initiate the node and index
  initiateNodeAndIndex() {
    return { currentNode: this.headNode, currentIndex: 0 }
  }

  // get the data specific to an index
  getElementAt(index) {
    if (this.length !== 0 && index >= 0 && index <= this.length) {
      let { currentNode } = this.initiateNodeAndIndex()
      for (let i = 0; i < index && currentNode !== null; i++) {
        currentNode = currentNode.next
      }
      return currentNode
    }
    return undefined
  }

  // Add the element in the first position
  addAtFirst(data) {
    const node = new Node(data)
    node.next = this.headNode
    this.headNode = node
    this.length++
    return this.length
  }

  // Add any data to the end of the linkedList
  add(data) {
    if (!this.headNode) {
      return this.addAtFirst(data)
    }
    const node = new Node(data)
    // Getting the last node
    const currentNode = this.getElementAt(this.length - 1)
    currentNode.next = node
    node.next = this.headNode
    this.length++
    return this.length
  }

  // insert data at a specific position
  insertAt(index, data) {
    if (index === 0) return this.addAtFirst(data)
    if (index === this.length) return this.add(data)
    if (index < 0 || index > this.length)
      throw new RangeError(`Index is out of range max ${this.length}`)
    const node = new Node(data)
    const previousNode = this.getElementAt(index - 1)
    node.next = previousNode.next
    previousNode.next = node
    this.length++
    return this.length
  }

  // find the first index of the data
  indexOf(data) {
    let { currentNode } = this.initiateNodeAndIndex()
    // initializing currentIndex as -1
    let currentIndex = -1
    while (currentNode) {
      if (currentNode.data === data) {
        return currentIndex + 1
      }
      currentIndex++
      currentNode = currentNode.next
    }
    return -1
  }

  // remove the data from the end of the list
  remove() {
    if (this.isEmpty()) return null
    const secondLastNode = this.getElementAt(this.length - 2)
    const removedNode = secondLastNode.next
    secondLastNode.next = this.headNode
    this.length--
    return removedNode.data || null
  }

  // remove the data from the first of the list
  removeFirst() {
    if (this.isEmpty()) return null
    const removedNode = this.headNode
    if (this.length === 1) {
      this.clear()
      return removedNode.data
    }
    const lastNode = this.getElementAt(this.length - 1)
    this.headNode = this.headNode.next
    lastNode.next = this.headNode
    this.length--
    return removedNode.data || null
  }

  // remove the data from the index
  removeAt(index) {
    if (this.isEmpty()) return null
    if (index === 0) return this.removeFirst()
    if (index === this.length) return this.remove()
    if (index < 0 && index > this.length) return null
    const previousNode = this.getElementAt(index - 1)
    const currentNode = previousNode.next
    previousNode.next = currentNode.next
    this.length--
    return currentNode.data || null
  }

  // remove if the data is present
  removeData(data) {
    if (this.isEmpty()) return null
    const index = this.indexOf(data)
    return this.removeAt(index)
  }

  // logs the data
  printData(output = (value) => console.log(value)) {
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()

    while (currentNode !== null && currentIndex < this.length) {
      output(currentNode.data)
      currentNode = currentNode.next
      currentIndex++
    }
  }

  // get the data from the linkedList
  get() {
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    const list = []
    while (currentNode !== null && currentIndex < this.length) {
      list.push(currentNode.data)
      currentNode = currentNode.next
      currentIndex++
    }
    return list
  }

  clear() {
    this.headNode = null
    this.length = 0
  }
}

export { SinglyCircularLinkedList }
