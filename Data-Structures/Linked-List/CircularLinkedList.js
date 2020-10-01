/* CircularLinkedList
*
* CircularLinkedList is a type of linked list where the last element links
* to the head of the list
*/

function CircularLinkedList () {
  let length = 0
  let last = null

  const Node = function (element) {
    this.next = null
    this.el = element
  }

  this.size = () => {
    return length
  }

  this.isEmpty = () => {
    return length === 0
  }

  // Insert at end of list
  this.insert = (element) => {
    const newNode = new Node(element)
    if (last === null) {
      last = newNode
      newNode.next = newNode
    } else {
      newNode.next = last.next
      last.next = newNode
      last = newNode
    }
    length++
  }

  // Delete all nodes with given element
  this.delete = (element) => {
    if (length === 0) {
      return
    }

    if (element === last.el) {
      this.pop()
    } else {
      let node = last
      while (node.next !== last) {
        if (node.next.el === element) {
          node.next = node.next.next
        }
        node = node.next
      }
    }
    length--
  }

  // Pops off the last element and returns it
  this.pop = () => {
    if (length === 0) {
      return null
    }

    const el = last.el
    if (length === 1) {
      last = null
    } else {
      let node = last.next
      while (node.next !== last) {
        node = node.next
      }
      node.next = last.next
      last = node
    }
    length--
    return el
  }

  // Return index of an element
  this.indexOf = (element) => {
    let node = last.next
    while (node !== last) {
      if (node.el === element) {
        return node
      }
      node = node.next
    }
    return -1
  }

  // Return list as string
  this.toString = () => {
    if (length === 0) {
      return ''
    } else if (length === 1) {
      return '[' + last.el + ']'
    } else {
      let str = '[' + last.next.el + ']'
      let node = last.next.next
      while (node !== last.next) {
        str += ' -> [' + node.el + ']'
        node = node.next
      }
      return str
    }
  }

  // Return list as array
  this.toArray = () => {
    if (length === 0) {
      return []
    } else if (length === 1) {
      return [last.el]
    } else {
      const lst = []
      let node = last.next
      do {
        lst.push(node.el)
        node = node.next
      } while (node !== last.next)
      return lst
    }
  }
}

// Testing
const cll = new CircularLinkedList()
cll.insert(1)
console.log(cll.toString())
cll.insert(2)
console.log(cll.toString())
cll.delete(1)
console.log(cll.toString())
cll.insert(3)
console.log(cll.toString())
cll.pop()
console.log(cll.toString())
cll.insert(1)
cll.insert(2)
console.log(cll.toString())
cll.delete(2)
console.log(cll.toString())
