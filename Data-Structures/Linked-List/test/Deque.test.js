import Deque from '../Deque'

describe('Testing the Deque DS', () => {
  let deque = null

  beforeEach(() => {
    deque = new Deque()
  })

  afterEach(() => {
    deque = null
  })

  it('Testing insertLeft method', () => {
    expect(deque.insertLeft(1)).toBe(1)
    expect(deque.insertLeft(2)).toBe(2)
    expect(deque.insertLeft(8)).toBe(3)
    expect(deque.insertLeft(9)).toBe(4)
  })

  it('Testing insertRight method', () => {
    expect(deque.insertRight(1)).toBe(1)
    expect(deque.insertRight(2)).toBe(2)
    expect(deque.insertRight(8)).toBe(3)
    expect(deque.insertRight(9)).toBe(4)
  })

  it('Testing length after insertLeft', () => {
    expect(deque.insertLeft(1)).toBe(1)
    expect(deque.insertLeft(2)).toBe(2)
    expect(deque.length).toBe(2)
  })

  it('Testing length after insertRight', () => {
    expect(deque.insertRight(1)).toBe(1)
    expect(deque.insertRight(2)).toBe(2)
    expect(deque.length).toBe(2)
  })

  it('Testing length after inserts ', () => {
    expect(deque.insertLeft(1)).toBe(1)
    expect(deque.insertLeft(2)).toBe(2)
    expect(deque.insertRight(1)).toBe(3)
    expect(deque.insertRight(2)).toBe(4)
    expect(deque.length).toBe(4)
  })

  it('Testing peekLeft & peekRight methods', () => {
    expect(deque.insertLeft(1)).toBe(1)
    expect(deque.insertLeft(2)).toBe(2)
    expect(deque.insertRight(1)).toBe(3)
    expect(deque.insertRight(2)).toBe(4)
    expect(deque.peekLeft()).toBe(2)
    expect(deque.peekRight()).toBe(2)
  })

  it('Testing toArray method', () => {
    expect(deque.insertLeft(1)).toBe(1)
    expect(deque.insertLeft(2)).toBe(2)
    expect(deque.insertRight(1)).toBe(3)
    expect(deque.insertRight(2)).toBe(4)
    expect(deque.toArray()).toEqual([2, 1, 1, 2])
  })

  it('Testing popLeft method', () => {
    expect(deque.insertLeft(1)).toBe(1)
    expect(deque.insertLeft(2)).toBe(2)
    expect(deque.insertRight(1)).toBe(3)
    expect(deque.insertRight(2)).toBe(4)
    expect(deque.popLeft()).toBe(2)
    expect(deque.popLeft()).toBe(1)
  })

  it('Testing length after popLeft', () => {
    expect(deque.insertLeft(1)).toBe(1)
    expect(deque.insertLeft(2)).toBe(2)
    expect(deque.insertRight(1)).toBe(3)
    expect(deque.insertRight(2)).toBe(4)
    expect(deque.popLeft()).toBe(2)
    expect(deque.popLeft()).toBe(1)
    expect(deque.length).toBe(2)
  })

  it('Testing popRight method', () => {
    expect(deque.insertLeft(1)).toBe(1)
    expect(deque.insertLeft(2)).toBe(2)
    expect(deque.insertRight(1)).toBe(3)
    expect(deque.insertRight(2)).toBe(4)
    expect(deque.popRight()).toBe(2)
    expect(deque.popRight()).toBe(1)
  })

  it('Testing length after popRight', () => {
    expect(deque.insertLeft(1)).toBe(1)
    expect(deque.insertLeft(2)).toBe(2)
    expect(deque.insertRight(1)).toBe(3)
    expect(deque.insertRight(2)).toBe(4)
    expect(deque.popRight()).toBe(2)
    expect(deque.popRight()).toBe(1)
    expect(deque.length).toBe(2)
  })

  it('Testing isEmpty method', () => {
    const deque = new Deque()
    expect(deque.isEmpty()).toBeTruthy()

    deque.insertLeft(1)
    deque.insertLeft(2)
    deque.insertLeft(8)
    deque.insertLeft(9)

    expect(deque.isEmpty()).toBeFalsy()
  })
})
