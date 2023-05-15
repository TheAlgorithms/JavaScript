import { LinkedList } from '../SinglyLinkedList'

describe('SinglyLinkedList', () => {
  it('Check addLast', () => {
    const list = new LinkedList()
    expect(list.get()).toEqual([])

    expect(list.addLast(1)).toEqual(1)
    expect(list.get()).toEqual([1])

    expect(list.addLast(5)).toEqual(2)
    expect(list.get()).toEqual([1, 5])
  })

  it('Check addFirst', () => {
    const list = new LinkedList()
    expect(list.get()).toEqual([])

    expect(list.addFirst(1)).toEqual(1)
    expect(list.get()).toEqual([1])

    expect(list.addFirst(5)).toEqual(2)
    expect(list.get()).toEqual([5, 1])
  })

  it('Check addAt', () => {
    const list = new LinkedList()
    expect(list.get()).toEqual([])

    expect(list.addAt(0, 10)).toEqual(1)
    expect(list.get()).toEqual([10])

    expect(list.addAt(1, 20)).toEqual(2)
    expect(list.get()).toEqual([10, 20])

    expect(list.addAt(1, 30)).toEqual(3)
    expect(list.get()).toEqual([10, 30, 20])

    expect(list.addAt(3, 40)).toEqual(4)
    expect(list.get()).toEqual([10, 30, 20, 40])
  })

  it('Check removeLast', () => {
    const list = new LinkedList()
    list.addLast(1)
    list.addLast(2)
    expect(list.get()).toEqual([1, 2])

    expect(list.removeLast()).toEqual(2)
    expect(list.get()).toEqual([1])

    expect(list.removeLast()).toEqual(1)
    expect(list.get()).toEqual([])
  })

  it('Check removeFirst', () => {
    const list = new LinkedList()
    list.addLast(1)
    list.addLast(2)
    expect(list.get()).toEqual([1, 2])

    expect(list.removeFirst()).toEqual(1)
    expect(list.get()).toEqual([2])

    expect(list.removeFirst()).toEqual(2)
    expect(list.get()).toEqual([])
  })

  it('Check removeAt', () => {
    const list = new LinkedList()
    list.addLast(10)
    list.addLast(20)
    list.addLast(30)
    list.addLast(40)
    list.addLast(50)
    expect(list.get()).toEqual([10, 20, 30, 40, 50])

    expect(list.removeAt(0)).toEqual(10)
    expect(list.get()).toEqual([20, 30, 40, 50])

    expect(list.removeAt(3)).toEqual(50)
    expect(list.get()).toEqual([20, 30, 40])

    expect(list.removeAt(1)).toEqual(30)
    expect(list.get()).toEqual([20, 40])
  })

  it('Check remove', () => {
    const list = new LinkedList()
    list.addLast(10)
    list.addLast(20)
    list.addLast(30)
    expect(list.get()).toEqual([10, 20, 30])

    expect(list.remove(10)).toEqual(10)
    expect(list.get()).toEqual([20, 30])

    expect(list.remove(100)).toEqual(null)
    expect(list.get()).toEqual([20, 30])
  })

  it('Check indexOf', () => {
    const list = new LinkedList()
    list.addLast(10)
    list.addLast(20)
    list.addLast(30)
    list.addLast(40)
    list.addLast(50)
    expect(list.indexOf(10)).toBe(0)
    expect(list.indexOf(30)).toBe(2)
    expect(list.indexOf(50)).toBe(4)
    expect(list.indexOf(70)).toBe(-1)
  })

  it('Check elementAt', () => {
    const list = new LinkedList()
    list.addLast(10)
    list.addLast(20)
    list.addLast(30)
    list.addLast(40)
    list.addLast(50)
    expect(list.elementAt(0)).toBe(10)
    expect(list.elementAt(1)).toBe(20)
    expect(list.elementAt(3)).toBe(40)
    expect(list.elementAt(4)).toBe(50)
  })

  it('Check isEmpty', () => {
    const list = new LinkedList()
    expect(list.isEmpty()).toBe(true)
    list.addLast(10)
    list.addLast(20)
    list.addLast(30)
    list.addLast(40)
    list.addLast(50)
    expect(list.isEmpty()).toBe(false)
  })

  it('Check head', () => {
    const list = new LinkedList()
    expect(list.head()).toBe(null)

    list.addLast(10)
    expect(list.head()).toBe(10)

    list.addLast(20)
    expect(list.head()).toBe(10)

    list.addFirst(30)
    expect(list.head()).toBe(30)

    // check for a falsy head data
    list.addFirst(false)
    expect(list.head()).toBe(false)
  })

  it('Check tail', () => {
    const list = new LinkedList()
    expect(list.tail()).toBe(null)

    list.addLast(10)
    expect(list.tail()).toBe(10)

    list.addLast(20)
    expect(list.tail()).toBe(20)

    list.addFirst(30)
    expect(list.tail()).toBe(20)

    // check for a falsy tail data
    list.addLast(false)
    expect(list.tail()).toBe(false)
  })

  it('Check size', () => {
    const list = new LinkedList()
    expect(list.size()).toBe(0)

    list.addLast(10)
    expect(list.size()).toBe(1)

    list.addLast(20)
    expect(list.size()).toBe(2)

    list.removeFirst()
    expect(list.size()).toBe(1)
  })

  it('Middle node of linked list', () => {
    const list = new LinkedList()
    list.addFirst(1)

    // Middle node for list having single node
    expect(list.findMiddle().data).toEqual(1)

    list.addLast(2)
    list.addLast(3)
    list.addLast(4)
    list.addLast(5)
    list.addLast(6)
    list.addLast(7)

    // Middle node for list having odd number of nodes
    expect(list.findMiddle().data).toEqual(4)

    list.addLast(10)

    // Middle node for list having even number of nodes
    expect(list.findMiddle().data).toEqual(5)
  })

  it('Check Iterator', () => {
    const list = new LinkedList()

    let iterate = list.iterator()
    expect(iterate).toBe(-1)

    const arr = [10, 20, 5]
    list.addLast(arr[0])
    list.addLast(arr[1])
    list.addLast(arr[2])
    iterate = list.iterator()

    for (let i = 0; i < arr.length; i++) {
      expect(iterate.next().value).toBe(arr[i])
    }
    expect(iterate.next().value).toBe(undefined)

    iterate = list.iterator()
    let count = 0
    for (const item of iterate) {
      expect(item).toBe(arr[count])
      count++
    }
  })
  it('Cleans the linkedList', () => {
    const list = new LinkedList()
    list.addLast(10)
    list.addLast(20)
    list.addLast(30)
    list.addLast(40)
    list.addLast(50)
    expect(list.size()).toEqual(5)
    list.clean()
    expect(list.isEmpty()).toBe(true)
  })

  it('should shift every node by k steps towards right, shifts tail nodes towards the start and change head of the list', () => {
    // Case 0: When head of list is null
    const tempNode = new LinkedList()
    expect(tempNode.get()).toEqual([])

    // Creating list
    const headNode = new LinkedList([10, 20, 30, 40, 50])

    // Case 1: when k = 0 => List should be unaffected
    headNode.rotateListRight(0)
    expect(headNode.get()).toEqual([10, 20, 30, 40, 50])

    // Case 2: Rotate right by 2 steps
    headNode.rotateListRight(2)
    expect(headNode.get()).toEqual([40, 50, 10, 20, 30])

    // Case 3: Rotate right by 12 steps
    headNode.rotateListRight(12)
    expect(headNode.get()).toEqual([20, 30, 40, 50, 10])

    // Case 4: when k = length of the list = 5 => List should be unaffected
    headNode.rotateListRight(5)
    expect(headNode.get()).toEqual([20, 30, 40, 50, 10])
  })

  it('Reverse a Linked List', () => {
    const list = new LinkedList([4, 3, 1])
    list.reverse()
    expect(list.get()).toEqual([1, 3, 4])
  })
})
