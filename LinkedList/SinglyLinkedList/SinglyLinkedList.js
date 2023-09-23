/**
 * Linked list Implementation using javascript
 * ------------------------------------------
 * Implementing the LinkedList element structure in Javascript.
 * LinkedList is the dynamic element structure, as we can add or remove elements at ease, and iterator can even grow as needed. Just like arrays, linked lists store elements sequentially, but don’t store the elements contiguously like an array.
 * Now, Let’s see an example of a Linked List Node:
 */

/**
 * Initializing Node for linkedList
 */
class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

/**
 * Implementation of linkedList methods using javascript
 * This is an implementation of singly linkedList
 */
export class LinkedList {
  constructor () {
    this.head = null
    this.size = 0
  }

  /**
   *
   * @param {node}
   * @returns void
   *
   * Function to add node in linkedList
   *
   */
  insert (node) {
    const listNode = new Node(node)

    let currentNode

    if (this.head === null) {
      this.head = listNode
      return
    } else {
      currentNode = this.head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = node
    }

    this.size++
  }

  /**
   *
   * @param {*} position
   * @param {*} node
   *
   * Function to insert node in linkedList at specific position
   */

  insertAt (position, node) {
    if (position < 0 || position > this.size) {
      throw new Error('Invalid position for insertion')
    } else {
      // creates a new node
      const listNode = new Node(node)
      let current, previous

      current = this.head

      // add the node to the first index
      if (position === 0) {
        listNode.next = this.head
        this.head = listNode
      } else {
        current = this.head
        let iterator = 0

        while (iterator < position) {
          iterator++
          previous = current
          current = current.next
        }

        listNode.next = current
        previous.next = listNode
      }
      this.size++
    }
  }

  /**
   *
   * @param {*} position
   *
   * Function to remove node from specific position from linkedList
   */
  removeByIndex (position) {
    // check for invalid position
    if (position < 0 || position >= this.size) { throw new Error('Invalid position for deletion') } else {
      let previous = 0
      let iterator = 0
      let current = 0
      current = this.head
      previous = current

      // deleting first node if position = 0

      if (position === 0) {
        this.head = current.next
      } else {
        while (iterator < position) {
          iterator++
          previous = current.next
        }

        previous.next = current.next
      }
      this.size--

      return current.node
    }
  }

  /**
   *
   * @param {*} nodeElement
   * Function to remove node by using its node value of that node of linkedList
   */
  removeByNode (nodeElement) {
    let currentNode = this.head
    let previousNode = null

    /**
     * Performing simple linear search technique for searching node value
     * Reason : Singly LinkedList not have capabilities of maintaining both previous and next reference
     */
    while (currentNode !== null) {
      if (currentNode.element === nodeElement) {
        if (previousNode === null) {
          this.head = currentNode.next
        } else {
          previousNode.next = currentNode.next
        }
        this.size--
        return currentNode.element
      }
      previousNode = currentNode
      currentNode = currentNode.next
    }

    return -1 // if node value not found
  }

  /**
   *
   * @returns
   * Some helper methods of linkedList
   * length() : To find length of linkedList
   * isLinkedListEmpty() : Check if linkedList is empty or not
   * positionOfNode() : Check the position of node
   * consoleLinkedList() : Console values of linkedList
   */

  length () {
    return this.size
  }

  isLinkedListEmpty () {
    return this.size === 0
  }

  positionOfNode (node) {
    let countOfNodes = 0
    let currentNode = this.head

    while (currentNode !== null) {
      if (currentNode.element === node) {
        return countOfNodes
      }
      countOfNodes++
      currentNode = currentNode.next
    }

    return -1 // if node value not found
  }

  consoleLinkedList () {
    let currentNode = this.head
    let linkedListString = ''
    while (currentNode) {
      linkedListString += currentNode.element + ' '
      currentNode = currentNode.next
    }
    console.log(linkedListString)
  }
}
