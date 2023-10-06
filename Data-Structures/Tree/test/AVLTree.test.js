import { AVLTree } from '../AVLTree'

describe('AVLTree Implementation: ', () => {
  const avlTree = new AVLTree()
  const dataList = []
  const demoData = [1, 4, 6, 22, 7, 99, 4, 66, 77, 98, 87, 54, 32, 15]

  const avlStringTree = new AVLTree()
  const collator = new Intl.Collator()
  const stringData = ['S', 'W', 'z', 'B', 'a']

  const emptyTree = new AVLTree(collator.compare)

  beforeAll(() => {
    demoData.forEach((item) => {
      if (avlTree.add(item)) {
        dataList.push(item)
      }
    })

    avlStringTree._comp = collator.compare
    stringData.forEach((item) => avlStringTree.add(item))
  })

  it('delete and search from empty tree', () => {
    expect(emptyTree.remove(0)).toBeFalsy()
    expect(emptyTree.find(0)).toBeFalsy()
  })

  it('checks if element is inserted properly', () => {
    expect(dataList.length).toEqual(avlTree.size)
    expect(stringData.length).toEqual(avlStringTree.size)
  })

  it('search if inserted element is present', () => {
    demoData.forEach((data) => {
      expect(avlTree.find(data)).toBeTruthy()
    })
    stringData.forEach((data) => {
      expect(avlStringTree.find(data)).toBeTruthy()
    })
  })

  it('delete element with two valid children', () => {
    expect(avlTree.remove(77)).toBeTruthy()
  })

  it('delete element missing L-child', () => {
    expect(avlTree.remove(98)).toBeTruthy()
  })

  it('delete elements forcing single R-rotation', () => {
    expect(avlTree.remove(99)).toBeTruthy()
    expect(avlTree.remove(87)).toBeTruthy()
  })

  it('delete elements forcing R-rotation and L-rotation', () => {
    expect(avlTree.remove(1)).toBeTruthy()
    expect(avlTree.remove(4)).toBeTruthy()
  })

  it('delete elements forcing single L-rotation', () => {
    expect(avlTree.remove(7)).toBeTruthy()
    expect(avlTree.remove(15)).toBeTruthy()
    expect(avlTree.remove(6)).toBeTruthy()
  })

  it('delete element forcing single L-rotation and R-rotation', () => {
    expect(avlTree.remove(66)).toBeTruthy()
  })
})
