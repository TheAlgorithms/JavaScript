/**
 * @template T
 */
class Node {
  /**
   * @param {T} data
   * @param {Node<T>} next
   */
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

/**
 * Reverse linked list
 * @param {Node} node
 */
export default function reverseList(node) {
  let prev = null
  let current = node

  while (current !== null) {
    const next = current.next
    current.next = prev
    prev = current
    current = next
  }

  node = prev

  return node
}

/**
 * @template T
 * @param {Array<T>} values
 * @returns {Node<T>}
 */
export function createLinkedList(values) {
  return values.reduceRight((list, value) => new Node(value, list), null)
}
