/* Queue
 * A deque (double-ended queue) is a data structure that allows
 * the insertion and removal of elements at both ends: front and
 * back. Asymptotic notation describes the efficiency of operations
 * in terms of time (time complexity) or space (space complexity).
 * For a deque, insertion and removal operations at both ends have
 * a time complexity of O(1), indicating they are efficient regardless
 * of the data structure's size.
 * This implementation following the linked list structure.
 */

class DequeNode {
  constructor (data) {
    this.data = data
    this.next = null
    this.prev = null
  }
}

class Deque {
  #size

  constructor () {
    this.headLeft = null
    this.headRight = null
    this.#size = 0

    return Object.seal(this)
  }

  get length () {
    return this.#size
  }

  /**
   * @description - Add an element to the left head of the deque
   * @param {*} data
   * @returns {number} - The current size of queue
   */
  insertLeft (data) {
    const newNode = new DequeNode(data)

    if (this.#size === 0) {
      this.headLeft = newNode
      this.headRight = newNode
    } else {
      newNode.next = this.headLeft
      this.headLeft.prev = newNode
      this.headLeft = newNode
    }

    this.#size++
    return this.#size
  }

  /**
   * @description - Add an element to the right head of the deque
   * @param {*} data
   * @returns {number} - The current size of queue
   */
  insertRight (data) {
    const newNode = new DequeNode(data)

    if (this.#size === 0) {
      this.headLeft = newNode
      this.headRight = newNode
    } else {
      newNode.prev = this.headRight
      this.headRight.next = newNode
      this.headRight = newNode
    }

    this.#size++
    return this.#size
  }

  /**
   * @description - Removes the value at the front of the queue
   * @returns {*} - The first data of the queue
   */
  popRight () {
    if (this.#size === 0) {
      throw new Error('Deque is Empty')
    }

    const rearData = this.headRight.data
    this.headRight = this.headRight.prev

    if (this.headRight) {
      this.headRight.next = null
    } else {
      this.headLeft = null
    }

    this.#size--
    return rearData
  }

  /**
   * @description - Removes the value at the front of the queue
   * @returns {*} - The first data of the queue
   */
  popLeft () {
    if (this.#size === 0) {
      throw new Error('Deque is Empty')
    }

    const frontData = this.headLeft.data
    this.headLeft = this.headLeft.next

    if (this.headLeft) {
      this.headLeft.prev = null
    } else {
      this.headRight = null
    }

    this.#size--
    return frontData
  }

  /**
   * @description - Return the item at the front of the queue
   * @returns {*}
   */
  peekRight () {
    if (this.#size === 0) {
      throw new Error('Deque is Empty')
    }

    return this.headRight.data
  }

  /**
   * @description - Return the item at the headRight of the queue
   * @returns {*}
   */
  peekLeft () {
    if (this.#size === 0) {
      throw new Error('Deque is Empty')
    }

    return this.headLeft.data
  }

  /**
   * @description - Return the array of Queue
   * @returns {Array<*>}
   */
  toArray () {
    const array = []
    let node = this.headLeft

    while (node) {
      array.push(node.data)
      node = node.next
    }

    return array
  }

  /**
   * @description - Return is queue empty or not
   * @returns {boolean}
   */
  isEmpty () {
    return this.length === 0
  }
}

export default Deque
