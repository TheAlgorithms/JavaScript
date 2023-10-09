// Explanation:- https://www.javatpoint.com/circular-doubly-linked-list

class Node {
  /**
   * Creates a new Node with the given element.
   * @param {*} element - The element to be stored in the node.
   */
  constructor(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
  /**
   * Creates an empty Circular Doubly Linked List.
   */
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * Inserts an element at the specified position in the list.
   * @param {number} position - The position at which to insert the element.
   * @param {*} element - The element to be inserted.
   * @returns {boolean} - True if the insertion was successful, false otherwise.
   */
  insertAt(position, element) {
    if (position >= 0 && position <= this.length) {
      const node = new Node(element);
      let current = this.head;
      let previous = null;
      let index = 0;

      if (position === 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
          node.next = node; // Circular reference
          node.prev = node; // Circular reference
        } else {
          node.next = current;
          node.prev = this.tail;
          this.head = node;
          current.prev = node;
          this.tail.next = node;
        }
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        node.prev = previous;
        previous.next = node;
        current.prev = node;

        if (position === this.length) {
          this.tail = node;
        }
      }

      this.length++;
      return true;
    } else {
      return false;
    }
  }

  /**
   * Appends an element to the end of the list.
   * @param {*} element - The element to be appended.
   */
  append(element) {
    return this.insertAt(this.length, element);
  }

  /**
   * Removes and returns the element at the specified position.
   * @param {number} position - The position of the element to be removed.
   * @returns {*} - The removed element, or null if the position is invalid.
   */
  removeAt(position) {
    if (position >= 0 && position < this.length) {
      let current = this.head;
      let previous = null;
      let index = 0;

      if (position === 0) {
        this.head = current.next;
        this.head.prev = this.tail;
        this.tail.next = this.head;
        if (this.length === 1) {
          this.tail = null;
        }
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
        current.next.prev = previous;

        if (position === this.length - 1) {
          this.tail = previous;
        }
      }

      this.length--;
      return current.element;
    } else {
      return null;
    }
  }

  /**
   * Iterator over the elements in the list.
   */
  *elements() {
    let currentNode = this.head;
    if (!currentNode) return;
    do {
      yield currentNode.element;
      currentNode = currentNode.next;
    } while (currentNode !== this.head);
  }

  /**
   * Checks if the list is empty.
   * @returns {boolean} - True if the list is empty, false otherwise.
   */
  isEmpty() {
    return this.length === 0;
  }
}

export { CircularDoublyLinkedList };
