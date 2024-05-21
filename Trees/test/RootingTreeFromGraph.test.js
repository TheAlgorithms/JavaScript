import {rootTree} from '../RootingTreeFromGraph'

describe('Test 1', () =>{
    /* Graph structure:
    *
    *   0      3 - 4
    *     \   /
    *       1
    *      /
    *     2
    */
    const myGraph = [[1,1,0,0,0],
                    [1,1,1,1,0],
                    [0,1,1,0,0],
                    [0,1,0,1,1],
                    [0,0,0,1,1]]

    it('testing', () => {
        const res = rootTree(myGraph)
        expect(res.id).toStrictEqual(0)
        expect(res.children.length).toStrictEqual(1)
        expect(res.children[0].id).toStrictEqual(1)
        expect(res.children[0].children.length).toStrictEqual(2)
        expect(res.children[0].children[0].id).toStrictEqual(2)
        expect(res.children[0].children[1].id).toStrictEqual(3)
        expect(res.children[0].children[1].children.length).toStrictEqual(1)
        expect(res.children[0].children[1].children[0].id).toStrictEqual(4)
    })
})