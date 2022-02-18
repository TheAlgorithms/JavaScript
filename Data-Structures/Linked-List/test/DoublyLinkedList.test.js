import { DoubleLinkedList } from '../DoublyLinkedList'

describe('DoubleLinkedList', () => {
  it('Check append', () => {
    const list = new DoubleLinkedList()

    list.append(1)
    expect(list.getHead().element).toEqual(1)

    list.append(2)
    expect(list.getTail().element).toEqual(2)
  })

  it('Check insert', () => {
    const list = new DoubleLinkedList()

    list.insert(0, 1)
    expect(list.getHead().element).toEqual(1)

    list.insert(1, 20)
    expect(list.getTail().element).toEqual(20)
  })

  it('Check removeAt', () => {
    const list = new DoubleLinkedList()

    list.insert(0, 10)
    list.insert(1, 40)
    list.insert(2, 30)

    list.removeAt(0)
    expect(list.getHead().element).toEqual(40)

    list.removeAt(1)
    expect(list.getTail().element).toEqual(40)
  })

  it('Check delete', () => {
    const list = new DoubleLinkedList()

    list.insert(0, 10)
    list.insert(1, 40)

    list.delete(10)
    expect(list.getHead().element).toEqual(40)
  })

  it('Check deleteTail', () => {
    const list = new DoubleLinkedList()

    list.insert(0, 10)
    list.insert(1, 40)

    list.deleteTail()
    expect(list.getTail().element).toEqual(10)
  })

  it('Check toString', () => {
    const list = new DoubleLinkedList()

    list.insert(0, 20)
    expect(list.toString()).toEqual('20')
  })

  it('Check isEmpty', () => {
    const list = new DoubleLinkedList()

    expect(list.isEmpty()).toEqual(true)

    list.insert(0, 'Hello')
    expect(list.isEmpty()).toEqual(false)
  })

  it('Check size', () => {
    const list = new DoubleLinkedList()
    expect(list.size()).toBe(0)

    list.append(10)
    expect(list.size()).toBe(1)

    list.removeAt(1)
    expect(list.size()).toBe(1)
  })

  it('Check toArray', () => {
    const list = new DoubleLinkedList()
    list.append(1)
    list.append(2)

    const listArray = list.toArray()
    expect(listArray).toEqual([1, 2])
  })

  it('Check getHead', () => {
    const list = new DoubleLinkedList()
    expect(list.getHead()).toEqual(null)

    list.append(1)
    list.append(2)
    expect(list.getHead()).toBeInstanceOf(Object)
  })

  it('Check Iterator', () => {
    const list = new DoubleLinkedList()

    let iterate = list.iterator()
    expect(iterate).toBe(-1)

    const arr = [10, 20, 5]
    list.append(arr[0])
    list.append(arr[1])
    list.append(arr[2])
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
})
