import { AVLTree } from '../AVLTree'

describe('AVLTree Implementation: ', () => {
    const avlTree = new AVLTree();
    const size = Math.floor(Math.random() * 10);
    const dataList = [];

    beforeAll(() => {
        for (let i = 0; i < size; i++) {
            const insertedData = Math.floor(Math.random() * Number.MAX_VALUE)
            if (avlTree.add(insertedData)) {
                dataList.push(insertedData);
            }
        }
    })

    it('checks if element is inserted properly', () => {
        expect(dataList.length).toEqual(avlTree.size);
    })

    it('search if inserted element is present', () => {
        dataList.forEach(data => {
            expect(avlTree.find(data)).toBeTruthy();
        })
    })

    it('deletes the inserted element', () => {
        const deleteElement = dataList[Math.floor(Math.random() * size)];
        expect(avlTree.remove(deleteElement)).toBeTruthy();
    })
})

