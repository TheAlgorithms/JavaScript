import { UnionFind } from '../UnionFind'

const uf = new UnionFind(5)

test('should expose .size():', () => {
  const size = uf.size()
  expect(size).toBe(5)
})

test('should do .union(num1, num2):', () => {
  uf.union(1, 2)
  uf.union(3, 4)
  uf.union(0, 4)
  expect(uf.connected(1, 2)).toBe(true)
  expect(uf.connected(1, 2)).toBe(true)

  expect(uf.connected(3, 4)).toBe(true)
  expect(uf.connected(3, 0)).toBe(true)
  expect(uf.connected(4, 0)).toBe(true)

  expect(uf.connected(1, 3)).toBe(false)
  expect(uf.connected(1, 4)).toBe(false)
  expect(uf.connected(1, 0)).toBe(false)
  expect(uf.connected(2, 3)).toBe(false)
  expect(uf.connected(2, 4)).toBe(false)
  expect(uf.connected(2, 0)).toBe(false)
})

test('.count(), should return the number of disparate groups:', () => {
  expect(uf.count()).toBe(2)
})

test('should check if two components are connected, .connected(num1, num2):', () => {
  expect(uf.connected(1, 2)).toBe(true)
  expect(uf.connected(1, 3)).toBe(false)
})

test('should find the root of the tree in which the given element lives, .find(num):', () => {
  expect(uf.find(1)).toBe(1)
  expect(uf.find(2)).toBe(1)
  expect(uf.find(3)).toBe(3)
  expect(uf.find(4)).toBe(3)
  expect(uf.find(0)).toBe(3)
})

test('should always change the id of the smaller tree and preserve the id of the larger one', () => {
  uf.union(2, 3)
  expect(uf.count()).toBe(1)
  expect(uf.find(0)).toBe(3)
  expect(uf.find(1)).toBe(3)
  expect(uf.find(2)).toBe(3)
  expect(uf.find(3)).toBe(3)
  expect(uf.find(4)).toBe(3)
})
