class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}

class SinglyCircularLinkedList {
  constructor () {
    this.head = null
    this.size = 0
  }

  insert (data) {
    const node = new Node(data)

    if (!this.head) {
      node.next = node
      this.head = node
      this.size++
    } else {
      node.next = this.head

      let current = this.head

      while (current.next.data !== this.head.data) {
        current = current.next
      }

      current.next = node
      this.size++
    }
  }

  insertAt (index, data) {
    const node = new Node(data)

    if (index < 0 || index > this.size) return

    if (index === 0) {
      this.head = node
      this.size = 1
      return
    }

    let previous
    let count = 0
    let current = this.head

    while (count < index) {
      previous = current
      current = current.next
      count++
    }

    node.next = current
    previous.next = node
    this.size++
  }

  remove () {
    if (!this.head) return

    let prev
    let current = this.head

    while (current.next !== this.head) {
      prev = current
      current = current.next
    }

    prev.next = this.head
    this.size--
  }

  printData (output = value => console.log(value)) {
    let count = 0
    let current = this.head

    while (current !== null && count < this.size) {
      output(current.data)
      current = current.next
      count++
    }
  }
}

export { SinglyCircularLinkedList }
