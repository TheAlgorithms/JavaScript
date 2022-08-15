import { AVLTree } from '../AVLTree'

describe('AVLTree Implementation: ', () => {
  const avlTree = new AVLTree()
  const dataList = []
  const demoData = [1, 4, 6, 22, 7, 99, 4, 66, 77, 98]

  const avlStringTree = new AVLTree()
  const collator = new Intl.Collator()
  const stringData = ['S', 'W', 'z', 'B', 'a']

  beforeAll(() => {
    demoData.forEach(item => {
      if (avlTree.add(item)) {
        dataList.push(item)
      }
    })

    avlStringTree._comp = collator.compare
    stringData.forEach(item => avlStringTree.add(item))
  })

  it('checks if element is inserted properly', () => {
    expect(dataList.length).toEqual(avlTree.size)
    expect(stringData.length).toEqual(avlStringTree.size)
  })

  it('search if inserted element is present', () => {
    demoData.forEach(data => {
      expect(avlTree.find(data)).toBeTruthy()
    })
    stringData.forEach(data => {
      expect(avlStringTree.find(data)).toBeTruthy()
    })
  })

  it('deletes the inserted element', () => {
    const deleteElement = dataList[3]
    expect(avlTree.remove(deleteElement)).toBeTruthy()
    expect(avlStringTree.remove(stringData[3])).toBeTruthy()
  })
})
