import { SinglyCircularLinkedList } from '../SinglyCircularLinkedList'

describe('SinglyCircularLinkedList', () => {
  let list
  beforeEach(() => {
    list = new SinglyCircularLinkedList()
  })
  it('Check get', () => {
    expect(list.get()).toEqual([])
    expect(list.add(1)).toEqual(1)
    expect(list.get()).toEqual([1])
    expect(list.add(5)).toEqual(2)
    expect(list.get()).toEqual([1, 5])
  })

  it('Check size', () => {
    expect(list.size()).toEqual(0)
    expect(list.add(1)).toEqual(1)
    expect(list.add(1)).toEqual(2)
    expect(list.size()).toEqual(2)
  })

  it('Check head', () => {
    expect(list.head()).toEqual(null)
    expect(list.add(1)).toEqual(1)
    expect(list.head()).toEqual(1)
    expect(list.add(1)).toEqual(2)
    expect(list.head()).toEqual(1)
    expect(list.addAtFirst(100)).toEqual(3)
    expect(list.head()).toEqual(100)
    expect(list.insertAt(0, 500)).toEqual(4)
    expect(list.head()).toEqual(500)
    list.clear()
    expect(list.head()).toEqual(null)
  })

  it('Check isEmpty', () => {
    expect(list.isEmpty()).toEqual(true)
    expect(list.add(1)).toEqual(1)
    expect(list.add(1)).toEqual(2)
    expect(list.isEmpty()).toEqual(false)
  })

  it('Check getElementAt', () => {
    list.add(100)
    list.add(200)
    list.add(300)
    list.add(500)
    list.add(900)

    expect(list.getElementAt(1).data).toEqual(200)
    expect(list.getElementAt(3).data).toEqual(500)
  })

  it('Check addAtFirst', () => {
    list.add(1)
    list.add(5)
    list.add(7)
    list.add(9)
    list.add(0)
    expect(list.get()).toEqual([1, 5, 7, 9, 0])
    list.addAtFirst(100)
    expect(list.get()).toEqual([100, 1, 5, 7, 9, 0])
  })

  it('Check add', () => {
    list.add(1)
    list.add(5)
    list.add(7)
    list.add(9)
    list.add(0)
    expect(list.get()).toEqual([1, 5, 7, 9, 0])
    list.add(100)
    expect(list.get()).toEqual([1, 5, 7, 9, 0, 100])
  })

  it('Check insertAt', () => {
    expect(list.insertAt(0, 100)).toEqual(1)
    expect(list.get()).toEqual([100])
    expect(list.insertAt(0, 200)).toEqual(2)
    expect(list.get()).toEqual([200, 100])
    expect(list.insertAt(2, 300)).toEqual(3)
    expect(list.get()).toEqual([200, 100, 300])
  })

  it('Checks indexOf', () => {
    expect(list.indexOf(200)).toEqual(-1)
    list.add(100)
    list.add(200)
    list.add(300)
    list.add(500)
    list.add(900)
    expect(list.indexOf(200)).toEqual(1)
  })

  it('Check remove', () => {
    expect(list.remove()).toEqual(null)
    list.add(100)
    list.add(200)
    list.add(300)
    list.add(500)
    list.add(900)
    expect(list.get()).toEqual([100, 200, 300, 500, 900])
    const removedData = list.remove()
    expect(removedData).toEqual(900)
    expect(list.get()).toEqual([100, 200, 300, 500])
  })

  it('Check removeFirst', () => {
    expect(list.removeFirst()).toEqual(null)
    list.add(100)
    list.add(200)
    list.add(300)
    list.add(500)
    list.add(900)
    expect(list.get()).toEqual([100, 200, 300, 500, 900])
    const removedData = list.removeFirst()
    expect(removedData).toEqual(100)
    expect(list.get()).toEqual([200, 300, 500, 900])
  })

  it('Check removeAt', () => {
    expect(list.removeAt(1)).toEqual(null)
    list.add(100)
    list.add(200)
    list.add(300)
    list.add(500)
    list.add(900)
    expect(list.get()).toEqual([100, 200, 300, 500, 900])
    const removedData = list.removeAt(2)
    expect(removedData).toEqual(300)
    expect(list.get()).toEqual([100, 200, 500, 900])
  })

  it('Check removeData', () => {
    expect(list.removeData(100)).toEqual(null)
    list.add(100)
    list.add(200)
    list.add(300)
    list.add(500)
    list.add(900)
    expect(list.get()).toEqual([100, 200, 300, 500, 900])
    const removedData = list.removeData(200)
    expect(removedData).toEqual(200)
    expect(list.get()).toEqual([100, 300, 500, 900])
  })
})
