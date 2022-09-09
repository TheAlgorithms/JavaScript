import { MiddleOfLL } from '../MiddleOfLinkedList'
import { LinkedList } from '../SinglyLinkedList'

describe('MiddleOfLinkedList', () => {
  it('middle node Of linked list - even length ', () => {
    const list = new LinkedList()
    list.addFirst(1)
    list.addLast(2)
    list.addLast(3)
    list.addLast(4)
    list.addLast(5)
    list.addLast(6)
    list.addLast(7)

    const MiddleNodeOfLinkedList = new MiddleOfLL().solution(list.headNode)
    expect(MiddleNodeOfLinkedList.data).toEqual(4)
  })

  it('middle node of linked list - odd length ', () => {
    const list = new LinkedList()
    list.addFirst(10)
    list.addLast(20)
    list.addLast(30)
    list.addLast(40)
    list.addLast(50)
    list.addLast(60)
    list.addLast(70)
    list.addLast(80)

    const MiddleNodeOfLinkedList = new MiddleOfLL().solution(list.headNode)
    expect(MiddleNodeOfLinkedList.data).toEqual(50)
  })

  it('middle node of linked list - length 1 ', () => {
    const list = new LinkedList()
    list.addFirst(100)

    const MiddleNodeOfLinkedList = new MiddleOfLL().solution(list.headNode)
    expect(MiddleNodeOfLinkedList.data).toEqual(100)
  })
})
