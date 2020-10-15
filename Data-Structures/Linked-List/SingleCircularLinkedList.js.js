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

  printData () {
    let count = 0
    let current = this.head

    while (current !== null && count !== this.size) {
      console.log(current.data + '\n')
      current = current.next
      count++
    }
  }
}

const ll = new SinglyCircularLinkedList()

ll.insert(10)
ll.insert(20)
ll.insert(30)
ll.insert(40)
ll.insert(50)
ll.insertAt(5, 60)
ll.remove(5)
ll.printData()
