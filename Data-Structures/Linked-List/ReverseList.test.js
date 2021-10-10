import reverseList, { createLinkedList } from './ReverseList'

describe('ReverseList tests', () => {
  it('should reverse linked list', () => {
    const values = [11, 22, 33, 44]

    const list = createLinkedList(values)
    const reversedList = createLinkedList(values.reverse())

    expect(reverseList(list)).toEqual(reversedList)
  })

  it('should reverse empty linked list', () => {
    const values = []

    const list = createLinkedList(values)
    const reversedList = createLinkedList(values.reverse())

    expect(reverseList(list)).toEqual(reversedList)
  })
})
