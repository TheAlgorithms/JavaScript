/**
 * Linked list Implementation using javascript(Recursive Approach)
 * --------------------------------------------------------------
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
   * Function to add node in linkedList (Recursive)
   *
   */
  insertRecursive (node, currentNode = this.head) {
    if (currentNode === null) {
      this.head = new Node(node)
      this.size++
    } else if (currentNode.next === null) {
      currentNode.next = new Node(node)
      this.size++
    } else {
      this.insertRecursive(node, currentNode.next)
    }
  }

  /**
   *
   * @param {*} position
   * @param {*} node
   *
   * Function to insert node in linkedList at specific position (Recursive)
   */

  insertAtPositionRecursive (
    position,
    node,
    currentNode = this.head,
    currentIndex = 0
  ) {
    if (position < 0 || position > this.size) {
      throw new Error('Invalid position for insertion')
    }

    if (position === 0) {
      const newNode = new Node(node)
      newNode.next = this.head
      this.head = newNode
      this.size++
    } else if (currentIndex === position - 1) {
      const newNode = new Node(node)
      newNode.next = currentNode.next
      currentNode.next = newNode
      this.size++
    } else {
      this.insertAtRecursive(position, node, currentNode.next, currentIndex + 1)
    }
  }

  /**
   *
   * @param {*} position
   *
   * Function to remove node from specific position from linkedList
   */
  removeByIndexRecursive (position, currentNode = this.head, currentIndex = 0) {
    if (position < 0 || position >= this.size) {
      throw new Error('Invalid position for deletion')
    }

    if (position === 0) {
      this.head = currentNode.next
      this.size--
      return currentNode.element
    } else if (currentIndex === position - 1) {
      const removedNode = currentNode.next
      currentNode.next = currentNode.next.next
      this.size--
      return removedNode.element
    } else {
      return this.removeByIndexRecursive(
        position,
        currentNode.next,
        currentIndex + 1
      )
    }
  }

  /**
   *
   * @param {*} nodeElement
   * Function to remove node by using its node value of that node of linkedList
   */
  removeByNodeRecursive (
    nodeElement,
    currentNode = this.head,
    previousNode = null
  ) {
    if (currentNode === null) {
      return -1
    }

    if (currentNode.element === nodeElement) {
      if (previousNode === null) {
        this.head = currentNode.next
      } else {
        previousNode.next = currentNode.next
      }
      this.size--
      return currentNode.element
    } else {
      return this.removeByNodeRecursive(
        nodeElement,
        currentNode.next,
        currentNode
      )
    }
  }

  /**
   *
   * @returns
   * Some helper methods of linkedList(Recursive)
   * lengthRecursive() : To find length of linkedList(Recursive)
   * isLinkedListEmptyRecursive() : Check if linkedList is empty or not(Recursive)
   * positionOfNodeRecursive() : Check the position of node(Recursive)
   * consoleLinkedListRecursive() : Console values of linkedList(Recursive)
   */

  lengthRecursive (currentNode = this.head, count = 0) {
    if (currentNode === null) {
      return count
    }
    return this.lengthRecursive(currentNode.next, count + 1)
  }

  isLinkedListEmptyRecursive (currentNode = this.head) {
    return currentNode === null
  }

  positionOfNodeRecursive (node, currentNode = this.head, count = 0) {
    if (currentNode === null) {
      return -1
    }
    if (currentNode.element === node) {
      return count
    }
    return this.positionOfNodeRecursive(node, currentNode.next, count + 1)
  }

  consoleLinkedListRecursive (currentNode = this.head, linkedListString = '') {
    if (currentNode === null) {
      console.log(linkedListString)
      return
    }
    linkedListString += currentNode.element + ' '
    this.consoleLinkedListRecursive(currentNode.next, linkedListString)
  }
}
