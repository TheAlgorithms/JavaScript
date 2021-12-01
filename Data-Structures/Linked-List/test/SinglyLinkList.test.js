import { LinkedList } from '../SinglyLinkList'

describe('SinglyLinkList', () => {
  it('Check addLast', () => {
    const list = new LinkedList()
    expect(list.get()).toEqual([])

    list.addLast(1)
    expect(list.get()).toEqual([1])

    list.addLast(2)
    expect(list.get()).toEqual([1, 2])
  })

  it('Check addFirst', () => {
    const list = new LinkedList()
    expect(list.get()).toEqual([])

    list.addFirst(1)
    expect(list.get()).toEqual([1])

    list.addFirst(2)
    expect(list.get()).toEqual([2, 1])
  })

  it('Check addAt', () => {
    const list = new LinkedList()
    expect(list.get()).toEqual([])

    list.addAt(0, 10)
    expect(list.get()).toEqual([10])

    list.addAt(1, 20)
    expect(list.get()).toEqual([10, 20])

    list.addAt(1, 30)
    expect(list.get()).toEqual([10, 30, 20])

    list.addAt(3, 40)
    expect(list.get()).toEqual([10, 30, 20, 40])
  })

  it('Check removeLast', () => {
    const list = new LinkedList()
    list.addLast(1)
    list.addLast(2)
    expect(list.get()).toEqual([1, 2])

    list.removeLast()
    expect(list.get()).toEqual([1])

    list.removeLast()
    expect(list.get()).toEqual([])
  })

  it('Check removeFirst', () => {
    const list = new LinkedList()
    list.addLast(1)
    list.addLast(2)
    expect(list.get()).toEqual([1, 2])

    list.removeFirst()
    expect(list.get()).toEqual([2])

    list.removeFirst()
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

    list.removeAt(0)
    expect(list.get()).toEqual([20, 30, 40, 50])

    list.removeAt(3)
    expect(list.get()).toEqual([20, 30, 40])

    list.removeAt(1)
    expect(list.get()).toEqual([20, 40])
  })

  it('Check remove', () => {
    const list = new LinkedList()
    list.addLast(10)
    list.addLast(20)
    list.addLast(30)
    expect(list.get()).toEqual([10, 20, 30])

    list.remove(20)
    expect(list.get()).toEqual([10, 30])

    list.remove(30)
    expect(list.get()).toEqual([10])
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
})
